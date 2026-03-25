// Auto-generated - do not edit manually
// Generated: 2026-03-18T16:38:50.724Z
// Method count: 468
// Hash: 1393dd696684b7576abd46c404bfc170

import type { SlackApiMap, SlackErrorResponse } from "./types";

export class SlackApiError extends Error {
  readonly code: string;
  readonly method: string;

  constructor(method: string, code: string) {
    super(`Slack API error: ${method} returned ${code}`);
    this.name = "SlackApiError";
    this.code = code;
    this.method = method;
  }
}

export interface SlackClientOptions {
  /** The `d` cookie value -> xoxp */
  cookie: string;
  /** Workspace name */
  workspace?: string;
  /** The session token -> xoxc */
  token?: string;
  /** Whether to validate the token on initialization */
  validate?: boolean;
  /** Custom fetch implementation */
  fetch?: typeof globalThis.fetch;
}

export class SlackClient {
  public token: string;
  public workspace: string | undefined;
  public cookie: string | undefined;
  private fetch: typeof globalThis.fetch;

  private constructor(token: string, options: SlackClientOptions) {
    this.token = token;
    this.cookie = options.cookie;
    this.workspace = options.workspace;
    this.fetch = options.fetch ?? globalThis.fetch.bind(globalThis);
  }

  static async create(options: SlackClientOptions): Promise<SlackClient> {
    let token: string;

    if (options.token) {
      token = options.token;
    } else {
      if (!options.workspace) {
        throw new Error("Either token or workspace must be provided");
      }

      const res = await fetch(`https://${options.workspace}.slack.com`, {
        headers: {
          "cookie": `d=${encodeURIComponent(options.cookie ?? "")}`,
        },
      });

      const text = await res.text();
      const tokens = Array.from(text.matchAll(/(xoxc-[a-zA-Z0-9-]+)/g)).map(m => m[0]);
      
      if (tokens.length === 0) {
        throw new Error("Failed to extract token from workspace page");
      }
      
      token = tokens[1];
    }

    const client = new SlackClient(token, options);

    if (options.validate) {
      await client.call("auth.test");
    }

    return client;
  }

  private async rawCall(method: string, params?: Record<string, unknown>): Promise<Record<string, unknown>> {
    const form = new URLSearchParams();
    form.set("token", this.token);
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        if (v !== undefined && v !== null) form.set(k, String(v));
      }
    }
    const headers: Record<string, string> = {
      "content-type": "application/x-www-form-urlencoded",
    };
    if (this.cookie) {
      headers["cookie"] = `d=${encodeURIComponent(this.cookie)}`;
    }
    const res = await this.fetch(`https://slack.com/api/${method}`, {
      method: "POST",
      headers,
      body: form,
    });
    if (!res.ok) {
      throw new Error(`Slack API HTTP error: ${res.status} ${res.statusText}`);
    }
    return res.json() as Promise<Record<string, unknown>>;
  }

  async call<M extends keyof SlackApiMap>(
    method: M,
    ...args: SlackApiMap[M]["params"] extends void ? [] : [params?: SlackApiMap[M]["params"]]
  ): Promise<SlackApiMap[M]["response"]> {
    const data = await this.rawCall(method, args[0] as Record<string, unknown> | undefined);
    if (!data.ok) {
      throw new SlackApiError(method, (data.error as string) ?? "unknown_error");
    }
    return data as SlackApiMap[M]["response"];
  }

  async callSafe<M extends keyof SlackApiMap>(
    method: M,
    ...args: SlackApiMap[M]["params"] extends void ? [] : [params?: SlackApiMap[M]["params"]]
  ): Promise<SlackApiMap[M]["response"] | SlackErrorResponse> {
    const data = await this.rawCall(method, args[0] as Record<string, unknown> | undefined);
    return data as SlackApiMap[M]["response"] | SlackErrorResponse;
  }

  async callUnknown<R>(method: string, params?: Record<string, unknown>): Promise<R> {
    return this.call(method as any, params);
  }

  activityFeed(params?: SlackApiMap["activity.feed"]["params"]) {
    return this.call("activity.feed", params);
  }

  activityMarkRead(params?: SlackApiMap["activity.markRead"]["params"]) {
    return this.call("activity.markRead", params);
  }

  activityViews() {
    return this.call("activity.views");
  }

  adminAccountTypePermissionsAdd(params?: SlackApiMap["admin.accountType.permissions.add"]["params"]) {
    return this.call("admin.accountType.permissions.add", params);
  }

  adminAccountTypePermissionsList(params?: SlackApiMap["admin.accountType.permissions.list"]["params"]) {
    return this.call("admin.accountType.permissions.list", params);
  }

  adminAccountTypePermissionsRemove(params?: SlackApiMap["admin.accountType.permissions.remove"]["params"]) {
    return this.call("admin.accountType.permissions.remove", params);
  }

  adminActivityLogsList(params?: SlackApiMap["admin.activity.logs.list"]["params"]) {
    return this.call("admin.activity.logs.list", params);
  }

  adminAnalyticsExport(params?: SlackApiMap["admin.analytics.export"]["params"]) {
    return this.call("admin.analytics.export", params);
  }

  adminAnalyticsGetAppsAnalytics(params?: SlackApiMap["admin.analytics.getAppsAnalytics"]["params"]) {
    return this.call("admin.analytics.getAppsAnalytics", params);
  }

  adminAnalyticsGetAvailableDateRange(params?: SlackApiMap["admin.analytics.getAvailableDateRange"]["params"]) {
    return this.call("admin.analytics.getAvailableDateRange", params);
  }

  adminAnalyticsGetChannelAnalytics(params?: SlackApiMap["admin.analytics.getChannelAnalytics"]["params"]) {
    return this.call("admin.analytics.getChannelAnalytics", params);
  }

  adminAnalyticsGetMemberAnalytics(params?: SlackApiMap["admin.analytics.getMemberAnalytics"]["params"]) {
    return this.call("admin.analytics.getMemberAnalytics", params);
  }

  adminAppsCertifiedList() {
    return this.call("admin.apps.certified.list");
  }

  adminAppsConfigLookup(params?: SlackApiMap["admin.apps.config.lookup"]["params"]) {
    return this.call("admin.apps.config.lookup", params);
  }

  adminAppsConfigSet(params?: SlackApiMap["admin.apps.config.set"]["params"]) {
    return this.call("admin.apps.config.set", params);
  }

  adminAppsInstalledList(params?: SlackApiMap["admin.apps.installed.list"]["params"]) {
    return this.call("admin.apps.installed.list", params);
  }

  adminAppsLookup(params?: SlackApiMap["admin.apps.lookup"]["params"]) {
    return this.call("admin.apps.lookup", params);
  }

  adminAppsRecommendAdd(params?: SlackApiMap["admin.apps.recommend.add"]["params"]) {
    return this.call("admin.apps.recommend.add", params);
  }

  adminAppsRecommendList(params?: SlackApiMap["admin.apps.recommend.list"]["params"]) {
    return this.call("admin.apps.recommend.list", params);
  }

  adminAppsRecommendRemove(params?: SlackApiMap["admin.apps.recommend.remove"]["params"]) {
    return this.call("admin.apps.recommend.remove", params);
  }

  adminAppsSearch(params?: SlackApiMap["admin.apps.search"]["params"]) {
    return this.call("admin.apps.search", params);
  }

  adminAppsUninstall(params?: SlackApiMap["admin.apps.uninstall"]["params"]) {
    return this.call("admin.apps.uninstall", params);
  }

  adminBillingSettingsBoot() {
    return this.call("admin.billing.settings.boot");
  }

  adminDeprecationsList(params?: SlackApiMap["admin.deprecations.list"]["params"]) {
    return this.call("admin.deprecations.list", params);
  }

  adminFeaturesList() {
    return this.call("admin.features.list");
  }

  adminFeaturesPermissionsList(params?: SlackApiMap["admin.features.permissions.list"]["params"]) {
    return this.call("admin.features.permissions.list", params);
  }

  adminFunctionsList(params?: SlackApiMap["admin.functions.list"]["params"]) {
    return this.call("admin.functions.list", params);
  }

  adminRolesAddMembers(params?: SlackApiMap["admin.roles.addMembers"]["params"]) {
    return this.call("admin.roles.addMembers", params);
  }

  adminRolesEntityListAssignments(params?: SlackApiMap["admin.roles.entity.listAssignments"]["params"]) {
    return this.call("admin.roles.entity.listAssignments", params);
  }

  adminRolesList(params?: SlackApiMap["admin.roles.list"]["params"]) {
    return this.call("admin.roles.list", params);
  }

  adminRolesRemoveMembers(params?: SlackApiMap["admin.roles.removeMembers"]["params"]) {
    return this.call("admin.roles.removeMembers", params);
  }

  adminSessionsAccessLogs(params?: SlackApiMap["admin.sessions.accessLogs"]["params"]) {
    return this.call("admin.sessions.accessLogs", params);
  }

  adminWorkflowsSearch(params?: SlackApiMap["admin.workflows.search"]["params"]) {
    return this.call("admin.workflows.search", params);
  }

  adminWorkflowsTriggersTypesList(params?: SlackApiMap["admin.workflows.triggers.types.list"]["params"]) {
    return this.call("admin.workflows.triggers.types.list", params);
  }

  adminWorkflowsTriggersTypesPermissionsLookup(params?: SlackApiMap["admin.workflows.triggers.types.permissions.lookup"]["params"]) {
    return this.call("admin.workflows.triggers.types.permissions.lookup", params);
  }

  adminWorkflowsTriggersTypesPermissionsSet(params?: SlackApiMap["admin.workflows.triggers.types.permissions.set"]["params"]) {
    return this.call("admin.workflows.triggers.types.permissions.set", params);
  }

  aiAlphaAgentsThreadsList() {
    return this.call("ai.alpha.agents.threads.list");
  }

  aiAlphaDigestList() {
    return this.call("ai.alpha.digest.list");
  }

  aiAlphaDigestListDigestChannelIds() {
    return this.call("ai.alpha.digest.listDigestChannelIds");
  }

  aiAlphaSummarizeChannelUnreads(params?: SlackApiMap["ai.alpha.summarize.channelUnreads"]["params"]) {
    return this.call("ai.alpha.summarize.channelUnreads", params);
  }

  aiAlphaTranslateLocales() {
    return this.call("ai.alpha.translate.locales");
  }

  aiFeedbackRequest(params?: SlackApiMap["ai.feedback.request"]["params"]) {
    return this.call("ai.feedback.request", params);
  }

  aiAppsList(params?: SlackApiMap["aiApps.list"]["params"]) {
    return this.call("aiApps.list", params);
  }

  apiFeatures(params?: SlackApiMap["api.features"]["params"]) {
    return this.call("api.features", params);
  }

  apiGetFlannelHttpUrl(params?: SlackApiMap["api.getFlannelHttpUrl"]["params"]) {
    return this.call("api.getFlannelHttpUrl", params);
  }

  appUninstallTasksList() {
    return this.call("app.uninstallTasks.list");
  }

  appsActionsListForResource(params?: SlackApiMap["apps.actions.listForResource"]["params"]) {
    return this.call("apps.actions.listForResource", params);
  }

  appsActionsV2Execute(params?: SlackApiMap["apps.actions.v2.execute"]["params"]) {
    return this.call("apps.actions.v2.execute", params);
  }

  appsAuthExternalUserAuthsGet() {
    return this.call("apps.auth.external.userAuths.get");
  }

  appsCertifiedList() {
    return this.call("apps.certified.list");
  }

  appsHomeDispatchOpenEvent(params?: SlackApiMap["apps.home.dispatchOpenEvent"]["params"]) {
    return this.call("apps.home.dispatchOpenEvent", params);
  }

  appsIndexFiltersList(params?: SlackApiMap["apps.index.filters.list"]["params"]) {
    return this.call("apps.index.filters.list", params);
  }

  appsIndexList(params?: SlackApiMap["apps.index.list"]["params"]) {
    return this.call("apps.index.list", params);
  }

  appsIndexSearch(params?: SlackApiMap["apps.index.search"]["params"]) {
    return this.call("apps.index.search", params);
  }

  appsManifestCreate(params?: SlackApiMap["apps.manifest.create"]["params"]) {
    return this.call("apps.manifest.create", params);
  }

  appsManifestExport(params?: SlackApiMap["apps.manifest.export"]["params"]) {
    return this.call("apps.manifest.export", params);
  }

  appsManifestUpdate(params?: SlackApiMap["apps.manifest.update"]["params"]) {
    return this.call("apps.manifest.update", params);
  }

  appsManifestValidate(params?: SlackApiMap["apps.manifest.validate"]["params"]) {
    return this.call("apps.manifest.validate", params);
  }

  appsProfileGet(params?: SlackApiMap["apps.profile.get"]["params"]) {
    return this.call("apps.profile.get", params);
  }

  appsRecommendationsList(params?: SlackApiMap["apps.recommendations.list"]["params"]) {
    return this.call("apps.recommendations.list", params);
  }

  appsScopesGroupedInfo(params?: SlackApiMap["apps.scopes.groupedInfo"]["params"]) {
    return this.call("apps.scopes.groupedInfo", params);
  }

  appsScopesInfo(params?: SlackApiMap["apps.scopes.info"]["params"]) {
    return this.call("apps.scopes.info", params);
  }

  appsTeamVariablesDelete(params?: SlackApiMap["apps.team.variables.delete"]["params"]) {
    return this.call("apps.team.variables.delete", params);
  }

  appsTeamVariablesGet(params?: SlackApiMap["apps.team.variables.get"]["params"]) {
    return this.call("apps.team.variables.get", params);
  }

  appsTeamVariablesSet(params?: SlackApiMap["apps.team.variables.set"]["params"]) {
    return this.call("apps.team.variables.set", params);
  }

  assistantThreadsChangeContext(params?: SlackApiMap["assistant.threads.changeContext"]["params"]) {
    return this.call("assistant.threads.changeContext", params);
  }

  assistantThreadsStartThread(params?: SlackApiMap["assistant.threads.startThread"]["params"]) {
    return this.call("assistant.threads.startThread", params);
  }

  authCaptcha() {
    return this.call("auth.captcha");
  }

  authRevoke() {
    return this.call("auth.revoke");
  }

  authTest() {
    return this.call("auth.test");
  }

  blocksActions(params?: SlackApiMap["blocks.actions"]["params"]) {
    return this.call("blocks.actions", params);
  }

  blocksFormat(params?: SlackApiMap["blocks.format"]["params"]) {
    return this.call("blocks.format", params);
  }

  bookmarksAdd(params?: SlackApiMap["bookmarks.add"]["params"]) {
    return this.call("bookmarks.add", params);
  }

  bookmarksList(params?: SlackApiMap["bookmarks.list"]["params"]) {
    return this.call("bookmarks.list", params);
  }

  bookmarksRemove(params?: SlackApiMap["bookmarks.remove"]["params"]) {
    return this.call("bookmarks.remove", params);
  }

  calendarGetInstalledCalendars() {
    return this.call("calendar.getInstalledCalendars");
  }

  calendarUserInfo(params?: SlackApiMap["calendar.user.info"]["params"]) {
    return this.call("calendar.user.info", params);
  }

  canvasesGetCannedTemplates(params?: SlackApiMap["canvases.getCannedTemplates"]["params"]) {
    return this.call("canvases.getCannedTemplates", params);
  }

  canvasesGetTemplates(params?: SlackApiMap["canvases.getTemplates"]["params"]) {
    return this.call("canvases.getTemplates", params);
  }

  canvasesListHeaders(params?: SlackApiMap["canvases.listHeaders"]["params"]) {
    return this.call("canvases.listHeaders", params);
  }

  canvasesNotificationSections(params?: SlackApiMap["canvases.notificationSections"]["params"]) {
    return this.call("canvases.notificationSections", params);
  }

  channelsPrefsGet(params?: SlackApiMap["channels.prefs.get"]["params"]) {
    return this.call("channels.prefs.get", params);
  }

  channelsPrefsSet(params?: SlackApiMap["channels.prefs.set"]["params"]) {
    return this.call("channels.prefs.set", params);
  }

  chatAttachmentAction(params?: SlackApiMap["chat.attachmentAction"]["params"]) {
    return this.call("chat.attachmentAction", params);
  }

  chatCommand(params?: SlackApiMap["chat.command"]["params"]) {
    return this.call("chat.command", params);
  }

  chatDelete(params?: SlackApiMap["chat.delete"]["params"]) {
    return this.call("chat.delete", params);
  }

  chatDeleteAttachment(params?: SlackApiMap["chat.deleteAttachment"]["params"]) {
    return this.call("chat.deleteAttachment", params);
  }

  chatPostMessage(params?: SlackApiMap["chat.postMessage"]["params"]) {
    return this.call("chat.postMessage", params);
  }

  chatRemoveUnfurlLink(params?: SlackApiMap["chat.removeUnfurlLink"]["params"]) {
    return this.call("chat.removeUnfurlLink", params);
  }

  chatShareMessage(params?: SlackApiMap["chat.shareMessage"]["params"]) {
    return this.call("chat.shareMessage", params);
  }

  chatUnfurlLink(params?: SlackApiMap["chat.unfurlLink"]["params"]) {
    return this.call("chat.unfurlLink", params);
  }

  chatUpdate(params?: SlackApiMap["chat.update"]["params"]) {
    return this.call("chat.update", params);
  }

  clientAppCommands() {
    return this.call("client.appCommands");
  }

  clientBoot() {
    return this.call("client.boot");
  }

  clientCounts(params?: SlackApiMap["client.counts"]["params"]) {
    return this.call("client.counts", params);
  }

  clientDms(params?: SlackApiMap["client.dms"]["params"]) {
    return this.call("client.dms", params);
  }

  clientExtras(params?: SlackApiMap["client.extras"]["params"]) {
    return this.call("client.extras", params);
  }

  clientGetWebSocketURL() {
    return this.call("client.getWebSocketURL");
  }

  clientShouldReload(params?: SlackApiMap["client.shouldReload"]["params"]) {
    return this.call("client.shouldReload", params);
  }

  clientUserBoot(params?: SlackApiMap["client.userBoot"]["params"]) {
    return this.call("client.userBoot", params);
  }

  connectInvitesList(params?: SlackApiMap["connectInvites.list"]["params"]) {
    return this.call("connectInvites.list", params);
  }

  conversationsAddTab(params?: SlackApiMap["conversations.addTab"]["params"]) {
    return this.call("conversations.addTab", params);
  }

  conversationsArchive(params?: SlackApiMap["conversations.archive"]["params"]) {
    return this.call("conversations.archive", params);
  }

  conversationsBadgeCount(params?: SlackApiMap["conversations.badgeCount"]["params"]) {
    return this.call("conversations.badgeCount", params);
  }

  conversationsBulkLeave(params?: SlackApiMap["conversations.bulkLeave"]["params"]) {
    return this.call("conversations.bulkLeave", params);
  }

  conversationsBulkReacjiTriggers(params?: SlackApiMap["conversations.bulkReacjiTriggers"]["params"]) {
    return this.call("conversations.bulkReacjiTriggers", params);
  }

  conversationsCanCreateSharedInvite(params?: SlackApiMap["conversations.canCreateSharedInvite"]["params"]) {
    return this.call("conversations.canCreateSharedInvite", params);
  }

  conversationsChannelPrefixesCreate(params?: SlackApiMap["conversations.channelPrefixes.create"]["params"]) {
    return this.call("conversations.channelPrefixes.create", params);
  }

  conversationsChannelPrefixesDelete(params?: SlackApiMap["conversations.channelPrefixes.delete"]["params"]) {
    return this.call("conversations.channelPrefixes.delete", params);
  }

  conversationsChannelPrefixesList(params?: SlackApiMap["conversations.channelPrefixes.list"]["params"]) {
    return this.call("conversations.channelPrefixes.list", params);
  }

  conversationsClose(params?: SlackApiMap["conversations.close"]["params"]) {
    return this.call("conversations.close", params);
  }

  conversationsConvertToPrivate(params?: SlackApiMap["conversations.convertToPrivate"]["params"]) {
    return this.call("conversations.convertToPrivate", params);
  }

  conversationsCreate(params?: SlackApiMap["conversations.create"]["params"]) {
    return this.call("conversations.create", params);
  }

  conversationsEmailaddressesCreate(params?: SlackApiMap["conversations.emailaddresses.create"]["params"]) {
    return this.call("conversations.emailaddresses.create", params);
  }

  conversationsEmailaddressesDelete(params?: SlackApiMap["conversations.emailaddresses.delete"]["params"]) {
    return this.call("conversations.emailaddresses.delete", params);
  }

  conversationsEmailaddressesInfo(params?: SlackApiMap["conversations.emailaddresses.info"]["params"]) {
    return this.call("conversations.emailaddresses.info", params);
  }

  conversationsEmailaddressesUpdate(params?: SlackApiMap["conversations.emailaddresses.update"]["params"]) {
    return this.call("conversations.emailaddresses.update", params);
  }

  conversationsFindEligibleWorkspaces(params?: SlackApiMap["conversations.findEligibleWorkspaces"]["params"]) {
    return this.call("conversations.findEligibleWorkspaces", params);
  }

  conversationsGenericInfo(params?: SlackApiMap["conversations.genericInfo"]["params"]) {
    return this.call("conversations.genericInfo", params);
  }

  conversationsGetRetention(params?: SlackApiMap["conversations.getRetention"]["params"]) {
    return this.call("conversations.getRetention", params);
  }

  conversationsHistory(params?: SlackApiMap["conversations.history"]["params"]) {
    return this.call("conversations.history", params);
  }

  conversationsInfo(params?: SlackApiMap["conversations.info"]["params"]) {
    return this.call("conversations.info", params);
  }

  conversationsInvite(params?: SlackApiMap["conversations.invite"]["params"]) {
    return this.call("conversations.invite", params);
  }

  conversationsJoin(params?: SlackApiMap["conversations.join"]["params"]) {
    return this.call("conversations.join", params);
  }

  conversationsKick(params?: SlackApiMap["conversations.kick"]["params"]) {
    return this.call("conversations.kick", params);
  }

  conversationsLeave(params?: SlackApiMap["conversations.leave"]["params"]) {
    return this.call("conversations.leave", params);
  }

  conversationsLeaveRecommendations(params?: SlackApiMap["conversations.leave.recommendations"]["params"]) {
    return this.call("conversations.leave.recommendations", params);
  }

  conversationsList(params?: SlackApiMap["conversations.list"]["params"]) {
    return this.call("conversations.list", params);
  }

  conversationsListPrefs(params?: SlackApiMap["conversations.listPrefs"]["params"]) {
    return this.call("conversations.listPrefs", params);
  }

  conversationsMark(params?: SlackApiMap["conversations.mark"]["params"]) {
    return this.call("conversations.mark", params);
  }

  conversationsOpen(params?: SlackApiMap["conversations.open"]["params"]) {
    return this.call("conversations.open", params);
  }

  conversationsPendingInvitesList(params?: SlackApiMap["conversations.pendingInvites.list"]["params"]) {
    return this.call("conversations.pendingInvites.list", params);
  }

  conversationsPermissionsAccountTypesList(params?: SlackApiMap["conversations.permissions.accountTypes.list"]["params"]) {
    return this.call("conversations.permissions.accountTypes.list", params);
  }

  conversationsPermissionsAccountTypesSet(params?: SlackApiMap["conversations.permissions.accountTypes.set"]["params"]) {
    return this.call("conversations.permissions.accountTypes.set", params);
  }

  conversationsRecommend(params?: SlackApiMap["conversations.recommend"]["params"]) {
    return this.call("conversations.recommend", params);
  }

  conversationsRemoveTab(params?: SlackApiMap["conversations.removeTab"]["params"]) {
    return this.call("conversations.removeTab", params);
  }

  conversationsRename(params?: SlackApiMap["conversations.rename"]["params"]) {
    return this.call("conversations.rename", params);
  }

  conversationsReplies(params?: SlackApiMap["conversations.replies"]["params"]) {
    return this.call("conversations.replies", params);
  }

  conversationsSetProperties(params?: SlackApiMap["conversations.setProperties"]["params"]) {
    return this.call("conversations.setProperties", params);
  }

  conversationsSetPurpose(params?: SlackApiMap["conversations.setPurpose"]["params"]) {
    return this.call("conversations.setPurpose", params);
  }

  conversationsSetRetention(params?: SlackApiMap["conversations.setRetention"]["params"]) {
    return this.call("conversations.setRetention", params);
  }

  conversationsSetTopic(params?: SlackApiMap["conversations.setTopic"]["params"]) {
    return this.call("conversations.setTopic", params);
  }

  conversationsSharedApprovalsList(params?: SlackApiMap["conversations.sharedApprovals.list"]["params"]) {
    return this.call("conversations.sharedApprovals.list", params);
  }

  conversationsSuggestions() {
    return this.call("conversations.suggestions");
  }

  conversationsTeamConnections(params?: SlackApiMap["conversations.teamConnections"]["params"]) {
    return this.call("conversations.teamConnections", params);
  }

  conversationsUnarchive(params?: SlackApiMap["conversations.unarchive"]["params"]) {
    return this.call("conversations.unarchive", params);
  }

  conversationsUpdateDefaultState(params?: SlackApiMap["conversations.updateDefaultState"]["params"]) {
    return this.call("conversations.updateDefaultState", params);
  }

  conversationsUpdateTab(params?: SlackApiMap["conversations.updateTab"]["params"]) {
    return this.call("conversations.updateTab", params);
  }

  conversationsValidateName(params?: SlackApiMap["conversations.validateName"]["params"]) {
    return this.call("conversations.validateName", params);
  }

  conversationsView(params?: SlackApiMap["conversations.view"]["params"]) {
    return this.call("conversations.view", params);
  }

  developerAppdirectorySubmissionsInfo(params?: SlackApiMap["developer.appdirectory.submissions.info"]["params"]) {
    return this.call("developer.appdirectory.submissions.info", params);
  }

  developerAppsActionsDelete(params?: SlackApiMap["developer.apps.actions.delete"]["params"]) {
    return this.call("developer.apps.actions.delete", params);
  }

  developerAppsActionsV2List(params?: SlackApiMap["developer.apps.actions.v2.list"]["params"]) {
    return this.call("developer.apps.actions.v2.list", params);
  }

  developerAppsActionsV2Update(params?: SlackApiMap["developer.apps.actions.v2.update"]["params"]) {
    return this.call("developer.apps.actions.v2.update", params);
  }

  developerAppsAppLevelTokensCreate(params?: SlackApiMap["developer.apps.appLevelTokens.create"]["params"]) {
    return this.call("developer.apps.appLevelTokens.create", params);
  }

  developerAppsAppLevelTokensGetTokenString(params?: SlackApiMap["developer.apps.appLevelTokens.getTokenString"]["params"]) {
    return this.call("developer.apps.appLevelTokens.getTokenString", params);
  }

  developerAppsAppLevelTokensList(params?: SlackApiMap["developer.apps.appLevelTokens.list"]["params"]) {
    return this.call("developer.apps.appLevelTokens.list", params);
  }

  developerAppsAppLevelTokensRevoke(params?: SlackApiMap["developer.apps.appLevelTokens.revoke"]["params"]) {
    return this.call("developer.apps.appLevelTokens.revoke", params);
  }

  developerAppsApphomeEdit(params?: SlackApiMap["developer.apps.apphome.edit"]["params"]) {
    return this.call("developer.apps.apphome.edit", params);
  }

  developerAppsAssistantUpdate(params?: SlackApiMap["developer.apps.assistant.update"]["params"]) {
    return this.call("developer.apps.assistant.update", params);
  }

  developerAppsBetaInfo(params?: SlackApiMap["developer.apps.beta.info"]["params"]) {
    return this.call("developer.apps.beta.info", params);
  }

  developerAppsBotusersEdit(params?: SlackApiMap["developer.apps.botusers.edit"]["params"]) {
    return this.call("developer.apps.botusers.edit", params);
  }

  developerAppsCommandsAdd(params?: SlackApiMap["developer.apps.commands.add"]["params"]) {
    return this.call("developer.apps.commands.add", params);
  }

  developerAppsCommandsDelete(params?: SlackApiMap["developer.apps.commands.delete"]["params"]) {
    return this.call("developer.apps.commands.delete", params);
  }

  developerAppsCommandsEdit(params?: SlackApiMap["developer.apps.commands.edit"]["params"]) {
    return this.call("developer.apps.commands.edit", params);
  }

  developerAppsConfigCreateToolingToken() {
    return this.call("developer.apps.config.createToolingToken");
  }

  developerAppsConfigGetFunction(params?: SlackApiMap["developer.apps.config.getFunction"]["params"]) {
    return this.call("developer.apps.config.getFunction", params);
  }

  developerAppsConfigListFunctions(params?: SlackApiMap["developer.apps.config.listFunctions"]["params"]) {
    return this.call("developer.apps.config.listFunctions", params);
  }

  developerAppsConfigListInstalledScopes(params?: SlackApiMap["developer.apps.config.listInstalledScopes"]["params"]) {
    return this.call("developer.apps.config.listInstalledScopes", params);
  }

  developerAppsDisableSocketMode(params?: SlackApiMap["developer.apps.disableSocketMode"]["params"]) {
    return this.call("developer.apps.disableSocketMode", params);
  }

  developerAppsEnableSocketMode(params?: SlackApiMap["developer.apps.enableSocketMode"]["params"]) {
    return this.call("developer.apps.enableSocketMode", params);
  }

  developerAppsEventsSubscriptionsUpdateSubs(params?: SlackApiMap["developer.apps.events.subscriptions.updateSubs"]["params"]) {
    return this.call("developer.apps.events.subscriptions.updateSubs", params);
  }

  developerAppsInfo(params?: SlackApiMap["developer.apps.info"]["params"]) {
    return this.call("developer.apps.info", params);
  }

  developerAppsMigrationOrgReady(params?: SlackApiMap["developer.apps.migration.orgReady"]["params"]) {
    return this.call("developer.apps.migration.orgReady", params);
  }

  developerAppsMigrationUsersTranslate(params?: SlackApiMap["developer.apps.migration.usersTranslate"]["params"]) {
    return this.call("developer.apps.migration.usersTranslate", params);
  }

  developerAppsOauthAddRedirectUrls(params?: SlackApiMap["developer.apps.oauth.addRedirectUrls"]["params"]) {
    return this.call("developer.apps.oauth.addRedirectUrls", params);
  }

  developerAppsOauthGetAppStatus(params?: SlackApiMap["developer.apps.oauth.getAppStatus"]["params"]) {
    return this.call("developer.apps.oauth.getAppStatus", params);
  }

  developerAppsOauthGetTokens(params?: SlackApiMap["developer.apps.oauth.getTokens"]["params"]) {
    return this.call("developer.apps.oauth.getTokens", params);
  }

  developerAppsOwnersAdd(params?: SlackApiMap["developer.apps.owners.add"]["params"]) {
    return this.call("developer.apps.owners.add", params);
  }

  developerAppsOwnersRemove(params?: SlackApiMap["developer.apps.owners.remove"]["params"]) {
    return this.call("developer.apps.owners.remove", params);
  }

  developerAppsScopeList(params?: SlackApiMap["developer.apps.scope.list"]["params"]) {
    return this.call("developer.apps.scope.list", params);
  }

  developerAppsScopeUpdate(params?: SlackApiMap["developer.apps.scope.update"]["params"]) {
    return this.call("developer.apps.scope.update", params);
  }

  developerAppsSuggestionsDelete(params?: SlackApiMap["developer.apps.suggestions.delete"]["params"]) {
    return this.call("developer.apps.suggestions.delete", params);
  }

  developerAppsSuggestionsUpdate(params?: SlackApiMap["developer.apps.suggestions.update"]["params"]) {
    return this.call("developer.apps.suggestions.update", params);
  }

  developerAppsUpdateIPWhitelist(params?: SlackApiMap["developer.apps.updateIPWhitelist"]["params"]) {
    return this.call("developer.apps.updateIPWhitelist", params);
  }

  developerAppsWorkObjectsUpdate(params?: SlackApiMap["developer.apps.workObjects.update"]["params"]) {
    return this.call("developer.apps.workObjects.update", params);
  }

  directoryDisconnect(params?: SlackApiMap["directory.disconnect"]["params"]) {
    return this.call("directory.disconnect", params);
  }

  directoryTokenHasScopes(params?: SlackApiMap["directory.token.hasScopes"]["params"]) {
    return this.call("directory.token.hasScopes", params);
  }

  dndEndSnooze() {
    return this.call("dnd.endSnooze");
  }

  dndInfo(params?: SlackApiMap["dnd.info"]["params"]) {
    return this.call("dnd.info", params);
  }

  dndSetSnooze(params?: SlackApiMap["dnd.setSnooze"]["params"]) {
    return this.call("dnd.setSnooze", params);
  }

  dndTeamInfo(params?: SlackApiMap["dnd.teamInfo"]["params"]) {
    return this.call("dnd.teamInfo", params);
  }

  draftsCreate(params?: SlackApiMap["drafts.create"]["params"]) {
    return this.call("drafts.create", params);
  }

  draftsDelete(params?: SlackApiMap["drafts.delete"]["params"]) {
    return this.call("drafts.delete", params);
  }

  draftsList(params?: SlackApiMap["drafts.list"]["params"]) {
    return this.call("drafts.list", params);
  }

  draftsListActive(params?: SlackApiMap["drafts.listActive"]["params"]) {
    return this.call("drafts.listActive", params);
  }

  draftsUpdate(params?: SlackApiMap["drafts.update"]["params"]) {
    return this.call("drafts.update", params);
  }

  emailAffiliationsInfo() {
    return this.call("email.affiliations.info");
  }

  emailsInfo(params?: SlackApiMap["emails.info"]["params"]) {
    return this.call("emails.info", params);
  }

  emojiAdd(params?: SlackApiMap["emoji.add"]["params"]) {
    return this.call("emoji.add", params);
  }

  emojiAdminList(params?: SlackApiMap["emoji.adminList"]["params"]) {
    return this.call("emoji.adminList", params);
  }

  emojiCollectionsList(params?: SlackApiMap["emoji.collections.list"]["params"]) {
    return this.call("emoji.collections.list", params);
  }

  emojiGetInfo(params?: SlackApiMap["emoji.getInfo"]["params"]) {
    return this.call("emoji.getInfo", params);
  }

  emojiRemove(params?: SlackApiMap["emoji.remove"]["params"]) {
    return this.call("emoji.remove", params);
  }

  enterprisePrefsGet() {
    return this.call("enterprise.prefs.get");
  }

  enterpriseTeamsDirectory(params?: SlackApiMap["enterprise.teams.directory"]["params"]) {
    return this.call("enterprise.teams.directory", params);
  }

  experimentsGetByUser(params?: SlackApiMap["experiments.getByUser"]["params"]) {
    return this.call("experiments.getByUser", params);
  }

  featureUsageInfo(params?: SlackApiMap["feature.usage.info"]["params"]) {
    return this.call("feature.usage.info", params);
  }

  featuresAccessPoliciesList() {
    return this.call("features.access.policies.list");
  }

  filesCanUndelete(params?: SlackApiMap["files.canUndelete"]["params"]) {
    return this.call("files.canUndelete", params);
  }

  filesClose(params?: SlackApiMap["files.close"]["params"]) {
    return this.call("files.close", params);
  }

  filesCompleteUpload(params?: SlackApiMap["files.completeUpload"]["params"]) {
    return this.call("files.completeUpload", params);
  }

  filesDelete(params?: SlackApiMap["files.delete"]["params"]) {
    return this.call("files.delete", params);
  }

  filesDisableCrossWorkspaceLinkSharing(params?: SlackApiMap["files.disableCrossWorkspaceLinkSharing"]["params"]) {
    return this.call("files.disableCrossWorkspaceLinkSharing", params);
  }

  filesDocsFetchAccessLevelForUsers(params?: SlackApiMap["files.docs.fetchAccessLevelForUsers"]["params"]) {
    return this.call("files.docs.fetchAccessLevelForUsers", params);
  }

  filesEdit(params?: SlackApiMap["files.edit"]["params"]) {
    return this.call("files.edit", params);
  }

  filesEnableCrossWorkspaceLinkSharing(params?: SlackApiMap["files.enableCrossWorkspaceLinkSharing"]["params"]) {
    return this.call("files.enableCrossWorkspaceLinkSharing", params);
  }

  filesEnableRestrictedSharing(params?: SlackApiMap["files.enableRestrictedSharing"]["params"]) {
    return this.call("files.enableRestrictedSharing", params);
  }

  filesFavoritesAdd(params?: SlackApiMap["files.favorites.add"]["params"]) {
    return this.call("files.favorites.add", params);
  }

  filesFavoritesList(params?: SlackApiMap["files.favorites.list"]["params"]) {
    return this.call("files.favorites.list", params);
  }

  filesGetMetadata(params?: SlackApiMap["files.getMetadata"]["params"]) {
    return this.call("files.getMetadata", params);
  }

  filesGetOverview(params?: SlackApiMap["files.getOverview"]["params"]) {
    return this.call("files.getOverview", params);
  }

  filesGetShares(params?: SlackApiMap["files.getShares"]["params"]) {
    return this.call("files.getShares", params);
  }

  filesGetUploadURL(params?: SlackApiMap["files.getUploadURL"]["params"]) {
    return this.call("files.getUploadURL", params);
  }

  filesInfo(params?: SlackApiMap["files.info"]["params"]) {
    return this.call("files.info", params);
  }

  filesList(params?: SlackApiMap["files.list"]["params"]) {
    return this.call("files.list", params);
  }

  filesMarkRead(params?: SlackApiMap["files.markRead"]["params"]) {
    return this.call("files.markRead", params);
  }

  filesOpen(params?: SlackApiMap["files.open"]["params"]) {
    return this.call("files.open", params);
  }

  filesPing(params?: SlackApiMap["files.ping"]["params"]) {
    return this.call("files.ping", params);
  }

  filesRecentlyDeleted() {
    return this.call("files.recentlyDeleted");
  }

  filesRetranscribe(params?: SlackApiMap["files.retranscribe"]["params"]) {
    return this.call("files.retranscribe", params);
  }

  filesRevokePermission(params?: SlackApiMap["files.revokePermission"]["params"]) {
    return this.call("files.revokePermission", params);
  }

  filesRevokePublicURL(params?: SlackApiMap["files.revokePublicURL"]["params"]) {
    return this.call("files.revokePublicURL", params);
  }

  filesShare(params?: SlackApiMap["files.share"]["params"]) {
    return this.call("files.share", params);
  }

  filesSharedPublicURL(params?: SlackApiMap["files.sharedPublicURL"]["params"]) {
    return this.call("files.sharedPublicURL", params);
  }

  filesUpdatePermission(params?: SlackApiMap["files.updatePermission"]["params"]) {
    return this.call("files.updatePermission", params);
  }

  functionsDistributionsPermissionsList(params?: SlackApiMap["functions.distributions.permissions.list"]["params"]) {
    return this.call("functions.distributions.permissions.list", params);
  }

  functionsDistributionsPermissionsSet(params?: SlackApiMap["functions.distributions.permissions.set"]["params"]) {
    return this.call("functions.distributions.permissions.set", params);
  }

  functionsGet(params?: SlackApiMap["functions.get"]["params"]) {
    return this.call("functions.get", params);
  }

  functionsList(params?: SlackApiMap["functions.list"]["params"]) {
    return this.call("functions.list", params);
  }

  functionsShortcutsCopy(params?: SlackApiMap["functions.shortcuts.copy"]["params"]) {
    return this.call("functions.shortcuts.copy", params);
  }

  functionsWorkflowsDelete(params?: SlackApiMap["functions.workflows.delete"]["params"]) {
    return this.call("functions.workflows.delete", params);
  }

  functionsWorkflowsExport(params?: SlackApiMap["functions.workflows.export"]["params"]) {
    return this.call("functions.workflows.export", params);
  }

  functionsWorkflowsFindWorkflowForBotUsers(params?: SlackApiMap["functions.workflows.findWorkflowForBotUsers"]["params"]) {
    return this.call("functions.workflows.findWorkflowForBotUsers", params);
  }

  functionsWorkflowsGet(params?: SlackApiMap["functions.workflows.get"]["params"]) {
    return this.call("functions.workflows.get", params);
  }

  functionsWorkflowsGetIsRestricted(params?: SlackApiMap["functions.workflows.getIsRestricted"]["params"]) {
    return this.call("functions.workflows.getIsRestricted", params);
  }

  functionsWorkflowsGetLatest(params?: SlackApiMap["functions.workflows.getLatest"]["params"]) {
    return this.call("functions.workflows.getLatest", params);
  }

  functionsWorkflowsImport(params?: SlackApiMap["functions.workflows.import"]["params"]) {
    return this.call("functions.workflows.import", params);
  }

  functionsWorkflowsList(params?: SlackApiMap["functions.workflows.list"]["params"]) {
    return this.call("functions.workflows.list", params);
  }

  functionsWorkflowsPermissionsCopyList(params?: SlackApiMap["functions.workflows.permissions.copy.list"]["params"]) {
    return this.call("functions.workflows.permissions.copy.list", params);
  }

  functionsWorkflowsPermissionsCopySet(params?: SlackApiMap["functions.workflows.permissions.copy.set"]["params"]) {
    return this.call("functions.workflows.permissions.copy.set", params);
  }

  functionsWorkflowsPublish(params?: SlackApiMap["functions.workflows.publish"]["params"]) {
    return this.call("functions.workflows.publish", params);
  }

  functionsWorkflowsStepsAdd(params?: SlackApiMap["functions.workflows.steps.add"]["params"]) {
    return this.call("functions.workflows.steps.add", params);
  }

  functionsWorkflowsStepsDelete(params?: SlackApiMap["functions.workflows.steps.delete"]["params"]) {
    return this.call("functions.workflows.steps.delete", params);
  }

  functionsWorkflowsStepsList(params?: SlackApiMap["functions.workflows.steps.list"]["params"]) {
    return this.call("functions.workflows.steps.list", params);
  }

  functionsWorkflowsStepsMove(params?: SlackApiMap["functions.workflows.steps.move"]["params"]) {
    return this.call("functions.workflows.steps.move", params);
  }

  functionsWorkflowsStepsResponsesExport(params?: SlackApiMap["functions.workflows.steps.responses.export"]["params"]) {
    return this.call("functions.workflows.steps.responses.export", params);
  }

  functionsWorkflowsStepsUpdate(params?: SlackApiMap["functions.workflows.steps.update"]["params"]) {
    return this.call("functions.workflows.steps.update", params);
  }

  functionsWorkflowsUnpublish(params?: SlackApiMap["functions.workflows.unpublish"]["params"]) {
    return this.call("functions.workflows.unpublish", params);
  }

  functionsWorkflowsUpdate(params?: SlackApiMap["functions.workflows.update"]["params"]) {
    return this.call("functions.workflows.update", params);
  }

  gifFeatured(params?: SlackApiMap["gif.featured"]["params"]) {
    return this.call("gif.featured", params);
  }

  gifSearch(params?: SlackApiMap["gif.search"]["params"]) {
    return this.call("gif.search", params);
  }

  helpIssuesTicketStats() {
    return this.call("help.issues.ticketStats");
  }

  helpProductHelpCardList(params?: SlackApiMap["help.productHelpCard.list"]["params"]) {
    return this.call("help.productHelpCard.list", params);
  }

  helpcenterGetWhatsNew(params?: SlackApiMap["helpcenter.getWhatsNew"]["params"]) {
    return this.call("helpcenter.getWhatsNew", params);
  }

  helpcenterTrack(params?: SlackApiMap["helpcenter.track"]["params"]) {
    return this.call("helpcenter.track", params);
  }

  helpdeskCategories(params?: SlackApiMap["helpdesk.categories"]["params"]) {
    return this.call("helpdesk.categories", params);
  }

  helpdeskGet(params?: SlackApiMap["helpdesk.get"]["params"]) {
    return this.call("helpdesk.get", params);
  }

  helpdeskGetArticle(params?: SlackApiMap["helpdesk.getArticle"]["params"]) {
    return this.call("helpdesk.getArticle", params);
  }

  huddlesGet(params?: SlackApiMap["huddles.get"]["params"]) {
    return this.call("huddles.get", params);
  }

  huddlesHistory(params?: SlackApiMap["huddles.history"]["params"]) {
    return this.call("huddles.history", params);
  }

  huddlesListBackgrounds() {
    return this.call("huddles.listBackgrounds");
  }

  imList(params?: SlackApiMap["im.list"]["params"]) {
    return this.call("im.list", params);
  }

  importsListByService(params?: SlackApiMap["imports.listByService"]["params"]) {
    return this.call("imports.listByService", params);
  }

  inprodsurveysGet(params?: SlackApiMap["inprodsurveys.get"]["params"]) {
    return this.call("inprodsurveys.get", params);
  }

  linksGetDomains() {
    return this.call("links.getDomains");
  }

  listsCreate(params?: SlackApiMap["lists.create"]["params"]) {
    return this.call("lists.create", params);
  }

  listsGetMyItems(params?: SlackApiMap["lists.getMyItems"]["params"]) {
    return this.call("lists.getMyItems", params);
  }

  listsHistoryList(params?: SlackApiMap["lists.history.list"]["params"]) {
    return this.call("lists.history.list", params);
  }

  listsHistoryLoad(params?: SlackApiMap["lists.history.load"]["params"]) {
    return this.call("lists.history.load", params);
  }

  listsOpen(params?: SlackApiMap["lists.open"]["params"]) {
    return this.call("lists.open", params);
  }

  listsRecordsList(params?: SlackApiMap["lists.records.list"]["params"]) {
    return this.call("lists.records.list", params);
  }

  listsTemplates(params?: SlackApiMap["lists.templates"]["params"]) {
    return this.call("lists.templates", params);
  }

  listsUpdate(params?: SlackApiMap["lists.update"]["params"]) {
    return this.call("lists.update", params);
  }

  mediaProgressUpdate(params?: SlackApiMap["media.progress.update"]["params"]) {
    return this.call("media.progress.update", params);
  }

  megaphoneNotificationsList(params?: SlackApiMap["megaphone.notifications.list"]["params"]) {
    return this.call("megaphone.notifications.list", params);
  }

  megaphoneSetNotificationAsSeen(params?: SlackApiMap["megaphone.setNotificationAsSeen"]["params"]) {
    return this.call("megaphone.setNotificationAsSeen", params);
  }

  messagesList(params?: SlackApiMap["messages.list"]["params"]) {
    return this.call("messages.list", params);
  }

  messagesSentList(params?: SlackApiMap["messages.sent.list"]["params"]) {
    return this.call("messages.sent.list", params);
  }

  mpimList(params?: SlackApiMap["mpim.list"]["params"]) {
    return this.call("mpim.list", params);
  }

  onboardingFetch(params?: SlackApiMap["onboarding.fetch"]["params"]) {
    return this.call("onboarding.fetch", params);
  }

  onboardingUpdateTeam(params?: SlackApiMap["onboarding.updateTeam"]["params"]) {
    return this.call("onboarding.updateTeam", params);
  }

  onboardingUpdateUser(params?: SlackApiMap["onboarding.updateUser"]["params"]) {
    return this.call("onboarding.updateUser", params);
  }

  paymentsBillingAddressesGet() {
    return this.call("payments.billing.addresses.get");
  }

  paymentsBillingAddressesLocations(params?: SlackApiMap["payments.billing.addresses.locations"]["params"]) {
    return this.call("payments.billing.addresses.locations", params);
  }

  paymentsBillingAddressesValidateAndSet(params?: SlackApiMap["payments.billing.addresses.validateAndSet"]["params"]) {
    return this.call("payments.billing.addresses.validateAndSet", params);
  }

  paymentsBillingHistoryList(params?: SlackApiMap["payments.billing.history.list"]["params"]) {
    return this.call("payments.billing.history.list", params);
  }

  paymentsCheckoutConfig(params?: SlackApiMap["payments.checkout.config"]["params"]) {
    return this.call("payments.checkout.config", params);
  }

  paymentsStatusGet() {
    return this.call("payments.status.get");
  }

  paymentsStripeConfigGet(params?: SlackApiMap["payments.stripe.config.get"]["params"]) {
    return this.call("payments.stripe.config.get", params);
  }

  paymentsStripeCustomerCreate(params?: SlackApiMap["payments.stripe.customer.create"]["params"]) {
    return this.call("payments.stripe.customer.create", params);
  }

  paymentsStripeCustomerGet() {
    return this.call("payments.stripe.customer.get");
  }

  paymentsStripePaymentMethodList(params?: SlackApiMap["payments.stripe.paymentMethod.list"]["params"]) {
    return this.call("payments.stripe.paymentMethod.list", params);
  }

  pinsAdd(params?: SlackApiMap["pins.add"]["params"]) {
    return this.call("pins.add", params);
  }

  pinsList(params?: SlackApiMap["pins.list"]["params"]) {
    return this.call("pins.list", params);
  }

  pinsRemove(params?: SlackApiMap["pins.remove"]["params"]) {
    return this.call("pins.remove", params);
  }

  presenceSet(params?: SlackApiMap["presence.set"]["params"]) {
    return this.call("presence.set", params);
  }

  promoCampaignsEligibilityInfo(params?: SlackApiMap["promo.campaigns.eligibilityInfo"]["params"]) {
    return this.call("promo.campaigns.eligibilityInfo", params);
  }

  promoCampaignsRedeem(params?: SlackApiMap["promo.campaigns.redeem"]["params"]) {
    return this.call("promo.campaigns.redeem", params);
  }

  quipCloneCanvas(params?: SlackApiMap["quip.cloneCanvas"]["params"]) {
    return this.call("quip.cloneCanvas", params);
  }

  quipLookupFileId(params?: SlackApiMap["quip.lookupFileId"]["params"]) {
    return this.call("quip.lookupFileId", params);
  }

  quipLookupThreadIds(params?: SlackApiMap["quip.lookupThreadIds"]["params"]) {
    return this.call("quip.lookupThreadIds", params);
  }

  quipThreadMark(params?: SlackApiMap["quip.thread.mark"]["params"]) {
    return this.call("quip.thread.mark", params);
  }

  quipThreadSynchronize(params?: SlackApiMap["quip.thread.synchronize"]["params"]) {
    return this.call("quip.thread.synchronize", params);
  }

  reactionsAdd(params?: SlackApiMap["reactions.add"]["params"]) {
    return this.call("reactions.add", params);
  }

  reactionsRemove(params?: SlackApiMap["reactions.remove"]["params"]) {
    return this.call("reactions.remove", params);
  }

  retailCost(params?: SlackApiMap["retail.cost"]["params"]) {
    return this.call("retail.cost", params);
  }

  retailGetAvailablePlans() {
    return this.call("retail.getAvailablePlans");
  }

  retailPlans(params?: SlackApiMap["retail.plans"]["params"]) {
    return this.call("retail.plans", params);
  }

  roomsInviteResponse(params?: SlackApiMap["rooms.inviteResponse"]["params"]) {
    return this.call("rooms.inviteResponse", params);
  }

  savedAdd(params?: SlackApiMap["saved.add"]["params"]) {
    return this.call("saved.add", params);
  }

  savedClearCompleted() {
    return this.call("saved.clearCompleted");
  }

  savedDelete(params?: SlackApiMap["saved.delete"]["params"]) {
    return this.call("saved.delete", params);
  }

  savedList(params?: SlackApiMap["saved.list"]["params"]) {
    return this.call("saved.list", params);
  }

  savedUpdate(params?: SlackApiMap["saved.update"]["params"]) {
    return this.call("saved.update", params);
  }

  screenheroRoomsInfo(params?: SlackApiMap["screenhero.rooms.info"]["params"]) {
    return this.call("screenhero.rooms.info", params);
  }

  searchAppDirectory(params?: SlackApiMap["search.appDirectory"]["params"]) {
    return this.call("search.appDirectory", params);
  }

  searchAutocomplete(params?: SlackApiMap["search.autocomplete"]["params"]) {
    return this.call("search.autocomplete", params);
  }

  searchAutocompleteFiles(params?: SlackApiMap["search.autocomplete.files"]["params"]) {
    return this.call("search.autocomplete.files", params);
  }

  searchAutocompleteIntentModel() {
    return this.call("search.autocomplete.intentModel");
  }

  searchAutocompleteModel() {
    return this.call("search.autocomplete.model");
  }

  searchAutocompleteOfflineFeatures() {
    return this.call("search.autocomplete.offlineFeatures");
  }

  searchAutocompleteTopEmojis(params?: SlackApiMap["search.autocomplete.topEmojis"]["params"]) {
    return this.call("search.autocomplete.topEmojis", params);
  }

  searchAutocompleteTopEngagedFiles() {
    return this.call("search.autocomplete.topEngagedFiles");
  }

  searchAutocompleteTriggers(params?: SlackApiMap["search.autocomplete.triggers"]["params"]) {
    return this.call("search.autocomplete.triggers", params);
  }

  searchEnterprise(params?: SlackApiMap["search.enterprise"]["params"]) {
    return this.call("search.enterprise", params);
  }

  searchInline(params?: SlackApiMap["search.inline"]["params"]) {
    return this.call("search.inline", params);
  }

  searchModulesChannels(params?: SlackApiMap["search.modules.channels"]["params"]) {
    return this.call("search.modules.channels", params);
  }

  searchModulesDms(params?: SlackApiMap["search.modules.dms"]["params"]) {
    return this.call("search.modules.dms", params);
  }

  searchModulesFiles(params?: SlackApiMap["search.modules.files"]["params"]) {
    return this.call("search.modules.files", params);
  }

  searchModulesMessages(params?: SlackApiMap["search.modules.messages"]["params"]) {
    return this.call("search.modules.messages", params);
  }

  searchModulesPeople(params?: SlackApiMap["search.modules.people"]["params"]) {
    return this.call("search.modules.people", params);
  }

  searchModulesTriggers(params?: SlackApiMap["search.modules.triggers"]["params"]) {
    return this.call("search.modules.triggers", params);
  }

  searchPrecache(params?: SlackApiMap["search.precache"]["params"]) {
    return this.call("search.precache", params);
  }

  searchSave(params?: SlackApiMap["search.save"]["params"]) {
    return this.call("search.save", params);
  }

  searchTeam(params?: SlackApiMap["search.team"]["params"]) {
    return this.call("search.team", params);
  }

  sessionsCheckRecent() {
    return this.call("sessions.checkRecent");
  }

  sfdcIntegrationAdminListOrgs() {
    return this.call("sfdc.integration.admin.listOrgs");
  }

  sfdcIntegrationListOrgs() {
    return this.call("sfdc.integration.listOrgs");
  }

  sharedInvitesCanGetLink() {
    return this.call("sharedInvites.canGetLink");
  }

  signinFindWorkspaces(params?: SlackApiMap["signin.findWorkspaces"]["params"]) {
    return this.call("signin.findWorkspaces", params);
  }

  signupCheckSignupDomains(params?: SlackApiMap["signup.checkSignupDomains"]["params"]) {
    return this.call("signup.checkSignupDomains", params);
  }

  slackAiPermissionsGetForUser(params?: SlackApiMap["slackAi.permissions.getForUser"]["params"]) {
    return this.call("slackAi.permissions.getForUser", params);
  }

  slackbotResponsesAdd(params?: SlackApiMap["slackbot.responses.add"]["params"]) {
    return this.call("slackbot.responses.add", params);
  }

  slackbotResponsesDelete(params?: SlackApiMap["slackbot.responses.delete"]["params"]) {
    return this.call("slackbot.responses.delete", params);
  }

  slackbotResponsesEdit(params?: SlackApiMap["slackbot.responses.edit"]["params"]) {
    return this.call("slackbot.responses.edit", params);
  }

  slackbotResponsesList(params?: SlackApiMap["slackbot.responses.list"]["params"]) {
    return this.call("slackbot.responses.list", params);
  }

  solutionsGetTemplates() {
    return this.call("solutions.getTemplates");
  }

  solutionsList(params?: SlackApiMap["solutions.list"]["params"]) {
    return this.call("solutions.list", params);
  }

  starsAdd(params?: SlackApiMap["stars.add"]["params"]) {
    return this.call("stars.add", params);
  }

  starsRemove(params?: SlackApiMap["stars.remove"]["params"]) {
    return this.call("stars.remove", params);
  }

  subscriptionsThreadAdd(params?: SlackApiMap["subscriptions.thread.add"]["params"]) {
    return this.call("subscriptions.thread.add", params);
  }

  subscriptionsThreadGet(params?: SlackApiMap["subscriptions.thread.get"]["params"]) {
    return this.call("subscriptions.thread.get", params);
  }

  subscriptionsThreadGetView(params?: SlackApiMap["subscriptions.thread.getView"]["params"]) {
    return this.call("subscriptions.thread.getView", params);
  }

  subscriptionsThreadMark(params?: SlackApiMap["subscriptions.thread.mark"]["params"]) {
    return this.call("subscriptions.thread.mark", params);
  }

  subscriptionsThreadRemove(params?: SlackApiMap["subscriptions.thread.remove"]["params"]) {
    return this.call("subscriptions.thread.remove", params);
  }

  subteamsInfo(params?: SlackApiMap["subteams.info"]["params"]) {
    return this.call("subteams.info", params);
  }

  subteamsValidateHandle(params?: SlackApiMap["subteams.validateHandle"]["params"]) {
    return this.call("subteams.validateHandle", params);
  }

  subteamsValidateName(params?: SlackApiMap["subteams.validateName"]["params"]) {
    return this.call("subteams.validateName", params);
  }

  teamAdminAttachmentsList() {
    return this.call("team.admin.attachments.list");
  }

  teamBillingAddContact(params?: SlackApiMap["team.billing.addContact"]["params"]) {
    return this.call("team.billing.addContact", params);
  }

  teamBillingChangesList(params?: SlackApiMap["team.billing.changes.list"]["params"]) {
    return this.call("team.billing.changes.list", params);
  }

  teamBillingRemoveContact(params?: SlackApiMap["team.billing.removeContact"]["params"]) {
    return this.call("team.billing.removeContact", params);
  }

  teamChangeInfo(params?: SlackApiMap["team.changeInfo"]["params"]) {
    return this.call("team.changeInfo", params);
  }

  teamCheckEmailDomains(params?: SlackApiMap["team.checkEmailDomains"]["params"]) {
    return this.call("team.checkEmailDomains", params);
  }

  teamConnectedOrgsList(params?: SlackApiMap["team.connectedOrgs.list"]["params"]) {
    return this.call("team.connectedOrgs.list", params);
  }

  teamFeatureGetRequest(params?: SlackApiMap["team.feature.getRequest"]["params"]) {
    return this.call("team.feature.getRequest", params);
  }

  teamInfo(params?: SlackApiMap["team.info"]["params"]) {
    return this.call("team.info", params);
  }

  teamListExternal(params?: SlackApiMap["team.listExternal"]["params"]) {
    return this.call("team.listExternal", params);
  }

  teamNavGet() {
    return this.call("team.nav.get");
  }

  teamPrefsGet(params?: SlackApiMap["team.prefs.get"]["params"]) {
    return this.call("team.prefs.get", params);
  }

  teamPrefsSet(params?: SlackApiMap["team.prefs.set"]["params"]) {
    return this.call("team.prefs.set", params);
  }

  teamProfileGet() {
    return this.call("team.profile.get");
  }

  teamSlackConnectGuidelinesGet(params?: SlackApiMap["team.slackConnectGuidelines.get"]["params"]) {
    return this.call("team.slackConnectGuidelines.get", params);
  }

  teamSlackConnectPrefsList() {
    return this.call("team.slackConnectPrefs.list");
  }

  teamSlackConnectPrefsSet(params?: SlackApiMap["team.slackConnectPrefs.set"]["params"]) {
    return this.call("team.slackConnectPrefs.set", params);
  }

  teamStatsExport(params?: SlackApiMap["team.stats.export"]["params"]) {
    return this.call("team.stats.export", params);
  }

  teamStatsTimeSeries(params?: SlackApiMap["team.stats.timeSeries"]["params"]) {
    return this.call("team.stats.timeSeries", params);
  }

  teamTargetingCriteria() {
    return this.call("team.targetingCriteria");
  }

  teamsAuthorizedIpRangeList() {
    return this.call("teams.authorized.ip.range.list");
  }

  teamsAuthorizedIpRangeSet(params?: SlackApiMap["teams.authorized.ip.range.set"]["params"]) {
    return this.call("teams.authorized.ip.range.set", params);
  }

  teamsCompanyInfo() {
    return this.call("teams.company.info");
  }

  teamsTrialsInfo() {
    return this.call("teams.trials.info");
  }

  templatesIntegrationsGet() {
    return this.call("templates.integrations.get");
  }

  templatesProvision(params?: SlackApiMap["templates.provision"]["params"]) {
    return this.call("templates.provision", params);
  }

  ublockworkaroundHistory(params?: SlackApiMap["ublockworkaround.history"]["params"]) {
    return this.call("ublockworkaround.history", params);
  }

  unfurlExternalValidateDomain(params?: SlackApiMap["unfurl.external.validateDomain"]["params"]) {
    return this.call("unfurl.external.validateDomain", params);
  }

  usergroupsCreate(params?: SlackApiMap["usergroups.create"]["params"]) {
    return this.call("usergroups.create", params);
  }

  usergroupsMembership() {
    return this.call("usergroups.membership");
  }

  usergroupsUpdate(params?: SlackApiMap["usergroups.update"]["params"]) {
    return this.call("usergroups.update", params);
  }

  usergroupsUsersList(params?: SlackApiMap["usergroups.users.list"]["params"]) {
    return this.call("usergroups.users.list", params);
  }

  usergroupsUsersUpdate(params?: SlackApiMap["usergroups.users.update"]["params"]) {
    return this.call("usergroups.users.update", params);
  }

  usersAccessLogs() {
    return this.call("users.accessLogs");
  }

  usersAdminCanAddUltraRestricted() {
    return this.call("users.admin.canAddUltraRestricted");
  }

  usersAdminFetchInvitesHistory(params?: SlackApiMap["users.admin.fetchInvitesHistory"]["params"]) {
    return this.call("users.admin.fetchInvitesHistory", params);
  }

  usersAdminFetchTeamUsers(params?: SlackApiMap["users.admin.fetchTeamUsers"]["params"]) {
    return this.call("users.admin.fetchTeamUsers", params);
  }

  usersAdminFetchTeamUsersCsv(params?: SlackApiMap["users.admin.fetchTeamUsersCsv"]["params"]) {
    return this.call("users.admin.fetchTeamUsersCsv", params);
  }

  usersAdminInviteBulk(params?: SlackApiMap["users.admin.inviteBulk"]["params"]) {
    return this.call("users.admin.inviteBulk", params);
  }

  usersAdminResendInvitation(params?: SlackApiMap["users.admin.resendInvitation"]["params"]) {
    return this.call("users.admin.resendInvitation", params);
  }

  usersAdminSetAdmin(params?: SlackApiMap["users.admin.setAdmin"]["params"]) {
    return this.call("users.admin.setAdmin", params);
  }

  usersAdminSetInactive(params?: SlackApiMap["users.admin.setInactive"]["params"]) {
    return this.call("users.admin.setInactive", params);
  }

  usersAdminSetOwner(params?: SlackApiMap["users.admin.setOwner"]["params"]) {
    return this.call("users.admin.setOwner", params);
  }

  usersAdminSetRegular(params?: SlackApiMap["users.admin.setRegular"]["params"]) {
    return this.call("users.admin.setRegular", params);
  }

  usersChannelSectionsChannelsBulkUpdate(params?: SlackApiMap["users.channelSections.channels.bulkUpdate"]["params"]) {
    return this.call("users.channelSections.channels.bulkUpdate", params);
  }

  usersChannelSectionsCreate(params?: SlackApiMap["users.channelSections.create"]["params"]) {
    return this.call("users.channelSections.create", params);
  }

  usersChannelSectionsCreateLink(params?: SlackApiMap["users.channelSections.createLink"]["params"]) {
    return this.call("users.channelSections.createLink", params);
  }

  usersChannelSectionsDelete(params?: SlackApiMap["users.channelSections.delete"]["params"]) {
    return this.call("users.channelSections.delete", params);
  }

  usersChannelSectionsList() {
    return this.call("users.channelSections.list");
  }

  usersChannelSectionsSet(params?: SlackApiMap["users.channelSections.set"]["params"]) {
    return this.call("users.channelSections.set", params);
  }

  usersConsentGet(params?: SlackApiMap["users.consent.get"]["params"]) {
    return this.call("users.consent.get", params);
  }

  usersCustomStatusList(params?: SlackApiMap["users.customStatus.list"]["params"]) {
    return this.call("users.customStatus.list", params);
  }

  usersEmailVerificationStatusGet() {
    return this.call("users.emailVerificationStatus.get");
  }

  usersEmailtokenGet() {
    return this.call("users.emailtoken.get");
  }

  usersGetInviter() {
    return this.call("users.getInviter");
  }

  usersInfo(params?: SlackApiMap["users.info"]["params"]) {
    return this.call("users.info", params);
  }

  usersInteractionsList(params?: SlackApiMap["users.interactions.list"]["params"]) {
    return this.call("users.interactions.list", params);
  }

  usersInteractionsSet(params?: SlackApiMap["users.interactions.set"]["params"]) {
    return this.call("users.interactions.set", params);
  }

  usersIsEarlyJoiner(params?: SlackApiMap["users.isEarlyJoiner"]["params"]) {
    return this.call("users.isEarlyJoiner", params);
  }

  usersList(params?: SlackApiMap["users.list"]["params"]) {
    return this.call("users.list", params);
  }

  usersListIgnoredUsers() {
    return this.call("users.listIgnoredUsers");
  }

  usersPermissionsApps() {
    return this.call("users.permissions.apps");
  }

  usersPrefsGet(params?: SlackApiMap["users.prefs.get"]["params"]) {
    return this.call("users.prefs.get", params);
  }

  usersPrefsSet(params?: SlackApiMap["users.prefs.set"]["params"]) {
    return this.call("users.prefs.set", params);
  }

  usersPrefsSetNotifications(params?: SlackApiMap["users.prefs.setNotifications"]["params"]) {
    return this.call("users.prefs.setNotifications", params);
  }

  usersPreparePhoto(params?: SlackApiMap["users.preparePhoto"]["params"]) {
    return this.call("users.preparePhoto", params);
  }

  usersPriorityAdd(params?: SlackApiMap["users.priority.add"]["params"]) {
    return this.call("users.priority.add", params);
  }

  usersPriorityGetRecommendations(params?: SlackApiMap["users.priority.getRecommendations"]["params"]) {
    return this.call("users.priority.getRecommendations", params);
  }

  usersPriorityList() {
    return this.call("users.priority.list");
  }

  usersPriorityRemove(params?: SlackApiMap["users.priority.remove"]["params"]) {
    return this.call("users.priority.remove", params);
  }

  usersProfileGet(params?: SlackApiMap["users.profile.get"]["params"]) {
    return this.call("users.profile.get", params);
  }

  usersProfileGetAdminSections() {
    return this.call("users.profile.getAdminSections");
  }

  usersProfileGetExtras(params?: SlackApiMap["users.profile.getExtras"]["params"]) {
    return this.call("users.profile.getExtras", params);
  }

  usersProfileGetSections(params?: SlackApiMap["users.profile.getSections"]["params"]) {
    return this.call("users.profile.getSections", params);
  }

  usersProfileSet(params?: SlackApiMap["users.profile.set"]["params"]) {
    return this.call("users.profile.set", params);
  }

  usersProfileSetAdminSections(params?: SlackApiMap["users.profile.setAdminSections"]["params"]) {
    return this.call("users.profile.setAdminSections", params);
  }

  usersProfileSetSections(params?: SlackApiMap["users.profile.setSections"]["params"]) {
    return this.call("users.profile.setSections", params);
  }

  usersRecommend(params?: SlackApiMap["users.recommend"]["params"]) {
    return this.call("users.recommend", params);
  }

  usersSetPhoto(params?: SlackApiMap["users.setPhoto"]["params"]) {
    return this.call("users.setPhoto", params);
  }

  usersSharedInvitesList(params?: SlackApiMap["users.sharedInvites.list"]["params"]) {
    return this.call("users.sharedInvites.list", params);
  }

  usersSharedInvitesRenew(params?: SlackApiMap["users.sharedInvites.renew"]["params"]) {
    return this.call("users.sharedInvites.renew", params);
  }

  usersSharedInvitesRevoke(params?: SlackApiMap["users.sharedInvites.revoke"]["params"]) {
    return this.call("users.sharedInvites.revoke", params);
  }

  usersSlackConnectOrgList(params?: SlackApiMap["users.slackConnect.orgList"]["params"]) {
    return this.call("users.slackConnect.orgList", params);
  }

  usersStateMachine(params?: SlackApiMap["users.stateMachine"]["params"]) {
    return this.call("users.stateMachine", params);
  }

  viewsClose(params?: SlackApiMap["views.close"]["params"]) {
    return this.call("views.close", params);
  }

  viewsGet(params?: SlackApiMap["views.get"]["params"]) {
    return this.call("views.get", params);
  }

  viewsSubmit(params?: SlackApiMap["views.submit"]["params"]) {
    return this.call("views.submit", params);
  }

  workflowsActivityList(params?: SlackApiMap["workflows.activity.list"]["params"]) {
    return this.call("workflows.activity.list", params);
  }

  workflowsTemplatesList(params?: SlackApiMap["workflows.templates.list"]["params"]) {
    return this.call("workflows.templates.list", params);
  }

  workflowsTemplatesListAsDecoratedWorkflows(params?: SlackApiMap["workflows.templates.listAsDecoratedWorkflows"]["params"]) {
    return this.call("workflows.templates.listAsDecoratedWorkflows", params);
  }

  workflowsTriggersDelete(params?: SlackApiMap["workflows.triggers.delete"]["params"]) {
    return this.call("workflows.triggers.delete", params);
  }

  workflowsTriggersInfo(params?: SlackApiMap["workflows.triggers.info"]["params"]) {
    return this.call("workflows.triggers.info", params);
  }

  workflowsTriggersList(params?: SlackApiMap["workflows.triggers.list"]["params"]) {
    return this.call("workflows.triggers.list", params);
  }

  workflowsTriggersListRecentlyRunForUser() {
    return this.call("workflows.triggers.listRecentlyRunForUser");
  }

  workflowsTriggersPermissionsList(params?: SlackApiMap["workflows.triggers.permissions.list"]["params"]) {
    return this.call("workflows.triggers.permissions.list", params);
  }

  workflowsTriggersPermissionsSet(params?: SlackApiMap["workflows.triggers.permissions.set"]["params"]) {
    return this.call("workflows.triggers.permissions.set", params);
  }

  workflowsTriggersPrefsGet(params?: SlackApiMap["workflows.triggers.prefs.get"]["params"]) {
    return this.call("workflows.triggers.prefs.get", params);
  }

  workflowsTriggersTypesList(params?: SlackApiMap["workflows.triggers.types.list"]["params"]) {
    return this.call("workflows.triggers.types.list", params);
  }

  workflowsTriggersUpdate(params?: SlackApiMap["workflows.triggers.update"]["params"]) {
    return this.call("workflows.triggers.update", params);
  }
}
