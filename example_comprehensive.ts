import "bun";
import { SlackClient } from "./src";

const slack = await SlackClient.create({
  token: Bun.env.SLACK_TOKEN!,
  cookie: Bun.env.SLACK_COOKIE!,
});

// ── Auth ───────────────────────────────────────────────────────────────────

const me = await slack.authTest();
console.log(`\n👤 Logged in as ${me.user} (${me.user_id}) - ${me.team} (${me.team_id})`);

// ── Profile ────────────────────────────────────────────────────────────────

const profile = await slack.usersProfileGet({ user: me.user_id });
console.log(`\n📇 Profile: ${profile.profile?.real_name} — ${profile.profile?.status_emoji} ${profile.profile?.status_text || "(no status)"}`);

// ── Unread counts ──────────────────────────────────────────────────────────

const counts = await slack.clientCounts({ include_all_unreads: true });
console.log(`\n📊 Unreads:`);
console.log(`   Channels: ${counts.channels?.length ?? 0}`);
console.log(`   DMs:      ${counts.ims?.length ?? 0}`);
console.log(`   Group DMs: ${counts.mpims?.length ?? 0}`);

// ── List channels ──────────────────────────────────────────────────────────

const sections = await slack.usersChannelSectionsList();
const allChannelIds = sections.channel_sections.flatMap((s) => s.channel_ids_page.channel_ids);
console.log(`\n📋 Channels: ${allChannelIds.length} across ${sections.channel_sections.length} sections`);
for (const section of sections.channel_sections.slice(0, 5)) {
  console.log(`   📂 ${section.name || "(default)"} — ${section.channel_ids_page.count} channels`);
}

// ── Recent DMs ─────────────────────────────────────────────────────────────

const dms = await slack.clientDms({ count: 5 });
console.log(`\n💬 Recent DMs: ${dms.ims?.length ?? 0} loaded`);

// ── Channel history ────────────────────────────────────────────────────────

const firstChannelId = allChannelIds[0];
if (firstChannelId) {
  const history = await slack.conversationsHistory({ channel: firstChannelId, limit: 5 });
  type Message = { text?: string; user?: string; reply_count?: number; ts?: string };
  console.log(`\n📜 Last 5 messages in ${firstChannelId}:`);
  for (const msg of history.messages as Message[]) {
    const preview = (msg.text ?? "").slice(0, 80).replace(/\n/g, " ");
    console.log(`   [${msg.user ?? "bot"}] ${preview}${(msg.text?.length ?? 0) > 80 ? "…" : ""}`);
  }

  // ── Thread replies ─────────────────────────────────────────────────────

  const threaded = (history.messages as Message[]).find((m) => m.reply_count && m.reply_count > 0);
  if (threaded) {
    const replies = await slack.conversationsReplies({
      channel: firstChannelId,
      ts: threaded.ts!,
      limit: 3,
    });
    console.log(`\n🧵 Thread (${threaded.reply_count} replies):`);
    for (const r of (replies.messages ?? []).slice(1)) {
      const preview = (r.text ?? "").slice(0, 80).replace(/\n/g, " ");
      console.log(`   ↳ [${r.user ?? "bot"}] ${preview}`);
    }
  }
}

// ── User info ──────────────────────────────────────────────────────────────

const userInfo = await slack.usersInfo({ user: me.user_id });
console.log(`\n🧑 User info: ${userInfo.user?.real_name} (tz: ${userInfo.user?.tz})`);

// ── Stars ──────────────────────────────────────────────────────────────────

const prefs = await slack.usersPrefsGet();
console.log(`\n⚙️  Locale: ${prefs.prefs?.locale}`);

// ── Team info ──────────────────────────────────────────────────────────────

const teamInfo = await slack.teamInfo({ teams: me.team_id });
const team = teamInfo.teams?.[0];
console.log(`\n🏢 Team: ${team?.name} (${team?.domain}.slack.com)`);

// ── Search ─────────────────────────────────────────────────────────────────

const search = await slack.searchModulesMessages({ module: "messages", query: "hello", count: 3 });
console.log(`\n🔍 Search "hello": ${search.pagination?.total_count ?? 0} results`);
