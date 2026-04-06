import "bun";
import { SlackClient } from "../src";

const cookie = Bun.env.SLACK_COOKIE!;

const workspaces = await SlackClient.fetchAvailableWorkspaces(cookie);

console.log("Available workspaces:\n");
for (const [i, team] of workspaces.entries()) {
  const enterprise = team.enterprise_name ? ` (${team.enterprise_name})` : "";
  console.log(`  ${i + 1}. ${team.name}${enterprise} — ${team.domain}.slack.com`);
}

const input = prompt("\nSelect a workspace (number):");

const index = parseInt(input ?? "", 10) - 1;
if (isNaN(index) || index < 0 || index >= workspaces.length) {
  console.error("Invalid selection");
  process.exit(1);
}

const selected = workspaces[index];
console.log(`\nConnecting to ${selected.name}...`);

const slack = await SlackClient.createFromTeam(selected, { cookie });
const me = await slack.authTest();

console.log(`Logged in as ${me.user} (${me.user_id}) on ${me.team}`);
console.log(`Team info:`, slack.selectedTeam?.name, `(${slack.selectedTeam?.domain})`);
