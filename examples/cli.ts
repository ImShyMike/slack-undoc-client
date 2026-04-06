/* This file is pretty much just a vibecoded PoC :sob: */

import "bun";
import { SlackClient, type SlackWorkspaceTeam } from "../src";

const cookie = Bun.env.SLACK_COOKIE!;

// ── Helpers ────────────────────────────────────────────────────────────────

function ask(question: string): string {
  const answer = prompt(question);
  if (answer === null) {
    console.log("\nBye!");
    process.exit(0);
  }
  return answer.trim();
}

function pick(question: string, max: number): number {
  const input = ask(question);
  if (input === "q" || input === "b") return -1;
  const n = parseInt(input, 10);
  if (isNaN(n) || n < 1 || n > max) {
    console.log("  Invalid selection");
    return -2;
  }
  return n - 1;
}

function formatTs(ts: string): string {
  return new Date(parseFloat(ts) * 1000).toLocaleString();
}

function truncate(text: string, len = 100): string {
  const oneline = text.replace(/\n/g, " ");
  return oneline.length > len ? oneline.slice(0, len) + "…" : oneline;
}

// ── User cache ─────────────────────────────────────────────────────────────

const userCache = new Map<string, string>();

async function resolveUser(slack: SlackClient, userId: string): Promise<string> {
  if (userCache.has(userId)) return userCache.get(userId)!;
  try {
    const info = await slack.usersInfo({ user: userId });
    const name = info.user?.profile?.display_name || info.user?.real_name || info.user?.name || userId;
    userCache.set(userId, name);
    return name;
  } catch {
    userCache.set(userId, userId);
    return userId;
  }
}

// ── Workspace selection ────────────────────────────────────────────────────

console.log("⏳ Fetching workspaces...");
const workspaces = await SlackClient.fetchAvailableWorkspaces(cookie);

console.log("\n🏢 Available workspaces:\n");
for (const [i, team] of workspaces.entries()) {
  const enterprise = team.enterprise_name ? ` (${team.enterprise_name})` : "";
  console.log(`  ${i + 1}. ${team.name}${enterprise} — ${team.domain}.slack.com`);
}

let selected: SlackWorkspaceTeam;
while (true) {
  const idx = pick("\nSelect a workspace (number):", workspaces.length);
  if (idx === -1) process.exit(0);
  if (idx === -2) continue;
  selected = workspaces[idx];
  break;
}

console.log(`\n⏳ Connecting to ${selected.name}...`);
const slack = await SlackClient.createFromTeam(selected, { cookie });
const me = await slack.authTest();
console.log(`✅ Logged in as ${me.user} (${me.user_id}) on ${me.team}`);
userCache.set(me.user_id, me.user!);

// ── Boot data (bulk channel + DM info) ────────────────────────────────────

console.log(`⏳ Loading workspace data...`);
const boot = await slack.clientUserBoot();

type BootChannel = (typeof boot.channels)[number];
type BootIm = (typeof boot.ims)[number];

const channelMap = new Map<string, BootChannel>();
for (const ch of boot.channels) channelMap.set(ch.id, ch);

const imMap = new Map<string, BootIm>();
for (const im of boot.ims) imMap.set(im.id, im);

console.log(`✅ Loaded ${channelMap.size} channels, ${imMap.size} DMs\n`);

// ── Main loop ──────────────────────────────────────────────────────────────

while (true) {
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  1. 📂 Browse channels (by section)");
  console.log("  2. 💬 Recent DMs");
  console.log("  3. 🔍 Search messages");
  console.log("  4. 👤 My profile");
  console.log("  5. 📊 Unread counts");
  console.log("  q. Quit");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  const choice = ask("\nChoice:");

  switch (choice) {
    case "1": await browseChannels(); break;
    case "2": await recentDms(); break;
    case "3": await searchMessages(); break;
    case "4": await myProfile(); break;
    case "5": await unreadCounts(); break;
    case "q": console.log("Bye!"); process.exit(0);
    default: console.log("  Invalid choice");
  }
}

// ── Browse channels ────────────────────────────────────────────────────────

async function browseChannels() {
  console.log("\n⏳ Loading channel sections...");
  const sections = await slack.usersChannelSectionsList();

  while (true) {
    console.log("\n📂 Channel Sections:\n");
    for (const [i, section] of sections.channel_sections.entries()) {
      const name = section.name || "(default)";
      console.log(`  ${i + 1}. ${name} — ${section.channel_ids_page.count} channels`);
    }
    console.log(`\n  b. Back`);

    const sIdx = pick("\nSelect a section:", sections.channel_sections.length);
    if (sIdx < 0) return;

    const section = sections.channel_sections[sIdx];
    const channelIds = section.channel_ids_page.channel_ids;

    if (channelIds.length === 0) {
      console.log("  (no channels in this section)");
      continue;
    }

    // Look up channels from boot data (no extra API calls)
    const channels = channelIds
      .map((id) => channelMap.get(id))
      .filter((ch): ch is BootChannel => ch != null);

    while (true) {
      console.log(`\n📋 ${section.name || "(default)"} channels:\n`);
      for (const [i, ch] of channels.entries()) {
        const topic = ch.topic?.value ? ` — ${truncate(ch.topic.value, 50)}` : "";
        console.log(`  ${i + 1}. #${ch.name}${topic}`);
      }
      console.log(`\n  b. Back`);

      const cIdx = pick("\nOpen channel:", channels.length);
      if (cIdx < 0) break;

      await viewChannel(channels[cIdx].id, channels[cIdx].name);
    }
  }
}

// ── View channel messages ──────────────────────────────────────────────────

async function viewChannel(channelId: string, channelName: string) {
  console.log(`\n⏳ Loading messages from #${channelName}...`);
  const history = await slack.conversationsHistory({ channel: channelId, limit: 15 });
  const messages = history.messages;

  if (!messages.length) {
    console.log("  (no messages)");
    return;
  }

  while (true) {
    console.log(`\n📜 #${channelName} — last ${messages.length} messages:\n`);

    for (const [i, msg] of messages.entries()) {
      const name = await resolveUser(slack, msg.user);
      const time = formatTs(msg.ts);
      const thread = msg.reply_count ? ` 🧵 ${msg.reply_count} replies` : "";
      const reactions = msg.reactions?.map((r) => `${r.name}×${r.count}`).join(" ") ?? "";
      const reactionStr = reactions ? ` [${reactions}]` : "";
      console.log(`  ${i + 1}. [${time}] ${name}: ${truncate(msg.text)}${thread}${reactionStr}`);
    }
    console.log(`\n  Enter a number to view thread, or b to go back`);

    const mIdx = pick("\nView thread:", messages.length);
    if (mIdx < 0) return;

    const msg = messages[mIdx];
    if (msg.reply_count && msg.reply_count > 0) {
      await viewThread(channelId, channelName, msg.ts, msg.reply_count);
    } else {
      // Show full message
      const name = await resolveUser(slack, msg.user);
      console.log(`\n────────────────────────────────────────`);
      console.log(`  From: ${name}`);
      console.log(`  Time: ${formatTs(msg.ts)}`);
      console.log(`  ────`);
      console.log(`  ${msg.text}`);
      if (msg.reactions?.length) {
        console.log(`  ────`);
        console.log(`  Reactions: ${msg.reactions.map((r) => `${r.name}×${r.count}`).join(", ")}`);
      }
      console.log(`────────────────────────────────────────`);
    }
  }
}

// ── View thread ────────────────────────────────────────────────────────────

async function viewThread(channelId: string, channelName: string, threadTs: string, replyCount: number) {
  console.log(`\n⏳ Loading thread (${replyCount} replies)...`);
  const replies = await slack.conversationsReplies({
    channel: channelId,
    ts: threadTs,
    limit: 50,
  });

  console.log(`\n🧵 Thread in #${channelName}:\n`);

  for (const [i, msg] of replies.messages.entries()) {
    const name = await resolveUser(slack, msg.user);
    const time = formatTs(msg.ts);
    const prefix = i === 0 ? "  ┌" : i === replies.messages.length - 1 ? "  └" : "  │";
    const reactions = msg.reactions?.map((r) => `${r.name}×${r.count}`).join(" ") ?? "";
    const reactionStr = reactions ? ` [${reactions}]` : "";
    console.log(`${prefix} [${time}] ${name}: ${truncate(msg.text, 80)}${reactionStr}`);
  }

  ask("\n  Press enter to go back");
}

// ── Recent DMs ─────────────────────────────────────────────────────────────

async function recentDms() {
  // Sort boot DMs by most recently updated
  const sorted = [...boot.ims]
    .sort((a, b) => b.updated - a.updated)
    .slice(0, 20);

  if (!sorted.length) {
    console.log("  (no DMs)");
    return;
  }

  // Resolve user names from boot DM user IDs
  console.log("⏳ Resolving DM contacts...");
  const dmInfo = await Promise.all(
    sorted.map(async (dm) => {
      const userName = await resolveUser(slack, dm.user);
      return { ...dm, userName };
    })
  );

  while (true) {
    console.log(`\n💬 Recent DMs:\n`);
    for (const [i, dm] of dmInfo.entries()) {
      const open = dm.is_open ? "" : " (closed)";
      console.log(`  ${i + 1}. ${dm.userName}${open}`);
    }
    console.log(`\n  b. Back`);

    const idx = pick("\nOpen DM:", dmInfo.length);
    if (idx < 0) return;

    await viewChannel(dmInfo[idx].id, dmInfo[idx].userName);
  }
}

// ── Search ─────────────────────────────────────────────────────────────────

async function searchMessages() {
  const query = ask("\n🔍 Search query:");
  if (!query) return;

  console.log(`\n⏳ Searching for "${query}"...`);
  const results = await slack.searchModulesMessages({ module: "messages", query, count: 10 });

  const items = (results as any).items ?? [];
  if (!items.length) {
    console.log("  No results found.");
    return;
  }

  console.log(`\n🔍 Results (${(results as any).pagination?.total_count ?? items.length} total):\n`);
  for (const [i, item] of items.entries()) {
    const msg = item.message ?? item;
    const name = msg.username ?? msg.user ?? "unknown";
    const channel = item.channel?.name ? `#${item.channel.name}` : "";
    const time = msg.ts ? formatTs(msg.ts) : "";
    console.log(`  ${i + 1}. ${channel} [${time}] ${name}: ${truncate(msg.text ?? "", 80)}`);
  }

  ask("\n  Press enter to go back");
}

// ── Profile ────────────────────────────────────────────────────────────────

async function myProfile() {
  const profile = await slack.usersProfileGet({ user: me.user_id });
  const p = profile.profile;

  console.log(`\n👤 My Profile:`);
  console.log(`  ────────────────────────────────────`);
  console.log(`  Name:     ${p?.real_name ?? "?"}`);
  console.log(`  Display:  ${p?.display_name ?? "?"}`);
  console.log(`  Title:    ${p?.title || "(none)"}`);
  console.log(`  Status:   ${p?.status_emoji ?? ""} ${p?.status_text || "(none)"}`);
  console.log(`  Phone:    ${p?.phone || "(none)"}`);
  console.log(`  ────────────────────────────────────`);

  ask("\n  Press enter to go back");
}

// ── Unread counts ──────────────────────────────────────────────────────────

async function unreadCounts() {
  const counts = await slack.clientCounts({ include_all_unreads: true });

  const unreadChannels = counts.channels.filter((c) => c.has_unreads);
  const unreadDms = counts.ims.filter((c) => c.has_unreads);
  const unreadMpims = counts.mpims.filter((c) => c.has_unreads);
  const totalMentions = counts.channels.reduce((sum, c) => sum + c.mention_count, 0)
    + counts.ims.reduce((sum, c) => sum + c.mention_count, 0);

  console.log(`\n📊 Unread Summary:`);
  console.log(`  ────────────────────────────────────`);
  console.log(`  Channels with unreads: ${unreadChannels.length}`);
  console.log(`  DMs with unreads:      ${unreadDms.length}`);
  console.log(`  Group DMs with unreads: ${unreadMpims.length}`);
  console.log(`  Total mentions:        ${totalMentions}`);
  console.log(`  Thread unreads:        ${counts.threads.has_unreads ? `yes (${counts.threads.mention_count} mentions)` : "none"}`);
  console.log(`  ────────────────────────────────────`);

  ask("\n  Press enter to go back");
}
