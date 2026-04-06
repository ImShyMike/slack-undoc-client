

import "bun";
import { SlackClient } from "../src";

const slack = await SlackClient.create({
  cookie: Bun.env.SLACK_COOKIE!,
  workspace: "hackclub",
  validate: false
});

console.log("Token:", slack.token);

const me = await slack.authTest();
console.log(`Logged in as ${me.user} (${me.user_id}) - ${me.team} (${me.team_id})`);

const counts = await slack.clientCounts({ include_all_unreads: true });
console.log("Channels:", counts.channels.length);
console.log("DMs:", counts.ims.length);
console.log("Group DMs:", counts.mpims.length);

const channelInfo = await slack.conversationsInfo({ channel: "C0C78SG9L" });
console.log("Channel name:", channelInfo.channel);
