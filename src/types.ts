// Auto-generated - do not edit manually
// Generated: 2026-03-18T16:38:50.724Z
// Method count: 468
// Hash: 1393dd696684b7576abd46c404bfc170

// ── Branded key types ───────────────────────────────────────────────────

export type AppActionId = string & { readonly __brand: "AppActionId" };
export type ChannelId = string & { readonly __brand: "ChannelId" };
export type DmId = string & { readonly __brand: "DmId" };
export type EmojiName = string & { readonly __brand: "EmojiName" };
export type FileId = string & { readonly __brand: "FileId" };
export type GroupId = string & { readonly __brand: "GroupId" };
export type ProfileFieldId = string & { readonly __brand: "ProfileFieldId" };
export type Timestamp = string & { readonly __brand: "Timestamp" };
export type Url = string & { readonly __brand: "Url" };
export type UserId = string & { readonly __brand: "UserId" };
export type WorkflowTriggerId = string & { readonly __brand: "WorkflowTriggerId" };

// ── Request parameter types ─────────────────────────────────────────────

export interface ActivityFeedParams {
  limit?: number;
  types?: string;
  mode?: string;
  cursor?: string;
  archive_only?: boolean;
  unread_only?: boolean;
  priority_only?: boolean;
  only_salesforce_channels?: boolean;
  is_activity_inbox?: boolean;
}

export interface ActivityMarkReadParams {
  type?: string;
  feed_ts?: string;
  key?: string;
  ts?: string;
}

export interface AdminAccountTypePermissionsAddParams {
  permission_name?: string;
  assigned_account_type?: string;
  entity_id?: string;
}

export interface AdminAccountTypePermissionsListParams {
  entity_id?: string;
}

export interface AdminAccountTypePermissionsRemoveParams {
  permission_name?: string;
  assigned_account_type?: string;
  entity_id?: string;
}

export interface AdminActivityLogsListParams {
  team_id?: string;
  page?: number;
  limit?: number;
}

export interface AdminAnalyticsExportParams {
  export_type?: string;
  sort_direction?: string;
  sort_column?: string;
  query?: string;
  columns?: string;
  offline?: boolean;
  date_interval?: string;
  privacy?: string;
}

export interface AdminAnalyticsGetAppsAnalyticsParams {
  sort_direction?: string;
  sort_column?: string;
  team_id?: string;
  date_range?: string;
}

export interface AdminAnalyticsGetAvailableDateRangeParams {
  type?: string;
}

export interface AdminAnalyticsGetChannelAnalyticsParams {
  date_interval?: string;
  count?: number;
  sort_column?: string;
  sort_direction?: string;
  privacy?: string;
  query?: string;
}

export interface AdminAnalyticsGetMemberAnalyticsParams {
  date_range?: string;
  count?: number;
  sort_column?: string;
  sort_direction?: string;
  query?: string;
}

export interface AdminAppsConfigLookupParams {
  app_ids?: string;
}

export interface AdminAppsConfigSetParams {
  app_id?: string;
  domain_restrictions?: string;
  workflow_auth_strategy?: string;
}

export interface AdminAppsInstalledListParams {
  user_id?: string;
  scope_group?: string;
  query?: string;
  limit?: number;
  legacy_integrations?: boolean;
}

export interface AdminAppsLookupParams {
  team_id?: string;
  app_ids?: string;
  include_non_distributed_functions?: boolean;
}

export interface AdminAppsRecommendAddParams {
  team_id?: string;
  app_id?: string;
}

export interface AdminAppsRecommendListParams {
  team_id?: string;
}

export interface AdminAppsRecommendRemoveParams {
  team_id?: string;
  app_id?: string;
}

export interface AdminAppsSearchParams {
  query?: string;
  legacy_integrations?: boolean;
}

export interface AdminAppsUninstallParams {
  app_id?: string;
  team_ids?: string;
}

export interface AdminDeprecationsListParams {
  app_type?: string;
  cursor?: string;
  deprecation_name?: string;
  limit?: number;
  team_id?: string;
}

export interface AdminFeaturesPermissionsListParams {
  category?: string;
}

export interface AdminFunctionsListParams {
  app_ids?: string;
  limit?: number;
  include_non_distributed_functions?: boolean;
}

export interface AdminRolesAddMembersParams {
  role_id?: string;
  role_scopes?: string;
  user_ids?: string;
}

export interface AdminRolesEntityListAssignmentsParams {
  entity_id?: string;
}

export interface AdminRolesListParams {
  limit?: number;
  include_counts?: boolean;
}

export interface AdminRolesRemoveMembersParams {
  role_id?: string;
  role_scopes?: string;
  user_ids?: string;
}

export interface AdminSessionsAccessLogsParams {
  limit?: number;
  team_id?: string;
}

export interface AdminWorkflowsSearchParams {
  query?: string;
  no_collaborators?: boolean;
  sort?: string;
  sort_dir?: string;
  limit?: number;
  num_trigger_ids?: number;
  publish_status?: string;
}

export interface AdminWorkflowsTriggersTypesListParams {
  workflow_builder_only?: boolean;
  app_id?: string;
}

export interface AdminWorkflowsTriggersTypesPermissionsLookupParams {
  trigger_type_ids?: string;
}

export interface AdminWorkflowsTriggersTypesPermissionsSetParams {
  id?: string;
  permissions?: string;
}

export interface AiAlphaSummarizeChannelUnreadsParams {
  channel?: string;
  channel_summary_type?: string;
}

export interface AiFeedbackRequestParams {
  client_token?: string;
  type?: string;
  rating?: string;
  ai_result_id?: string;
  context?: string;
}

export interface AiAppsListParams {
  agentforce_only?: boolean;
}

export interface ApiFeaturesParams {
  platform?: string;
  force_cold_boot?: number;
}

export interface ApiGetFlannelHttpUrlParams {
  include_external_workspaces?: boolean;
}

export interface AppsActionsListForResourceParams {
  resource_type?: string;
  resource_id?: string;
}

export interface AppsActionsV2ExecuteParams {
  action_id?: string;
  app_id?: string;
  team_id?: string;
  context?: string;
  client_token?: string;
}

export interface AppsHomeDispatchOpenEventParams {
  id?: string;
  type?: string;
  service_team_id?: string;
}

export interface AppsIndexFiltersListParams {
  team_id?: string;
}

export interface AppsIndexListParams {
  limit?: number;
  filter?: number;
  is_app_launcher?: boolean;
  team_id?: string;
}

export interface AppsIndexSearchParams {
  limit?: number;
  query?: string;
  filter?: number;
  is_app_launcher?: boolean;
  team_id?: string;
}

export interface AppsManifestCreateParams {
  manifest?: string;
}

export interface AppsManifestExportParams {
  app_id?: string;
}

export interface AppsManifestUpdateParams {
  app_id?: string;
  manifest?: string;
  consent_breaking_changes?: boolean;
}

export interface AppsManifestValidateParams {
  app_id?: string;
  manifest?: string;
}

export interface AppsProfileGetParams {
  app?: string;
  bot?: string;
  bot_home_team?: string;
}

export interface AppsRecommendationsListParams {
  product_surface?: string;
  limit?: number;
}

export interface AppsScopesGroupedInfoParams {
  app_id?: string;
  perspective?: string;
}

export interface AppsScopesInfoParams {
  app_id?: string;
}

export interface AppsTeamVariablesDeleteParams {
  team?: string;
  names?: string;
}

export interface AppsTeamVariablesGetParams {
  team?: string;
  names?: string;
}

export interface AppsTeamVariablesSetParams {
  team?: string;
  variables?: string;
}

export interface AssistantThreadsChangeContextParams {
  bot_user_id?: string;
  channel_id?: string;
  thread_ts?: string;
  context?: string;
}

export interface AssistantThreadsStartThreadParams {
  source?: string;
  bot_user_id?: string;
  context?: string;
}

export interface BlocksActionsParams {
  service_id?: string;
  service_team_id?: string;
  actions?: string;
  container?: string;
  client_token?: string;
  state?: string;
}

export interface BlocksFormatParams {
  message?: string;
}

export interface BookmarksAddParams {
  channel?: string;
  link?: string;
  title?: string;
  type?: string;
  parent_id?: string;
  entity_id?: string;
}

export interface BookmarksListParams {
  channel?: string;
  include_folders?: boolean;
  include_legacy_workflows?: boolean;
}

export interface BookmarksRemoveParams {
  channel?: string;
  bookmark?: string;
  type?: string;
}

export interface CalendarUserInfoParams {
  app_type?: string;
}

export interface CanvasesGetCannedTemplatesParams {
  template_names?: string;
  is_user_locale?: boolean;
}

export interface CanvasesGetTemplatesParams {
  section_type?: string;
}

export interface CanvasesListHeadersParams {
  header_id?: string;
}

export interface CanvasesNotificationSectionsParams {
  timestamp?: number;
  file_id?: string;
}

export interface ChannelsPrefsGetParams {
  channel_id?: string;
  pref_name?: string;
}

export interface ChannelsPrefsSetParams {
  channel_id?: string;
  prefs?: string;
}

export interface ChatAttachmentActionParams {
  payload?: string;
  client_token?: string;
  service_id?: string;
  bot_user_id?: string;
}

export interface ChatCommandParams {
  command?: string;
  disp?: string;
  blocks?: string;
  channel?: string;
  client_token?: string;
  app_id?: string;
  team_id?: string;
}

export interface ChatDeleteParams {
  channel?: string;
  ts?: string;
}

export interface ChatDeleteAttachmentParams {
  attachment?: number;
  channel?: string;
  ts?: string;
}

export interface ChatPostMessageParams {
  channel?: string;
  ts?: string;
  type?: string;
  xArgs?: string;
  reply_broadcast?: boolean;
  thread_ts?: string;
  unfurl?: string;
  client_context_team_id?: string;
  blocks?: string;
  draft_id?: string;
  include_channel_perm_error?: boolean;
  client_msg_id?: string;
}

export interface ChatRemoveUnfurlLinkParams {
  url?: string;
}

export interface ChatShareMessageParams {
  timestamp?: string;
  channel?: string;
  text?: string;
  blocks?: string;
  share_channel?: string;
  skip_dlp_user_warning?: boolean;
}

export interface ChatUnfurlLinkParams {
  url?: string;
  channel?: string;
  client_msg_id?: string;
}

export interface ChatUpdateParams {
  channel?: string;
  ts?: string;
  client_context_team_id?: string;
  skip_dlp_user_warning?: boolean;
  blocks?: string;
}

export interface ClientCountsParams {
  thread_counts_by_channel?: boolean;
  org_wide_aware?: boolean;
  include_file_channels?: boolean;
  include_all_unreads?: boolean;
  dry_run_last_fetched?: number;
}

export interface ClientDmsParams {
  count?: number;
  include_closed?: boolean;
  include_channel?: boolean;
  exclude_bots?: boolean;
  priority_mode?: string;
}

export interface ClientExtrasParams {
  extras?: string;
}

export interface ClientShouldReloadParams {
  build_manifest_last_modified?: number;
  team_ids?: string;
  build_version_ts?: number;
  prev_client_recommended_build_version?: number;
}

export interface ClientUserBootParams {
  version_all_channels?: boolean;
  return_all_relevant_mpdms?: boolean;
  min_channel_updated?: number;
  omit_extras?: string;
}

export interface ConnectInvitesListParams {
  invite_types?: string;
  only_pending_invites?: boolean;
}

export interface ConversationsAddTabParams {
  type?: string;
  data?: string;
  channel_id?: string;
}

export interface ConversationsArchiveParams {
  channel?: string;
}

export interface ConversationsBadgeCountParams {
  channel?: string;
}

export interface ConversationsBulkLeaveParams {
  channels?: string;
}

export interface ConversationsBulkReacjiTriggersParams {
  channel_ids?: string;
}

export interface ConversationsCanCreateSharedInviteParams {
  channel_id?: string;
}

export interface ConversationsChannelPrefixesCreateParams {
  prefix?: string;
  description?: string;
}

export interface ConversationsChannelPrefixesDeleteParams {
  prefix?: string;
}

export interface ConversationsChannelPrefixesListParams {
  team_id?: string;
}

export interface ConversationsCloseParams {
  channel?: string;
}

export interface ConversationsConvertToPrivateParams {
  channel?: string;
  name?: string;
  workspace?: string;
}

export interface ConversationsCreateParams {
  name?: string;
  validate_name?: boolean;
  use_case?: string;
  is_tractor?: boolean;
}

export interface ConversationsEmailaddressesCreateParams {
  conversation_id?: string;
}

export interface ConversationsEmailaddressesDeleteParams {
  conversation_id?: string;
  address?: string;
}

export interface ConversationsEmailaddressesInfoParams {
  conversation_id?: string;
}

export interface ConversationsEmailaddressesUpdateParams {
  conversation_id?: string;
  name?: string;
  emoji?: string;
  address?: string;
}

export interface ConversationsFindEligibleWorkspacesParams {
  channel_id?: string;
}

export interface ConversationsGenericInfoParams {
  updated_channels?: string;
}

export interface ConversationsGetRetentionParams {
  channel?: string;
}

export interface ConversationsHistoryParams {
  channel?: string;
  limit?: number;
  ignore_replies?: boolean;
  include_pin_count?: boolean;
  inclusive?: boolean;
  no_user_profile?: boolean;
  include_stories?: boolean;
  include_free_team_extra_messages?: boolean;
  include_date_joined?: boolean;
  oldest?: string;
  latest?: string;
  cursor?: string;
  cached_latest_updates?: string;
}

export interface ConversationsInfoParams {
  channel?: string;
  return_app_home?: boolean;
}

export interface ConversationsInviteParams {
  channel?: string;
  invite_all?: boolean;
  users?: string;
  subteams?: string;
  force?: boolean;
}

export interface ConversationsJoinParams {
  channel?: string;
  request_in_background?: boolean;
  auto_mute?: boolean;
}

export interface ConversationsKickParams {
  channel?: string;
  user?: string;
}

export interface ConversationsLeaveParams {
  channel?: string;
}

export interface ConversationsLeaveRecommendationsParams {
  max_ts?: string;
}

export interface ConversationsListParams {
  limit?: number;
  types?: string;
}

export interface ConversationsListPrefsParams {
  channel?: string;
}

export interface ConversationsMarkParams {
  channel?: string;
  ts?: string;
}

export interface ConversationsOpenParams {
  quiet?: number;
  return_im?: number;
  channel?: string;
}

export interface ConversationsPendingInvitesListParams {
  limit?: number;
  query?: string;
  sort?: string;
  sort_dir?: string;
}

export interface ConversationsPermissionsAccountTypesListParams {
  channel_id?: string;
}

export interface ConversationsPermissionsAccountTypesSetParams {
  channel_id?: string;
  account_type?: string;
  permissions?: string;
}

export interface ConversationsRecommendParams {
  query?: string;
  source?: string;
  channels_info?: boolean;
  limit?: number;
}

export interface ConversationsRemoveTabParams {
  id?: string;
  channel_id?: string;
}

export interface ConversationsRenameParams {
  channel?: string;
  name?: string;
  skip_rename_message?: boolean;
}

export interface ConversationsRepliesParams {
  channel?: string;
  ts?: string;
  inclusive?: boolean;
  limit?: number;
  oldest?: string;
  latest?: string;
  include_tombstones?: boolean;
  cached_latest_updates?: string;
}

export interface ConversationsSetPropertiesParams {
  props?: string;
  channel_id?: string;
}

export interface ConversationsSetPurposeParams {
  channel?: string;
  purpose?: string;
  name_tagging?: boolean;
}

export interface ConversationsSetRetentionParams {
  channel?: string;
  retention_type?: number;
  retention_duration?: number;
}

export interface ConversationsSetTopicParams {
  channel?: string;
  topic?: string;
}

export interface ConversationsSharedApprovalsListParams {
  limit?: number;
  query?: string;
  sort?: string;
  sort_dir?: string;
  status_filter?: string;
}

export interface ConversationsTeamConnectionsParams {
  channel?: string;
}

export interface ConversationsUnarchiveParams {
  channel?: string;
}

export interface ConversationsUpdateDefaultStateParams {
  channel_id?: string;
  set_as_default?: boolean;
}

export interface ConversationsUpdateTabParams {
  id?: string;
  channel_id?: string;
  label?: string;
}

export interface ConversationsValidateNameParams {
  name?: string;
  team_id?: string;
}

export interface ConversationsViewParams {
  canonical_avatars?: boolean;
  no_user_profile?: boolean;
  ignore_replies?: boolean;
  no_self?: boolean;
  include_full_users?: boolean;
  include_use_case?: boolean;
  include_stories?: boolean;
  no_members?: boolean;
  include_mutation_timestamps?: boolean;
  count?: number;
  include_free_team_extra_messages?: boolean;
  channel?: string;
}

export interface DeveloperAppdirectorySubmissionsInfoParams {
  app_id?: string;
}

export interface DeveloperAppsActionsDeleteParams {
  app?: string;
  set_active?: boolean;
}

export interface DeveloperAppsActionsV2ListParams {
  app_id?: string;
}

export interface DeveloperAppsActionsV2UpdateParams {
  app_id?: string;
  action_url?: string;
  actions?: string;
}

export interface DeveloperAppsAppLevelTokensCreateParams {
  app_id?: string;
  description?: string;
  scope?: string;
}

export interface DeveloperAppsAppLevelTokensGetTokenStringParams {
  app_id?: string;
  token_id?: number;
}

export interface DeveloperAppsAppLevelTokensListParams {
  app_id?: string;
}

export interface DeveloperAppsAppLevelTokensRevokeParams {
  app_id?: string;
  token_id?: number;
}

export interface DeveloperAppsApphomeEditParams {
  app?: string;
  home_tab_enabled?: boolean;
  beta_opted_in?: boolean;
}

export interface DeveloperAppsAssistantUpdateParams {
  app_id?: string;
  is_ai_app?: boolean;
}

export interface DeveloperAppsBetaInfoParams {
  app_id?: string;
}

export interface DeveloperAppsBotusersEditParams {
  app?: string;
  always_active?: boolean;
  real_name?: string;
  username?: string;
}

export interface DeveloperAppsCommandsAddParams {
  app?: string;
  name?: string;
  desc?: string;
  usage?: string;
  parse_full?: string;
  set_active?: boolean;
}

export interface DeveloperAppsCommandsDeleteParams {
  app?: string;
  command?: string;
  set_active?: boolean;
}

export interface DeveloperAppsCommandsEditParams {
  app?: string;
  command?: string;
  name?: string;
  desc?: string;
  usage?: string;
  parse_full?: string;
  set_active?: boolean;
}

export interface DeveloperAppsConfigGetFunctionParams {
  app_id?: string;
  function_id?: string;
}

export interface DeveloperAppsConfigListFunctionsParams {
  app_id?: string;
}

export interface DeveloperAppsConfigListInstalledScopesParams {
  app_id?: string;
}

export interface DeveloperAppsDisableSocketModeParams {
  app_id?: string;
}

export interface DeveloperAppsEnableSocketModeParams {
  app_id?: string;
}

export interface DeveloperAppsEventsSubscriptionsUpdateSubsParams {
  app?: string;
  url?: string;
  app_event_types?: string;
  bot_event_types?: string;
  enable?: boolean;
  unfurl_domains?: string;
  is_delayed_events_enabled?: boolean;
  filter_teams?: string;
  set_active?: boolean;
}

export interface DeveloperAppsInfoParams {
  app_id?: string;
}

export interface DeveloperAppsMigrationOrgReadyParams {
  app?: string;
  enable_org_ready?: boolean;
}

export interface DeveloperAppsMigrationUsersTranslateParams {
  app?: string;
  enable?: boolean;
  set_active?: boolean;
}

export interface DeveloperAppsOauthAddRedirectUrlsParams {
  app_id?: string;
  redirect_urls?: string;
}

export interface DeveloperAppsOauthGetAppStatusParams {
  app_id?: string;
  scopes?: string;
}

export interface DeveloperAppsOauthGetTokensParams {
  app_id?: string;
}

export interface DeveloperAppsOwnersAddParams {
  app_id?: string;
  user_id?: string;
}

export interface DeveloperAppsOwnersRemoveParams {
  app_id?: string;
  user_id?: string;
}

export interface DeveloperAppsScopeListParams {
  app_id?: string;
}

export interface DeveloperAppsScopeUpdateParams {
  id?: string;
  scope?: string;
  scope_bot?: string;
  set_active?: boolean;
}

export interface DeveloperAppsSuggestionsDeleteParams {
  app?: string;
  set_active?: boolean;
}

export interface DeveloperAppsSuggestionsUpdateParams {
  app?: string;
  suggestion_url?: string;
}

export interface DeveloperAppsUpdateIPWhitelistParams {
  app?: string;
  type?: string;
  ranges?: string;
}

export interface DeveloperAppsWorkObjectsUpdateParams {
  app_id?: string;
  is_active?: boolean;
  entity_types?: string;
}

export interface DirectoryDisconnectParams {
  provider?: string;
}

export interface DirectoryTokenHasScopesParams {
  provider?: string;
}

export interface DndInfoParams {
  user?: string;
}

export interface DndSetSnoozeParams {
  num_minutes?: number;
}

export interface DndTeamInfoParams {
  users?: string;
}

export interface DraftsCreateParams {
  blocks?: string;
  client_msg_id?: string;
  attachments?: string;
  destinations?: string;
  file_ids?: string;
  unfurl?: string;
  is_from_composer?: boolean;
}

export interface DraftsDeleteParams {
  client_last_updated_ts?: number;
  draft_id?: string;
  skip_file_deletion?: boolean;
}

export interface DraftsListParams {
  is_active?: boolean;
  limit?: number;
}

export interface DraftsListActiveParams {
  limit?: number;
}

export interface DraftsUpdateParams {
  blocks?: string;
  client_last_updated_ts?: number;
  attachments?: string;
  destinations?: string;
  draft_id?: string;
  file_ids?: string;
  date_scheduled?: number;
  is_from_composer?: boolean;
}

export interface EmailsInfoParams {
  emails?: string;
}

export interface EmojiAddParams {
  mode?: string;
  name?: string;
  alias_for?: string;
}

export interface EmojiAdminListParams {
  page?: number;
  count?: number;
  queries?: string;
  user_ids?: string;
}

export interface EmojiCollectionsListParams {
  installed_only?: number;
}

export interface EmojiGetInfoParams {
  name?: string;
}

export interface EmojiRemoveParams {
  name?: string;
}

export interface EnterpriseTeamsDirectoryParams {
  count?: number;
  query?: string;
  sort?: string;
  search?: string;
  set_active?: boolean;
  type?: string;
  id?: string;
  enterprise_token?: string;
}

export interface ExperimentsGetByUserParams {
  web_client_version?: number;
  force_cold_boot?: number;
}

export interface FeatureUsageInfoParams {
  feature?: string;
  action?: string;
}

export interface FilesCanUndeleteParams {
  file_id?: string;
}

export interface FilesCloseParams {
  file_id?: string;
  last_updated?: number;
}

export interface FilesCompleteUploadParams {
  files?: string;
  channel?: string;
  blocks?: string;
  client_msg_id?: string;
}

export interface FilesDeleteParams {
  file?: string;
  is_draft?: boolean;
}

export interface FilesDisableCrossWorkspaceLinkSharingParams {
  file_id?: string;
  entity_type?: string;
  entity_id?: string;
}

export interface FilesDocsFetchAccessLevelForUsersParams {
  users?: string;
  file_id?: string;
}

export interface FilesEditParams {
  file?: string;
  title?: string;
  alt_txt?: string;
  is_canvas_template?: boolean;
}

export interface FilesEnableCrossWorkspaceLinkSharingParams {
  file_id?: string;
  entity_type?: string;
  entity_id?: string;
  access_level?: string;
}

export interface FilesEnableRestrictedSharingParams {
  file_id?: string;
}

export interface FilesFavoritesAddParams {
  file_id?: string;
}

export interface FilesFavoritesListParams {
  type?: string;
}

export interface FilesGetMetadataParams {
  file_id?: string;
  type?: string;
  limit?: number;
}

export interface FilesGetOverviewParams {
  file_id?: string;
}

export interface FilesGetSharesParams {
  file_id?: string;
}

export interface FilesGetUploadURLParams {
  filename?: string;
  length?: number;
  snippet_type?: string;
  client_context_team_id?: string;
}

export interface FilesInfoParams {
  file?: string;
  page?: number;
  count?: number;
  truncate?: boolean;
  public_shared?: boolean;
  skip_shares?: boolean;
}

export interface FilesListParams {
  actor?: string;
  count?: number;
}

export interface FilesMarkReadParams {
  file_id?: string;
  timestamp?: number;
}

export interface FilesOpenParams {
  supports_read_only_check?: boolean;
  last_updated?: number;
  file_id?: string;
}

export interface FilesPingParams {
  file_id?: string;
  is_focused?: boolean;
}

export interface FilesRetranscribeParams {
  file_id?: string;
  locale?: string;
}

export interface FilesRevokePermissionParams {
  file_id?: string;
  channel_id?: string;
  team_id?: string;
}

export interface FilesRevokePublicURLParams {
  file?: string;
}

export interface FilesShareParams {
  draft_id?: string;
  files?: string;
  channel?: string;
  thread_ts?: string;
  broadcast?: boolean;
  client_msg_id?: string;
  blocks?: string;
  resharing_aware?: boolean;
  skip_dlp_user_warning?: boolean;
  from_share_modal?: boolean;
  unfurl?: string;
  client_context_team_id?: string;
}

export interface FilesSharedPublicURLParams {
  file?: string;
}

export interface FilesUpdatePermissionParams {
  file_id?: string;
  channel_id_access_level_map?: string;
  team_id?: string;
}

export interface FunctionsDistributionsPermissionsListParams {
  function_app_id?: string;
  function_callback_id?: string;
  function_id?: string;
}

export interface FunctionsDistributionsPermissionsSetParams {
  permission_type?: string;
  function_app_id?: string;
  function_id?: string;
}

export interface FunctionsGetParams {
  function_ids?: string;
}

export interface FunctionsListParams {
  function_type?: string;
  limit?: number;
}

export interface FunctionsShortcutsCopyParams {
  workflow_id?: string;
  trigger_id?: string;
  title?: string;
}

export interface FunctionsWorkflowsDeleteParams {
  workflow_id?: string;
}

export interface FunctionsWorkflowsExportParams {
  workflow_id?: string;
}

export interface FunctionsWorkflowsFindWorkflowForBotUsersParams {
  user_ids?: string;
  channel_id?: string;
}

export interface FunctionsWorkflowsGetParams {
  workflow_id?: string;
}

export interface FunctionsWorkflowsGetIsRestrictedParams {
  workflow_id?: string;
}

export interface FunctionsWorkflowsGetLatestParams {
  workflow_id?: string;
}

export interface FunctionsWorkflowsImportParams {
  workflow?: string;
  triggers?: string;
}

export interface FunctionsWorkflowsListParams {
  limit?: number;
  filter_options?: string;
  sort_options?: string;
  workflow_builder_only?: boolean;
}

export interface FunctionsWorkflowsPermissionsCopyListParams {
  workflow_id?: string;
}

export interface FunctionsWorkflowsPermissionsCopySetParams {
  workflow_id?: string;
  permission_type?: string;
}

export interface FunctionsWorkflowsPublishParams {
  workflow_id?: string;
}

export interface FunctionsWorkflowsStepsAddParams {
  step?: string;
  workflow_id?: string;
  after_step_id?: string;
}

export interface FunctionsWorkflowsStepsDeleteParams {
  step_id?: string;
  workflow_id?: string;
}

export interface FunctionsWorkflowsStepsListParams {
  workflow_id?: string;
  function_id?: string;
}

export interface FunctionsWorkflowsStepsMoveParams {
  workflow_id?: string;
  step_id?: string;
  after_step_id?: string;
}

export interface FunctionsWorkflowsStepsResponsesExportParams {
  workflow_id?: string;
  step_id?: string;
}

export interface FunctionsWorkflowsStepsUpdateParams {
  step?: string;
  input_parameters?: string;
  workflow_id?: string;
}

export interface FunctionsWorkflowsUnpublishParams {
  workflow_id?: string;
}

export interface FunctionsWorkflowsUpdateParams {
  workflow_id?: string;
  description?: string;
  title?: string;
}

export interface GifFeaturedParams {
  limit?: number;
}

export interface GifSearchParams {
  query?: string;
  limit?: number;
  cursor?: string;
}

export interface HelpProductHelpCardListParams {
  count?: number;
  type?: string;
  locale?: string;
}

export interface HelpcenterGetWhatsNewParams {
  locale?: string;
}

export interface HelpcenterTrackParams {
  asset_type?: number;
  asset_id?: number;
}

export interface HelpdeskCategoriesParams {
  locale?: string;
}

export interface HelpdeskGetParams {
  locale?: string;
}

export interface HelpdeskGetArticleParams {
  article_id?: number;
  locale?: string;
}

export interface HuddlesGetParams {
  huddle_id?: string;
}

export interface HuddlesHistoryParams {
  limit?: number;
  missed_huddles_only?: boolean;
  users?: string;
  users_only?: boolean;
}

export interface ImListParams {
  get_latest?: boolean;
  get_read_state?: boolean;
}

export interface ImportsListByServiceParams {
  service_name?: string;
  limit?: number;
}

export interface InprodsurveysGetParams {
  id?: number;
  payload?: string;
}

export interface ListsCreateParams {
  name?: string;
  template_id?: string;
  todo_mode?: boolean;
  include_copied_list_records?: boolean;
}

export interface ListsGetMyItemsParams {
  include_subtasks?: boolean;
  include_approvals?: boolean;
}

export interface ListsHistoryListParams {
  list_id?: string;
  limit?: number;
}

export interface ListsHistoryLoadParams {
  list_id?: string;
  timestamp?: number;
}

export interface ListsOpenParams {
  list_id?: string;
}

export interface ListsRecordsListParams {
  list_id?: string;
  include_subtasks?: boolean;
  archived?: boolean;
  include_suggested?: boolean;
}

export interface ListsTemplatesParams {
  template_ids?: string;
}

export interface ListsUpdateParams {
  id?: string;
  description_blocks?: string;
}

export interface MediaProgressUpdateParams {
  file?: string;
  offset_ms?: number;
  duration_ms?: number;
}

export interface MegaphoneNotificationsListParams {
  event?: string;
  channel_id?: string;
  is_team_on_trial?: boolean;
}

export interface MegaphoneSetNotificationAsSeenParams {
  notification?: string;
  action?: string;
  step?: string;
}

export interface MessagesListParams {
  message_ids?: string;
  org_wide_aware?: boolean;
  cached_latest_updates?: string;
}

export interface MessagesSentListParams {
  count?: number;
  page?: number;
  view?: string;
  client_req_id?: string;
  search_session_id?: string;
  cursor?: string;
}

export interface MpimListParams {
  get_latest?: boolean;
}

export interface OnboardingFetchParams {
  include_team_data?: boolean;
  require_invite_list?: boolean;
}

export interface OnboardingUpdateTeamParams {
  field_name?: string;
  field_value?: string;
}

export interface OnboardingUpdateUserParams {
  field_name?: string;
  field_value?: boolean;
}

export interface PaymentsBillingAddressesLocationsParams {
  checkout_step?: string;
}

export interface PaymentsBillingAddressesValidateAndSetParams {
  abn_id?: string;
  city?: string;
  company_name?: string;
  country?: string;
  is_business?: boolean;
  is_vat_registered?: boolean;
  state?: string;
  street1?: string;
  street2?: string;
  vat_id?: string;
  waiting_for_vat?: boolean;
  zip?: string;
  checkout_step?: string;
}

export interface PaymentsBillingHistoryListParams {
  limit?: number;
  cursor?: string;
}

export interface PaymentsCheckoutConfigParams {
  is_business_plus_trial?: boolean;
  is_autocharge_trial?: boolean;
}

export interface PaymentsStripeConfigGetParams {
  country_code?: string;
}

export interface PaymentsStripeCustomerCreateParams {
  country_code?: string;
  currency?: string;
}

export interface PaymentsStripePaymentMethodListParams {
  country_code?: string;
  currency?: string;
}

export interface PinsAddParams {
  timestamp?: string;
  channel?: string;
}

export interface PinsListParams {
  channel?: string;
}

export interface PinsRemoveParams {
  channel?: string;
  timestamp?: string;
}

export interface PresenceSetParams {
  presence?: string;
}

export interface PromoCampaignsEligibilityInfoParams {
  campaign_type?: string;
  campaign_sub_type?: string;
}

export interface PromoCampaignsRedeemParams {
  campaign_sub_type?: string;
  campaign_type?: string;
}

export interface QuipCloneCanvasParams {
  file_id?: string;
  keep_original_title?: boolean;
  remove_title_section?: boolean;
}

export interface QuipLookupFileIdParams {
  quip_thread_id?: string;
}

export interface QuipLookupThreadIdsParams {
  file_ids?: string;
}

export interface QuipThreadMarkParams {
  channel_id?: string;
  thread_ts?: string;
  ts?: string;
  mark_unread?: boolean;
}

export interface QuipThreadSynchronizeParams {
  channel_id?: string;
  thread_ts?: string;
}

export interface ReactionsAddParams {
  channel?: string;
  timestamp?: string;
  name?: string;
}

export interface ReactionsRemoveParams {
  channel?: string;
  timestamp?: string;
  name?: string;
}

export interface RetailCostParams {
  state?: string;
  product_id?: string;
  is_final_review?: boolean;
  checkout_step?: string;
  is_future_switch?: boolean;
  country?: string;
  street1?: string;
  zip?: string;
  is_business?: boolean;
  is_vat_registered?: boolean;
  vat_id?: string;
  regional_tax_id?: string;
}

export interface RetailPlansParams {
  country?: string;
  checkout_step?: string;
}

export interface RoomsInviteResponseParams {
  response?: string;
  channel_id?: string;
  room_id?: string;
}

export interface SavedAddParams {
  item_type?: string;
  description?: string;
  client_id?: string;
  date_due?: number;
}

export interface SavedDeleteParams {
  item_type?: string;
  item_id?: string;
  ts?: string;
}

export interface SavedListParams {
  limit?: number;
  cursor?: string;
  filter?: string;
  include_tombstones?: boolean;
}

export interface SavedUpdateParams {
  item_type?: string;
  item_id?: string;
  ts?: string;
  date_due?: number;
  mark?: string;
}

export interface ScreenheroRoomsInfoParams {
  room?: string;
}

export interface SearchAppDirectoryParams {
  term?: string;
  limit?: number;
}

export interface SearchAutocompleteParams {
  query?: string;
  limit?: number;
  use_hash?: boolean;
}

export interface SearchAutocompleteFilesParams {
  query?: string;
  include_shares?: boolean;
}

export interface SearchAutocompleteTopEmojisParams {
  count?: number;
}

export interface SearchAutocompleteTriggersParams {
  query?: string;
  strict_exposure_rules?: boolean;
  trigger_types?: string;
}

export interface SearchEnterpriseParams {
  count?: number;
  query?: string;
  sort?: string;
  ignore_guest_accounts?: boolean;
  include_bots?: boolean;
  include_dangling?: boolean;
  include_deleted?: number;
  include_team_context?: boolean;
}

export interface SearchInlineParams {
  search_session_id?: string;
  client_req_id?: string;
  max_ts?: number;
  channel?: string;
  count?: number;
  page?: number;
  query?: string;
  thread_replies?: string;
  extract_len?: number;
  from_me?: boolean;
  with_me?: boolean;
}

export interface SearchModulesChannelsParams {
  module?: string;
  query?: string;
  page?: number;
  client_req_id?: string;
  search_session_id?: string;
  extracts?: number;
  highlight?: number;
  max_extract_len?: number;
  extra_message_data?: number;
  no_user_profile?: number;
  count?: number;
  file_title_only?: boolean;
  query_rewrite_disabled?: boolean;
  include_files_shares?: number;
  search_context?: string;
  search_only_my_channels?: boolean;
  channel_type?: string;
  external_shared_team_ids?: string;
  exclude_my_channels?: number;
  request_context?: string;
  spell_correction?: string;
  sort?: string;
  sort_dir?: string;
  search_only_team?: string;
}

export interface SearchModulesDmsParams {
  module?: string;
  query?: string;
  page?: number;
  client_req_id?: string;
  search_session_id?: string;
  extracts?: number;
  highlight?: number;
  max_extract_len?: number;
  extra_message_data?: number;
  no_user_profile?: number;
  count?: number;
  file_title_only?: boolean;
  query_rewrite_disabled?: boolean;
  include_files_shares?: number;
  search_context?: string;
}

export interface SearchModulesFilesParams {
  module?: string;
  query?: string;
  page?: number;
  client_req_id?: string;
  search_session_id?: string;
  extracts?: number;
  highlight?: number;
  max_extract_len?: number;
  extra_message_data?: number;
  no_user_profile?: number;
  count?: number;
  file_title_only?: boolean;
  query_rewrite_disabled?: boolean;
  include_files_shares?: number;
  search_context?: string;
  search_exclude_bots?: boolean;
  search_only_my_channels?: boolean;
  search_only_team?: string;
  facets_result_count?: number;
  sort?: string;
  sort_dir?: string;
  max_filter_suggestions?: number;
  request_context?: string;
  search_tab_filter?: string;
  search_tab_sort?: string;
}

export interface SearchModulesMessagesParams {
  module?: string;
  query?: string;
  page?: number;
  client_req_id?: string;
  search_session_id?: string;
  extracts?: number;
  highlight?: number;
  max_extract_len?: number;
  extra_message_data?: number;
  no_user_profile?: number;
  count?: number;
  file_title_only?: boolean;
  query_rewrite_disabled?: boolean;
  include_files_shares?: number;
  search_context?: string;
  search_exclude_bots?: boolean;
  search_only_my_channels?: boolean;
  spell_correction?: string;
  search_only_team?: string;
  facets_result_count?: number;
  query_refinement_suggestions_version?: number;
  recent_channels?: string;
  sort?: string;
  sort_dir?: string;
  max_filter_suggestions?: number;
  request_context?: string;
  search_tab_filter?: string;
  search_tab_sort?: string;
}

export interface SearchModulesPeopleParams {
  module?: string;
  query?: string;
  page?: number;
  client_req_id?: string;
  search_session_id?: string;
  extracts?: number;
  highlight?: number;
  max_extract_len?: number;
  extra_message_data?: number;
  no_user_profile?: number;
  count?: number;
  file_title_only?: boolean;
  query_rewrite_disabled?: boolean;
  include_files_shares?: number;
  search_context?: string;
  tz?: string;
  external_shared_team_ids?: string;
  custom_fields?: string;
  hide_deactivated_users?: number;
  request_context?: string;
  spell_correction?: string;
  sort?: string;
  sort_dir?: string;
  search_only_team?: string;
  profile_location?: string;
  profile_title?: string;
  profile_division?: string;
  profile_department?: string;
  profile_celebration?: string;
}

export interface SearchModulesTriggersParams {
  module?: string;
  query?: string;
  page?: number;
  client_req_id?: string;
  browse_session_id?: string;
  extracts?: number;
  highlight?: number;
  extra_message_data?: number;
  no_user_profile?: number;
  count?: number;
  file_title_only?: boolean;
  query_rewrite_disabled?: boolean;
  include_files_shares?: number;
  browse?: string;
  search_context?: string;
  max_filter_suggestions?: number;
  sort?: string;
  sort_dir?: string;
  search_only_my_apps?: boolean;
  strict_exposure_rules?: number;
  trigger_types?: string;
}

export interface SearchPrecacheParams {
  enterprise_token?: string;
}

export interface SearchSaveParams {
  terms?: string;
  type?: string;
}

export interface SearchTeamParams {
  query?: string;
  count?: number;
  include_usergroups?: number;
  include_guest_expiration_date?: boolean;
  include_team_context?: number;
  include_deleted?: number;
  include_bots?: number;
  set_active?: boolean;
  ignore_guest_accounts?: number;
  include_invited?: number;
}

export interface SigninFindWorkspacesParams {
  only_logged_in_teams?: boolean;
  ssb_signin?: boolean;
}

export interface SignupCheckSignupDomainsParams {
  signup_domains?: string;
}

export interface SlackAiPermissionsGetForUserParams {
  permissions?: string;
}

export interface SlackbotResponsesAddParams {
  triggers?: string;
  responses?: string;
}

export interface SlackbotResponsesDeleteParams {
  response?: string;
}

export interface SlackbotResponsesEditParams {
  response?: string;
  triggers?: string;
  responses?: string;
}

export interface SlackbotResponsesListParams {
  limit?: number;
}

export interface SolutionsListParams {
  permission?: string;
}

export interface StarsAddParams {
  channel?: string;
}

export interface StarsRemoveParams {
  channel?: string;
}

export interface SubscriptionsThreadAddParams {
  channel?: string;
  thread_ts?: string;
  last_read?: string;
}

export interface SubscriptionsThreadGetParams {
  channel?: string;
  thread_ts?: string;
}

export interface SubscriptionsThreadGetViewParams {
  limit?: number;
  fetch_threads_state?: boolean;
  priority_mode?: string;
}

export interface SubscriptionsThreadMarkParams {
  channel?: string;
  thread_ts?: string;
  ts?: string;
  read?: number;
}

export interface SubscriptionsThreadRemoveParams {
  channel?: string;
  thread_ts?: string;
  last_read?: string;
}

export interface SubteamsInfoParams {
  include_users?: boolean;
  include_count?: boolean;
  include_disabled?: boolean;
  usergroups?: string;
}

export interface SubteamsValidateHandleParams {
  handle?: string;
  target_team?: string;
}

export interface SubteamsValidateNameParams {
  name?: string;
  target_team?: string;
}

export interface TeamBillingAddContactParams {
  email?: string;
}

export interface TeamBillingChangesListParams {
  page?: number;
}

export interface TeamBillingRemoveContactParams {
  id?: number;
}

export interface TeamChangeInfoParams {
  name?: string;
  update_url_on_name_change?: boolean;
}

export interface TeamCheckEmailDomainsParams {
  email_domains?: string;
}

export interface TeamConnectedOrgsListParams {
  filter?: string;
  query?: string;
  sort?: string;
  sort_dir?: string;
}

export interface TeamFeatureGetRequestParams {
  feat_request_code?: string;
}

export interface TeamInfoParams {
  teams?: string;
  include_unlisted_if_admin?: boolean;
}

export interface TeamListExternalParams {
  include_all_visible?: number;
  include_approved_orgs?: number;
}

export interface TeamPrefsGetParams {
  target_team?: string;
}

export interface TeamPrefsSetParams {
  mode?: string;
  prefs?: string;
}

export interface TeamSlackConnectGuidelinesGetParams {
  type?: string;
}

export interface TeamSlackConnectPrefsSetParams {
  prefs?: string;
}

export interface TeamStatsExportParams {
  type?: string;
  query?: string;
  offline?: boolean;
}

export interface TeamStatsTimeSeriesParams {
  date_range?: string;
  team_id?: string;
}

export interface TeamsAuthorizedIpRangeSetParams {
  ips?: string;
}

export interface TemplatesProvisionParams {
  channel_id?: string;
  channel_template_id?: string;
  excluded_items?: string;
}

export interface UblockworkaroundHistoryParams {
  start?: string;
  count?: number;
  batch_deleted_files?: boolean;
  include_events?: string;
}

export interface UnfurlExternalValidateDomainParams {
  domain?: string;
  app?: string;
  set_active?: boolean;
}

export interface UsergroupsCreateParams {
  name?: string;
  team_id?: string;
  handle?: string;
  description?: string;
  channels?: string;
  enable_section?: boolean;
}

export interface UsergroupsUpdateParams {
  usergroup?: string;
  name?: string;
  handle?: string;
  channels?: string;
  team_id?: string;
  enable_section?: boolean;
  description?: string;
}

export interface UsergroupsUsersListParams {
  usergroup?: string;
  team_id?: string;
}

export interface UsergroupsUsersUpdateParams {
  usergroup?: string;
  users?: string;
  team_id?: string;
}

export interface UsersAdminFetchInvitesHistoryParams {
  type?: string;
  query?: string;
  sort_dir?: string;
  sort_by?: string;
}

export interface UsersAdminFetchTeamUsersParams {
  count?: number;
  include_bots?: number;
  exclude_slackbot?: boolean;
  include_deleted?: number;
  sort_dir?: string;
  sort?: string;
  target_team?: string;
  query?: string;
}

export interface UsersAdminFetchTeamUsersCsvParams {
  target_team?: string;
}

export interface UsersAdminInviteBulkParams {
  invites?: string;
  team_id?: string;
  restricted?: boolean;
  ultra_restricted?: boolean;
  campaign?: string;
}

export interface UsersAdminResendInvitationParams {
  user?: string;
  target_team?: string;
}

export interface UsersAdminSetAdminParams {
  user?: string;
}

export interface UsersAdminSetInactiveParams {
  user?: string;
  target_team?: string;
}

export interface UsersAdminSetOwnerParams {
  user?: string;
}

export interface UsersAdminSetRegularParams {
  user?: string;
}

export interface UsersChannelSectionsChannelsBulkUpdateParams {
  remove?: string;
  insert?: string;
}

export interface UsersChannelSectionsCreateParams {
  name?: string;
  emoji?: string;
  next_channel_section_id?: string;
}

export interface UsersChannelSectionsCreateLinkParams {
  section_name?: string;
  channels?: string;
  emoji?: string;
}

export interface UsersChannelSectionsDeleteParams {
  channel_section_id?: string;
}

export interface UsersChannelSectionsSetParams {
  channel_section_id?: string;
  name?: string;
  emoji?: string;
  next_channel_section_id?: string;
}

export interface UsersConsentGetParams {
  app_id?: string;
}

export interface UsersCustomStatusListParams {
  statuses_count_per_section?: number;
}

export interface UsersInfoParams {
  canonical_avatars?: boolean;
  name_tagging?: boolean;
  user?: string;
  set_active?: boolean;
}

export interface UsersInteractionsListParams {
  components?: string;
  types?: string;
}

export interface UsersInteractionsSetParams {
  component?: string;
  type?: string;
}

export interface UsersIsEarlyJoinerParams {
  user?: string;
}

export interface UsersListParams {
  canonical_avatars?: boolean;
  name_tagging?: boolean;
  limit?: number;
}

export interface UsersPrefsGetParams {
  prefs?: string;
}

export interface UsersPrefsSetParams {
  name?: string;
  value?: string;
}

export interface UsersPrefsSetNotificationsParams {
  name?: string;
  value?: boolean;
  channel_ids?: string;
  global?: boolean;
  sync?: boolean;
}

export interface UsersPreparePhotoParams {
  image?: string;
}

export interface UsersPriorityAddParams {
  user?: string;
}

export interface UsersPriorityGetRecommendationsParams {
  limit?: number;
}

export interface UsersPriorityRemoveParams {
  user?: string;
}

export interface UsersProfileGetParams {
  user?: string;
}

export interface UsersProfileGetExtrasParams {
  keys?: string;
  user?: string;
}

export interface UsersProfileGetSectionsParams {
  user?: string;
  preview_mode?: string;
}

export interface UsersProfileSetParams {
  profile?: string;
}

export interface UsersProfileSetAdminSectionsParams {
  sections?: string;
}

export interface UsersProfileSetSectionsParams {
  user?: string;
  section?: string;
  elements?: string;
}

export interface UsersRecommendParams {
  query?: string;
  source?: string;
  limit?: number;
}

export interface UsersSetPhotoParams {
  id?: number;
  crop_x?: number;
  crop_y?: number;
  crop_w?: number;
}

export interface UsersSharedInvitesListParams {
  mode?: string;
  team_id?: string;
}

export interface UsersSharedInvitesRenewParams {
  code?: string;
  team_id?: string;
}

export interface UsersSharedInvitesRevokeParams {
  code?: string;
}

export interface UsersSlackConnectOrgListParams {
  connection_type?: string;
  limit?: number;
  sort?: string;
}

export interface UsersStateMachineParams {
  machines?: string;
}

export interface ViewsCloseParams {
  client_token?: string;
  view_id?: string;
  root_view_id?: string;
}

export interface ViewsGetParams {
  view_id?: string;
}

export interface ViewsSubmitParams {
  client_token?: string;
  view_id?: string;
  state?: string;
}

export interface WorkflowsActivityListParams {
  workflow_id?: string;
  limit?: number;
  filters?: string;
}

export interface WorkflowsTemplatesListParams {
  limit?: number;
}

export interface WorkflowsTemplatesListAsDecoratedWorkflowsParams {
  template_ids?: string;
}

export interface WorkflowsTriggersDeleteParams {
  trigger_id?: string;
}

export interface WorkflowsTriggersInfoParams {
  trigger_id?: string;
}

export interface WorkflowsTriggersListParams {
  app_ids?: string;
}

export interface WorkflowsTriggersPermissionsListParams {
  trigger_id?: string;
}

export interface WorkflowsTriggersPermissionsSetParams {
  trigger_id?: string;
  permission_type?: string;
}

export interface WorkflowsTriggersPrefsGetParams {
  workflow_id?: string;
}

export interface WorkflowsTriggersTypesListParams {
  workflow_builder_only?: boolean;
  app_id?: string;
}

export interface WorkflowsTriggersUpdateParams {
  type?: string;
  trigger_id?: string;
  inputs?: string;
  workflow?: string;
  name?: string;
  description?: string;
  event?: string;
  workflow_app_id?: string;
}

// ── Response types ──────────────────────────────────────────────────────

export type SlackErrorResponse = { ok: false; error: string };

export type ActivityFeedResponse = {
  ok: true;
  items: Array<{
    is_unread: boolean;
    feed_ts: string;
    item: {
      type: string;
      message?: {
        ts: string;
        channel: string;
        is_broadcast?: boolean;
        thread_ts?: string;
        author_user_id?: string;
      };
      bundle_info?: {
        payload: {
          thread_entry: {
            channel_id: string;
            latest_ts: string;
            thread_ts: string;
            unread_msg_count: number;
            min_unread_ts?: string;
          };
        };
      };
      reaction?: {
        user: string;
        name: string;
      };
      invite?: string;
      linked_item_id?: string;
      generic_system_alert_payload?: {
        category: string;
        blocks: Array<{
          type: string;
          block_id: string;
        }>;
        reason: string;
        click_target_id: string;
      };
    };
    key: string;
    priority?: {
      vip: Record<string, unknown>;
    };
  }>;
  response_metadata: {
    next_cursor: string;
  };
};

export type ActivityMarkReadResponse = {
  ok: true;
};

export type ActivityViewsResponse = {
  ok: true;
  views: Array<{
    id: string;
    name: null;
    view_type: string;
    position: string;
    sort: string;
    filters?: Record<string, unknown>;
  }>;
};

export type AdminAccountTypePermissionsAddResponse = {
  ok: true;
  permission: {
    permission_name: string;
    assigned_account_types: string[];
    configurable_account_types: string[];
  };
};

export type AdminAccountTypePermissionsListResponse = {
  ok: true;
  permissions: Array<{
    permission_name: string;
    assigned_account_types: string[];
    always_assigned_account_types: string[];
    configurable_account_types: string[];
    is_top_level_only: boolean;
    who_can_configure_account_types: string[];
    configurable_team_types: string[];
    localized_permission_display_name: string;
  }>;
};

export type AdminAccountTypePermissionsRemoveResponse = {
  ok: true;
};

export type AdminActivityLogsListResponse = {
  ok: true;
  logs: Array<{
    api_app_id: string;
    is_workflow_app: boolean;
    is_connector: boolean;
    is_workspace_change: boolean;
    team_id: string;
    service_instance_id: string;
    date: number;
    log_author: {
      id: string;
      real_name: string;
    };
    name: string;
    is_deleted: boolean;
    is_disabled: boolean;
    icons: {
      icon_32: string;
    };
  }>;
  paging: {
    count: number;
    total: number;
    page: number;
    pages: number;
  };
};

export type AdminAnalyticsExportResponse = {
  ok: true;
};

export type AdminAnalyticsGetAppsAnalyticsResponse = {
  ok: true;
  num_found: number;
  apps_analytics: Array<{
    id: string;
    name: string;
    type: unknown[];
    categories: string[];
    source: string;
    icons: {
      image_32: string;
      image_48: string;
      image_64: string;
      image_72: string;
    };
    first_message_sent_date: number;
    last_message_sent_date: number;
    first_active_date: number;
    last_active_date: number;
    first_automation_date: number;
    last_automation_date: number;
    member_reads: {
      avg: number;
      min: number;
      max: number;
      min_observed_start_date: string;
      min_observed_end_date: string;
      max_observed_start_date: string;
      max_observed_end_date: string;
    };
    active_users: {
      avg: number;
      min: number;
      max: number;
      min_observed_start_date: string;
      min_observed_end_date: string;
      max_observed_start_date: string;
      max_observed_end_date: string;
    };
    messages_read: {
      avg: number;
      min: number;
      max: number;
      min_observed_start_date: string;
      min_observed_end_date: string;
      max_observed_start_date: string;
      max_observed_end_date: string;
    };
    actions_taken: {
      avg: number;
      min: number;
      max: number;
      min_observed_start_date: string;
      min_observed_end_date: string;
      max_observed_start_date: string;
      max_observed_end_date: string;
    };
    member_automations: {
      avg: number;
      min: number;
      max: number;
      min_observed_start_date: string;
      min_observed_end_date: string;
      max_observed_start_date: string;
      max_observed_end_date: string;
    };
    messages_sent: {
      avg: number;
      min: number;
      max: number;
      min_observed_start_date: string;
      min_observed_end_date: string;
      max_observed_start_date: string;
      max_observed_end_date: string;
    };
    automations_executed: {
      avg: number;
      min: number;
      max: number;
      min_observed_start_date: string;
      min_observed_end_date: string;
      max_observed_start_date: string;
      max_observed_end_date: string;
    };
    messages_consumed: {
      avg: number;
    };
    messages_consumed_web: {
      avg: number;
    };
    messages_consumed_discovery: {
      avg: number;
    };
    messages_consumed_events: {
      avg: number;
    };
    messages_consumed_real_time_search: {
      avg: number;
    };
    messages_consumed_admin_oversight: {
      avg: number;
    };
    files_consumed: {
      avg: number;
    };
  }>;
  next_cursor_mark: string;
};

export type AdminAnalyticsGetAvailableDateRangeResponse = {
  ok: true;
  start_date: string;
  date_last_updated: number;
  date_last_indexed: number;
};

export type AdminAnalyticsGetChannelAnalyticsResponse = {
  ok: true;
  next_cursor_mark: string;
  num_found: number;
  channel_analytics: Array<{
    channel_id: string;
    team_id: string;
    date_create: number;
    is_shared: number;
    name: string;
    topic: string;
    purpose: string;
    total_members_count: number;
    full_members_count: number;
    guest_members_count: number;
    chats_count: number;
    messages_count: number;
    reactions_count: number;
    users_who_reacted_count: number;
    writers_count: number;
    is_private: boolean;
    last_message_posted: number;
    readers_count: number;
    writers_percentage?: number;
    huddles_count: number;
  }>;
  channels: Array<{
    id: string;
    name: string;
    is_channel: boolean;
    is_group: boolean;
    is_im: boolean;
    is_mpim: boolean;
    is_private: boolean;
    created: number;
    is_archived: boolean;
    is_general: boolean;
    unlinked: number;
    name_normalized: string;
    is_shared: boolean;
    is_frozen: boolean;
    is_org_shared: boolean;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    context_team_id: string;
    updated: number;
    parent_conversation: null;
    creator: string;
    is_moved: number;
    is_ext_shared: boolean;
    shared_team_ids: string[];
    internal_team_ids: string[];
    pending_connected_team_ids: unknown[];
    is_member: boolean;
    members: unknown[];
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    properties?: {
      is_dormant?: boolean;
      tabs?: Array<{
        type: string;
        label: string;
        id: string;
        is_disabled?: boolean;
        data?: {
          file_id: string;
          shared_ts: string;
          folder_bookmark_id?: string;
        };
      }>;
      tabz?: Array<{
        type: string;
        label?: string;
        is_disabled?: boolean;
        id?: string;
        data?: {
          file_id: string;
          shared_ts: string;
          folder_bookmark_id?: string;
        };
      }>;
      who_can_manage_tabs?: string;
      canvas?: {
        file_id: string;
        is_empty: boolean;
        quip_thread_id: string;
        is_migrated: boolean;
      };
      meeting_notes?: {
        file_id: string;
      };
      huddles?: {
        ai_notes_settings_restricted: boolean;
        is_huddle_channel: boolean;
      };
    };
    previous_names: string[];
  }>;
};

export type AdminAnalyticsGetMemberAnalyticsResponse = {
  ok: true;
  next_cursor_mark: string;
  num_found: number;
  member_activity: Array<{
    user_id: string;
    team_id: string;
    username: string;
    date_created: number;
    is_primary_owner: boolean;
    is_owner: boolean;
    is_admin: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    is_invited_member: boolean;
    is_invited_guest: boolean;
    real_name: string;
    display_name: string;
    messages_posted_in_channel: number;
    reactions_added: number;
    days_active: number;
    days_active_desktop: number;
    days_active_android: number;
    days_active_ios: number;
    files_added_count: number;
    days_active_apps: number;
    days_active_workflows: number;
    days_active_slack_connect: number;
    total_calls_count: number;
    slack_calls_count: number;
    slack_huddles_count: number;
    search_count: number;
    is_billable_seat: boolean;
    messages_posted: number;
    date_claimed: number;
    date_last_active: number;
    date_last_active_ios: number;
    date_last_active_android: number;
    date_last_active_desktop: number;
    user_title?: string;
    date_deleted?: number;
  }>;
};

export type AdminAppsCertifiedListResponse = {
  ok: true;
  apps: Array<{
    id: string;
    is_installed: boolean;
    is_request_pending: boolean;
    namespace: string;
    app_resolution: string;
    requires_config: boolean;
    missing_required_config: boolean;
    config_options: {
      variables: Array<{
        name: string;
        title: string;
        description: string;
        hint: string;
        min_length: number;
        max_length: number;
        is_required: boolean;
        is_secret?: boolean;
      }>;
    };
    admin_app_config: {
      workflow_auth_strategy?: string;
    };
    is_config_request_pending: boolean;
    date_released: number;
    profile: {
      name: string;
      icons: {
        image_32: string;
        image_48: string;
        image_64: string;
        image_72: string;
        image_96: string;
        image_128: string;
        image_192: string;
        image_512: string;
        image_1024: string;
        image_36?: string;
      };
      id: string;
    };
    is_hidden: boolean;
    has_slow_execution?: boolean;
  }>;
};

export type AdminAppsConfigLookupResponse = {
  ok: true;
  configs: Array<{
    app_id: string;
    workflow_auth_strategy: string;
    domain_restrictions: {
      urls: unknown[];
    };
    rich_link_preview_type: null;
  }>;
};

export type AdminAppsConfigSetResponse = {
  ok: true;
};

export type AdminAppsInstalledListResponse = {
  ok: true;
  apps: Array<{
    id: string;
    name: string;
    description: string;
    help_url: string;
    privacy_policy_url: string;
    app_homepage_url: string;
    app_directory_url: string;
    is_granular_bot_app: boolean;
    is_app_directory_approved: boolean;
    is_internal: boolean;
    developer_type: string;
    socket_mode_enabled: boolean;
    icons: {
      image_32: string;
      image_36: string;
      image_48: string;
      image_64: string;
      image_72: string;
      image_96: string;
      image_128: string;
      image_192: string;
      image_512: string;
      image_1024: string;
    };
    additional_info: string;
    date_create: number;
    is_certified: boolean;
  }>;
  response_metadata?: {
    next_cursor: string;
  };
};

export type AdminAppsLookupResponse = {
  ok: true;
  apps: Record<string, {
    status: string;
    function_count: number;
    domain_allowlisting_enabled: boolean;
    is_email_domain_restriction_allowed: boolean;
    has_3p_oauth_provider: boolean;
    is_work_object_enabled: boolean;
    trigger_type_count: number;
    is_ai_app: boolean;
    is_agent_app: boolean;
    is_search_app: boolean;
  }>;
};

export type AdminAppsRecommendAddResponse = {
  ok: true;
};

export type AdminAppsRecommendListResponse = {
  ok: true;
  apps: unknown[];
};

export type AdminAppsRecommendRemoveResponse = {
  ok: true;
};

export type AdminAppsSearchResponse = {
  ok: true;
  apps: Array<{
    id: string;
    name: string;
    description: string;
    help_url: string;
    privacy_policy_url: string;
    app_homepage_url: string;
    app_directory_url: string;
    is_granular_bot_app: boolean;
    is_app_directory_approved: boolean;
    is_internal: boolean;
    developer_type: string;
    socket_mode_enabled: boolean;
    icons: {
      image_32: string;
      image_36: string;
      image_48: string;
      image_64: string;
      image_72: string;
      image_96: string;
      image_128: string;
      image_192: string;
      image_512: string;
      image_1024: string;
    };
    additional_info: string;
    date_create: number;
    functions?: Array<{
      id: string;
      callback_id: string;
      title: string;
    }>;
  }>;
};

export type AdminAppsUninstallResponse = {
  ok: true;
};

export type AdminBillingSettingsBootResponse = {
  ok: true;
  can_change_purchase_settings: boolean;
  current_product_id: string;
  is_current_product_trial: boolean;
  is_team_in_dunning: boolean;
  next_product_id: string;
  should_show_billing_email_daily_setting: boolean;
  should_show_billing_email_monthly_setting: boolean;
  should_show_request_settings: boolean;
  auto_detected_country_code: string;
};

export type AdminDeprecationsListResponse = {
  ok: true;
  last_updated_ts: number;
  deprecations: unknown[];
};

export type AdminFeaturesListResponse = {
  ok: true;
  categories: Array<{
    name: string;
    description: string;
    feature_count: number;
    id: string;
  }>;
};

export type AdminFeaturesPermissionsListResponse = {
  ok: true;
  permissions: Array<{
    permission_id: number;
    permission_name: string;
    localized_permission_display_name: string;
    localized_permission_display_header: string;
    feature_group: string;
    team_prefs: string[];
    supported_enablements: unknown[];
    in_grace_period: boolean;
    is_sampling_supported: boolean;
    state: string;
  }>;
  feature_groups: Array<{
    name: string;
    id: string;
    category: string;
  }>;
  is_team_on_v2_package: boolean;
  future_permissions: unknown[];
};

export type AdminFunctionsListResponse = {
  ok: true;
  functions: unknown[];
  response_metadata: {
    next_cursor: string;
  };
};

export type AdminRolesAddMembersResponse = {
  ok: true;
};

export type AdminRolesEntityListAssignmentsResponse = {
  ok: true;
  role_assignments: Array<{
    role_id: string;
    users: string[];
  }>;
};

export type AdminRolesListResponse = {
  ok: true;
  roles: Array<{
    name: string;
    description: string;
    type: string;
    is_top_level_only: boolean;
    id: string;
    is_new: boolean;
    permissions: string[];
    num_users_assigned: number;
    num_usergroups_assigned: number;
    localized_type: string;
    localized_name: string;
    localized_description: string;
    localized_permissions: Array<{
      permission_id: number;
      permission_name: string;
      localized_permission_display_name: string;
    }>;
  }>;
  next_cursor: string;
};

export type AdminRolesRemoveMembersResponse = {
  ok: true;
};

export type AdminSessionsAccessLogsResponse = {
  ok: true;
  logins: Array<{
    team_id: string;
    user_id: string;
    checksum: string;
    user_agent: string;
    ip: string;
    date_first: number;
    date_last: number;
    num: number;
    ip_info: null;
    ua: {
      simple: string;
      icon: string;
      full: string;
    };
    id: number;
    username: string;
    profile_info: {
      title: string;
      phone: string;
      skype: string;
      real_name: string;
      real_name_normalized: string;
      display_name: string;
      display_name_normalized: string;
      fields: null;
      status_text: string;
      status_emoji: string;
      status_emoji_display_info: unknown[];
      status_expiration: number;
      avatar_hash: string;
      first_name: string;
      last_name: string;
      image_24: string;
      image_32: string;
      image_48: string;
      image_72: string;
      image_192: string;
      image_512: string;
      status_text_canonical: string;
    };
  }>;
  response_metadata: {
    next_cursor: string;
  };
};

export type AdminWorkflowsSearchResponse = {
  ok: true;
  workflows: unknown[];
  total_found: number;
};

export type AdminWorkflowsTriggersTypesListResponse = {
  ok: true;
  trigger_types: unknown[];
};

export type AdminWorkflowsTriggersTypesPermissionsLookupResponse = {
  ok: true;
  permissions: {
    Ftt0101: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt0107: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt0104: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt010C: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt010D: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt010E: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt010F: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt010G: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt010J: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt0109: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt0106: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt010L: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt010H: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt0103: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt010V: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt010U: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt010M: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
    Ftt07DZQN5VHC: {
      permissions: {
        trigger_type: {
          permission: string;
        };
        private_channel_access: {
          permission: string;
        };
        private_channel_message: {
          permission: string;
        };
      };
    };
  };
  metadata: {
    Ftt0101: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt0107: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt0104: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt010C: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt010D: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt010E: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt010F: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt010G: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt010J: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt0109: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt0106: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt010L: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt010H: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt0103: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt010V: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt010U: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt010M: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
    Ftt07DZQN5VHC: {
      date_released: number;
      workflows_using: number;
      available_in_workflow_builder: boolean;
    };
  };
};

export type AdminWorkflowsTriggersTypesPermissionsSetResponse = {
  ok: true;
};

export type AiAlphaAgentsThreadsListResponse = {
  ok: true;
  threads: unknown[];
};

export type AiAlphaDigestListResponse = {
  ok: true;
  digests: unknown[];
  is_stale_or_empty_digest: boolean;
};

export type AiAlphaDigestListDigestChannelIdsResponse = {
  ok: true;
  channel_ids: unknown[];
};

export type AiAlphaSummarizeChannelUnreadsResponse = {
  ok: true;
  summary: {
    id: string;
  };
};

export type AiAlphaTranslateLocalesResponse = {
  ok: true;
  locales: Array<{
    name: string;
    locale: string;
  }>;
};

export type AiFeedbackRequestResponse = {
  ok: true;
};

export type AiAppsListResponse = {
  ok: true;
  apps: Array<{
    id: string;
    name: string;
    developer_name: string;
    desc: string;
    commands: Record<string, {
      usage: string;
      desc: string;
      name: string;
      type: string;
      app: string;
    }>;
    is_xoxa_app: boolean;
    app_user_id: string;
    long_desc: string;
    long_desc_formatted: string;
    url: string;
    support_url: string;
    config_url: string;
    is_directory_published: boolean;
    is_directory_approved: boolean;
    is_distributed: boolean;
    is_slack_integration: boolean;
    youtube_url: string;
    app_card_color: string;
    installation_summary: string;
    user_can_manage: boolean;
    team_id: string;
    is_external: boolean;
    is_installed: boolean;
    is_workflow_app: boolean;
    owner_ids: unknown[];
    org_status: string;
    security_compliance: {
      company_developer_name?: string;
      company_location?: string;
      tos_url?: string;
      data_retention_policy?: string;
      data_archival_removal_policy?: string;
      data_storage_policy?: string;
      data_center_location?: string[];
      cert_comply_soc_cert_url?: string;
      cert_comply_hipaa_compliant?: string;
      cert_comply_privacy_shield_notice_url?: string;
      cert_comply_gdpr_commitment_url?: string;
      cert_comply_sub_processors?: string;
      cert_comply_guidelines_sub_processors_url?: string;
      cert_comply_data_deletion_requests_handling?: string;
      security_support_sso?: string;
      security_what_sso?: string;
      security_support_saml?: string;
      security_dedicated_security?: string;
      security_email?: string;
      security_vulnerability_program?: string;
      security_vulnerability_url?: string;
      security_bug_bounty_program?: string;
      security_bug_bounty_url?: string;
      security_vulnerability_program_slack?: string;
      security_third_party_auths_required?: string;
      use_llm?: string;
      llm_desc?: string;
      llm_retention_settings_desc?: string;
      llm_data_tenancy_desc?: string;
      llm_data_residency_desc?: string;
    };
    is_certified: boolean;
    is_ai_app: boolean;
    is_agent_app: boolean;
    is_search_app: boolean;
    date_installed: number;
    categories: Record<Timestamp, {
      id: number;
      name: string;
    }>;
    icons: {
      image_32: string;
      image_48: string;
      image_64: string;
      image_72: string;
      image_96: string;
      image_128: string;
      image_192: string;
      image_512: string;
      image_1024: string;
      image_36: string;
    };
    bot_user: {
      id: string;
      username: string;
      memberships_count: number;
    };
    auth: {
      created_by: string;
      date_created: string;
      scopes: string[];
      username: string;
      full_name: string;
      real_name: string;
      icons: {
        image_24: string;
        image_32: string;
        image_48: string;
        image_72: string;
        image_192: string;
        image_512: string;
        image_original?: string;
        image_1024?: string;
      };
    };
    app_home_metadata: {
      home_tab_enabled: boolean;
      messages_tab_enabled: boolean;
      messages_tab_read_only_enabled: boolean;
    };
    screenshots?: Array<{
      image_1000: string;
      image_440: string;
      image_original: string;
      image_1600: string;
      id: string;
    }>;
    assistant_description?: string;
    assistant_suggested_prompts?: Array<{
      title: string;
      message: string;
    }>;
    work_objects?: {
      is_active: boolean;
    };
  }>;
  cache_ts: number;
};

export type ApiFeaturesResponse = {
  ok: true;
  features: {
    feature_builder_story_step: boolean;
    feature_olug_remove_required_workspace_setting: boolean;
    feature_file_threads: boolean;
    feature_broadcast_indicator: boolean;
    feature_sonic_emoji: boolean;
    feature_attachments_inline: boolean;
    feature_desktop_symptom_events: boolean;
    feature_gdpr_user_join_tos: boolean;
    feature_user_invite_tos_april_2018: boolean;
    feature_channel_mgmt_message_count: boolean;
    feature_channel_exports: boolean;
    feature_allow_intra_word_formatting: boolean;
    feature_slim_scrollbar: boolean;
    feature_edge_upload_proxy_check: boolean;
    feature_set_tz_automatically: boolean;
    feature_attachments_v2: boolean;
    feature_beacon_js_errors: boolean;
    feature_user_app_disable_speed_bump: boolean;
    feature_apps_manage_permissions_scope_changes: boolean;
    feature_ia_member_profile: boolean;
    feature_desktop_reload_on_generic_error: boolean;
    feature_desktop_extend_app_menu: boolean;
    feature_desktop_restart_service_worker: boolean;
    feature_wta_stop_creation: boolean;
    feature_admin_email_change_confirm: boolean;
    feature_improved_email_rendering: boolean;
    feature_recent_desktop_files: boolean;
    feature_cea_allowlist_changes: boolean;
    feature_cea_channel_management: boolean;
    feature_cea_admin_controls: boolean;
    feature_cea_allowlist_changes_plus: boolean;
    feature_ia_layout: boolean;
    feature_threaded_call_block: boolean;
    feature_enterprise_mobile_device_check: boolean;
    feature_trace_jq_init: boolean;
    feature_seven_days_email_update: boolean;
    feature_channel_sections: boolean;
    feature_show_email_forwarded_by: boolean;
    feature_mpdm_audience_expansion: boolean;
    feature_remove_email_preview_link: boolean;
    feature_desktop_enable_tslog: boolean;
    feature_email_determine_charset: boolean;
    feature_no_deprecation_in_updater: boolean;
    feature_pea_domain_allowlist: boolean;
    feature_composer_auth_admin: boolean;
    feature_atlassian_offer: boolean;
    feature_esc_grid_migrations_format_translate: boolean;
    feature_vitess_grpc: boolean;
    feature_rel_notes_product_updates: boolean;
    feature_users_count_latest_cache: boolean;
    feature_users_count_latest_cache_compare: boolean;
    feature_workflows_grid_migrations: boolean;
    feature_builder_block_kit: boolean;
    feature_cea_empty_pref_to_null: boolean;
    feature_phase3_languages: boolean;
    feature_bot_user_id_lookup_for_app_profiles: boolean;
  };
  config_version_ts: number;
};

export type ApiGetFlannelHttpUrlResponse = {
  ok: true;
  url: string;
  ttl_seconds: number;
};

export type AppUninstallTasksListResponse = {
  ok: true;
  active_tasks: unknown[];
  is_over_recent_task_limit: boolean;
};

export type AppsActionsListForResourceResponse = {
  ok: true;
  actions: unknown[];
  channel_actions_info: {
    channel_actions_ts: null;
    channel_actions_count: number;
  };
};

export type AppsActionsV2ExecuteResponse = {
  ok: true;
};

export type AppsAuthExternalUserAuthsGetResponse = {
  ok: true;
  apps: Record<string, unknown>;
};

export type AppsCertifiedListResponse = {
  ok: true;
  apps: Array<{
    id: string;
    namespace: string;
    app_resolution: null;
    is_installed: boolean;
    is_request_pending: boolean;
    has_slow_execution: boolean;
    requires_config: boolean;
    missing_required_config: boolean;
    config_options: {
      variables: Array<{
        name: string;
        title: string;
        description: string;
        hint?: string;
        min_length: number;
        max_length: number;
        is_required: boolean;
        is_secret?: boolean;
      }>;
    };
    is_config_request_pending: boolean;
    admin_app_config: {
      workflow_auth_strategy: string;
    };
    profile: {
      id: string;
      name: string;
      icons: {
        image_32: string;
        image_36: string;
        image_48: string;
        image_64: string;
        image_72: string;
        image_96: string;
        image_128: string;
        image_192: string;
        image_512: string;
        image_1024: string;
      };
    };
  }>;
  can_user_manage_app: boolean;
  is_aaa_enabled: boolean;
};

export type AppsHomeDispatchOpenEventResponse = {
  ok: true;
};

export type AppsIndexFiltersListResponse = {
  ok: true;
  filters: Array<{
    id: number;
    type: string;
    label: string;
  }>;
};

export type AppsIndexListResponse = {
  ok: true;
  total_apps_installed: number;
  categories: Array<{
    id: string;
    name: string;
    display_name: string;
    apps: Array<{
      name: string;
      short_description: string;
      app_id: string;
      bot_id: string;
      bot_user_id: string;
      icons: {
        image_32: string;
        image_36: string;
        image_48: string;
        image_64: string;
        image_72: string;
        image_96: string;
        image_128: string;
        image_192: string;
        image_512: string;
        image_1024: string;
      };
      is_installed: boolean;
      slug: string;
      is_directory_approved: boolean;
      is_directory_published: boolean;
      is_distributed: boolean;
      directory_payload: {
        pricing_info: string;
        supported_languages: Record<string, unknown>;
      };
    }>;
    total_apps: number;
    next_cursor: string;
  }>;
};

export type AppsIndexSearchResponse = {
  ok: true;
  categories: Array<{
    id: string;
    name: string;
    display_name: string;
    apps: Array<{
      name: string;
      short_description: string;
      icons: {
        image_32: string;
        image_36: string;
        image_48: string;
        image_64: string;
        image_72: string;
        image_96: string;
        image_128: string;
        image_192: string;
        image_512: string;
        image_1024: string;
      };
      app_id: string;
      bot_id: string;
      bot_user_id: string;
      is_installed: boolean;
      approval_status: string;
      is_enterprise_resolution: boolean;
      slug: string;
      is_directory_published: boolean;
      is_directory_approved: boolean;
      is_distributed: boolean;
      directory_payload: {
        pricing_info: string;
        supported_languages: Record<string, unknown>;
      };
    }>;
    total_apps: number;
    next_cursor: string;
    warnings: null;
  }>;
};

export type AppsManifestCreateResponse = {
  ok: true;
  app_id: string;
  credentials: {
    client_id: string;
    client_secret: string;
    verification_token: string;
    signing_secret: string;
  };
  oauth_authorize_url: string;
  team_id: string;
  team_domain: string;
};

export type AppsManifestExportResponse = {
  ok: true;
  manifest: {
    display_information: {
      name: string;
      description: string;
      background_color: string;
      long_description: string;
    };
    features?: {
      app_home?: {
        home_tab_enabled: boolean;
        messages_tab_enabled: boolean;
        messages_tab_read_only_enabled: boolean;
      };
      bot_user: {
        display_name: string;
        always_online: boolean;
      };
      unfurl_domains?: string[];
      rich_previews?: {
        is_active: boolean;
      };
    };
    oauth_config?: {
      redirect_urls: string[];
      scopes: {
        user: string[];
        bot: string[];
      };
    };
    settings: {
      org_deploy_enabled: boolean;
      socket_mode_enabled: boolean;
      token_rotation_enabled: boolean;
      allowed_ip_address_ranges?: string[];
    };
  };
};

export type AppsManifestUpdateResponse = {
  ok: true;
  app_id: string;
  permissions_updated: boolean;
};

export type AppsManifestValidateResponse = {
  ok: true;
};

export type AppsProfileGetResponse = {
  ok: true;
  app_profile: {
    id: string;
    name: string;
    developer_name: string;
    desc: string;
    commands: Record<string, {
      usage: string;
      desc: string;
      name: string;
      type: string;
      app: string;
    }>;
    is_xoxa_app: boolean;
    app_user_id: string;
    long_desc: string;
    long_desc_formatted: string;
    url: string;
    support_url: string;
    config_url: string;
    is_directory_published: boolean;
    is_directory_approved: boolean;
    is_distributed: boolean;
    is_slack_integration: boolean;
    youtube_url: string;
    app_card_color: string;
    installation_summary: string;
    user_can_manage: boolean;
    team_id: string;
    is_external: boolean;
    is_installed: boolean;
    is_workflow_app: boolean;
    owner_ids: unknown[];
    org_status: string;
    security_compliance: {
      company_developer_name?: string;
      company_location?: string;
      tos_url?: string;
      data_retention_policy?: string;
      data_archival_removal_policy?: string;
      data_storage_policy?: string;
      cert_comply_soc_cert_url?: string;
      cert_comply_hipaa_compliant?: string;
      cert_comply_sub_processors?: string;
      cert_comply_guidelines_sub_processors_url?: string;
      cert_comply_data_deletion_requests_handling?: string;
      security_support_sso?: string;
      security_what_sso?: string;
      security_support_saml?: string;
      security_dedicated_security?: string;
      security_email?: string;
      security_vulnerability_program?: string;
      security_vulnerability_url?: string;
      security_bug_bounty_program?: string;
      security_bug_bounty_url?: string;
      security_vulnerability_program_slack?: string;
      security_third_party_auths_required?: string;
      use_llm?: string;
      cert_comply_gdpr_commitment_url?: string;
      data_center_location?: string[];
      data_how_host?: string;
      data_host_company?: string;
      cert_comply_iso_iec_27001_cert_url?: string;
      cert_comply_iso_iec_27017_cert_url?: string;
      cert_comply_iso_iec_27018_cert_url?: string;
      cert_comply_fedramp_cert_url?: string;
      cert_comply_csa_star_level_cert_url?: string;
      cert_comply_privacy_shield_notice_url?: string;
      security_third_party_services?: string;
    };
    is_certified: boolean;
    is_ai_app: boolean;
    is_agent_app: boolean;
    is_search_app: boolean;
    date_installed?: number;
    categories?: Record<Timestamp, {
      id: number;
      name: string;
    }>;
    screenshots?: Array<{
      image_original: string;
      image_440: string;
      image_1000: string;
      image_1600: string;
      id: string;
    }>;
    icons: {
      image_32: string;
      image_48: string;
      image_64: string;
      image_72: string;
      image_96: string;
      image_128: string;
      image_192: string;
      image_512: string;
      image_1024: string;
      image_36: string;
    };
    bot_user?: {
      id: string;
      username: string;
      memberships_count: number;
    };
    auth?: {
      created_by: string;
      date_created: string;
      scopes: string[];
      username: string;
      full_name: string;
      real_name: string;
      icons: {
        image_original?: string;
        image_24: string;
        image_32: string;
        image_48: string;
        image_72: string;
        image_192: string;
        image_512: string;
        image_1024?: string;
      };
    };
    work_objects?: {
      is_active: boolean;
    };
    app_home_metadata?: {
      home_tab_enabled: boolean;
      messages_tab_enabled: boolean;
      messages_tab_read_only_enabled: boolean;
    };
    user_is_creation_team_member?: boolean;
    config?: {
      bot_id: string;
      created_by: string;
      descriptive_label: string;
      date_created: number;
      date_deleted: number;
      is_active: number;
      is_owned_by_viewer: boolean;
      is_public: boolean;
      is_custom_integration: boolean;
      username: string;
    };
    permissions?: Record<string, unknown>;
  };
  directory_payload_public: {
    privacy_link?: string;
  };
};

export type AppsRecommendationsListResponse = {
  ok: true;
  app_recommendations: unknown[];
};

export type AppsScopesGroupedInfoResponse = {
  ok: true;
  scope_info: {
    actions: {
      heading: string;
      secondary_groups: {
        channel_actions: {
          heading: string;
          scopes_info: Array<{
            scopes: string[];
            description: string;
          }>;
        };
        workspace_actions: {
          heading: string;
          scopes_info: Array<{
            scopes: string[];
            description: string;
          }>;
        };
        user_actions?: {
          heading: string;
          scopes_info: Array<{
            scopes: string[];
            description: string;
          }>;
        };
      };
    };
    content: {
      heading: string;
      secondary_groups: {
        channel_content: {
          heading: string;
          scopes_info: Array<{
            scopes: string[];
            description: string;
          }>;
        };
        workspace_content: {
          heading: string;
          scopes_info: Array<{
            scopes: string[];
            description: string;
          }>;
        };
      };
    };
  };
};

export type AppsScopesInfoResponse = {
  ok: true;
  scope_info: Array<{
    name: string;
    description: string;
    is_sensitive: boolean;
    token_type: string;
    is_optional: boolean;
  }>;
};

export type AppsTeamVariablesDeleteResponse = {
  ok: true;
  variables: Array<{
    name: string;
    ok: boolean;
  }>;
};

export type AppsTeamVariablesGetResponse = {
  ok: true;
  variables: Array<{
    source: string;
    name: string;
    value: string;
    note: string;
    is_secret: boolean;
    is_locked: boolean;
  }>;
};

export type AppsTeamVariablesSetResponse = {
  ok: true;
  variables: Array<{
    name: string;
    ok: boolean;
    value: string;
  }>;
};

export type AssistantThreadsChangeContextResponse = {
  ok: true;
};

export type AssistantThreadsStartThreadResponse = {
  ok: true;
  channel_id: string;
  thread_ts: string;
};

export type AuthCaptchaResponse = {
  ok: true;
  sitekey: string;
};

export type AuthRevokeResponse = {
  ok: true;
  revoked: boolean;
};

export type AuthTestResponse = {
  ok: true;
  url: string;
  team: string;
  user: string;
  team_id: string;
  user_id: string;
  is_enterprise_install: boolean;
};

export type BlocksActionsResponse = {
  ok: true;
};

export type BlocksFormatResponse = {
  ok: true;
  message: {
    blocks: Array<{
      type: string;
      text: {
        type: string;
        text: string;
        verbatim: boolean;
      };
      block_id: string;
    }>;
  };
};

export type BookmarksAddResponse = {
  ok: true;
  bookmark: {
    id: string;
    channel_id: string;
    title: string;
    link: string;
    icon_url: null;
    type: string;
    date_created: number;
    date_updated: number;
    rank: string;
    last_updated_by_user_id: string;
    last_updated_by_team_id: string;
    shortcut_id: string;
    app_id: string;
    app_action_id: string;
    image_url: null;
    date_create: number;
    date_update: number;
    parent_id: string;
  };
};

export type BookmarksListResponse = {
  ok: true;
  bookmarks: Array<{
    id: string;
    channel_id: string;
    title: string;
    link: string;
    icon_url: string;
    type: string;
    date_created: number;
    date_updated: number;
    rank: string;
    last_updated_by_user_id: string;
    last_updated_by_team_id: string;
    shortcut_id: string;
    app_id: string;
    app_action_id: string;
    image_url: string;
    date_create: number;
    date_update: number;
    parent_id: string;
  }>;
};

export type BookmarksRemoveResponse = {
  ok: true;
};

export type CalendarGetInstalledCalendarsResponse = {
  ok: true;
  gcal: {
    is_installed: boolean;
    app_id: string;
    is_manageable_by_user: boolean;
  };
  ocal: {
    is_installed: boolean;
    app_id: string;
    is_manageable_by_user: boolean;
  };
};

export type CalendarUserInfoResponse = {
  ok: true;
  auth_url: string;
};

export type CanvasesGetCannedTemplatesResponse = {
  ok: true;
  files: Array<{
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    permalink: string;
    permalink_public: string;
    url_static_preview: string;
    quip_thread_id: string;
    updated: number;
    update_notification: number;
    canvas_readtime: number;
    source_team: string;
    skipped_shares: boolean;
    teams_shared_with: unknown[];
    is_restricted_sharing_enabled: boolean;
    has_rich_preview: boolean;
    file_access: string;
    access: string;
    org_or_workspace_access: string;
    title_blocks: Array<{
      type: string;
      block_id: string;
    }>;
    canvas_creator_id: string;
    team_pref_version_history_enabled: boolean;
    canvas_printing_enabled: boolean;
    canvas_template_mode: string;
    template_conversion_ts: number;
    template_name: string;
    template_title: string;
    template_description: string;
    template_icon: string;
    is_global_template: boolean;
    template_locale: string;
    is_ai_suggested: boolean;
  }>;
};

export type CanvasesGetTemplatesResponse = {
  ok: true;
  created_by_user: unknown[];
  shared_with_user: unknown[];
  created_by_org: unknown[];
  created_by_sales: unknown[];
  canned_templates: Array<{
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    permalink: string;
    permalink_public: string;
    url_static_preview: string;
    quip_thread_id: string;
    updated: number;
    update_notification: number;
    canvas_readtime: number;
    source_team: string;
    skipped_shares: boolean;
    teams_shared_with: unknown[];
    is_restricted_sharing_enabled: boolean;
    has_rich_preview: boolean;
    file_access: string;
    access: string;
    org_or_workspace_access: string;
    canvas_creator_id: string;
    team_pref_version_history_enabled: boolean;
    canvas_printing_enabled: boolean;
    canvas_template_mode: string;
    template_conversion_ts: number;
    template_name: string;
    template_title: string;
    template_description: string;
    template_icon: string;
    is_global_template: boolean;
    template_locale: string;
    is_ai_suggested: boolean;
  }>;
  total_number_of_templates_created_by_user: number;
  total_number_of_templates_shared_with_user: number;
  total_number_of_templates_created_by_org: number;
  total_number_of_templates_created_by_sales: number;
  total_number_of_canned_templates: number;
};

export type CanvasesListHeadersResponse = {
  ok: true;
  headers: Array<{
    id: string;
    url: string;
    preview_url: string;
    category_id: string;
    artist?: string;
    name: string;
  }>;
};

export type CanvasesNotificationSectionsResponse = {
  ok: true;
  section_ids: string[];
};

export type ChannelsPrefsGetResponse = {
  ok: true;
  channel_id: string;
  pref_name: string;
  pref_value: {
    type?: string[];
    user?: string[];
  };
};

export type ChannelsPrefsSetResponse = {
  ok: true;
  prefs: {
    who_can_post: {
      type: string[];
      user: string[];
    };
    can_thread: {
      type: string[];
      user?: string[];
    };
  };
};

export type ChatAttachmentActionResponse = {
  ok: true;
};

export type ChatCommandResponse = {
  ok: true;
  keep_input: boolean;
};

export type ChatDeleteResponse = {
  ok: true;
  channel: string;
  ts: string;
};

export type ChatDeleteAttachmentResponse = {
  ok: true;
  channel: string;
  ts: string;
  attachment: string;
};

export type ChatPostMessageResponse = {
  ok: true;
  channel: string;
  ts: string;
  message: {
    user: string;
    type: string;
    ts: string;
    client_msg_id: string;
    text: string;
    team?: string;
    thread_ts?: string;
    parent_user_id?: string;
    blocks: Array<{
      type: string;
      block_id: string;
    }>;
    user_team?: string;
    source_team?: string;
    subtype?: string;
    root?: {
      user: string;
      type: string;
      ts: string;
      client_msg_id: string;
      text: string;
      team: string;
      user_team?: string;
      source_team?: string;
      user_profile?: {
        avatar_hash: string;
        image_72: string;
        first_name: string;
        real_name: string;
        display_name: string;
        team: string;
        name: string;
        is_restricted: boolean;
        is_ultra_restricted: boolean;
      };
      thread_ts: string;
      reply_count: number;
      reply_users_count: number;
      latest_reply: string;
      reply_users: string[];
      is_locked: boolean;
      subscribed: boolean;
      blocks: Array<{
        type: string;
        block_id: string;
      }>;
      last_read?: string;
    };
  };
};

export type ChatRemoveUnfurlLinkResponse = {
  ok: true;
};

export type ChatShareMessageResponse = {
  ok: true;
  channel: string;
  ts: string;
};

export type ChatUnfurlLinkResponse = {
  ok: true;
  attachments: Record<Url, {
    fallback: string;
    from_url: string;
    ts: string;
    author_id: string;
    author_subname: string;
    channel_id: string;
    channel_team: string;
    channel_name: string;
    is_msg_unfurl: boolean;
    text: string;
    message_blocks: Array<{
      team: string;
      channel: string;
      ts: string;
      message: {
        blocks: Array<{
          type: string;
          block_id: string;
        }>;
      };
    }>;
    author_name: string;
    author_link: string;
    author_icon: string;
    mrkdwn_in: string[];
    from_hidden_wksp: boolean;
    id: number;
    original_url: string;
  }>;
};

export type ChatUpdateResponse = {
  ok: true;
  channel: string;
  ts: string;
  text: string;
  message: {
    user: string;
    type: string;
    client_msg_id: string;
    text: string;
    team?: string;
    thread_ts?: string;
    reply_count?: number;
    reply_users_count?: number;
    latest_reply?: string;
    reply_users?: string[];
    is_locked?: boolean;
    subscribed?: boolean;
    last_read?: string;
    attachments?: Array<{
      from_url: string;
      service_icon?: string;
      thumb_url?: string;
      thumb_width?: number;
      thumb_height?: number;
      audio_html?: string;
      audio_html_width?: number;
      audio_html_height?: number;
      id: number;
      original_url: string;
      fallback: string;
      title?: string;
      title_link?: string;
      service_name?: string;
      service_url?: string;
      ts?: string;
      author_id?: string;
      channel_id?: string;
      channel_team?: string;
      is_msg_unfurl?: boolean;
      is_reply_unfurl?: boolean;
      message_blocks?: Array<{
        team: string;
        channel: string;
        ts: string;
        message: {
          blocks: Array<{
            type: string;
            block_id: string;
          }>;
        };
      }>;
      text?: string;
      author_name?: string;
      author_link?: string;
      author_icon?: string;
      author_subname?: string;
      mrkdwn_in?: string[];
      footer?: string;
    }>;
    blocks: Array<{
      type: string;
      block_id: string;
    }>;
    parent_user_id?: string;
    files?: Array<{
      id: string;
      created: number;
      timestamp: number;
      name: string;
      title: string;
      mimetype: string;
      filetype: string;
      pretty_type: string;
      user: string;
      user_team: string;
      size: number;
      mode: string;
      is_external: boolean;
      is_public: boolean;
      public_url_shared: boolean;
      display_as_bot: boolean;
      username: string;
      url_private: string;
      url_private_download: string;
      media_display_type: string;
      thumb_64: string;
      thumb_80: string;
      thumb_360: string;
      thumb_360_w: number;
      thumb_360_h: number;
      thumb_480?: string;
      thumb_480_w?: number;
      thumb_480_h?: number;
      thumb_160: string;
      original_w: number;
      original_h: number;
      thumb_tiny: string;
      permalink: string;
      permalink_public: string;
      is_starred: boolean;
      skipped_shares: boolean;
      has_rich_preview: boolean;
      file_access: string;
    }>;
    upload?: boolean;
    display_as_bot?: boolean;
    user_team?: string;
    source_team?: string;
    user_profile?: {
      avatar_hash: string;
      image_72: string;
      first_name: string;
      real_name: string;
      display_name: string;
      team: string;
      name: string;
      is_restricted: boolean;
      is_ultra_restricted: boolean;
    };
  };
};

export type ClientAppCommandsResponse = {
  ok: true;
  app_actions: Array<{
    app_id: string;
    app_name: string;
    team_id: string;
    icons: {
      image_32: string;
      image_48: string;
      image_64: string;
      image_72: string;
    };
    actions: Array<{
      action_id: string;
      app_id: string;
      name: string;
      desc: string;
      description: string;
      payload: null;
      callback_id: string;
      type: string;
    }>;
    teams: string[];
    is_enterprise_install?: boolean;
  }>;
  commands: Array<{
    canonical_name: string;
    desc?: string;
    usage?: string;
    name_normalized: string;
    name: string;
    type: string;
    is_workspace_agnostic: boolean;
    teams: string[];
    alias_of?: string;
    alias_of_normalized?: string;
  }>;
  cache_ts: string;
};

export type ClientBootPrefsEntry = {
  "de-DE": string;
  "fr-FR": string;
  "it-IT": string;
  "pt-BR": string;
  "ja-JP": string;
  "zh-CN": string;
  "zh-TW": string;
  "ko-KR": string;
};

export type ClientBootPrefsName =
  | "underline_links"
  | "show_text_selection_context_menu"
  | "user_colors"
  | "color_names_in_list"
  | "keyboard"
  | "slackbot_ai_nux_state"
  | "email_alerts"
  | "email_alerts_sleep_until"
  | "email_tips"
  | "email_weekly"
  | "email_offers"
  | "email_research"
  | "email_developer"
  | "email_changelog"
  | "welcome_message_hidden"
  | "search_sort"
  | "search_file_sort"
  | "search_channel_sort"
  | "search_mixed_results_sort"
  | "search_top_results_sort"
  | "search_work_objects_sort"
  | "search_people_sort"
  | "search_minimize_sources"
  | "search_hidden_connectors"
  | "expand_inline_imgs"
  | "num_top_result_tab_clicked"
  | "expand_internal_inline_imgs"
  | "expand_snippets"
  | "posts_formatting_guide"
  | "seen_welcome_2"
  | "seen_ssb_prompt"
  | "spaces_new_xp_banner_dismissed"
  | "search_only_my_channels"
  | "search_only_current_team"
  | "search_hide_my_channels"
  | "search_only_show_online"
  | "search_hide_deactivated_users"
  | "emoji_mode"
  | "has_invited"
  | "has_uploaded"
  | "has_created_channel"
  | "has_created_channel_section"
  | "has_searched"
  | "has_installed_apps"
  | "search_exclude_channels"
  | "messages_theme"
  | "webapp_spellcheck"
  | "no_joined_overlays"
  | "no_created_overlays"
  | "dropbox_enabled"
  | "seen_domain_invite_reminder"
  | "seen_member_invite_reminder"
  | "mute_sounds"
  | "arrow_history"
  | "tab_ui_return_selects"
  | "obey_inline_img_limit"
  | "require_at"
  | "ssb_space_window"
  | "mac_ssb_bounce"
  | "mac_ssb_bullet"
  | "expand_non_media_attachments"
  | "show_typing"
  | "pagekeys_handled"
  | "last_snippet_type"
  | "display_real_names_override"
  | "display_display_names"
  | "time24"
  | "enter_is_special_in_tbt"
  | "msg_input_send_btn"
  | "msg_input_send_btn_auto_set"
  | "msg_input_sticky_composer"
  | "graphic_emoticons"
  | "convert_emoticons"
  | "ss_emojis"
  | "seen_onboarding_start"
  | "onboarding_cancelled"
  | "seen_onboarding_slackbot_conversation"
  | "seen_onboarding_channels"
  | "seen_onboarding_direct_messages"
  | "seen_onboarding_invites"
  | "seen_onboarding_search"
  | "seen_onboarding_recent_mentions"
  | "seen_onboarding_starred_items"
  | "seen_onboarding_private_groups"
  | "seen_onboarding_banner"
  | "onboarding_slackbot_conversation_step"
  | "set_tz_automatically"
  | "suppress_link_warning"
  | "suppress_thread_mention_warning"
  | "suppress_external_invites_from_compose_warning"
  | "seen_emoji_pack_cta"
  | "seen_emoji_pack_dialog"
  | "seen_schedule_send_coachmark"
  | "seen_gif_new_badge"
  | "seen_gif_picker_admin_cta"
  | "emoji_packs_most_recent_available_time"
  | "emoji_packs_clicked_picker_cta"
  | "emoji_packs_clicked_picker_post_install_cta"
  | "emoji_packs_clicked_collection_cta"
  | "dnd_enabled"
  | "dnd_start_hour"
  | "dnd_end_hour"
  | "dnd_before_monday"
  | "dnd_after_monday"
  | "dnd_enabled_monday"
  | "dnd_before_tuesday"
  | "dnd_after_tuesday"
  | "dnd_enabled_tuesday"
  | "dnd_before_wednesday"
  | "dnd_after_wednesday"
  | "dnd_enabled_wednesday"
  | "dnd_before_thursday"
  | "dnd_after_thursday"
  | "dnd_enabled_thursday"
  | "dnd_before_friday"
  | "dnd_after_friday"
  | "dnd_enabled_friday"
  | "dnd_before_saturday"
  | "dnd_after_saturday"
  | "dnd_enabled_saturday"
  | "dnd_before_sunday"
  | "dnd_after_sunday"
  | "dnd_enabled_sunday"
  | "dnd_days"
  | "dnd_weekdays_off_allday"
  | "reminder_notification_time"
  | "dnd_custom_new_badge_seen"
  | "dnd_notification_schedule_new_badge_seen"
  | "priority_dnd_override"
  | "priority_sidebar_section"
  | "notification_center_filters"
  | "unread_collapsed_channels"
  | "xws_unread_collapsed_channels"
  | "calls_survey_last_seen"
  | "huddle_survey_last_seen"
  | "sidebar_behavior"
  | "channel_sort"
  | "separate_private_channels"
  | "separate_shared_channels"
  | "sidebar_theme"
  | "sidebar_theme_custom_values"
  | "ia_theme"
  | "ia_theme_pre_halloween"
  | "no_invites_widget_in_sidebar"
  | "boost_mentions"
  | "undo_channel_intermix"
  | "show_muted_items_outside_sidebar_menus"
  | "remove_sidebar_customizations"
  | "workspace_filter_selected"
  | "no_omnibox_in_channels"
  | "k_key_omnibox_auto_hide_count"
  | "show_sidebar_quickswitcher_button"
  | "ent_org_wide_channels_sidebar"
  | "mark_msgs_read_immediately"
  | "start_scroll_at_oldest"
  | "snippet_editor_wrap_long_lines"
  | "ls_disabled"
  | "f_key_search"
  | "k_key_omnibox"
  | "prompted_for_email_disabling"
  | "no_macelectron_banner"
  | "no_macssb1_banner"
  | "no_macssb2_banner"
  | "no_winssb1_banner"
  | "hide_user_group_info_pane"
  | "mentions_exclude_at_user_groups"
  | "mentions_exclude_reactions"
  | "privacy_policy_seen"
  | "enterprise_migration_seen"
  | "last_tos_acknowledged"
  | "search_exclude_bots"
  | "load_lato_2"
  | "fuller_timestamps"
  | "last_seen_at_channel_warning"
  | "emoji_autocomplete_big"
  | "two_factor_auth_enabled"
  | "two_factor_type"
  | "two_factor_backup_type"
  | "hide_hex_swatch"
  | "show_jumper_scores"
  | "enterprise_mdm_custom_msg"
  | "enterprise_excluded_app_teams"
  | "client_logs_pri"
  | "flannel_server_pool"
  | "mentions_exclude_at_channels"
  | "confirm_clear_all_unreads"
  | "confirm_user_marked_away"
  | "box_enabled"
  | "seen_single_emoji_msg"
  | "confirm_sh_call_start"
  | "preferred_skin_tone"
  | "show_all_skin_tones"
  | "whats_new_read"
  | "help_menu_open_timestamp"
  | "jumbomoji"
  | "newxp_seen_last_message"
  | "show_memory_instrument"
  | "enable_unread_view"
  | "seen_unread_view_coachmark"
  | "seen_connect_dm_coachmark"
  | "seen_connect_section_coachmark"
  | "should_show_connect_section"
  | "enable_react_emoji_picker"
  | "seen_custom_status_badge"
  | "seen_custom_status_callout"
  | "seen_custom_status_expiration_badge"
  | "used_custom_status_kb_shortcut"
  | "seen_guest_admin_slackbot_announcement"
  | "seen_threads_notification_banner"
  | "seen_name_tagging_coachmark"
  | "all_unreads_sort_order"
  | "all_unreads_section_filter"
  | "locale"
  | "seen_intl_channel_names_coachmark"
  | "seen_p3_locale_change_message_ko_kr"
  | "seen_toast_new_locale_launch"
  | "seen_toast_new_locale_launch_ts"
  | "seen_locale_change_message"
  | "seen_japanese_locale_change_message"
  | "seen_shared_channels_coachmark"
  | "seen_shared_channels_opt_in_change_message"
  | "has_recently_shared_a_channel"
  | "seen_channel_browser_admin_coachmark"
  | "seen_administration_menu"
  | "seen_drafts_section_coachmark"
  | "seen_emoji_update_overlay_coachmark"
  | "seen_sonic_deluxe_toast"
  | "seen_wysiwyg_deluxe_toast"
  | "seen_markdown_paste_toast"
  | "seen_markdown_paste_shortcut"
  | "seen_ia_education"
  | "show_ia_tour_relaunch"
  | "plain_text_mode"
  | "show_shared_channels_education_banner"
  | "should_show_shared_channels_day1_creator_welcome_modal"
  | "ia_slackbot_survey_timestamp_48h"
  | "ia_slackbot_survey_timestamp_7d"
  | "enable_streamline_view"
  | "enable_sent_view"
  | "enable_catch_up_view"
  | "enable_shortcuts_view"
  | "enable_drafts_view"
  | "enable_scheduled_view"
  | "enable_later_view"
  | "enable_todos_view"
  | "enable_huddles_view"
  | "enable_huddles_home_view"
  | "enable_threads_view"
  | "enable_recap_view"
  | "enable_unified_directory_view"
  | "seen_threads_pref_education_banner_count"
  | "show_threads_pref_education_banner"
  | "seen_platform_page"
  | "allow_calls_to_set_current_status"
  | "in_interactive_mas_migration_flow"
  | "sunset_interactive_message_views"
  | "shdep_promo_code_submitted"
  | "seen_shdep_slackbot_message"
  | "seen_calls_interactive_coachmark"
  | "allow_cmd_tab_iss"
  | "join_calls_device_settings"
  | "calls_disconnect_on_lock"
  | "seen_workflow_builder_deluxe_toast"
  | "workflow_builder_intro_modal_clicked_through"
  | "workflow_builder_coachmarks"
  | "seen_gdrive_coachmark"
  | "seen_first_install_coachmark"
  | "seen_existing_install_coachmark"
  | "seen_link_unfurl_coachmark"
  | "file_picker_variant"
  | "open_quip_doc_in_flexpane"
  | "seen_onboarding_synth_view"
  | "seen_onboarding_synth_view_count"
  | "synth_view_prefs"
  | "seen_onboarding_synth_view_v2"
  | "seen_onboarding_synth_view_count_v2"
  | "dm_canvas_auto_open_count_left"
  | "show_dm_canvas_preview"
  | "lists_add_to_list_default_list"
  | "seen_onboarding_lists"
  | "seen_more_tab_lists_new_badge"
  | "lists_template_sidebar_collapsed"
  | "hide_external_members_list_sharing_speed_bump"
  | "lists_tabbing_navigation_option_type"
  | "lists_default_view"
  | "seen_list_items_view"
  | "lists_my_items"
  | "lists_my_items_last_seen"
  | "lists_message_todo_reaction"
  | "has_opened_list"
  | "todos_last_seen"
  | "todos_item_details_auto_open_from_message"
  | "todos_later_archive_do_not_show_again_move_to_todos_speedbump"
  | "todos_later_archive_do_not_show_again_delete_speedbump"
  | "saved_searches"
  | "channel_canvas_layouts"
  | "huddles_cc_by_default"
  | "huddles_mute_by_default"
  | "huddles_global_mute"
  | "huddles_mini_panel"
  | "huddles_set_status"
  | "huddles_show_shouty_rooster"
  | "huddles_disconnect_on_lock"
  | "huddles_play_music_when_last"
  | "huddles_allow_smart_notif"
  | "huddles_reactions_play_sound"
  | "huddles_reactions_read_out_loud"
  | "huddles_play_music_timeout"
  | "huddles_music_player_song_key"
  | "calendar_huddles_default_access_policy"
  | "huddles_show_join_preview"
  | "calendar_huddles_default_auto_start_summary"
  | "huddles_chime_new_endpoints_check_completed"
  | "quip_new_endpoints_check_completed"
  | "xws_sidebar_variant"
  | "overloaded_message_enabled"
  | "seen_highlights_coachmark"
  | "seen_highlights_arrows_coachmark"
  | "seen_highlights_warm_welcome"
  | "seen_new_search_ui"
  | "seen_channel_search"
  | "seen_people_search"
  | "seen_people_search_count"
  | "dismissed_scroll_search_tooltip_count"
  | "last_dismissed_scroll_search_tooltip_timestamp"
  | "has_used_quickswitcher_shortcut"
  | "seen_quickswitcher_shortcut_tip_count"
  | "browsers_dismissed_channels_low_results_education"
  | "browsers_seen_initial_channels_education"
  | "browsers_dismissed_people_low_results_education"
  | "browsers_seen_initial_people_education"
  | "browsers_dismissed_user_groups_low_results_education"
  | "browsers_seen_initial_user_groups_education"
  | "browsers_dismissed_files_low_results_education"
  | "browsers_seen_initial_files_education"
  | "browsers_dismissed_initial_drafts_education"
  | "browsers_seen_initial_drafts_education"
  | "browsers_dismissed_initial_activity_education"
  | "browsers_seen_initial_activity_education"
  | "browsers_dismissed_initial_saved_education"
  | "browsers_seen_initial_saved_education"
  | "seen_edit_mode"
  | "seen_edit_mode_edu"
  | "xws_dismissed_education"
  | "xws_seen_education"
  | "sidebar_pref_dismissed_tip"
  | "a11y_message_verbosity_settings"
  | "a11y_dyslexic"
  | "a11y_animations"
  | "seen_keyboard_shortcuts_coachmark"
  | "seen_a11y_pref_setup_coachmark"
  | "seen_a11y_bbm_onboarding_modal"
  | "seen_a11y_bbm_onboarding_nudge"
  | "seen_a11y_bbm_browser_zoom_modal"
  | "seen_a11y_alt_text_reminders_modal"
  | "lessons_enabled"
  | "tractor_experiment_group"
  | "opened_slackbot_dm"
  | "newxp_seen_help_message"
  | "newxp_suggested_channels"
  | "onboarding_complete"
  | "has_received_threaded_message"
  | "joiner_notifications_muted"
  | "invite_accepted_notifications_muted"
  | "joiner_message_suggestion_dismissed"
  | "email_digest"
  | "dismissed_fullscreen_download_ssb_prompt"
  | "dismissed_banner_download_ssb_prompt"
  | "dismissed_top_results_nux_banner"
  | "onboarding_state"
  | "whocanseethis_dm_mpdm_badge"
  | "all_notifications_prefs"
  | "activity_include_threads_in_badge_count"
  | "activity_dms_opt_out"
  | "mute_huddle_sounds"
  | "huddle_invite_sound"
  | "huddle_invite_sound_v2"
  | "hidden_users"
  | "vip_users"
  | "slackbot_customization"
  | "slackbot_autosub_threads"
  | "slackbot_conversation_history"
  | "slackbot_mcp_servers"
  | "slack_ai_web_search_disabled"
  | "has_seen_slackbot_ai_upgrade_paywall"
  | "has_seen_slackbot_ai_sparkles"
  | "slackbot_ai_sparkle_nux_start"
  | "slackbot_ai_sparkle_sample_timestamp"
  | "growth_msg_limit_approaching_cta_count"
  | "growth_msg_limit_approaching_cta_ts"
  | "growth_msg_limit_reached_cta_count"
  | "growth_msg_limit_reached_cta_last_ts"
  | "growth_msg_limit_long_reached_cta_count"
  | "growth_msg_limit_long_reached_cta_last_ts"
  | "growth_msg_limit_sixty_day_banner_cta_count"
  | "growth_msg_limit_sixty_day_banner_cta_last_ts"
  | "growth_all_banners_prefs"
  | "analytics_upsell_coachmark_seen"
  | "seen_app_space_coachmark"
  | "seen_app_space_tutorial"
  | "dismissed_app_launcher_welcome"
  | "dismissed_app_launcher_limit"
  | "dismissed_app_launcher_atlassian_promo"
  | "enable_app_config_redesign"
  | "dismissed_app_config_redesign_coachmark"
  | "dismissed_app_manifest_description"
  | "dismissed_app_manifest_coachmark"
  | "app_manifest_schema_format"
  | "purchaser"
  | "seen_channel_email_tooltip"
  | "has_met_new_badge_prerequisite"
  | "num_clicked_cuddles_button"
  | "cuddles_button_first_seen"
  | "show_ent_onboarding"
  | "seen_workflows_gallery_onboarding_banner_view_count"
  | "seen_workflows_gallery_onboarding_banner_dismissed"
  | "seen_workflows_templates_gallery_onboarding_banner_dismissed"
  | "seen_workflows_managed_by_you_onboarding_banner_dismissed"
  | "seen_sidebar_tabrail_more_automations_callout"
  | "login_notification_mode"
  | "seen_corporate_export_alert"
  | "show_autocomplete_help"
  | "deprecation_toast_last_seen"
  | "deprecation_modal_last_seen"
  | "deprecation_banner_last_seen"
  | "iap1_lab"
  | "ia_top_nav_theme"
  | "ia_platform_actions_lab"
  | "activity_view"
  | "saved_view"
  | "seen_floating_sidebar_coachmark"
  | "show_ia4_legacy_theme_banner"
  | "desktop_deeplink_signals"
  | "desktop_client_ids"
  | "failover_proxy_check_completed"
  | "chime_access_check_completed"
  | "mx_calendar_type"
  | "edge_upload_proxy_check_completed"
  | "app_subdomain_check_completed"
  | "add_prompt_interacted"
  | "add_apps_prompt_dismissed"
  | "add_channel_prompt_dismissed"
  | "channel_sidebar_hide_invite"
  | "channel_sidebar_hide_browse_dms_link"
  | "in_prod_surveys_enabled"
  | "connect_dm_early_access"
  | "dismissed_installed_app_dm_suggestions"
  | "seen_contextual_message_shortcuts_modal"
  | "seen_message_navigation_educational_toast"
  | "contextual_message_shortcuts_modal_was_seen"
  | "message_navigation_toast_was_seen"
  | "up_to_browse_kb_shortcut"
  | "set_a11y_prefs_new_user"
  | "a11y_line_length"
  | "a11y_play_sound_for_incoming_dm"
  | "a11y_play_sound_for_sent_dm"
  | "a11y_play_sound_for_incoming_dm_choice"
  | "a11y_play_sound_for_sent_dm_choice"
  | "a11y_read_out_incoming_dm"
  | "a11y_screen_reader_message_label_date_time_first"
  | "contextual_help_reset_count"
  | "should_show_contextual_help_for_conversation_navigation"
  | "should_show_contextual_help_for_jump_to_conversation"
  | "should_show_contextual_help_for_section_navigation"
  | "should_show_contextual_help_for_thread_navigation"
  | "a11y_never_show_slackbot_alt_text_reminders"
  | "a11y_show_alt_text_reminders"
  | "should_show_unsend_message_confirmation"
  | "channel_sections"
  | "team_channel_sections"
  | "online_first_dms_on"
  | "show_quick_reactions"
  | "user_customized_quick_reactions_display_feature"
  | "user_customized_quick_reactions_has_customized"
  | "user_customized_quick_reactions_emoji_1"
  | "user_customized_quick_reactions_emoji_2"
  | "user_customized_quick_reactions_emoji_3"
  | "user_customized_quick_reactions_use_frequently_used_emoji"
  | "reaction_notifications"
  | "has_received_mention_or_reaction"
  | "has_starred_item"
  | "has_drafted_message"
  | "has_sent_ten_messages"
  | "enable_mentions_and_reactions_view"
  | "enable_reminders_view"
  | "enable_saved_items_view"
  | "enable_all_dms_view"
  | "enable_channel_browser_view"
  | "enable_file_browser_view"
  | "enable_file_browser_view_for_docs"
  | "enable_quip_file_browser_view"
  | "enable_lists_browser_view"
  | "enable_people_browser_view"
  | "enable_app_browser_view"
  | "reached_all_dms_disclosure"
  | "enable_slack_connect_view"
  | "enable_slack_connect_view_2"
  | "has_acknowledged_shortcut_speedbump"
  | "stories_variant"
  | "enable_media_captions"
  | "media_playback_speed"
  | "media_muted"
  | "media_volume"
  | "dismissed_connect_auto_approval_modal"
  | "tasks_view"
  | "task_lists"
  | "assigned_to_list"
  | "assigned_items_refinements"
  | "task_enable_stacked_ui"
  | "show_sidebar_avatars"
  | "has_dismissed_google_directory_coachmark"
  | "seen_sc_page_banner"
  | "seen_sc_menu_coachmark"
  | "seen_sc_page"
  | "dismissed_scdm_education"
  | "seen_sent_page_in_sidebar"
  | "first_seen_sent_page_in_sidebar"
  | "seen_new_badge_in_more_menu_sidebar"
  | "first_seen_new_badge_in_more_menu_sidebar"
  | "dismissed_sent_page_education"
  | "seen_bookmarks_intro"
  | "scdm_trial_offer_banner"
  | "identity_links_prefs"
  | "identity_links_global_prefs"
  | "seen_sections_unreads_only_prompt_count"
  | "last_seen_sections_unreads_only_prompt_timestamp"
  | "notifications_view"
  | "progressive_disclosure_state"
  | "suggestions_request_id"
  | "allowed_unfurl_senders"
  | "hide_external_members_sharing_speed_bump"
  | "hide_sc_files_sharing_speed_bump"
  | "who_can_share_contact_card"
  | "who_can_see_account_by_searching_email"
  | "slack_connect_invite_should_badge_sidebar"
  | "phc_dismissed"
  | "phc_viewed"
  | "dismissed_gov_slack_first_time_popup"
  | "show_gov_slack_context_bar_banner"
  | "mobile_channel_list_sort"
  | "mobile_channel_list_show_all_dms"
  | "onboarding_tip_opt_out"
  | "opt_out_welcome_dm_ephemeral_suggestion"
  | "hide_external_members_canvas_sharing_speed_bump"
  | "seen_private_message_forwarding_coachmark"
  | "later_show_upcoming_reminders"
  | "ia4_desktop_custom_tablist"
  | "use_voip_huddle_invite"
  | "huddles_autoinvite"
  | "client_relevant_workspaces"
  | "home_unread_dot"
  | "ia4_slackbot_survey_timestamp_48h"
  | "ia4_slackbot_survey_timestamp_7d"
  | "has_clicked_highlighted_header_compose_button"
  | "should_show_ia4_tabs"
  | "window_background_gradients"
  | "ia4_sidebar_inverted_v2_coachmark"
  | "seen_canvas_template_new_badge"
  | "seen_canvas_template_new_badge_channel_canvas"
  | "seen_canvas_template_convert_action_new_badge"
  | "seen_canvas_header_image_new_badge"
  | "tab_rail_customization"
  | "tab_rail_customization_reasons"
  | "seen_navigation_preferences_pane"
  | "ia4_compact_mode"
  | "trials_showcase_channel_banner_collapsed"
  | "trials_showcase_dm_banner_collapsed"
  | "trials_showcase_search_banner_collapsed"
  | "hp_s2p_purchaser_treatment"
  | "resurrected_user_welcome_ts"
  | "trials_sidebar_banner_wrapper_dismissed"
  | "hidden_user_group_sections"
  | "seen_usergroup_section_new_badge"
  | "seen_canvas_cta"
  | "seen_clip_cta"
  | "seen_emoji_cta"
  | "seen_huddle_cta"
  | "show_ai_apps"
  | "ai_apps_to_show"
  | "seen_ai_apps_app_config_coachmark"
  | "slack_ai_inbox_enabled"
  | "inbox_card_view_enabled"
  | "solutions_onboarding_user_tracker"
  | "solution_template"
  | "inactive_user_summary_notification"
  | "show_channel_join_banner"
  | "channel_join_experience_enabled"
  | "channel_join_experience_nux_interacted"
  | "slack_ai_translation_target_language"
  | "slack_ai_translation_target_excluded_languages"
  | "slack_ai_file_summary_disabled"
  | "slack_ai_channel_thread_summary_streaming_disabled"
  | "slack_ai_action_items_disabled"
  | "slack_ai_todo_action_items_disabled"
  | "last_seen_speedbump_ts"
  | "first_seen_preview_recap_ts"
  | "recap_default_mute_status"
  | "no_content_email_digest_unsub"
  | "resurrect_mentions_email"
  | "activity_feed_sort"
  | "do_not_show_mark_dms_read_warning"
  | "show_threads_suggested_replies"
  | "today_live_topics"
  | "slack_ai_auto_thread_summaries_disabled"
  | "stick_user_sort"
  | "seen_sort_most_relevant_coachmark"
  | "seen_sort_edit_prefs_cta"
  | "calendar_background_theme_enabled"
  | "calendar_background_theme"
  | "calendar_jit_in_sidebar_enabled"
  | "calendar_jit_as_system_notification"
  | "calendar_jit_as_push_notification"
  | "calendar_desktop_notification_sound"
  | "profile_summaries_enabled"
  | "real_time_recap_enabled"
  | "recap_sort_type"
  | "salesforce_approvals_list"
  | "hide_muted_channels_from_sidebar"
  | "mega_dnd_expiration"
  | "lens_clog_forward_enabled"
  | "first_login_ts"
  | "contacts_oauth"
  | "agents_in_channel_banner_hidden"
  | "seen_search_apps_app_config_coachmark"
  | "disabled_search_remote_functions"
  | "two_factor_post_checkout_required"
  | "work_objects_click_opens_url_prefs"
  | "everything_setting_downgrade"
  | "today_auto_navigate"
  | "today_primary_card_layout"
  | "today_hidden_cards"
  | "today_ignored_channels"
  | "today_priority_channels"
  | "today_card_positions"
  | "today_later_opt_in"
  | "today_tab_rail_location"
  | "default_suggested_channel_sections"
  | "create_channel_section_education"
  | "welcome_pre_dm_party_notification_muted"
  | "slackbot_composer_formatting_enabled"
  | "tz"
  | "locales_enabled"
  | "slack_scribe_dictation_shortcut"
;

export type ClientBootResponse = {
  ok: true;
  self: {
    id: string;
    name: string;
    is_bot: boolean;
    updated: number;
    is_app_user: boolean;
    team_id: string;
    deleted: boolean;
    color: string;
    is_email_confirmed: boolean;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    who_can_share_contact_card: string;
    first_login: number;
    lob_sales_home_enabled: boolean;
    manual_presence: string;
    profile: {
      real_name: string;
      display_name: string;
      avatar_hash: string;
      real_name_normalized: string;
      display_name_normalized: string;
      image_original: string;
      is_custom_image: boolean;
      first_name: string;
      last_name: string;
      team: string;
      title: string;
      pronouns?: string;
      phone: string;
      skype: string;
      status_text: string;
      status_text_canonical: string;
      status_emoji: string;
      status_emoji_display_info: Array<{
        display_url: string;
        unicode: string;
      }>;
      status_expiration: number;
      guest_invited_by?: string;
      who_can_share_contact_card?: string;
      huddle_state?: string;
      huddle_state_expiration_ts?: number;
      start_date: string;
      ooo_message?: string;
    };
  };
  team: {
    id: string;
    name: string;
    url: string;
    domain: string;
    avatar_base_url: string;
    is_verified: boolean;
    plan: string;
    is_plan_frozen: boolean;
    icon: {
      image_default: boolean;
      image_34: string;
      image_44: string;
      image_68: string;
      image_88: string;
      image_102: string;
      image_230: string;
      image_132: string;
    };
    date_created: number;
    prefs: {
      admin_customized_quick_reactions: string[];
      ai_apps_settings: {
        apps: unknown[];
      };
      all_users_can_purchase: boolean;
      allow_account_type_edit_channel_workspaces_override: boolean;
      allow_audio_clip_sharing_slack_connect: boolean;
      allow_audio_clips: boolean;
      allow_automatic_media_transcriptions: boolean;
      allow_calls: boolean;
      allow_calls_interactive_screen_sharing: boolean;
      allow_cea_for_hippa_team: boolean;
      allow_clip_downloads: string;
      allow_content_review: boolean;
      allow_custom_solution_templates: boolean;
      allow_feature_request: boolean;
      allow_lists: string;
      allow_lock_thread: boolean;
      allow_media_transcriptions: boolean;
      allow_native_gif_picker: boolean;
      allow_retention_override: boolean;
      allow_solution_templates: string;
      allow_spaceship: string;
      allow_sponsored_slack_connections: boolean;
      allow_video_clip_sharing_slack_connect: boolean;
      allow_video_clips: boolean;
      alt_text_reminders: boolean;
      alt_text_reminders_custom_link: null;
      atlas_org_charts_access: string;
      atlas_profiles_access: string;
      auth_mode: string;
      available_calendar_huddle_access_options: {
        knock_access: boolean;
        org_access: boolean;
      };
      billing_email_daily: boolean;
      billing_email_monthly: boolean;
      billing_wdf_customer_id: null;
      block_file_download: boolean;
      block_file_types: boolean;
      can_accept_slack_connect_channel_invites: boolean;
      can_create_external_limited_invite: boolean;
      can_create_slack_connect_channel_invite: boolean;
      can_receive_shared_channels_invites: boolean;
      canvas_printing_enabled: boolean;
      canvas_restricted_sharing_enabled: boolean;
      canvas_retention_duration: number;
      canvas_retention_type: number;
      canvas_version_history_enabled: boolean;
      commands_only_regular?: boolean;
      company_name: null;
      content_review_enabled: boolean;
      custom_status_site: null;
      default_channel_knowledge_agent: null;
      default_function_reuse_visibility: {
        visibility: string;
      };
      developer_sandbox_dashboard_limited_access: boolean;
      developer_sandbox_org: boolean;
      developer_sandbox_org_self_signin_disabled: boolean;
      disable_file_deleting: boolean;
      disable_file_editing: boolean;
      disallow_public_file_urls: boolean;
      display_anniversary_celebration: boolean;
      display_email_addresses: boolean;
      display_external_email_addresses: boolean;
      display_guest_email_addresses: boolean;
      display_new_hire_celebration: boolean;
      display_pronouns: boolean;
      dm_retention_duration: number;
      dm_retention_redaction_duration: number;
      dm_retention_type: number;
      file_retention_duration: number;
      file_retention_type: number;
      flag_content_admin_dash: boolean;
      flag_content_review_allow_decision_reversal: null;
      flag_content_review_flag_profiles: boolean;
      flag_content_review_note_required: null;
      flag_content_reviewer_assigned_notif: boolean;
      flag_message_author_outcome_notif: boolean;
      flag_message_custom_link: null;
      flag_message_flagger_outcome_notif: boolean;
      flag_message_users_to_notify: unknown[];
      flagged_content_review_channel: null;
      gdpr_enabled: boolean;
      gdrive_unfurl_restricted: boolean;
      google_sso_domain: null;
      google_sso_enable: null;
      has_hipaa_compliance: boolean;
      hermes_allow_interactions_with_workflows_owned_by_slack_connected_teams: boolean;
      hermes_triggers_trippable_by_slack_connected_teams: boolean;
      hide_gsuite_invite_option: boolean;
      hide_person_opt_out: boolean;
      identity_links_prefs: {
        is_enabled: boolean;
      };
      ineligible_for_discount: boolean;
      invited_user_preset: Record<string, unknown>;
      list_column_option_limit: number;
      list_restricted_sharing_enabled: boolean;
      locale: string;
      max_guest_duration: null;
      member_analytics_disabled: boolean;
      ml_opt_out: boolean;
      mobile_block_message_copy: boolean;
      mobile_force_app_upgrade_min_version: null;
      mobile_force_app_upgrade_versions_allowed: null;
      mobile_passcode_timeout_in_seconds: number;
      mobile_session_duration: number;
      msg_edit_window_mins: number;
      no_email_user_provision_type: string;
      notification_redaction_type: string;
      notify_pending_enabled: boolean;
      ntlm_credential_domains: string;
      onedrive_and_sharepoint_unfurl_restricted: boolean;
      premium_workflow_notifications: {
        notifications_enabled: boolean;
        notification_location: string;
      };
      private_channel_analytics_disabled: boolean;
      private_channel_membership_limit: number;
      private_message_forwarding: boolean;
      private_retention_redaction_duration: number;
      public_retention_redaction_duration: number;
      read_only_canvas_subteam_ids: unknown[];
      record_channel_private_retention_duration: number;
      record_channel_private_retention_redaction_duration: number;
      record_channel_private_retention_type: number;
      record_channel_public_retention_duration: number;
      record_channel_public_retention_redaction_duration: number;
      record_channel_public_retention_type: number;
      required_minimum_desktop_version: null;
      required_minimum_mobile_version: null;
      restrict_workflow_trigger_steps: {
        triggers: Record<string, unknown>;
      };
      rimeto_org_instance_id: null;
      sales_home_retention_duration: number;
      sales_home_retention_type: number;
      salesforce_forwarding: {
        default: string;
      };
      same_org_external_teams: null;
      saml_enable: boolean;
      search_feedback_opt_out: boolean;
      security_circuit_breakers: {
        tor: boolean;
        session_fingerprint: boolean;
        spoofed_user_agent: boolean;
        unexpected_scraping: boolean;
        unexpected_user_agent: boolean;
        unexpected_api_call_volume: boolean;
        notify_primary_owner: number;
        notify_security_admins: number;
      };
      session_duration: number;
      session_duration_type: number;
      show_legacy_workflows: boolean;
      signup_domains: null;
      signup_mode: null;
      slack_ai_action_items_opt_out: boolean;
      slack_ai_allowed_workspaces: unknown[];
      slack_ai_answer_sharing_opt_out: boolean;
      slack_ai_daily_recap_opt_out: boolean;
      slack_ai_detailed_feedback_opt_out: boolean;
      slack_ai_disabled: boolean;
      slack_ai_explain_sharing_opt_out: boolean;
      slack_ai_feedback_opt_out: boolean;
      slack_ai_file_summaries_opt_out: boolean;
      slack_ai_files_search_opt_out: {
        all_file_opt_out: boolean;
      };
      slack_ai_files_workflow_steps_opt_out: {
        all_file_opt_out: boolean;
      };
      slack_ai_huddle_summaries_opt_out: boolean;
      slack_ai_huddles_automatic_notes_opt_out: boolean;
      slack_ai_message_translations_opt_out: boolean;
      slack_ai_opt_out: boolean;
      slack_ai_workflow_builder_opt_out: boolean;
      slack_connect_account_visibility: string;
      slack_connect_allowed_workspaces: {
        type: string[];
      };
      slack_connect_approval_type: string;
      slack_connect_dm_only_verified_orgs: boolean;
      slackbot_ai_canvas_write_enabled: boolean;
      spaceship_workspace_setting_visible: boolean;
      sso_auth_restrictions: number;
      sso_change_email: boolean;
      sso_choose_username: boolean;
      sso_disable_emails: boolean;
      sso_signup_restrictions: number;
      sso_sync_with_provider: boolean;
      team_list_count: number;
      thorn_designated_contact: null;
      thorn_safer_scan: boolean;
      two_factor_auth_required: number;
      two_factor_prevent_sms: number;
      use_browser_picker: boolean;
      warn_before_at_channel: string;
      warn_user_before_logout_desktop: boolean;
      warn_user_before_logout_mobile: boolean;
      wfb_default_connector_visibility: string;
      wfb_salesforce_trigger_channel_restrictions: {
        salesforce_orgs: Record<string, unknown>;
      };
      who_can_accept_slack_connect_channel_invites: {
        type: string[];
        user?: unknown[];
        subteam?: unknown[];
      };
      who_can_create_external_limited_invite: {
        type: string[];
        user?: unknown[];
        subteam?: unknown[];
      };
      who_can_create_slack_connect_channel_invite: {
        type: string[];
        user?: string[];
        subteam?: unknown[];
      };
      who_can_create_standard_workflows: null;
      who_can_dm_anyone: {
        type: string[];
      };
      who_can_manage_ext_shared_channels: {
        type: string[];
      };
      who_can_review_flagged_content: {
        type: string[];
      };
      work_object_unfurl_visibility: number;
      default_channels: string[];
      posts_migrating?: number;
      gateway_allow_xmpp_ssl?: number;
      gateway_allow_irc_ssl?: number;
      gateway_allow_irc_plain?: number;
      group_retention_type: number;
      group_retention_duration: number;
      retention_type: number;
      retention_duration: number;
      dnd_enabled: boolean;
      dnd_start_hour: string;
      dnd_end_hour: string;
      who_can_post_general: string;
      calls_sent_welcome_to_admins?: boolean;
      invites_only_admins: boolean;
      seen_invites_only_admins_warning?: boolean;
      slackbot_responses_disabled: boolean;
      who_can_create_delete_user_groups?: string;
      who_can_edit_user_groups?: string;
      limit_reached_ts?: number;
      uses_customized_custom_status_presets: boolean;
      hide_referers: boolean;
      gdrive_enabled_team: boolean;
      received_github_app_upgrade_prompt?: number;
      has_shared_invites: boolean;
      onedrive_enabled_team: boolean;
      show_join_leave: boolean;
      onedrive_app_installed: boolean;
      dropbox_legacy_picker: boolean;
      welcome_place_enabled: boolean;
      received_esc_route_to_channel_awareness_message: boolean;
      has_installed_apps?: boolean;
      box_app_installed: boolean;
      calls_apps: {
        video: Array<{
          id: string;
          name: string;
          image: string;
        }>;
        audio: Array<{
          id: string;
          name: string;
          image: string;
        }>;
      };
      workflow_extension_steps_beta_opt_in: boolean;
      joiner_notifications_enabled: boolean;
      who_can_request_ext_shared_channels?: {
        type: string[];
        user: unknown[];
        subteam: unknown[];
      };
      app_whitelist_enabled: boolean;
      who_can_manage_integrations: {
        type: string[];
        subteam?: string[];
      };
      who_can_use_hermes: {
        type: string[];
        user?: unknown[];
        subteam?: unknown[];
      };
      hermes_has_accepted_tos: boolean;
      custom_status_presets: string[][];
      stats_only_admins: boolean;
      ai_apps: {
        is_enabled: boolean;
        allowed_apps: Array<{
          app_id: string;
          bot_user_id: string;
          should_show_in_sunroof?: boolean;
        }>;
      };
      was_treatment_for_boost_bus_plus_awareness_and_upgrades: boolean;
      subteams_auto_create_admin: boolean;
      subteams_auto_create_owner: boolean;
      display_real_names: boolean;
      calls_locations: unknown[];
      discoverable: string;
      use_workspace_icon_for_single_workspace_users: boolean;
      image_102: string;
      image_132: string;
      image_230: string;
      image_34: string;
      image_44: string;
      image_68: string;
      image_88: string;
      image_original?: string;
      invite_requests_approval_channel?: string;
      allow_admin_retention_override: number;
      allow_box_cfs: boolean;
      allow_huddles: boolean;
      allow_huddles_transcriptions: boolean;
      allow_huddles_video: boolean;
      allow_message_deletion: boolean;
      allow_workflow_export: boolean;
      app_dir_only: boolean;
      app_management_apps: unknown[];
      app_whitelist_requests_enabled: boolean;
      app_whitelist_requests_require_comment_enabled: boolean;
      automatic_welcome_dm_enabled: boolean;
      canvas_updated_message_enabled: boolean;
      custom_status_default_emoji: string;
      default_rxns: string[];
      disable_email_ingestion: boolean;
      disable_file_uploads: string;
      disable_sidebar_connect_prompts: unknown[];
      disable_sidebar_install_prompts: unknown[];
      dnd_after_friday: string;
      dnd_after_monday: string;
      dnd_after_saturday: string;
      dnd_after_sunday: string;
      dnd_after_thursday: string;
      dnd_after_tuesday: string;
      dnd_after_wednesday: string;
      dnd_before_friday: string;
      dnd_before_monday: string;
      dnd_before_saturday: string;
      dnd_before_sunday: string;
      dnd_before_thursday: string;
      dnd_before_tuesday: string;
      dnd_before_wednesday: string;
      dnd_days: string;
      dnd_enabled_friday: string;
      dnd_enabled_monday: string;
      dnd_enabled_saturday: string;
      dnd_enabled_sunday: string;
      dnd_enabled_thursday: string;
      dnd_enabled_tuesday: string;
      dnd_enabled_wednesday: string;
      dnd_weekdays_off_allday: boolean;
      invite_requests_enabled: boolean;
      invites_limit: boolean;
      ip_restriction_ranges: unknown[];
      loading_only_admins: boolean;
      loud_channel_mentions_limit: number;
      max_file_upload_size: null;
      sales_get_help: null;
      sign_in_with_slack_disabled: boolean;
      slack_ai_search_suggested_queries: unknown[];
      slack_connect_file_upload_sharing_enabled: boolean;
      tableau_agent_user_id: null;
      username_policy: null;
      who_can_change_team_profile: string;
      who_can_create_shared_channels: string;
      who_can_create_workflows: {
        type: string[];
      };
      workflow_extension_steps_enabled: boolean;
      workflows_export_csv_enabled: boolean;
      workflows_webhook_trigger_enabled: boolean;
      allow_developer_sandboxes: string;
      channel_audit_export_enabled: boolean;
      channel_email_addresses_enabled: boolean;
      custom_contact_email: string;
      default_create_private_channel: boolean;
      developer_sandbox_admin_menu_limited_access: boolean;
      developer_sandbox_allow_slack_connect_owning_org: boolean;
      developer_sandbox_invite_org_domains_only: {
        is_enabled: boolean;
        domains: unknown[];
      };
      developer_sandbox_provision_notifications: {
        notifications_enabled: boolean;
        notification_location: string;
      };
      developer_sandbox_request_auto_response: string;
      developer_sandbox_request_notifications: {
        notifications_enabled: boolean;
        notification_location: string;
      };
      developer_sandbox_safe_sign_in: boolean;
      developer_sandbox_slack_connect_org_sandboxes_only: boolean;
      disable_privacy_and_cookie_policy: boolean;
      display_default_phone: boolean;
      rich_previews_default: string;
      sign_in_with_slack_default: string;
      single_user_exports: boolean;
      sso_optional: boolean;
      who_has_team_visibility: string;
      workflow_builder_enabled: boolean;
      allow_free_automated_trials: boolean;
      compliance_export_start: number;
      created_with_google: boolean;
      daily_prompts_enabled: boolean;
      default_channel_creation_enabled: boolean;
      file_limit_whitelisted: boolean;
      filepicker_app_first_install: boolean;
      has_compliance_export: boolean;
      has_seen_partner_promo: boolean;
      image_default: boolean;
      instant_slack_enabled: boolean;
      magic_unfurls_enabled: boolean;
      self_serve_select: boolean;
      show_join_leave_welcome_party: boolean;
      show_legacy_paid_benefits_page: boolean;
      show_mobile_promos: boolean;
      slack_connect_acceptance_auto_created_workspace: boolean;
      solutions_onboarding_tracker: {
        canvas: string;
        list: string;
      };
      test_team: boolean;
      two_factor_required: boolean;
    };
    msg_edit_window_mins: number;
    image_proxy_url: string;
    onboarding_channel_id: string;
    messages_count: number;
    can_leave?: boolean;
    cannot_leave_reasons?: unknown[];
    lob_sales_home_enabled: boolean;
    is_sfdc_auto_slack: boolean;
  };
  is_europe: boolean;
  translations_cache_ts: string;
  cache_ts_version: string;
  prefs: Record<ClientBootPrefsName, ClientBootPrefsEntry>;
  subteams: {
    self: string[];
  };
  url: string;
  is_content_reporting_enabled: boolean;
  paid_features?: string[];
  cache_version: string;
  can_access_client_v2: boolean;
};

export type ClientCountsResponse = {
  ok: true;
  threads: {
    has_unreads: boolean;
    mention_count: number;
    vip_count: number;
    mention_count_by_channel: Record<ChannelId, number>;
    unread_count_by_channel: Record<ChannelId | GroupId, number>;
  };
  channels: Array<{
    id: string;
    last_read: string;
    latest: string;
    updated: string;
    history_invalid: string;
    mention_count: number;
    has_unreads: boolean;
  }>;
  mpims: Array<{
    id: string;
    last_read: string;
    latest: string;
    updated: string;
    history_invalid: string;
    mention_count: number;
    has_unreads: boolean;
    vip_count?: number;
  }>;
  ims: Array<{
    id: string;
    last_read: string;
    latest: string;
    updated: string;
    history_invalid: string;
    mention_count: number;
    has_unreads: boolean;
  }>;
  file_channels: {
    quip: {
      mention_count_by_channel: Record<string, unknown>;
    };
    list: {
      mention_count_by_channel: Record<string, unknown>;
    };
  };
  channel_badges: {
    channels: number;
    dms: number;
    app_dms: number;
    thread_mentions: number;
    thread_unreads: number;
  };
  alerts: {
    generic_system_alert?: number;
  };
  saved: {
    uncompleted_count: number;
    uncompleted_overdue_count: number;
    archived_count: number;
    completed_count: number;
    total_count: number;
  };
  counts_last_fetched: number;
};

export type ClientDmsResponse = {
  ok: true;
  dms: Array<{
    id: string;
    message: {
      user: string;
      type: string;
      ts: string;
      client_msg_id: string;
      text: string;
      team: string;
      user_team: string;
      source_team: string;
      blocks: Array<{
        type: string;
        block_id: string;
      }>;
      reactions?: Array<{
        name: string;
        users: string[];
        count: number;
      }>;
      attachments?: Array<{
        id?: number;
        blocks?: Array<{
          type: string;
          block_id: string;
          image_url: string;
          alt_text: string;
          title: {
            type: string;
            text: string;
          };
          image_width: number;
          image_height: number;
          image_bytes: number;
          fallback: string;
          is_animated: boolean;
        }>;
        fallback: string;
        from_url?: string;
        ts?: string;
        author_id?: string;
        channel_id?: string;
        channel_team?: string;
        is_msg_unfurl?: boolean;
        is_reply_unfurl?: boolean;
        message_blocks?: Array<{
          team: string;
          channel: string;
          ts: string;
          message: {
            blocks: Array<{
              type: string;
              block_id: string;
            }>;
          };
        }>;
        original_url?: string;
        text?: string;
        author_name?: string;
        author_link?: string;
        author_icon?: string;
        author_subname?: string;
        mrkdwn_in?: string[];
        footer?: string;
        color?: string;
        is_share?: boolean;
        image_url?: string;
        image_width?: number;
        image_height?: number;
        image_bytes?: number;
        service_icon?: string;
        title?: string;
        title_link?: string;
        service_name?: string;
      }>;
      subtype?: string;
      thread_ts?: string;
      root?: {
        user: string;
        type: string;
        ts: string;
        client_msg_id: string;
        text: string;
        team: string;
        user_team: string;
        source_team: string;
        user_profile: {
          avatar_hash: string;
          image_72: string;
          first_name: string;
          real_name: string;
          display_name: string;
          team: string;
          name: string;
          is_restricted: boolean;
          is_ultra_restricted: boolean;
        };
        thread_ts: string;
        reply_count: number;
        reply_users_count: number;
        latest_reply: string;
        reply_users: string[];
        is_locked: boolean;
        subscribed: boolean;
        last_read: string;
        blocks: Array<{
          type: string;
          block_id: string;
        }>;
      };
      files?: Array<{
        id: string;
        created: number;
        timestamp: number;
        name: string;
        title: string;
        mimetype: string;
        filetype: string;
        pretty_type: string;
        user: string;
        user_team: string;
        size: number;
        mode: string;
        is_external: boolean;
        is_public: boolean;
        public_url_shared: boolean;
        display_as_bot: boolean;
        username: string;
        url_private: string;
        url_private_download: string;
        media_display_type: string;
        thumb_64: string;
        thumb_80: string;
        thumb_360: string;
        thumb_360_w: number;
        thumb_360_h: number;
        thumb_480: string;
        thumb_480_w: number;
        thumb_480_h: number;
        thumb_160: string;
        thumb_720: string;
        thumb_720_w: number;
        thumb_720_h: number;
        original_w: number;
        original_h: number;
        thumb_tiny: string;
        permalink: string;
        permalink_public: string;
        is_starred: boolean;
        skipped_shares: boolean;
        has_rich_preview: boolean;
        file_access: string;
      }>;
      upload?: boolean;
      display_as_bot?: boolean;
    };
    channel: {
      id: string;
      name?: string;
      is_channel?: boolean;
      is_group?: boolean;
      is_im: boolean;
      is_mpim?: boolean;
      is_private?: boolean;
      created: number;
      is_archived: boolean;
      is_general?: boolean;
      unlinked?: number;
      name_normalized?: string;
      is_shared: boolean;
      is_frozen: boolean;
      is_org_shared: boolean;
      is_pending_ext_shared?: boolean;
      pending_shared?: unknown[];
      context_team_id: string;
      updated: number;
      parent_conversation?: null;
      creator?: string;
      is_moved?: number;
      is_ext_shared?: boolean;
      is_global_shared?: boolean;
      is_org_default?: boolean;
      is_org_mandatory?: boolean;
      shared_team_ids?: unknown[];
      internal_team_ids?: unknown[];
      connected_team_ids?: unknown[];
      connected_limited_team_ids?: unknown[];
      pending_connected_team_ids?: unknown[];
      members?: string[];
      topic?: {
        value: string;
        creator: string;
        last_set: number;
      };
      purpose?: {
        value: string;
        creator: string;
        last_set: number;
      };
      properties?: {
        tabs: Array<{
          type: string;
          label: string;
          id: string;
          data?: {
            file_id: string;
            shared_ts: string;
          };
          is_disabled?: boolean;
        }>;
        tabz: Array<{
          type: string;
          id?: string;
          data?: {
            file_id: string;
            shared_ts: string;
          };
          label?: string;
          is_disabled?: boolean;
        }>;
        meeting_notes?: {
          file_id: string;
        };
        canvas?: {
          file_id: string;
          is_empty: boolean;
          quip_thread_id: string;
          is_migrated: boolean;
        };
      };
      user?: string;
      last_read?: string;
      is_open?: boolean;
    };
    latest: string;
  }>;
  ims: unknown[];
  mpims: unknown[];
  response_metadata: {
    next_cursor: string;
  };
};

export type ClientExtrasResponse = {
  ok: true;
  salesforce_features: {
    is_sfdc_auto_slack: boolean;
    is_slack_first_crm: boolean;
    lob_sales_home_enabled_for_team: boolean;
    lob_sales_home_enabled_for_user: boolean;
  };
  plan_info: {
    is_plan_frozen: boolean;
    plan_level: string;
    user_can_access_admin_billing: boolean;
    primary_owner_country_code: string;
  };
};

export type ClientGetWebSocketURLResponse = {
  ok: true;
  primary_websocket_url: string;
  fallback_websocket_url: string;
  ttl_seconds: number;
  routing_context: string;
};

export type ClientShouldReloadResponse = {
  ok: true;
  build_version_enabled: boolean;
  should_reload: boolean;
  client_min_version: number;
  client_min_build_version: number;
  client_min_config_version: number;
  recommended_build_version: number;
  build_manifest_last_modified: number;
  should_fetch_new_service_worker: boolean;
};

export type ClientUserBootPrefsEntry = {
  "de-DE": string;
  "fr-FR": string;
  "it-IT": string;
  "pt-BR": string;
  "ja-JP": string;
  "zh-CN": string;
  "zh-TW": string;
  "ko-KR": string;
};

export type ClientUserBootPrefsName =
  | "underline_links"
  | "show_text_selection_context_menu"
  | "user_colors"
  | "color_names_in_list"
  | "keyboard"
  | "slackbot_ai_nux_state"
  | "email_alerts"
  | "email_alerts_sleep_until"
  | "email_tips"
  | "email_weekly"
  | "email_offers"
  | "email_research"
  | "email_developer"
  | "email_changelog"
  | "welcome_message_hidden"
  | "search_sort"
  | "search_file_sort"
  | "search_channel_sort"
  | "search_mixed_results_sort"
  | "search_top_results_sort"
  | "search_work_objects_sort"
  | "search_people_sort"
  | "search_minimize_sources"
  | "search_hidden_connectors"
  | "expand_inline_imgs"
  | "num_top_result_tab_clicked"
  | "expand_internal_inline_imgs"
  | "expand_snippets"
  | "posts_formatting_guide"
  | "seen_welcome_2"
  | "seen_ssb_prompt"
  | "spaces_new_xp_banner_dismissed"
  | "search_only_my_channels"
  | "search_only_current_team"
  | "search_hide_my_channels"
  | "search_only_show_online"
  | "search_hide_deactivated_users"
  | "emoji_mode"
  | "has_invited"
  | "has_uploaded"
  | "has_created_channel"
  | "has_created_channel_section"
  | "has_searched"
  | "has_installed_apps"
  | "search_exclude_channels"
  | "messages_theme"
  | "webapp_spellcheck"
  | "no_joined_overlays"
  | "no_created_overlays"
  | "dropbox_enabled"
  | "seen_domain_invite_reminder"
  | "seen_member_invite_reminder"
  | "mute_sounds"
  | "arrow_history"
  | "tab_ui_return_selects"
  | "obey_inline_img_limit"
  | "require_at"
  | "ssb_space_window"
  | "mac_ssb_bounce"
  | "mac_ssb_bullet"
  | "expand_non_media_attachments"
  | "show_typing"
  | "pagekeys_handled"
  | "last_snippet_type"
  | "display_real_names_override"
  | "display_display_names"
  | "time24"
  | "enter_is_special_in_tbt"
  | "msg_input_send_btn"
  | "msg_input_send_btn_auto_set"
  | "msg_input_sticky_composer"
  | "graphic_emoticons"
  | "convert_emoticons"
  | "ss_emojis"
  | "seen_onboarding_start"
  | "onboarding_cancelled"
  | "seen_onboarding_slackbot_conversation"
  | "seen_onboarding_channels"
  | "seen_onboarding_direct_messages"
  | "seen_onboarding_invites"
  | "seen_onboarding_search"
  | "seen_onboarding_recent_mentions"
  | "seen_onboarding_starred_items"
  | "seen_onboarding_private_groups"
  | "seen_onboarding_banner"
  | "onboarding_slackbot_conversation_step"
  | "set_tz_automatically"
  | "suppress_link_warning"
  | "suppress_thread_mention_warning"
  | "suppress_external_invites_from_compose_warning"
  | "seen_emoji_pack_cta"
  | "seen_emoji_pack_dialog"
  | "seen_schedule_send_coachmark"
  | "seen_gif_new_badge"
  | "seen_gif_picker_admin_cta"
  | "emoji_packs_most_recent_available_time"
  | "emoji_packs_clicked_picker_cta"
  | "emoji_packs_clicked_picker_post_install_cta"
  | "emoji_packs_clicked_collection_cta"
  | "dnd_enabled"
  | "dnd_start_hour"
  | "dnd_end_hour"
  | "dnd_before_monday"
  | "dnd_after_monday"
  | "dnd_enabled_monday"
  | "dnd_before_tuesday"
  | "dnd_after_tuesday"
  | "dnd_enabled_tuesday"
  | "dnd_before_wednesday"
  | "dnd_after_wednesday"
  | "dnd_enabled_wednesday"
  | "dnd_before_thursday"
  | "dnd_after_thursday"
  | "dnd_enabled_thursday"
  | "dnd_before_friday"
  | "dnd_after_friday"
  | "dnd_enabled_friday"
  | "dnd_before_saturday"
  | "dnd_after_saturday"
  | "dnd_enabled_saturday"
  | "dnd_before_sunday"
  | "dnd_after_sunday"
  | "dnd_enabled_sunday"
  | "dnd_days"
  | "dnd_weekdays_off_allday"
  | "reminder_notification_time"
  | "dnd_custom_new_badge_seen"
  | "dnd_notification_schedule_new_badge_seen"
  | "priority_dnd_override"
  | "priority_sidebar_section"
  | "notification_center_filters"
  | "unread_collapsed_channels"
  | "xws_unread_collapsed_channels"
  | "calls_survey_last_seen"
  | "huddle_survey_last_seen"
  | "sidebar_behavior"
  | "channel_sort"
  | "separate_private_channels"
  | "separate_shared_channels"
  | "sidebar_theme"
  | "sidebar_theme_custom_values"
  | "ia_theme"
  | "ia_theme_pre_halloween"
  | "no_invites_widget_in_sidebar"
  | "boost_mentions"
  | "undo_channel_intermix"
  | "show_muted_items_outside_sidebar_menus"
  | "remove_sidebar_customizations"
  | "workspace_filter_selected"
  | "no_omnibox_in_channels"
  | "k_key_omnibox_auto_hide_count"
  | "show_sidebar_quickswitcher_button"
  | "ent_org_wide_channels_sidebar"
  | "mark_msgs_read_immediately"
  | "start_scroll_at_oldest"
  | "snippet_editor_wrap_long_lines"
  | "ls_disabled"
  | "f_key_search"
  | "k_key_omnibox"
  | "prompted_for_email_disabling"
  | "no_macelectron_banner"
  | "no_macssb1_banner"
  | "no_macssb2_banner"
  | "no_winssb1_banner"
  | "hide_user_group_info_pane"
  | "mentions_exclude_at_user_groups"
  | "mentions_exclude_reactions"
  | "privacy_policy_seen"
  | "enterprise_migration_seen"
  | "last_tos_acknowledged"
  | "search_exclude_bots"
  | "load_lato_2"
  | "fuller_timestamps"
  | "last_seen_at_channel_warning"
  | "emoji_autocomplete_big"
  | "two_factor_auth_enabled"
  | "two_factor_type"
  | "two_factor_backup_type"
  | "hide_hex_swatch"
  | "show_jumper_scores"
  | "enterprise_mdm_custom_msg"
  | "enterprise_excluded_app_teams"
  | "client_logs_pri"
  | "flannel_server_pool"
  | "mentions_exclude_at_channels"
  | "confirm_clear_all_unreads"
  | "confirm_user_marked_away"
  | "box_enabled"
  | "seen_single_emoji_msg"
  | "confirm_sh_call_start"
  | "preferred_skin_tone"
  | "show_all_skin_tones"
  | "whats_new_read"
  | "help_menu_open_timestamp"
  | "jumbomoji"
  | "newxp_seen_last_message"
  | "show_memory_instrument"
  | "enable_unread_view"
  | "seen_unread_view_coachmark"
  | "seen_connect_dm_coachmark"
  | "seen_connect_section_coachmark"
  | "should_show_connect_section"
  | "enable_react_emoji_picker"
  | "seen_custom_status_badge"
  | "seen_custom_status_callout"
  | "seen_custom_status_expiration_badge"
  | "used_custom_status_kb_shortcut"
  | "seen_guest_admin_slackbot_announcement"
  | "seen_threads_notification_banner"
  | "seen_name_tagging_coachmark"
  | "all_unreads_sort_order"
  | "all_unreads_section_filter"
  | "locale"
  | "seen_intl_channel_names_coachmark"
  | "seen_p3_locale_change_message_ko_kr"
  | "seen_toast_new_locale_launch"
  | "seen_toast_new_locale_launch_ts"
  | "seen_locale_change_message"
  | "seen_japanese_locale_change_message"
  | "seen_shared_channels_coachmark"
  | "seen_shared_channels_opt_in_change_message"
  | "has_recently_shared_a_channel"
  | "seen_channel_browser_admin_coachmark"
  | "seen_administration_menu"
  | "seen_drafts_section_coachmark"
  | "seen_emoji_update_overlay_coachmark"
  | "seen_sonic_deluxe_toast"
  | "seen_wysiwyg_deluxe_toast"
  | "seen_markdown_paste_toast"
  | "seen_markdown_paste_shortcut"
  | "seen_ia_education"
  | "show_ia_tour_relaunch"
  | "plain_text_mode"
  | "show_shared_channels_education_banner"
  | "should_show_shared_channels_day1_creator_welcome_modal"
  | "ia_slackbot_survey_timestamp_48h"
  | "ia_slackbot_survey_timestamp_7d"
  | "enable_streamline_view"
  | "enable_sent_view"
  | "enable_catch_up_view"
  | "enable_shortcuts_view"
  | "enable_drafts_view"
  | "enable_scheduled_view"
  | "enable_later_view"
  | "enable_todos_view"
  | "enable_huddles_view"
  | "enable_huddles_home_view"
  | "enable_threads_view"
  | "enable_recap_view"
  | "enable_unified_directory_view"
  | "seen_threads_pref_education_banner_count"
  | "show_threads_pref_education_banner"
  | "seen_platform_page"
  | "allow_calls_to_set_current_status"
  | "in_interactive_mas_migration_flow"
  | "sunset_interactive_message_views"
  | "shdep_promo_code_submitted"
  | "seen_shdep_slackbot_message"
  | "seen_calls_interactive_coachmark"
  | "allow_cmd_tab_iss"
  | "join_calls_device_settings"
  | "calls_disconnect_on_lock"
  | "seen_workflow_builder_deluxe_toast"
  | "workflow_builder_intro_modal_clicked_through"
  | "workflow_builder_coachmarks"
  | "seen_gdrive_coachmark"
  | "seen_first_install_coachmark"
  | "seen_existing_install_coachmark"
  | "seen_link_unfurl_coachmark"
  | "file_picker_variant"
  | "open_quip_doc_in_flexpane"
  | "seen_onboarding_synth_view"
  | "seen_onboarding_synth_view_count"
  | "synth_view_prefs"
  | "seen_onboarding_synth_view_v2"
  | "seen_onboarding_synth_view_count_v2"
  | "dm_canvas_auto_open_count_left"
  | "show_dm_canvas_preview"
  | "lists_add_to_list_default_list"
  | "seen_onboarding_lists"
  | "seen_more_tab_lists_new_badge"
  | "lists_template_sidebar_collapsed"
  | "hide_external_members_list_sharing_speed_bump"
  | "lists_tabbing_navigation_option_type"
  | "lists_default_view"
  | "seen_list_items_view"
  | "lists_my_items"
  | "lists_my_items_last_seen"
  | "lists_message_todo_reaction"
  | "has_opened_list"
  | "todos_last_seen"
  | "todos_item_details_auto_open_from_message"
  | "todos_later_archive_do_not_show_again_move_to_todos_speedbump"
  | "todos_later_archive_do_not_show_again_delete_speedbump"
  | "saved_searches"
  | "channel_canvas_layouts"
  | "huddles_cc_by_default"
  | "huddles_mute_by_default"
  | "huddles_video_off_by_default"
  | "huddles_global_mute"
  | "huddles_mini_panel"
  | "huddles_set_status"
  | "huddles_show_shouty_rooster"
  | "huddles_disconnect_on_lock"
  | "huddles_play_music_when_last"
  | "huddles_allow_smart_notif"
  | "huddles_reactions_play_sound"
  | "huddles_reactions_read_out_loud"
  | "huddles_play_music_timeout"
  | "huddles_music_player_song_key"
  | "calendar_huddles_default_access_policy"
  | "huddles_show_join_preview"
  | "calendar_huddles_default_auto_start_summary"
  | "huddles_chime_new_endpoints_check_completed"
  | "quip_new_endpoints_check_completed"
  | "xws_sidebar_variant"
  | "overloaded_message_enabled"
  | "seen_highlights_coachmark"
  | "seen_highlights_arrows_coachmark"
  | "seen_highlights_warm_welcome"
  | "seen_new_search_ui"
  | "seen_channel_search"
  | "seen_people_search"
  | "seen_people_search_count"
  | "dismissed_scroll_search_tooltip_count"
  | "last_dismissed_scroll_search_tooltip_timestamp"
  | "has_used_quickswitcher_shortcut"
  | "seen_quickswitcher_shortcut_tip_count"
  | "browsers_dismissed_channels_low_results_education"
  | "browsers_seen_initial_channels_education"
  | "browsers_dismissed_people_low_results_education"
  | "browsers_seen_initial_people_education"
  | "browsers_dismissed_user_groups_low_results_education"
  | "browsers_seen_initial_user_groups_education"
  | "browsers_dismissed_files_low_results_education"
  | "browsers_seen_initial_files_education"
  | "browsers_dismissed_initial_drafts_education"
  | "browsers_seen_initial_drafts_education"
  | "browsers_dismissed_initial_activity_education"
  | "browsers_seen_initial_activity_education"
  | "browsers_dismissed_initial_saved_education"
  | "browsers_seen_initial_saved_education"
  | "seen_edit_mode"
  | "seen_edit_mode_edu"
  | "xws_dismissed_education"
  | "xws_seen_education"
  | "sidebar_pref_dismissed_tip"
  | "a11y_message_verbosity_settings"
  | "a11y_dyslexic"
  | "a11y_animations"
  | "seen_keyboard_shortcuts_coachmark"
  | "seen_a11y_pref_setup_coachmark"
  | "seen_a11y_bbm_onboarding_modal"
  | "seen_a11y_bbm_onboarding_nudge"
  | "seen_a11y_bbm_browser_zoom_modal"
  | "seen_a11y_alt_text_reminders_modal"
  | "lessons_enabled"
  | "tractor_experiment_group"
  | "opened_slackbot_dm"
  | "newxp_seen_help_message"
  | "newxp_suggested_channels"
  | "onboarding_complete"
  | "has_received_threaded_message"
  | "joiner_notifications_muted"
  | "invite_accepted_notifications_muted"
  | "joiner_message_suggestion_dismissed"
  | "email_digest"
  | "dismissed_fullscreen_download_ssb_prompt"
  | "dismissed_banner_download_ssb_prompt"
  | "dismissed_top_results_nux_banner"
  | "onboarding_state"
  | "whocanseethis_dm_mpdm_badge"
  | "all_notifications_prefs"
  | "activity_include_threads_in_badge_count"
  | "activity_dms_opt_out"
  | "mute_huddle_sounds"
  | "huddle_invite_sound"
  | "huddle_invite_sound_v2"
  | "hidden_users"
  | "vip_users"
  | "slackbot_customization"
  | "slackbot_autosub_threads"
  | "slackbot_conversation_history"
  | "slackbot_mcp_servers"
  | "slack_ai_web_search_disabled"
  | "has_seen_slackbot_ai_upgrade_paywall"
  | "has_seen_slackbot_ai_sparkles"
  | "slackbot_ai_sparkle_nux_start"
  | "slackbot_ai_sparkle_sample_timestamp"
  | "growth_msg_limit_approaching_cta_count"
  | "growth_msg_limit_approaching_cta_ts"
  | "growth_msg_limit_reached_cta_count"
  | "growth_msg_limit_reached_cta_last_ts"
  | "growth_msg_limit_long_reached_cta_count"
  | "growth_msg_limit_long_reached_cta_last_ts"
  | "growth_msg_limit_sixty_day_banner_cta_count"
  | "growth_msg_limit_sixty_day_banner_cta_last_ts"
  | "growth_all_banners_prefs"
  | "analytics_upsell_coachmark_seen"
  | "seen_app_space_coachmark"
  | "seen_app_space_tutorial"
  | "dismissed_app_launcher_welcome"
  | "dismissed_app_launcher_limit"
  | "dismissed_app_launcher_atlassian_promo"
  | "enable_app_config_redesign"
  | "dismissed_app_config_redesign_coachmark"
  | "dismissed_app_manifest_description"
  | "dismissed_app_manifest_coachmark"
  | "app_manifest_schema_format"
  | "purchaser"
  | "seen_channel_email_tooltip"
  | "has_met_new_badge_prerequisite"
  | "num_clicked_cuddles_button"
  | "cuddles_button_first_seen"
  | "show_ent_onboarding"
  | "seen_workflows_gallery_onboarding_banner_view_count"
  | "seen_workflows_gallery_onboarding_banner_dismissed"
  | "seen_workflows_templates_gallery_onboarding_banner_dismissed"
  | "seen_workflows_managed_by_you_onboarding_banner_dismissed"
  | "seen_sidebar_tabrail_more_automations_callout"
  | "login_notification_mode"
  | "seen_corporate_export_alert"
  | "show_autocomplete_help"
  | "deprecation_toast_last_seen"
  | "deprecation_modal_last_seen"
  | "deprecation_banner_last_seen"
  | "iap1_lab"
  | "ia_top_nav_theme"
  | "ia_platform_actions_lab"
  | "activity_view"
  | "saved_view"
  | "seen_floating_sidebar_coachmark"
  | "show_ia4_legacy_theme_banner"
  | "desktop_deeplink_signals"
  | "desktop_client_ids"
  | "failover_proxy_check_completed"
  | "chime_access_check_completed"
  | "mx_calendar_type"
  | "edge_upload_proxy_check_completed"
  | "app_subdomain_check_completed"
  | "add_prompt_interacted"
  | "add_apps_prompt_dismissed"
  | "add_channel_prompt_dismissed"
  | "channel_sidebar_hide_invite"
  | "channel_sidebar_hide_browse_dms_link"
  | "in_prod_surveys_enabled"
  | "connect_dm_early_access"
  | "dismissed_installed_app_dm_suggestions"
  | "seen_contextual_message_shortcuts_modal"
  | "seen_message_navigation_educational_toast"
  | "contextual_message_shortcuts_modal_was_seen"
  | "message_navigation_toast_was_seen"
  | "up_to_browse_kb_shortcut"
  | "set_a11y_prefs_new_user"
  | "a11y_line_length"
  | "a11y_play_sound_for_incoming_dm"
  | "a11y_play_sound_for_sent_dm"
  | "a11y_play_sound_for_incoming_dm_choice"
  | "a11y_play_sound_for_sent_dm_choice"
  | "a11y_read_out_incoming_dm"
  | "a11y_screen_reader_message_label_date_time_first"
  | "contextual_help_reset_count"
  | "should_show_contextual_help_for_conversation_navigation"
  | "should_show_contextual_help_for_jump_to_conversation"
  | "should_show_contextual_help_for_section_navigation"
  | "should_show_contextual_help_for_thread_navigation"
  | "a11y_never_show_slackbot_alt_text_reminders"
  | "a11y_show_alt_text_reminders"
  | "should_show_unsend_message_confirmation"
  | "channel_sections"
  | "team_channel_sections"
  | "online_first_dms_on"
  | "show_quick_reactions"
  | "user_customized_quick_reactions_display_feature"
  | "user_customized_quick_reactions_has_customized"
  | "user_customized_quick_reactions_emoji_1"
  | "user_customized_quick_reactions_emoji_2"
  | "user_customized_quick_reactions_emoji_3"
  | "user_customized_quick_reactions_use_frequently_used_emoji"
  | "reaction_notifications"
  | "has_received_mention_or_reaction"
  | "has_starred_item"
  | "has_drafted_message"
  | "has_sent_ten_messages"
  | "enable_mentions_and_reactions_view"
  | "enable_reminders_view"
  | "enable_saved_items_view"
  | "enable_all_dms_view"
  | "enable_channel_browser_view"
  | "enable_file_browser_view"
  | "enable_file_browser_view_for_docs"
  | "enable_quip_file_browser_view"
  | "enable_lists_browser_view"
  | "enable_people_browser_view"
  | "enable_app_browser_view"
  | "reached_all_dms_disclosure"
  | "enable_slack_connect_view"
  | "enable_slack_connect_view_2"
  | "has_acknowledged_shortcut_speedbump"
  | "stories_variant"
  | "enable_media_captions"
  | "media_playback_speed"
  | "media_muted"
  | "media_volume"
  | "dismissed_connect_auto_approval_modal"
  | "tasks_view"
  | "task_lists"
  | "assigned_to_list"
  | "assigned_items_refinements"
  | "task_enable_stacked_ui"
  | "show_sidebar_avatars"
  | "has_dismissed_google_directory_coachmark"
  | "seen_sc_page_banner"
  | "seen_sc_menu_coachmark"
  | "seen_sc_page"
  | "dismissed_scdm_education"
  | "seen_sent_page_in_sidebar"
  | "first_seen_sent_page_in_sidebar"
  | "seen_new_badge_in_more_menu_sidebar"
  | "first_seen_new_badge_in_more_menu_sidebar"
  | "dismissed_sent_page_education"
  | "seen_bookmarks_intro"
  | "scdm_trial_offer_banner"
  | "identity_links_prefs"
  | "identity_links_global_prefs"
  | "seen_sections_unreads_only_prompt_count"
  | "last_seen_sections_unreads_only_prompt_timestamp"
  | "notifications_view"
  | "progressive_disclosure_state"
  | "suggestions_request_id"
  | "allowed_unfurl_senders"
  | "hide_external_members_sharing_speed_bump"
  | "hide_sc_files_sharing_speed_bump"
  | "who_can_share_contact_card"
  | "who_can_see_account_by_searching_email"
  | "slack_connect_invite_should_badge_sidebar"
  | "slack_scribe_dictation_shortcut"
  | "phc_dismissed"
  | "phc_viewed"
  | "dismissed_gov_slack_first_time_popup"
  | "show_gov_slack_context_bar_banner"
  | "mobile_channel_list_sort"
  | "mobile_channel_list_show_all_dms"
  | "onboarding_tip_opt_out"
  | "opt_out_welcome_dm_ephemeral_suggestion"
  | "hide_external_members_canvas_sharing_speed_bump"
  | "seen_private_message_forwarding_coachmark"
  | "later_show_upcoming_reminders"
  | "ia4_desktop_custom_tablist"
  | "use_voip_huddle_invite"
  | "huddles_autoinvite"
  | "client_relevant_workspaces"
  | "home_unread_dot"
  | "ia4_slackbot_survey_timestamp_48h"
  | "ia4_slackbot_survey_timestamp_7d"
  | "has_clicked_highlighted_header_compose_button"
  | "should_show_ia4_tabs"
  | "window_background_gradients"
  | "ia4_sidebar_inverted_v2_coachmark"
  | "seen_canvas_template_new_badge"
  | "seen_canvas_template_new_badge_channel_canvas"
  | "seen_canvas_template_convert_action_new_badge"
  | "seen_canvas_header_image_new_badge"
  | "tab_rail_customization"
  | "tab_rail_customization_reasons"
  | "seen_navigation_preferences_pane"
  | "ia4_compact_mode"
  | "trials_showcase_channel_banner_collapsed"
  | "trials_showcase_dm_banner_collapsed"
  | "trials_showcase_search_banner_collapsed"
  | "hp_s2p_purchaser_treatment"
  | "resurrected_user_welcome_ts"
  | "trials_sidebar_banner_wrapper_dismissed"
  | "hidden_user_group_sections"
  | "seen_usergroup_section_new_badge"
  | "seen_canvas_cta"
  | "seen_clip_cta"
  | "seen_emoji_cta"
  | "seen_huddle_cta"
  | "show_ai_apps"
  | "ai_apps_to_show"
  | "seen_ai_apps_app_config_coachmark"
  | "slack_ai_inbox_enabled"
  | "inbox_card_view_enabled"
  | "solutions_onboarding_user_tracker"
  | "solution_template"
  | "inactive_user_summary_notification"
  | "show_channel_join_banner"
  | "channel_join_experience_enabled"
  | "channel_join_experience_nux_interacted"
  | "slack_ai_translation_target_language"
  | "slack_ai_translation_target_excluded_languages"
  | "slack_ai_file_summary_disabled"
  | "slack_ai_channel_thread_summary_streaming_disabled"
  | "slack_ai_action_items_disabled"
  | "slack_ai_todo_action_items_disabled"
  | "last_seen_speedbump_ts"
  | "first_seen_preview_recap_ts"
  | "recap_default_mute_status"
  | "no_content_email_digest_unsub"
  | "resurrect_mentions_email"
  | "activity_feed_sort"
  | "do_not_show_mark_dms_read_warning"
  | "show_threads_suggested_replies"
  | "today_live_topics"
  | "slack_ai_auto_thread_summaries_disabled"
  | "stick_user_sort"
  | "seen_sort_most_relevant_coachmark"
  | "seen_sort_edit_prefs_cta"
  | "calendar_background_theme_enabled"
  | "calendar_background_theme"
  | "calendar_jit_in_sidebar_enabled"
  | "calendar_jit_as_system_notification"
  | "calendar_jit_as_push_notification"
  | "calendar_desktop_notification_sound"
  | "profile_summaries_enabled"
  | "real_time_recap_enabled"
  | "recap_sort_type"
  | "salesforce_approvals_list"
  | "hide_muted_channels_from_sidebar"
  | "mega_dnd_expiration"
  | "lens_clog_forward_enabled"
  | "first_login_ts"
  | "contacts_oauth"
  | "agents_in_channel_banner_hidden"
  | "seen_search_apps_app_config_coachmark"
  | "disabled_search_remote_functions"
  | "two_factor_post_checkout_required"
  | "work_objects_click_opens_url_prefs"
  | "everything_setting_downgrade"
  | "today_auto_navigate"
  | "today_primary_card_layout"
  | "today_hidden_cards"
  | "today_ignored_channels"
  | "today_priority_channels"
  | "today_card_positions"
  | "today_later_opt_in"
  | "today_tab_rail_location"
  | "default_suggested_channel_sections"
  | "create_channel_section_education"
  | "welcome_pre_dm_party_notification_muted"
  | "slackbot_composer_formatting_enabled"
  | "focus_mode_force_dark_mode_enabled"
  | "focus_mode_expiration_ts"
  | "tz"
  | "locales_enabled"
;

export type ClientUserBootResponse = {
  ok: true;
  app_commands_cache_ts: string;
  cache_ts_version: string;
  cache_version: string;
  translations_cache_ts: string;
  is_content_reporting_enabled: boolean;
  dnd: {
    dnd_enabled: boolean;
    next_dnd_start_ts: number;
    next_dnd_end_ts: number;
    snooze_enabled: boolean;
  };
  is_europe: boolean;
  account_types: {
    is_admin: unknown[];
    is_owner: unknown[];
    is_primary_owner: unknown[];
  };
  can_access_client_v2: boolean;
  channels_priority: Record<ChannelId | DmId | GroupId, number>;
  channels: Array<{
    id: string;
    name: string;
    is_channel: boolean;
    is_group: boolean;
    is_im: boolean;
    is_mpim: boolean;
    is_private: boolean;
    created: number;
    is_archived: boolean;
    is_general: boolean;
    unlinked: number;
    name_normalized: string;
    is_shared: boolean;
    is_frozen: boolean;
    is_org_shared: boolean;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    context_team_id: string;
    updated: number;
    parent_conversation: null;
    creator: string;
    is_moved: number;
    is_ext_shared: boolean;
    shared_team_ids: string[];
    internal_team_ids: string[];
    pending_connected_team_ids: unknown[];
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    properties: {
      canvas?: {
        file_id: string;
        is_empty: boolean;
        quip_thread_id: string;
        is_migrated: boolean;
      };
      meeting_notes?: {
        file_id: string;
        is_locked?: boolean;
      };
      tabs?: Array<{
        type: string;
        label: string;
        id: string;
        is_disabled?: boolean;
        data?: {
          file_id: string;
          shared_ts: string;
          mute_edit_updates?: boolean;
          folder_bookmark_id?: string;
        };
      }>;
      tabz?: Array<{
        type: string;
        label?: string;
        is_disabled?: boolean;
        id?: string;
        data?: {
          file_id: string;
          shared_ts: string;
          mute_edit_updates?: boolean;
          folder_bookmark_id?: string;
        };
      }>;
      auto_open_tab_id?: string;
      auto_open_tab_id_timestamp?: number;
      who_can_manage_tabs?: string;
      is_dormant?: boolean;
      posting_restricted_to?: {
        type: string[];
        user: string[];
      };
      threads_restricted_to?: {
        type: string[];
        user?: string[];
      };
      huddles_restricted?: boolean;
      huddles?: {
        ai_notes_settings_restricted: boolean;
        is_huddle_channel: boolean;
      };
      at_here_restricted?: boolean;
      at_channel_restricted?: boolean;
    };
    previous_names?: string[];
    is_global_shared?: boolean;
    is_org_default?: boolean;
    is_org_mandatory?: boolean;
    connected_team_ids?: unknown[];
    connected_limited_team_ids?: unknown[];
    members?: string[];
  }>;
  default_workspace: string;
  has_more_mpdms: boolean;
  ims: Array<{
    id: string;
    created: number;
    is_org_shared: boolean;
    is_im: boolean;
    is_archived: boolean;
    context_team_id: string;
    updated: number;
    is_shared: boolean;
    is_frozen: boolean;
    user: string;
    is_open: boolean;
    properties?: {
      tabs: Array<{
        type: string;
        label: string;
        id: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        is_disabled?: boolean;
      }>;
      tabz: Array<{
        type: string;
        id?: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        label?: string;
        is_disabled?: boolean;
      }>;
      meeting_notes?: {
        file_id: string;
      };
    };
  }>;
  is_open: string[];
  non_threadable_channels: unknown[];
  prefs: Record<ClientUserBootPrefsName, ClientUserBootPrefsEntry>;
  prefs_version: string;
  read_only_channels: string[];
  self: {
    id: string;
    name: string;
    is_bot: boolean;
    updated: number;
    is_app_user: boolean;
    deleted: boolean;
    color: string;
    is_email_confirmed: boolean;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    who_can_share_contact_card: string;
    first_login: number;
    manual_presence: string;
    profile: {
      real_name: string;
      display_name: string;
      avatar_hash: string;
      real_name_normalized: string;
      display_name_normalized: string;
      image_original: string;
      is_custom_image: boolean;
      first_name: string;
      last_name: string;
      team: string;
      title: string;
      pronouns: string;
      phone: string;
      skype: string;
      status_text: string;
      status_text_canonical: string;
      status_emoji: string;
      status_emoji_display_info: Array<{
        display_url: string;
        unicode?: string;
      }>;
      status_expiration: number;
      guest_invited_by: string;
      who_can_share_contact_card: string;
      huddle_state: string;
      huddle_state_expiration_ts: number;
      start_date: string;
      ooo_message: string;
      huddle_state_call_id?: string;
    };
  };
  slack_route: string;
  starred: string[];
  team: {
    id: string;
    name: string;
    url: string;
    domain: string;
    avatar_base_url: string;
    is_verified: boolean;
    plan: string;
    icon: {
      image_default: boolean;
      image_34: string;
      image_44: string;
      image_68: string;
      image_88: string;
      image_102: string;
      image_230: string;
      image_132: string;
    };
    date_created: number;
    prefs: {
      admin_customized_quick_reactions: string[];
      agentforce_workspaces: null;
      ai_apps: {
        is_enabled: boolean;
        allowed_apps: unknown[];
      };
      ai_apps_settings: {
        apps: unknown[];
      };
      all_users_can_purchase: boolean;
      allow_account_type_edit_channel_workspaces_override: boolean;
      allow_admin_retention_override: number;
      allow_audio_clip_sharing_slack_connect: boolean;
      allow_audio_clips: boolean;
      allow_automatic_media_transcriptions: boolean;
      allow_box_cfs: boolean;
      allow_calls: boolean;
      allow_calls_interactive_screen_sharing: boolean;
      allow_cea_for_hippa_team: boolean;
      allow_clip_downloads: string;
      allow_content_review: boolean;
      allow_custom_solution_templates: boolean;
      allow_developer_sandboxes: string;
      allow_feature_request: boolean;
      allow_huddles: boolean;
      allow_huddles_transcriptions: boolean;
      allow_huddles_video: boolean;
      allow_lists: string;
      allow_lock_thread: boolean;
      allow_media_transcriptions: boolean;
      allow_message_deletion: boolean;
      allow_native_gif_picker: boolean;
      allow_retention_override: boolean;
      allow_solution_templates: string;
      allow_spaceship: string;
      allow_sponsored_slack_connections: boolean;
      allow_video_clip_sharing_slack_connect: boolean;
      allow_video_clips: boolean;
      allow_workflow_export: boolean;
      alt_text_reminders: boolean;
      alt_text_reminders_custom_link: null;
      always_show_workspace_name: null;
      app_dir_only: boolean;
      app_management_apps: unknown[];
      app_whitelist_enabled: null;
      app_whitelist_requests_enabled: boolean;
      app_whitelist_requests_require_comment_enabled: boolean;
      atlas_org_charts_access: string;
      atlas_profiles_access: string;
      auth_mode: string;
      automatic_welcome_dm_enabled: boolean;
      available_calendar_huddle_access_options: {
        knock_access: boolean;
        org_access: boolean;
      };
      billing_email_daily: boolean;
      billing_email_monthly: boolean;
      billing_wdf_customer_id: null;
      block_file_download: boolean;
      block_file_types: boolean;
      calls_locations: unknown[];
      can_accept_slack_connect_channel_invites: boolean;
      can_create_external_limited_invite: boolean;
      can_create_slack_connect_channel_invite: boolean;
      can_receive_shared_channels_invites: boolean;
      canvas_printing_enabled: boolean;
      canvas_restricted_sharing_enabled: boolean;
      canvas_retention_duration: number;
      canvas_retention_type: number;
      canvas_updated_message_enabled: boolean;
      canvas_version_history_enabled: boolean;
      channel_audit_export_enabled: boolean;
      channel_email_addresses_enabled: boolean;
      commands_only_regular: boolean;
      company_name: null;
      content_review_enabled: boolean;
      custom_contact_email: string;
      custom_status_default_emoji: string;
      custom_status_presets: string[][];
      custom_status_site: null;
      default_channel_knowledge_agent: null;
      default_channels: null;
      default_create_private_channel: boolean;
      default_function_reuse_visibility: {
        visibility: string;
      };
      default_rxns: string[];
      default_theme: null;
      developer_sandbox_admin_menu_limited_access: boolean;
      developer_sandbox_allow_slack_connect_owning_org: boolean;
      developer_sandbox_dashboard_limited_access: boolean;
      developer_sandbox_invite_org_domains_only: {
        is_enabled: boolean;
        domains: unknown[];
      };
      developer_sandbox_org: boolean;
      developer_sandbox_org_self_signin_disabled: boolean;
      developer_sandbox_provision_notifications: {
        notifications_enabled: boolean;
        notification_location: string;
      };
      developer_sandbox_request_auto_response: string;
      developer_sandbox_request_notifications: {
        notifications_enabled: boolean;
        notification_location: string;
      };
      developer_sandbox_safe_sign_in: boolean;
      developer_sandbox_slack_connect_org_sandboxes_only: boolean;
      disable_email_ingestion: boolean;
      disable_file_deleting: boolean;
      disable_file_editing: boolean;
      disable_file_uploads: string;
      disable_privacy_and_cookie_policy: boolean;
      disable_sidebar_connect_prompts: unknown[];
      disable_sidebar_install_prompts: unknown[];
      disallow_public_file_urls: boolean;
      display_anniversary_celebration: boolean;
      display_default_phone: boolean;
      display_email_addresses: boolean;
      display_external_email_addresses: boolean;
      display_guest_email_addresses: boolean;
      display_new_hire_celebration: boolean;
      display_pronouns: boolean;
      display_real_names: boolean;
      dm_retention_duration: number;
      dm_retention_redaction_duration: number;
      dm_retention_type: number;
      dnd_after_friday: string;
      dnd_after_monday: string;
      dnd_after_saturday: string;
      dnd_after_sunday: string;
      dnd_after_thursday: string;
      dnd_after_tuesday: string;
      dnd_after_wednesday: string;
      dnd_before_friday: string;
      dnd_before_monday: string;
      dnd_before_saturday: string;
      dnd_before_sunday: string;
      dnd_before_thursday: string;
      dnd_before_tuesday: string;
      dnd_before_wednesday: string;
      dnd_days: string;
      dnd_enabled: boolean;
      dnd_enabled_friday: string;
      dnd_enabled_monday: string;
      dnd_enabled_saturday: string;
      dnd_enabled_sunday: string;
      dnd_enabled_thursday: string;
      dnd_enabled_tuesday: string;
      dnd_enabled_wednesday: string;
      dnd_end_hour: string;
      dnd_start_hour: string;
      dnd_weekdays_off_allday: boolean;
      file_retention_duration: number;
      file_retention_type: number;
      flag_content_admin_dash: boolean;
      flag_content_review_allow_decision_reversal: null;
      flag_content_review_flag_profiles: boolean;
      flag_content_review_note_required: null;
      flag_content_reviewer_assigned_notif: boolean;
      flag_message_author_outcome_notif: boolean;
      flag_message_custom_link: null;
      flag_message_flagger_outcome_notif: boolean;
      flag_message_users_to_notify: unknown[];
      flagged_content_review_channel: null;
      gdpr_enabled: boolean;
      gdrive_unfurl_restricted: boolean;
      google_sso_domain: null;
      google_sso_enable: null;
      group_retention_duration: number;
      group_retention_type: number;
      has_hipaa_compliance: boolean;
      has_shared_invites: boolean;
      hermes_allow_interactions_with_workflows_owned_by_slack_connected_teams: boolean;
      hermes_has_accepted_tos: boolean;
      hermes_triggers_trippable_by_slack_connected_teams: boolean;
      hide_gsuite_invite_option: boolean;
      hide_person_opt_out: boolean;
      hide_referers: boolean;
      identity_links_prefs: null;
      image_102: string;
      image_132: string;
      image_230: string;
      image_34: string;
      image_44: string;
      image_68: string;
      image_88: string;
      image_default: boolean;
      image_original: string;
      ineligible_for_discount: boolean;
      invite_requests_approval_channel: null;
      invite_requests_enabled: boolean;
      invited_user_preset: Record<string, unknown>;
      invites_limit: boolean;
      ip_restriction_ranges: unknown[];
      list_column_option_limit: number;
      list_restricted_sharing_enabled: boolean;
      loading_only_admins: boolean;
      locale: string;
      loud_channel_mentions_limit: number;
      max_file_upload_size: null;
      max_guest_duration: null;
      member_analytics_disabled: boolean;
      ml_opt_out: boolean;
      mobile_block_message_copy: boolean;
      mobile_force_app_upgrade_min_version: null;
      mobile_force_app_upgrade_versions_allowed: null;
      mobile_passcode_timeout_in_seconds: number;
      mobile_session_duration: number;
      msg_edit_window_mins: number;
      no_email_user_provision_type: string;
      notification_redaction_type: string;
      notify_pending_enabled: boolean;
      ntlm_credential_domains: string;
      onedrive_and_sharepoint_unfurl_restricted: boolean;
      org_default_theme: null;
      premium_workflow_notifications: {
        notifications_enabled: boolean;
        notification_location: string;
      };
      private_channel_analytics_disabled: boolean;
      private_channel_membership_limit: number;
      private_message_forwarding: boolean;
      private_retention_redaction_duration: number;
      public_retention_redaction_duration: number;
      read_only_canvas_subteam_ids: unknown[];
      received_esc_route_to_channel_awareness_message: boolean;
      record_channel_private_retention_duration: number;
      record_channel_private_retention_redaction_duration: number;
      record_channel_private_retention_type: number;
      record_channel_public_retention_duration: number;
      record_channel_public_retention_redaction_duration: number;
      record_channel_public_retention_type: number;
      required_minimum_desktop_version: null;
      required_minimum_mobile_version: null;
      restrict_workflow_trigger_steps: {
        triggers: Record<string, unknown>;
      };
      retention_duration: number;
      retention_type: number;
      rich_previews_default: string;
      rimeto_org_instance_id: null;
      sales_get_help: null;
      sales_home_retention_duration: number;
      sales_home_retention_type: number;
      salesforce_forwarding: {
        default: string;
      };
      same_org_external_teams: null;
      saml_enable: boolean;
      search_feedback_opt_out: boolean;
      security_circuit_breakers: {
        tor: boolean;
        session_fingerprint: boolean;
        spoofed_user_agent: boolean;
        unexpected_scraping: boolean;
        unexpected_user_agent: boolean;
        unexpected_api_call_volume: boolean;
        notify_primary_owner: number;
        notify_security_admins: number;
      };
      session_duration: number;
      session_duration_type: number;
      show_legacy_workflows: boolean;
      sign_in_with_slack_default: string;
      sign_in_with_slack_disabled: boolean;
      signup_domains: null;
      signup_mode: null;
      single_user_exports: boolean;
      slack_ai_action_items_opt_out: boolean;
      slack_ai_allowed_workspaces: unknown[];
      slack_ai_answer_sharing_opt_out: boolean;
      slack_ai_daily_recap_opt_out: boolean;
      slack_ai_detailed_feedback_opt_out: boolean;
      slack_ai_disabled: boolean;
      slack_ai_explain_sharing_opt_out: boolean;
      slack_ai_feedback_opt_out: boolean;
      slack_ai_file_summaries_opt_out: boolean;
      slack_ai_files_search_opt_out: {
        all_file_opt_out: boolean;
      };
      slack_ai_files_workflow_steps_opt_out: {
        all_file_opt_out: boolean;
      };
      slack_ai_huddle_summaries_opt_out: boolean;
      slack_ai_huddles_automatic_notes_opt_out: boolean;
      slack_ai_message_translations_opt_out: boolean;
      slack_ai_opt_out: boolean;
      slack_ai_search_suggested_queries: unknown[];
      slack_ai_workflow_builder_opt_out: boolean;
      slack_connect_account_visibility: string;
      slack_connect_allowed_workspaces: {
        type: string[];
      };
      slack_connect_approval_type: string;
      slack_connect_dm_only_verified_orgs: boolean;
      slack_connect_file_upload_sharing_enabled: boolean;
      slackbot_ai_canvas_write_enabled: boolean;
      slackbot_responses_disabled: boolean;
      spaceship_workspace_setting_visible: boolean;
      sso_auth_restrictions: number;
      sso_change_email: boolean;
      sso_choose_username: boolean;
      sso_disable_emails: boolean;
      sso_optional: boolean;
      sso_signup_restrictions: number;
      sso_sync_with_provider: boolean;
      stats_only_admins: boolean;
      subteams_auto_create_admin: boolean;
      subteams_auto_create_owner: boolean;
      tableau_agent_user_id: null;
      team_list_count: number;
      thorn_designated_contact: null;
      thorn_safer_scan: boolean;
      two_factor_auth_required: number;
      two_factor_prevent_sms: number;
      use_browser_picker: boolean;
      use_workspace_icon_for_single_workspace_users: boolean;
      username_policy: null;
      uses_customized_custom_status_presets: boolean;
      warn_before_at_channel: string;
      warn_user_before_logout_desktop: boolean;
      warn_user_before_logout_mobile: boolean;
      was_treatment_for_boost_bus_plus_awareness_and_upgrades: boolean;
      welcome_place_enabled: boolean;
      wfb_default_connector_visibility: string;
      wfb_salesforce_trigger_channel_restrictions: {
        salesforce_orgs: Record<string, unknown>;
      };
      who_can_accept_slack_connect_channel_invites: {
        type: string[];
        user: unknown[];
        subteam: unknown[];
      };
      who_can_change_team_profile: string;
      who_can_create_external_limited_invite: {
        type: string[];
        user: unknown[];
        subteam: unknown[];
      };
      who_can_create_shared_channels: string;
      who_can_create_slack_connect_channel_invite: {
        type: string[];
        user: string[];
        subteam: unknown[];
      };
      who_can_create_standard_workflows: null;
      who_can_create_workflows: null;
      who_can_dm_anyone: {
        type: string[];
      };
      who_can_manage_ext_shared_channels: {
        type: string[];
      };
      who_can_manage_integrations: null;
      who_can_post_general: string;
      who_can_review_flagged_content: {
        type: string[];
      };
      who_can_use_hermes: null;
      who_has_team_visibility: string;
      work_object_unfurl_visibility: number;
      workflow_builder_enabled: boolean;
      workflow_extension_steps_enabled: null;
      workflows_export_csv_enabled: null;
      workflows_webhook_trigger_enabled: null;
      allow_free_automated_trials: boolean;
      box_app_installed: boolean;
      calls_apps: {
        audio: unknown[];
        video: unknown[];
      };
      compliance_export_start: number;
      created_with_google: boolean;
      daily_prompts_enabled: boolean;
      default_channel_creation_enabled: boolean;
      discoverable: string;
      dropbox_legacy_picker: boolean;
      file_limit_whitelisted: boolean;
      filepicker_app_first_install: boolean;
      gdrive_enabled_team: boolean;
      has_compliance_export: boolean;
      has_seen_partner_promo: boolean;
      instant_slack_enabled: boolean;
      invites_only_admins: boolean;
      joiner_notifications_enabled: null;
      magic_unfurls_enabled: null;
      onedrive_app_installed: boolean;
      onedrive_enabled_team: boolean;
      self_serve_select: boolean;
      show_join_leave: boolean;
      show_join_leave_welcome_party: boolean;
      show_legacy_paid_benefits_page: boolean;
      show_mobile_promos: boolean;
      slack_connect_acceptance_auto_created_workspace: boolean;
      solutions_onboarding_tracker: {
        canvas: string;
        list: string;
      };
      test_team: boolean;
      two_factor_required: boolean;
      workflow_extension_steps_beta_opt_in: boolean;
    };
    image_proxy_url: string;
    onboarding_channel_id: string;
    messages_count: number;
  };
  thread_only_channels: string[];
  unchanged_channel_ids?: string[];
  workspaces: Array<{
    id: string;
    name: string;
    url: string;
    domain: string;
    avatar_base_url: string;
    is_verified: boolean;
    icon: {
      image_default: boolean;
      image_34: string;
      image_44: string;
      image_68: string;
      image_88: string;
      image_102: string;
      image_230: string;
      image_132: string;
    };
    prefs: {
      admin_customized_quick_reactions: string[];
      ai_apps_settings: {
        apps: unknown[];
      };
      all_users_can_purchase: boolean;
      allow_account_type_edit_channel_workspaces_override: boolean;
      allow_audio_clip_sharing_slack_connect: boolean;
      allow_audio_clips: boolean;
      allow_automatic_media_transcriptions: boolean;
      allow_calls: boolean;
      allow_calls_interactive_screen_sharing: boolean;
      allow_cea_for_hippa_team: boolean;
      allow_clip_downloads: string;
      allow_content_review: boolean;
      allow_custom_solution_templates: boolean;
      allow_feature_request: boolean;
      allow_lists: string;
      allow_lock_thread: boolean;
      allow_media_transcriptions: boolean;
      allow_native_gif_picker: boolean;
      allow_retention_override: boolean;
      allow_solution_templates: string;
      allow_spaceship: string;
      allow_sponsored_slack_connections: boolean;
      allow_video_clip_sharing_slack_connect: boolean;
      allow_video_clips: boolean;
      alt_text_reminders: boolean;
      alt_text_reminders_custom_link: null;
      atlas_org_charts_access: string;
      atlas_profiles_access: string;
      auth_mode: string;
      available_calendar_huddle_access_options: {
        knock_access: boolean;
        org_access: boolean;
      };
      billing_email_daily: boolean;
      billing_email_monthly: boolean;
      billing_wdf_customer_id: null;
      block_file_download: boolean;
      block_file_types: boolean;
      can_accept_slack_connect_channel_invites: boolean;
      can_create_external_limited_invite: boolean;
      can_create_slack_connect_channel_invite: boolean;
      can_receive_shared_channels_invites: boolean;
      canvas_printing_enabled: boolean;
      canvas_restricted_sharing_enabled: boolean;
      canvas_retention_duration: number;
      canvas_retention_type: number;
      canvas_version_history_enabled: boolean;
      commands_only_regular: boolean;
      company_name: null;
      content_review_enabled: boolean;
      custom_status_site: null;
      default_channel_knowledge_agent: null;
      default_function_reuse_visibility: {
        visibility: string;
      };
      developer_sandbox_dashboard_limited_access: boolean;
      developer_sandbox_org: boolean;
      developer_sandbox_org_self_signin_disabled: boolean;
      disable_file_deleting: boolean;
      disable_file_editing: boolean;
      disallow_public_file_urls: boolean;
      display_anniversary_celebration: boolean;
      display_email_addresses: boolean;
      display_external_email_addresses: boolean;
      display_guest_email_addresses: boolean;
      display_new_hire_celebration: boolean;
      display_pronouns: boolean;
      dm_retention_duration: number;
      dm_retention_redaction_duration: number;
      dm_retention_type: number;
      file_retention_duration: number;
      file_retention_type: number;
      flag_content_admin_dash: boolean;
      flag_content_review_allow_decision_reversal: null;
      flag_content_review_flag_profiles: boolean;
      flag_content_review_note_required: null;
      flag_content_reviewer_assigned_notif: boolean;
      flag_message_author_outcome_notif: boolean;
      flag_message_custom_link: null;
      flag_message_flagger_outcome_notif: boolean;
      flag_message_users_to_notify: unknown[];
      flagged_content_review_channel: null;
      gdpr_enabled: boolean;
      gdrive_unfurl_restricted: boolean;
      google_sso_domain: null;
      google_sso_enable: null;
      has_hipaa_compliance: boolean;
      hermes_allow_interactions_with_workflows_owned_by_slack_connected_teams: boolean;
      hermes_triggers_trippable_by_slack_connected_teams: boolean;
      hide_gsuite_invite_option: boolean;
      hide_person_opt_out: boolean;
      identity_links_prefs: {
        is_enabled: boolean;
      };
      ineligible_for_discount: boolean;
      invited_user_preset: Record<string, unknown>;
      list_column_option_limit: number;
      list_restricted_sharing_enabled: boolean;
      locale: string;
      max_guest_duration: null;
      member_analytics_disabled: boolean;
      ml_opt_out: boolean;
      mobile_block_message_copy: boolean;
      mobile_force_app_upgrade_min_version: null;
      mobile_force_app_upgrade_versions_allowed: null;
      mobile_passcode_timeout_in_seconds: number;
      mobile_session_duration: number;
      msg_edit_window_mins: number;
      no_email_user_provision_type: string;
      notification_redaction_type: string;
      notify_pending_enabled: boolean;
      ntlm_credential_domains: string;
      onedrive_and_sharepoint_unfurl_restricted: boolean;
      premium_workflow_notifications: {
        notifications_enabled: boolean;
        notification_location: string;
      };
      private_channel_analytics_disabled: boolean;
      private_channel_membership_limit: number;
      private_message_forwarding: boolean;
      private_retention_redaction_duration: number;
      public_retention_redaction_duration: number;
      read_only_canvas_subteam_ids: unknown[];
      record_channel_private_retention_duration: number;
      record_channel_private_retention_redaction_duration: number;
      record_channel_private_retention_type: number;
      record_channel_public_retention_duration: number;
      record_channel_public_retention_redaction_duration: number;
      record_channel_public_retention_type: number;
      required_minimum_desktop_version: null;
      required_minimum_mobile_version: null;
      restrict_workflow_trigger_steps: {
        triggers: Record<string, unknown>;
      };
      rimeto_org_instance_id: null;
      sales_home_retention_duration: number;
      sales_home_retention_type: number;
      salesforce_forwarding: {
        default: string;
      };
      same_org_external_teams: null;
      saml_enable: boolean;
      search_feedback_opt_out: boolean;
      security_circuit_breakers: {
        tor: boolean;
        session_fingerprint: boolean;
        spoofed_user_agent: boolean;
        unexpected_scraping: boolean;
        unexpected_user_agent: boolean;
        unexpected_api_call_volume: boolean;
        notify_primary_owner: number;
        notify_security_admins: number;
      };
      session_duration: number;
      session_duration_type: number;
      show_legacy_workflows: boolean;
      signup_domains: null;
      signup_mode: null;
      slack_ai_action_items_opt_out: boolean;
      slack_ai_allowed_workspaces: unknown[];
      slack_ai_answer_sharing_opt_out: boolean;
      slack_ai_daily_recap_opt_out: boolean;
      slack_ai_detailed_feedback_opt_out: boolean;
      slack_ai_disabled: boolean;
      slack_ai_explain_sharing_opt_out: boolean;
      slack_ai_feedback_opt_out: boolean;
      slack_ai_file_summaries_opt_out: boolean;
      slack_ai_files_search_opt_out: {
        all_file_opt_out: boolean;
      };
      slack_ai_files_workflow_steps_opt_out: {
        all_file_opt_out: boolean;
      };
      slack_ai_huddle_summaries_opt_out: boolean;
      slack_ai_huddles_automatic_notes_opt_out: boolean;
      slack_ai_message_translations_opt_out: boolean;
      slack_ai_opt_out: boolean;
      slack_ai_workflow_builder_opt_out: boolean;
      slack_connect_account_visibility: string;
      slack_connect_allowed_workspaces: {
        type: string[];
      };
      slack_connect_approval_type: string;
      slack_connect_dm_only_verified_orgs: boolean;
      slackbot_ai_canvas_write_enabled: boolean;
      spaceship_workspace_setting_visible: boolean;
      sso_auth_restrictions: number;
      sso_change_email: boolean;
      sso_choose_username: boolean;
      sso_disable_emails: boolean;
      sso_signup_restrictions: number;
      sso_sync_with_provider: boolean;
      team_list_count: number;
      thorn_designated_contact: null;
      thorn_safer_scan: boolean;
      two_factor_auth_required: number;
      two_factor_prevent_sms: number;
      use_browser_picker: boolean;
      warn_before_at_channel: string;
      warn_user_before_logout_desktop: boolean;
      warn_user_before_logout_mobile: boolean;
      wfb_default_connector_visibility: string;
      wfb_salesforce_trigger_channel_restrictions: {
        salesforce_orgs: Record<string, unknown>;
      };
      who_can_accept_slack_connect_channel_invites: {
        type: string[];
        user: unknown[];
        subteam: unknown[];
      };
      who_can_create_external_limited_invite: {
        type: string[];
        user: unknown[];
        subteam: unknown[];
      };
      who_can_create_slack_connect_channel_invite: {
        type: string[];
        user: string[];
        subteam: unknown[];
      };
      who_can_create_standard_workflows: null;
      who_can_dm_anyone: {
        type: string[];
      };
      who_can_manage_ext_shared_channels: {
        type: string[];
      };
      who_can_review_flagged_content: {
        type: string[];
      };
      work_object_unfurl_visibility: number;
      default_channels: string[];
      posts_migrating: number;
      gateway_allow_xmpp_ssl: number;
      gateway_allow_irc_ssl: number;
      gateway_allow_irc_plain: number;
      group_retention_type: number;
      group_retention_duration: number;
      retention_type: number;
      retention_duration: number;
      dnd_enabled: boolean;
      dnd_start_hour: string;
      dnd_end_hour: string;
      who_can_post_general: string;
      calls_sent_welcome_to_admins: boolean;
      invites_only_admins: boolean;
      seen_invites_only_admins_warning: boolean;
      slackbot_responses_disabled: boolean;
      who_can_create_delete_user_groups: string;
      who_can_edit_user_groups: string;
      limit_reached_ts: number;
      uses_customized_custom_status_presets: boolean;
      hide_referers: boolean;
      gdrive_enabled_team: boolean;
      received_github_app_upgrade_prompt: number;
      has_shared_invites: boolean;
      onedrive_enabled_team: boolean;
      show_join_leave: boolean;
      onedrive_app_installed: boolean;
      dropbox_legacy_picker: boolean;
      welcome_place_enabled: boolean;
      received_esc_route_to_channel_awareness_message: boolean;
      has_installed_apps: boolean;
      box_app_installed: boolean;
      calls_apps: {
        video: Array<{
          id: string;
          name: string;
          image: string;
        }>;
        audio: Array<{
          id: string;
          name: string;
          image: string;
        }>;
      };
      workflow_extension_steps_beta_opt_in: boolean;
      joiner_notifications_enabled: boolean;
      who_can_request_ext_shared_channels: {
        type: string[];
        user: unknown[];
        subteam: unknown[];
      };
      app_whitelist_enabled: boolean;
      who_can_manage_integrations: {
        type: string[];
        subteam: string[];
      };
      who_can_use_hermes: {
        type: string[];
        user: unknown[];
        subteam: unknown[];
      };
      hermes_has_accepted_tos: boolean;
      custom_status_presets: string[][];
      stats_only_admins: boolean;
      ai_apps: {
        is_enabled: boolean;
        allowed_apps: Array<{
          app_id: string;
          bot_user_id: string;
          should_show_in_sunroof?: boolean;
        }>;
      };
      was_treatment_for_boost_bus_plus_awareness_and_upgrades: boolean;
      subteams_auto_create_admin: boolean;
      subteams_auto_create_owner: boolean;
      display_real_names: boolean;
      calls_locations: unknown[];
      discoverable: string;
      use_workspace_icon_for_single_workspace_users: boolean;
      image_102: string;
      image_132: string;
      image_230: string;
      image_34: string;
      image_44: string;
      image_68: string;
      image_88: string;
      image_original: string;
      invite_requests_approval_channel: string;
      allow_admin_retention_override: number;
      allow_box_cfs: boolean;
      allow_huddles: boolean;
      allow_huddles_transcriptions: boolean;
      allow_huddles_video: boolean;
      allow_message_deletion: boolean;
      allow_workflow_export: boolean;
      app_dir_only: boolean;
      app_management_apps: unknown[];
      app_whitelist_requests_enabled: boolean;
      app_whitelist_requests_require_comment_enabled: boolean;
      automatic_welcome_dm_enabled: boolean;
      canvas_updated_message_enabled: boolean;
      custom_status_default_emoji: string;
      default_rxns: string[];
      disable_email_ingestion: boolean;
      disable_file_uploads: string;
      disable_sidebar_connect_prompts: unknown[];
      disable_sidebar_install_prompts: unknown[];
      dnd_after_friday: string;
      dnd_after_monday: string;
      dnd_after_saturday: string;
      dnd_after_sunday: string;
      dnd_after_thursday: string;
      dnd_after_tuesday: string;
      dnd_after_wednesday: string;
      dnd_before_friday: string;
      dnd_before_monday: string;
      dnd_before_saturday: string;
      dnd_before_sunday: string;
      dnd_before_thursday: string;
      dnd_before_tuesday: string;
      dnd_before_wednesday: string;
      dnd_days: string;
      dnd_enabled_friday: string;
      dnd_enabled_monday: string;
      dnd_enabled_saturday: string;
      dnd_enabled_sunday: string;
      dnd_enabled_thursday: string;
      dnd_enabled_tuesday: string;
      dnd_enabled_wednesday: string;
      dnd_weekdays_off_allday: boolean;
      invite_requests_enabled: boolean;
      invites_limit: boolean;
      ip_restriction_ranges: unknown[];
      loading_only_admins: boolean;
      loud_channel_mentions_limit: number;
      max_file_upload_size: null;
      sales_get_help: null;
      sign_in_with_slack_disabled: boolean;
      slack_ai_search_suggested_queries: unknown[];
      slack_connect_file_upload_sharing_enabled: boolean;
      tableau_agent_user_id: null;
      username_policy: null;
      who_can_change_team_profile: string;
      who_can_create_shared_channels: string;
      who_can_create_workflows: {
        type: string[];
      };
      workflow_extension_steps_enabled: boolean;
      workflows_export_csv_enabled: boolean;
      workflows_webhook_trigger_enabled: boolean;
      allow_developer_sandboxes: string;
      channel_audit_export_enabled: boolean;
      channel_email_addresses_enabled: boolean;
      custom_contact_email: string;
      default_create_private_channel: boolean;
      developer_sandbox_admin_menu_limited_access: boolean;
      developer_sandbox_allow_slack_connect_owning_org: boolean;
      developer_sandbox_invite_org_domains_only: {
        is_enabled: boolean;
        domains: unknown[];
      };
      developer_sandbox_provision_notifications: {
        notifications_enabled: boolean;
        notification_location: string;
      };
      developer_sandbox_request_auto_response: string;
      developer_sandbox_request_notifications: {
        notifications_enabled: boolean;
        notification_location: string;
      };
      developer_sandbox_safe_sign_in: boolean;
      developer_sandbox_slack_connect_org_sandboxes_only: boolean;
      disable_privacy_and_cookie_policy: boolean;
      display_default_phone: boolean;
      rich_previews_default: string;
      sign_in_with_slack_default: string;
      single_user_exports: boolean;
      sso_optional: boolean;
      who_has_team_visibility: string;
      workflow_builder_enabled: boolean;
      allow_free_automated_trials: boolean;
      compliance_export_start: number;
      created_with_google: boolean;
      daily_prompts_enabled: boolean;
      default_channel_creation_enabled: boolean;
      file_limit_whitelisted: boolean;
      filepicker_app_first_install: boolean;
      has_compliance_export: boolean;
      has_seen_partner_promo: boolean;
      image_default: boolean;
      instant_slack_enabled: boolean;
      magic_unfurls_enabled: null;
      self_serve_select: boolean;
      show_join_leave_welcome_party: boolean;
      show_legacy_paid_benefits_page: boolean;
      show_mobile_promos: boolean;
      slack_connect_acceptance_auto_created_workspace: boolean;
      solutions_onboarding_tracker: {
        canvas: string;
        list: string;
      };
      test_team: boolean;
      two_factor_required: boolean;
    };
  }>;
  is_slack_first_crm: boolean;
  mobile_app_requires_upgrade: boolean;
  subteams: {
    self: string[];
  };
  paid_features: string[];
  accept_tos_url: null;
  links: {
    domains_ts: number;
  };
};

export type ConnectInvitesListResponse = {
  ok: true;
  connect_invites: unknown[];
};

export type ConversationsAddTabResponse = {
  ok: true;
  tabs: Array<{
    id: string;
    type: string;
    data?: {
      file_id: string;
      shared_ts: string;
    };
    label: string;
    is_disabled?: boolean;
  }>;
  tabz: Array<{
    id?: string;
    type: string;
    data?: {
      file_id: string;
      shared_ts: string;
    };
    label?: string;
    is_disabled?: boolean;
  }>;
};

export type ConversationsArchiveResponse = {
  ok: true;
};

export type ConversationsBadgeCountResponse = {
  ok: true;
  has_unreads: boolean;
  has_mentions: boolean;
  mention_count: number;
};

export type ConversationsBulkLeaveResponse = {
  ok: true;
};

export type ConversationsBulkReacjiTriggersResponse = {
  ok: true;
  channel_triggers: Array<{
    channel_id: string;
    triggers: unknown[];
  }>;
};

export type ConversationsCanCreateSharedInviteResponse = {
  ok: true;
  can_create: boolean;
  reason: string;
};

export type ConversationsChannelPrefixesCreateResponse = {
  ok: true;
};

export type ConversationsChannelPrefixesDeleteResponse = {
  ok: true;
};

export type ConversationsChannelPrefixesListResponse = {
  ok: true;
  channel_prefixes: Array<{
    prefix: string;
    description: string;
    creator_id: string;
  }>;
};

export type ConversationsCloseResponse = {
  ok: true;
  already_closed?: boolean;
  no_op?: boolean;
};

export type ConversationsConvertToPrivateResponse = {
  ok: true;
};

export type ConversationsCreateResponse = {
  ok: true;
  channel: {
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    parent_conversation: null;
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    shared_team_ids: string[];
    pending_connected_team_ids: unknown[];
    is_member: boolean;
    last_read: string;
    latest: null;
    unread_count: number;
    unread_count_display: number;
    use_case?: string;
    properties?: {
      use_case: string;
    };
    priority: number;
    previous_names?: unknown[];
    internal_team_ids?: string[];
    is_open?: boolean;
    is_moved?: number;
  };
};

export type ConversationsEmailaddressesCreateResponse = {
  ok: true;
  conversation_email_address: {
    team_id: string;
    user_id: string;
    conversation_id: string;
    date_created: number;
    address: string;
    name: string;
    icons: {
      image_36: string;
      image_48: string;
      image_72: string;
    };
  };
};

export type ConversationsEmailaddressesDeleteResponse = {
  ok: true;
};

export type ConversationsEmailaddressesInfoResponse = {
  ok: true;
  conversation_email_addresses: unknown[];
};

export type ConversationsEmailaddressesUpdateResponse = {
  ok: true;
  conversation_email_address: {
    team_id: string;
    user_id: string;
    conversation_id: string;
    date_created: number;
    address: string;
    name: string;
    icons: Record<string, unknown>;
  };
};

export type ConversationsFindEligibleWorkspacesResponse = {
  ok: true;
  can_convert: boolean;
  ineligible: unknown[];
};

export type ConversationsGenericInfoResponse = {
  ok: true;
  channels: Array<{
    id: string;
    created: number;
    is_org_shared: boolean;
    is_im: boolean;
    is_archived: boolean;
    context_team_id: string;
    updated: number;
    is_shared: boolean;
    is_frozen: boolean;
    user?: string;
    last_read?: string;
    is_open?: boolean;
    properties?: {
      is_dormant?: boolean;
      tabs?: Array<{
        type: string;
        label: string;
        id: string;
        data?: {
          file_id: string;
          shared_ts: string;
          mute_edit_updates?: boolean;
        };
        is_disabled?: boolean;
      }>;
      tabz?: Array<{
        type: string;
        id?: string;
        data?: {
          file_id: string;
          shared_ts: string;
          mute_edit_updates?: boolean;
        };
        is_disabled?: boolean;
        label?: string;
      }>;
      posting_restricted_to?: {
        type: string[];
        user?: string[];
      };
      threads_restricted_to?: {
        type: string[];
      };
      canvas?: {
        file_id: string;
        is_empty?: boolean;
        quip_thread_id: string;
        is_migrated: boolean;
      };
      meeting_notes?: {
        file_id: string;
        is_locked?: boolean;
      };
      who_can_manage_tabs?: string;
    };
    name?: string;
    is_channel?: boolean;
    is_group?: boolean;
    is_mpim?: boolean;
    is_private?: boolean;
    is_general?: boolean;
    unlinked?: number;
    name_normalized?: string;
    is_pending_ext_shared?: boolean;
    pending_shared?: unknown[];
    parent_conversation: null;
    creator?: string;
    is_thread_only?: boolean;
    is_moved?: number;
    is_ext_shared?: boolean;
    is_global_shared?: boolean;
    is_org_default?: boolean;
    is_org_mandatory?: boolean;
    pending_connected_team_ids?: unknown[];
    topic?: {
      value: string;
      creator: string;
      last_set: number;
    };
    purpose?: {
      value: string;
      creator: string;
      last_set: number;
    };
    is_file?: boolean;
    shared_team_ids?: string[];
    internal_team_ids?: string[];
    previous_names?: string[];
  }>;
  unchanged_channel_ids: string[];
};

export type ConversationsGetRetentionResponse = {
  ok: true;
  retention: {
    retention_type: number;
    retention_duration: number;
  };
};

export type ConversationsHistoryMessagesFilesEntry = {
  offset_ms: number;
  max_offset_ms: number;
  duration_ms: number;
  media_watched: boolean;
};

export type ConversationsHistoryMessagesFilesName =
  | "id"
  | "created"
  | "timestamp"
  | "name"
  | "title"
  | "mimetype"
  | "filetype"
  | "pretty_type"
  | "user"
  | "user_team"
  | "editable"
  | "size"
  | "mode"
  | "is_external"
  | "external_type"
  | "is_public"
  | "public_url_shared"
  | "display_as_bot"
  | "username"
  | "url_private"
  | "url_private_download"
  | "media_display_type"
  | "thumb_64"
  | "thumb_80"
  | "thumb_360"
  | "thumb_360_w"
  | "thumb_360_h"
  | "thumb_480"
  | "thumb_480_w"
  | "thumb_480_h"
  | "thumb_160"
  | "thumb_720"
  | "thumb_720_w"
  | "thumb_720_h"
  | "thumb_800"
  | "thumb_800_w"
  | "thumb_800_h"
  | "original_w"
  | "original_h"
  | "thumb_tiny"
  | "permalink"
  | "permalink_public"
  | "is_starred"
  | "skipped_shares"
  | "has_rich_preview"
  | "file_access"
  | "is_transcription_region_supported"
  | "transcription"
  | "mp4"
  | "hls"
  | "hls_embed"
  | "mp4_low"
  | "duration_ms"
  | "thumb_video"
  | "thumb_video_w"
  | "thumb_video_h"
  | "thumb_960"
  | "thumb_960_w"
  | "thumb_960_h"
  | "thumb_1024"
  | "thumb_1024_w"
  | "thumb_1024_h"
  | "media_progress"
  | "vtt"
  | "aac"
  | "audio_wave_samples"
  | "subject"
  | "to"
  | "from"
  | "cc"
  | "attachments"
  | "original_attachment_count"
  | "inline_attachment_count"
  | "plain_text"
  | "preview"
  | "preview_plain_text"
  | "headers"
  | "has_more"
  | "sent_to_self"
  | "bot_id"
  | "app_id"
  | "thumb_360_gif"
  | "thumb_480_gif"
  | "deanimate"
  | "deanimate_gif"
  | "subtype"
  | "url_static_preview"
  | "quip_thread_id"
  | "updated"
  | "update_notification"
  | "canvas_readtime"
  | "teams_shared_with"
  | "is_restricted_sharing_enabled"
  | "excluded_from_slack_ai"
  | "access"
  | "org_or_workspace_access"
  | "title_blocks"
  | "canvas_creator_id"
  | "team_pref_version_history_enabled"
  | "canvas_printing_enabled"
  | "is_ai_suggested"
  | "thumb_pdf"
  | "thumb_pdf_w"
  | "thumb_pdf_h"
;

export type ConversationsHistoryResponse = {
  ok: true;
  latest_updates: Record<Timestamp, string>;
  unchanged_messages: string[];
  messages: Array<{
    user: string;
    type: string;
    ts: string;
    bot_id?: string;
    app_id?: string;
    text: string;
    team?: string;
    bot_profile?: {
      id: string;
      deleted: boolean;
      name: string;
      updated: number;
      app_id: string;
      icons: {
        image_36: string;
        image_48: string;
        image_72: string;
      };
      team_id: string;
      user_id?: string;
    };
    metadata?: Record<string, unknown>;
    blocks?: Array<{
      type: string;
      block_id: string;
      text?: {
        type: string;
        text: string;
        verbatim: boolean;
      };
      image_url?: string;
      alt_text?: string;
      image_width?: number;
      image_height?: number;
      image_bytes?: number;
      is_animated?: boolean;
      fallback?: string;
    }>;
    pinned_to?: string[];
    pinned_info?: {
      channel: string;
      pinned_by: string;
      pinned_ts: number;
    };
    files?: Record<ConversationsHistoryMessagesFilesName, ConversationsHistoryMessagesFilesEntry>[];
    upload?: boolean;
    display_as_bot?: boolean;
    client_msg_id?: string;
    reactions?: Array<{
      name: string;
      users: string[];
      count: number;
    }>;
    subtype?: string;
    thread_ts?: string;
    root?: {
      user: string;
      type: string;
      ts: string;
      client_msg_id?: string;
      text: string;
      team?: string;
      thread_ts: string;
      reply_count: number;
      reply_users_count: number;
      latest_reply: string;
      reply_users: string[];
      is_locked: boolean;
      subscribed: boolean;
      blocks?: Array<{
        type: string;
        block_id: string;
        text?: {
          type: string;
          text: string;
          verbatim: boolean;
        };
      }>;
      last_read?: string;
      files?: Array<{
        id: string;
        created: number;
        timestamp: number;
        name: string;
        title: string;
        mimetype: string;
        filetype: string;
        pretty_type: string;
        user: string;
        user_team: string;
        size: number;
        mode: string;
        is_external: boolean;
        is_public: boolean;
        public_url_shared: boolean;
        display_as_bot: boolean;
        username: string;
        url_private: string;
        url_private_download: string;
        media_display_type: string;
        thumb_64?: string;
        thumb_80?: string;
        thumb_360?: string;
        thumb_360_w?: number;
        thumb_360_h?: number;
        thumb_480?: string;
        thumb_480_w?: number;
        thumb_480_h?: number;
        thumb_160?: string;
        thumb_720?: string;
        thumb_720_w?: number;
        thumb_720_h?: number;
        thumb_800?: string;
        thumb_800_w?: number;
        thumb_800_h?: number;
        original_w?: number;
        original_h?: number;
        thumb_tiny?: string;
        permalink: string;
        permalink_public: string;
        is_starred: boolean;
        skipped_shares: boolean;
        has_rich_preview: boolean;
        file_access: string;
        thumb_960?: string;
        thumb_960_w?: number;
        thumb_960_h?: number;
        thumb_1024?: string;
        thumb_1024_w?: number;
        thumb_1024_h?: number;
        thumb_pdf?: string;
        thumb_pdf_w?: number;
        thumb_pdf_h?: number;
        thumb_360_gif?: string;
        thumb_480_gif?: string;
        deanimate?: string;
        deanimate_gif?: string;
      }>;
      upload?: boolean;
      display_as_bot?: boolean;
      bot_id?: string;
      app_id?: string;
      bot_profile?: {
        id: string;
        app_id: string;
        user_id: string;
        name: string;
        icons: {
          image_36: string;
          image_48: string;
          image_72: string;
        };
        deleted: boolean;
        updated: number;
        team_id: string;
      };
      attachments?: Array<{
        id?: number;
        footer_icon?: string;
        ts?: number;
        color?: string;
        fallback: string;
        text: string;
        pretext?: string;
        title?: string;
        callback_id?: string;
        footer?: string;
        fields?: Array<{
          value: string;
          title: string;
          short: boolean;
        }>;
        mrkdwn_in?: string[];
        actions?: Array<{
          id: string;
          name: string;
          text: string;
          type: string;
          value: string;
          style: string;
        }>;
        image_url?: string;
        image_width?: number;
        image_height?: number;
        image_bytes?: number;
        from_url?: string;
        service_icon?: string;
        original_url?: string;
        title_link?: string;
        service_name?: string;
        author_id?: string;
        channel_id?: string;
        channel_team?: string;
        is_msg_unfurl?: boolean;
        is_thread_root_unfurl?: boolean;
        message_blocks?: Array<{
          team: string;
          channel: string;
          ts: string;
          message: {
            blocks: Array<{
              type: string;
              block_id: string;
            }>;
          };
        }>;
        author_name?: string;
        author_link?: string;
        author_icon?: string;
        author_subname?: string;
        is_share?: boolean;
      }>;
      channel?: string;
      room?: {
        id: string;
        name: string;
        media_server: string;
        created_by: string;
        date_start: number;
        date_end: number;
        participants: unknown[];
        participant_history: string[];
        participants_events: Record<UserId, {
          user_team: Record<string, unknown>;
          joined: boolean;
          camera_on: boolean;
          camera_off: boolean;
          screenshare_on: boolean;
          screenshare_off: boolean;
        }>;
        participants_camera_on: unknown[];
        participants_camera_off: unknown[];
        participants_screenshare_on: unknown[];
        participants_screenshare_off: unknown[];
        canvas_thread_ts: string;
        thread_root_ts: string;
        channels: string[];
        is_dm_call: boolean;
        was_rejected: boolean;
        was_missed: boolean;
        was_accepted: boolean;
        has_ended: boolean;
        background_id: string;
        canvas_background: string;
        is_prewarmed: boolean;
        is_scheduled: boolean;
        recording: {
          can_record_summary: string;
        };
        locale: string;
        attached_file_ids: unknown[];
        media_backend_type: string;
        display_id: string;
        app_id: string;
        call_family: string;
        pending_invitees: Record<string, unknown>;
        last_invite_status_by_user: Record<string, unknown>;
        knocks: Record<string, unknown>;
        huddle_link: string;
      };
      no_notifications?: boolean;
      permalink?: string;
      subtype?: string;
      username?: string;
      icons?: {
        image_48: string;
      };
    };
    reply_count?: number;
    reply_users_count?: number;
    latest_reply?: string;
    reply_users?: string[];
    is_locked?: boolean;
    subscribed?: boolean;
    last_read?: string;
    attachments?: Array<{
      from_url?: string;
      image_url?: string;
      image_width?: number;
      image_height?: number;
      image_bytes?: number;
      service_icon?: string;
      id?: number;
      original_url?: string;
      fallback: string;
      text?: string;
      title?: string;
      title_link?: string;
      service_name?: string;
      ts?: string;
      author_id?: string;
      channel_id?: string;
      channel_team?: string;
      is_msg_unfurl?: boolean;
      is_thread_root_unfurl?: boolean;
      message_blocks?: Array<{
        team: string;
        channel: string;
        ts: string;
        message: {
          blocks: Array<{
            type: string;
            block_id: string;
          }>;
        };
      }>;
      files?: Array<{
        id: string;
        created: number;
        timestamp: number;
        name: string;
        title: string;
        mimetype: string;
        filetype: string;
        pretty_type: string;
        user: string;
        user_team: string;
        size: number;
        mode: string;
        is_external: boolean;
        is_public: boolean;
        public_url_shared: boolean;
        display_as_bot: boolean;
        username: string;
        url_private: string;
        url_private_download: string;
        media_display_type: string;
        thumb_64?: string;
        thumb_80?: string;
        thumb_360?: string;
        thumb_360_w?: number;
        thumb_360_h?: number;
        thumb_160?: string;
        original_w?: number;
        original_h?: number;
        thumb_tiny?: string;
        permalink: string;
        permalink_public: string;
        comments_count: number;
        is_starred: boolean;
        skipped_shares: boolean;
        has_rich_preview: boolean;
        file_access: string;
        thumb_480?: string;
        thumb_480_w?: number;
        thumb_480_h?: number;
        is_transcription_region_supported?: boolean;
        transcription?: {
          status: string;
        };
        mp4?: string;
        hls?: string;
        hls_embed?: string;
        mp4_low?: string;
        duration_ms?: number;
        thumb_video?: string;
        thumb_video_w?: number;
        thumb_video_h?: number;
        thumb_720?: string;
        thumb_720_w?: number;
        thumb_720_h?: number;
        thumb_800?: string;
        thumb_800_w?: number;
        thumb_800_h?: number;
        thumb_960?: string;
        thumb_960_w?: number;
        thumb_960_h?: number;
        thumb_1024?: string;
        thumb_1024_w?: number;
        thumb_1024_h?: number;
      }>;
      color?: string;
      is_share?: boolean;
      author_name?: string;
      author_link?: string;
      author_icon?: string;
      author_subname?: string;
      mrkdwn_in?: string[];
      footer?: string;
      bot_id?: string;
      bot_team_id?: string;
      app_unfurl_url?: string;
      is_app_unfurl?: boolean;
      app_id?: string;
      fields?: Array<{
        value: string;
        title: string;
        short: boolean;
      }>;
      is_reply_unfurl?: boolean;
      private_channel_prompt?: boolean;
      thumb_url?: string;
      thumb_width?: number;
      thumb_height?: number;
      video_html?: string;
      video_html_width?: number;
      video_html_height?: number;
      service_url?: string;
      msg_subtype?: string;
      footer_icon?: string;
      pretext?: string;
      callback_id?: string;
      actions?: Array<{
        id: string;
        name: string;
        text: string;
        type: string;
        value: string;
        style: string;
      }>;
      blocks?: Array<{
        type: string;
        block_id: string;
        text: {
          type: string;
          text: string;
          verbatim: boolean;
        };
        accessory: {
          type: string;
          image_url?: string;
          alt_text?: string;
          action_id?: string;
          text?: {
            type: string;
            text: string;
          };
          value?: string;
        };
      }>;
    }>;
    channel?: string;
    room?: {
      id: string;
      name: string;
      media_server: string;
      created_by: string;
      date_start: number;
      date_end: number;
      participants: string[];
      participant_history: string[];
      participants_events: Record<UserId, {
        user_team: Record<string, unknown>;
        joined: boolean;
        camera_on: boolean;
        camera_off: boolean;
        screenshare_on: boolean;
        screenshare_off: boolean;
      }>;
      participants_camera_on: unknown[];
      participants_camera_off: unknown[];
      participants_screenshare_on: unknown[];
      participants_screenshare_off: string[];
      canvas_thread_ts: string;
      thread_root_ts: string;
      channels: string[];
      is_dm_call: boolean;
      was_rejected: boolean;
      was_missed: boolean;
      was_accepted: boolean;
      has_ended: boolean;
      background_id: string;
      canvas_background: string;
      is_prewarmed: boolean;
      is_scheduled: boolean;
      recording: {
        can_record_summary: string;
      };
      locale: string;
      attached_file_ids: unknown[];
      media_backend_type: string;
      display_id: string;
      app_id: string;
      call_family: string;
      pending_invitees: Record<string, unknown>;
      last_invite_status_by_user: Record<UserId, string>;
      knocks: Record<string, unknown>;
      huddle_link: string;
      missed_participants?: Record<UserId, string>;
    };
    no_notifications?: boolean;
    permalink?: string;
    parent_user_id?: string;
    x_files?: string[];
    saved?: {
      is_archived: boolean;
      date_completed: number;
      state: string;
    };
    inviter?: string;
    username?: string;
    icons?: {
      image_48: string;
    };
    canvas_update_user_ids?: string[];
    canvas_update_section_ids?: string[];
    canvas_update_canvas_id?: string;
    canvas_update_ai_summary_blocks?: unknown[];
  }>;
  has_more: boolean;
  pin_count?: number;
  channel_actions_ts: null;
  channel_actions_count: number;
  response_metadata?: {
    next_cursor: string;
  };
  latest?: string;
  date_joined?: number;
  oldest?: string;
};

export type ConversationsInfoResponse = {
  ok: true;
  channel: {
    id: string;
    created: number;
    is_org_shared: boolean;
    is_im: boolean;
    is_archived: boolean;
    context_team_id: string;
    updated: number;
    is_frozen: boolean;
    user: string;
    last_read: string;
    is_open: boolean;
    priority: number;
    unread_count: number;
    unread_count_display: number;
    latest: {
      user: string;
      type: string;
      ts: string;
      text: string;
      team: string;
      blocks: Array<{
        type: string;
        block_id: string;
        text?: {
          type: string;
          text: string;
          verbatim: boolean;
        };
        accessory?: {
          type: string;
          action_id: string;
          text: {
            type: string;
            text: string;
          };
        };
      }>;
      bot_id?: string;
      app_id?: string;
      bot_profile?: {
        id: string;
        deleted: boolean;
        name: string;
        updated: number;
        app_id: string;
        user_id: string;
        icons: {
          image_36: string;
          image_48: string;
          image_72: string;
        };
        team_id: string;
      };
      attachments?: Array<{
        from_url: string;
        ts?: string;
        msg_subtype?: string;
        channel_id?: string;
        channel_team?: string;
        is_msg_unfurl?: boolean;
        is_thread_root_unfurl?: boolean;
        id: number;
        original_url: string;
        fallback: string;
        text: string;
        author_name?: string;
        author_link?: string;
        author_icon?: string;
        author_subname?: string;
        mrkdwn_in?: string[];
        footer?: string;
        service_icon?: string;
        title?: string;
        title_link?: string;
        service_name?: string;
      }>;
    };
    is_shared?: boolean;
    properties?: {
      is_dormant: boolean;
    };
  };
  app_home?: {
    app_id: string;
    app_installed_team_id: string;
    conversation_id: string;
    home_tab_enabled: boolean;
    messages_tab_enabled: boolean;
    messages_tab_read_only_enabled: boolean;
    home_view_id: string;
  };
  home_view?: {
    id: string;
    team_id: string;
    type: string;
    blocks: Array<{
      type: string;
      block_id: string;
      text?: {
        type: string;
        text: string;
        verbatim?: boolean;
      };
      accessory?: {
        type: string;
        image_url?: string;
        alt_text?: string;
        action_id?: string;
        text?: {
          type: string;
          text: string;
        };
        url?: string;
      };
    }>;
    private_metadata: string;
    callback_id: string;
    state: {
      values: Record<string, unknown>;
    };
    hash: string;
    title: {
      type: string;
      text: string;
    };
    clear_on_close: boolean;
    notify_on_close: boolean;
    close: null;
    submit: null;
    previous_view_id: null;
    root_view_id: string;
    app_id: string;
    app_installed_team_id: string;
    bot_id: string;
  };
};

export type ConversationsInviteResponse = {
  ok: true;
  channel: {
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    parent_conversation: null;
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    shared_team_ids: string[];
    internal_team_ids: string[];
    pending_connected_team_ids: unknown[];
    is_member: boolean;
    is_open: boolean;
    last_read: string;
    latest: {
      subtype: string;
      user: string;
      text: string;
      inviter: string;
      type: string;
      ts: string;
    };
    unread_count: number;
    unread_count_display: number;
    properties: {
      canvas: {
        file_id: string;
        quip_thread_id: string;
        is_migrated: boolean;
      };
      meeting_notes: {
        file_id: string;
      };
      tabs: Array<{
        id: string;
        type: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        label: string;
        is_disabled?: boolean;
      }>;
      tabz: Array<{
        id?: string;
        type: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        label?: string;
        is_disabled?: boolean;
      }>;
    };
    is_moved: number;
  };
};

export type ConversationsJoinResponse = {
  ok: true;
  channel: {
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    parent_conversation: null;
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    shared_team_ids: string[];
    internal_team_ids: string[];
    pending_connected_team_ids: unknown[];
    is_member: boolean;
    last_read: string;
    latest: null;
    unread_count: number;
    unread_count_display: number;
    properties?: {
      tabs: Array<{
        type: string;
        label: string;
        id: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
      }>;
      tabz: Array<{
        type: string;
        id?: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
      }>;
      meeting_notes?: {
        file_id: string;
      };
      who_can_manage_tabs?: string;
    };
    priority: number;
    is_moved: number;
    previous_names: string[];
  };
};

export type ConversationsKickResponse = {
  ok: true;
};

export type ConversationsLeaveResponse = {
  ok: true;
};

export type ConversationsLeaveRecommendationsResponse = {
  ok: true;
  results: Array<{
    id: string;
    last_read_abs: string;
  }>;
};

export type ConversationsListResponse = {
  ok: true;
  channels: Array<{
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    parent_conversation: null;
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    shared_team_ids: string[];
    pending_connected_team_ids: unknown[];
    is_member: boolean;
    num_members: number;
    properties: {
      tabs?: Array<{
        type: string;
        label: string;
        id: string;
      }>;
      tabz?: Array<{
        type: string;
      }>;
      use_case: string;
    };
    previous_names: unknown[];
  }>;
  response_metadata: {
    next_cursor: string;
  };
};

export type ConversationsListPrefsResponse = {
  ok: true;
  prefs: {
    can_huddle: boolean;
    can_upload_files: boolean;
    space_icon: string;
    channel_canvas_summary: string;
    space_is_primary: boolean;
    space_file_id: string;
    space_open_by_default: boolean;
    who_can_post: {
      type: string[];
      user: string[];
    };
    can_thread: {
      type: string[];
      user?: string[];
    };
    canvas_share_status: string;
    list_share_status: string;
    shared_channel_invite_requested: boolean;
  };
};

export type ConversationsMarkResponse = {
  ok: true;
};

export type ConversationsOpenResponse = {
  ok: true;
  no_op?: boolean;
  already_open?: boolean;
  channel: {
    id: string;
    created: number;
    is_frozen: boolean;
    is_archived: boolean;
    is_im: boolean;
    is_org_shared: boolean;
    context_team_id: string;
    updated: number;
    is_shared: boolean;
    user?: string;
    last_read: string;
    latest: {
      user: string;
      type: string;
      ts: string;
      bot_id: string;
      app_id: string;
      text: string;
      team: string;
      bot_profile: {
        id: string;
        deleted: boolean;
        name: string;
        updated: number;
        app_id: string;
        user_id: string;
        icons: {
          image_36: string;
          image_48: string;
          image_72: string;
        };
        team_id: string;
      };
      blocks: Array<{
        type: string;
        block_id: string;
        text?: {
          type: string;
          text: string;
          verbatim: boolean;
        };
        accessory?: {
          type: string;
          action_id: string;
          text: {
            type: string;
            text: string;
          };
        };
      }>;
    };
    unread_count: number;
    unread_count_display: number;
    is_open: boolean;
    priority: number;
    name?: string;
    is_channel?: boolean;
    is_group?: boolean;
    is_mpim?: boolean;
    is_private?: boolean;
    is_general?: boolean;
    unlinked?: number;
    name_normalized?: string;
    is_pending_ext_shared?: boolean;
    pending_shared?: unknown[];
    parent_conversation?: null;
    creator?: string;
    is_read_only?: boolean;
    is_thread_only?: boolean;
    is_non_threadable?: boolean;
    is_moved?: number;
    is_ext_shared?: boolean;
    is_global_shared?: boolean;
    is_org_default?: boolean;
    is_org_mandatory?: boolean;
    shared_team_ids?: unknown[];
    internal_team_ids?: unknown[];
    connected_team_ids?: unknown[];
    connected_limited_team_ids?: unknown[];
    pending_connected_team_ids?: unknown[];
    is_member?: boolean;
    members?: string[];
    topic?: {
      value: string;
      creator: string;
      last_set: number;
    };
    purpose?: {
      value: string;
      creator: string;
      last_set: number;
    };
    properties?: {
      is_dormant: boolean;
    };
  };
};

export type ConversationsPendingInvitesListResponse = {
  ok: true;
  invites: unknown[];
  total_count: number;
  response_metadata: {
    next_cursor: string;
  };
};

export type ConversationsPermissionsAccountTypesListResponse = {
  ok: true;
  channel_id: string;
  account_types: Array<{
    account_type: string;
    permissions: Array<{
      permission: string;
      is_allowed: boolean;
      is_configurable: boolean;
      localized_permission_display_name: string;
    }>;
  }>;
};

export type ConversationsPermissionsAccountTypesSetResponse = {
  ok: true;
};

export type ConversationsRecommendResponse = {
  ok: true;
  channel_ids: string[];
  channels: Array<{
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    parent_conversation: null;
    shared_team_ids: string[];
    pending_connected_team_ids: unknown[];
    previous_names?: unknown[];
  }>;
};

export type ConversationsRemoveTabResponse = {
  ok: true;
  tabs: Array<{
    id: string;
    label: string;
    type: string;
    data?: {
      file_id: string;
      shared_ts: string;
    };
    is_disabled?: boolean;
  }>;
  tabz: Array<{
    id?: string;
    label?: string;
    type: string;
    data?: {
      file_id: string;
      shared_ts: string;
    };
    is_disabled?: boolean;
  }>;
};

export type ConversationsRenameResponse = {
  ok: true;
  channel: {
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    parent_conversation: null;
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    shared_team_ids: string[];
    pending_connected_team_ids: unknown[];
    is_member: boolean;
    last_read: string;
    latest: {
      subtype: string;
      user: string;
      text: string;
      type: string;
      ts: string;
      old_name?: string;
      name?: string;
    };
    unread_count: number;
    unread_count_display: number;
    properties?: {
      use_case: string;
    };
    previous_names?: string[];
    internal_team_ids?: string[];
    is_open?: boolean;
    is_moved?: number;
  };
};

export type ConversationsRepliesResponse = {
  ok: true;
  messages: Array<{
    text: string;
    files?: Array<{
      id: string;
      created: number;
      timestamp: number;
      name: string;
      title: string;
      mimetype: string;
      filetype: string;
      pretty_type: string;
      user: string;
      user_team: string;
      size: number;
      mode: string;
      is_external: boolean;
      is_public: boolean;
      public_url_shared: boolean;
      display_as_bot: boolean;
      username: string;
      url_private: string;
      url_private_download: string;
      media_display_type: string;
      thumb_64: string;
      thumb_80: string;
      thumb_360: string;
      thumb_360_w: number;
      thumb_360_h: number;
      thumb_480?: string;
      thumb_480_w?: number;
      thumb_480_h?: number;
      thumb_160: string;
      thumb_720?: string;
      thumb_720_w?: number;
      thumb_720_h?: number;
      thumb_800?: string;
      thumb_800_w?: number;
      thumb_800_h?: number;
      thumb_960?: string;
      thumb_960_w?: number;
      thumb_960_h?: number;
      thumb_1024?: string;
      thumb_1024_w?: number;
      thumb_1024_h?: number;
      original_w: number;
      original_h: number;
      thumb_tiny: string;
      permalink: string;
      permalink_public: string;
      is_starred: boolean;
      skipped_shares: boolean;
      has_rich_preview: boolean;
      file_access: string;
      is_transcription_region_supported?: boolean;
      transcription?: {
        status: string;
      };
      mp4?: string;
      hls?: string;
      hls_embed?: string;
      mp4_low?: string;
      duration_ms?: number;
      thumb_video?: string;
      thumb_video_w?: number;
      thumb_video_h?: number;
    }>;
    upload?: boolean;
    user: string;
    display_as_bot?: boolean;
    blocks?: Array<{
      type: string;
      block_id: string;
      title?: string;
      tasks?: Array<{
        task_id: string;
        title: string;
        status: string;
        output: {
          type: string;
          block_id: string;
        };
        details?: {
          type: string;
          block_id: string;
        };
        sources?: Array<{
          type: string;
          url: string;
          text: string;
        }>;
      }>;
      text?: {
        type: string;
        text: string;
        verbatim: boolean;
      };
    }>;
    type: string;
    ts: string;
    client_msg_id?: string;
    thread_ts: string;
    reply_count?: number;
    reply_users_count?: number;
    latest_reply?: string;
    reply_users?: string[];
    is_locked?: boolean;
    subscribed?: boolean;
    last_read?: string;
    reactions?: Array<{
      name: string;
      users: string[];
      count: number;
    }>;
    team?: string;
    parent_user_id?: string;
    attachments?: Array<{
      from_url?: string;
      ts?: string;
      author_id?: string;
      channel_id?: string;
      channel_team?: string;
      is_msg_unfurl?: boolean;
      is_reply_unfurl?: boolean;
      message_blocks?: Array<{
        team: string;
        channel: string;
        ts: string;
        message: {
          blocks: Array<{
            type: string;
            block_id: string;
          }>;
        };
      }>;
      id?: number;
      original_url?: string;
      fallback: string;
      text?: string;
      author_name?: string;
      author_link?: string;
      author_icon?: string;
      author_subname?: string;
      mrkdwn_in?: string[];
      footer?: string;
      files?: Array<{
        id: string;
        created: number;
        timestamp: number;
        name: string;
        title: string;
        mimetype: string;
        filetype: string;
        pretty_type: string;
        user: string;
        user_team: string;
        size: number;
        mode: string;
        is_external: boolean;
        is_public: boolean;
        public_url_shared: boolean;
        display_as_bot: boolean;
        username: string;
        url_private: string;
        url_private_download: string;
        media_display_type: string;
        thumb_64?: string;
        thumb_80?: string;
        thumb_360?: string;
        thumb_360_w?: number;
        thumb_360_h?: number;
        thumb_480?: string;
        thumb_480_w?: number;
        thumb_480_h?: number;
        thumb_160?: string;
        thumb_720?: string;
        thumb_720_w?: number;
        thumb_720_h?: number;
        thumb_800?: string;
        thumb_800_w?: number;
        thumb_800_h?: number;
        thumb_960?: string;
        thumb_960_w?: number;
        thumb_960_h?: number;
        thumb_1024?: string;
        thumb_1024_w?: number;
        thumb_1024_h?: number;
        original_w?: number;
        original_h?: number;
        thumb_tiny?: string;
        permalink: string;
        permalink_public: string;
        comments_count: number;
        is_starred: boolean;
        skipped_shares: boolean;
        has_rich_preview: boolean;
        file_access: string;
        subtype?: string;
        is_transcription_region_supported?: boolean;
        transcription?: {
          status: string;
        };
        audio_wave_samples?: number[];
      }>;
      color?: string;
      is_share?: boolean;
      blocks?: Array<{
        type: string;
        block_id: string;
        text?: {
          type: string;
          text: string;
          verbatim: boolean;
        };
        image_url?: string;
        alt_text?: string;
        image_width?: number;
        image_height?: number;
        image_bytes?: number;
        is_animated?: boolean;
        fallback?: string;
      }>;
      bot_id?: string;
      bot_team_id?: string;
      app_unfurl_url?: string;
      is_app_unfurl?: boolean;
      app_id?: string;
      service_icon?: string;
      title?: string;
      title_link?: string;
      service_name?: string;
      private_channel_prompt?: boolean;
      msg_subtype?: string;
      is_thread_root_unfurl?: boolean;
    }>;
    subtype?: string;
    root?: {
      text: string;
      files?: Array<{
        id: string;
        created: number;
        timestamp: number;
        name: string;
        title: string;
        mimetype: string;
        filetype: string;
        pretty_type: string;
        user: string;
        user_team: string;
        size: number;
        mode: string;
        is_external: boolean;
        is_public: boolean;
        public_url_shared: boolean;
        display_as_bot: boolean;
        username: string;
        url_private: string;
        url_private_download: string;
        media_display_type: string;
        thumb_64: string;
        thumb_80: string;
        thumb_360: string;
        thumb_360_w: number;
        thumb_360_h: number;
        thumb_480?: string;
        thumb_480_w?: number;
        thumb_480_h?: number;
        thumb_160: string;
        thumb_720?: string;
        thumb_720_w?: number;
        thumb_720_h?: number;
        thumb_800?: string;
        thumb_800_w?: number;
        thumb_800_h?: number;
        thumb_960?: string;
        thumb_960_w?: number;
        thumb_960_h?: number;
        thumb_1024?: string;
        thumb_1024_w?: number;
        thumb_1024_h?: number;
        original_w: number;
        original_h: number;
        thumb_tiny: string;
        permalink: string;
        permalink_public: string;
        is_starred: boolean;
        skipped_shares: boolean;
        has_rich_preview: boolean;
        file_access: string;
      }>;
      upload?: boolean;
      user: string;
      display_as_bot?: boolean;
      blocks?: Array<{
        type: string;
        block_id: string;
      }>;
      type: string;
      ts: string;
      client_msg_id?: string;
      thread_ts: string;
      reply_count: number;
      reply_users_count: number;
      latest_reply: string;
      reply_users: string[];
      is_locked: boolean;
      subscribed: boolean;
      last_read?: string;
      channel?: string;
      room?: {
        id: string;
        name: string;
        media_server: string;
        created_by: string;
        date_start: number;
        date_end: number;
        participants: string[];
        participant_history: string[];
        participants_events: Record<UserId, {
          user_team: Record<string, unknown>;
          joined: boolean;
          camera_on: boolean;
          camera_off: boolean;
          screenshare_on: boolean;
          screenshare_off: boolean;
        }>;
        participants_camera_on: unknown[];
        participants_camera_off: unknown[];
        participants_screenshare_on: string[];
        participants_screenshare_off: string[];
        canvas_thread_ts: string;
        thread_root_ts: string;
        channels: string[];
        is_dm_call: boolean;
        was_rejected: boolean;
        was_missed: boolean;
        was_accepted: boolean;
        has_ended: boolean;
        background_id: string;
        canvas_background: string;
        is_prewarmed: boolean;
        is_scheduled: boolean;
        recording: {
          can_record_summary: string;
        };
        locale: string;
        attached_file_ids: unknown[];
        media_backend_type: string;
        display_id: string;
        app_id: string;
        call_family: string;
        pending_invitees: Record<string, unknown>;
        last_invite_status_by_user: Record<string, unknown>;
        knocks: Record<string, unknown>;
        huddle_link: string;
      };
      no_notifications?: boolean;
      permalink?: string;
      subtype?: string;
      team?: string;
      hidden?: boolean;
      parent_user_id?: string;
    };
    channel?: string;
    room?: {
      id: string;
      name: string;
      media_server: string;
      created_by: string;
      date_start: number;
      date_end: number;
      participants: string[];
      participant_history: string[];
      participants_events: Record<UserId, {
        user_team: Record<string, unknown>;
        joined: boolean;
        camera_on: boolean;
        camera_off: boolean;
        screenshare_on: boolean;
        screenshare_off: boolean;
      }>;
      participants_camera_on: unknown[];
      participants_camera_off: unknown[];
      participants_screenshare_on: string[];
      participants_screenshare_off: string[];
      canvas_thread_ts: string;
      thread_root_ts: string;
      channels: string[];
      is_dm_call: boolean;
      was_rejected: boolean;
      was_missed: boolean;
      was_accepted: boolean;
      has_ended: boolean;
      background_id: string;
      canvas_background: string;
      is_prewarmed: boolean;
      is_scheduled: boolean;
      recording: {
        can_record_summary: string;
      };
      locale: string;
      attached_file_ids: unknown[];
      media_backend_type: string;
      display_id: string;
      app_id: string;
      call_family: string;
      pending_invitees: Record<string, unknown>;
      last_invite_status_by_user: Record<string, unknown>;
      knocks: Record<string, unknown>;
      huddle_link: string;
    };
    no_notifications?: boolean;
    permalink?: string;
    x_files?: string[];
    bot_id?: string;
    app_id?: string;
    bot_profile?: {
      id: string;
      deleted: boolean;
      name: string;
      updated: number;
      app_id: string;
      user_id: string;
      icons: {
        image_36: string;
        image_48: string;
        image_72: string;
      };
      team_id: string;
    };
    streaming_state?: string;
    saved?: {
      is_archived: boolean;
      date_completed: number;
      date_due: number;
      state: string;
    };
    username?: string;
    icons?: {
      image_48?: string;
    };
    hidden?: boolean;
  }>;
  has_more: boolean;
  unchanged_messages: string[];
  latest_updates: Record<Timestamp, string>;
  response_metadata?: {
    next_cursor: string;
  };
};

export type ConversationsSetPropertiesResponse = {
  ok: true;
  props: {
    posting_restricted_to?: {
      type: string[];
    };
    threads_restricted_to?: {
      type: string[];
    };
    canvas?: {
      file_id: string;
      quip_thread_id: string;
      is_migrated: boolean;
    };
    meeting_notes?: {
      file_id: string;
    };
    tabs: Array<{
      id: string;
      type: string;
      data?: {
        file_id: string;
        shared_ts: string;
      };
      label: string;
      is_disabled?: boolean;
    }>;
    tabz: Array<{
      id?: string;
      type: string;
      data?: {
        file_id: string;
        shared_ts: string;
      };
      label?: string;
      is_disabled?: boolean;
    }>;
    who_can_manage_tabs: string;
  };
};

export type ConversationsSetPurposeResponse = {
  ok: true;
  channel: {
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    parent_conversation: null;
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    shared_team_ids: string[];
    internal_team_ids: string[];
    pending_connected_team_ids: unknown[];
    is_member: boolean;
    properties: {
      canvas: {
        file_id: string;
        quip_thread_id: string;
        is_migrated: boolean;
      };
      meeting_notes: {
        file_id: string;
      };
      tabs: Array<{
        id: string;
        type: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        label: string;
        is_disabled?: boolean;
      }>;
      tabz: Array<{
        id?: string;
        type: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        label?: string;
        is_disabled?: boolean;
      }>;
    };
    is_moved: number;
  };
};

export type ConversationsSetRetentionResponse = {
  ok: true;
};

export type ConversationsSetTopicResponse = {
  ok: true;
  channel: {
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    parent_conversation: null;
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    shared_team_ids: string[];
    internal_team_ids: string[];
    pending_connected_team_ids: unknown[];
    is_member: boolean;
    properties: {
      canvas?: {
        file_id: string;
        quip_thread_id: string;
        is_migrated: boolean;
      };
      meeting_notes?: {
        file_id: string;
      };
      tabs: Array<{
        id: string;
        type: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        label: string;
        is_disabled?: boolean;
      }>;
      tabz: Array<{
        id?: string;
        type: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        label?: string;
        is_disabled?: boolean;
      }>;
    };
    is_moved: number;
  };
};

export type ConversationsSharedApprovalsListResponse = {
  ok: true;
  approvals: unknown[];
  total_count: number;
  response_metadata: {
    next_cursor: string;
  };
};

export type ConversationsSuggestionsResponse = {
  ok: true;
  suggestion_types_tried: string[];
  status: string;
};

export type ConversationsTeamConnectionsResponse = {
  ok: true;
  channel: {
    id: string;
    conversation_host_id: string;
    connected_team_ids: string[];
    connected_limited_team_ids: unknown[];
    is_sponsored: boolean;
  };
  connections: Array<{
    team: {
      id: string;
      name: string;
      icon: {
        image_default: boolean;
        image_34: string;
        image_44: string;
        image_68: string;
        image_88: string;
        image_102: string;
        image_230: string;
        image_132: string;
      };
      avatar_base_url: string;
      is_verified: boolean;
      domain: string;
      date_created: number;
      requires_sponsorship: boolean;
    };
    is_private: boolean;
    allows_flag_content: boolean;
    is_disconnect_in_progress: boolean;
  }>;
  pending_connections: unknown[];
  previous_connections: unknown[];
};

export type ConversationsUnarchiveResponse = {
  ok: true;
};

export type ConversationsUpdateDefaultStateResponse = {
  ok: true;
};

export type ConversationsUpdateTabResponse = {
  ok: true;
  tabs: Array<{
    id: string;
    type: string;
    data?: {
      file_id?: string;
      shared_ts?: string;
      folder_bookmark_id?: string;
    };
    label: string;
    is_disabled?: boolean;
  }>;
  tabz: Array<{
    id?: string;
    type: string;
    data?: {
      file_id?: string;
      shared_ts?: string;
      folder_bookmark_id?: string;
    };
    label?: string;
    is_disabled?: boolean;
  }>;
};

export type ConversationsValidateNameResponse = {
  ok: true;
  channel_name: string;
};

export type ConversationsViewResponse = {
  ok: true;
  history: {
    messages: Array<{
      text: string;
      files?: Array<{
        id: string;
        created: number;
        timestamp: number;
        name: string;
        title: string;
        mimetype: string;
        filetype: string;
        pretty_type: string;
        user: string;
        user_team: string;
        size: number;
        mode: string;
        is_external: boolean;
        is_public: boolean;
        public_url_shared: boolean;
        display_as_bot: boolean;
        username: string;
        url_private: string;
        url_private_download: string;
        media_display_type?: string;
        permalink: string;
        permalink_public: string;
        is_starred: boolean;
        skipped_shares: boolean;
        has_rich_preview: boolean;
        file_access: string;
        subject?: string;
        to?: Array<{
          address: string;
          name: string;
          original: string;
        }>;
        from?: Array<{
          address: string;
          name: string;
          original: string;
        }>;
        cc?: unknown[];
        attachments?: unknown[];
        original_attachment_count?: number;
        inline_attachment_count?: number;
        plain_text?: string;
        preview?: string;
        preview_plain_text?: string;
        headers?: {
          date: string;
          in_reply_to: null;
          reply_to: null;
          message_id: string;
        };
        has_more?: boolean;
        sent_to_self?: boolean;
        bot_id?: string;
        app_id?: string;
        thumb_64?: string;
        thumb_80?: string;
        thumb_360?: string;
        thumb_360_w?: number;
        thumb_360_h?: number;
        thumb_160?: string;
        original_w?: number;
        original_h?: number;
        thumb_tiny?: string;
        thumb_480?: string;
        thumb_480_w?: number;
        thumb_480_h?: number;
        thumb_720?: string;
        thumb_720_w?: number;
        thumb_720_h?: number;
        thumb_800?: string;
        thumb_800_w?: number;
        thumb_800_h?: number;
        thumb_960?: string;
        thumb_960_w?: number;
        thumb_960_h?: number;
        thumb_1024?: string;
        thumb_1024_w?: number;
        thumb_1024_h?: number;
      }>;
      upload?: boolean;
      user: string;
      display_as_bot?: boolean;
      type: string;
      ts: string;
      bot_id?: string;
      team?: string;
      blocks?: Array<{
        type: string;
        block_id: string;
        text?: {
          type: string;
          text: string;
          verbatim: boolean;
        };
      }>;
      subtype?: string;
      attachments?: Array<{
        id?: number;
        fallback: string;
        text?: string;
        callback_id?: string;
        mrkdwn_in?: string[];
        actions?: Array<{
          id: string;
          name: string;
          text: string;
          type: string;
          value: string;
          style: string;
          url?: string;
        }>;
        title?: string;
        ts?: string;
        author_id?: string;
        channel_id?: string;
        channel_team?: string;
        is_msg_unfurl?: boolean;
        is_reply_unfurl?: boolean;
        color?: string;
        from_url?: string;
        is_share?: boolean;
        author_name?: string;
        author_link?: string;
        author_icon?: string;
        author_subname?: string;
        footer?: string;
        image_url?: string;
        image_width?: number;
        image_height?: number;
        image_bytes?: number;
        service_icon?: string;
        original_url?: string;
        title_link?: string;
        service_name?: string;
        is_thread_root_unfurl?: boolean;
        msg_subtype?: string;
        files?: Array<{
          id: string;
          created: number;
          timestamp: number;
          name: string;
          title: string;
          mimetype: string;
          filetype: string;
          pretty_type: string;
          user: string;
          user_team: string;
          size: number;
          mode: string;
          is_external: boolean;
          is_public: boolean;
          public_url_shared: boolean;
          display_as_bot: boolean;
          username: string;
          url_private: string;
          url_private_download: string;
          media_display_type: string;
          thumb_64: string;
          thumb_80: string;
          thumb_360: string;
          thumb_360_w: number;
          thumb_360_h: number;
          thumb_160: string;
          original_w: number;
          original_h: number;
          thumb_tiny: string;
          permalink: string;
          permalink_public: string;
          comments_count: number;
          is_starred: boolean;
          skipped_shares: boolean;
          has_rich_preview: boolean;
          file_access: string;
        }>;
      }>;
      user_team?: string;
      source_team?: string;
      user_profile?: {
        avatar_hash: string;
        image_72: string;
        first_name: string;
        real_name: string;
        display_name: string;
        team: string;
        name: string;
        is_restricted: boolean;
        is_ultra_restricted: boolean;
      };
      client_msg_id?: string;
      thread_ts?: string;
      reply_count?: number;
      reply_users_count?: number;
      latest_reply?: string;
      reply_users?: string[];
      is_locked?: boolean;
      subscribed?: boolean;
      last_read?: string;
      root?: {
        user: string;
        type: string;
        ts: string;
        client_msg_id: string;
        text: string;
        team: string;
        thread_ts: string;
        reply_count: number;
        reply_users_count: number;
        latest_reply: string;
        reply_users: string[];
        is_locked: boolean;
        subscribed: boolean;
        last_read: string;
        blocks: Array<{
          type: string;
          block_id: string;
        }>;
      };
      language?: {
        locale: string;
        is_reliable: boolean;
      };
      username?: string;
      icons?: {
        image_48: string;
      };
      app_id?: string;
      reactions?: Array<{
        name: string;
        users: string[];
        count: number;
      }>;
    }>;
    has_more: boolean;
    mutation_timestamps: {
      latest: string;
      updated: string;
      history_invalid: string;
    };
    channel_actions_ts: null;
    channel_actions_count: number;
    next_ts?: number;
  };
  users: Array<{
    id: string;
    name: string;
    is_bot: boolean;
    updated: number;
    is_app_user: boolean;
    deleted: boolean;
    color?: string;
    is_email_confirmed?: boolean;
    real_name?: string;
    tz?: string;
    tz_label?: string;
    tz_offset?: number;
    is_admin?: boolean;
    is_owner?: boolean;
    is_primary_owner?: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    who_can_share_contact_card?: string;
    profile: {
      real_name: string;
      display_name: string;
      avatar_hash: string;
      real_name_normalized: string;
      display_name_normalized: string;
      first_name: string;
      last_name: string;
      team: string;
      title: string;
      phone: string;
      skype: string;
      status_text: string;
      status_text_canonical: string;
      status_emoji: string;
      status_emoji_display_info: Array<{
        display_url: string;
        unicode?: string;
        display_alias?: string;
      }>;
      status_expiration: number;
      guest_invited_by?: string;
      image_original?: string;
      is_custom_image?: boolean;
      pronouns?: string;
      huddle_state?: string;
      huddle_state_expiration_ts?: number;
      start_date?: string;
      ooo_message?: string;
      who_can_share_contact_card?: string;
      bot_id?: string;
      api_app_id?: string;
      always_active?: boolean;
    };
    team_id?: string;
    has_2fa?: boolean;
  }>;
  bots: Array<{
    id: string;
    deleted: boolean;
    name: string;
    updated: number;
    app_id: string;
    icons: {
      image_36: string;
      image_48: string;
      image_72: string;
    };
  }>;
  channels: Array<{
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    parent_conversation: null;
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    shared_team_ids: string[];
    internal_team_ids: string[];
    pending_connected_team_ids: unknown[];
    is_member: boolean;
    last_read: string;
    latest: {
      user: string;
      type: string;
      ts: string;
      client_msg_id: string;
      text: string;
      team: string;
      user_team: string;
      source_team: string;
      user_profile: {
        avatar_hash: string;
        image_72: string;
        first_name: string;
        real_name: string;
        display_name: string;
        team: string;
        name: string;
        is_restricted: boolean;
        is_ultra_restricted: boolean;
      };
      thread_ts: string;
      parent_user_id: string;
      blocks: Array<{
        type: string;
        block_id: string;
      }>;
    };
    unread_count: number;
    unread_count_display: number;
    properties: {
      canvas: {
        file_id: string;
        is_empty: boolean;
        quip_thread_id: string;
        is_migrated: boolean;
      };
      meeting_notes: {
        file_id: string;
      };
      tabs: Array<{
        type: string;
        label: string;
        id: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        is_disabled?: boolean;
      }>;
      tabz: Array<{
        type: string;
        id?: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        label?: string;
        is_disabled?: boolean;
      }>;
    };
    is_moved: number;
    previous_names: unknown[];
  }>;
  im?: {
    id: string;
    created: number;
    is_org_shared: boolean;
    is_im: boolean;
    is_archived: boolean;
    context_team_id: string;
    updated: number;
    is_frozen: boolean;
    user: string;
    last_read: string;
    is_open: boolean;
    unread_count: number;
    unread_count_display: number;
    properties?: {
      tabs?: Array<{
        type: string;
        label: string;
        id: string;
      }>;
      tabz?: Array<{
        type: string;
      }>;
      is_dormant?: boolean;
    };
    latest: string;
    is_shared?: boolean;
  };
  response_metadata?: {
    next_cursor: string;
  };
  channel?: {
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    parent_conversation: null;
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    shared_team_ids: string[];
    pending_connected_team_ids: unknown[];
    is_member: boolean;
    last_read: string;
    latest: string;
    unread_count: number;
    unread_count_display: number;
    use_case?: string;
    properties: {
      use_case?: string;
      tabs?: Array<{
        type: string;
        label: string;
        id: string;
        is_disabled?: boolean;
        data?: {
          file_id?: string;
          shared_ts?: string;
          folder_bookmark_id?: string;
        };
      }>;
      tabz?: Array<{
        type: string;
        label?: string;
        is_disabled?: boolean;
        id?: string;
        data?: {
          file_id?: string;
          shared_ts?: string;
          folder_bookmark_id?: string;
        };
      }>;
      who_can_manage_tabs?: string;
      huddles?: {
        ai_notes_settings_restricted: boolean;
        is_huddle_channel: boolean;
      };
      posting_restricted_to?: {
        type: string[];
      };
      threads_restricted_to?: {
        type: string[];
      };
      meeting_notes?: {
        file_id: string;
      };
    };
    is_thread_only?: boolean;
    is_read_only?: boolean;
    previous_names?: string[];
    internal_team_ids?: string[];
    is_open?: boolean;
    is_moved?: number;
  };
};

export type DeveloperAppdirectorySubmissionsInfoResponse = {
  ok: true;
  submission: null;
  logs: unknown[];
};

export type DeveloperAppsActionsDeleteResponse = {
  ok: true;
};

export type DeveloperAppsActionsV2ListResponse = {
  ok: true;
  actions: unknown[];
  response_metadata: {
    next_cursor: string;
  };
};

export type DeveloperAppsActionsV2UpdateResponse = {
  ok: true;
  actions: Array<{
    action_id: string;
    app_id: string;
    name: string;
    desc: string;
    description: string;
    payload: null;
    callback_id: string;
    type: string;
  }>;
};

export type DeveloperAppsAppLevelTokensCreateResponse = {
  ok: true;
  id: number;
  token: string;
  description: string;
  scope: string;
  creator_display_name: string;
  creator_user_id: string;
  date_created: number;
};

export type DeveloperAppsAppLevelTokensGetTokenStringResponse = {
  ok: true;
  id: number;
  token: string;
};

export type DeveloperAppsAppLevelTokensListResponse = {
  ok: true;
  app_level_tokens: Array<{
    id: number;
    description: string;
    scope: string;
    creator_display_name: string;
    creator_user_id: string;
    date_created: number;
  }>;
};

export type DeveloperAppsAppLevelTokensRevokeResponse = {
  ok: true;
  id: number;
  description: string;
  scope: string;
  creator_display_name: string;
  creator_user_id: string;
  date_created: number;
  date_revoked: number;
};

export type DeveloperAppsApphomeEditResponse = {
  ok: true;
};

export type DeveloperAppsAssistantUpdateResponse = {
  ok: true;
};

export type DeveloperAppsBetaInfoResponse = {
  ok: true;
  app: null;
};

export type DeveloperAppsBotusersEditResponse = {
  ok: true;
};

export type DeveloperAppsCommandsAddResponse = {
  ok: true;
  command: {
    name: string;
    url: string;
    desc: string;
    usage: string;
    parse_full: boolean;
    id: string;
  };
};

export type DeveloperAppsCommandsDeleteResponse = {
  ok: true;
};

export type DeveloperAppsCommandsEditResponse = {
  ok: true;
  command: {
    name: string;
    url: string;
    desc: string;
    usage: string;
    parse_full: boolean;
    id: string;
  };
};

export type DeveloperAppsConfigCreateToolingTokenResponse = {
  ok: true;
  user_id: string;
  team_id: string;
  access_token: string;
  refresh_token: string;
  iat: number;
};

export type DeveloperAppsConfigGetFunctionResponse = {
  ok: true;
  id: string;
  callback_id: string;
  name: string;
  description: string;
  date_created: number;
  date_updated: number;
  input: unknown[];
  output: unknown[];
  permission_type: string;
};

export type DeveloperAppsConfigListFunctionsResponse = {
  ok: true;
  functions: unknown[];
};

export type DeveloperAppsConfigListInstalledScopesResponse = {
  ok: true;
  bot_scopes: string[];
  user_scopes: string[];
};

export type DeveloperAppsDisableSocketModeResponse = {
  ok: true;
};

export type DeveloperAppsEnableSocketModeResponse = {
  ok: true;
};

export type DeveloperAppsEventsSubscriptionsUpdateSubsResponse = {
  ok: true;
  url: string;
  url_verified: boolean;
  app_event_types: string[];
  bot_event_types: string[];
  filter_teams: unknown[];
  is_active: boolean;
  unfurl_domains: string[];
  is_delayed_events_enabled: boolean;
};

export type DeveloperAppsInfoResponse = {
  ok: true;
  app: {
    id: string;
    team_id: string;
    directory_app_id: null;
    client_id: string;
    date_created: number;
    date_deleted: number;
    app_type: string;
    user_install_count: number;
    team_install_count: number;
    is_directory_approved: boolean;
    is_ai_app: boolean;
    is_mcp_enabled: boolean;
    is_directory_published: boolean;
    display_information: {
      name: string;
      short_description: string;
      long_description: string;
      background_color: string;
      youtube_url: null;
      categories: unknown[];
      landing_page_url: string;
      privacy_policy_url: null;
      support_url: string;
      support_email: null;
      supported_languages: unknown[];
      pricing_info: null;
      screenshots: unknown[];
      icons: {
        image_32: null;
        image_36: null;
        image_64: null;
        image_72: null;
        image_96: null;
        image_128: null;
        image_192: null;
        image_512: null;
        image_1024: null;
        image_original: null;
      };
    };
    direct_install: {
      is_active: boolean;
      url: null;
    };
    contact_information: {
      developer_name: null;
      developer_email: null;
      developer_phone_number: null;
      notification_channel_id: null;
    };
    collaborator_user_ids: string[];
    redirect_urls: string[];
    scopes: {
      user: string[];
      bot: string[];
    };
    slash_commands: Array<{
      id: string;
      name: string;
      request_url: string;
      description: string;
      usage_hint: string;
      should_escape: boolean;
    }>;
    interactive_components: {
      message_menu_options_url: null;
      request_url: null;
      app_actions: unknown[];
    };
    is_user_id_translation_enabled: boolean;
    is_org_ready: boolean;
    is_hosted: boolean;
    is_distributed: boolean;
    is_privately_distributed: boolean;
    is_installed: boolean;
    ip_whitelist: string[];
    security_compliance_information: {
      data_center_location: unknown[];
    };
    is_link_enabled: boolean;
    bot_user: {
      username: string;
      real_name: string;
      always_active: boolean;
    };
    app_home: {
      beta_opted_in?: boolean;
      home_tab_enabled?: boolean;
      messages_tab_disabled?: boolean;
      messages_tab_read_only_enabled: boolean;
    };
    workflow_extensions: null;
    use_oauth2_refresh_tokens: boolean;
    use_token_management: boolean;
    betas_enabled: unknown[];
    test_information: {
      test_account_details: null;
      developer_overall_notes: null;
      video_demo_url: null;
    };
    hermes_app_type: number;
    runtime: string;
    use_context_team: boolean;
    pkce_enabled: boolean;
    is_in_developer_sandbox: boolean;
    assistant_description: null;
    assistant_suggested_prompts: null;
    rich_previews: {
      is_active: boolean;
    };
  };
};

export type DeveloperAppsMigrationOrgReadyResponse = {
  ok: true;
};

export type DeveloperAppsMigrationUsersTranslateResponse = {
  ok: true;
};

export type DeveloperAppsOauthAddRedirectUrlsResponse = {
  ok: true;
};

export type DeveloperAppsOauthGetAppStatusResponse = {
  ok: true;
  allowlist_requests_owners: unknown[];
  status: string;
  org_status: string;
  org_installer_can_install_org_app: boolean;
  app_has_functions: boolean;
  install_url_single_team: string;
  install_url_enterprise: string;
};

export type DeveloperAppsOauthGetTokensResponse = {
  ok: true;
  workspace_bot_token?: string;
  parent_token_type: string;
};

export type DeveloperAppsOwnersAddResponse = {
  ok: true;
};

export type DeveloperAppsOwnersRemoveResponse = {
  ok: true;
  warnings: Array<{
    code: string;
    message: string;
  }>;
};

export type DeveloperAppsScopeListResponse = {
  ok: true;
  submission_id: null;
  install_url: string;
  scope_constraints: {
    user: Array<{
      type: string;
      name: string;
      requires: string[];
    }>;
    bot: Array<{
      type: string;
      name: string;
      requires: string[];
    }>;
  };
  legacy_scopes: unknown[];
  bot_token_scopes: Array<{
    id: string;
    description: string;
    methods: string[];
    is_required: boolean;
    is_selected: boolean;
    is_deprecated: boolean;
    reason: string;
    parent_scope: string;
    child_scopes: string[];
    is_optional: boolean;
  }>;
  user_token_scopes: Array<{
    id: string;
    description: string;
    methods: string[];
    is_required: boolean;
    is_selected: boolean;
    is_deprecated: boolean;
    reason: string;
    parent_scope: null;
    child_scopes: null;
    is_optional: boolean;
  }>;
};

export type DeveloperAppsScopeUpdateResponse = {
  ok: true;
  scope?: string;
  scope_bot?: string;
};

export type DeveloperAppsSuggestionsDeleteResponse = {
  ok: true;
};

export type DeveloperAppsSuggestionsUpdateResponse = {
  ok: true;
};

export type DeveloperAppsUpdateIPWhitelistResponse = {
  ok: true;
};

export type DeveloperAppsWorkObjectsUpdateResponse = {
  ok: true;
};

export type DirectoryDisconnectResponse = {
  ok: true;
};

export type DirectoryTokenHasScopesResponse = {
  ok: true;
  has_scopes: boolean;
};

export type DndEndSnoozeResponse = {
  ok: true;
  dnd_enabled: boolean;
  next_dnd_start_ts: number;
  next_dnd_end_ts: number;
  snooze_enabled: boolean;
};

export type DndInfoResponse = {
  ok: true;
  dnd_enabled: boolean;
  next_dnd_start_ts: number;
  next_dnd_end_ts: number;
  snooze_enabled: boolean;
  snooze_endtime?: number;
  snooze_remaining?: number;
};

export type DndSetSnoozeResponse = {
  ok: true;
  snooze_enabled: boolean;
  snooze_endtime: number;
  snooze_remaining: number;
  snooze_is_indefinite: boolean;
};

export type DndTeamInfoResponse = {
  ok: true;
  users: Record<UserId, {
    dnd_enabled: boolean;
    next_dnd_start_ts: number;
    next_dnd_end_ts: number;
  }>;
};

export type DraftsCreateResponse = {
  ok: true;
  draft: {
    id: string;
    date_created: number;
    user_id: string;
    team_id: string;
    last_updated_ts: string;
    last_updated_client: string;
    blocks: Array<{
      type: string;
      block_id: string;
    }>;
    file_ids: string[];
    is_from_composer: boolean;
    is_deleted: boolean;
    is_sent: boolean;
    client_msg_id: string;
    date_scheduled: number;
    destinations: Array<{
      channel_id: string;
      thread_ts?: string;
      broadcast?: boolean;
      user_ids?: string[];
    }>;
    unfurl?: Array<{
      url: string;
    }>;
  };
  files: Array<{
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    media_display_type: string;
    thumb_64: string;
    thumb_80: string;
    thumb_360: string;
    thumb_360_w: number;
    thumb_360_h: number;
    thumb_480?: string;
    thumb_480_w?: number;
    thumb_480_h?: number;
    thumb_160: string;
    original_w: number;
    original_h: number;
    thumb_tiny: string;
    permalink: string;
    permalink_public: string;
    comments_count: number;
    is_starred: boolean;
    shares: Record<string, unknown>;
    channels: unknown[];
    groups: unknown[];
    ims: unknown[];
    has_more_shares: boolean;
    has_rich_preview: boolean;
    file_access: string;
    thumb_720?: string;
    thumb_720_w?: number;
    thumb_720_h?: number;
  }>;
};

export type DraftsDeleteResponse = {
  ok: true;
};

export type DraftsListResponse = {
  ok: true;
  drafts: Array<{
    id: string;
    date_created: number;
    user_id: string;
    team_id: string;
    last_updated_ts: string;
    last_updated_client: string;
    blocks: Array<{
      type: string;
      block_id: string;
    }>;
    file_ids: unknown[];
    is_from_composer: boolean;
    is_deleted: boolean;
    is_sent: boolean;
    client_msg_id: string;
    date_scheduled: number;
    destinations: Array<{
      channel_id: string;
      user_ids?: string[];
      thread_ts?: string;
      broadcast?: boolean;
    }>;
    unfurl?: Array<{
      url: string;
    }>;
  }>;
  files: unknown[];
  has_more: boolean;
};

export type DraftsListActiveResponse = {
  ok: true;
  active_draft_ids: string[];
  has_more: boolean;
};

export type DraftsUpdateResponse = {
  ok: true;
  draft: {
    id: string;
    date_created: number;
    user_id: string;
    team_id: string;
    last_updated_ts: string;
    last_updated_client: string;
    blocks: Array<{
      type: string;
      block_id: string;
    }>;
    file_ids: string[];
    is_from_composer: boolean;
    is_deleted: boolean;
    is_sent: boolean;
    client_msg_id: string;
    date_scheduled: number;
    destinations: Array<{
      channel_id: string;
      thread_ts?: string;
      broadcast?: boolean;
      user_ids?: string[];
    }>;
    client_last_updated_ts: string;
    unfurl?: Array<{
      url: string;
    }>;
  };
  files: Array<{
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    media_display_type: string;
    thumb_64: string;
    thumb_80: string;
    thumb_360: string;
    thumb_360_w: number;
    thumb_360_h: number;
    thumb_480: string;
    thumb_480_w: number;
    thumb_480_h: number;
    thumb_160: string;
    original_w: number;
    original_h: number;
    thumb_tiny: string;
    permalink: string;
    permalink_public: string;
    comments_count: number;
    is_starred: boolean;
    shares: Record<string, unknown>;
    channels: unknown[];
    groups: unknown[];
    ims: unknown[];
    has_more_shares: boolean;
    has_rich_preview: boolean;
    file_access: string;
    thumb_720?: string;
    thumb_720_w?: number;
    thumb_720_h?: number;
  }>;
};

export type EmailAffiliationsInfoResponse = {
  ok: true;
  google_affiliation: null;
};

export type EmailsInfoResponse = {
  ok: true;
};

export type EmojiAddResponse = {
  ok: true;
};

export type EmojiAdminListResponse = {
  ok: true;
  disabled_emoji: Array<{
    name: string;
    is_alias: number;
    alias_for: string;
    url: string;
    team_id: string;
    user_id: string;
    created: number;
    is_bad: boolean;
    user_display_name: string;
    avatar_hash: string;
    can_delete: boolean;
    synonyms: unknown[];
  }>;
  custom_emoji_total_count: number;
  paging: {
    count: number;
    total: number;
    page: number;
    pages: number;
  };
};

export type EmojiCollectionsListResponse = {
  ok: true;
  installed: Array<{
    id: string;
    name: string;
    author: string;
    team_id: string;
    locale: string;
    date_create: number;
    is_draft: boolean;
  }>;
  available: Array<{
    id: string;
    name: string;
    author: string;
    team_id: string;
    locale: string;
    date_create: number;
    is_draft: boolean;
  }>;
};

export type EmojiGetInfoResponse = {
  ok: true;
  name: string;
  is_alias: number;
  alias_for: null;
  url: string;
  team_id: string;
  user_id: string;
  user_display_name: string;
  can_delete: boolean;
};

export type EmojiRemoveResponse = {
  ok: true;
};

export type EnterprisePrefsGetResponse = {
  ok: true;
  locked_prefs: {
    admin_customized_quick_reactions: string[];
    ai_apps_settings: {
      apps: unknown[];
    };
    all_users_can_purchase: boolean;
    allow_account_type_edit_channel_workspaces_override: boolean;
    allow_audio_clip_sharing_slack_connect: boolean;
    allow_audio_clips: boolean;
    allow_automatic_media_transcriptions: boolean;
    allow_calls: boolean;
    allow_calls_interactive_screen_sharing: boolean;
    allow_cea_for_hippa_team: boolean;
    allow_clip_downloads: string;
    allow_content_review: boolean;
    allow_custom_solution_templates: boolean;
    allow_feature_request: boolean;
    allow_lists: string;
    allow_lock_thread: boolean;
    allow_media_transcriptions: boolean;
    allow_native_gif_picker: boolean;
    allow_retention_override?: boolean;
    allow_solution_templates: string;
    allow_spaceship: string;
    allow_sponsored_slack_connections: boolean;
    allow_video_clip_sharing_slack_connect: boolean;
    allow_video_clips: boolean;
    alt_text_reminders: boolean;
    alt_text_reminders_custom_link: null;
    atlas_org_charts_access: string;
    atlas_profiles_access: string;
    auth_mode: string;
    available_calendar_huddle_access_options: {
      org_access: boolean;
      knock_access: boolean;
    };
    billing_email_daily: boolean;
    billing_email_monthly: boolean;
    billing_wdf_customer_id: null;
    block_file_download: boolean;
    block_file_types: boolean;
    can_accept_slack_connect_channel_invites: boolean;
    can_create_external_limited_invite: boolean;
    can_create_slack_connect_channel_invite: boolean;
    can_receive_shared_channels_invites: boolean;
    canvas_printing_enabled: boolean;
    canvas_restricted_sharing_enabled: boolean;
    canvas_retention_duration: number;
    canvas_retention_type: number;
    canvas_version_history_enabled: boolean;
    commands_only_regular?: boolean;
    company_name: null;
    content_review_enabled: boolean;
    custom_status_site: null;
    default_channel_knowledge_agent: null;
    default_function_reuse_visibility: {
      visibility: string;
    };
    developer_sandbox_dashboard_limited_access: boolean;
    developer_sandbox_org: boolean;
    developer_sandbox_org_self_signin_disabled: boolean;
    disable_file_deleting: boolean;
    disable_file_editing: boolean;
    disallow_public_file_urls: boolean;
    display_anniversary_celebration: boolean;
    display_email_addresses?: boolean;
    display_external_email_addresses: boolean;
    display_guest_email_addresses: boolean;
    display_new_hire_celebration: boolean;
    display_pronouns: boolean;
    dm_retention_duration: number;
    dm_retention_redaction_duration: number;
    dm_retention_type: number;
    file_retention_duration: number;
    file_retention_type: number;
    flag_content_admin_dash: boolean;
    flag_content_review_allow_decision_reversal: null;
    flag_content_review_flag_profiles: boolean;
    flag_content_review_note_required: null;
    flag_content_reviewer_assigned_notif: boolean;
    flag_message_author_outcome_notif: boolean;
    flag_message_custom_link: null;
    flag_message_flagger_outcome_notif: boolean;
    flag_message_users_to_notify: unknown[];
    flagged_content_review_channel: null;
    gdpr_enabled: boolean;
    gdrive_unfurl_restricted: boolean;
    google_sso_domain: null;
    google_sso_enable: null;
    has_hipaa_compliance: boolean;
    hermes_allow_interactions_with_workflows_owned_by_slack_connected_teams: boolean;
    hermes_triggers_trippable_by_slack_connected_teams: boolean;
    hide_gsuite_invite_option: boolean;
    hide_person_opt_out: boolean;
    identity_links_prefs: null;
    ineligible_for_discount: boolean;
    invited_user_preset: Record<string, unknown>;
    list_column_option_limit: number;
    list_restricted_sharing_enabled: boolean;
    locale: string;
    max_guest_duration: null;
    member_analytics_disabled: boolean;
    ml_opt_out: boolean;
    mobile_block_message_copy: boolean;
    mobile_force_app_upgrade_min_version: null;
    mobile_force_app_upgrade_versions_allowed: null;
    mobile_passcode_timeout_in_seconds: number;
    mobile_session_duration: number;
    msg_edit_window_mins?: number;
    no_email_user_provision_type: string;
    notification_redaction_type: string;
    notify_pending_enabled: boolean;
    ntlm_credential_domains: string;
    onedrive_and_sharepoint_unfurl_restricted: boolean;
    premium_workflow_notifications: {
      notifications_enabled: boolean;
      notification_location: string;
    };
    private_channel_analytics_disabled: boolean;
    private_channel_membership_limit: number;
    private_message_forwarding: boolean;
    private_retention_redaction_duration: number;
    public_retention_redaction_duration: number;
    read_only_canvas_subteam_ids: unknown[];
    record_channel_private_retention_duration: number;
    record_channel_private_retention_redaction_duration: number;
    record_channel_private_retention_type: number;
    record_channel_public_retention_duration: number;
    record_channel_public_retention_redaction_duration: number;
    record_channel_public_retention_type: number;
    required_minimum_desktop_version: null;
    required_minimum_mobile_version: null;
    restrict_workflow_trigger_steps: {
      triggers: Record<string, unknown>;
    };
    rimeto_org_instance_id: null;
    sales_home_retention_duration: number;
    sales_home_retention_type: number;
    salesforce_forwarding: {
      default: string;
    };
    same_org_external_teams: null;
    saml_enable: boolean;
    search_feedback_opt_out: boolean;
    security_circuit_breakers: {
      tor: boolean;
      session_fingerprint: boolean;
      spoofed_user_agent: boolean;
      unexpected_scraping: boolean;
      unexpected_user_agent: boolean;
      unexpected_api_call_volume: boolean;
      notify_primary_owner: number;
      notify_security_admins: number;
    };
    session_duration: number;
    session_duration_type: number;
    show_legacy_workflows: boolean;
    signup_domains: null;
    signup_mode: null;
    slack_ai_action_items_opt_out: boolean;
    slack_ai_allowed_workspaces: unknown[];
    slack_ai_answer_sharing_opt_out: boolean;
    slack_ai_daily_recap_opt_out: boolean;
    slack_ai_detailed_feedback_opt_out: boolean;
    slack_ai_disabled: boolean;
    slack_ai_explain_sharing_opt_out: boolean;
    slack_ai_feedback_opt_out: boolean;
    slack_ai_file_summaries_opt_out: boolean;
    slack_ai_files_search_opt_out: {
      all_file_opt_out: boolean;
    };
    slack_ai_files_workflow_steps_opt_out: {
      all_file_opt_out: boolean;
    };
    slack_ai_huddle_summaries_opt_out: boolean;
    slack_ai_huddles_automatic_notes_opt_out: boolean;
    slack_ai_message_translations_opt_out: boolean;
    slack_ai_opt_out: boolean;
    slack_ai_workflow_builder_opt_out: boolean;
    slack_connect_account_visibility: string;
    slack_connect_allowed_workspaces: {
      type: string[];
    };
    slack_connect_approval_type: string;
    slack_connect_dm_only_verified_orgs: boolean;
    slackbot_ai_canvas_write_enabled: boolean;
    spaceship_workspace_setting_visible: boolean;
    sso_auth_restrictions: number;
    sso_change_email: boolean;
    sso_choose_username: boolean;
    sso_disable_emails: boolean;
    sso_signup_restrictions: number;
    sso_sync_with_provider: boolean;
    team_list_count: number;
    thorn_designated_contact: null;
    thorn_safer_scan: boolean;
    two_factor_auth_required: number;
    two_factor_prevent_sms: number;
    use_browser_picker: boolean;
    warn_before_at_channel?: string;
    warn_user_before_logout_desktop: boolean;
    warn_user_before_logout_mobile: boolean;
    wfb_default_connector_visibility: string;
    wfb_salesforce_trigger_channel_restrictions: {
      salesforce_orgs: Record<string, unknown>;
    };
    who_can_accept_slack_connect_channel_invites: {
      user?: unknown[];
      type: string[];
      subteam?: unknown[];
    };
    who_can_create_external_limited_invite: {
      user?: unknown[];
      type: string[];
      subteam?: unknown[];
    };
    who_can_create_slack_connect_channel_invite: {
      user?: string[];
      type: string[];
      subteam?: unknown[];
    };
    who_can_create_standard_workflows: Record<string, unknown>;
    who_can_dm_anyone: {
      type: string[];
    };
    who_can_manage_ext_shared_channels: {
      type: string[];
    };
    who_can_review_flagged_content: {
      type: string[];
    };
    work_object_unfurl_visibility: number;
  };
  unlocked_prefs: {
    ai_apps: {
      is_enabled: boolean;
      allowed_apps: unknown[];
    };
    allow_admin_retention_override: number;
    allow_box_cfs: boolean;
    allow_huddles: boolean;
    allow_huddles_transcriptions: boolean;
    allow_huddles_video: boolean;
    allow_message_deletion: boolean;
    allow_workflow_export: boolean;
    app_dir_only: boolean;
    app_management_apps: unknown[];
    app_whitelist_enabled: null;
    app_whitelist_requests_enabled: boolean;
    app_whitelist_requests_require_comment_enabled: boolean;
    automatic_welcome_dm_enabled: boolean;
    calls_locations: unknown[];
    canvas_updated_message_enabled: boolean;
    custom_status_default_emoji: string;
    custom_status_presets: string[][];
    default_channels: null;
    default_rxns: string[];
    disable_email_ingestion: boolean;
    disable_file_uploads: string;
    disable_sidebar_connect_prompts: unknown[];
    disable_sidebar_install_prompts: unknown[];
    display_real_names: boolean;
    dnd_after_friday: string;
    dnd_after_monday: string;
    dnd_after_saturday: string;
    dnd_after_sunday: string;
    dnd_after_thursday: string;
    dnd_after_tuesday: string;
    dnd_after_wednesday: string;
    dnd_before_friday: string;
    dnd_before_monday: string;
    dnd_before_saturday: string;
    dnd_before_sunday: string;
    dnd_before_thursday: string;
    dnd_before_tuesday: string;
    dnd_before_wednesday: string;
    dnd_days: string;
    dnd_enabled: boolean;
    dnd_enabled_friday: string;
    dnd_enabled_monday: string;
    dnd_enabled_saturday: string;
    dnd_enabled_sunday: string;
    dnd_enabled_thursday: string;
    dnd_enabled_tuesday: string;
    dnd_enabled_wednesday: string;
    dnd_end_hour: string;
    dnd_start_hour: string;
    dnd_weekdays_off_allday: boolean;
    group_retention_duration: number;
    group_retention_type: number;
    has_shared_invites: boolean;
    hermes_has_accepted_tos: boolean;
    hide_referers: boolean;
    invite_requests_approval_channel: null;
    invite_requests_enabled: boolean;
    invites_limit: boolean;
    ip_restriction_ranges: unknown[];
    loading_only_admins: boolean;
    loud_channel_mentions_limit: number;
    max_file_upload_size: null;
    retention_duration: number;
    retention_type: number;
    sales_get_help: null;
    sign_in_with_slack_disabled: boolean;
    slack_ai_search_suggested_queries: unknown[];
    slack_connect_file_upload_sharing_enabled: boolean;
    slackbot_responses_disabled: boolean;
    stats_only_admins: boolean;
    subteams_auto_create_admin: boolean;
    subteams_auto_create_owner: boolean;
    tableau_agent_user_id: null;
    use_workspace_icon_for_single_workspace_users: boolean;
    username_policy: null;
    uses_customized_custom_status_presets: boolean;
    was_treatment_for_boost_bus_plus_awareness_and_upgrades: boolean;
    welcome_place_enabled: boolean;
    who_can_change_team_profile: string;
    who_can_create_shared_channels: string;
    who_can_create_workflows: Record<string, unknown>;
    who_can_manage_integrations: Record<string, unknown>;
    who_can_post_general: string;
    who_can_use_hermes: Record<string, unknown>;
    workflow_extension_steps_enabled: null;
    workflows_export_csv_enabled: null;
    workflows_webhook_trigger_enabled: null;
    allow_retention_override?: boolean;
    commands_only_regular?: null;
    display_email_addresses?: boolean;
    msg_edit_window_mins?: number;
    warn_before_at_channel?: string;
  };
  org_prefs: {
    agentforce_workspaces: null;
    allow_developer_sandboxes: string;
    always_show_workspace_name: null;
    channel_audit_export_enabled: boolean;
    channel_email_addresses_enabled: boolean;
    custom_contact_email: string;
    default_create_private_channel: boolean;
    default_theme: null;
    developer_sandbox_admin_menu_limited_access: boolean;
    developer_sandbox_allow_slack_connect_owning_org: boolean;
    developer_sandbox_invite_org_domains_only: {
      is_enabled: boolean;
      domains: unknown[];
    };
    developer_sandbox_provision_notifications: {
      notifications_enabled: boolean;
      notification_location: string;
    };
    developer_sandbox_request_auto_response: string;
    developer_sandbox_request_notifications: {
      notifications_enabled: boolean;
      notification_location: string;
    };
    developer_sandbox_safe_sign_in: boolean;
    developer_sandbox_slack_connect_org_sandboxes_only: boolean;
    disable_privacy_and_cookie_policy: boolean;
    display_default_phone: boolean;
    image_102: string;
    image_132: string;
    image_230: string;
    image_34: string;
    image_44: string;
    image_68: string;
    image_88: string;
    image_default: boolean;
    image_original: string;
    org_calls_apps: null;
    org_default_theme: null;
    received_esc_route_to_channel_awareness_message: boolean;
    rich_previews_default: string;
    sign_in_with_slack_default: string;
    single_user_exports: boolean;
    sso_optional: boolean;
    who_has_team_visibility: string;
    workflow_builder_enabled: boolean;
  };
};

export type EnterpriseTeamsDirectoryResponse = {
  ok: true;
  items: Array<{
    id: string;
    name: string;
    url: string;
    domain: string;
    avatar_base_url: string;
    is_verified: boolean;
    icon: {
      image_default: boolean;
      image_34: string;
      image_44: string;
      image_68: string;
      image_88: string;
      image_102: string;
      image_230: string;
      image_132: string;
    };
    discoverable: string;
    archived: boolean;
    deleted: boolean;
    is_enterprise: number;
    created: number;
    description: string;
    joined_date: number;
    can_leave: boolean;
    cannot_leave_reasons: unknown[];
    is_member: boolean;
    is_assigned: boolean;
    user_counts: {
      active_members: number;
    };
    active: boolean;
    has_join_request: boolean;
    date_requested_join: number;
  }>;
  teams: unknown[];
  num_found: number;
  next_cursor_mark: string;
  on_workspaces: boolean;
};

export type ExperimentsGetByUserAssignmentsEntry = {
  type: string;
  group: string;
  schedule_ts: number;
  trigger: string;
  log_exposures: boolean;
};

export type ExperimentsGetByUserAssignmentsName =
  | "slackbot_ai_next"
  | "salesforce_channel_truncate_long_names"
  | "social_team_segmentation"
  | "admin_tools_follow_up_premigration_bulk_updates"
  | "undo_mark_all_read"
  | "deprecate_pd"
  | "improve_sc_file_sharing"
  | "emoji_v15_be"
  | "fix_product_discount_carryover"
  | "slackforce_activity_timeline"
  | "joiner_welcome_email_exp2"
  | "sf_record_list_views_ask_slackbot"
  | "remove_preview_tooltip"
  | "ios_sail_global_shortcuts_autocomplete_optimizations"
  | "salesforce_record_view_enhancements"
  | "channel_store_stable_updates"
  | "members_store_stable_updates"
  | "huddles_survey_screenshare_option"
  | "autocomplete_affinity_ml_model"
  | "slackforce_change_owner"
  | "show_desktop_download_nudges_new_users"
  | "aer_expose_anomaly_log_id"
  | "light_write_ai_pref_migrations"
  | "optimize_sidebar_latests"
  | "grid_mig_portal_recent_login"
  | "straight_to_checkout"
  | "domain_signup_opt_out_system_notification"
  | "admin_email_verification_fast_follow"
  | "force_native_notifications"
  | "slack_ai_nux"
  | "minimum_install_requirement"
  | "new_create_channel_section_modal"
  | "lists_perf_board_view"
  | "ai_summary_files_in_srp"
  | "msg_limit_sidebar_cta"
  | "sfdc_slackforce_grid_migrations_translations"
  | "cust_acq_plans_experiment_logging"
  | "retention_allow_override_mc_warning"
  | "migration_report_text"
  | "agentforce_apis_full_app_profiles"
  | "ai_apps_list_fe"
  | "agent_sunroof_clean_selector"
  | "agent_sunroof_new_selectors"
  | "agent_sunroof_use_app_id_for_agent_filter"
  | "agent_sunroof"
  | "sandbox_migration_error_text"
  | "add_owner_in_migration_portal_error_text"
  | "msg_limit_90d_email"
  | "enterprise_search_use_feature_policy"
  | "salesforce_channels_x_out_channel"
  | "custom_salesforce_channel_names_fe"
  | "use_measure"
  | "slack_mcp_react"
  | "developer_app_mcp_option"
  | "admin_search"
  | "org_owner_invite_sso_text"
  | "react_19_use_create_root"
  | "write_to_ui_state"
  | "lists_perf_cache_records"
  | "uad_pilot"
  | "unified_org_dash"
  | "unified_org_dash_killswitch"
  | "huddles_dual_udp_support"
  | "omni_yield_suggestions"
  | "create_channel_onboarding_cards"
  | "restore_simple_channel_create"
  | "huddles_agc_browser_default"
  | "data_mobility_idr_settings_warning"
  | "android_search_2b_recent_frequent"
  | "app_settings_oauth_legacy_gantry_migration"
  | "lists_evict_archived_items"
  | "list_view_polish_improvements"
  | "svg_rendering_svgr"
  | "slack_connect_invite_email_mismatch_translation"
  | "channel_tab_overflow_drag_items"
  | "decode_teams_calls_url"
  | "slackforce_channel_request_channel_access"
  | "posts_read_only"
  | "elm_channel_invite_limited_access_choice_present"
  | "slackbot_ai_client_context"
  | "apps_in_entsearch"
  | "salesforce_data_fields_in_canvas_team_toggle"
  | "channel_agent_use_status_on_fe"
  | "top_level_permission_requests"
  | "lists_grid_todos"
  | "ny_promo_2026"
  | "shared_sections_follow_ups"
  | "a11y_alt_text_reminders_custom_link"
  | "new_joiner_workspace_switcher_prompt"
  | "bus_plus_contextualize_upgrade_modal_translations_toggle"
  | "onboarding_tasks"
  | "media_clips_sync"
  | "lists_tombstone_unfurls"
  | "work_objects_use_file_title"
  | "lists_records_list_5k"
  | "lists_migrate_column"
  | "lists_lazily_create_file_channels"
  | "break_out_user_prefs_store"
  | "work_object_forwarding_fe"
  | "omniswitcher_memoization"
  | "splitview_child_windows"
  | "split_view_nux"
  | "admin_email_verification_v1"
  | "admin_email_verification_v1_translations_v2"
  | "break_out_channel_prefs_store"
  | "migrations_time_picker_sublabel"
  | "slackbot_ai_missing_slug"
  | "slackbot_ai_channel_ux"
  | "reskin_custom_responses"
  | "search_answers_slackbot_handoff"
  | "break_out_enterprise_prefs_store"
  | "break_out_team_prefs_store"
  | "channel_tabs_drop_into_folder"
  | "channel_tab_drag_message_attachments"
  | "slackforce_list_view_reference_fields_display_v1"
  | "work_objects_no_footer_compact"
  | "unified_files_no_child_explorer"
  | "file_thumb_refresh"
  | "emoji_packs_in_custom_tab"
  | "inviter_joiner_first_dm_v2"
  | "admin_tools_premigration_bulk_updates"
  | "framer_motion_disable_animation"
  | "push_enabled_notification_pref"
  | "improve_notifications_prefs"
  | "sidebar_visual_updates_m1"
  | "slackbot_ai_grace_period_admin"
  | "search_and_sort_roles_and_permissions"
  | "security_settings_export"
  | "provisionally_deactivate_roles"
  | "aops_feature_max_guest_expiration"
  | "unified_files_browser_child_window_2"
  | "stp_alt_discounts"
  | "work_objects_new_version_notification"
  | "remove_enable_ai_btn"
  | "plug_and_play_sections"
  | "salesforce_record_gallery_unfurls"
  | "serve_experiment_assigned_build"
  | "sc_email_accept_improvements_v2"
  | "desktop_nspanel_window"
  | "reduce_sidebar_rows_invalidations"
  | "conversational_search_message_embeds"
  | "emoji_picker_fix_stale_selection"
  | "improve_edit_experience"
  | "huddles_av_button_permission_handling"
  | "enterprise_search_rtm_events"
  | "slackforce_org_status_capture"
  | "aer_spoofed_user_agent_anomaly"
  | "dlp_async_file_processing"
  | "ai_workspace_team_check"
  | "admin_groups_on_the_org_dash"
  | "split_view"
  | "channel_join_ai_section_recommendation"
  | "data_mobility_migration_has_invalid_users"
  | "persist_memoized_selections"
  | "systems_deprecation_2026_may_phase_one"
  | "admin_browser_deprecation_warning_february_2026"
  | "presence_status_aria_label_strings"
  | "slack_crm_onboarding"
  | "slackbot_history_layout_updates"
  | "huddles_invite_declined_handling"
  | "fe_nest_ordered_lists"
  | "canvas_ai_overlay_suggestions"
  | "desktop_history_menu"
  | "native_cea_friends_of_release_2"
  | "pcx_thinking_steps_blocks"
  | "task_block"
  | "files_native_context_menu"
  | "einst_5839"
  | "wfb_migrate_manage_integrations_to_admin"
  | "slackbot_ai_history"
  | "slackbot_ai_mark_invalid_ids"
  | "expand_desktop_ssb_download_nudges"
  | "apiq_dummy_requests"
  | "sfdc_feelings_catcher_update"
  | "einst_5971_slackai_translations"
  | "channel_versioning_unknown_channels"
  | "enterprise_migration_preference_conflict_handling"
  | "grid_premigration_conflict_resolution"
  | "export_api_files"
  | "plus_request_to_purchase"
  | "consolidate_app_profile_stores"
  | "consolidate_app_profile_fetching"
  | "salesforce_wo_refresh"
  | "work_objects_refresh_unfurls"
  | "a11y_alt_text_reminders_nux_modal"
  | "edm_grid_migration_repurpose_validation_email_helper"
  | "slackbot_nav_plus"
  | "generic_system_user_alert"
  | "omniswitcher_secondary_actions"
  | "canvas_ai_analytics"
  | "search_ai_kw_generate_results_summary"
  | "files_share_context_be"
  | "itemsubs_lastread_fetch"
  | "reset_retention_cache_and_db_conns"
  | "work_objects_refresh_timestamp"
  | "slack_connect_trial_onboarding_inviter"
  | "channel_join_desktop_only"
  | "systems_deprecation_2026_may"
  | "convert_mpdm_to_private_channel"
  | "threads_c14n_queries_no_override"
  | "work_object_change_click_target"
  | "what_is_dead_may_never_die"
  | "enterprise_search"
  | "workflow_process_precheck_in_trip"
  | "enterprise_search_related_threads"
  | "mobile_awareness_team_menu_entrypoint_link_update"
  | "files_share_context"
  | "message_posted_trigger_in_private_channels"
  | "a11y_charismatic_megafauna"
  | "original_slackbot_translations"
  | "global_desktop_everything_downgrade"
  | "wfb_3p_child_all_objects"
  | "wfb_3p_polymorphic_filters"
  | "disable_enterprise_info_fetch"
  | "slack_first_crm_csv_ai"
  | "slack_marketplace_personalization"
  | "validate_dynamic_options"
  | "workflow_external_validation"
  | "lists_description_max_length"
  | "prettier_external_copy_paste"
  | "lists_history"
  | "list_record_unfurls_column_order"
  | "today_mark_as_read_v2"
  | "search_work_object_highlighting"
  | "enterprise_search_i18n_july"
  | "app_auth_status"
  | "dark_read_message_deletion_migration"
  | "light_write_message_deletion_migration"
  | "light_read_message_deletion_migration"
  | "einst_5839_ai_content_merge"
  | "slack_ai_trial_v2"
  | "include_js_call_stacks_in_crash_reports"
  | "canvas_ai_drafts"
  | "expand_flag_message_to_private_threads"
  | "channel_tabs_polish"
  | "copy_workflow_id_in_channel"
  | "unified_files_peek_starred_switch"
  | "request_scg_to_mcg_approval"
  | "escal_scg_channel_search_fix"
  | "canvas_private_message_unfurl_speedbump_v2"
  | "channel_folders"
  | "canvas_ai_gutter_icon"
  | "shortcuts_gallery_express_templates"
  | "platform_simplified_templates"
  | "slack_ai_persist_message_language_fe"
  | "enterprise_search_admin_validations_microsoft_teams"
  | "enterprise_search_admin_validations_github_cloud"
  | "enterprise_search_admin_validations_asana"
  | "canvas_table_block"
  | "callout_block"
  | "lists_refactor_code_to_async_job"
  | "ios_invite_refresh"
  | "omni_filter_completion"
  | "omni_filters"
  | "related_match_label_for_semantic_search_files"
  | "slackcrm_new_user_roles"
  | "cuddles_unset_property"
  | "streamline_plans_experience"
  | "sc_email_accept_improvements"
  | "stp_bizplus_forward"
  | "ccm_channel_id"
  | "ekm_backfill_in_progress"
  | "fe_search_context_aware_flannel_current_thread_users"
  | "srp_clean_message_attachments"
  | "slack_connect_straight_to_paid_translations"
  | "priority"
  | "stpbizplus_translations"
  | "spam_invite_default_v3"
  | "slackbot_ai_free_pro_paywall"
  | "workflow_additional_templates"
  | "canvas_list_co_owner"
  | "slackbot_ai_growth_slackbot_coming_soon"
  | "slackbot_ai_off_for_org_banner"
  | "profile_section_recent_dm"
  | "shared_mpdms_in_profile"
  | "trigger_permissions_error_i18n"
  | "slackforce_query_sobjects_for_events"
  | "platform_automations_tab_customization"
  | "nerf_email_fuzzy_match"
  | "searcher_avoid_exact_member_match"
  | "slackbot_dms_in_activity"
  | "record_channel_related_conversations_fe"
  | "slackbot_ai_growth_nux"
  | "slackbot_ai_growth_paywall"
  | "admin_navigation_menu"
  | "slackforce_limited_group_access"
  | "slack_crm_new_sfdc_rest_client"
  | "ai_channel_exclusions"
  | "search_ai_preview_summaries"
  | "onboarding_tasks_translation"
  | "android_search_explorations_bottom_entry"
  | "stp_sidebar_v2"
  | "search_answer_read_more_treatment"
  | "simplified_templates_nux"
  | "slackbot_ai_error_states"
  | "slackbot_ai_cmd_n"
  | "slack_ai_wrapped"
  | "pricing_auth_fy26"
  | "canvas_table_block_fe"
  | "ios_search_context_aware_retrieval_via_flannel"
  | "split_layout_perf"
  | "ai_huddle_summary"
  | "edit_huddle_topic"
  | "slack_ai_catch_up"
  | "biz_plus_trials_cta_optimization"
  | "fix_jump_to_thread_message"
  | "fix_newest_message_unread_scroll"
  | "es_searchable_multi_select_filter"
  | "record_channel_related_conversations"
  | "record_channel_rtm_summary"
  | "transcribe_encode_locale_in_job_name"
  | "move_to_google_meet"
  | "vhq_transcribe_specify_output_bucket"
  | "callout_block_fe"
  | "huddles_troubleshooting_remove_contact_us"
  | "today_unreads_trigger"
  | "huddles_piano_concerto_jukebox_song"
  | "canvas_callouts"
  | "seasonal_delight_january_translations"
  | "migrations_merge_users_alert_i18n"
  | "jan_delight_send_greeting_kill_switch"
  | "import_gdrive_file_as_link"
  | "upgrd_8811"
  | "files_upload_api_deprecation_dashboard"
  | "platform_ts_conversion_batch_2"
  | "canvas_react_share_analytics"
  | "ml_search_m12_frecency_adaptive_history_exact_matches"
  | "ml_search_m12_frecency_daily_score_decay"
  | "default_open_canvas_in_browser"
  | "dm_in_activity"
  | "happy_emails"
  | "ai_explain_service"
  | "huddles_link_in_home"
  | "a11y_message_label_update"
  | "work_objects_ux_updates"
  | "today_primary_card_layout"
  | "today_hot_channels"
  | "canvas_analytics_usage_translations"
  | "unified_directory"
  | "unified_files_browser"
  | "app_data_transparency"
  | "unread_summary_pill_new"
  | "search_answer_sharing_ga"
  | "sfdc_seamless_authfailurereason_user"
  | "sfdc_integration_admin_list_members"
  | "platform_ts_conversion_batch_1"
  | "work_objects_open_expanded_preview"
  | "work_objects_view_convos_action_bar"
  | "work_objects_open_expanded_preview_coachmark"
  | "work_objects_inline_edit"
  | "eco_support_universal_sso"
  | "scg_mcg_copy_changes"
  | "searchy_single_mode"
  | "fe_nav_first_apply_post_processing_rules"
  | "pnp_ooo"
  | "multi_file_upload_to_folder"
  | "stop_premature_subscription"
  | "tableau_workobject_visualization_unfurl"
  | "cancellation_survey_refresh"
  | "fetch_latest_reaction_improve_query"
  | "pin_huddle_participants"
  | "private_to_public_api_esc_owner"
  | "private_to_public_api_esc_remote"
  | "notify_for_at_user_mentions_in_muted_channels"
  | "unreads_sidebar_simplification"
  | "tableau_workobject_entity_id_switch_over"
  | "slackforce_seamless_auth_url_translation"
  | "org_connections_show_privacy"
  | "scg_to_mcg_translations"
  | "side_by_side_view"
  | "slackforce_log_activity_desktop_2"
  | "solutions_unbundled_templates"
  | "slackforce_list_unfurls"
  | "joiner_personalized_launchpad_topics"
  | "composer_underline"
  | "solutions_setup_add_to_existing"
  | "block_unfurls"
  | "csv_tsv_autocapture"
  | "canvas_ai_pilot"
  | "android_ia_next_recent_frequent_experiment"
  | "audit_logs_client"
  | "flag_content_xorg_frontend"
  | "slackforce_edit_bulk_reference_fields"
  | "searchy_nav_first_2"
  | "ignore_migrations_lane_concurrency_limit"
  | "fe_persist_workspace_filter_selection"
  | "activity_filtering_revamp"
  | "workspace_selection_mpdm_to_private"
  | "native_gif_search_content_filter_override"
  | "user_expectations_survey"
  | "sc_disabled_copy_m1"
  | "generic_info_dms"
  | "flannel_shared_channel_users_format_external"
  | "replace_target_teams_for_user"
  | "users_conversations_new_cursor"
  | "generic_info_cache"
  | "fe_activity_stop_number_badging_threads"
  | "governed_invites_fast_follow"
  | "sdfc_seamless_auth_grid_migration"
  | "pilot_feedback_collector"
  | "inviter_joiner_first_dm"
  | "prewarmed_huddles"
  | "systems_deprecation_2025_november_phase_three"
  | "wfb_auth_speedbump"
  | "wfb_v1_deprecation_april_15_2025"
  | "slack_ai_message_translation"
  | "real_time_recap"
  | "flow_of_work_ai_channel_join"
  | "agentforce_sf_org_disconnection_warning_fe"
  | "spaces_away_team_pref_approval_type"
  | "spaces_away_team_can_join_permissions"
  | "should_reload_install_new_service_worker"
  | "clips_transcriptions_feedback"
  | "ios_canvas_cache_reset_app_version"
  | "search_answer_sharing_admin_pref"
  | "client_boot_fetch_salesforce_features_from_extras"
  | "invite_step_optimizations_translations"
  | "canvas_ai_access_policy"
  | "canvas_ai_inline_creation"
  | "resurrected_user_channel_ai_summary"
  | "notify_admins_ai_app_install"
  | "animated_text_streaming_agentforce"
  | "remote_files_indexing_fix"
  | "slack_ai_file_summary_translation"
  | "slack_ai_translations_surface_feedback"
  | "app_settings_legal_copy"
  | "agentforce_surface_status"
  | "pcx_featured_workflows_api"
  | "proj_declutter_sidebar"
  | "shared_channel_sections"
  | "slack_crm_tenured_team_content"
  | "sleep_wake_using_client_store"
  | "step_team_name_experience"
  | "spaceship_posts_migration"
  | "ui_generator_ai"
  | "spaceship_synthetic_view_hover_card"
  | "sfdc_seamless_auth_fe"
  | "aer_user_allowlist"
  | "wfb_conditional_branching_nested_branches"
  | "sfdc_seamless_auth_migration_coachmark"
  | "sfdc_seamless_auth_migration_translation"
  | "user_team_cross_signin_redirect"
  | "wfb_sales_admin_functions_permission_translations"
  | "search_cjk_name_substring"
  | "search_cjk_channel_substring"
  | "cjk_single_char_substring"
  | "access_logs_cursor_based_pagination"
  | "native_dlp_canvas"
  | "canvas_version_document_mismatch"
  | "delete_app_and_bot_messages_permission"
  | "agentforce_publish"
  | "nesh_team_test"
  | "improved_2fa_flow"
  | "einst_5578"
  | "tableau_workobject_entity_id_migration"
  | "agentforce_status_syncing_fe"
  | "lob_scheduled_notifications_stage_change"
  | "ios_flannel_retrieval_channel_thread_context"
  | "fe_search_context_aware_flannel_current_channel"
  | "fe_search_context_aware_flannel_default_workspace"
  | "work_object_link_field"
  | "work_object_email_field"
  | "all_company_name_templates_translation"
  | "todos_prefs_nux"
  | "admin_tools_premigration_simplified_users_auto_resolve"
  | "admin_tools_premigration_partial_match_resolution"
  | "shared_sections_channel_list"
  | "slackforce_list_view_browser_recs"
  | "huddles_switch_microphone_helper"
  | "work_objects_ref_type"
  | "wfb_add_agent_to_channel_step"
  | "searcher_class_abort_controller"
  | "wo_boolean_field_type"
  | "streamline_exposure_fix"
  | "enterprise_search_filter_one_drive"
  | "redux_persistence_unload"
  | "xhp_to_react_account_access_logs"
  | "composer_auth"
  | "hover_actions_v2"
  | "today_v2_next"
  | "record_channels"
  | "today_suggested_topics"
  | "search_in_channel"
  | "magic_unfurls"
  | "check_channel_connectivity_for_dms"
  | "lob_record_creation_quick_actions"
  | "lob_record_creation_in_lists"
  | "customize_tab_rail_context_menu"
  | "profile_deletion_delegation_permission"
  | "files_link_full_preview"
  | "apiq_request_deduping"
  | "scroll_to_latest_on_msg_send"
  | "current_tab_id_refactor_to_store"
  | "ai_explain_feature"
  | "optimized_mobile_checkout"
  | "lob_record_creation"
  | "wfb_send_to_salesforce_app"
  | "salesforce_lists_in_sidebar"
  | "slackforce_salesforce_app"
  | "defer_message_input_focus_v3"
  | "huddles_exact_device_id_constraint"
  | "clips_exact_device_id_fix"
  | "huddles_speaker_test"
  | "pcx_workflow_featuring_in_publish"
  | "sidebar_menu_muted_channels_pref_entrypoint"
  | "download_all"
  | "huddle_coachmark_targeting_update"
  | "slack_connect_trial_onboarding_inviter_translations"
  | "cka_configuration_preview"
  | "channel_knowledge_agent_human_handoff_v2"
  | "channel_expert_source_capacity_ui"
  | "agentforce_loading_string_translation"
  | "agent_ui_loading_state"
  | "cka_configuration_ui_v2"
  | "content_flags_review_stacking_fix"
  | "channel_knowledge_agent_invite"
  | "canvas_template_channel_preview"
  | "canvas_create_publish_template"
  | "calls_enable_chime_logging_job"
  | "calls_api_mods_team"
  | "meetings_enabled_api_int"
  | "clips_transcript_preview"
  | "clips_thumbnail"
  | "clips_volume_control"
  | "desktop_capture_updates"
  | "workflow_templates_be_provision_3puf_steps"
  | "pnp_sso_emails_fast_follow"
  | "huddles_slackbot_confirmation"
  | "canvas_list_slackbot_confirmation"
  | "empty_starred_section"
  | "systems_deprecation_woa_upgrade"
  | "systems_deprecation_rosetta_upgrade"
  | "systems_deprecation_linux"
  | "lists_monster_step"
  | "app_settings_oauth_redesign"
  | "slack_first_crm"
  | "mobile_awareness_banner_update"
  | "huddles_updated_audio_detection_trigger"
  | "canvas_underline"
  | "work_objects_stacked_icons"
  | "work_object_unfurls"
  | "salesforce_record_related_threads"
  | "agentforce_agent_api_app_dev_config_view"
  | "wo_file_preview_decouple_flexpane_rtm"
  | "expire_direct_invites"
  | "work_objects_truncate_rich_text"
  | "wo_file_preview_range_request"
  | "wo_file_preview_browser_cache"
  | "wo_file_preview_performance_improvement"
  | "unified_files_browser_empty_state"
  | "wfb_3p_pricing_and_packaging"
  | "wfb_3p_sort_config_translation"
  | "workspace_notification_summary"
  | "search_ai_treat_keywords_as_nl_extract"
  | "autocomplete_intent_model"
  | "newxp_13175_translation_toggle"
  | "troops_time_period_filter_conditions"
  | "android_invite_refresh"
  | "secure_image_block"
  | "use_backend_slash_commands_in_threads_allowlist"
  | "streamline_plans_experience_translation"
  | "semantic_match_label"
  | "android_search_context_aware_retrieval_via_flannel"
  | "fe_search_context_aware_retrieval_via_flannel"
  | "mpim_omniswitcher_remote_search_instrumentation"
  | "omniswitcher_placeholder_next"
  | "kill_backgroundable_connect"
  | "work_objects_external_user_type"
  | "slackbot_ai_autosub_pref"
  | "lists_grid_view"
  | "a11y_emoji_group"
  | "reduce_sign_in_workflow_steps"
  | "perf_browse_sidebar_interactive_list"
  | "native_dlp_rule_targeting"
  | "canvas_ai_workflow"
  | "grid_migration_portal"
  | "systems_deprecation_2025_november_phase_two"
  | "salesforce_record_related_conversations_nux"
  | "unified_search_i18n"
  | "ripcord_desktop_disable_windows_display_crash_feature"
  | "marketplace_home_six_apps_per_category"
  | "slackforce_auto_starter"
  | "light_read_ai_pref_migrations"
  | "defer_message_input_content_update"
  | "enterprise_search_allowed_domains"
  | "conversations_set_teams_api"
  | "use_new_llm_run_page"
  | "addon_discounts"
  | "tableau_workobject_agentforce"
  | "joiner_personalized_launchpad_dm"
  | "org_ready_apps_developers_installation"
  | "dark_write_ai_pref_migrations"
  | "dark_read_ai_pref_migrations"
  | "pnp_paid_team_trials_fast_follow_one"
  | "admin_email_verification_v0"
  | "include_member_id_on_admin_dash"
  | "marketplace_home_gif"
  | "transcribe_opt_in"
  | "grid_migration_two_way_approval"
  | "grid_migration_require_child_team_approval"
  | "canvas_transfer_perms"
  | "joiner_channel_recommendations_by_manager_id"
  | "edm_migration_stats_cached_only"
  | "edm_updates_to_enterprise_plus"
  | "slackforce_downmarket_crm_disable_sales_home_tab"
  | "wfb_check_channel_posting_permissions"
  | "canvas_ai_inline_rewording"
  | "agentforce_agent_flexpane_workspaces"
  | "default_list_view"
  | "lists_perf_2"
  | "checkout_layout"
  | "troops_snapshots_monthly_quarterly_frequency"
  | "salesforce_lists_in_quickswitcher"
  | "message_actions"
  | "ai_apps_loading"
  | "animated_text_streaming"
  | "dynamic_nav_first_ml_training"
  | "search_query_audit_export"
  | "android_search_use_blocks_extracts_multi_group"
  | "client_message_history_backend"
  | "cea_list_installed"
  | "cea_context_bar_text_updates"
  | "next_react_compiler"
  | "third_party_user_form_parity"
  | "joiner_recent_channel_content"
  | "a11y_omniswitcher_reset_active_descendant"
  | "omni_polish"
  | "agentforce_agent_profile_makeover"
  | "agentforce_agent_manager"
  | "work_objects_timeouts_ux_translations"
  | "key_value_store_slice_perf_improvement"
  | "slackbot_ai_copy_text"
  | "sidebar_no_row_cache"
  | "canvas_embedded_sharing_v3"
  | "sidebar_pages_divider"
  | "lists_history_list_refactor"
  | "workspace_switcher_improvements"
  | "ai_apps_list_expanded_functionality"
  | "fe_noise_metrics_logging"
  | "enable_multi_notifications_prefs_set"
  | "org_owner_invite_modal_message_update"
  | "admin_advisor_v3"
  | "add_owner_in_migration_portal_translations"
  | "canvas_silent_share_option"
  | "add_owner_in_migration_portal"
  | "promo_post_purchase_experience"
  | "downgrade_discount_expansion"
  | "einst_4567"
  | "shared_invites_expiration_bug"
  | "conversational_search"
  | "canvas_ai_ga_translations"
  | "mute_channel_edu"
  | "sidebar_sweeper_mute_channels"
  | "filter_dormant_channels"
  | "improve_mute_pref"
  | "tableau_workobject_agentforce_thread_reply"
  | "reduce_sidebar_equality_depth"
  | "wf_open_form_race_condition_copy"
  | "slow_lane_home_channel_sidebar"
  | "disable_catch_all_input"
  | "ai_apps_modify_topbar_menus"
  | "android_ai_summary_in_catch_up"
  | "ios_ai_summaries_in_catch_up"
  | "tableau_dashboard_preview"
  | "start_number_for_ordered_lists"
  | "sidebar_data_all_members"
  | "unjoined_channel_mention_in_activity"
  | "canvas_ai_supported_types_override"
  | "conversational_search_split_view_default"
  | "show_non_distributed_steps_to_approving_admin"
  | "current_tab_id_refactor"
  | "unified_files_browser_hero_banner_v2"
  | "native_gif_picker_admin_control"
  | "work_objects_release"
  | "upgrd_5684"
  | "file_limit_abuse_prevention"
  | "ia_next_automations"
  | "unified_directory_nux"
  | "file_new_share_modal"
  | "flagged_content_translations_two"
  | "slackbot_ai_read_lists"
  | "dark_write_message_deletion_migration"
  | "wfb_in_client"
  | "conversational_search_tabs"
  | "lists_templates"
  | "fail_prov_connect_on_error"
  | "reactji_workflow_improvements"
  | "marketplace_app_submission"
  | "first_login_loader_copy"
  | "pxp1892"
  | "slackbot_ai_remote_navigation"
  | "pnp_deferred"
  | "pxp1249"
  | "spice_advice"
  | "hide_user_fix_unhide_translation"
  | "flag_xorg_refinement"
  | "flag_preserve_content"
  | "flag_message_restore"
  | "badge_all_unreads"
  | "pnp_two_go"
  | "wfb_conditional_branching_downgrade"
  | "ai_apps_tabs_fix"
  | "agent_topics_in_profile"
  | "scp_circuit_breakers"
  | "org_ready_apps_ability_to_opt_in_and_out"
  | "bk_loading_block"
  | "idsc_2fa_require_for_admin_owner"
  | "huddles_hero_banner_migration"
  | "files_hero_banner_conversion"
  | "app_hero_banner_migration"
  | "core_ai_composition"
  | "bk_table_block"
  | "flexpane_deeplinking"
  | "increase_message_list_channel_limit"
  | "tableau_workobject_agentforce_topics_fe"
  | "slackforce_exclude_remove_org_access_menu_item"
  | "fe_usergroup_section_menu_create_channel"
  | "user_group_sections"
  | "fe_less_name_avatar_repeating_in_threads"
  | "channel_hover_card"
  | "slow_lane_channel_message_input"
  | "flag_entity_type_for_content_author"
  | "feat_flag_message_hide_replies"
  | "wfb_use_collaborators_as_owners"
  | "slack_ai_huddles_automatic_notes"
  | "pnp_sso_scim_sfdc"
  | "reacji_workflows_additional_surfaces"
  | "slackbot_ai_tool_slack_search"
  | "celebration_status"
  | "optimized_checkout"
  | "aria_message_edited_timestamp"
  | "workflow_templates_exclude_restricted"
  | "pcx_admin_curated_apps"
  | "pnp_deferred_features"
  | "canvas_header_image_api"
  | "data_retention_dm_description_update"
  | "files_info_skip_shares_client"
  | "coral_12_include_slack_connect_in_channel_moves_feature"
  | "app_gallery_default_org"
  | "hide_external_file_thumbnail_preview_setting"
  | "emoji_picker_a11y_improvements"
  | "agentforce_your_agents_tab"
  | "blockkit_timeline"
  | "hermes_builder_stable"
  | "slack_file_viewer"
  | "box_remote_file_previews"
  | "version_history_announcement"
  | "gdoc_to_canvas_import"
  | "canvas_new_channel_entity_strings"
  | "starred_canvases_on_top"
  | "canvas_new_edits_pill"
  | "use_channel_properties_instead_of_api"
  | "solutions_gallery_channel_cards"
  | "salesforce_channel_linked_private_context_bar_fe"
  | "social_templates"
  | "lists_update_multiselect_hermes_type"
  | "canvas_profile_card_location"
  | "canvas_clickable_comments"
  | "canvas_gutter_redesign"
  | "unified_search_ga_pnp_rollout"
  | "slackbot_ai_feedback"
  | "joiner_launchpad_v2_new_teams_v1"
  | "fe_search_emoji_allow_list"
  | "lcmktg_tenured_user_minimal_proficiency_all"
  | "block_kit_citation_element"
  | "salesforce_channel_retention"
  | "gdrive_skip_rethumbing_unmodified_files"
  | "limit_user_profile_characters"
  | "megaphone_nav_event"
  | "lists_sanitize_channel_tab_labels"
  | "admin_request_flow_in_wfb"
  | "canvas_ai_overlay_ux"
  | "cache_top_apps_by_org"
  | "canvas_crdts_client_team"
  | "shortcuts_gallery_templates"
  | "hermes_workflows_as_attachments"
  | "agentforce_shareable_prompts_bt_url_redirect"
  | "channel_knowledge_agent"
  | "org_dash_experiment_storage"
  | "salesforce_channel_redaction"
  | "canvas_lazy_rendering"
  | "default_working_hours"
  | "canvas_remove_lock_edits"
  | "improve_drafts_bulk_delete_performance"
  | "sfdc_seamless_auth_global_login_updates_fe"
  | "exports_filtering_feature"
  | "slackified_checkbox"
  | "bk_mixed_rich_text_full_width"
  | "ai_apps_install_flow_updates_v2"
  | "workflow_templates_previews"
  | "deeplink_creator_onboarding"
  | "pnp_session_duration_device_settings"
  | "joiner_launchpad_v2_tenured_teams"
  | "wbm_february_10_2025"
  | "wfb_back_to_basics_flan_release"
  | "tableau_work_object_unfurls"
  | "einst_4598_ai_analytics"
  | "pnp_slack_ai_nux"
  | "slack_ai_pnp_nux"
  | "sales_celebration_status"
  | "pnp_share_celebrations_rendering"
  | "pnp_share_celebrations"
  | "org_ready_apps_incoming_webhooks"
  | "enterprise_search_animate_rich_text"
  | "enterprise_search_feedback"
  | "platform_block_legacy_bots_and_apps"
  | "canvas_cursor_awareness"
  | "canvas_selection_awareness"
  | "canvas_disable_quip_metrics_recorder"
  | "pilot_feedback_collector_strings"
  | "folders_add_message"
  | "systems_deprecation_2025_november_phase_one"
  | "sidebar_sweeper_permanent_entry_point"
  | "hermes_trusted_team_mcp_org_level"
  | "app_gallery_refresh"
  | "slackforce_sf_sign_in_to_megaphone"
  | "systems_deprecation_2025_november"
  | "files_upload_slackbot_message"
  | "ripcord_disable_blink_customizable_select"
  | "profile_photo_comp"
  | "bulk_leave_channels_from_sidebar"
  | "shorten_team_creation_translations"
  | "retention_redaction_job"
  | "edm_updates_import_to_slack_copy_toggle"
  | "canvas_content_reactions"
  | "lob_channel_acn_token"
  | "hermes_builder_org_level_workflows"
  | "lists_pilot_effective"
  | "lists_pilot_teams"
  | "lists_ga"
  | "lists_pilot"
  | "bk_container_id"
  | "block_trial_team_email_updates"
  | "stripe_upe_bank_debits"
  | "chat_short_snippets"
  | "remove_browser_session_if_ssb"
  | "lists_sub_tasks"
  | "slack_ai_huddle_summary_nudge_banner"
  | "agentforce_enable_streaming"
  | "canvas_readtime"
  | "conversations_leave_recommendations_api"
  | "agentforce_list_accessible_fe"
  | "link_triggers_prompt"
  | "merge_frecency_from_clients"
  | "canvas_ai_overlay_preview"
  | "compact_mode_pref"
  | "huddles_persist_transcript"
  | "mobile_push_payload_prev_msg_ts"
  | "real_time_recap_time_window_determination"
  | "move_channel_tabs_settings"
  | "sidebar_sweeper_custom_sidebar_sections_cta"
  | "show_channel_join_banner_megaphone"
  | "shareable_agent_prompts"
  | "wfb_back_to_basics_eclair_release"
  | "workflow_builder_eol_phase_3"
  | "progressive_scopes"
  | "sidebar_context_menu_restructure"
  | "agentforce_get_agents_by_int_user"
  | "hermes_3p_auth_callback_sfdc_org_validation"
  | "canvas_ghost_text_styled_sections"
  | "agentforce_agent_home"
  | "wfb_hermes_trials"
  | "admin_advisor_fe_v1"
  | "workflow_process_precheck_in_trip_fe"
  | "unified_search"
  | "systems_deprecation_2025_march_phase_three"
  | "todos_no_sidebar"
  | "plat_manage_intg_custom_headers"
  | "workflow_permissions_prompt"
  | "canvas_freemium_m3_p2"
  | "app_settings_org_home_team_support"
  | "huddles_standalone_canvas"
  | "sc_user_invite_validation"
  | "builder_1959"
  | "flagged_content_comment_tweaks"
  | "lists_file_backed_templates"
  | "lists_3puf_coerce_value_to_text"
  | "einst_5108"
  | "canvas_new_user_experience"
  | "enterprise_search_filter_google_drive"
  | "native_ai_summary_tokens_added_no_text_blocks"
  | "native_ai_digest_completed_no_blocks"
  | "native_ai_digest_completed_no_text"
  | "admin_filter_zero_function_connectors"
  | "file_channel_tabs_speedbumps"
  | "slack_ai_recap_remove_mute_onboarding"
  | "android_message_consistency_score_tuning"
  | "android_pilot_multi_group_experiment"
  | "agentforce_thread_delete"
  | "agentforce_feedback_buttons"
  | "sc_remove_full_access_user"
  | "lists_update_metadata_with_version"
  | "agentforce_tab_rail_coachmark"
  | "api_system_function"
  | "shortcuts_gallery"
  | "ai_apps_install_flow_updates"
  | "sfdc_seamless_auth_preview_user_mappings_fe"
  | "wfb_step_duplicate"
  | "systems_deprecation_2025_march_phase_two"
  | "flag_content_translations_v4"
  | "flag_message_transcript_canvas_alert_v2"
  | "new_slack_connect_error"
  | "workflow_entity"
  | "sc_disconnect_external_user"
  | "workflow_composer"
  | "channel_tabs_v5"
  | "canvas_set_reminder_from_date_picker"
  | "agentforce"
  | "app_settings_beta_app_fix"
  | "restrict_away_users_channel_workflow_props"
  | "sfdc_seamless_auth_activate_alert_fe"
  | "canvas_ai_select_and_refine"
  | "pnp_go"
  | "grid_migrations_portal_m2_post_release_updates"
  | "search_files_indexing_dual_cluster"
  | "use_new_resurrected_summary_category"
  | "lists_archive"
  | "ai_consent_banner"
  | "ai_apps_disable_ai_ui_setting"
  | "restructure_ai_feedback_modal"
  | "filter_conversations_menu_updates"
  | "lists_grid_todos_task_tracking_bundle"
  | "solutions_nux"
  | "compliance_hipaa_slackbot_confirmation"
  | "platform_populate_bot_team_id"
  | "slack_ai_seach_banner_dismiss"
  | "agent_skip_workspace_install"
  | "use_case_onboarding_solutions_v2"
  | "pxp2385"
  | "tracing_sampling_rate"
  | "lists_grid_todos_multi_assignee_field"
  | "creator_modifier_search"
  | "frecency_user_pref_desktop"
  | "channel_canvas_titles"
  | "slack_ai_search_files_admin_fe"
  | "canvas_comment_content_improvements"
  | "wfb_ai_prototype"
  | "canvas_use_new_section_highlight_styles"
  | "lists_description"
  | "canvas_comment_file_sharing"
  | "canvas_tab_optimistic_creation"
  | "unpublish_workflow_from_message_action"
  | "lists_channel_tabs_default_view"
  | "help_articles_in_search"
  | "canvas_header_image"
  | "shortcuts_workspace_picker"
  | "huddle_dynamic_rtm_delay"
  | "huddle_audio_init_fixes"
  | "huddles_disable_animations"
  | "grid_migration_portal_m2"
  | "canvas_printing"
  | "slack_ai_end_trial_translations"
  | "gm_onedrive_stable"
  | "sc_workflow_mcp_ga"
  | "one_drive_file_picker_custom_auth"
  | "wfb_back_to_basics_biryani_release"
  | "hydrate_condition_record_labels"
  | "bk_rich_text"
  | "wfsteps_from_apps_deprecation_banner"
  | "list_template_conversions"
  | "agentforce_new_dm_view"
  | "one_drive_amex_security_bug"
  | "wfb_record_id_variable_suggestions"
  | "channel_tabs_peek_open_clog"
  | "lazy_load_files"
  | "focus_thread_on_keydown_and_respect_shortcuts"
  | "canvas_printing_enabled_setting"
  | "wkshp_test"
  | "lists_channel_tabs_default_view_copy_translation"
  | "lists_canvas_column_type"
  | "lazy_load_count"
  | "one_drive_file_picker_v8"
  | "lists_cells_updated_event"
  | "wfb_ai_prototype_v2"
  | "canvas_disable_comment_cleanup"
  | "systems_deprecation_2025_march_phase_one"
  | "lazy_load_canvas"
  | "channel_tab_update_messages"
  | "file_share_unfurls"
  | "silence_file_share_notif_messaging_builtins"
  | "auto_accept_sc_invites_mcp"
  | "adding_is_auto_provisioned_field_fetch_team_users"
  | "client_resync_without_eventlog_history"
  | "snake_case_blocks_actions_api"
  | "desktop_ia4"
  | "tiles"
  | "pxp_2073_plans_page"
  | "ai_apps_consolidate_threads_view"
  | "slack_ai_search_files_fe_fast_follows"
  | "huddles_page_filters"
  | "huddles_link_v2"
  | "app_home_no_home_redirect"
  | "multi_click_button_private_channel_selector"
  | "lists_in_later"
  | "lists_add_cols_via_paste"
  | "workflow_multi_clicks_buttons_phase_2"
  | "ai_apps_launch_coachmarks"
  | "lists_smart_record_fetching"
  | "channel_tabs_nux"
  | "lists_dynamic_row_height"
  | "snake_case_view_apis"
  | "apidocs_no_hero_for_logged_in"
  | "activity_full_width"
  | "canvas_meeting_notes"
  | "android_activity_stop_number_badging_threads"
  | "platform_3p_triggers"
  | "hermes_native_ai_automation"
  | "clips_transcript_preview_display"
  | "huddles_missed_notification"
  | "record_channel_filters_ga"
  | "ai_apps_final_i18n"
  | "huddles_lounge_music_player"
  | "prevent_downgrade_workspace_owner_text_translation"
  | "native_ai_huddle_summary_feedback_buttons"
  | "fe_dead_end_link_modal"
  | "always_show_send_button"
  | "browser_tab_badging"
  | "channel_tagging"
  | "clips_design_improvements"
  | "showcase_best_practices"
  | "huddles_page_ai_summary"
  | "ia4_slash_command_fe"
  | "multiclick_activity_log"
  | "vip_users"
  | "discovery_search_api"
  | "dlp_pre_processing"
  | "native_dlp"
  | "channel_tabs_v5_bookmark_folders"
  | "canvas_placeholder_card_insertion"
  | "canvas_file_change_mark_file_channel_stale"
  | "retention_external_audit_logs_for_mpim_and_dms"
  | "wfb_legacy_signals"
  | "huddles_kte"
  | "email_domain_restriction"
  | "pxp2264"
  | "invites_in_mentions_page_desktop"
  | "log_permissions_info_requests"
  | "slack_ai_recommended_entities"
  | "slack_ai_search_files_fe"
  | "canvas_date_hovercard"
  | "wfb_feat_move_triggers_to_builder"
  | "lists_automations_entrypoints"
  | "synthetic_view_dm_render"
  | "systems_deprecation_windows"
  | "systems_deprecation_blocking_modals"
  | "canvas_transient_section_enhancements"
  | "validate_api_take_args"
  | "canvas_toolbar_performance"
  | "canvas_enable_react_18"
  | "canvas_optimize_controls_rendering"
  | "channel_tabs_files_aria"
  | "builtins_for_reactions"
  | "lists_click_away_from_edit_selects_prev_cell"
  | "hermes_wfb_import_export_fe"
  | "workflow_file_dialog"
  | "two_factor_require_admin_banner"
  | "spaceship_canvas_icon_changes"
  | "slack_native_object_title_unfurl"
  | "self_serve_channel_audit"
  | "seat_expansion_discount_promo"
  | "payment_method_page_intentless_upe"
  | "ia4_compactor"
  | "huddles_multi_device"
  | "canvas_use_inline_comments_for_created_documents"
  | "lists_column_option_submenu"
  | "workflow_templates_can_install_on_provision"
  | "workflow_mgmt_pain_point"
  | "view_header_overflow_borders"
  | "third_party_user_form"
  | "templates_redesign"
  | "secondary_view_container_as_dialog"
  | "hermes_3p_auth_manage_auth_entrypoint"
  | "external_workspaces_add_to_home_default"
  | "fe_user_group_sections_new_badge"
  | "fe_share_message_dialog_refactor"
  | "billable_active_user_export"
  | "help_tips"
  | "help_shareables_tm"
  | "help_navigation"
  | "wfb_open_form_ui_improvements"
  | "native_dlp_text_translation"
  | "lists_tabbing_navigation"
  | "lists_notify_users_v2"
  | "lists_item_threads"
  | "lists_deprecate_colors"
  | "huddles_troubleshooting_v2"
  | "canvas_badging_highlighting"
  | "fe_shortcuts_menu_v3"
  | "ug_ensure_channel_workspace_access"
  | "step_request_in_editor_segment"
  | "mobile_session_duration_enabled"
  | "hermes_give_workflows_permissions_to_post"
  | "hermes_builder_webhook_user_email"
  | "copy_user_group_id"
  | "channel_managment_privacy_options"
  | "sq_sorter_history"
  | "share_single_app_on_call"
  | "search_help_flexplane_link"
  | "sc_cls_inviter_error"
  | "rename_desktop_animation_preference"
  | "private_message_sharing"
  | "legacy_workflows_anon_warning"
  | "huddles_invite_modal_freemium_improvements"
  | "huddles_discovery_calls"
  | "huddles_channel_properties"
  | "aops_5_day_guest_expiration_notifications"
  | "fe_private_to_public_slack_connect_and_visual_updates"
  | "fe_private_public_channel_management"
  | "fe_message_forwarding_m2"
  | "fe_message_forwarding_link_speed_bump"
  | "desktop_delegates_patching"
  | "channel_manager_pilot"
  | "channel_manager_members_view"
  | "channel_manager_ccm"
  | "browsers_autocomplete"
  | "browser_tab_favicon_badging"
  | "better_thread_broadcast_aria_labels"
  | "aria_label_required_translation"
  | "app_launcher_pagination"
  | "a11y_underline_button_link"
  | "a11y_message_replay"
  | "a11y_aria_live_announcer_removal"
  | "ui_gen_message_translations"
  | "permission_importer_handle_all_entities"
  | "native_dlp_violation_db_migration"
  | "better_way_to_work_with_free_teams"
  | "wfb_better_buttons_stable"
  | "checkout_upgrade_all_members_banner"
  | "channel_tabs_v5_files_refresh"
  | "trial_improvements_day_divider"
  | "trial_improvements"
  | "lists_alerts_top_level_badge_push"
  | "slack_ai_sidebar_purchase_cta"
  | "files_favorites"
  | "huddle_invite_cancel_mobile"
  | "restrict_corp_emails_toggle"
  | "analytics_overview_page_update"
  | "channel_tabs_v5_pins_v2"
  | "lists_tabbing_navigation_modal_v2"
  | "ecompl_custom_dlp_text"
  | "lists_unfurls_v2_board_view_preview"
  | "pxp_2063"
  | "desktop_block_file_download_file_info"
  | "self_serve_channel_audit_v2"
  | "saleshome_notification_button_fe"
  | "list_migrate_column_with_data"
  | "lists_user_alerts_for_mentions"
  | "lists_store_refactor"
  | "lists_in_activity_v2"
  | "lists_group_by_saturated_colors"
  | "lists_grid_usability_updates_v2"
  | "lists_grid_usability_updates"
  | "lists_grid_title_animation"
  | "lists_flexpane_v2"
  | "lists_flexpane"
  | "lists_better_column_resize_handlers"
  | "lists_automation_next"
  | "lists_add_row_via_enter"
  | "theming_new_default"
  | "post_deprecation_upsell_primary_cta_team"
  | "post_deprecation_upsell_main"
  | "hermes_enable_automated_triggers_unfurl"
  | "streamlined_session_duration"
  | "huddles_a11y_stop_the_music"
  | "canvas_tab_customization"
  | "canvases_tab_customization"
  | "slack_ai_recap_ga"
  | "megaphone_coachmark_suppression"
  | "slack_ai_nfx_updates_v2"
  | "question_and_recommendation"
  | "flexpane_back_button_v2"
  | "slack_ai_search_manual_trigger"
  | "result_count_toggle"
  | "live_unfurls_desktop"
  | "use_message_blocks_full_attachment"
  | "unfurl_privacy"
  | "express_templates_rich_text"
  | "idsc_session_list_encode_multi"
  | "third_party_user_form_view_error_bk"
  | "help_slider_a11y_translations"
  | "sc_papercuts_workflows"
  | "post_to_canvas_notation"
  | "builder_templates_preview_refactor"
  | "spaceship_canvas_picker_ia4"
  | "canvas_shortcut_command"
  | "optimize_invite_emails_v2"
  | "use_bulk_search"
  | "canvas_toggle_text_in_flex_pane"
  | "onbrd_1483_exp_2"
  | "feat_onboarding_huddles_hover"
  | "onbrd_1483_exp"
  | "canvas_shortcut_commands_reorder"
  | "ia4_workspace_picker_strings"
  | "summary_ai_redesign_iteration"
  | "custom_canvas_template_translation"
  | "feat_workflow_template_wizard"
  | "pnp_intro_ooo_coachmark"
  | "show_badge_standalone"
  | "dynamic_inputs_refactor"
  | "edm_wc_setup_edt_rerunnable"
  | "canvases_badging"
  | "spaceship_huddle_embed"
  | "workspace_context_for_netskope"
  | "ia_bookmarks_next"
  | "chanvas_post_meesage_no_share"
  | "ia4_custom_palettes"
  | "gradients_optional"
  | "sidebar_inverted"
  | "ia4_nfx_grid_workspaces_coachmark"
  | "ia4_more_submenu"
  | "ia4_ws_switcher_rail"
  | "wfb2_activitylogs_in_product_feedback"
  | "gif_picker"
  | "spaceship_unfurl_error_state"
  | "shortcuts_gallery_legacy_ia"
  | "ia4_user_relevant_workspaces_picker"
  | "ia4_feelings_catcher"
  | "canvas_synth_hero_banner_translations"
  | "app_popout_child_windows"
  | "help_articles_ia4"
  | "android_heartbeat_configurations"
  | "message_edit_window"
  | "allow_non_enterprise_analytics"
  | "hermes_bk_design_error_i18n"
  | "object_store_database"
  | "sort_filter_style_change"
  | "sc_cls_channel_invite_copy_visuals"
  | "query_refinement_style_changes"
  | "joiner_redesign"
  | "hermes_workflows_functions_list_pagination"
  | "onbrd_1472"
  | "exp_a11y_education"
  | "query_rewrite_for_file_filters"
  | "remove_unfurl_without_marking_edit"
  | "chat_format_msg_fetch_replies_paged"
  | "one_page_checkout"
  | "shared_bot_changed_experiement"
  | "shared_app_changed_experiment"
  | "import_external_emoji"
  | "recent_shared_files"
  | "ip_asn_allowlist_feature_team"
  | "einst_3319"
  | "channel_sections_dark_read"
  | "huddles_calls_migration_v3"
  | "idsc_saml_auth_consume_typed"
  | "omni_query_reset"
  | "audit_log_details"
  | "huddles_boop_sound"
  | "desktop_block_file"
  | "pad_1132"
  | "gov_slack_experiment"
  | "xws_socket"
  | "checkout_zip_completes_city_and_state"
  | "hermes_oauth_system"
  | "paid_benefits_page_v2"
  | "checkout_std_to_plus_update"
  | "slack_docs_mentions_new_notifications"
  | "reaction_bubble_remove_mrkdwn"
  | "meetings_enabled_zoom"
  | "tsf_deprecation_admin_invite_info"
  | "onedrive_verified_publisher"
  | "email_use_sandboxed_iframe"
  | "link_safety"
  | "product_help_cards"
  | "new_boot_rtm_connect_deux_enterprise"
  | "connect_default_section"
  | "single_file_actions"
  | "new_boot_rtm_connect"
  | "dev_app_home_update_endpoint"
  | "bulk_invites_async_all"
  | "xws"
  | "ext_shared_chan_blck_file_prev"
  | "show_selected_device"
  | "typed_api_imports_create"
  | "invite_to_channel_plus"
  | "send_block_kit_actions_with_nulls"
  | "enterprise_teams_prefs_get"
  | "enterprise_teams_prefs_set"
  | "admin_auth_policy_email_password"
  | "a11y_workspace_tab_better_label"
  | "strictify_ud_scim"
  | "typed_api_enterprise_prefs_get"
  | "enterprise_prefs_setandlock_rollout"
  | "enterprise_prefs_set_rollout"
  | "typed_api_usergroups_disable"
  | "typed_api_usergroups_list"
  | "shared_channels_team_creator_privacy_settings"
  | "salesforce_app_unfurl_no_auth_prompt"
  | "email_classification_grid"
  | "share_modal_drafts"
  | "shared_channels_free_trial"
  | "connect_section_coachmark_badge"
  | "message_builder_migration_teams_creationrequests"
  | "calls_get_media_access_check_windows"
  | "better_app_suggestions_send_auth_suggestions"
  | "invite_to_channel_by_email"
  | "vitess_flannel_channel_encode_user_query_mode"
  | "slack_docs_mentions"
  | "onboarding_messaging_refresh"
  | "email_rendering_scaling"
  | "signinapicontroller_mdm"
  | "invite_to_channel_grid"
  | "remove_two_factor_user_settings"
  | "pxp265_free_team_message_logging"
  | "wfb_teampicker_2"
  | "composer_image_nav"
  | "switchy_no_sorty"
  | "streamline_switchy_logic"
  | "get_started_revamp_existing_users_v2"
  | "social_team_segmentation_visitor_gate"
  | "slackbot_event_banners"
  | "ios_mobile_team_creation_revamp_v_1"
  | "tl_slack_vs_teams"
  | "cust_acq_signed_in_hp_revamped"
  | "blog_cvr_benchmarking"
  | "hp_revamp_25_exp"
  | "admin_email_verification_v1_translations"
  | "pricing_ctas_fill"
  | "mobile_web_optimizations"
  | "mobile_web_optimizations_row"
  | "cust_acq_get_started_free_copy"
  | "activate_browser_deprecation_warning_february_2026"
  | "workflow_builder"
  | "ios_metrics_sample_rate"
  | "cust_acq_slackbot"
  | "cust_acq_plans_banner_sparkles"
  | "teams_compete"
  | "get_started_opt_intl_new_user"
  | "get_started_opt_intl_existing_user"
  | "app_directory_connectors_collection"
  | "mrbeast_campaign"
  | "newxp_12562_coop_header_fix"
  | "revamp_translation"
  | "aswebauth_cookie_session"
  | "agents_demo"
  | "recaptcha_enterprise_migration"
  | "partners_contact"
  | "integrations_update"
  | "invite_captcha"
  | "sticky_ctas"
  | "phone_number_de"
  | "phone_number_fr"
  | "phone_number_au"
  | "modular_pages_phase_3"
  | "phone_number_ko"
  | "phone_number_ie"
  | "phone_number_jp"
  | "agent_demo_contact"
  | "july1_launch"
  | "miro_marketplace"
  | "channels_update"
  | "spam_email_recaptcha_v3"
  | "signin_design_refresh"
  | "creator_landing_view_refactor"
  | "enable_optimizely_webapp"
  | "innovations_lp"
  | "enterprise_search_lp"
  | "sticky_fyp_cta"
  | "downloads_launch"
  | "activation_enterprise_signin_primer"
  | "screen_text_2fa"
  | "contact_sales_dept_removal"
  | "search_zd_vs_solr"
  | "paid_lp_expand"
  | "new_paid_lp"
  | "slack_elevate_launch"
  | "out_of_office_xmas_jp"
  | "out_of_office_xmas"
  | "new_gated_demo"
  | "customer_awards_launch"
  | "slack_ie_address"
  | "proj_brand_customer_stories_lp"
  | "digital_first_lightning_strike_custacq"
  | "cust_acq_partners_template"
  | "community_launch"
  | "fetch_intents_perf"
  | "huddles_device_preferred_label"
  | "entfe_1192_coachmark"
  | "shareable_prompt_slackbot"
  | "huddles_preview_v2"
  | "af_search_add_threaded_replies_in_context"
  | "slack_ai_request_to_purchase"
  | "batch_trace_reporting"
  | "edit_attachments"
  | "inproduct_team_creation"
  | "npo_techsoup_token_process"
  | "omni_unified_filter_tokens"
  | "autocomplete_frequently_used_emojis_frecency"
  | "desktop_set_system_notification_playback"
  | "new_team_launchpad"
  | "lists_no_virtualized_list_component"
  | "activity_inbox"
  | "simplify_workspace_invite_modal"
  | "searcher_class_abort_controller_v2"
  | "pxp3421"
  | "omni_quick_message_results"
  | "pro_upgrade_pocket_guide_v2"
  | "bus_plus_contextualize_upgrade_modal"
  | "biz_plus_admin_cta_optmizations"
  | "decoration_default_channels_experiment"
  | "slackbot_upgrdmsg_impressions"
  | "wfb_ai_step_direct_markdown_to_llm"
  | "activity_inbox_exposure_point_3"
  | "activity_inbox_exposure_point_1"
  | "client_admin_gear_menu"
  | "simple_shared_sections_v2"
  | "searchy_single_mode_2"
  | "canvas_ai_channel_tab"
  | "canvas_ai_overlay_suggestions_v4"
  | "files_explorer_prototype"
  | "slack_crm_tenured_teams"
  | "auth_redir_mobile"
  | "pnp_paid_team_trials"
  | "invite_cta_experiment"
  | "create_channel_sections_with_channels"
  | "shareable_sections"
  | "dm_recency_sort_rollout"
  | "arc_web_toggle_1"
  | "activate_solutions_trial_entrypoints"
  | "pnp_mobile_notifications"
  | "jira_pad_880_exp_1"
  | "jira_pad_880_exp_2"
  | "web_identity_links"
  | "feature_connected_accounts"
  | "mobile_large_team_joiner_onboarding"
  | "new_boot_rtm_connect_deux"
  | "omnipicker_search_api"
  | "slack_crm_sidebar_variants"
;

export type ExperimentsGetByUserResponse = {
  ok: true;
  assignments: Record<ExperimentsGetByUserAssignmentsName, ExperimentsGetByUserAssignmentsEntry>;
  config_version_ts: number;
};

export type FeatureUsageInfoResponse = {
  ok: true;
  total_usages: number;
  usages_remaining: number;
  reset_time: number;
};

export type FeaturesAccessPoliciesListResponse = {
  ok: true;
  feature_policies: {
    analytics_all_channels_in_org__view: {
      is_enabled: boolean;
      reason?: string;
      name: string;
    };
    canvas_standalone__edit: {
      is_enabled: boolean;
      name: string;
    };
    canvas_standalone__create: {
      is_enabled: boolean;
      name: string;
    };
    canvas_channel__delete: {
      is_enabled: boolean;
      reason: string;
      name: string;
    };
    canvas_channel__edit: {
      is_enabled: boolean;
      name: string;
    };
    canvas_channel__create: {
      is_enabled: boolean;
      name: string;
    };
    canvas_huddle__edit: {
      is_enabled: boolean;
      name: string;
    };
    canvas_huddle__create: {
      is_enabled: boolean;
      name: string;
    };
    webhook_trigger__create: {
      is_enabled: boolean;
      name: string;
    };
    workflow_connector__use: {
      is_enabled: boolean;
      name: string;
    };
    rosi_app__create: {
      is_enabled: boolean;
      name: string;
    };
    hermes__write: {
      is_enabled: boolean;
      name: string;
    };
    hermes__read: {
      is_enabled: boolean;
      name: string;
    };
    trigger__trip: {
      is_enabled: boolean;
      name: string;
    };
    workflow_custom_steps__use: {
      is_enabled: boolean;
      name: string;
    };
    workflow_conditional_steps__use: {
      is_enabled: boolean;
      reason?: string;
      name: string;
    };
    workflow_repeater_steps__use: {
      is_enabled: boolean;
      reason?: string;
      name: string;
    };
    slack_ai__access: {
      is_enabled: boolean;
      reason: string;
      name: string;
    };
    slack_ai_exclude_from_slack_ai_property__access: {
      is_enabled: boolean;
      reason?: string;
      name: string;
    };
    huddle__start: {
      is_enabled: boolean;
      name: string;
    };
    user_groups__manage: {
      is_enabled: boolean;
      name: string;
    };
    slack_connect_dm__access: {
      is_enabled: boolean;
      name: string;
    };
    slack_connect_channel__access: {
      is_enabled: boolean;
      name: string;
    };
    salesforce__access: {
      is_enabled: boolean;
      name: string;
    };
    salesforce_multi_org__access: {
      is_enabled: boolean;
      name: string;
    };
    salesforce_standalone_lists__access: {
      is_enabled: boolean;
      reason?: string;
      name: string;
    };
    salesforce_seamless_auth__access: {
      is_enabled: boolean;
      reason: string;
      name: string;
    };
    salesforce_data_fields__access: {
      is_enabled: boolean;
      reason?: string;
      name: string;
    };
    salesforce_org_slack_first_crm__access: {
      is_enabled: boolean;
      reason: string;
      name: string;
    };
    slack_ai_apps_assistant_view__access: {
      is_enabled: boolean;
      name: string;
    };
    audit_log__access: {
      is_enabled: boolean;
      reason?: string;
      name: string;
    };
    audit_log_addon__access: {
      is_enabled: boolean;
      reason: string;
      name: string;
    };
    discovery_api__access: {
      is_enabled: boolean;
      reason?: string;
      name: string;
    };
    discovery_api_addon__access: {
      is_enabled: boolean;
      reason: string;
      name: string;
    };
    manage_channel_posting__access: {
      is_enabled: boolean;
      reason?: string;
      name: string;
    };
    search_query_audit__access: {
      is_enabled: boolean;
      reason?: string;
      name: string;
    };
  };
};

export type FilesCanUndeleteResponse = {
  ok: true;
  can_undelete: boolean;
  file: {
    id: string;
    title: string;
    date_delete: number;
  };
};

export type FilesCloseResponse = {
  ok: true;
};

export type FilesCompleteUploadResponse = {
  ok: true;
  files: Array<{
    id: string;
    title: string;
    subtype?: string;
  }>;
  client_msg_id?: string;
};

export type FilesDeleteResponse = {
  ok: true;
};

export type FilesDisableCrossWorkspaceLinkSharingResponse = {
  ok: true;
  response: {
    status: string;
    file_id: string;
  };
};

export type FilesDocsFetchAccessLevelForUsersResponse = {
  ok: true;
  users: Array<{
    user_id: string;
    is_explicitly_shared_with: boolean;
    access: string;
  }>;
};

export type FilesEditResponse = {
  ok: true;
  file: {
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    media_display_type?: string;
    thumb_64?: string;
    thumb_80?: string;
    thumb_360?: string;
    thumb_360_w?: number;
    thumb_360_h?: number;
    thumb_480?: string;
    thumb_480_w?: number;
    thumb_480_h?: number;
    thumb_160?: string;
    thumb_720?: string;
    thumb_720_w?: number;
    thumb_720_h?: number;
    thumb_800?: string;
    thumb_800_w?: number;
    thumb_800_h?: number;
    thumb_960?: string;
    thumb_960_w?: number;
    thumb_960_h?: number;
    thumb_1024?: string;
    thumb_1024_w?: number;
    thumb_1024_h?: number;
    original_w?: number;
    original_h?: number;
    thumb_tiny?: string;
    permalink: string;
    permalink_public: string;
    alt_txt?: string;
    comments_count: number;
    is_starred: boolean;
    shares: {
      private?: Record<string, unknown>;
    };
    channels: unknown[];
    groups: string[];
    ims: string[];
    has_more_shares: boolean;
    has_rich_preview: boolean;
    file_access: string;
    url_static_preview?: string;
    quip_thread_id?: string;
    updated?: number;
    update_notification?: number;
    access?: string;
    private_channels_with_file_access_count?: number;
    dm_mpdm_users_with_file_access?: Array<{
      user_id: string;
      access: string;
    }>;
    teams_shared_with?: string[];
    is_restricted_sharing_enabled?: boolean;
    org_or_workspace_access?: string;
    title_blocks?: Array<{
      type: string;
      block_id: string;
    }>;
    canvas_creator_id?: string;
    team_pref_version_history_enabled?: boolean;
    canvas_printing_enabled?: boolean;
    canvas_template_mode?: string;
    template_conversion_ts?: number;
    template_converter_id?: string;
    is_ai_suggested?: boolean;
  };
};

export type FilesEnableCrossWorkspaceLinkSharingResponse = {
  ok: true;
  response: {
    status: string;
    access_level: string;
    file_id: string;
  };
};

export type FilesEnableRestrictedSharingResponse = {
  ok: true;
};

export type FilesFavoritesAddResponse = {
  ok: true;
};

export type FilesFavoritesListResponse = {
  ok: true;
  favorites: unknown[];
  file_ids: string[];
};

export type FilesGetMetadataResponse = {
  ok: true;
  private_channel_count: number;
};

export type FilesGetOverviewResponse = {
  ok: true;
  users_count: number;
  channels_count: number;
  files_count: number;
  visible_users: unknown[];
  visible_channels: unknown[];
  automations_count: number;
  max_users_counted: boolean;
  max_channels_counted: boolean;
  max_files_counted: boolean;
  teams_shared_with: string[];
};

export type FilesGetSharesResponse = {
  ok: true;
  tab_shares: {
    count: number;
    shares: {
      public?: Record<string, unknown>;
      private?: Record<ChannelId, Array<{
        reply_users: unknown[];
        reply_users_count: number;
        reply_count: number;
        ts: string;
        channel_name: string;
        team_id: string;
        access: string;
        share_user_id: string;
        source: string;
        is_silent_share: boolean;
      }>>;
    };
  };
  conversation_shares: {
    count: number;
    shares: {
      public?: Record<ChannelId, Array<{
        reply_users: unknown[];
        reply_users_count: number;
        reply_count: number;
        ts: string;
        channel_name: string;
        team_id: string;
        access: string;
        share_user_id: string;
        source: string;
        is_silent_share: boolean;
      }>>;
      private?: Record<string, unknown>;
    };
  };
  file_channel_shares: {
    count: number;
    shares: Record<string, unknown>;
  };
  viewer_count?: number;
};

export type FilesGetUploadURLResponse = {
  ok: true;
  file: string;
  upload_url: string;
};

export type FilesInfoResponse = {
  ok: true;
  file: {
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    permalink: string;
    permalink_public: string;
    url_static_preview?: string;
    quip_thread_id?: string;
    updated: number;
    update_notification?: number;
    canvas_readtime?: number;
    favorites: Array<{
      position: string;
      collection_id: string;
      collection_name: string;
    }>;
    is_starred: boolean;
    shares: {
      private?: Record<ChannelId | DmId, Array<{
        reply_users: unknown[];
        reply_users_count: number;
        reply_count: number;
        ts: string;
        share_user_id: string;
        source: string;
        is_silent_share: boolean;
      }>>;
      public: Record<ChannelId, Array<{
        reply_users: string[];
        reply_users_count: number;
        reply_count: number;
        ts: string;
        thread_ts: string;
        latest_reply: string;
        channel_name: string;
        team_id: string;
        access: string;
        share_user_id: string;
        source: string;
        is_silent_share: boolean;
      }>>;
    };
    channels: string[];
    groups: string[];
    ims: string[];
    has_more_shares: boolean;
    access: string;
    private_channels_with_file_access_count: number;
    dm_mpdm_users_with_file_access: Array<{
      user_id: string;
      access: string;
    }>;
    teams_shared_with: string[];
    is_restricted_sharing_enabled: boolean;
    has_rich_preview: boolean;
    file_access: string;
    org_or_workspace_access: string;
    title_blocks?: Array<{
      type: string;
      block_id: string;
    }>;
    canvas_creator_id?: string;
    team_pref_version_history_enabled?: boolean;
    canvas_printing_enabled?: boolean;
    is_ai_suggested: boolean;
    last_read: number;
    show_badge: boolean;
    comments_count: number;
    saved?: {
      is_archived: boolean;
      date_completed: number;
      state: string;
    };
    list_limits?: {
      over_row_maximum: boolean;
      row_count_limit: number;
      row_count: number;
      archived_row_count: number;
      over_column_maximum: boolean;
      column_count: number;
      column_count_limit: number;
      over_view_maximum: boolean;
      view_count: number;
      view_count_limit: number;
      max_attachments_per_cell: number;
    };
    list_metadata?: {
      schema: Array<{
        id: string;
        name: string;
        key: string;
        type: string;
        is_primary_column: boolean;
        options?: {
          format?: string;
          default_value?: string;
          show_member_name?: boolean;
          notify_users?: boolean;
          precision?: number;
          date_format?: string;
          choices?: Array<{
            value: string;
            label: string;
            color: string;
          }>;
          default_value_typed?: {
            select: string[];
          };
        };
      }>;
      views: Array<{
        id: string;
        name: string;
        type: string;
        is_locked: boolean;
        position: string;
        columns: Array<{
          visible: boolean;
          key: string;
          id: string;
          position: string;
          width?: number;
          should_wrap_text?: boolean;
        }>;
        date_created: number;
        created_by: string;
        stick_column_left: boolean;
        is_all_items_view?: boolean;
        default_view_key?: string;
        show_completed_items?: boolean;
        sorts?: Array<{
          key: string;
          ascending: boolean;
          column_id: string;
        }>;
        filters?: Array<{
          key: string;
          operator: string;
          values: string[];
          typed_values: unknown[];
          column_id: string;
        }>;
        info_column_filters?: unknown[];
        grouping?: {
          group_by: string;
          group_by_column_id: string;
        };
      }>;
      integrations: unknown[];
      icon: string;
      description: string;
      description_blocks: Array<{
        type: string;
        block_id: string;
      }>;
      is_trial: boolean;
      subtask_schema: Array<{
        id: string;
        name: string;
        key: string;
        type: string;
        is_primary_column: boolean;
        options?: {
          format: string;
        };
      }>;
      creation_source: {
        type: string;
        reference_id?: string;
      };
      todo_mode?: boolean;
      default_view: string;
    };
    last_editor?: string;
    list_csv_download_url?: string;
  };
  comments: unknown[];
  paging: {
    count: number;
    total: number;
    page: number;
    pages: number;
  };
};

export type FilesListResponse = {
  ok: true;
  files: Array<{
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    permalink: string;
    permalink_public: string;
    url_static_preview?: string;
    quip_thread_id?: string;
    updated: number;
    update_notification?: number;
    canvas_readtime?: number;
    canvas_creator_id?: string;
    title_blocks?: Array<{
      type: string;
      block_id: string;
    }>;
    channels: unknown[];
    groups: string[];
    ims: string[];
    teams_shared_with: string[];
    is_restricted_sharing_enabled: boolean;
    access: string;
    comments_count: number;
    is_ai_suggested: boolean;
    last_read?: number;
    show_badge: boolean;
    list_limits?: {
      over_row_maximum: boolean;
      row_count_limit: number;
      row_count: number;
      archived_row_count: number;
      over_column_maximum: boolean;
      column_count: number;
      column_count_limit: number;
      over_view_maximum: boolean;
      view_count: number;
      view_count_limit: number;
      max_attachments_per_cell: number;
    };
    list_metadata?: {
      schema: Array<{
        id: string;
        name: string;
        key: string;
        type: string;
        is_primary_column: boolean;
        options?: {
          max?: number;
          choices?: Array<{
            value: string;
            label: string;
            color: string;
          }>;
          format?: string;
          default_value?: string;
          default_value_typed?: {
            select: string[];
          };
          precision?: number;
          show_member_name?: boolean;
          notify_users?: boolean;
          date_format?: string;
        };
      }>;
      views: Array<{
        id: string;
        name: string;
        type: string;
        is_locked: boolean;
        position: string;
        columns: Array<{
          visible: boolean;
          key: string;
          id: string;
          position: string;
          width?: number;
          should_wrap_text?: boolean;
        }>;
        date_created: number;
        created_by: string;
        stick_column_left: boolean;
        is_all_items_view: boolean;
        default_view_key?: string;
        show_completed_items?: boolean;
        sorts?: Array<{
          key: string;
          ascending: boolean;
          column_id: string;
        }>;
        grouping?: {
          group_by: string;
          group_by_column_id: string;
        };
        filters?: Array<{
          key: string;
          operator: string;
          values: string[];
          typed_values: unknown[];
          column_id: string;
        }>;
        info_column_filters?: unknown[];
      }>;
      integrations: unknown[];
      icon: string;
      description: string;
      description_blocks: Array<{
        type: string;
        block_id: string;
      }>;
      is_trial: boolean;
      subtask_schema: Array<{
        id: string;
        name: string;
        key: string;
        type: string;
        is_primary_column: boolean;
        options?: {
          format: string;
          default_value?: null;
          show_member_name?: boolean;
        };
      }>;
      creation_source: {
        type: string;
        reference_id: string;
      };
      todo_mode: boolean;
      default_view: string;
    };
    last_editor?: string;
    list_csv_download_url?: string;
    media_display_type?: string;
    thumb_64?: string;
    thumb_80?: string;
    thumb_360?: string;
    thumb_360_w?: number;
    thumb_360_h?: number;
    thumb_480?: string;
    thumb_480_w?: number;
    thumb_480_h?: number;
    thumb_160?: string;
    thumb_720?: string;
    thumb_720_w?: number;
    thumb_720_h?: number;
    thumb_800?: string;
    thumb_800_w?: number;
    thumb_800_h?: number;
    thumb_960?: string;
    thumb_960_w?: number;
    thumb_960_h?: number;
    thumb_1024?: string;
    thumb_1024_w?: number;
    thumb_1024_h?: number;
    original_w?: number;
    original_h?: number;
    thumb_tiny?: string;
    thumb_pdf?: string;
    thumb_pdf_w?: number;
    thumb_pdf_h?: number;
    favorites?: Array<{
      position: string;
      collection_id: string;
      collection_name: string;
    }>;
    canvas_template_mode?: string;
    template_conversion_ts?: number;
    template_converter_id?: string;
  }>;
  paging: {
    count: number;
    total: number;
    page: number;
    pages: number;
  };
};

export type FilesMarkReadResponse = {
  ok: true;
};

export type FilesOpenResponse = {
  ok: true;
  viewers: Array<{
    user_id: string;
    date_created: number;
    date_updated: number;
    is_focused: boolean;
  }>;
  should_subscribe_and_ping: boolean;
};

export type FilesPingResponse = {
  ok: true;
  viewers: Array<{
    user_id: string;
    date_created: number;
    date_updated: number;
    is_focused: boolean;
  }>;
  should_subscribe_and_ping: boolean;
};

export type FilesRecentlyDeletedResponse = {
  ok: true;
  files: unknown[];
};

export type FilesRetranscribeResponse = {
  ok: true;
};

export type FilesRevokePermissionResponse = {
  ok: true;
};

export type FilesRevokePublicURLResponse = {
  ok: true;
  file: {
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    media_display_type: string;
    thumb_64: string;
    thumb_80: string;
    thumb_360: string;
    thumb_360_w: number;
    thumb_360_h: number;
    thumb_480: string;
    thumb_480_w: number;
    thumb_480_h: number;
    thumb_160: string;
    original_w: number;
    original_h: number;
    thumb_tiny: string;
    permalink: string;
    permalink_public: string;
    comments_count: number;
    is_starred: boolean;
    shares: {
      private: Record<string, unknown>;
    };
    channels: unknown[];
    groups: string[];
    ims: unknown[];
    has_more_shares: boolean;
    has_rich_preview: boolean;
    file_access: string;
  };
};

export type FilesShareResponse = {
  ok: true;
  file_msg_ts: string;
};

export type FilesSharedPublicURLResponse = {
  ok: true;
  file: {
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    media_display_type: string;
    thumb_64: string;
    thumb_80: string;
    thumb_360: string;
    thumb_360_w: number;
    thumb_360_h: number;
    thumb_480: string;
    thumb_480_w: number;
    thumb_480_h: number;
    thumb_160: string;
    original_w: number;
    original_h: number;
    thumb_tiny: string;
    permalink: string;
    permalink_public: string;
    comments_count: number;
    is_starred: boolean;
    shares: {
      private: Record<string, unknown>;
    };
    channels: unknown[];
    groups: string[];
    ims: unknown[];
    has_more_shares: boolean;
    has_rich_preview: boolean;
    file_access: string;
  };
};

export type FilesUpdatePermissionResponse = {
  ok: true;
  failed_to_update_channel_ids: unknown[];
};

export type FunctionsDistributionsPermissionsListResponse = {
  ok: true;
  distribution_type: string;
  permission_type: string;
  users: Array<{
    user_id: string;
    username: string;
  }>;
};

export type FunctionsDistributionsPermissionsSetResponse = {
  ok: true;
  distribution_type: string;
  permission_type: string;
};

export type FunctionsGetResponse = {
  ok: true;
  functions: unknown[];
};

export type FunctionsListResponse = {
  ok: true;
  functions: unknown[];
  response_metadata: {
    next_cursor: string;
  };
};

export type FunctionsShortcutsCopyResponse = {
  ok: true;
  available_data: Record<string, {
    type: string;
    name: string;
    title: string;
    description: string;
    is_hidden: boolean;
    source: string;
    source_id: string;
  }>;
  decorated_workflow: {
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<string, unknown>;
    steps: Array<{
      id: string;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
            salesforce?: {
              type: string;
            };
          };
          maxLength?: number;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        form_enabled: boolean;
      };
      inputs: {
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        fields?: {
          value: {
            required: string[];
          };
          hidden: boolean;
          locked: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      outputs: string[];
      available_data: string[];
      step_type: string;
      type: string;
      is_pristine: boolean;
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    is_valid: boolean;
  };
  trigger: {
    id: string;
    function: {
      id: string;
      callback_id: string;
      title: string;
      description: string;
      type: string;
      input_parameters: unknown[];
      output_parameters: unknown[];
      product_level_availability: {
        is_available: boolean;
        available_to: string;
      };
      category_id: string;
      category_label: string;
      app_id: string;
      app: {
        id: string;
        name: string;
        icons: {
          image_32: string;
          image_48: string;
          image_64: string;
          image_72: string;
        };
        is_workflow_app: boolean;
        sales_home_workflow_app_type: number;
      };
      date_created: number;
      date_released: number;
      date_updated: number;
      date_deleted: number;
      form_enabled: boolean;
      workflow_id: string;
    };
    inputs: Record<string, unknown>;
    outputs: Record<string, {
      type: string;
      name: string;
      title: string;
      is_required: boolean;
      description: string;
    }>;
    available_data: Record<string, {
      type: string;
      name: string;
      title: string;
      is_required: boolean;
      description: string;
    }>;
    date_created: number;
    date_updated: number;
    owning_team_id: string;
    type: string;
    subtype: string;
    name: string;
    description: string;
    share_url: string;
    channel_ids: string[];
  };
};

export type FunctionsWorkflowsDeleteResponse = {
  ok: true;
};

export type FunctionsWorkflowsExportResponse = {
  ok: true;
  workflow: {
    id: string;
    title: string;
    description: string;
    icon: string;
    input_parameters: Record<string, unknown>;
    steps: Array<{
      id: string;
      function_id: string;
      inputs: {
        message?: {
          hidden: boolean;
          locked: boolean;
          value: Array<{
            type: string;
          }>;
        };
        user_id?: {
          hidden: boolean;
          locked: boolean;
          value: string;
        };
        interactive_blocks?: {
          hidden: boolean;
          locked: boolean;
          value: Array<{
            type: string;
          }>;
        };
        title?: {
          hidden: boolean;
          locked: boolean;
          value: string;
        };
        fields?: {
          hidden: boolean;
          locked: boolean;
          value: {
            required: string[];
          };
        };
        interactivity?: {
          hidden: boolean;
          locked: boolean;
          value: string;
        };
        channel_id?: {
          hidden: boolean;
          locked: boolean;
          value: string;
        };
      };
    }>;
  };
  triggers: Array<{
    name: string;
    type: string;
    inputs: Record<string, unknown>;
  }>;
};

export type FunctionsWorkflowsFindWorkflowForBotUsersResponse = {
  ok: true;
  workflow_apps: unknown[];
  legacy_workflow_actions: unknown[];
};

export type FunctionsWorkflowsGetResponse = {
  ok: true;
  workflow: {
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<WorkflowTriggerId, {
      type: string;
      name: string;
      description: string;
      title: string;
      is_required: boolean;
    }>;
    steps: Array<{
      id: string;
      function_id: string;
      inputs: {
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        interactivity_configuration?: {
          value: {
            actions: Record<string, {
              allowed_entities: {
                member_ids: string[];
              };
              is_button_multi_click: boolean;
              is_mutually_exclusive: boolean;
            }>;
          };
          hidden: boolean;
          locked: boolean;
        };
        user_ids?: {
          value: string[];
          hidden: boolean;
          locked: boolean;
        };
        channel_ids?: {
          value: string[];
          hidden: boolean;
          locked: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        fields?: {
          value: {
            required: unknown[];
          };
          hidden: boolean;
          locked: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        usergroup_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      type: string;
      is_pristine: boolean;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          title: string;
          description: string;
          is_required?: boolean;
          is_hidden?: boolean;
          items?: {
            type: string;
            nullable?: boolean;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
          };
          maxItems?: number;
          minItems?: number;
          hint?: string;
          maxLength?: number;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          description: string;
          is_required?: boolean;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        form_enabled: boolean;
      };
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    last_published_version_id?: string;
    last_published_date?: string;
    bot_user_id?: string;
  };
  installation_count: number;
};

export type FunctionsWorkflowsGetIsRestrictedResponse = {
  ok: true;
  is_restricted: boolean;
  restricted_by_connector_steps_only: boolean;
};

export type FunctionsWorkflowsGetLatestResponse = {
  ok: true;
  available_data: Record<string, {
    type: string;
    name: string;
    title: string;
    description: string;
    is_hidden: boolean;
    source: string;
    source_id: string;
  }>;
  decorated_workflow: {
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<string, unknown>;
    steps: Array<{
      id: string;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
            salesforce?: {
              type: string;
            };
          };
          maxLength?: number;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        form_enabled: boolean;
      };
      inputs: {
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
          is_localizable: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
          is_localizable: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
          is_localizable: boolean;
        };
        fields?: {
          value: {
            required: string[];
          };
          hidden: boolean;
          locked: boolean;
          is_localizable: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      outputs: string[];
      available_data: string[];
      step_type: string;
      type: string;
      is_pristine: boolean;
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    last_published_version_id: string;
    last_published_date: string;
    bot_user_id: string;
    is_valid: boolean;
  };
};

export type FunctionsWorkflowsImportResponse = {
  ok: true;
  available_data: Record<string, {
    type: string;
    name: string;
    title: string;
    description: string;
    is_hidden: boolean;
    source: string;
    source_id: string;
  }>;
  decorated_workflow: {
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<string, unknown>;
    steps: Array<{
      id: string;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
            salesforce?: {
              type: string;
            };
          };
          maxLength?: number;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        form_enabled: boolean;
      };
      inputs: {
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        fields?: {
          value: {
            required: string[];
          };
          hidden: boolean;
          locked: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      outputs: string[];
      available_data: string[];
      step_type: string;
      type: string;
      is_pristine: boolean;
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    is_valid: boolean;
  };
};

export type FunctionsWorkflowsListResponse = {
  ok: true;
  workflows: Array<{
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<WorkflowTriggerId, {
      type: string;
      name: string;
      description: string;
      title: string;
    }>;
    steps: Array<{
      id: string;
      function_id: string;
      inputs: {
        user?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
          is_localizable?: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
          is_localizable?: boolean;
        };
        interactivity_configuration?: {
          value: {
            actions: Record<string, {
              allowed_entities: {
                member_ids: string[];
              };
              is_button_multi_click: boolean;
              is_mutually_exclusive: boolean;
            }>;
          };
          hidden: boolean;
          locked: boolean;
        };
        user_ids?: {
          value: string[];
          hidden: boolean;
          locked: boolean;
        };
        channel_ids?: {
          value: string[];
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        usergroup_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
          is_localizable?: boolean;
        };
        fields?: {
          value: {
            required: string[];
          };
          hidden: boolean;
          locked: boolean;
          is_localizable?: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        action?: {
          value: string;
          hidden: boolean;
          locked: boolean;
          label: {
            prepend: string;
          };
        };
        content?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        canvas_tab?: {
          value: string;
          hidden: boolean;
          locked: boolean;
          label: Record<string, unknown>;
        };
        canvas_update_type?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        canvas_tab_section_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
          label: {
            canvas: string;
          };
        };
        message_context?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      type: string;
      is_pristine: boolean;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          description: string;
          title: string;
          is_required: boolean;
          hint?: string;
          is_hidden?: boolean;
          items?: {
            type: string;
            nullable?: boolean;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
            salesforce?: {
              type: string;
            };
          };
          maxItems?: number;
          minItems?: number;
          maxLength?: number;
          default?: string;
          render_condition?: {
            is_required: boolean;
            operator: string;
            conditions: Array<{
              type: string;
              parameter_name: string;
              value?: string;
            }>;
          };
          dynamic_options?: {
            function: string;
            inputs: {
              channel_id?: {
                value: string;
              };
              canvas_id?: {
                value: string;
              };
              canvas_tab?: {
                value: string;
              };
            };
            options: {
              target_array: {
                type: string;
                value: string;
              };
              value_path: string;
              label_path: string;
            };
          };
          choices?: Array<{
            title: string;
            value: string;
            description: string;
          }>;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        app_id?: string;
        app?: {
          id: string;
          name: string;
          icons: {
            image_32: string;
            image_48: string;
            image_64: string;
            image_72: string;
          };
          is_workflow_app: boolean;
          sales_home_workflow_app_type: number;
        };
        date_created?: number;
        date_released?: number;
        date_updated?: number;
        date_deleted?: number;
        form_enabled: boolean;
      };
      steps?: Array<{
        id: string;
        function_id: string;
        inputs: Record<string, unknown>;
        type: string;
        is_pristine: boolean;
        function: {
          id: string;
          callback_id: string;
          title: string;
          description: string;
          type: string;
          input_parameters: unknown[];
          output_parameters: unknown[];
          product_level_availability: {
            is_available: boolean;
            available_to: string;
          };
          category_id: string;
          category_label: string;
        };
      }>;
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    last_published_version_id?: string;
    last_published_date?: string;
    bot_user_id?: string;
  }>;
  workflow_triggers: Record<string, unknown>;
  response_metadata: {
    next_cursor: string;
  };
};

export type FunctionsWorkflowsPermissionsCopyListResponse = {
  ok: true;
  permission_type: string;
};

export type FunctionsWorkflowsPermissionsCopySetResponse = {
  ok: true;
  permission_type: string;
};

export type FunctionsWorkflowsPublishResponse = {
  ok: true;
  available_data: Record<string, {
    type: string;
    name: string;
    title: string;
    description: string;
    is_hidden: boolean;
    source: string;
    source_id: string;
  }>;
  decorated_workflow: {
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<string, unknown>;
    steps: Array<{
      id: string;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
            salesforce?: {
              type: string;
            };
          };
          maxLength?: number;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        form_enabled: boolean;
      };
      inputs: {
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        fields?: {
          value: {
            required: string[];
          };
          hidden: boolean;
          locked: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      outputs: string[];
      available_data: string[];
      step_type: string;
      type: string;
      is_pristine: boolean;
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    last_published_version_id: string;
    last_published_date: string;
    bot_user_id: string;
    is_valid: boolean;
  };
};

export type FunctionsWorkflowsStepsAddResponse = {
  ok: true;
  available_data: Record<string, {
    type: string;
    name: string;
    title: string;
    description: string;
    is_hidden: boolean;
    source: string;
    source_id: string;
  }>;
  decorated_workflow: {
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<string, unknown>;
    steps: Array<{
      id: string;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
            salesforce?: {
              type: string;
            };
          };
          maxLength?: number;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        form_enabled: boolean;
      };
      inputs: {
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        fields?: {
          value: {
            required: string[];
          };
          hidden: boolean;
          locked: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      outputs: string[];
      available_data: string[];
      step_type: string;
      type: string;
      is_pristine: boolean;
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    is_valid: boolean;
  };
};

export type FunctionsWorkflowsStepsDeleteResponse = {
  ok: true;
  available_data: Record<string, {
    type: string;
    name: string;
    title: string;
    description: string;
    is_hidden: boolean;
    source: string;
    source_id: string;
  }>;
  decorated_workflow: {
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<string, unknown>;
    steps: Array<{
      id: string;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
            salesforce?: {
              type: string;
            };
          };
          maxLength?: number;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        form_enabled: boolean;
      };
      inputs: {
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        fields?: {
          value: {
            required: string[];
          };
          hidden: boolean;
          locked: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      outputs: string[];
      available_data: string[];
      step_type: string;
      type: string;
      is_pristine: boolean;
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    is_valid: boolean;
  };
};

export type FunctionsWorkflowsStepsListResponse = {
  ok: true;
  steps_versions: Array<{
    title: string;
    workflow_id: string;
    step_id: string;
    is_deleted: boolean;
    workflow_version_created: string;
    inputs: {
      title: {
        value: string;
        hidden: boolean;
        locked: boolean;
      };
      fields: {
        value: {
          required: string[];
        };
        hidden: boolean;
        locked: boolean;
      };
      interactivity: {
        value: string;
        hidden: boolean;
        locked: boolean;
      };
    };
  }>;
};

export type FunctionsWorkflowsStepsMoveResponse = {
  ok: true;
  available_data: Record<string, {
    type: string;
    name: string;
    title: string;
    description: string;
    is_hidden: boolean;
    source: string;
    source_id: string;
  }>;
  decorated_workflow: {
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<string, unknown>;
    steps: Array<{
      id: string;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
            salesforce?: {
              type: string;
            };
          };
          maxLength?: number;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        form_enabled: boolean;
      };
      inputs: {
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        fields?: {
          value: {
            required: string[];
          };
          hidden: boolean;
          locked: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      outputs: string[];
      available_data: string[];
      step_type: string;
      type: string;
      is_pristine: boolean;
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    is_valid: boolean;
  };
};

export type FunctionsWorkflowsStepsResponsesExportResponse = {
  ok: true;
};

export type FunctionsWorkflowsStepsUpdateResponse = {
  ok: true;
  available_data: Record<string, {
    type: string;
    name: string;
    title: string;
    description: string;
    is_hidden: boolean;
    source: string;
    source_id: string;
  }>;
  decorated_workflow: {
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<string, unknown>;
    steps: Array<{
      id: string;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
            salesforce?: {
              type: string;
            };
          };
          maxLength?: number;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        form_enabled: boolean;
      };
      inputs: {
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        fields?: {
          value: {
            required: string[];
          };
          hidden: boolean;
          locked: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      outputs: string[];
      available_data: string[];
      step_type: string;
      type: string;
      is_pristine: boolean;
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    is_valid: boolean;
  };
};

export type FunctionsWorkflowsUnpublishResponse = {
  ok: true;
  available_data: Record<string, {
    type: string;
    name: string;
    title: string;
    description: string;
    is_hidden: boolean;
    source: string;
    source_id: string;
  }>;
  decorated_workflow: {
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<string, unknown>;
    steps: Array<{
      id: string;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
            salesforce?: {
              type: string;
            };
          };
          maxLength?: number;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        form_enabled: boolean;
      };
      inputs: {
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        fields?: {
          value: {
            required: string[];
          };
          hidden: boolean;
          locked: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      outputs: string[];
      available_data: string[];
      step_type: string;
      type: string;
      is_pristine: boolean;
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    last_published_version_id: string;
    last_published_date: string;
    bot_user_id: string;
    is_valid: boolean;
  };
};

export type FunctionsWorkflowsUpdateResponse = {
  ok: true;
  available_data: Record<string, {
    type: string;
    name: string;
    title: string;
    description: string;
    is_hidden: boolean;
    source: string;
    source_id: string;
  }>;
  decorated_workflow: {
    id: string;
    team_id: string;
    workflow_function_id: string;
    callback_id: string;
    title: string;
    description: string;
    input_parameters: Record<string, unknown>;
    steps: Array<{
      id: string;
      function: {
        id: string;
        callback_id: string;
        title: string;
        description: string;
        type: string;
        input_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
          items?: {
            type: string;
          };
          additionalProperties?: boolean;
          properties?: {
            actions: {
              type: string;
              additionalProperties: boolean;
            };
            salesforce?: {
              type: string;
            };
          };
          maxLength?: number;
        }>;
        output_parameters: Array<{
          type: string;
          name: string;
          title: string;
          is_required?: boolean;
          description: string;
          is_hidden?: boolean;
        }>;
        product_level_availability: {
          is_available: boolean;
          available_to: string;
        };
        category_id: string;
        category_label: string;
        form_enabled: boolean;
      };
      inputs: {
        message?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        user_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        interactive_blocks?: {
          value: Array<{
            type: string;
          }>;
          hidden: boolean;
          locked: boolean;
        };
        title?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        fields?: {
          value: {
            required: string[];
          };
          hidden: boolean;
          locked: boolean;
        };
        interactivity?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
        channel_id?: {
          value: string;
          hidden: boolean;
          locked: boolean;
        };
      };
      outputs: string[];
      available_data: string[];
      step_type: string;
      type: string;
      is_pristine: boolean;
    }>;
    collaborators: string[];
    icons: {
      image_96: string;
      image_192: string;
    };
    is_published: boolean;
    is_home_team_only: boolean;
    last_updated_by: string;
    unpublished_change_count: number;
    app_id: string;
    source: string;
    date_updated: number;
    is_billable: boolean;
    creation_source_type: number;
    creation_source_id: string;
    is_empty: boolean;
    is_valid: boolean;
  };
};

export type GifFeaturedResponse = {
  ok: true;
  gifs: Array<{
    id: string;
    url: string;
    content_description: string;
    media_formats: {
      gif: {
        url: string;
        duration: number;
        dims: number[];
        size: number;
        preview: string;
      };
      tinygifpreview: {
        url: string;
        duration: number;
        dims: number[];
        size: number;
        preview: string;
      };
      mp4: {
        url: string;
        duration: number;
        dims: number[];
        size: number;
        preview: string;
      };
      tinygif: {
        url: string;
        duration: number;
        dims: number[];
        size: number;
        preview: string;
      };
      gifpreview: {
        url: string;
        duration: number;
        dims: number[];
        size: number;
        preview: string;
      };
    };
  }>;
  response_metadata: {
    next_cursor: string;
  };
};

export type GifSearchResponse = {
  ok: true;
  gifs: Array<{
    id: string;
    url: string;
    content_description: string;
    media_formats: {
      mp4: {
        url: string;
        duration: number;
        dims: number[];
        size: number;
        preview: string;
      };
      tinygif: {
        url: string;
        duration: number;
        dims: number[];
        size: number;
        preview: string;
      };
      gifpreview: {
        url: string;
        duration: number;
        dims: number[];
        size: number;
        preview: string;
      };
      tinygifpreview: {
        url: string;
        duration: number;
        dims: number[];
        size: number;
        preview: string;
      };
      gif: {
        url: string;
        duration: number;
        dims: number[];
        size: number;
        preview: string;
      };
    };
  }>;
  response_metadata: {
    next_cursor: string;
  };
};

export type HelpIssuesTicketStatsResponse = {
  ok: true;
  unread_count: number;
  open_count: number;
};

export type HelpProductHelpCardListResponse = {
  ok: true;
  cards: Array<{
    id: string;
    type: string;
    title: string;
    subtitle: string;
    image: string;
    link_url: string;
    is_badged: boolean;
    audience: string;
    is_show_new_user: boolean;
    is_show_upgrade_trial: boolean;
    date_released: string;
    houston_toggle: string;
    status: string;
    author: string;
    date_published: number;
    card_order: number;
  }>;
};

export type HelpcenterGetWhatsNewResponse = {
  ok: true;
  articles: Array<{
    zendesk_id: number;
    title: string;
    body: string;
    section_id: number;
    draft: boolean;
    user_segment_id: number;
    label_names: string[];
  }>;
};

export type HelpcenterTrackResponse = {
  ok: true;
};

export type HelpdeskCategoriesResponse = {
  ok: true;
  categories: Array<{
    category_id: number;
    name: string;
    description: string;
  }>;
  locale: string;
};

export type HelpdeskGetResponse = {
  ok: true;
  articles: Array<{
    id: number;
    title: string;
    url: string;
    is_promoted: boolean;
    order: number;
    label_names: string;
  }>;
  locale: string;
};

export type HelpdeskGetArticleResponse = {
  ok: true;
  article: {
    article_id: number;
    title: string;
    body: string;
    is_draft: boolean;
    label_names: string[];
  };
};

export type HuddlesGetResponse = {
  ok: true;
  huddle: {
    id: string;
    name: string;
    created_by: string;
    date_start: number;
    date_end: number;
    participants: string[];
    participant_history: string[];
    channels: string[];
    has_ended: boolean;
    huddle_link: string;
    thread_root_ts: string;
    background_id: string;
    attached_file_ids: unknown[];
    pending_invitees: Record<string, unknown>;
    last_invite_status_by_user: Record<UserId, string>;
    prototypes: {
      is_prewarmed: boolean;
      is_scheduled: boolean;
    };
    recording: {
      can_record_summary: string;
    };
    locale: string;
  };
};

export type HuddlesHistoryResponse = {
  ok: true;
  huddles: Array<{
    id: string;
    name: string;
    created_by: string;
    date_start: number;
    date_end: number;
    participants: unknown[];
    participant_history: string[];
    channels: string[];
    has_ended: boolean;
    huddle_link: string;
    thread_root_ts: string;
    background_id: string;
    attached_file_ids: unknown[];
    pending_invitees: Record<string, unknown>;
    last_invite_status_by_user: Record<UserId, string>;
    prototypes: {
      is_prewarmed: boolean;
      is_scheduled: boolean;
    };
    recording: {
      can_record_summary: string;
    };
    missed_participants?: Record<UserId, string>;
    channel_type: string;
    access_type_by_user: Record<UserId, number>;
  }>;
  response_metadata: {
    next_cursor: string;
  };
};

export type HuddlesListBackgroundsResponse = {
  ok: true;
  backgrounds: Array<{
    id: string;
    category_id: string;
    category_name: string;
    category_order: number;
    url: string;
    preview_url: string;
    artist?: string;
    name: string;
  }>;
};

export type ImListResponse = {
  ok: true;
  ims: Array<{
    id: string;
    created: number;
    is_frozen: boolean;
    is_archived: boolean;
    is_im: boolean;
    is_org_shared: boolean;
    context_team_id: string;
    updated: number;
    is_shared?: boolean;
    user: string;
    last_read: string;
    is_open: boolean;
    latest?: string;
    priority: number;
    properties?: {
      tabs: Array<{
        type: string;
        label: string;
        id: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
      }>;
      tabz: Array<{
        type: string;
        id?: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
      }>;
      meeting_notes?: {
        file_id: string;
      };
      is_dormant?: boolean;
    };
  }>;
  response_metadata?: {
    next_cursor: string;
  };
};

export type ImportsListByServiceResponse = {
  ok: true;
  imports: unknown[];
};

export type InprodsurveysGetResponse = {
  ok: true;
};

export type LinksGetDomainsResponse = {
  ok: true;
  domains_ts: number;
  domains: {
    "useless-signin-prod.herokuapp.com": string;
    "open.workast.com": string;
    "open.workast.app": string;
    "loom.com": string;
    "www.loom.com": string;
    "lucid.app": string;
    "atlassian.net": string;
    "bitbucket.org": string;
    "trello.com": string;
    "a.cl.ly": string;
    "share.getcloudapp.com": string;
    "share.zight.com": string;
  };
  wildcard_domains: {
    "bitbucket.org": string;
    "atlassian.net": string;
    "loom.com": string;
    "wac.stg.internal.atlassian.com": string;
    "jira-dev.com": string;
  };
};

export type ListsCreateResponse = {
  ok: true;
  list: {
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    list_metadata: {
      schema: Array<{
        id: string;
        name: string;
        key: string;
        type: string;
        is_primary_column: boolean;
      }>;
      views: Array<{
        id: string;
        name: string;
        type: string;
        is_locked: boolean;
        position: string;
        columns: Array<{
          visible: boolean;
          key: string;
          id: string;
          position: string;
          width?: number;
          should_wrap_text?: boolean;
        }>;
        date_created: number;
        created_by: string;
        stick_column_left: boolean;
        is_all_items_view: boolean;
        default_view_key?: string;
        show_completed_items?: boolean;
      }>;
      integrations: unknown[];
      icon: string;
      description: string;
      description_blocks: unknown[];
      is_trial: boolean;
      subtask_schema: Array<{
        id: string;
        name: string;
        key: string;
        type: string;
        is_primary_column: boolean;
        options?: {
          format: string;
          default_value: null;
          show_member_name: boolean;
        };
      }>;
      creation_source: {
        type: string;
        reference_id: string;
      };
      todo_mode: boolean;
      default_view: string;
    };
    list_limits: {
      over_row_maximum: boolean;
      row_count_limit: number;
      row_count: number;
      archived_row_count: number;
      over_column_maximum: boolean;
      column_count: number;
      column_count_limit: number;
      over_view_maximum: boolean;
      view_count: number;
      view_count_limit: number;
      max_attachments_per_cell: number;
    };
    url_private: string;
    url_private_download: string;
    permalink: string;
    permalink_public: string;
    last_editor: string;
    list_csv_download_url: string;
    updated: number;
    is_starred: boolean;
    shares: Record<string, unknown>;
    channels: unknown[];
    groups: unknown[];
    ims: unknown[];
    has_more_shares: boolean;
    access: string;
    private_channels_with_file_access_count: number;
    dm_mpdm_users_with_file_access: Array<{
      user_id: string;
      access: string;
    }>;
    teams_shared_with: string[];
    is_restricted_sharing_enabled: boolean;
    has_rich_preview: boolean;
    file_access: string;
    org_or_workspace_access: string;
    is_ai_suggested: boolean;
    list_template_mode?: string;
    list_template_type?: string;
    list_template_localization_status?: string;
  };
};

export type ListsGetMyItemsResponse = {
  ok: true;
  records: unknown[];
  lists: unknown[];
  counts: {
    todos_count: number;
    incomplete_todos_count: number;
    incomplete_overdue_todos_count: number;
    completed_todos_this_week_count: number;
    completed_todos_this_month_count: number;
    incomplete_overdue_assigned_count: number;
  };
};

export type ListsHistoryListResponse = {
  ok: true;
  versions: Array<{
    author: string;
    window_start: number;
    window_end: number;
  }>;
  response_metadata: {
    next_cursor: string;
  };
};

export type ListsHistoryLoadResponse = {
  ok: true;
  list: {
    id: string;
    user: string;
    user_team: string;
    created: number;
    timestamp: number;
    filetype: string;
    title: string;
    updated: number;
    list_metadata: {
      schema: Array<{
        id: string;
        name: string;
        key: string;
        type: string;
        is_primary_column: boolean;
      }>;
      views: Array<{
        id: string;
        name: string;
        type: string;
        is_locked: boolean;
        position: string;
        columns: Array<{
          visible: boolean;
          key: string;
          id: string;
          position: string;
          width?: number;
          should_wrap_text?: boolean;
        }>;
        date_created: number;
        created_by: string;
        stick_column_left: boolean;
        is_all_items_view: boolean;
        default_view_key?: string;
        show_completed_items?: boolean;
      }>;
      integrations: unknown[];
      icon: string;
      description: string;
      description_blocks: unknown[];
      todo_mode: boolean;
    };
    list_records: Array<{
      id: string;
      list_id: string;
      date_created: number;
      created_by: string;
      updated_by: string;
      platform_refs: Record<string, unknown>;
      fields: Array<{
        key: string;
        value: boolean;
        checkbox: boolean;
        column_id: string;
      }>;
      updated_timestamp: string;
      position: string;
      view_positions: Record<string, unknown>;
    }>;
  };
};

export type ListsOpenResponse = {
  ok: true;
  last_read_timestamp: string;
};

export type ListsRecordsListResponse = {
  ok: true;
  records: Array<{
    id: string;
    list_id: string;
    fields: Array<{
      key: string;
      value: number;
      rating?: number[];
      text?: string;
      rich_text?: Array<{
        type: string;
        block_id: string;
      }>;
      select?: string[];
      checkbox?: boolean;
      column_id?: string;
    }>;
    date_created: number;
    view_positions: Record<string, unknown>;
    created_by?: string;
    updated_by?: string;
    platform_refs?: Record<string, unknown>;
    updated_timestamp?: string;
    position?: string;
  }>;
  limits: {
    over_row_maximum: boolean;
    row_count_limit: number;
    row_count: number;
    archived_row_count: number;
    over_column_maximum: boolean;
    column_count: number;
    column_count_limit: number;
    over_view_maximum: boolean;
    view_count: number;
    view_count_limit: number;
    max_attachments_per_cell: number;
  };
  response_metadata: {
    next_cursor: string;
  };
};

export type ListsTemplatesResponse = {
  ok: true;
  templates: Array<{
    id: string;
    name: string;
    icon: string;
    description: string;
    schema: Array<{
      key: string;
      name: string;
      is_primary_column?: boolean;
      type: string;
      options?: {
        choices?: Array<{
          value: string;
          label: string;
          color: string;
        }>;
        default_value?: string;
        default_value_typed?: {
          select: string[];
        };
        max?: number;
        format?: string;
        date_format?: string;
      };
    }>;
    preview_records: Array<Array<{
      key: string;
      value: string;
      rich_text?: Array<{
        type: string;
        block_id: string;
      }>;
      text?: string;
      select?: string[];
      rating?: number[];
      user?: string[];
      channel?: string[];
      timestamp?: number[];
      message?: Array<{
        value: string;
        channel_id: string;
        ts: string;
      }>;
      number?: number[];
      phone?: string[];
      date?: string[];
    }>>;
    view?: {
      type: string;
      name: string;
      grouping: {
        group_by: string;
      };
      sorts?: Array<{
        key: string;
        ascending: boolean;
      }>;
    };
  }>;
  starter_templates: unknown[];
  template_files?: Array<{
    id: string;
    schema: Array<{
      name: string;
      key: string;
      type: string;
      is_primary_column: boolean;
      options: {
        format?: string;
        default_value_typed: {
          select?: string[];
        };
        default_value?: string;
        show_member_name?: boolean;
        date_format?: string;
        max?: number;
        choices?: Array<{
          value: string;
          label: string;
          color: string;
        }>;
        precision?: number;
      };
    }>;
    icon: string;
    name: string;
    description: string;
    description_blocks: Array<{
      type: string;
      block_id: string;
    }>;
    preview_records: Array<Array<{
      key: string;
      value: number;
      rating?: number[];
      text?: string;
      rich_text?: Array<{
        type: string;
        block_id: string;
      }>;
      select?: string[];
      number?: number[];
      phone?: string[];
      user?: string[];
      date?: string[];
    }>>;
    view?: {
      type: string;
      name: string;
      grouping: {
        group_by?: string;
        group_by_column_id?: string;
      };
      filters: unknown[];
      sorts: Array<{
        key: string;
        ascending: boolean;
        column_id: string;
      }>;
    };
  }>;
};

export type ListsUpdateResponse = {
  ok: true;
  list: {
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    list_metadata: {
      schema: Array<{
        id: string;
        name: string;
        key: string;
        type: string;
        is_primary_column: boolean;
      }>;
      views: Array<{
        id: string;
        name: string;
        type: string;
        is_locked: boolean;
        position: string;
        columns: Array<{
          visible: boolean;
          key: string;
          id: string;
          position: string;
          width?: number;
          should_wrap_text?: boolean;
        }>;
        date_created: number;
        created_by: string;
        stick_column_left: boolean;
        is_all_items_view: boolean;
        default_view_key?: string;
        show_completed_items?: boolean;
      }>;
      integrations: unknown[];
      icon: string;
      description: string;
      description_blocks: Array<{
        type: string;
        block_id: string;
      }>;
      is_trial: boolean;
      subtask_schema: Array<{
        id: string;
        name: string;
        key: string;
        type: string;
        is_primary_column: boolean;
        options?: {
          format: string;
          default_value: null;
          show_member_name: boolean;
        };
      }>;
      creation_source: {
        type: string;
        reference_id: string;
      };
      todo_mode: boolean;
      default_view: string;
    };
    list_limits: {
      over_row_maximum: boolean;
      row_count_limit: number;
      row_count: number;
      archived_row_count: number;
      over_column_maximum: boolean;
      column_count: number;
      column_count_limit: number;
      over_view_maximum: boolean;
      view_count: number;
      view_count_limit: number;
      max_attachments_per_cell: number;
    };
    url_private: string;
    url_private_download: string;
    permalink: string;
    permalink_public: string;
    last_editor: string;
    list_csv_download_url: string;
    updated: number;
    is_starred: boolean;
    shares: Record<string, unknown>;
    channels: unknown[];
    groups: unknown[];
    ims: unknown[];
    has_more_shares: boolean;
    access: string;
    private_channels_with_file_access_count: number;
    dm_mpdm_users_with_file_access: Array<{
      user_id: string;
      access: string;
    }>;
    teams_shared_with: string[];
    is_restricted_sharing_enabled: boolean;
    has_rich_preview: boolean;
    file_access: string;
    org_or_workspace_access: string;
    list_template_mode: string;
    list_template_type: string;
    list_template_localization_status: string;
    is_ai_suggested: boolean;
  };
};

export type MediaProgressUpdateResponse = {
  ok: true;
};

export type MegaphoneNotificationsListResponse = {
  ok: true;
  notifications: {
    workspace_menu_primary_plan_info?: {
      name: string;
      data: {
        product_level?: string;
        org_name?: string;
        discount_pct?: number;
        promo_type?: string;
        highlighted_plan?: string;
        discount_expiration_ts?: number;
        discount_expiration_date?: string;
      };
    };
    workspace_menu_secondary_plan_info?: {
      name: string;
      data: {
        discount_pct: number;
        promo_type: string;
        highlighted_plan: string;
        discount_expiration_ts: number;
        discount_expiration_date: string;
      };
    };
    workspace_menu_upsell: null;
    invite_modal_learn_more_about_guests_cta?: {
      name: string;
      data: {
        is_admin: boolean;
        no_of_days_left: number;
        product_id: string;
        checkout_product_id: string;
        upgrade_product_id: string;
        upgrade_product_level: string;
        trial_end_date: string;
        trial_expiration_date: string;
        plan_expiration_ts: number;
        trial_start_date: string;
        trial_length: number;
        trial_plan_level: string;
        promo_type: string;
        promo_sub_type: string;
        dismissed_at: null;
      };
    };
    create_channel_make_shared_cta?: {
      name: string;
      data: {
        is_admin: boolean;
        no_of_days_left: number;
        product_id: string;
        checkout_product_id: string;
        upgrade_product_id: string;
        upgrade_product_level: string;
        trial_end_date: string;
        trial_expiration_date: string;
        plan_expiration_ts: number;
        trial_start_date: string;
        trial_length: number;
        trial_plan_level: string;
        promo_type: string;
        promo_sub_type: string;
        dismissed_at: null;
      };
    };
    guests_modal_dropdown?: {
      name: string;
      data: {
        is_admin: boolean;
        no_of_days_left: number;
        product_id: string;
        checkout_product_id: string;
        upgrade_product_id: string;
        upgrade_product_level: string;
        trial_end_date: string;
        trial_expiration_date: string;
        plan_expiration_ts: number;
        trial_start_date: string;
        trial_length: number;
        trial_plan_level: string;
        promo_type: string;
        promo_sub_type: string;
        dismissed_at: null;
      };
    };
    main_menu?: {
      name: string;
      data: {
        signed_in_mobile_other_team: boolean;
      };
    };
    profile_menu: null;
    sidebar_menu_header?: {
      name: string;
      data: {
        discount_pct: number;
        promo_type: string;
        highlighted_plan: string;
        discount_expiration_ts: number;
        discount_expiration_date: string;
        is_eligible_for_biz_plus_forward: boolean;
      };
    };
    later_page_sidebar_link: null;
    workflow_builder_header?: {
      name: string;
      data: {
        trial_end_date: string;
        can_user_purchase: boolean;
        published_workflows_count: number;
      };
    };
    app_header?: {
      name: string;
      data: {
        trial_awareness_info: {
          days_remaining: number;
          trial_start_date: string;
          trial_end_date: string;
          can_user_purchase: boolean;
        };
        apps_and_integrations_count: number;
      };
    };
    all_workflows_header?: {
      name: string;
      data: {
        trial_end_date: string;
        can_user_purchase: boolean;
        published_workflows_count: number;
      };
    };
    automations_sidebar_menu_item?: {
      name: string;
      data: Record<string, unknown>;
    };
    workflows_more_actions_menu: null;
    canvas_template: null;
    user_menu_coachmarks: null;
    more_peek_menu?: {
      name: string;
      data: Record<string, unknown>;
    };
    create_menu: null;
    search_modal_footer: null;
    huddle_invite_modal: null;
    huddle_toolbar: null;
    automations_tab_coachmarks: null;
    lists_add_to_list_modal: null;
    search_modal_header: null;
    workspace_add_menu: null;
    workspace_team_switcher_menu: null;
    canvas_create_menu: null;
    calendar_page_header: null;
    todos_add_to_todos_modal: null;
    todos_home_sidebar: null;
    channel_context_menu: null;
    channel_header_more_menu_open_split: null;
    generic_new_badge?: {
      name: string;
      data: {
        badges: string[];
      };
    };
    sidebar_menu_seasonal_link: null;
    sidebar_menu_onboarding_tasks_link: null;
    slackbot_ai_dm_thread_header: null;
    slackbot_ai_dm: null;
    today_view_header: null;
    tools_tab_rail: null;
    tools_tab_sidebar_header: null;
    tools_tab_coachmarks: null;
    client_footer?: {
      name: string;
      data: Record<string, unknown>;
    };
    client_header_right?: null;
    message_pane?: null;
    sidebar_footer?: null;
    launch_modal?: null;
    sidebar_menu?: null;
    in_product_coachmark?: null;
    quick_reactions?: {
      name: string;
      data: {
        custom_emoji_1: string;
        custom_emoji_2: string;
        custom_emoji_3: string;
        notify_user_about_user_pref: boolean;
        send_click_data_for_reactions: boolean;
      };
    };
    message_actions_labels?: null;
    message_action_edit_message_label?: null;
    progressive_disclosure?: null;
    welcome_space?: null;
    message_input?: {
      name: string;
      data: Record<string, unknown>;
    };
    activity_tab_sidebar?: {
      name: string;
      data: Record<string, unknown>;
    };
    activity_list?: null;
    tab_rail_home_tab?: null;
    admin_menu_bottom_banner?: null;
    sidebar_popout?: null;
    record_channel_sidebar_section?: null;
    manage_apps_coachmark?: {
      name: string;
      data: Record<string, unknown>;
    };
    installed_apps_header?: {
      name: string;
      data: {
        trial_awareness_info: {
          days_remaining: number;
          trial_start_date: string;
          trial_end_date: string;
          can_user_purchase: boolean;
        };
        apps_and_integrations_count: number;
      };
    };
    published_workflows_header?: {
      name: string;
      data: {
        trial_end_date: string;
        can_user_purchase: boolean;
        published_workflows_count: number;
      };
    };
    workflow_admin_manage_integrations_tab_new_badge?: null;
    workflow_steps_triggers_integrations_admin_view_header?: null;
  };
};

export type MegaphoneSetNotificationAsSeenResponse = {
  ok: true;
};

export type MessagesListResponse = {
  ok: true;
  messages: Record<string, unknown>;
  messages_data: Record<ChannelId | DmId | GroupId, {
    messages: Array<{
      user: string;
      type: string;
      ts: string;
      client_msg_id?: string;
      text: string;
      thread_ts: string;
      parent_user_id?: string;
      blocks?: Array<{
        type: string;
        block_id: string;
      }>;
      reactions?: Array<{
        name: string;
        users: string[];
        count: number;
      }>;
      saved?: {
        is_archived: boolean;
        date_completed: number;
        state: string;
      };
      files?: Array<{
        id: string;
        created: number;
        timestamp: number;
        name: string;
        title: string;
        mimetype: string;
        filetype: string;
        pretty_type: string;
        user: string;
        user_team: string;
        size: number;
        mode: string;
        is_external: boolean;
        is_public: boolean;
        public_url_shared: boolean;
        display_as_bot: boolean;
        username: string;
        is_transcription_region_supported?: boolean;
        transcription?: {
          status: string;
        };
        mp4?: string;
        url_private: string;
        url_private_download: string;
        hls?: string;
        hls_embed?: string;
        mp4_low?: string;
        duration_ms?: number;
        media_display_type: string;
        thumb_video?: string;
        thumb_video_w?: number;
        thumb_video_h?: number;
        permalink: string;
        permalink_public: string;
        is_starred: boolean;
        skipped_shares: boolean;
        has_rich_preview: boolean;
        file_access: string;
        thumb_64?: string;
        thumb_80?: string;
        thumb_360?: string;
        thumb_360_w?: number;
        thumb_360_h?: number;
        thumb_480?: string;
        thumb_480_w?: number;
        thumb_480_h?: number;
        thumb_160?: string;
        thumb_720?: string;
        thumb_720_w?: number;
        thumb_720_h?: number;
        thumb_800?: string;
        thumb_800_w?: number;
        thumb_800_h?: number;
        thumb_960?: string;
        thumb_960_w?: number;
        thumb_960_h?: number;
        thumb_1024?: string;
        thumb_1024_w?: number;
        thumb_1024_h?: number;
        original_w?: number;
        original_h?: number;
        thumb_tiny?: string;
      }>;
      upload?: boolean;
      display_as_bot?: boolean;
      reply_count?: number;
      reply_users_count?: number;
      latest_reply?: string;
      reply_users?: string[];
      is_locked?: boolean;
      subscribed?: boolean;
      last_read?: string;
      attachments?: Array<{
        ts: string;
        msg_subtype?: string;
        channel_id: string;
        channel_team: string;
        is_msg_unfurl: boolean;
        is_thread_root_unfurl?: boolean;
        color: string;
        from_url: string;
        is_share: boolean;
        fallback: string;
        text: string;
        author_name: string;
        author_link: string;
        author_icon: string;
        author_subname: string;
        mrkdwn_in: string[];
        footer: string;
        author_id?: string;
        message_blocks?: Array<{
          team: string;
          channel: string;
          ts: string;
          message: {
            blocks: Array<{
              type: string;
              block_id: string;
            }>;
          };
        }>;
        files?: Array<{
          id: string;
          created: number;
          timestamp: number;
          name: string;
          title: string;
          mimetype: string;
          filetype: string;
          pretty_type: string;
          user: string;
          user_team: string;
          size: number;
          mode: string;
          is_external: boolean;
          is_public: boolean;
          public_url_shared: boolean;
          display_as_bot: boolean;
          username: string;
          url_private: string;
          url_private_download: string;
          media_display_type: string;
          thumb_64: string;
          thumb_80: string;
          thumb_360: string;
          thumb_360_w: number;
          thumb_360_h: number;
          thumb_480: string;
          thumb_480_w: number;
          thumb_480_h: number;
          thumb_160: string;
          thumb_720: string;
          thumb_720_w: number;
          thumb_720_h: number;
          thumb_800: string;
          thumb_800_w: number;
          thumb_800_h: number;
          thumb_960: string;
          thumb_960_w: number;
          thumb_960_h: number;
          thumb_1024: string;
          thumb_1024_w: number;
          thumb_1024_h: number;
          original_w: number;
          original_h: number;
          thumb_tiny: string;
          permalink: string;
          permalink_public: string;
          comments_count: number;
          is_starred: boolean;
          skipped_shares: boolean;
          has_rich_preview: boolean;
          file_access: string;
        }>;
        image_url?: string;
        image_width?: number;
        image_height?: number;
        image_bytes?: number;
        service_icon?: string;
        id?: number;
        original_url?: string;
        title?: string;
        title_link?: string;
        service_name?: string;
      }>;
    }>;
    latest_updates: Record<Timestamp, string>;
    unchanged_messages: unknown[];
  }>;
};

export type MessagesSentListResponse = {
  ok: true;
  pagination: {
    total_count: number;
    page: number;
    per_page: number;
    page_count: number;
    first: number;
    last: number;
    next_cursor: string;
  };
  items: Array<{
    msg_timestamp: string;
    ts: string;
    id: string;
    channel_id: string;
    channel: string;
    user: string;
    thread_root_timestamp?: string;
  }>;
};

export type MpimListResponse = {
  ok: true;
  groups: Array<{
    id: string;
    created: number;
    creator: string;
    is_org_shared: boolean;
    is_im: boolean;
    context_team_id: string;
    updated: number;
    name: string;
    name_normalized: string;
    is_channel: boolean;
    is_group: boolean;
    is_mpim: boolean;
    is_private: boolean;
    is_archived: boolean;
    is_general: boolean;
    is_shared: boolean;
    is_ext_shared: boolean;
    unlinked: number;
    is_pending_ext_shared: boolean;
    pending_shared: unknown[];
    parent_conversation: null;
    members: string[];
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    topic: {
      value: string;
      creator: string;
      last_set: number;
    };
    pending_connected_team_ids: unknown[];
    is_global_shared: boolean;
    is_org_default: boolean;
    is_org_mandatory: boolean;
    is_member: boolean;
    is_open: boolean;
    last_read: string;
    latest: string;
    properties: {
      canvas?: {
        file_id: string;
        is_empty: boolean;
        quip_thread_id: string;
        is_migrated: boolean;
      };
      meeting_notes?: {
        file_id: string;
      };
      tabs?: Array<{
        id: string;
        label: string;
        type: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        is_disabled?: boolean;
      }>;
      tabz?: Array<{
        id?: string;
        label?: string;
        type: string;
        data?: {
          file_id: string;
          shared_ts: string;
        };
        is_disabled?: boolean;
      }>;
      is_dormant?: boolean;
    };
    priority: number;
    is_moved: number;
  }>;
};

export type OnboardingFetchResponse = {
  ok: true;
  user_data: {
    needs_initial_password_set: boolean;
    tractor_enabled: boolean;
    onboarding_role_apps: null;
    welcome_place_state: string;
    office_policy: null;
    send_your_first_message_banner_enabled: null;
    guided_channel_setup_seen: boolean;
    created_with_google: boolean;
    has_recorded_clip: null;
    has_used_huddles: boolean;
    has_opened_help_home_organically: boolean;
    setup_started: boolean;
    setup_flow_step: string;
    is_new_human: boolean;
    skip_add_channels_tip: boolean;
    calendar_oauth_attempted: boolean;
    has_uploaded_profile_photo: boolean;
    has_sent_first_message: boolean;
    has_sent_first_direct_message: null;
    has_sent_invite_during_team_creation: boolean;
    is_paid_google_account: boolean;
    is_calendar_oauth_invalid: boolean;
    is_provisioned_and_has_manager_id: boolean;
    people_page_banner_dismissed: null;
    files_page_banner_dismissed: null;
    message_suggestions_complete: boolean;
    channel_browser_joiner_banner_dismissed: null;
    people_page_joiner_banner_dismissed: null;
    apps_task_complete: null;
    apps_page_banner_dismissed: null;
    message_input_cta_complete: boolean;
    joiner_launchpad_enabled: boolean;
    joiner_launchpad_v2_enabled: string;
    joiner_launchpad_v2_experiment_group: string;
    joiner_launchpad_v2_tenured_team_category: string;
    joiner_launchpad_onboarding_complete: null;
    joiner_launchpad_is_provisioned: boolean;
    has_dismissed_first_message_tip: boolean;
    channel_task_topic_completed: boolean;
    channel_task_reminder_completed: boolean;
    channel_task_bookmark_completed: boolean;
    channel_task_canvas_in_progress: boolean;
    channel_task_canvas_completed: boolean;
    channel_task_apps_in_progress: boolean;
    channel_task_apps_completed: boolean;
    joiner_launchpad_recommended_conversations: null;
    joiner_launchpad_recommendation_expiration_time: null;
    user_onboarding_team_size_category: string;
    contextual_invite_file: null;
    should_preselect_dms_item: null;
    should_preselect_activity_item: null;
    seen_files_tab: null;
    stp_entry_point: string;
    auto_charge_trial_reminder_time_seen: null;
    is_workspace_created_by_ai: boolean;
    ai_workspace_data: null;
    ai_workspace_channel_info: null;
    has_requested_business_plus_on_sf_embed_team: boolean;
    has_requested_pro_on_free_team: boolean;
    is_onboarding_modal_profile_updated: boolean;
    onboarding_modal_step: null;
    has_sent_first_message_from_salesforce: boolean;
    auto_slack_launchpad_enabled: boolean;
    auto_slack_launchpad_onboarding_complete: boolean;
    solutions_gallery_template_file_ids: null;
    has_been_to_checkout_from_setup: boolean;
    resurrected_user_experiment_eligible: boolean;
    greeting_card_opened: boolean;
    greeting_cards_confetti_seen: null;
    january_delight_push_notification_sent: boolean;
    january_delight_composer_via_email_should_auto_open: boolean;
    year_in_review_opened: boolean;
    onboarding_complete: boolean;
  };
  team_data: {
    initial_channel_id: string;
    tractor_channel_name: string;
    initial_invite_list: null;
    created_with_google: boolean;
    use_case_onboarding_selection: string;
    solutions_onboarding_canvas_card_tracking: string;
    solutions_onboarding_list_card_tracking: string;
    creator_straight_to_paid_exp: null;
    is_stp_no_discount_group: boolean;
    has_redeemed_solutions_gallery_trial: null;
    has_redeemed_ai_workspace_setup_trial: null;
    has_started_feature_auto_charge_trial: null;
    creator_guided_setup: string;
    setup_query_string: string;
    ai_workspace_setup: string;
    ai_workspace_team_creation_flow_cards: string;
    has_redeemed_auto_slack_trial: boolean;
    all_company_channel_handbook_card: string;
  };
};

export type OnboardingUpdateTeamResponse = {
  ok: true;
  team_data: {
    initial_channel_id: string;
    tractor_channel_name: null;
    initial_invite_list: string;
    created_with_google: boolean;
    use_case_onboarding_selection: string;
    solutions_onboarding_canvas_card_tracking: string;
    solutions_onboarding_list_card_tracking: string;
    creator_straight_to_paid_exp: null;
    is_stp_no_discount_group: boolean;
    has_redeemed_solutions_gallery_trial: null;
    has_redeemed_ai_workspace_setup_trial: null;
    has_started_feature_auto_charge_trial: null;
    creator_guided_setup: string;
    setup_query_string: string;
    ai_workspace_setup: string;
    ai_workspace_team_creation_flow_cards: string;
    has_redeemed_auto_slack_trial: boolean;
    all_company_channel_handbook_card: string;
  };
};

export type OnboardingUpdateUserResponse = {
  ok: true;
  user_data: {
    needs_initial_password_set: boolean;
    tractor_enabled: boolean;
    onboarding_role_apps: null;
    welcome_place_state: string;
    office_policy: null;
    send_your_first_message_banner_enabled: null;
    guided_channel_setup_seen: boolean;
    created_with_google: boolean;
    has_recorded_clip: null;
    has_used_huddles: boolean;
    has_opened_help_home_organically: boolean;
    setup_started: boolean;
    setup_flow_step: string;
    is_new_human: boolean;
    skip_add_channels_tip: boolean;
    calendar_oauth_attempted: boolean;
    has_uploaded_profile_photo: boolean;
    has_sent_first_message: boolean;
    has_sent_first_direct_message: null;
    has_sent_invite_during_team_creation: boolean;
    is_paid_google_account: boolean;
    is_calendar_oauth_invalid: boolean;
    is_provisioned_and_has_manager_id: boolean;
    people_page_banner_dismissed: null;
    files_page_banner_dismissed: null;
    message_suggestions_complete: boolean;
    channel_browser_joiner_banner_dismissed: null;
    people_page_joiner_banner_dismissed: null;
    apps_task_complete: null;
    apps_page_banner_dismissed: null;
    message_input_cta_complete: boolean;
    joiner_launchpad_enabled: boolean;
    joiner_launchpad_v2_enabled: string;
    joiner_launchpad_v2_experiment_group: string;
    joiner_launchpad_v2_tenured_team_category: string;
    joiner_launchpad_onboarding_complete: null;
    joiner_launchpad_is_provisioned: boolean;
    has_dismissed_first_message_tip: boolean;
    channel_task_topic_completed: boolean;
    channel_task_reminder_completed: boolean;
    channel_task_bookmark_completed: boolean;
    channel_task_canvas_in_progress: boolean;
    channel_task_canvas_completed: boolean;
    channel_task_apps_in_progress: boolean;
    channel_task_apps_completed: boolean;
    joiner_launchpad_recommended_conversations: null;
    joiner_launchpad_recommendation_expiration_time: null;
    user_onboarding_team_size_category: string;
    contextual_invite_file: null;
    should_preselect_dms_item: null;
    should_preselect_activity_item: null;
    seen_files_tab: null;
    stp_entry_point: string;
    auto_charge_trial_reminder_time_seen: null;
    is_workspace_created_by_ai: boolean;
    ai_workspace_data: null;
    ai_workspace_channel_info: null;
    has_requested_business_plus_on_sf_embed_team: boolean;
    has_requested_pro_on_free_team: boolean;
    is_onboarding_modal_profile_updated: boolean;
    onboarding_modal_step: null;
    has_sent_first_message_from_salesforce: boolean;
    auto_slack_launchpad_enabled: boolean;
    auto_slack_launchpad_onboarding_complete: boolean;
    solutions_gallery_template_file_ids: null;
    has_been_to_checkout_from_setup: boolean;
    resurrected_user_experiment_eligible: boolean;
    greeting_card_opened: boolean;
    greeting_cards_confetti_seen: null;
    january_delight_push_notification_sent: boolean;
    january_delight_composer_via_email_should_auto_open: boolean;
    year_in_review_opened: boolean;
    onboarding_complete: boolean;
  };
};

export type PaymentsBillingAddressesGetResponse = {
  ok: true;
  team_id: string;
  company_name: null;
  street1: null;
  street2: null;
  city: null;
  state: null;
  zip: null;
  country: null;
  plus4: null;
  vat_id: null;
  abn_id: null;
  tax_id: null;
  is_business: null;
  is_vat_registered: null;
  waiting_for_vat: null;
  notes: null;
  regional_tax_id: null;
};

export type PaymentsBillingAddressesLocationsUsStatesEntry = string;

export type PaymentsBillingAddressesLocationsUsStatesName =
  | "Alabama"
  | "Alaska"
  | "Arizona"
  | "Arkansas"
  | "California"
  | "Colorado"
  | "Connecticut"
  | "Delaware"
  | "District of Columbia"
  | "Florida"
  | "Georgia"
  | "Hawaii"
  | "Idaho"
  | "Illinois"
  | "Indiana"
  | "Iowa"
  | "Kansas"
  | "Kentucky"
  | "Louisiana"
  | "Maine"
  | "Maryland"
  | "Massachusetts"
  | "Michigan"
  | "Minnesota"
  | "Mississippi"
  | "Missouri"
  | "Montana"
  | "Nebraska"
  | "Nevada"
  | "New Hampshire"
  | "New Jersey"
  | "New Mexico"
  | "New York"
  | "North Carolina"
  | "North Dakota"
  | "Ohio"
  | "Oklahoma"
  | "Oregon"
  | "Pennsylvania"
  | "Rhode Island"
  | "South Carolina"
  | "South Dakota"
  | "Tennessee"
  | "Texas"
  | "Utah"
  | "Vermont"
  | "Virginia"
  | "Washington"
  | "West Virginia"
  | "Wisconsin"
  | "Wyoming"
;

export type PaymentsBillingAddressesLocationsVatCountriesEntry = string;

export type PaymentsBillingAddressesLocationsVatCountriesName =
  | "Austria"
  | "Belgium"
  | "Bulgaria"
  | "Croatia"
  | "Cyprus"
  | "Czech Republic"
  | "Denmark"
  | "Estonia"
  | "Finland"
  | "France"
  | "Germany"
  | "Greece"
  | "Hungary"
  | "Ireland"
  | "Italy"
  | "Latvia"
  | "Lithuania"
  | "Luxembourg"
  | "Malaysia"
  | "Malta"
  | "Netherlands"
  | "Norway"
  | "Poland"
  | "Portugal"
  | "Republic of Korea"
  | "Romania"
  | "Russian Federation"
  | "Singapore"
  | "Slovakia"
  | "Slovenia"
  | "South Africa"
  | "Spain"
  | "Sweden"
  | "Switzerland"
  | "United Kingdom"
;

export type PaymentsBillingAddressesLocationsCountryMapEntry = {
  name: string;
  iso_code: string;
  tax_name: string;
  should_collect_tax_id: boolean;
  tax_id_validation_regex: string;
  tax_id_examples: string[];
  tax_id_form_variant: string;
  tax_id_max_length: number;
  should_skip_is_business_question: boolean;
  should_ask_is_vat_registered: boolean;
  stripe_tax_id_type: string;
};

export type PaymentsBillingAddressesLocationsCountryMapName =
  | "Andorra"
  | "United Arab Emirates"
  | "Afghanistan"
  | "Antigua and Barbuda"
  | "Anguilla"
  | "Albania"
  | "Armenia"
  | "Angola"
  | "Antarctica"
  | "Argentina"
  | "American Samoa"
  | "Austria"
  | "Australia"
  | "Aruba"
  | "Åland Islands"
  | "Azerbaijan"
  | "Bosnia and Herzegovina"
  | "Barbados"
  | "Bangladesh"
  | "Belgium"
  | "Burkina Faso"
  | "Bulgaria"
  | "Bahrain"
  | "Burundi"
  | "Benin"
  | "Saint Barthélemy"
  | "Bermuda"
  | "Brunei"
  | "Bolivia"
  | "Bonaire, Sint Eustatius and Saba"
  | "Brazil"
  | "Bahamas"
  | "Bhutan"
  | "Bouvet Island"
  | "Botswana"
  | "Belarus"
  | "Belize"
  | "Canada"
  | "Cocos (Keeling) Islands"
  | "Democratic Republic of the Congo"
  | "Central African Republic"
  | "Republic of the Congo"
  | "Switzerland"
  | "Côte d'Ivoire"
  | "Cook Islands"
  | "Chile"
  | "Cameroon"
  | "China"
  | "Colombia"
  | "Costa Rica"
  | "Cuba"
  | "Cape Verde"
  | "Curaçao"
  | "Christmas Island"
  | "Cyprus"
  | "Czech Republic"
  | "Germany"
  | "Djibouti"
  | "Denmark"
  | "Dominica"
  | "Dominican Republic"
  | "Algeria"
  | "Ecuador"
  | "Estonia"
  | "Egypt"
  | "Western Sahara"
  | "Eritrea"
  | "Spain"
  | "Ethiopia"
  | "Finland"
  | "Fiji"
  | "Falkland Islands"
  | "Federated States of Micronesia"
  | "Faroe Islands"
  | "France"
  | "Gabon"
  | "United Kingdom"
  | "Grenada"
  | "Georgia"
  | "French Guiana"
  | "Guernsey"
  | "Ghana"
  | "Gibraltar"
  | "Greenland"
  | "Gambia"
  | "Guinea"
  | "Guadeloupe"
  | "Equatorial Guinea"
  | "Greece"
  | "South Georgia and the South Sandwich Islands"
  | "Guatemala"
  | "Guam"
  | "Guinea-Bissau"
  | "Guyana"
  | "Hong Kong"
  | "Heard Island and McDonald Islands"
  | "Honduras"
  | "Croatia"
  | "Haiti"
  | "Hungary"
  | "Indonesia"
  | "Ireland"
  | "Israel"
  | "Isle of Man"
  | "India"
  | "British Indian Ocean Territory"
  | "Iraq"
  | "Iran"
  | "Iceland"
  | "Italy"
  | "Jersey"
  | "Jamaica"
  | "Jordan"
  | "Japan"
  | "Kenya"
  | "Kyrgyzstan"
  | "Cambodia"
  | "Kiribati"
  | "Comoros"
  | "Saint Kitts and Nevis"
  | "Democratic People's Republic of Korea"
  | "Republic of Korea"
  | "Kuwait"
  | "Cayman Islands"
  | "Kazakhstan"
  | "Lao People's Democratic Republic"
  | "Lebanon"
  | "Saint Lucia"
  | "Liechtenstein"
  | "Sri Lanka"
  | "Liberia"
  | "Lesotho"
  | "Lithuania"
  | "Luxembourg"
  | "Latvia"
  | "Libya"
  | "Morocco"
  | "Monaco"
  | "Republic of Moldova"
  | "Montenegro"
  | "Saint Martin"
  | "Madagascar"
  | "Marshall Islands"
  | "Macedonia"
  | "Mali"
  | "Myanmar"
  | "Mongolia"
  | "Macau"
  | "Northern Mariana Islands"
  | "Martinique"
  | "Mauritania"
  | "Montserrat"
  | "Malta"
  | "Mauritius"
  | "Maldives"
  | "Malawi"
  | "Mexico"
  | "Malaysia"
  | "Mozambique"
  | "Namibia"
  | "New Caledonia"
  | "Niger"
  | "Norfolk Island"
  | "Nigeria"
  | "Nicaragua"
  | "Netherlands"
  | "Norway"
  | "Nepal"
  | "Nauru"
  | "Niue"
  | "New Zealand"
  | "Oman"
  | "Panama"
  | "Peru"
  | "French Polynesia"
  | "Papua New Guinea"
  | "Philippines"
  | "Pakistan"
  | "Poland"
  | "Saint Pierre and Miquelon"
  | "Pitcairn Islands"
  | "Puerto Rico"
  | "State of Palestine"
  | "Portugal"
  | "Palau"
  | "Paraguay"
  | "Qatar"
  | "Réunion"
  | "Romania"
  | "Serbia"
  | "Russian Federation"
  | "Rwanda"
  | "Saudi Arabia"
  | "Solomon Islands"
  | "Seychelles"
  | "Sudan"
  | "Sweden"
  | "Singapore"
  | "Saint Helena"
  | "Slovenia"
  | "Svalbard and Jan Mayen"
  | "Slovakia"
  | "Sierra Leone"
  | "San Marino"
  | "Senegal"
  | "Somalia"
  | "Suriname"
  | "South Sudan"
  | "São Tomé and Príncipe"
  | "El Salvador"
  | "Sint Maarten"
  | "Syrian Arab Republic"
  | "Swaziland"
  | "Turks and Caicos Islands"
  | "Chad"
  | "French Southern Territories"
  | "Togo"
  | "Thailand"
  | "Tajikistan"
  | "Tokelau"
  | "Timor-Leste"
  | "Turkmenistan"
  | "Tunisia"
  | "Tonga"
  | "Turkey"
  | "Trinidad and Tobago"
  | "Tuvalu"
  | "Taiwan"
  | "Tanzania"
  | "Ukraine"
  | "Uganda"
  | "United States Minor Outlying Islands"
  | "United States"
  | "Uruguay"
  | "Uzbekistan"
  | "Vatican City"
  | "Saint Vincent and the Grenadines"
  | "Venezuela"
  | "British Virgin Islands"
  | "United States Virgin Islands"
  | "Vietnam"
  | "Vanuatu"
  | "Wallis and Futuna"
  | "Samoa"
  | "Kosovo"
  | "Yemen"
  | "Mayotte"
  | "South Africa"
  | "Zambia"
  | "Zimbabwe"
;

export type PaymentsBillingAddressesLocationsResponse = {
  ok: true;
  countries: string[];
  us_states: Record<PaymentsBillingAddressesLocationsUsStatesName, PaymentsBillingAddressesLocationsUsStatesEntry>;
  canada_states: {
    Alberta: string;
    "British Columbia": string;
    Manitoba: string;
    "New Brunswick": string;
    "Newfoundland and Labrador": string;
    "Nova Scotia": string;
    Nunavut: string;
    "Northwest Territories": string;
    Ontario: string;
    "Prince Edward Island": string;
    Quebec: string;
    Saskatchewan: string;
    Yukon: string;
  };
  taxable_zipcodes: Record<string, unknown>;
  vat_countries: Record<PaymentsBillingAddressesLocationsVatCountriesName, PaymentsBillingAddressesLocationsVatCountriesEntry>;
  abn_countries: {
    Australia: string;
  };
  country_map: Record<PaymentsBillingAddressesLocationsCountryMapName, PaymentsBillingAddressesLocationsCountryMapEntry>;
};

export type PaymentsBillingAddressesValidateAndSetResponse = {
  ok: true;
  id: number;
  team_id: number;
  date_create: number;
  date_update: number;
  date_delete: number;
  fields: {
    country_code: string;
    city: string;
    state: string;
    street1: string;
    street2: string;
    zip: string;
    date_validate: null;
    is_business: boolean;
    waiting_for_vat: boolean;
    is_vat_registered: boolean;
    country: string;
    notes: null;
    company_name: string;
  };
};

export type PaymentsBillingHistoryListResponse = {
  ok: true;
  billing_items: Array<{
    id: number;
    type: string;
    date_create: number;
    status: string;
    credits: {
      amount: number;
      currency: string;
    };
  }>;
};

export type PaymentsCheckoutConfigResponse = {
  ok: true;
  allowed_payment_methods: string[];
  available_terms: string[];
  product: {
    id: string;
    level: string;
    is_trial: boolean;
    currency: string;
    term: string;
  };
  is_future_switch: boolean;
  redirect_url: string;
  selected_payment_method: string;
  is_eligible_for_data_deletion: boolean;
  current_product: {
    id: string;
    level: string;
    is_trial: boolean;
    currency: string;
    is_invoice: boolean;
  };
  auto_detected_country_code: string;
};

export type PaymentsStatusGetResponse = {
  ok: true;
  provisions_status: {
    level: string;
    renewal_level: string;
    term_info: {
      term: string;
      start_dt: string;
      start_ts: number;
      total_time: number;
      total_days: number;
      remaining_days: number;
      fraction: number;
    };
    product_name_for_display: string;
  };
  payment_method: string;
};

export type PaymentsStripeConfigGetResponse = {
  ok: true;
  account: {
    code: string;
    mode: string;
    publishable_api_key: string;
  };
};

export type PaymentsStripeCustomerCreateResponse = {
  ok: true;
  account_code: string;
  id: string;
  created: number;
  invoice_settings: {
    default_payment_method: null;
  };
  payment_method: {
    types: string[];
  };
  wallet: {
    types: unknown[];
  };
};

export type PaymentsStripeCustomerGetResponse = {
  ok: true;
  account_code: string;
  id: string;
  created: number;
  invoice_settings: {
    default_payment_method: null;
  };
  payment_method: {
    types: string[];
  };
  wallet: {
    types: unknown[];
  };
};

export type PaymentsStripePaymentMethodListResponse = {
  ok: true;
  payment_methods: unknown[];
};

export type PinsAddResponse = {
  ok: true;
};

export type PinsListResponse = {
  ok: true;
  items: Array<{
    type: string;
    created: number;
    created_by: string;
    channel: string;
    message: {
      subtype: string;
      user: string;
      thread_ts: string;
      root: {
        user: string;
        type: string;
        ts: string;
        client_msg_id: string;
        text: string;
        team: string;
        user_team: string;
        source_team: string;
        user_profile: {
          avatar_hash: string;
          image_72: string;
          first_name: string;
          real_name: string;
          display_name: string;
          team: string;
          name: string;
          is_restricted: boolean;
          is_ultra_restricted: boolean;
        };
        thread_ts: string;
        reply_count: number;
        reply_users_count: number;
        latest_reply: string;
        reply_users: string[];
        is_locked: boolean;
        subscribed: boolean;
        last_read: string;
        blocks: Array<{
          type: string;
          block_id: string;
        }>;
      };
      type: string;
      ts: string;
      client_msg_id: string;
      text: string;
      blocks: Array<{
        type: string;
        block_id: string;
      }>;
      pinned_to: string[];
      reactions: Array<{
        name: string;
        users: string[];
        count: number;
      }>;
      permalink: string;
    };
  }>;
};

export type PinsRemoveResponse = {
  ok: true;
};

export type PresenceSetResponse = {
  ok: true;
};

export type PromoCampaignsEligibilityInfoResponse = {
  ok: true;
  is_eligible: boolean;
};

export type PromoCampaignsRedeemResponse = {
  ok: true;
  trial_expiration_date: string;
};

export type QuipCloneCanvasResponse = {
  ok: true;
  file: {
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    permalink: string;
    permalink_public: string;
    url_static_preview: string;
    quip_thread_id: string;
    update_notification: null;
    comments_count: number;
    is_starred: boolean;
    shares: Record<string, unknown>;
    channels: unknown[];
    groups: unknown[];
    ims: unknown[];
    has_more_shares: boolean;
    access: string;
    private_channels_with_file_access_count: number;
    dm_mpdm_users_with_file_access: Array<{
      user_id: string;
      access: string;
    }>;
    teams_shared_with: string[];
    is_restricted_sharing_enabled: boolean;
    has_rich_preview: boolean;
    file_access: string;
    org_or_workspace_access: string;
    title_blocks: Array<{
      type: string;
    }>;
    canvas_creator_id: string;
    team_pref_version_history_enabled: boolean;
    canvas_printing_enabled: boolean;
    source_canvas_id: string;
    is_ai_suggested: boolean;
  };
};

export type QuipLookupFileIdResponse = {
  ok: true;
  file_id: string;
};

export type QuipLookupThreadIdsResponse = {
  ok: true;
  lookup: Record<FileId, string>;
};

export type QuipThreadMarkResponse = {
  ok: true;
};

export type QuipThreadSynchronizeResponse = {
  ok: true;
  message: {
    user: string;
    subtype: string;
    document_comment: {
      thread_id: string;
      authors: string[];
      section_edited_ts: number;
      section_created_ts: number;
      is_archived: boolean;
      is_visible: boolean;
      most_recent_editor: string;
    };
    type: string;
    ts: string;
    text: string;
    team: string;
    user_team: string;
    source_team: string;
    user_profile: {
      avatar_hash: string;
      image_72: string;
      first_name: string;
      real_name: string;
      display_name: string;
      team: string;
      name: string;
      is_restricted: boolean;
      is_ultra_restricted: boolean;
    };
    thread_ts: string;
    reply_count: number;
    reply_users_count: number;
    latest_reply: string;
    reply_users: string[];
    is_locked: boolean;
    subscribed: boolean;
    blocks: Array<{
      type: string;
      block_id: string;
    }>;
  };
};

export type ReactionsAddResponse = {
  ok: true;
};

export type ReactionsRemoveResponse = {
  ok: true;
};

export type RetailCostResponse = {
  ok: true;
  plan_cost: {
    product_id: string;
    currency: string;
    unit_price: number;
    billable_active_users: number;
    paid_seats: number;
    subtotal: number;
    undiscounted_subtotal: number;
    credits: {
      total_credits: number;
      credits_remaining: number;
      credits_applied: number;
      additional_credits_remaining: number;
      total_credits_remaining: number;
      total_credits_applied: number;
      credit_balance: number;
    };
    tax: {
      is_vat: boolean;
      tax_name: string;
      sales_tax_amt: number;
      tax_percentage: number;
      suretax_txn_id: number;
    };
    recurring_tax_amt: number;
    total_recurring: number;
    total_due_today: number;
    quoted_term_end: string;
    quoted_term_start: string;
    pre_tax_total: number;
    outstanding_invoice_amount: number;
    prorated_refund: number;
    discounted_unit_price: number;
    discount: {
      percentage: number;
      duration: number;
      type: string;
      name: string;
      promo_type: string;
      amount: number;
    };
    addons: {
      purchase: Record<string, unknown>;
      refund: Record<string, unknown>;
    };
  };
};

export type RetailGetAvailablePlansResponse = {
  ok: true;
  currency: string;
  country: string;
  plans: {
    standard: {
      monthly: {
        product: {
          product_id: string;
          term: string;
          cost_per_m: number;
          cost_per_term: number;
          currency: string;
          level: string;
          is_inv: boolean;
          available_addons: unknown[];
        };
        cost?: {
          product_id: string;
          currency: string;
          unit_price: number;
          billable_active_users: number;
          paid_seats: number;
          subtotal: number;
          undiscounted_subtotal: number;
          credits: {
            total_credits: number;
            credits_remaining: number;
            credits_applied: number;
            additional_credits_remaining: number;
            total_credits_remaining: number;
            total_credits_applied: number;
            credit_balance: number;
          };
          tax: null;
          recurring_tax_amt: number;
          total_recurring: number;
          total_due_today: number;
          quoted_term_end: string;
          quoted_term_start: string;
          pre_tax_total: number;
          outstanding_invoice_amount: number;
          prorated_refund: number;
          discounted_unit_price: number;
          discount: {
            percentage: number;
            duration: number;
            type: string;
            name: string;
            promo_type: string;
            amount: number;
          };
        };
      };
      yearly: {
        product: {
          product_id: string;
          term: string;
          cost_per_m: number;
          cost_per_term: number;
          currency: string;
          level: string;
          is_inv: boolean;
          available_addons: unknown[];
        };
        cost?: {
          product_id: string;
          currency: string;
          unit_price: number;
          billable_active_users: number;
          paid_seats: number;
          subtotal: number;
          undiscounted_subtotal: number;
          credits: {
            total_credits: number;
            credits_remaining: number;
            credits_applied: number;
            additional_credits_remaining: number;
            total_credits_remaining: number;
            total_credits_applied: number;
            credit_balance: number;
          };
          tax: null;
          recurring_tax_amt: number;
          total_recurring: number;
          total_due_today: number;
          quoted_term_end: string;
          quoted_term_start: string;
          pre_tax_total: number;
          outstanding_invoice_amount: number;
          prorated_refund: number;
        };
      };
    };
    plus: {
      monthly: {
        product: {
          product_id: string;
          term: string;
          cost_per_m: number;
          cost_per_term: number;
          currency: string;
          level: string;
          is_inv: boolean;
          available_addons: unknown[];
        };
        cost?: {
          product_id: string;
          currency: string;
          unit_price: number;
          billable_active_users: number;
          paid_seats: number;
          subtotal: number;
          undiscounted_subtotal: number;
          credits: {
            total_credits: number;
            credits_remaining: number;
            credits_applied: number;
            additional_credits_remaining: number;
            total_credits_remaining: number;
            total_credits_applied: number;
            credit_balance: number;
          };
          tax: null;
          recurring_tax_amt: number;
          total_recurring: number;
          total_due_today: number;
          quoted_term_end: string;
          quoted_term_start: string;
          pre_tax_total: number;
          outstanding_invoice_amount: number;
          prorated_refund: number;
          discounted_unit_price: number;
          discount: {
            percentage: number;
            duration: number;
            type: string;
            name: string;
            promo_type: string;
            amount: number;
          };
        };
      };
      yearly: {
        product: {
          product_id: string;
          term: string;
          cost_per_m: number;
          cost_per_term: number;
          currency: string;
          level: string;
          is_inv: boolean;
          available_addons: unknown[];
        };
        cost?: {
          product_id: string;
          currency: string;
          unit_price: number;
          billable_active_users: number;
          paid_seats: number;
          subtotal: number;
          undiscounted_subtotal: number;
          credits: {
            total_credits: number;
            credits_remaining: number;
            credits_applied: number;
            additional_credits_remaining: number;
            total_credits_remaining: number;
            total_credits_applied: number;
            credit_balance: number;
          };
          tax: null;
          recurring_tax_amt: number;
          total_recurring: number;
          total_due_today: number;
          quoted_term_end: string;
          quoted_term_start: string;
          pre_tax_total: number;
          outstanding_invoice_amount: number;
          prorated_refund: number;
        };
      };
    };
  };
  team_current_product: string;
  payments_status: {
    provisions_status: {
      level: string;
      renewal_level?: string;
      term_info?: {
        term: string;
        start_dt?: string;
        start_ts?: number;
        total_time?: number;
        total_days?: number;
        remaining_days?: number;
        fraction?: number;
      };
    };
    payment_method?: string;
  };
  team_next_product: string;
  team_current_product_is_bespoke: boolean;
  team_current_product_is_comp: boolean;
  team_current_addon_types: unknown[];
  country_code: string;
  pricing_page_promotional_header?: {
    name: string;
    data: {
      discount_pct: number;
      discount_duration: number;
      promo_type: string;
      discount_expiration_ts: number;
      discount_expiration_date: string;
      upgrade_plan_levels: string[];
      upgrade_product_ids: string[];
    };
  };
  promo_type?: string;
  promo_subtype?: string;
};

export type RetailPlansResponse = {
  ok: true;
  plans: Record<string, unknown>;
  additional_addon_info: {
    is_slack_ai_language_unsupported: boolean;
  };
};

export type RoomsInviteResponseResponse = {
  ok: true;
};

export type SavedAddResponse = {
  ok: true;
  item: {
    item_id: string;
    item_type: string;
    date_created: number;
    date_due: number;
    date_completed: number;
    date_updated: number;
    is_archived: boolean;
    date_snoozed_until: number;
    description?: Array<{
      type: string;
      block_id: string;
    }>;
    state: string;
    ts?: string;
  };
};

export type SavedClearCompletedResponse = {
  ok: true;
};

export type SavedDeleteResponse = {
  ok: true;
};

export type SavedListResponse = {
  ok: true;
  saved_items: Array<{
    item_id: string;
    item_type: string;
    date_created: number;
    date_due: number;
    date_completed: number;
    date_updated: number;
    is_archived: boolean;
    date_snoozed_until: number;
    ts: string;
    state: string;
    todo_state?: string;
  }>;
  counts: {
    uncompleted_count: number;
    uncompleted_overdue_count: number;
    archived_count: number;
    completed_count: number;
    total_count: number;
  };
  response_metadata: {
    next_cursor: string;
  };
};

export type SavedUpdateResponse = {
  ok: true;
  item: {
    item_id: string;
    item_type: string;
    date_created: number;
    date_due: number;
    date_completed: number;
    date_updated: number;
    is_archived: boolean;
    date_snoozed_until: number;
    ts: string;
    state: string;
  };
};

export type ScreenheroRoomsInfoResponse = {
  ok: true;
  room: {
    id: string;
    name: string;
    media_server: string;
    created_by: string;
    date_start: number;
    date_end: number;
    participants: string[];
    participant_history: string[];
    participants_events: Record<UserId, {
      user_team: Record<string, unknown>;
      joined: boolean;
      camera_on: boolean;
      camera_off: boolean;
      screenshare_on: boolean;
      screenshare_off: boolean;
    }>;
    participants_camera_on: unknown[];
    participants_camera_off: unknown[];
    participants_screenshare_on: string[];
    participants_screenshare_off: unknown[];
    canvas_thread_ts: string;
    thread_root_ts: string;
    channels: string[];
    is_dm_call: boolean;
    was_rejected: boolean;
    was_missed: boolean;
    was_accepted: boolean;
    has_ended: boolean;
    background_id: string;
    canvas_background: string;
    is_prewarmed: boolean;
    is_scheduled: boolean;
    recording: {
      can_record_summary: string;
    };
    locale: string;
    attached_file_ids: unknown[];
    media_backend_type: string;
    display_id: string;
    app_id: string;
    call_family: string;
    pending_invitees: Record<UserId, string>;
    last_invite_status_by_user: Record<UserId, string>;
    knocks: Record<string, unknown>;
    huddle_link: string;
  };
};

export type SearchAppDirectoryResponse = {
  ok: true;
  suggestions: unknown[];
  total_found: number;
  next_cursor: string;
};

export type SearchAutocompleteResponse = {
  ok: true;
  suggestions: Array<{
    hash: string;
    text: string;
    type: string;
    ts: number;
    count: number;
  }>;
  query_suggestions: unknown[];
};

export type SearchAutocompleteFilesFilesEntry = {
  date: string;
  in_reply_to: null;
  reply_to: string;
  message_id: string;
};

export type SearchAutocompleteFilesFilesName =
  | "id"
  | "created"
  | "timestamp"
  | "name"
  | "title"
  | "mimetype"
  | "filetype"
  | "pretty_type"
  | "user"
  | "user_team"
  | "editable"
  | "size"
  | "mode"
  | "is_external"
  | "external_type"
  | "is_public"
  | "public_url_shared"
  | "display_as_bot"
  | "username"
  | "url_private"
  | "url_private_download"
  | "media_display_type"
  | "thumb_64"
  | "thumb_80"
  | "thumb_360"
  | "thumb_360_w"
  | "thumb_360_h"
  | "thumb_480"
  | "thumb_480_w"
  | "thumb_480_h"
  | "thumb_160"
  | "thumb_720"
  | "thumb_720_w"
  | "thumb_720_h"
  | "thumb_800"
  | "thumb_800_w"
  | "thumb_800_h"
  | "original_w"
  | "original_h"
  | "thumb_tiny"
  | "permalink"
  | "permalink_public"
  | "shares"
  | "channels"
  | "groups"
  | "ims"
  | "has_more_shares"
  | "has_rich_preview"
  | "file_access"
  | "edit_link"
  | "preview"
  | "preview_highlight"
  | "lines"
  | "lines_more"
  | "preview_is_truncated"
  | "url_static_preview"
  | "quip_thread_id"
  | "updated"
  | "update_notification"
  | "canvas_readtime"
  | "access"
  | "private_channels_with_file_access_count"
  | "dm_mpdm_users_with_file_access"
  | "teams_shared_with"
  | "is_restricted_sharing_enabled"
  | "excluded_from_slack_ai"
  | "org_or_workspace_access"
  | "title_blocks"
  | "canvas_creator_id"
  | "team_pref_version_history_enabled"
  | "canvas_printing_enabled"
  | "is_ai_suggested"
  | "thumb_960"
  | "thumb_960_w"
  | "thumb_960_h"
  | "thumb_1024"
  | "thumb_1024_w"
  | "thumb_1024_h"
  | "subject"
  | "to"
  | "from"
  | "cc"
  | "attachments"
  | "original_attachment_count"
  | "inline_attachment_count"
  | "plain_text"
  | "preview_plain_text"
  | "headers"
  | "has_more"
  | "sent_to_self"
  | "bot_id"
  | "app_id"
  | "is_transcription_region_supported"
  | "transcription"
  | "mp4"
  | "hls"
  | "hls_embed"
  | "mp4_low"
  | "duration_ms"
  | "thumb_video"
  | "thumb_video_w"
  | "thumb_video_h"
  | "last_read"
  | "is_huddle_canvas"
  | "huddle_summary_id"
  | "huddle_transcript_file_id"
  | "thumb_360_gif"
  | "thumb_480_gif"
  | "deanimate"
  | "deanimate_gif"
  | "thumb_pdf"
  | "thumb_pdf_w"
  | "thumb_pdf_h"
  | "subtype"
  | "vtt"
  | "source_canvas_id"
;

export type SearchAutocompleteFilesResponse = {
  ok: true;
  files: Record<SearchAutocompleteFilesFilesName, SearchAutocompleteFilesFilesEntry>[];
};

export type SearchAutocompleteIntentModelIntentModelWeightsEntry = number;

export type SearchAutocompleteIntentModelIntentModelWeightsName =
  | "FILE_LATEST_VIEW_BY_USER_OLDER_90D"
  | "CHANNEL_LATEST_MSG_AGE_DECAY_2H"
  | "FILE_LATEST_ACTION_AGE_DECAY_90D"
  | "CHANNEL_LATEST_MSG_AGE_DECAY_7D"
  | "USER_MPIM_READ_AGE_DECAY_7D"
  | "MPIM_USER_CTR_30DD"
  | "USER_DM_READ_OLDER_30D"
  | "CHANNEL_IS_UNREAD"
  | "USER_DM_READ_AGE_DECAY_2H_V3"
  | "FRECENCY_LOG_ITEM_COUNT_SCALED"
  | "USER_DM_READ_OLDER_90D"
  | "FILE_FROM_CURRENT_USER"
  | "STRING_NORMAL_PREFIX_MATCH"
  | "FILE_LOG_ACTIONS"
  | "MEMBER_OF_CURRENT_CHANNEL"
  | "MPIM_MEMBER_NAME_MATCHES"
  | "USER_PRIORITY"
  | "MPIM_READ_AGE_DECAY_7D"
  | "FILE_NAME_CONTAINS_QUERY_NORMALIZED"
  | "NAV_NORMAL_PREFIX_MATCH_USER"
  | "USER_IS_BOT"
  | "CHANNEL_READ_AGE_DECAY_2H"
  | "USER_ENTITY_TYPE_CTR_30DD"
  | "USER_DM_READ_AGE_DECAY_7D_V3"
  | "USER_FIRST_NAME_NORMAL_MATCH"
  | "FILE_AGE_DECAY_7D"
  | "USER_SAME_TEAM"
  | "USER_LAST_NAME_NORMAL_MATCH"
  | "USER_HAS_DMED"
  | "FRECENCY_LOG_HIT_COUNT_SCALED"
  | "CHANNEL_IS_MEMBER"
  | "NAV_NORMAL_PREFIX_MATCH_NO_USER"
  | "USER_DM_READ_OLDER_7D"
  | "FILE_IS_CANVAS"
  | "USER_IS_ACTIVE"
  | "CHANNEL_READ_AGE_DECAY_7D"
  | "USER_IS_EXTERNAL"
  | "FILE_LOG_PUBLIC_SHARES"
  | "MPIM_MEMBER_ALL_MATCHES"
  | "FRECENCY_BONUS"
  | "CHANNEL_IS_ARCHIVED"
  | "CHANNEL_IS_STARRED"
  | "MPIM_WITH_DEACTIVATED_USER"
  | "FILE_AGE_DECAY_90D"
  | "FILE_LOG_PRIVATE_SHARES"
  | "FUZZY_SCORE"
;

export type SearchAutocompleteIntentModelResponse = {
  ok: true;
  intent_model: {
    weights: Record<SearchAutocompleteIntentModelIntentModelWeightsName, SearchAutocompleteIntentModelIntentModelWeightsEntry>;
    bias: number;
    threshold: number;
  };
};

export type SearchAutocompleteModelModelEntry = number;

export type SearchAutocompleteModelModelName =
  | "file_latest_view_by_user_older_90d"
  | "channel_latest_msg_age_decay_2h"
  | "string_exact_prefix_match"
  | "file_latest_action_age_decay_90d"
  | "channel_latest_msg_age_decay_7d"
  | "user_mpim_read_age_decay_7d"
  | "type_navigation_view"
  | "mpim_user_ctr_30dd"
  | "query_frecency_bonus"
  | "active_token_filter_during"
  | "type_navigation_team"
  | "emoji_user_ctr_30dd"
  | "type_query"
  | "user_dm_read_older_30d"
  | "channel_is_unread"
  | "user_dm_read_age_decay_2h_v3"
  | "active_token_filter_with"
  | "mpim_read_age_decay_2h"
  | "frecency_log_item_count_scaled"
  | "user_dm_read_older_90d"
  | "file_from_current_user"
  | "filter_user_priority"
  | "type_navigation_channel"
  | "active_token_phrase"
  | "string_normal_prefix_match"
  | "file_log_actions"
  | "active_token_string"
  | "member_of_current_channel"
  | "mpim_member_name_matches"
  | "user_priority"
  | "active_token_filter_before"
  | "filter_user_dm_read_age_decay_7d"
  | "type_navigation_user"
  | "active_token_filter_from"
  | "mpim_latest_msg_age_decay_2h"
  | "mpim_members"
  | "num_workspaces_intersecting_with_searcher"
  | "emoji_combo_break_1"
  | "frecency_weight_hit_visits"
  | "is_broadcast_keyword"
  | "mpim_read_age_decay_7d"
  | "mpim_is_unread"
  | "file_name_contains_query_normalized"
  | "filter_user_dm_read_age_decay_2h"
  | "nav_normal_prefix_match_user"
  | "user_is_bot"
  | "emoji_combo_break_2"
  | "channel_read_age_decay_2h"
  | "user_entity_type_ctr_30dd"
  | "user_dm_read_age_decay_7d_v3"
  | "user_first_name_normal_match"
  | "type_navigation_modal"
  | "mpim_is_starred"
  | "user_is_deactivated"
  | "file_age_decay_7d"
  | "active_token_member"
  | "type_user_query"
  | "user_same_team"
  | "mpim_latest_msg_age_decay_7d"
  | "user_last_name_normal_match"
  | "user_has_dmed"
  | "emoji_combo_break_0"
  | "type_workflow_trigger"
  | "only_matches_previous_name"
  | "frecency_log_hit_count_scaled"
  | "active_token_filter_after"
  | "channel_is_member"
  | "active_token_filter_in"
  | "emoji_query_length_ratio"
  | "nav_normal_match_user"
  | "here_keyword_exact_match"
  | "nav_normal_prefix_match_no_user"
  | "user_dm_null"
  | "user_dm_read_older_7d"
  | "file_is_canvas"
  | "type_navigation_mpim"
  | "user_last_name_normal_prefix_match"
  | "has_workspace_intersection_with_searcher"
  | "emoji_exact_match"
  | "user_is_active"
  | "query_token_normal_prefix_match"
  | "frecency_weight_item_visits"
  | "channel_read_age_decay_7d"
  | "query_frecency_raw"
  | "user_is_external"
  | "type_query_history"
  | "user_email_only_match"
  | "file_log_public_shares"
  | "active_token_filter_on"
  | "mpim_member_all_matches"
  | "current_user_texty"
  | "frecency_bonus"
  | "active_token_filter_to"
  | "type_app_action"
  | "channel_is_archived"
  | "filter_user_is_active"
  | "channel_is_starred"
  | "active_token_filter_has"
  | "user_is_in_current_thread"
  | "type_navigation_file"
  | "mpim_with_deactivated_user"
  | "user_first_name_normal_prefix_match"
  | "query_frecency_weight_hit_visits"
  | "file_age_decay_90d"
  | "member_of_searcher_default_team"
  | "file_log_private_shares"
  | "fuzzy_score"
  | "mpim_num_other_members_equals_num_query_words"
  | "mpim_all_other_members_names_have_prefix_match"
;

export type SearchAutocompleteModelResponse = {
  ok: true;
  model: Record<SearchAutocompleteModelModelName, SearchAutocompleteModelModelEntry>;
};

export type SearchAutocompleteOfflineFeaturesResponse = {
  ok: true;
  top_emojis: Record<EmojiName, number[]>;
  top_mpims: Record<ChannelId, number[]>;
  top_channels: Record<ChannelId, number[]>;
  top_users: Record<UserId, number[]>;
  top_app_actions: Record<AppActionId, number[]>;
  top_channel_actions: Record<string, unknown>;
  top_slash_commands: Record<string, unknown>;
  top_workflow_triggers: Record<WorkflowTriggerId, number[]>;
  top_global_actions: Record<string, unknown>;
  mpim_features: string[];
  channel_features: string[];
  user_features: string[];
  mpim_ctr: number;
  channel_ctr: number;
  user_ctr: number;
  other_ctr: number;
  app_action_ctr: number;
  slash_command_ctr: number;
  workflow_trigger_ctr: number;
  global_action_ctr: number;
  channel_action_ctr: number;
  default_features: string[];
  users_has_dmed: Record<UserId, {
    last_read_abs: number;
  }>;
  users_has_mpdmed: Record<UserId, {
    last_read_abs: number;
    membership_count: number;
  }>;
  channel_priority_28d: Record<ChannelId, number>;
  channel_priority_90d: Record<ChannelId, number>;
  user_affinity: Record<UserId, number>;
};

export type SearchAutocompleteTopEmojisResponse = {
  ok: true;
  user: string[];
  org: string[];
};

export type SearchAutocompleteTopEngagedFilesResponse = {
  ok: true;
  files: Array<{
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    media_display_type?: string;
    thumb_64?: string;
    thumb_80?: string;
    thumb_360?: string;
    thumb_360_w?: number;
    thumb_360_h?: number;
    thumb_480?: string;
    thumb_480_w?: number;
    thumb_480_h?: number;
    thumb_160?: string;
    thumb_720?: string;
    thumb_720_w?: number;
    thumb_720_h?: number;
    thumb_800?: string;
    thumb_800_w?: number;
    thumb_800_h?: number;
    thumb_960?: string;
    thumb_960_w?: number;
    thumb_960_h?: number;
    thumb_1024?: string;
    thumb_1024_w?: number;
    thumb_1024_h?: number;
    original_w?: number;
    original_h?: number;
    thumb_tiny?: string;
    permalink: string;
    permalink_public: string;
    skipped_shares: boolean;
    has_rich_preview: boolean;
    file_access: string;
    url_static_preview?: string;
    quip_thread_id?: string;
    updated?: number;
    update_notification?: number;
    teams_shared_with?: string[];
    is_restricted_sharing_enabled?: boolean;
    access?: string;
    org_or_workspace_access?: string;
    title_blocks?: Array<{
      type: string;
      block_id: string;
    }>;
    canvas_creator_id?: string;
    team_pref_version_history_enabled?: boolean;
    canvas_printing_enabled?: boolean;
    last_read?: number;
    is_ai_suggested?: boolean;
    is_transcription_region_supported?: boolean;
    transcription?: {
      status: string;
    };
    mp4?: string;
    hls?: string;
    hls_embed?: string;
    mp4_low?: string;
    duration_ms?: number;
    thumb_video?: string;
    thumb_video_w?: number;
    thumb_video_h?: number;
  }>;
};

export type SearchAutocompleteTriggersResponse = {
  ok: true;
  triggers: unknown[];
};

export type SearchEnterpriseResponse = {
  ok: true;
  teams: Array<{
    id: string;
    name: string;
    url: string;
    domain: string;
    avatar_base_url: string;
    is_verified: boolean;
    icon: {
      image_default: boolean;
      image_34: string;
      image_44: string;
      image_68: string;
      image_88: string;
      image_102: string;
      image_230: string;
      image_132: string;
    };
    discoverable: string;
  }>;
  items: Array<{
    id: string;
    name: string;
    url?: string;
    domain?: string;
    avatar_base_url?: string;
    is_verified?: boolean;
    icon?: {
      image_default: boolean;
      image_34: string;
      image_44: string;
      image_68: string;
      image_88: string;
      image_102: string;
      image_230: string;
      image_132: string;
    };
    discoverable?: string;
    deleted?: boolean;
    color?: string;
    real_name?: string;
    tz?: string;
    tz_label?: string;
    tz_offset?: number;
    profile?: {
      title: string;
      phone: string;
      skype: string;
      real_name: string;
      real_name_normalized: string;
      display_name: string;
      display_name_normalized: string;
      fields: Record<ProfileFieldId, {
        value: string;
        alt: string;
      }>;
      status_text: string;
      status_emoji: string;
      status_emoji_display_info: Array<{
        display_url: string;
        unicode?: string;
        display_alias?: string;
      }>;
      status_expiration: number;
      avatar_hash: string;
      first_name?: string;
      last_name?: string;
      image_24: string;
      image_32: string;
      image_48: string;
      image_72: string;
      image_192: string;
      image_512: string;
      status_text_canonical: string;
      team: string;
      guest_invited_by?: string;
      image_original?: string;
      is_custom_image?: boolean;
      image_1024?: string;
      start_date?: string;
      huddle_state?: string;
      huddle_state_expiration_ts?: number;
      pronouns?: string;
    };
    is_admin?: boolean;
    is_owner?: boolean;
    is_primary_owner?: boolean;
    is_restricted?: boolean;
    is_ultra_restricted?: boolean;
    is_bot?: boolean;
    is_app_user?: boolean;
    updated?: number;
    is_email_confirmed?: boolean;
    who_can_share_contact_card?: string;
    is_invited_user?: boolean;
  }>;
  num_found: number;
  next_cursor_mark: string;
};

export type SearchInlineResponse = {
  ok: true;
  query: string;
  pagination: {
    total_count: number;
    page: number;
    per_page: number;
    page_count: number;
    first: number;
    last: number;
  };
  items: Array<{
    ts: string;
    user: string;
    permalink: string;
    iid: string;
    subtype?: string;
    bot_id?: string;
    channel_id?: string;
  }>;
};

export type SearchModulesChannelsResponse = {
  ok: true;
  pagination: {
    total_count: number;
    page: number;
    per_page: number;
    page_count: number;
    first: number;
    last: number;
  };
  query: string;
  filters: {
    in?: string[];
    from?: string[];
  };
  ai_filters: Record<string, unknown>;
  manual_filters: {
    in?: string[];
    from?: string[];
  };
  module: string;
  items: Array<{
    id: string;
    name: string;
    iid: string;
    member_count: number;
    is_member: boolean;
    context_team_id: string;
    purpose: {
      value: string;
      creator: string;
      last_set: number;
    };
    timestamp: number;
    previous_name?: string;
  }>;
};

export type SearchModulesDmsResponse = {
  ok: true;
  pagination: {
    total_count: number;
    page: number;
    per_page: number;
    page_count: number;
    first: number;
    last: number;
  };
  query: string;
  filters: {
    in?: string[];
    from?: string[];
  };
  ai_filters?: Record<string, unknown>;
  manual_filters?: Record<string, unknown>;
  module: string;
  items: Array<{
    channel: {
      id: string;
      created: number;
      is_im: boolean;
      is_org_shared: boolean;
      context_team_id: string;
      updated: number;
      channel_name_highlighted: string;
    };
    message: {
      user?: string;
      type: string;
      ts: string;
      client_msg_id?: string;
      text: string;
      team: string;
      user_team?: string;
      source_team?: string;
      user_profile?: {
        avatar_hash: string;
        image_72: string;
        first_name: string;
        real_name: string;
        display_name: string;
        team: string;
        name: string;
        is_restricted: boolean;
        is_ultra_restricted: boolean;
      };
      blocks: Array<{
        type: string;
        block_id: string;
        text?: {
          type: string;
          text: string;
          verbatim: boolean;
        };
        image_url?: string;
        alt_text?: string;
        title?: {
          type: string;
          text: string;
        };
        image_width?: number;
        image_height?: number;
        image_bytes?: number;
        is_animated?: boolean;
        fallback?: string;
      }>;
      subtype?: string;
      username?: string;
      bot_id?: string;
      app_id?: string;
      trigger_id?: string;
      workflow_id?: string;
      bot_profile?: {
        id: string;
        deleted: boolean;
        name: string;
        updated: number;
        app_id: string;
        user_id: string;
        icons: {
          image_36: string;
          image_48: string;
          image_72: string;
        };
        is_workflow_bot?: boolean;
        team_id: string;
      };
      thread_ts?: string;
      root?: {
        user: string;
        type: string;
        ts: string;
        client_msg_id: string;
        text: string;
        team: string;
        user_team: string;
        source_team: string;
        user_profile: {
          avatar_hash: string;
          image_72: string;
          first_name: string;
          real_name: string;
          display_name: string;
          team: string;
          name: string;
          is_restricted: boolean;
          is_ultra_restricted: boolean;
        };
        thread_ts: string;
        reply_count: number;
        reply_users_count: number;
        latest_reply: string;
        reply_users: string[];
        is_locked: boolean;
        subscribed: boolean;
        last_read: string;
        blocks: Array<{
          type: string;
          block_id: string;
        }>;
      };
      attachments?: Array<{
        id: number;
        blocks: Array<{
          type: string;
          block_id: string;
          image_url?: string;
          alt_text?: string;
          image_width?: number;
          image_height?: number;
          image_bytes?: number;
          is_animated?: boolean;
          fallback?: string;
          text?: {
            type: string;
            text: string;
            verbatim: boolean;
          };
        }>;
        fallback: string;
        bot_id: string;
        bot_team_id: string;
        app_unfurl_url: string;
        is_app_unfurl: boolean;
        app_id: string;
      }>;
    };
  }>;
};

export type SearchModulesFilesResponse = {
  ok: true;
  pagination: {
    total_count: number;
    page: number;
    per_page: number;
    page_count: number;
    first: number;
    last: number;
  };
  query: string;
  filters: {
    in?: string[];
    file_types?: string[];
    from?: string[];
  };
  ai_filters: Record<string, unknown>;
  manual_filters: {
    in?: string[];
    file_types?: string[];
    from?: string[];
  };
  module: string;
  items: Array<{
    id: string;
    created: number;
    timestamp: number;
    name: string;
    title: string;
    mimetype: string;
    filetype: string;
    pretty_type: string;
    user: string;
    user_team: string;
    size: number;
    mode: string;
    is_external: boolean;
    is_public: boolean;
    public_url_shared: boolean;
    display_as_bot: boolean;
    username: string;
    url_private: string;
    url_private_download: string;
    permalink: string;
    permalink_public: string;
    url_static_preview?: string;
    quip_thread_id?: string;
    updated?: number;
    update_notification?: number;
    skipped_shares: boolean;
    teams_shared_with?: string[];
    is_restricted_sharing_enabled?: boolean;
    has_rich_preview: boolean;
    file_access: string;
    access?: string;
    org_or_workspace_access?: string;
    title_blocks?: Array<{
      type: string;
      block_id: string;
    }>;
    canvas_creator_id?: string;
    team_pref_version_history_enabled?: boolean;
    canvas_printing_enabled?: boolean;
    is_ai_suggested?: boolean;
    last_read?: number;
    iid: string;
    search_title: string;
    search_name: string;
    preview: null;
    search_preview: null;
    canvas_readtime?: number;
    list_metadata?: {
      schema: Array<{
        id: string;
        name: string;
        key: string;
        type: string;
        is_primary_column: boolean;
      }>;
      views: Array<{
        id: string;
        name: string;
        type: string;
        is_locked: boolean;
        position: string;
        columns: Array<{
          visible: boolean;
          key: string;
          id: string;
          position: string;
          width?: number;
          should_wrap_text?: boolean;
        }>;
        date_created: number;
        created_by: string;
        stick_column_left: boolean;
        is_all_items_view: boolean;
        default_view_key?: string;
        show_completed_items?: boolean;
      }>;
      integrations: unknown[];
      icon: string;
      description: string;
      description_blocks: unknown[];
      is_trial: boolean;
      subtask_schema: Array<{
        id: string;
        name: string;
        key: string;
        type: string;
        is_primary_column: boolean;
        options?: {
          format: string;
          default_value: null;
          show_member_name: boolean;
        };
      }>;
      creation_source: {
        type: string;
        reference_id: string;
      };
      todo_mode: boolean;
      default_view: string;
    };
    list_limits?: {
      over_row_maximum: boolean;
      row_count_limit: number;
      row_count: number;
      archived_row_count: number;
      over_column_maximum: boolean;
      column_count: number;
      column_count_limit: number;
      over_view_maximum: boolean;
      view_count: number;
      view_count_limit: number;
      max_attachments_per_cell: number;
    };
    last_editor?: string;
    list_csv_download_url?: string;
    favorites?: Array<{
      position: string;
      collection_id: string;
      collection_name: string;
    }>;
    canvas_template_mode?: string;
    template_conversion_ts?: number;
    template_converter_id?: string;
    subtype?: string;
    is_transcription_region_supported?: boolean;
    transcription?: {
      status: string;
    };
    duration_ms?: number;
    aac?: string;
    audio_wave_samples?: number[];
    media_display_type?: string;
    thumb_64?: string;
    thumb_80?: string;
    thumb_360?: string;
    thumb_360_w?: number;
    thumb_360_h?: number;
    thumb_480?: string;
    thumb_480_w?: number;
    thumb_480_h?: number;
    thumb_160?: string;
    thumb_720?: string;
    thumb_720_w?: number;
    thumb_720_h?: number;
    thumb_800?: string;
    thumb_800_w?: number;
    thumb_800_h?: number;
    original_w?: number;
    original_h?: number;
    thumb_tiny?: string;
    mp4?: string;
    hls?: string;
    hls_embed?: string;
    mp4_low?: string;
    thumb_video?: string;
    thumb_video_w?: number;
    thumb_video_h?: number;
    thumb_960?: string;
    thumb_960_w?: number;
    thumb_960_h?: number;
    thumb_1024?: string;
    thumb_1024_w?: number;
    thumb_1024_h?: number;
  }>;
};

export type SearchModulesMessagesResponse = {
  ok: true;
  pagination: {
    total_count: number;
    page: number;
    per_page: number;
    page_count: number;
    first: number;
    last: number;
  };
  query: string;
  filters: {
    in?: string[];
    from?: string[];
  };
  ai_filters: Record<string, unknown>;
  manual_filters: {
    in?: string[];
    from?: string[];
  };
  module: string;
  items: Array<{
    iid: string;
    team: string;
    channel: {
      id: string;
      is_channel: boolean;
      is_group: boolean;
      is_im: boolean;
      is_mpim: boolean;
      is_shared: boolean;
      is_org_shared: boolean;
      is_ext_shared: boolean;
      is_private: boolean;
      name: string;
      pending_shared?: unknown[];
      is_pending_ext_shared?: boolean;
      teams?: string[];
      user?: string;
    };
    messages: Array<{
      ts: string;
      user: string;
      iid: string;
      text: string;
      permalink: string;
      subtype?: string;
      username: string;
      bot_id?: string;
      bot_profile?: {
        id: string;
        app_id: string;
        name: string;
        icons: {
          image_36: string;
          image_48: string;
          image_72: string;
        };
        deleted: boolean;
        updated: number;
      };
      blocks: Array<{
        type: string;
        block_id: string;
        text?: {
          type: string;
          text: string;
          verbatim: boolean;
        };
        image_url?: string;
        alt_text?: string;
        image_width?: number;
        image_height?: number;
        image_bytes?: number;
        fallback?: string;
        is_animated?: boolean;
        accessory?: {
          type: string;
          image_url?: string;
          alt_text?: string;
          action_id?: string;
          options?: Array<{
            text: {
              type: string;
              text: string;
            };
            url: string;
          }>;
        };
      }>;
      blocks_extracts: Array<{
        type: string;
        block_id: string;
        text?: {
          type: string;
          text: {
            text: string;
            truncated_head: boolean;
            truncated_tail: boolean;
          };
          verbatim?: boolean;
        };
        accessory?: {
          type: string;
          action_id: string;
          options: Array<{
            text: {
              type: string;
              text: string;
            };
            url: string;
          }>;
        };
      }>;
      thread_ts?: string;
      reply_count?: number;
      latest_reply?: string;
      attachments?: Array<{
        from_url?: string;
        service_icon?: string;
        id: number;
        original_url?: string;
        fallback: string;
        text: string;
        title?: string;
        title_link?: string;
        service_name?: string;
        image_url?: string;
        image_width?: number;
        image_height?: number;
        image_bytes?: number;
        ts?: number;
        fields?: Array<{
          value: string;
          title: string;
          short: boolean;
        }>;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
        author_id?: string;
        channel_id?: string;
        channel_team?: string;
        is_msg_unfurl?: boolean;
        is_reply_unfurl?: boolean;
        message_blocks?: Array<{
          team: string;
          channel: string;
          ts: string;
          message: {
            blocks: Array<{
              type: string;
              block_id: string;
            }>;
          };
        }>;
        author_name?: string;
        author_link?: string;
        author_icon?: string;
        author_subname?: string;
        mrkdwn_in?: string[];
        footer?: string;
        type?: string;
        is_thread_root_unfurl?: boolean;
        color?: string;
        is_share?: boolean;
        private_channel_prompt?: boolean;
        file_id?: string;
        document_section?: {
          section_id: string;
          snippet: {
            authors: Array<{
              user_id: string;
              is_author: boolean;
              is_recent_editor: boolean;
              is_most_recent_editor: boolean;
            }>;
            section_edited_ts: number;
            file_ids: unknown[];
          };
        };
        blocks?: Array<{
          type: string;
          block_id: string;
        }>;
        bot_id?: string;
        bot_team_id?: string;
        app_unfurl_url?: string;
        is_app_unfurl?: boolean;
        app_id?: string;
        footer_icon?: string;
        msg_subtype?: string;
      }>;
      icons?: {
        image_36?: string;
        image_48: string;
        image_72?: string;
      };
      reactions?: Array<{
        name: string;
        users: string[];
        count: number;
      }>;
      files?: Array<{
        id: string;
        created: number;
        timestamp: number;
        name: string;
        title: string;
        mimetype: string;
        filetype: string;
        pretty_type: string;
        user: string;
        user_team: string;
        size: number;
        mode: string;
        is_external: boolean;
        is_public: boolean;
        public_url_shared: boolean;
        display_as_bot: boolean;
        username: string;
        url_private: string;
        url_private_download: string;
        media_display_type: string;
        thumb_64: string;
        thumb_80: string;
        thumb_360: string;
        thumb_360_w: number;
        thumb_360_h: number;
        thumb_480: string;
        thumb_480_w: number;
        thumb_480_h: number;
        thumb_160: string;
        thumb_720: string;
        thumb_720_w: number;
        thumb_720_h: number;
        thumb_800: string;
        thumb_800_w: number;
        thumb_800_h: number;
        thumb_960: string;
        thumb_960_w: number;
        thumb_960_h: number;
        thumb_1024: string;
        thumb_1024_w: number;
        thumb_1024_h: number;
        original_w: number;
        original_h: number;
        thumb_tiny: string;
        permalink: string;
        permalink_public: string;
        is_starred: boolean;
        skipped_shares: boolean;
        has_rich_preview: boolean;
        file_access: string;
      }>;
    }>;
  }>;
  filter_suggestions: {
    in: Array<{
      id: string;
      facet_count: number;
      checked: boolean;
    }>;
    from: Array<{
      id: string;
      facet_count: number;
    }>;
  };
};

export type SearchModulesPeopleResponse = {
  ok: true;
  query: string;
  filters: {
    in?: string[];
    from?: string[];
  };
  ai_filters: Record<string, unknown>;
  manual_filters: {
    in?: string[];
    from?: string[];
  };
  module: string;
  items: Array<{
    iid: string;
    id: string;
    profile: {
      title: string;
      phone: string;
      skype: string;
      real_name: string;
      real_name_normalized: string;
      display_name: string;
      display_name_normalized: string;
      fields: Record<ProfileFieldId, {
        value: string;
        alt: string;
      }>;
      status_text: string;
      status_emoji: string;
      status_emoji_display_info: Array<{
        display_url: string;
        display_alias?: string;
        unicode?: string;
      }>;
      status_expiration: number;
      avatar_hash: string;
      first_name: string;
      last_name: string;
      image_24: string;
      image_32: string;
      image_48: string;
      image_72: string;
      image_192: string;
      image_512: string;
      status_text_canonical: string;
      team: string;
      start_date?: string;
      image_original?: string;
      is_custom_image?: boolean;
      huddle_state?: string;
      huddle_state_expiration_ts?: number;
      image_1024?: string;
      pronouns?: string;
      guest_invited_by?: string;
      ooo_message?: string;
      who_can_share_contact_card?: string;
    };
    username: string;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    phone: string;
    timestamp: number;
    top_terms?: boolean;
    similar?: boolean;
  }>;
  pagination: {
    total_count: number;
    page: number;
    per_page: number;
    page_count: number;
    first: number;
    last: number;
  };
  filter_suggestions?: {
    title?: Array<{
      value: string;
      facet_count: number;
      checked: boolean;
    }>;
    department?: Array<{
      value: string;
      facet_count: number;
      checked: boolean;
    }>;
    location?: Array<{
      facet_count: number;
      value: string;
      checked: boolean;
    }>;
  };
};

export type SearchModulesTriggersResponse = {
  ok: true;
  items: Array<{
    id: string;
    inputs: Record<WorkflowTriggerId, {
      value: string;
      locked: boolean;
      hidden: boolean;
    }>;
    outputs: Record<string, {
      type: string;
      name: string;
      title: string;
      is_required: boolean;
      description: string;
    }>;
    available_data: Record<string, {
      type: string;
      name: string;
      title: string;
      is_required: boolean;
      description: string;
    }>;
    date_created: number;
    date_updated: number;
    owning_team_id: string;
    type: string;
    subtype: string;
    name: string;
    description: string;
    share_url: string;
    channel_ids: string[];
    workflow: {
      id: string;
      callback_id: string;
      title: string;
      description: string;
      type: string;
      input_parameters: Array<{
        type: string;
        name: string;
        description: string;
        title: string;
        is_required?: boolean;
      }>;
      output_parameters: unknown[];
      product_level_availability: {
        is_available: boolean;
        available_to: string;
      };
      category_id: string;
      category_label: string;
      app_id: string;
      app: {
        id: string;
        name: string;
        icons: {
          image_32: string;
          image_48: string;
          image_64: string;
          image_72: string;
        };
        is_workflow_app: boolean;
        sales_home_workflow_app_type: number;
      };
      date_created: number;
      date_released: number;
      date_updated: number;
      date_deleted: number;
      form_enabled: boolean;
      workflow_id: string;
    };
    filter?: {
      root: {
        statement: string;
      };
      version: number;
    };
  }>;
  pagination: {
    total_count: number;
    page: number;
    per_page: number;
    page_count: number;
    first: number;
    last: number;
  };
};

export type SearchPrecacheResponse = {
  ok: true;
};

export type SearchSaveResponse = {
  ok: true;
};

export type SearchTeamResponse = {
  ok: true;
  items: Array<{
    id: string;
    name: string;
    deleted: boolean;
    color: string;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    profile: {
      title: string;
      phone: string;
      skype: string;
      real_name: string;
      real_name_normalized: string;
      display_name: string;
      display_name_normalized: string;
      fields: Record<string, unknown>;
      status_text: string;
      status_emoji: string;
      status_emoji_display_info: unknown[];
      status_expiration: number;
      avatar_hash: string;
      first_name: string;
      last_name: string;
      image_24: string;
      image_32: string;
      image_48: string;
      image_72: string;
      image_192: string;
      image_512: string;
      status_text_canonical: string;
      team: string;
    };
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    is_bot: boolean;
    is_app_user: boolean;
    updated: number;
    is_email_confirmed: boolean;
    who_can_share_contact_card: string;
    guest_expiration: number;
  }>;
  teams: unknown[];
  num_found: number;
  next_cursor_mark: string;
};

export type SessionsCheckRecentResponse = {
  ok: true;
  has_recent_auth: boolean;
};

export type SfdcIntegrationAdminListOrgsResponse = {
  ok: true;
  salesforce_orgs: unknown[];
};

export type SfdcIntegrationListOrgsResponse = {
  ok: true;
  salesforce_orgs: unknown[];
};

export type SharedInvitesCanGetLinkResponse = {
  ok: true;
  is_eligible: boolean;
  reason: string;
};

export type SigninFindWorkspacesResponse = {
  ok: true;
  current_teams: unknown[];
  current_orgs: Array<{
    org: {
      id: string;
      name: string;
      url: string;
      domain: string;
      user_email: string;
      user_type: string;
      two_factor_required: boolean;
      sso_required: boolean;
      icon_44: string;
      icon_88: string;
      image_default: boolean;
      is_logged_out: boolean;
      last_login_ts: number;
      associated_user: string;
      user_14d_messages: number;
      user_workspace_signal_score: number;
      variant: string;
      can_apply_canvas: boolean;
      can_apply_workflow: boolean;
      can_apply_list: boolean;
      icon: {
        image_default: boolean;
        image_34: string;
        image_44: string;
        image_68: string;
        image_88: string;
        image_102: string;
        image_230: string;
        image_132: string;
      };
      user_name: string;
      user_title: string;
      user_icon: {
        image_24: string;
        image_32: string;
        image_48: string;
        image_72: string;
        image_192: string;
        image_512: string;
        avatar_hash: string;
      };
      auth_mode: string;
      sso_provider: string;
      profile_photos: string[];
      active_users: number;
      ia_version: number;
    };
    teams: Array<{
      id: string;
      name: string;
      url: string;
      domain: string;
      user_email: string;
      user_type: string;
      two_factor_required: boolean;
      sso_required: boolean;
      icon_44: string;
      icon_88: string;
      image_default: boolean;
      is_logged_out: boolean;
      last_login_ts: number;
      associated_user: string;
      user_14d_messages: number;
      user_workspace_signal_score: number;
      variant: string;
      can_apply_canvas: boolean;
      can_apply_workflow: boolean;
      can_apply_list: boolean;
      icon: {
        image_default: boolean;
        image_34: string;
        image_44: string;
        image_68: string;
        image_88: string;
        image_102: string;
        image_230: string;
        image_132: string;
      };
      auth_mode: string;
      sso_provider: string;
      profile_photos: string[];
      active_users: number;
      ia_version: number;
    }>;
  }>;
  invited_teams: unknown[];
  domain_enabled_teams: unknown[];
  has_valid_cookie: boolean;
  confirmed_email: string;
  privacy_consent_group: string;
};

export type SignupCheckSignupDomainsResponse = {
  ok: true;
  domains: string[];
  domains_flat: string;
};

export type SlackAiPermissionsGetForUserResponse = {
  ok: true;
  allowed: string[];
};

export type SlackbotResponsesAddResponse = {
  ok: true;
  response: {
    id: string;
    creator: string;
    created: number;
    responses: string[];
    triggers: string[];
  };
};

export type SlackbotResponsesDeleteResponse = {
  ok: true;
};

export type SlackbotResponsesEditResponse = {
  ok: true;
  response: {
    id: string;
    creator: string;
    created: number;
    responses: string[];
    triggers: string[];
  };
};

export type SlackbotResponsesListResponse = {
  ok: true;
  responses: unknown[];
  next_cursor: null;
};

export type SolutionsGetTemplatesResponse = {
  ok: true;
  templates: Array<{
    id: string;
    icon: string;
    name: string;
    description: string;
    prefix: string;
    categories: string[];
    template_items: {
      workflows: Array<{
        workflow_template_id: string;
        title: string;
        is_composer_default: boolean;
        description: string;
        dependent_items: Array<{
          object_id: string;
          object_type: string;
        }>;
      }>;
      lists: Array<{
        list_template_id: string;
        title: string;
      }>;
      canvases: Array<{
        canvas_template_id: string;
        title: string;
      }>;
    };
    toplevel_team_id: string;
    status: string;
    creator_id: string;
    default_tab: {
      id: string;
      type: string;
    };
  }>;
};

export type SolutionsListResponse = {
  ok: true;
  templates: unknown[];
  metadata: Record<string, unknown>;
};

export type StarsAddResponse = {
  ok: true;
};

export type StarsRemoveResponse = {
  ok: true;
};

export type SubscriptionsThreadAddResponse = {
  ok: true;
};

export type SubscriptionsThreadGetResponse = {
  ok: true;
  subscriptions: string[];
};

export type SubscriptionsThreadGetViewResponse = {
  ok: true;
  total_unread_replies: number;
  new_threads_count: number;
  threads: Array<{
    root_msg: {
      text: string;
      files?: Array<{
        id: string;
        created: number;
        timestamp: number;
        name: string;
        title: string;
        mimetype: string;
        filetype: string;
        pretty_type: string;
        user: string;
        user_team: string;
        size: number;
        mode: string;
        is_external: boolean;
        is_public: boolean;
        public_url_shared: boolean;
        display_as_bot: boolean;
        username: string;
        url_private: string;
        url_private_download: string;
        media_display_type: string;
        thumb_64: string;
        thumb_80: string;
        thumb_360: string;
        thumb_360_w: number;
        thumb_360_h: number;
        thumb_480: string;
        thumb_480_w: number;
        thumb_480_h: number;
        thumb_160: string;
        thumb_720: string;
        thumb_720_w: number;
        thumb_720_h: number;
        thumb_800: string;
        thumb_800_w: number;
        thumb_800_h: number;
        thumb_960?: string;
        thumb_960_w?: number;
        thumb_960_h?: number;
        thumb_1024?: string;
        thumb_1024_w?: number;
        thumb_1024_h?: number;
        original_w: number;
        original_h: number;
        thumb_tiny: string;
        permalink: string;
        permalink_public: string;
        is_starred: boolean;
        skipped_shares: boolean;
        has_rich_preview: boolean;
        file_access: string;
      }>;
      upload?: boolean;
      user: string;
      display_as_bot?: boolean;
      type: string;
      ts: string;
      client_msg_id: string;
      thread_ts: string;
      reply_count: number;
      reply_users_count: number;
      latest_reply: string;
      reply_users: string[];
      is_locked: boolean;
      subscribed: boolean;
      last_read: string;
      reactions?: Array<{
        name: string;
        users: string[];
        count: number;
      }>;
      channel: string;
      team?: string;
      user_team?: string;
      source_team?: string;
      user_profile?: {
        avatar_hash: string;
        image_72: string;
        first_name: string;
        real_name: string;
        display_name: string;
        team: string;
        name: string;
        is_restricted: boolean;
        is_ultra_restricted: boolean;
      };
      blocks?: Array<{
        type: string;
        block_id: string;
      }>;
      pinned_to?: string[];
      pinned_info?: {
        channel: string;
        pinned_by: string;
        pinned_ts: number;
      };
    };
    unread_replies?: Array<{
      user: string;
      type: string;
      ts: string;
      client_msg_id: string;
      text: string;
      team: string;
      thread_ts: string;
      parent_user_id: string;
      blocks: Array<{
        type: string;
        block_id: string;
      }>;
    }>;
    priority?: Record<string, unknown>;
    latest_replies: Array<{
      user: string;
      type: string;
      ts: string;
      client_msg_id: string;
      text: string;
      team: string;
      user_team: string;
      source_team: string;
      user_profile: {
        avatar_hash: string;
        image_72: string;
        first_name: string;
        real_name: string;
        display_name: string;
        team: string;
        name: string;
        is_restricted: boolean;
        is_ultra_restricted: boolean;
      };
      thread_ts: string;
      parent_user_id: string;
      blocks: Array<{
        type: string;
        block_id: string;
      }>;
      reactions?: Array<{
        name: string;
        users: string[];
        count: number;
      }>;
      channel: string;
    }>;
  }>;
  has_more: boolean;
  max_ts: string;
  threads_state: {
    has_unreads: boolean;
    unread_count_by_channel: Record<string, unknown>;
    mention_count: number;
    mention_count_by_channel: Record<string, unknown>;
    timestamp: string;
    vip_count: number;
    channel_badges: {
      thread_mentions: number;
      thread_unreads: number;
    };
  };
};

export type SubscriptionsThreadMarkResponse = {
  ok: true;
};

export type SubscriptionsThreadRemoveResponse = {
  ok: true;
};

export type SubteamsInfoResponse = {
  ok: true;
  subteams: Array<{
    id: string;
    team_id: string;
    is_subteam: boolean;
    name: string;
    description: string;
    handle: string;
    is_external: boolean;
    date_create: number;
    date_update: number;
    date_delete: number;
    auto_type: null;
    auto_provision: boolean;
    created_by: string;
    updated_by: string;
    deleted_by: string;
    is_section: boolean;
    is_editing_restricted: boolean;
    is_membership_locked: boolean;
    is_idp_group: boolean;
    is_visible: boolean;
    is_org_level: boolean;
    prefs: {
      channels: unknown[];
      groups: unknown[];
    };
    user_count: number;
    channel_count: number;
  }>;
};

export type SubteamsValidateHandleResponse = {
  ok: true;
};

export type SubteamsValidateNameResponse = {
  ok: true;
};

export type TeamAdminAttachmentsListResponse = {
  ok: true;
  blocked_domains: unknown[];
};

export type TeamBillingAddContactResponse = {
  ok: true;
  primary_owner: boolean;
  contacts: Array<{
    id: number;
  }>;
};

export type TeamBillingChangesListResponse = {
  ok: true;
  changes: Array<{
    statelog: {
      id: number;
      date_create: number;
    };
    user_info: {
      user: string;
      username: string;
      user_profile: {
        title: string;
        phone: string;
        skype: string;
        real_name: string;
        real_name_normalized: string;
        display_name: string;
        display_name_normalized: string;
        fields: Record<string, unknown>;
        status_text: string;
        status_emoji: string;
        status_emoji_display_info: unknown[];
        status_expiration: number;
        avatar_hash: string;
        first_name: string;
        last_name: string;
        image_24: string;
        image_32: string;
        image_48: string;
        image_72: string;
        image_192: string;
        image_512: string;
        status_text_canonical: string;
        image_original?: string;
        is_custom_image?: boolean;
        image_1024?: string;
      };
    };
  }>;
  pagination: {
    total_count: number;
    page: number;
    per_page: number;
    page_count: number;
    first: number;
    last: number;
  };
};

export type TeamBillingRemoveContactResponse = {
  ok: true;
  primary_owner: boolean;
  contacts: unknown[];
};

export type TeamChangeInfoResponse = {
  ok: true;
};

export type TeamCheckEmailDomainsResponse = {
  ok: true;
};

export type TeamConnectedOrgsListResponse = {
  ok: true;
  organizations: unknown[];
  total_count: number;
  response_metadata: {
    next_cursor: string;
  };
};

export type TeamFeatureGetRequestResponse = {
  ok: true;
  status: string;
};

export type TeamInfoResponse = {
  ok: true;
  team?: {
    id: string;
    name: string;
    url: string;
    domain: string;
    avatar_base_url: string;
    is_verified: boolean;
    plan?: string;
    is_plan_frozen?: boolean;
    icon: {
      image_default: boolean;
      image_34: string;
      image_44: string;
      image_68: string;
      image_88: string;
      image_102: string;
      image_230: string;
      image_132: string;
    };
    discoverable: string;
    lob_sales_home_enabled: boolean;
    is_sfdc_auto_slack: boolean;
    primary_owner?: {
      id: string;
    };
    sso_provider?: {
      type: string;
      name: string;
      label: string;
    };
    pay_prod_cur?: string;
    locale?: string;
  };
  teams?: Array<{
    id: string;
    name: string;
    url: string;
    domain: string;
    avatar_base_url: string;
    is_verified: boolean;
    icon: {
      image_default: boolean;
      image_34: string;
      image_44: string;
      image_68: string;
      image_88: string;
      image_102: string;
      image_230: string;
      image_132: string;
    };
    discoverable: string;
    sso_provider?: {
      type: string;
      name: string;
      label: string;
    };
    pay_prod_cur?: string;
    locale?: string;
    lob_sales_home_enabled: boolean;
    is_sfdc_auto_slack: boolean;
  }>;
};

export type TeamListExternalResponse = {
  ok: true;
  teams: unknown[];
};

export type TeamNavGetResponse = {
  ok: true;
  is_blocked_agent: boolean;
  data_residency_enabled: boolean;
  view_permissions_enabled: boolean;
  view_roles_enabled: boolean;
  signout_crumb: string;
  is_plan_frozen: boolean;
  is_view_overview_analytics_enabled: boolean;
  is_view_member_analytics_enabled: boolean;
  is_view_channels_analytics_enabled: boolean;
  is_view_app_analytics_enabled: boolean;
  is_developer_identity_workspace: boolean;
};

export type TeamPrefsGetResponse = {
  ok: true;
  prefs: {
    invites_only_admins: boolean;
    invites_limit: boolean;
    show_join_leave: boolean;
    welcome_place_enabled: boolean;
    locale: string;
    default_channels: string[];
    default_channel_creation_enabled: boolean;
    slack_connect_approval_type: string;
    dnd_enabled: boolean;
    dnd_days: string;
    dnd_start_hour: string;
    dnd_end_hour: string;
    has_shared_invites: boolean;
    admin_customized_quick_reactions: string[];
    ai_apps: {
      is_enabled: boolean;
      allowed_apps: Array<{
        app_id: string;
        bot_user_id: string;
        should_show_in_sunroof?: boolean;
      }>;
    };
    ai_apps_settings: {
      apps: unknown[];
    };
    all_users_can_purchase: boolean;
    allow_account_type_edit_channel_workspaces_override: boolean;
    allow_admin_retention_override: number;
    allow_audio_clip_sharing_slack_connect: boolean;
    allow_audio_clips: boolean;
    allow_automatic_media_transcriptions: boolean;
    allow_box_cfs: boolean;
    allow_calls: boolean;
    allow_calls_interactive_screen_sharing: boolean;
    allow_cea_for_hippa_team: boolean;
    allow_clip_downloads: string;
    allow_content_review: boolean;
    allow_custom_solution_templates: boolean;
    allow_developer_sandboxes: string;
    allow_feature_request: boolean;
    allow_free_automated_trials: boolean;
    allow_huddles: boolean;
    allow_huddles_transcriptions: boolean;
    allow_huddles_video: boolean;
    allow_lists: string;
    allow_lock_thread: boolean;
    allow_media_transcriptions: boolean;
    allow_message_deletion: boolean;
    allow_native_gif_picker: boolean;
    allow_retention_override: boolean;
    allow_solution_templates: string;
    allow_spaceship: string;
    allow_sponsored_slack_connections: boolean;
    allow_video_clip_sharing_slack_connect: boolean;
    allow_video_clips: boolean;
    allow_workflow_export: boolean;
    alt_text_reminders: boolean;
    app_dir_only: boolean;
    app_management_apps: unknown[];
    app_whitelist_enabled: boolean;
    app_whitelist_requests_enabled: boolean;
    app_whitelist_requests_require_comment_enabled: boolean;
    atlas_org_charts_access: string;
    atlas_profiles_access: string;
    automatic_welcome_dm_enabled: boolean;
    available_calendar_huddle_access_options: {
      knock_access: boolean;
      org_access: boolean;
    };
    billing_email_daily: boolean;
    billing_email_monthly: boolean;
    block_file_download: boolean;
    block_file_types: boolean;
    box_app_installed: boolean;
    calls_apps: {
      video: Array<{
        id: string;
        name: string;
        image: string;
      }>;
      audio: Array<{
        id: string;
        name: string;
        image: string;
      }>;
    };
    calls_locations: unknown[];
    can_accept_slack_connect_channel_invites: boolean;
    can_create_external_limited_invite: boolean;
    can_create_slack_connect_channel_invite: boolean;
    can_receive_shared_channels_invites: boolean;
    canvas_printing_enabled: boolean;
    canvas_restricted_sharing_enabled: boolean;
    canvas_retention_duration: number;
    canvas_retention_type: number;
    canvas_updated_message_enabled: boolean;
    canvas_version_history_enabled: boolean;
    channel_audit_export_enabled: boolean;
    channel_email_addresses_enabled: boolean;
    compliance_export_start: number;
    content_review_enabled: boolean;
    created_with_google: boolean;
    custom_contact_email: string;
    custom_status_default_emoji: string;
    custom_status_presets: string[][];
    daily_prompts_enabled: boolean;
    default_create_private_channel: boolean;
    default_function_reuse_visibility: {
      visibility: string;
    };
    default_rxns: string[];
    developer_sandbox_admin_menu_limited_access: boolean;
    developer_sandbox_allow_slack_connect_owning_org: boolean;
    developer_sandbox_dashboard_limited_access: boolean;
    developer_sandbox_invite_org_domains_only: {
      is_enabled: boolean;
      domains: unknown[];
    };
    developer_sandbox_org: boolean;
    developer_sandbox_org_self_signin_disabled: boolean;
    developer_sandbox_provision_notifications: {
      notifications_enabled: boolean;
      notification_location: string;
    };
    developer_sandbox_request_auto_response: string;
    developer_sandbox_request_notifications: {
      notifications_enabled: boolean;
      notification_location: string;
    };
    developer_sandbox_safe_sign_in: boolean;
    developer_sandbox_slack_connect_org_sandboxes_only: boolean;
    disable_email_ingestion: boolean;
    disable_file_deleting: boolean;
    disable_file_editing: boolean;
    disable_file_uploads: string;
    disable_privacy_and_cookie_policy: boolean;
    disable_sidebar_connect_prompts: unknown[];
    disable_sidebar_install_prompts: unknown[];
    disallow_public_file_urls: boolean;
    discoverable: string;
    display_anniversary_celebration: boolean;
    display_default_phone: boolean;
    display_email_addresses: boolean;
    display_external_email_addresses: boolean;
    display_guest_email_addresses: boolean;
    display_new_hire_celebration: boolean;
    display_pronouns: boolean;
    display_real_names: boolean;
    dm_retention_duration: number;
    dm_retention_redaction_duration: number;
    dm_retention_type: number;
    dnd_after_friday: string;
    dnd_after_monday: string;
    dnd_after_saturday: string;
    dnd_after_sunday: string;
    dnd_after_thursday: string;
    dnd_after_tuesday: string;
    dnd_after_wednesday: string;
    dnd_before_friday: string;
    dnd_before_monday: string;
    dnd_before_saturday: string;
    dnd_before_sunday: string;
    dnd_before_thursday: string;
    dnd_before_tuesday: string;
    dnd_before_wednesday: string;
    dnd_enabled_friday: string;
    dnd_enabled_monday: string;
    dnd_enabled_saturday: string;
    dnd_enabled_sunday: string;
    dnd_enabled_thursday: string;
    dnd_enabled_tuesday: string;
    dnd_enabled_wednesday: string;
    dnd_weekdays_off_allday: boolean;
    dropbox_legacy_picker: boolean;
    file_limit_whitelisted: boolean;
    file_retention_duration: number;
    file_retention_type: number;
    filepicker_app_first_install: boolean;
    flag_content_admin_dash: boolean;
    flag_content_review_flag_profiles: boolean;
    flag_content_reviewer_assigned_notif: boolean;
    flag_message_author_outcome_notif: boolean;
    flag_message_flagger_outcome_notif: boolean;
    flag_message_users_to_notify: unknown[];
    gdpr_enabled: boolean;
    gdrive_enabled_team: boolean;
    gdrive_unfurl_restricted: boolean;
    group_retention_duration: number;
    group_retention_type: number;
    has_compliance_export: boolean;
    has_hipaa_compliance: boolean;
    has_seen_partner_promo: boolean;
    hermes_allow_interactions_with_workflows_owned_by_slack_connected_teams: boolean;
    hermes_has_accepted_tos: boolean;
    hermes_triggers_trippable_by_slack_connected_teams: boolean;
    hide_gsuite_invite_option: boolean;
    hide_person_opt_out: boolean;
    hide_referers: boolean;
    identity_links_prefs: {
      is_enabled: boolean;
      teams_domains_ts?: number;
    };
    image_default: boolean;
    ineligible_for_discount: boolean;
    instant_slack_enabled: boolean;
    invite_requests_enabled: boolean;
    invited_user_preset: Record<string, unknown>;
    ip_restriction_ranges: unknown[];
    list_column_option_limit: number;
    list_restricted_sharing_enabled: boolean;
    loading_only_admins: boolean;
    loud_channel_mentions_limit: number;
    magic_unfurls_enabled: boolean;
    member_analytics_disabled: boolean;
    ml_opt_out: boolean;
    mobile_block_message_copy: boolean;
    mobile_passcode_timeout_in_seconds: number;
    mobile_session_duration: number;
    msg_edit_window_mins: number;
    no_email_user_provision_type: string;
    notification_redaction_type: string;
    notify_pending_enabled: boolean;
    ntlm_credential_domains: string;
    onedrive_and_sharepoint_unfurl_restricted: boolean;
    onedrive_app_installed: boolean;
    onedrive_enabled_team: boolean;
    premium_workflow_notifications: {
      notifications_enabled: boolean;
      notification_location: string;
    };
    private_channel_analytics_disabled: boolean;
    private_channel_membership_limit: number;
    private_message_forwarding: boolean;
    private_retention_redaction_duration: number;
    public_retention_redaction_duration: number;
    read_only_canvas_subteam_ids: unknown[];
    received_esc_route_to_channel_awareness_message: boolean;
    record_channel_private_retention_duration: number;
    record_channel_private_retention_redaction_duration: number;
    record_channel_private_retention_type: number;
    record_channel_public_retention_duration: number;
    record_channel_public_retention_redaction_duration: number;
    record_channel_public_retention_type: number;
    restrict_workflow_trigger_steps: {
      triggers: Record<string, unknown>;
    };
    retention_duration: number;
    retention_type: number;
    rich_previews_default: string;
    sales_home_retention_duration: number;
    sales_home_retention_type: number;
    salesforce_forwarding: {
      default: string;
    };
    saml_enable: boolean;
    search_feedback_opt_out: boolean;
    security_circuit_breakers: {
      tor: boolean;
      session_fingerprint: boolean;
      spoofed_user_agent: boolean;
      unexpected_scraping: boolean;
      unexpected_user_agent: boolean;
      unexpected_api_call_volume: boolean;
      notify_primary_owner: number;
      notify_security_admins: number;
    };
    self_serve_select: boolean;
    session_duration: number;
    session_duration_type: number;
    show_join_leave_welcome_party: boolean;
    show_legacy_paid_benefits_page: boolean;
    show_legacy_workflows: boolean;
    show_mobile_promos: boolean;
    sign_in_with_slack_default: string;
    sign_in_with_slack_disabled: boolean;
    single_user_exports: boolean;
    slack_ai_action_items_opt_out: boolean;
    slack_ai_allowed_workspaces: unknown[];
    slack_ai_answer_sharing_opt_out: boolean;
    slack_ai_daily_recap_opt_out: boolean;
    slack_ai_detailed_feedback_opt_out: boolean;
    slack_ai_disabled: boolean;
    slack_ai_explain_sharing_opt_out: boolean;
    slack_ai_feedback_opt_out: boolean;
    slack_ai_file_summaries_opt_out: boolean;
    slack_ai_files_search_opt_out: {
      all_file_opt_out: boolean;
    };
    slack_ai_files_workflow_steps_opt_out: {
      all_file_opt_out: boolean;
    };
    slack_ai_huddle_summaries_opt_out: boolean;
    slack_ai_huddles_automatic_notes_opt_out: boolean;
    slack_ai_message_translations_opt_out: boolean;
    slack_ai_opt_out: boolean;
    slack_ai_search_suggested_queries: unknown[];
    slack_ai_workflow_builder_opt_out: boolean;
    slack_connect_acceptance_auto_created_workspace: boolean;
    slack_connect_account_visibility: string;
    slack_connect_allowed_workspaces: {
      type: string[];
    };
    slack_connect_dm_only_verified_orgs: boolean;
    slack_connect_file_upload_sharing_enabled: boolean;
    slackbot_ai_canvas_write_enabled: boolean;
    slackbot_responses_disabled: boolean;
    solutions_onboarding_tracker: {
      canvas: string;
      list: string;
    };
    spaceship_workspace_setting_visible: boolean;
    sso_auth_restrictions: number;
    sso_change_email: boolean;
    sso_choose_username: boolean;
    sso_disable_emails: boolean;
    sso_optional: boolean;
    sso_signup_restrictions: number;
    sso_sync_with_provider: boolean;
    stats_only_admins: boolean;
    subteams_auto_create_admin: boolean;
    subteams_auto_create_owner: boolean;
    team_list_count: number;
    test_team: boolean;
    thorn_safer_scan: boolean;
    two_factor_auth_required: number;
    two_factor_prevent_sms: number;
    two_factor_required: boolean;
    use_browser_picker: boolean;
    use_workspace_icon_for_single_workspace_users: boolean;
    uses_customized_custom_status_presets: boolean;
    warn_before_at_channel: string;
    warn_user_before_logout_desktop: boolean;
    warn_user_before_logout_mobile: boolean;
    was_treatment_for_boost_bus_plus_awareness_and_upgrades: boolean;
    wfb_default_connector_visibility: string;
    wfb_salesforce_trigger_channel_restrictions: {
      salesforce_orgs: Record<string, unknown>;
    };
    who_can_accept_slack_connect_channel_invites: {
      type: string[];
      user?: unknown[];
      subteam?: unknown[];
    };
    who_can_change_team_profile: string;
    who_can_create_external_limited_invite: {
      type: string[];
      user?: unknown[];
      subteam?: unknown[];
    };
    who_can_create_shared_channels: string;
    who_can_create_slack_connect_channel_invite: {
      type: string[];
      user?: string[];
      subteam?: unknown[];
    };
    who_can_create_workflows: {
      type: string[];
    };
    who_can_dm_anyone: {
      type: string[];
    };
    who_can_manage_ext_shared_channels: {
      type: string[];
    };
    who_can_manage_integrations: {
      type: string[];
      user?: unknown[];
      subteam?: string[];
    };
    who_can_post_general: string;
    who_can_review_flagged_content: {
      type: string[];
    };
    who_can_use_hermes: {
      type: string[];
      user?: unknown[];
      subteam?: unknown[];
    };
    who_has_team_visibility: string;
    work_object_unfurl_visibility: number;
    workflow_builder_enabled: boolean;
    workflow_extension_steps_beta_opt_in: boolean;
    workflow_extension_steps_enabled: boolean;
    workflows_export_csv_enabled: boolean;
    workflows_webhook_trigger_enabled: boolean;
    auth_mode: string;
    image_102: string;
    image_132: string;
    image_230: string;
    image_34: string;
    image_44: string;
    image_68: string;
    image_88: string;
    joiner_notifications_enabled?: boolean;
    alt_text_reminders_custom_link: null;
    billing_wdf_customer_id: null;
    commands_only_regular?: boolean;
    company_name: null;
    custom_status_site: null;
    default_channel_knowledge_agent: null;
    flag_content_review_allow_decision_reversal: null;
    flag_content_review_note_required: null;
    flag_message_custom_link: null;
    flagged_content_review_channel: null;
    google_sso_domain: null;
    google_sso_enable: null;
    max_guest_duration: null;
    mobile_force_app_upgrade_min_version: null;
    mobile_force_app_upgrade_versions_allowed: null;
    required_minimum_desktop_version: null;
    required_minimum_mobile_version: null;
    rimeto_org_instance_id: null;
    same_org_external_teams: null;
    signup_domains: null;
    signup_mode: null;
    thorn_designated_contact: null;
    who_can_create_standard_workflows: null;
    posts_migrating?: number;
    gateway_allow_xmpp_ssl?: number;
    gateway_allow_irc_ssl?: number;
    gateway_allow_irc_plain?: number;
    calls_sent_welcome_to_admins?: boolean;
    seen_invites_only_admins_warning?: boolean;
    who_can_create_delete_user_groups?: string;
    who_can_edit_user_groups?: string;
    limit_reached_ts?: number;
    received_github_app_upgrade_prompt?: number;
    has_installed_apps?: boolean;
    who_can_request_ext_shared_channels?: {
      type: string[];
      user: unknown[];
      subteam: unknown[];
    };
    image_original?: string;
    invite_requests_approval_channel?: string;
    max_file_upload_size: null;
    sales_get_help: null;
    tableau_agent_user_id: null;
    username_policy: null;
  };
};

export type TeamPrefsSetResponse = {
  ok: true;
  prefs: {
    invites_only_admins: boolean;
    invites_limit: boolean;
    show_join_leave: boolean;
    welcome_place_enabled: boolean;
    locale: string;
    default_channels: string[];
    default_channel_creation_enabled: boolean;
    slack_connect_approval_type: string;
    dnd_enabled: boolean;
    dnd_days: string;
    dnd_start_hour: string;
    dnd_end_hour: string;
    has_shared_invites: boolean;
    admin_customized_quick_reactions: string[];
    ai_apps: {
      is_enabled: boolean;
      allowed_apps: unknown[];
    };
    ai_apps_settings: {
      apps: unknown[];
    };
    all_users_can_purchase: boolean;
    allow_account_type_edit_channel_workspaces_override: boolean;
    allow_admin_retention_override: number;
    allow_audio_clip_sharing_slack_connect: boolean;
    allow_audio_clips: boolean;
    allow_automatic_media_transcriptions: boolean;
    allow_box_cfs: boolean;
    allow_calls: boolean;
    allow_calls_interactive_screen_sharing: boolean;
    allow_cea_for_hippa_team: boolean;
    allow_clip_downloads: string;
    allow_content_review: boolean;
    allow_custom_solution_templates: boolean;
    allow_developer_sandboxes: string;
    allow_feature_request: boolean;
    allow_free_automated_trials: boolean;
    allow_huddles: boolean;
    allow_huddles_transcriptions: boolean;
    allow_huddles_video: boolean;
    allow_lists: string;
    allow_lock_thread: boolean;
    allow_media_transcriptions: boolean;
    allow_message_deletion: boolean;
    allow_native_gif_picker: boolean;
    allow_retention_override: boolean;
    allow_solution_templates: string;
    allow_spaceship: string;
    allow_sponsored_slack_connections: boolean;
    allow_video_clip_sharing_slack_connect: boolean;
    allow_video_clips: boolean;
    allow_workflow_export: boolean;
    alt_text_reminders: boolean;
    app_dir_only: boolean;
    app_management_apps: unknown[];
    app_whitelist_enabled: boolean;
    app_whitelist_requests_enabled: boolean;
    app_whitelist_requests_require_comment_enabled: boolean;
    atlas_org_charts_access: string;
    atlas_profiles_access: string;
    automatic_welcome_dm_enabled: boolean;
    available_calendar_huddle_access_options: {
      knock_access: boolean;
      org_access: boolean;
    };
    billing_email_daily: boolean;
    billing_email_monthly: boolean;
    block_file_download: boolean;
    block_file_types: boolean;
    box_app_installed: boolean;
    calls_apps: {
      video: unknown[];
      audio: unknown[];
    };
    calls_locations: unknown[];
    can_accept_slack_connect_channel_invites: boolean;
    can_create_external_limited_invite: boolean;
    can_create_slack_connect_channel_invite: boolean;
    can_receive_shared_channels_invites: boolean;
    canvas_printing_enabled: boolean;
    canvas_restricted_sharing_enabled: boolean;
    canvas_retention_duration: number;
    canvas_retention_type: number;
    canvas_updated_message_enabled: boolean;
    canvas_version_history_enabled: boolean;
    channel_audit_export_enabled: boolean;
    channel_email_addresses_enabled: boolean;
    compliance_export_start: number;
    content_review_enabled: boolean;
    created_with_google: boolean;
    custom_contact_email: null;
    custom_status_default_emoji: string;
    custom_status_presets: string[][];
    daily_prompts_enabled: boolean;
    default_create_private_channel: boolean;
    default_function_reuse_visibility: {
      visibility: string;
    };
    default_rxns: string[];
    developer_sandbox_admin_menu_limited_access: boolean;
    developer_sandbox_allow_slack_connect_owning_org: boolean;
    developer_sandbox_dashboard_limited_access: boolean;
    developer_sandbox_invite_org_domains_only: {
      is_enabled: boolean;
      domains: unknown[];
    };
    developer_sandbox_org: boolean;
    developer_sandbox_org_self_signin_disabled: boolean;
    developer_sandbox_provision_notifications: {
      notifications_enabled: boolean;
      notification_location: string;
    };
    developer_sandbox_request_auto_response: string;
    developer_sandbox_request_notifications: {
      notifications_enabled: boolean;
      notification_location: string;
    };
    developer_sandbox_safe_sign_in: boolean;
    developer_sandbox_slack_connect_org_sandboxes_only: boolean;
    disable_email_ingestion: boolean;
    disable_file_deleting: boolean;
    disable_file_editing: boolean;
    disable_file_uploads: string;
    disable_privacy_and_cookie_policy: boolean;
    disable_sidebar_connect_prompts: unknown[];
    disable_sidebar_install_prompts: unknown[];
    disallow_public_file_urls: boolean;
    discoverable: string;
    display_anniversary_celebration: boolean;
    display_default_phone: boolean;
    display_email_addresses: boolean;
    display_external_email_addresses: boolean;
    display_guest_email_addresses: boolean;
    display_new_hire_celebration: boolean;
    display_pronouns: boolean;
    display_real_names: boolean;
    dm_retention_duration: number;
    dm_retention_redaction_duration: number;
    dm_retention_type: number;
    dnd_after_friday: string;
    dnd_after_monday: string;
    dnd_after_saturday: string;
    dnd_after_sunday: string;
    dnd_after_thursday: string;
    dnd_after_tuesday: string;
    dnd_after_wednesday: string;
    dnd_before_friday: string;
    dnd_before_monday: string;
    dnd_before_saturday: string;
    dnd_before_sunday: string;
    dnd_before_thursday: string;
    dnd_before_tuesday: string;
    dnd_before_wednesday: string;
    dnd_enabled_friday: string;
    dnd_enabled_monday: string;
    dnd_enabled_saturday: string;
    dnd_enabled_sunday: string;
    dnd_enabled_thursday: string;
    dnd_enabled_tuesday: string;
    dnd_enabled_wednesday: string;
    dnd_weekdays_off_allday: boolean;
    dropbox_legacy_picker: boolean;
    file_limit_whitelisted: boolean;
    file_retention_duration: number;
    file_retention_type: number;
    filepicker_app_first_install: boolean;
    flag_content_admin_dash: boolean;
    flag_content_review_flag_profiles: boolean;
    flag_content_reviewer_assigned_notif: boolean;
    flag_message_author_outcome_notif: boolean;
    flag_message_flagger_outcome_notif: boolean;
    flag_message_users_to_notify: unknown[];
    gdpr_enabled: boolean;
    gdrive_enabled_team: boolean;
    gdrive_unfurl_restricted: boolean;
    group_retention_duration: number;
    group_retention_type: number;
    has_compliance_export: boolean;
    has_hipaa_compliance: boolean;
    has_seen_partner_promo: boolean;
    hermes_allow_interactions_with_workflows_owned_by_slack_connected_teams: boolean;
    hermes_has_accepted_tos: boolean;
    hermes_triggers_trippable_by_slack_connected_teams: boolean;
    hide_gsuite_invite_option: boolean;
    hide_person_opt_out: boolean;
    hide_referers: boolean;
    identity_links_prefs: {
      is_enabled: boolean;
    };
    image_default: boolean;
    ineligible_for_discount: boolean;
    instant_slack_enabled: boolean;
    invite_requests_enabled: boolean;
    invited_user_preset: Record<string, unknown>;
    ip_restriction_ranges: unknown[];
    list_column_option_limit: number;
    list_restricted_sharing_enabled: boolean;
    loading_only_admins: boolean;
    loud_channel_mentions_limit: number;
    magic_unfurls_enabled: boolean;
    member_analytics_disabled: boolean;
    ml_opt_out: boolean;
    mobile_block_message_copy: boolean;
    mobile_passcode_timeout_in_seconds: number;
    mobile_session_duration: number;
    msg_edit_window_mins: number;
    no_email_user_provision_type: string;
    notification_redaction_type: string;
    notify_pending_enabled: boolean;
    ntlm_credential_domains: string;
    onedrive_and_sharepoint_unfurl_restricted: boolean;
    onedrive_app_installed: boolean;
    onedrive_enabled_team: boolean;
    premium_workflow_notifications: {
      notifications_enabled: boolean;
      notification_location: string;
    };
    private_channel_analytics_disabled: boolean;
    private_channel_membership_limit: number;
    private_message_forwarding: boolean;
    private_retention_redaction_duration: number;
    public_retention_redaction_duration: number;
    read_only_canvas_subteam_ids: unknown[];
    received_esc_route_to_channel_awareness_message: boolean;
    record_channel_private_retention_duration: number;
    record_channel_private_retention_redaction_duration: number;
    record_channel_private_retention_type: number;
    record_channel_public_retention_duration: number;
    record_channel_public_retention_redaction_duration: number;
    record_channel_public_retention_type: number;
    restrict_workflow_trigger_steps: {
      triggers: Record<string, unknown>;
    };
    retention_duration: number;
    retention_type: number;
    rich_previews_default: string;
    sales_home_retention_duration: number;
    sales_home_retention_type: number;
    salesforce_forwarding: {
      default: string;
    };
    saml_enable: boolean;
    search_feedback_opt_out: boolean;
    security_circuit_breakers: {
      tor: boolean;
      session_fingerprint: boolean;
      spoofed_user_agent: boolean;
      unexpected_scraping: boolean;
      unexpected_user_agent: boolean;
      unexpected_api_call_volume: boolean;
      notify_primary_owner: number;
      notify_security_admins: number;
    };
    self_serve_select: boolean;
    session_duration: number;
    session_duration_type: number;
    show_join_leave_welcome_party: boolean;
    show_legacy_paid_benefits_page: boolean;
    show_legacy_workflows: boolean;
    show_mobile_promos: boolean;
    sign_in_with_slack_default: string;
    sign_in_with_slack_disabled: boolean;
    single_user_exports: boolean;
    slack_ai_action_items_opt_out: boolean;
    slack_ai_allowed_workspaces: unknown[];
    slack_ai_answer_sharing_opt_out: boolean;
    slack_ai_daily_recap_opt_out: boolean;
    slack_ai_detailed_feedback_opt_out: boolean;
    slack_ai_disabled: boolean;
    slack_ai_explain_sharing_opt_out: boolean;
    slack_ai_feedback_opt_out: boolean;
    slack_ai_file_summaries_opt_out: boolean;
    slack_ai_files_search_opt_out: {
      all_file_opt_out: boolean;
    };
    slack_ai_files_workflow_steps_opt_out: {
      all_file_opt_out: boolean;
    };
    slack_ai_huddle_summaries_opt_out: boolean;
    slack_ai_huddles_automatic_notes_opt_out: boolean;
    slack_ai_message_translations_opt_out: boolean;
    slack_ai_opt_out: boolean;
    slack_ai_search_suggested_queries: unknown[];
    slack_ai_workflow_builder_opt_out: boolean;
    slack_connect_acceptance_auto_created_workspace: boolean;
    slack_connect_account_visibility: string;
    slack_connect_allowed_workspaces: {
      type: string[];
    };
    slack_connect_dm_only_verified_orgs: boolean;
    slack_connect_file_upload_sharing_enabled: boolean;
    slackbot_ai_canvas_write_enabled: boolean;
    slackbot_responses_disabled: boolean;
    solutions_onboarding_tracker: {
      canvas: string;
      list: string;
    };
    spaceship_workspace_setting_visible: boolean;
    sso_auth_restrictions: number;
    sso_change_email: boolean;
    sso_choose_username: boolean;
    sso_disable_emails: boolean;
    sso_optional: boolean;
    sso_signup_restrictions: number;
    sso_sync_with_provider: boolean;
    stats_only_admins: boolean;
    subteams_auto_create_admin: boolean;
    subteams_auto_create_owner: boolean;
    team_list_count: number;
    test_team: boolean;
    thorn_safer_scan: boolean;
    two_factor_auth_required: number;
    two_factor_prevent_sms: number;
    two_factor_required: boolean;
    use_browser_picker: boolean;
    use_workspace_icon_for_single_workspace_users: boolean;
    uses_customized_custom_status_presets: boolean;
    warn_before_at_channel: string;
    warn_user_before_logout_desktop: boolean;
    warn_user_before_logout_mobile: boolean;
    was_treatment_for_boost_bus_plus_awareness_and_upgrades: boolean;
    wfb_default_connector_visibility: string;
    wfb_salesforce_trigger_channel_restrictions: {
      salesforce_orgs: Record<string, unknown>;
    };
    who_can_accept_slack_connect_channel_invites: {
      type: string[];
    };
    who_can_change_team_profile: string;
    who_can_create_external_limited_invite: {
      type: string[];
    };
    who_can_create_shared_channels: string;
    who_can_create_slack_connect_channel_invite: {
      type: string[];
    };
    who_can_create_workflows: {
      type: string[];
    };
    who_can_dm_anyone: {
      type: string[];
    };
    who_can_manage_ext_shared_channels: {
      type: string[];
    };
    who_can_manage_integrations: {
      type: string[];
    };
    who_can_post_general: string;
    who_can_review_flagged_content: {
      type: string[];
    };
    who_can_use_hermes: {
      type: string[];
    };
    who_has_team_visibility: string;
    work_object_unfurl_visibility: number;
    workflow_builder_enabled: boolean;
    workflow_extension_steps_beta_opt_in: boolean;
    workflow_extension_steps_enabled: boolean;
    workflows_export_csv_enabled: boolean;
    workflows_webhook_trigger_enabled: boolean;
    auth_mode: string;
    image_102: string;
    image_132: string;
    image_230: string;
    image_34: string;
    image_44: string;
    image_68: string;
    image_88: string;
    signup_mode?: string;
    signup_domains?: string;
    joiner_notifications_enabled?: boolean;
  };
};

export type TeamProfileGetResponse = {
  ok: true;
  profile: {
    fields: Array<{
      id: string;
      ordering: number;
      field_name: string;
      label: string;
      hint: string;
      type: string;
      possible_values: null;
      options: {
        is_scim: boolean;
        is_protected: boolean;
      };
      is_hidden: boolean;
      section_id: string;
      permissions?: {
        api: string[];
        ui: boolean;
        scim: boolean;
      };
      is_inverse?: boolean;
    }>;
    sections: Array<{
      id: string;
      team_id: string;
      section_type: string;
      label: string;
      order: number;
      is_hidden: boolean;
    }>;
  };
};

export type TeamSlackConnectGuidelinesGetResponse = {
  ok: true;
  has_guidelines: boolean;
};

export type TeamSlackConnectPrefsListResponse = {
  ok: true;
  defaults: {
    allow_sc_file_uploads: boolean;
    profile_visibility: string;
    allowed_workspaces: {
      type: string;
      team_ids: unknown[];
    };
    allowed_canvas_sharing: boolean;
    allowed_list_sharing: boolean;
    away_team_sc_invite_permissions: {
      type: string;
    };
    away_team_sc_invite_require_2fa: boolean;
    accept_sc_invites: {
      type: string;
      accept_private: boolean;
    };
    sc_channel_limited_access: string;
    sc_mpdm_to_private: {
      type: string;
    };
    require_sc_channel_for_sc_dm: boolean;
    shared_channel_invite_requested: Record<string, unknown>;
    accept_spaces_invites: boolean;
    spaces_approval_type: string;
    interact_with_externally_owned_workflows: string;
    approved_org_info: string;
  };
  partner_overrides: unknown[];
};

export type TeamSlackConnectPrefsSetResponse = {
  ok: true;
  slack_connect_prefs: {
    allow_sc_file_uploads: {
      value: boolean;
      source: string;
    };
    profile_visibility: {
      type: string;
      source: string;
    };
    allowed_workspaces: {
      type: string;
      team_ids: unknown[];
      source: string;
    };
    allowed_canvas_sharing: {
      value: boolean;
      source: string;
    };
    allowed_list_sharing: {
      value: boolean;
      source: string;
    };
    away_team_sc_invite_permissions: {
      type: string;
      source: string;
    };
    away_team_sc_invite_require_2fa: {
      type: boolean;
      source: string;
    };
    accept_sc_invites: {
      type: string;
      accept_private: boolean;
      source: string;
    };
    sc_channel_limited_access: {
      type: string;
      source: string;
    };
    sc_mpdm_to_private: {
      type: string;
      source: string;
    };
    require_sc_channel_for_sc_dm: {
      value: boolean;
      source: string;
    };
    shared_channel_invite_requested: {
      source: string;
    };
    accept_spaces_invites: {
      source: string;
    };
    spaces_approval_type: {
      type: string;
      source: string;
    };
    interact_with_externally_owned_workflows: {
      type: string;
      source: string;
    };
  };
};

export type TeamStatsExportResponse = {
  ok: true;
};

export type TeamStatsTimeSeriesResponse = {
  ok: true;
  available_date_range: {
    start_date: string;
    start_date_ts: number;
  };
  computed_ts: number;
  membership: {
    total_members: {
      number: number;
      change: number;
      change_in_percentage: number;
    };
    total_claimed_members: {
      number: number;
      change: number;
      change_in_percentage: number;
    };
    monthly_active_users: {
      number: number;
      change: number;
      change_in_percentage: number;
    };
  };
  stats: Array<{
    ds: string;
    full_members_count: number;
    guests_count: number;
    readers_count_1d: number;
    writers_count_1d: number;
    readers_count_7d: number;
    writers_count_7d: number;
    chats_channels_count_1d: number;
    chats_groups_count_1d: number;
    chats_shared_channels_count_1d: number;
    chats_dms_count_1d: number;
    cursor_marks_channels_count_1d: number;
    cursor_marks_groups_count_1d: number;
    cursor_marks_shared_channels_count_1d: number;
    cursor_marks_dms_count_1d: number;
    total_full_members_count: number;
    total_guests_count: number;
    claimed_full_members_count: number;
    claimed_guests_count: number;
    active_users_1d: number;
    active_users_7d: number;
    active_users_28d: number;
    writers_count_28d: number;
    files_count_1d: number;
    chats_count_1d: number;
    channels_count: number;
    files_size: number;
    messages_count_1d: number;
    messages_channels_count_from_apps_1d: number;
    users_channels_count: number;
    total_members_count: number;
    total_claimed_count: number;
    chats_channels_count_percentage_1d: number;
    chats_groups_count_percentage_1d: number;
    chats_dms_count_percentage_1d: number;
    cursor_marks_groups_percentage_1d: number;
    cursor_marks_dms_percentage_1d: number;
    cursor_marks_percentage_1d: number;
  }>;
};

export type TeamTargetingCriteriaResponse = {
  ok: true;
  users: {
    count: number;
  };
};

export type TeamsAuthorizedIpRangeListResponse = {
  ok: true;
  ip_ranges: unknown[];
};

export type TeamsAuthorizedIpRangeSetResponse = {
  ok: true;
};

export type TeamsCompanyInfoResponse = {
  ok: true;
  is_l28: boolean;
  team_type: string;
  state: string;
  country_iso_code: string;
  company_name: string;
  company_size: number;
  industry: string;
  primary_email_domain: string;
  size_segmentation: string;
  company_size_group: string;
};

export type TeamsTrialsInfoResponse = {
  ok: true;
  trial_info: {
    date_end: number;
    date_start: number;
    days_extended: number;
    has_future_switch: boolean;
    is_active: boolean;
    product_level: string;
    next_product_level: string;
    type: string;
    subtype: string;
    days_remaining: number;
    has_base_plan_ai_entitlements: boolean;
  };
};

export type TemplatesIntegrationsGetResponse = {
  ok: true;
  integrations: Array<{
    app_id: string;
    name: string;
    org_name: string;
  }>;
};

export type TemplatesProvisionResponse = {
  ok: true;
};

export type UblockworkaroundHistoryResponse = {
  ok: true;
  has_more: boolean;
  total: number;
};

export type UnfurlExternalValidateDomainResponse = {
  ok: true;
};

export type UsergroupsCreateResponse = {
  ok: true;
  usergroup: {
    id: string;
    team_id: string;
    is_usergroup: boolean;
    is_subteam: boolean;
    name: string;
    description: string;
    handle: string;
    is_external: boolean;
    date_create: number;
    date_update: number;
    date_delete: number;
    auto_type: null;
    auto_provision: boolean;
    created_by: string;
    updated_by: string;
    deleted_by: null;
    is_section: boolean;
    is_editing_restricted: boolean;
    is_membership_locked: boolean;
    is_idp_group: boolean;
    is_visible: boolean;
    is_org_level: boolean;
    prefs: {
      channels: unknown[];
      groups: unknown[];
    };
    user_count: number;
    channel_count: number;
  };
};

export type UsergroupsMembershipResponse = {
  ok: true;
  usergroups: string[];
};

export type UsergroupsUpdateResponse = {
  ok: true;
  usergroup: {
    id: string;
    team_id: string;
    is_usergroup: boolean;
    is_subteam: boolean;
    name: string;
    description: string;
    handle: string;
    is_external: boolean;
    date_create: number;
    date_update: number;
    date_delete: number;
    auto_type: null;
    auto_provision: boolean;
    created_by: string;
    updated_by: string;
    deleted_by: null;
    is_section: boolean;
    is_editing_restricted: boolean;
    is_membership_locked: boolean;
    is_idp_group: boolean;
    is_visible: boolean;
    is_org_level: boolean;
    prefs: {
      channels: string[];
      groups: unknown[];
    };
    users: string[];
    user_count: number;
    channel_count: number;
  };
};

export type UsergroupsUsersListResponse = {
  ok: true;
  users: string[];
};

export type UsergroupsUsersUpdateResponse = {
  ok: true;
  usergroup: {
    id: string;
    team_id: string;
    is_usergroup: boolean;
    is_subteam: boolean;
    name: string;
    description: string;
    handle: string;
    is_external: boolean;
    date_create: number;
    date_update: number;
    date_delete: number;
    auto_type: null;
    auto_provision: boolean;
    created_by: string;
    updated_by: string;
    deleted_by: null;
    is_section: boolean;
    is_editing_restricted: boolean;
    is_membership_locked: boolean;
    is_idp_group: boolean;
    is_visible: boolean;
    is_org_level: boolean;
    prefs: {
      channels: string[];
      groups: unknown[];
    };
    users: string[];
    user_count: number;
    channel_count: number;
  };
};

export type UsersAccessLogsResponse = {
  ok: true;
  logins: Array<{
    date_first: number;
    date_last: number;
    login_count: number;
    ip: string;
    user_agent_simple: string;
    user_agent_full: string;
  }>;
};

export type UsersAdminCanAddUltraRestrictedResponse = {
  ok: true;
};

export type UsersAdminFetchInvitesHistoryResponse = {
  ok: true;
  next_cursor: null;
  invites: unknown[];
};

export type UsersAdminFetchTeamUsersResponse = {
  ok: true;
  items: Array<{
    id: string;
    team_id: string;
    name: string;
    deleted: boolean;
    color: string;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    profile: {
      title: string;
      phone: string;
      skype: string;
      real_name: string;
      real_name_normalized: string;
      display_name: string;
      display_name_normalized: string;
      fields: Record<string, unknown>;
      status_text: string;
      status_emoji: string;
      status_emoji_display_info: unknown[];
      status_expiration: number;
      avatar_hash: string;
      first_name: string;
      last_name: string;
      image_24: string;
      image_32: string;
      image_48: string;
      image_72: string;
      image_192: string;
      image_512: string;
      status_text_canonical: string;
      team: string;
      image_original?: string;
      is_custom_image?: boolean;
      image_1024?: string;
      start_date?: string;
    };
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    is_bot: boolean;
    is_app_user: boolean;
    updated: number;
    is_email_confirmed: boolean;
    has_2fa: boolean;
    who_can_share_contact_card: string;
    created: number;
    is_inactive?: number;
    app_count: number;
    username_is_editable: boolean;
    two_factor_auth_enabled: boolean;
    is_invited_email_bounced: boolean;
    is_auto_provisioned: boolean;
    is_invited_user?: boolean;
  }>;
  teams: unknown[];
  num_found: number;
  next_cursor_mark: string;
};

export type UsersAdminFetchTeamUsersCsvResponse = {
  ok: true;
};

export type UsersAdminInviteBulkResponse = {
  ok: true;
  invites: Array<{
    ok: boolean;
    invite_id: string;
  }>;
};

export type UsersAdminResendInvitationResponse = {
  ok: true;
};

export type UsersAdminSetAdminResponse = {
  ok: true;
};

export type UsersAdminSetInactiveResponse = {
  ok: true;
};

export type UsersAdminSetOwnerResponse = {
  ok: true;
};

export type UsersAdminSetRegularResponse = {
  ok: true;
};

export type UsersChannelSectionsChannelsBulkUpdateResponse = {
  ok: true;
};

export type UsersChannelSectionsCreateResponse = {
  ok: true;
  channel_section_id: string;
};

export type UsersChannelSectionsCreateLinkResponse = {
  ok: true;
  id: string;
  url: string;
};

export type UsersChannelSectionsDeleteResponse = {
  ok: true;
};

export type UsersChannelSectionsListResponse = {
  ok: true;
  channel_sections: Array<{
    channel_section_id: string;
    name: string;
    type: string;
    next_channel_section_id: string;
    last_updated: number;
    channel_ids_page: {
      channel_ids: string[];
      count: number;
      cursor?: string;
    };
    is_redacted: boolean;
  }>;
  last_updated: number;
  count: number;
  cursor: string;
};

export type UsersChannelSectionsSetResponse = {
  ok: true;
};

export type UsersConsentGetResponse = {
  ok: true;
  scopes: string;
  available_scopes: string;
  labels: Record<string, unknown>;
};

export type UsersCustomStatusListResponse = {
  ok: true;
  statuses: Array<{
    id: string;
    user_id: string;
    text: string;
    duration: string;
    is_active: boolean;
    date_created: number;
    date_expire: number;
  }>;
};

export type UsersEmailVerificationStatusGetResponse = {
  ok: true;
  is_verified: boolean;
};

export type UsersEmailtokenGetResponse = {
  ok: true;
};

export type UsersGetInviterResponse = {
  ok: true;
  user_id: string;
};

export type UsersInfoResponse = {
  ok: true;
  user: {
    id: string;
    name: string;
    is_bot: boolean;
    updated: number;
    is_app_user: boolean;
    team_id?: string;
    deleted: boolean;
    color: string;
    is_email_confirmed: boolean;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    has_2fa: boolean;
    who_can_share_contact_card: string;
    profile: {
      real_name: string;
      display_name: string;
      avatar_hash: string;
      real_name_normalized: string;
      display_name_normalized: string;
      image_24?: string;
      image_32?: string;
      image_48?: string;
      image_72?: string;
      image_192?: string;
      image_512?: string;
      image_1024?: string;
      image_original: string;
      is_custom_image: boolean;
      first_name?: string;
      last_name?: string;
      team: string;
      title: string;
      pronouns?: string;
      phone: string;
      skype: string;
      fields: Record<ProfileFieldId, {
        value: string;
        alt: string;
      }>;
      status_text: string;
      status_text_canonical: string;
      status_emoji: string;
      status_emoji_display_info: Array<{
        display_url: string;
        unicode: string;
      }>;
      status_expiration: number;
      guest_invited_by?: string;
      who_can_share_contact_card?: string;
      huddle_state?: string;
      huddle_state_expiration_ts?: number;
      start_date?: string;
      ooo_message?: string;
      huddle_state_call_id?: string;
    };
  };
};

export type UsersInteractionsListResponse = {
  ok: true;
  interactions: Array<{
    component: string;
    type: string;
    step: string;
    count: number;
    date_first_recorded: number;
    date_last_recorded: number;
  }>;
};

export type UsersInteractionsSetResponse = {
  ok: true;
};

export type UsersIsEarlyJoinerResponse = {
  ok: true;
  is_early_joiner: boolean;
};

export type UsersListResponse = {
  ok: true;
  members: Array<{
    id: string;
    name: string;
    is_bot: boolean;
    updated: number;
    is_app_user: boolean;
    team_id: string;
    deleted: boolean;
    color: string;
    is_email_confirmed: boolean;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    who_can_share_contact_card: string;
    profile: {
      real_name: string;
      display_name: string;
      avatar_hash: string;
      real_name_normalized: string;
      display_name_normalized: string;
      team: string;
      title: string;
      phone: string;
      skype: string;
      fields?: Record<string, unknown>;
      status_text: string;
      status_text_canonical: string;
      status_emoji: string;
      status_emoji_display_info: unknown[];
      status_expiration: number;
      always_active?: boolean;
      image_original?: string;
      is_custom_image?: boolean;
    };
    has_2fa?: boolean;
  }>;
  cache_ts: number;
  response_metadata: {
    next_cursor: string;
  };
};

export type UsersListIgnoredUsersResponse = {
  ok: true;
};

export type UsersPermissionsAppsResponse = {
  ok: true;
  permissions: {
    manage_integrations: boolean;
    manage_uninstall_tasks: boolean;
    whitelist_apps: boolean;
    is_appmin: boolean;
  };
};

export type UsersPrefsGetPrefsEntry = boolean;

export type UsersPrefsGetPrefsName =
  | "underline_links"
  | "show_text_selection_context_menu"
  | "user_colors"
  | "color_names_in_list"
  | "keyboard"
  | "slackbot_ai_nux_state"
  | "email_alerts"
  | "email_alerts_sleep_until"
  | "email_tips"
  | "email_weekly"
  | "email_offers"
  | "email_research"
  | "email_developer"
  | "email_changelog"
  | "welcome_message_hidden"
  | "search_sort"
  | "search_file_sort"
  | "search_channel_sort"
  | "search_mixed_results_sort"
  | "search_top_results_sort"
  | "search_work_objects_sort"
  | "search_people_sort"
  | "search_minimize_sources"
  | "search_hidden_connectors"
  | "expand_inline_imgs"
  | "num_top_result_tab_clicked"
  | "expand_internal_inline_imgs"
  | "expand_snippets"
  | "posts_formatting_guide"
  | "seen_welcome_2"
  | "seen_ssb_prompt"
  | "spaces_new_xp_banner_dismissed"
  | "search_only_my_channels"
  | "search_only_current_team"
  | "search_hide_my_channels"
  | "search_only_show_online"
  | "search_hide_deactivated_users"
  | "emoji_mode"
  | "emoji_use"
  | "has_invited"
  | "has_uploaded"
  | "has_created_channel"
  | "has_created_channel_section"
  | "has_searched"
  | "has_installed_apps"
  | "search_exclude_channels"
  | "messages_theme"
  | "webapp_spellcheck"
  | "no_joined_overlays"
  | "no_created_overlays"
  | "dropbox_enabled"
  | "seen_domain_invite_reminder"
  | "seen_member_invite_reminder"
  | "mute_sounds"
  | "arrow_history"
  | "tab_ui_return_selects"
  | "obey_inline_img_limit"
  | "require_at"
  | "ssb_space_window"
  | "mac_ssb_bounce"
  | "mac_ssb_bullet"
  | "expand_non_media_attachments"
  | "show_typing"
  | "pagekeys_handled"
  | "last_snippet_type"
  | "display_real_names_override"
  | "display_display_names"
  | "time24"
  | "enter_is_special_in_tbt"
  | "msg_input_send_btn"
  | "msg_input_send_btn_auto_set"
  | "msg_input_sticky_composer"
  | "graphic_emoticons"
  | "convert_emoticons"
  | "ss_emojis"
  | "seen_onboarding_start"
  | "onboarding_cancelled"
  | "seen_onboarding_slackbot_conversation"
  | "seen_onboarding_channels"
  | "seen_onboarding_direct_messages"
  | "seen_onboarding_invites"
  | "seen_onboarding_search"
  | "seen_onboarding_recent_mentions"
  | "seen_onboarding_starred_items"
  | "seen_onboarding_private_groups"
  | "seen_onboarding_banner"
  | "onboarding_slackbot_conversation_step"
  | "set_tz_automatically"
  | "suppress_link_warning"
  | "suppress_thread_mention_warning"
  | "suppress_external_invites_from_compose_warning"
  | "seen_emoji_pack_cta"
  | "seen_emoji_pack_dialog"
  | "seen_schedule_send_coachmark"
  | "seen_gif_new_badge"
  | "seen_gif_picker_admin_cta"
  | "emoji_packs_most_recent_available_time"
  | "emoji_packs_clicked_picker_cta"
  | "emoji_packs_clicked_picker_post_install_cta"
  | "emoji_packs_clicked_collection_cta"
  | "dnd_enabled"
  | "dnd_start_hour"
  | "dnd_end_hour"
  | "dnd_before_monday"
  | "dnd_after_monday"
  | "dnd_enabled_monday"
  | "dnd_before_tuesday"
  | "dnd_after_tuesday"
  | "dnd_enabled_tuesday"
  | "dnd_before_wednesday"
  | "dnd_after_wednesday"
  | "dnd_enabled_wednesday"
  | "dnd_before_thursday"
  | "dnd_after_thursday"
  | "dnd_enabled_thursday"
  | "dnd_before_friday"
  | "dnd_after_friday"
  | "dnd_enabled_friday"
  | "dnd_before_saturday"
  | "dnd_after_saturday"
  | "dnd_enabled_saturday"
  | "dnd_before_sunday"
  | "dnd_after_sunday"
  | "dnd_enabled_sunday"
  | "dnd_days"
  | "dnd_weekdays_off_allday"
  | "reminder_notification_time"
  | "dnd_custom_new_badge_seen"
  | "dnd_notification_schedule_new_badge_seen"
  | "priority_dnd_override"
  | "priority_sidebar_section"
  | "notification_center_filters"
  | "unread_collapsed_channels"
  | "xws_unread_collapsed_channels"
  | "calls_survey_last_seen"
  | "huddle_survey_last_seen"
  | "sidebar_behavior"
  | "channel_sort"
  | "separate_private_channels"
  | "separate_shared_channels"
  | "sidebar_theme"
  | "sidebar_theme_custom_values"
  | "ia_theme"
  | "ia_theme_pre_halloween"
  | "no_invites_widget_in_sidebar"
  | "boost_mentions"
  | "undo_channel_intermix"
  | "show_muted_items_outside_sidebar_menus"
  | "remove_sidebar_customizations"
  | "workspace_filter_selected"
  | "no_omnibox_in_channels"
  | "k_key_omnibox_auto_hide_count"
  | "show_sidebar_quickswitcher_button"
  | "ent_org_wide_channels_sidebar"
  | "mark_msgs_read_immediately"
  | "start_scroll_at_oldest"
  | "snippet_editor_wrap_long_lines"
  | "ls_disabled"
  | "f_key_search"
  | "k_key_omnibox"
  | "prompted_for_email_disabling"
  | "no_macelectron_banner"
  | "no_macssb1_banner"
  | "no_macssb2_banner"
  | "no_winssb1_banner"
  | "hide_user_group_info_pane"
  | "mentions_exclude_at_user_groups"
  | "mentions_exclude_reactions"
  | "privacy_policy_seen"
  | "enterprise_migration_seen"
  | "last_tos_acknowledged"
  | "search_exclude_bots"
  | "load_lato_2"
  | "fuller_timestamps"
  | "last_seen_at_channel_warning"
  | "emoji_autocomplete_big"
  | "two_factor_auth_enabled"
  | "two_factor_type"
  | "two_factor_backup_type"
  | "hide_hex_swatch"
  | "show_jumper_scores"
  | "enterprise_mdm_custom_msg"
  | "enterprise_excluded_app_teams"
  | "client_logs_pri"
  | "flannel_server_pool"
  | "mentions_exclude_at_channels"
  | "confirm_clear_all_unreads"
  | "confirm_user_marked_away"
  | "box_enabled"
  | "seen_single_emoji_msg"
  | "confirm_sh_call_start"
  | "preferred_skin_tone"
  | "show_all_skin_tones"
  | "whats_new_read"
  | "help_menu_open_timestamp"
  | "frecency_jumper"
  | "frecency_ent_jumper"
  | "frecency"
  | "jumbomoji"
  | "newxp_seen_last_message"
  | "show_memory_instrument"
  | "enable_unread_view"
  | "seen_unread_view_coachmark"
  | "seen_connect_dm_coachmark"
  | "seen_connect_section_coachmark"
  | "should_show_connect_section"
  | "enable_react_emoji_picker"
  | "seen_custom_status_badge"
  | "seen_custom_status_callout"
  | "seen_custom_status_expiration_badge"
  | "used_custom_status_kb_shortcut"
  | "seen_guest_admin_slackbot_announcement"
  | "seen_threads_notification_banner"
  | "seen_name_tagging_coachmark"
  | "all_unreads_sort_order"
  | "all_unreads_section_filter"
  | "locale"
  | "seen_intl_channel_names_coachmark"
  | "seen_p3_locale_change_message_ko_kr"
  | "seen_toast_new_locale_launch"
  | "seen_toast_new_locale_launch_ts"
  | "seen_locale_change_message"
  | "seen_japanese_locale_change_message"
  | "seen_shared_channels_coachmark"
  | "seen_shared_channels_opt_in_change_message"
  | "has_recently_shared_a_channel"
  | "seen_channel_browser_admin_coachmark"
  | "seen_administration_menu"
  | "seen_drafts_section_coachmark"
  | "seen_emoji_update_overlay_coachmark"
  | "seen_sonic_deluxe_toast"
  | "seen_wysiwyg_deluxe_toast"
  | "seen_markdown_paste_toast"
  | "seen_markdown_paste_shortcut"
  | "seen_ia_education"
  | "show_ia_tour_relaunch"
  | "plain_text_mode"
  | "show_shared_channels_education_banner"
  | "should_show_shared_channels_day1_creator_welcome_modal"
  | "ia_slackbot_survey_timestamp_48h"
  | "ia_slackbot_survey_timestamp_7d"
  | "enable_streamline_view"
  | "enable_sent_view"
  | "enable_catch_up_view"
  | "enable_shortcuts_view"
  | "enable_drafts_view"
  | "enable_scheduled_view"
  | "enable_later_view"
  | "enable_todos_view"
  | "enable_huddles_view"
  | "enable_huddles_home_view"
  | "enable_threads_view"
  | "enable_recap_view"
  | "enable_unified_directory_view"
  | "seen_threads_pref_education_banner_count"
  | "show_threads_pref_education_banner"
  | "seen_platform_page"
  | "allow_calls_to_set_current_status"
  | "in_interactive_mas_migration_flow"
  | "sunset_interactive_message_views"
  | "shdep_promo_code_submitted"
  | "seen_shdep_slackbot_message"
  | "seen_calls_interactive_coachmark"
  | "allow_cmd_tab_iss"
  | "join_calls_device_settings"
  | "calls_disconnect_on_lock"
  | "seen_workflow_builder_deluxe_toast"
  | "workflow_builder_intro_modal_clicked_through"
  | "workflow_builder_coachmarks"
  | "seen_gdrive_coachmark"
  | "seen_first_install_coachmark"
  | "seen_existing_install_coachmark"
  | "seen_link_unfurl_coachmark"
  | "file_picker_variant"
  | "open_quip_doc_in_flexpane"
  | "seen_onboarding_synth_view"
  | "seen_onboarding_synth_view_count"
  | "synth_view_prefs"
  | "seen_onboarding_synth_view_v2"
  | "seen_onboarding_synth_view_count_v2"
  | "dm_canvas_auto_open_count_left"
  | "show_dm_canvas_preview"
  | "lists_add_to_list_default_list"
  | "seen_onboarding_lists"
  | "seen_more_tab_lists_new_badge"
  | "lists_template_sidebar_collapsed"
  | "hide_external_members_list_sharing_speed_bump"
  | "lists_tabbing_navigation_option_type"
  | "lists_default_view"
  | "seen_list_items_view"
  | "lists_my_items"
  | "lists_my_items_last_seen"
  | "lists_message_todo_reaction"
  | "has_opened_list"
  | "todos_last_seen"
  | "todos_item_details_auto_open_from_message"
  | "todos_later_archive_do_not_show_again_move_to_todos_speedbump"
  | "todos_later_archive_do_not_show_again_delete_speedbump"
  | "saved_searches"
  | "channel_canvas_layouts"
  | "huddles_cc_by_default"
  | "huddles_mute_by_default"
  | "huddles_global_mute"
  | "huddles_mini_panel"
  | "huddles_set_status"
  | "huddles_show_shouty_rooster"
  | "huddles_disconnect_on_lock"
  | "huddles_play_music_when_last"
  | "huddles_allow_smart_notif"
  | "huddles_reactions_play_sound"
  | "huddles_reactions_read_out_loud"
  | "huddles_play_music_timeout"
  | "huddles_music_player_song_key"
  | "calendar_huddles_default_access_policy"
  | "huddles_show_join_preview"
  | "calendar_huddles_default_auto_start_summary"
  | "huddles_chime_new_endpoints_check_completed"
  | "quip_new_endpoints_check_completed"
  | "xws_sidebar_variant"
  | "overloaded_message_enabled"
  | "seen_highlights_coachmark"
  | "seen_highlights_arrows_coachmark"
  | "seen_highlights_warm_welcome"
  | "seen_new_search_ui"
  | "seen_channel_search"
  | "seen_people_search"
  | "seen_people_search_count"
  | "dismissed_scroll_search_tooltip_count"
  | "last_dismissed_scroll_search_tooltip_timestamp"
  | "has_used_quickswitcher_shortcut"
  | "seen_quickswitcher_shortcut_tip_count"
  | "browsers_dismissed_channels_low_results_education"
  | "browsers_seen_initial_channels_education"
  | "browsers_dismissed_people_low_results_education"
  | "browsers_seen_initial_people_education"
  | "browsers_dismissed_user_groups_low_results_education"
  | "browsers_seen_initial_user_groups_education"
  | "browsers_dismissed_files_low_results_education"
  | "browsers_seen_initial_files_education"
  | "browsers_dismissed_initial_drafts_education"
  | "browsers_seen_initial_drafts_education"
  | "browsers_dismissed_initial_activity_education"
  | "browsers_seen_initial_activity_education"
  | "browsers_dismissed_initial_saved_education"
  | "browsers_seen_initial_saved_education"
  | "seen_edit_mode"
  | "seen_edit_mode_edu"
  | "xws_dismissed_education"
  | "xws_seen_education"
  | "sidebar_pref_dismissed_tip"
  | "a11y_message_verbosity_settings"
  | "a11y_dyslexic"
  | "a11y_animations"
  | "seen_keyboard_shortcuts_coachmark"
  | "seen_a11y_pref_setup_coachmark"
  | "seen_a11y_bbm_onboarding_modal"
  | "seen_a11y_bbm_onboarding_nudge"
  | "seen_a11y_bbm_browser_zoom_modal"
  | "seen_a11y_alt_text_reminders_modal"
  | "lessons_enabled"
  | "tractor_experiment_group"
  | "opened_slackbot_dm"
  | "newxp_seen_help_message"
  | "newxp_suggested_channels"
  | "onboarding_complete"
  | "has_received_threaded_message"
  | "joiner_notifications_muted"
  | "invite_accepted_notifications_muted"
  | "joiner_message_suggestion_dismissed"
  | "email_digest"
  | "dismissed_fullscreen_download_ssb_prompt"
  | "dismissed_banner_download_ssb_prompt"
  | "dismissed_top_results_nux_banner"
  | "onboarding_state"
  | "whocanseethis_dm_mpdm_badge"
  | "all_notifications_prefs"
  | "activity_include_threads_in_badge_count"
  | "activity_dms_opt_out"
  | "mute_huddle_sounds"
  | "huddle_invite_sound"
  | "huddle_invite_sound_v2"
  | "hidden_users"
  | "vip_users"
  | "slackbot_customization"
  | "slackbot_autosub_threads"
  | "slackbot_conversation_history"
  | "slackbot_mcp_servers"
  | "slack_ai_web_search_disabled"
  | "has_seen_slackbot_ai_upgrade_paywall"
  | "has_seen_slackbot_ai_sparkles"
  | "slackbot_ai_sparkle_nux_start"
  | "slackbot_ai_sparkle_sample_timestamp"
  | "growth_msg_limit_approaching_cta_count"
  | "growth_msg_limit_approaching_cta_ts"
  | "growth_msg_limit_reached_cta_count"
  | "growth_msg_limit_reached_cta_last_ts"
  | "growth_msg_limit_long_reached_cta_count"
  | "growth_msg_limit_long_reached_cta_last_ts"
  | "growth_msg_limit_sixty_day_banner_cta_count"
  | "growth_msg_limit_sixty_day_banner_cta_last_ts"
  | "growth_all_banners_prefs"
  | "analytics_upsell_coachmark_seen"
  | "seen_app_space_coachmark"
  | "seen_app_space_tutorial"
  | "dismissed_app_launcher_welcome"
  | "dismissed_app_launcher_limit"
  | "dismissed_app_launcher_atlassian_promo"
  | "enable_app_config_redesign"
  | "dismissed_app_config_redesign_coachmark"
  | "dismissed_app_manifest_description"
  | "dismissed_app_manifest_coachmark"
  | "app_manifest_schema_format"
  | "purchaser"
  | "seen_channel_email_tooltip"
  | "has_met_new_badge_prerequisite"
  | "num_clicked_cuddles_button"
  | "cuddles_button_first_seen"
  | "show_ent_onboarding"
  | "seen_workflows_gallery_onboarding_banner_view_count"
  | "seen_workflows_gallery_onboarding_banner_dismissed"
  | "seen_workflows_templates_gallery_onboarding_banner_dismissed"
  | "seen_workflows_managed_by_you_onboarding_banner_dismissed"
  | "seen_sidebar_tabrail_more_automations_callout"
  | "login_notification_mode"
  | "seen_corporate_export_alert"
  | "show_autocomplete_help"
  | "deprecation_toast_last_seen"
  | "deprecation_modal_last_seen"
  | "deprecation_banner_last_seen"
  | "iap1_lab"
  | "ia_top_nav_theme"
  | "ia_platform_actions_lab"
  | "activity_view"
  | "saved_view"
  | "seen_floating_sidebar_coachmark"
  | "show_ia4_legacy_theme_banner"
  | "desktop_deeplink_signals"
  | "desktop_client_ids"
  | "failover_proxy_check_completed"
  | "chime_access_check_completed"
  | "mx_calendar_type"
  | "edge_upload_proxy_check_completed"
  | "app_subdomain_check_completed"
  | "add_prompt_interacted"
  | "add_apps_prompt_dismissed"
  | "add_channel_prompt_dismissed"
  | "channel_sidebar_hide_invite"
  | "channel_sidebar_hide_browse_dms_link"
  | "in_prod_surveys_enabled"
  | "connect_dm_early_access"
  | "dismissed_installed_app_dm_suggestions"
  | "seen_contextual_message_shortcuts_modal"
  | "seen_message_navigation_educational_toast"
  | "contextual_message_shortcuts_modal_was_seen"
  | "message_navigation_toast_was_seen"
  | "up_to_browse_kb_shortcut"
  | "set_a11y_prefs_new_user"
  | "a11y_line_length"
  | "a11y_play_sound_for_incoming_dm"
  | "a11y_play_sound_for_sent_dm"
  | "a11y_play_sound_for_incoming_dm_choice"
  | "a11y_play_sound_for_sent_dm_choice"
  | "a11y_read_out_incoming_dm"
  | "a11y_screen_reader_message_label_date_time_first"
  | "contextual_help_reset_count"
  | "should_show_contextual_help_for_conversation_navigation"
  | "should_show_contextual_help_for_jump_to_conversation"
  | "should_show_contextual_help_for_section_navigation"
  | "should_show_contextual_help_for_thread_navigation"
  | "a11y_never_show_slackbot_alt_text_reminders"
  | "a11y_show_alt_text_reminders"
  | "should_show_unsend_message_confirmation"
  | "channel_sections"
  | "team_channel_sections"
  | "online_first_dms_on"
  | "show_quick_reactions"
  | "user_customized_quick_reactions_display_feature"
  | "user_customized_quick_reactions_has_customized"
  | "user_customized_quick_reactions_emoji_1"
  | "user_customized_quick_reactions_emoji_2"
  | "user_customized_quick_reactions_emoji_3"
  | "user_customized_quick_reactions_use_frequently_used_emoji"
  | "reaction_notifications"
  | "has_received_mention_or_reaction"
  | "has_starred_item"
  | "has_drafted_message"
  | "has_sent_ten_messages"
  | "enable_mentions_and_reactions_view"
  | "enable_reminders_view"
  | "enable_saved_items_view"
  | "enable_all_dms_view"
  | "enable_channel_browser_view"
  | "enable_file_browser_view"
  | "enable_file_browser_view_for_docs"
  | "enable_quip_file_browser_view"
  | "enable_lists_browser_view"
  | "enable_people_browser_view"
  | "enable_app_browser_view"
  | "reached_all_dms_disclosure"
  | "enable_slack_connect_view"
  | "enable_slack_connect_view_2"
  | "has_acknowledged_shortcut_speedbump"
  | "stories_variant"
  | "enable_media_captions"
  | "media_playback_speed"
  | "media_muted"
  | "media_volume"
  | "dismissed_connect_auto_approval_modal"
  | "tasks_view"
  | "task_lists"
  | "assigned_to_list"
  | "assigned_items_refinements"
  | "task_enable_stacked_ui"
  | "show_sidebar_avatars"
  | "has_dismissed_google_directory_coachmark"
  | "seen_sc_page_banner"
  | "seen_sc_menu_coachmark"
  | "seen_sc_page"
  | "dismissed_scdm_education"
  | "seen_sent_page_in_sidebar"
  | "first_seen_sent_page_in_sidebar"
  | "seen_new_badge_in_more_menu_sidebar"
  | "first_seen_new_badge_in_more_menu_sidebar"
  | "dismissed_sent_page_education"
  | "seen_bookmarks_intro"
  | "scdm_trial_offer_banner"
  | "identity_links_prefs"
  | "identity_links_global_prefs"
  | "seen_sections_unreads_only_prompt_count"
  | "last_seen_sections_unreads_only_prompt_timestamp"
  | "notifications_view"
  | "progressive_disclosure_state"
  | "suggestions_request_id"
  | "allowed_unfurl_senders"
  | "hide_external_members_sharing_speed_bump"
  | "hide_sc_files_sharing_speed_bump"
  | "who_can_share_contact_card"
  | "who_can_see_account_by_searching_email"
  | "slack_connect_invite_should_badge_sidebar"
  | "slack_scribe_dictation_shortcut"
  | "phc_dismissed"
  | "phc_viewed"
  | "dismissed_gov_slack_first_time_popup"
  | "show_gov_slack_context_bar_banner"
  | "mobile_channel_list_sort"
  | "mobile_channel_list_show_all_dms"
  | "user_expectations_survey_last_trigger_attempt"
  | "onboarding_tip_opt_out"
  | "opt_out_welcome_dm_ephemeral_suggestion"
  | "hide_external_members_canvas_sharing_speed_bump"
  | "seen_private_message_forwarding_coachmark"
  | "later_show_upcoming_reminders"
  | "ia4_desktop_custom_tablist"
  | "use_voip_huddle_invite"
  | "huddles_autoinvite"
  | "client_relevant_workspaces"
  | "home_unread_dot"
  | "ia4_slackbot_survey_timestamp_48h"
  | "ia4_slackbot_survey_timestamp_7d"
  | "has_clicked_highlighted_header_compose_button"
  | "should_show_ia4_tabs"
  | "window_background_gradients"
  | "ia4_sidebar_inverted_v2_coachmark"
  | "seen_canvas_template_new_badge"
  | "seen_canvas_template_new_badge_channel_canvas"
  | "seen_canvas_template_convert_action_new_badge"
  | "seen_canvas_header_image_new_badge"
  | "tab_rail_customization"
  | "tab_rail_customization_reasons"
  | "seen_navigation_preferences_pane"
  | "ia4_compact_mode"
  | "trials_showcase_channel_banner_collapsed"
  | "trials_showcase_dm_banner_collapsed"
  | "trials_showcase_search_banner_collapsed"
  | "hp_s2p_purchaser_treatment"
  | "resurrected_user_welcome_ts"
  | "trials_sidebar_banner_wrapper_dismissed"
  | "hidden_user_group_sections"
  | "seen_usergroup_section_new_badge"
  | "seen_canvas_cta"
  | "seen_clip_cta"
  | "seen_emoji_cta"
  | "seen_huddle_cta"
  | "show_ai_apps"
  | "ai_apps_to_show"
  | "seen_ai_apps_app_config_coachmark"
  | "slack_ai_inbox_enabled"
  | "inbox_card_view_enabled"
  | "solutions_onboarding_user_tracker"
  | "solution_template"
  | "inactive_user_summary_notification"
  | "show_channel_join_banner"
  | "channel_join_experience_enabled"
  | "channel_join_experience_nux_interacted"
  | "slack_ai_translation_target_language"
  | "slack_ai_translation_target_excluded_languages"
  | "slack_ai_file_summary_disabled"
  | "slack_ai_channel_thread_summary_streaming_disabled"
  | "slack_ai_action_items_disabled"
  | "slack_ai_todo_action_items_disabled"
  | "last_seen_speedbump_ts"
  | "first_seen_preview_recap_ts"
  | "recap_default_mute_status"
  | "no_content_email_digest_unsub"
  | "resurrect_mentions_email"
  | "activity_feed_sort"
  | "do_not_show_mark_dms_read_warning"
  | "show_threads_suggested_replies"
  | "today_live_topics"
  | "slack_ai_auto_thread_summaries_disabled"
  | "stick_user_sort"
  | "seen_sort_most_relevant_coachmark"
  | "seen_sort_edit_prefs_cta"
  | "calendar_background_theme_enabled"
  | "calendar_background_theme"
  | "calendar_jit_in_sidebar_enabled"
  | "calendar_jit_as_system_notification"
  | "calendar_jit_as_push_notification"
  | "calendar_desktop_notification_sound"
  | "profile_summaries_enabled"
  | "real_time_recap_enabled"
  | "recap_sort_type"
  | "salesforce_approvals_list"
  | "hide_muted_channels_from_sidebar"
  | "mega_dnd_expiration"
  | "lens_clog_forward_enabled"
  | "first_login_ts"
  | "contacts_oauth"
  | "agents_in_channel_banner_hidden"
  | "seen_search_apps_app_config_coachmark"
  | "disabled_search_remote_functions"
  | "two_factor_post_checkout_required"
  | "work_objects_click_opens_url_prefs"
  | "everything_setting_downgrade"
  | "today_auto_navigate"
  | "today_primary_card_layout"
  | "today_hidden_cards"
  | "today_ignored_channels"
  | "today_priority_channels"
  | "today_card_positions"
  | "today_later_opt_in"
  | "today_tab_rail_location"
  | "default_suggested_channel_sections"
  | "create_channel_section_education"
  | "welcome_pre_dm_party_notification_muted"
  | "slackbot_composer_formatting_enabled"
;

export type UsersPrefsGetResponse = {
  ok: true;
  prefs: Record<UsersPrefsGetPrefsName, UsersPrefsGetPrefsEntry>;
};

export type UsersPrefsSetResponse = {
  ok: true;
};

export type UsersPrefsSetNotificationsResponse = {
  ok: true;
  all_notifications_prefs: {
    channels: Record<ChannelId, {
      muted: boolean;
    }>;
    global: {
      desktop_sound: string;
      priority_desktop_sound: string;
      global_desktop: string;
      global_keywords: string;
      global_mobile: string;
      global_mpdm_desktop: string;
      global_mpdm_mobile: string;
      mobile_sound: string;
      no_text_in_notifications: boolean;
      push_idle_wait: number;
      push_show_preview: boolean;
      threads_everything: boolean;
      global_desktop_push_enabled: boolean;
      global_channels_in_activity: boolean;
    };
  };
};

export type UsersPreparePhotoResponse = {
  ok: true;
  id: string;
  url: string;
};

export type UsersPriorityAddResponse = {
  ok: true;
};

export type UsersPriorityGetRecommendationsResponse = {
  ok: true;
  users: Array<{
    user_id: string;
    reason: string;
    source: string;
  }>;
};

export type UsersPriorityListResponse = {
  ok: true;
  users: {
    manual_provenance: string[];
  };
};

export type UsersPriorityRemoveResponse = {
  ok: true;
};

export type UsersProfileGetResponse = {
  ok: true;
  profile: {
    title: string;
    phone: string;
    skype: string;
    real_name: string;
    real_name_normalized: string;
    display_name: string;
    display_name_normalized: string;
    fields: Record<ProfileFieldId, {
      value: string;
      alt: string;
    }>;
    status_text: string;
    status_emoji: string;
    status_emoji_display_info: Array<{
      display_url: string;
      unicode?: string;
      display_alias?: string;
    }>;
    status_expiration: number;
    avatar_hash: string;
    image_original?: string;
    is_custom_image?: boolean;
    huddle_state: string;
    huddle_state_expiration_ts: number;
    first_name: string;
    last_name: string;
    image_24: string;
    image_32: string;
    image_48: string;
    image_72: string;
    image_192: string;
    image_512: string;
    image_1024?: string;
    status_text_canonical: string;
    start_date?: string;
    guest_invited_by?: string;
    pronouns?: string;
    ooo_message?: string;
    who_can_share_contact_card?: string;
  };
};

export type UsersProfileGetAdminSectionsResultDataAdminProfileAdminSectionsProfileAdminElementsEntry = {
  api: string[];
  ui: boolean;
  scim: boolean;
  __typename: string;
};

export type UsersProfileGetAdminSectionsResultDataAdminProfileAdminSectionsProfileAdminElementsName =
  | "id"
  | "hint"
  | "isIndexed"
  | "isFilterable"
  | "isScimManaged"
  | "elementKey"
  | "legacyFieldId"
  | "label"
  | "order"
  | "type"
  | "isHidden"
  | "canChangeHidden"
  | "canEdit"
  | "canChangeLabel"
  | "canChangeSearch"
  | "canSetOptions"
  | "permissions"
  | "defaultVisibility"
  | "__typename"
  | "validDataSources"
  | "options"
  | "inverseLabel"
  | "isInverse"
  | "areCelebrationsEnabled"
;

export type UsersProfileGetAdminSectionsResponse = {
  ok: true;
  result: {
    data: {
      admin: {
        id: string;
        profileAdminSections: Array<{
          id: string;
          label: string;
          order: number;
          type: string;
          isHidden: boolean;
          canChangeHidden: boolean;
          canEdit: boolean;
          profileAdminElements: Record<UsersProfileGetAdminSectionsResultDataAdminProfileAdminSectionsProfileAdminElementsName, UsersProfileGetAdminSectionsResultDataAdminProfileAdminSectionsProfileAdminElementsEntry>[];
          __typename: string;
        }>;
        __typename: string;
      };
      __typename: string;
    };
  };
};

export type UsersProfileGetExtrasResponse = {
  ok: true;
  channels: unknown[];
  shared_channels: unknown[];
  full_member_channels: unknown[];
  onboarding_complete: null;
  im_mpim_ids: string[];
  has_more_mpims: boolean;
};

export type UsersProfileGetSectionsResultDataUserProfileSectionsProfileElementsEntry = {
  api: string[];
  ui: boolean;
  scim: boolean;
  __typename: string;
};

export type UsersProfileGetSectionsResultDataUserProfileSectionsProfileElementsName =
  | "id"
  | "hint"
  | "isFilterable"
  | "isScimManaged"
  | "isHidden"
  | "isMissing"
  | "label"
  | "order"
  | "type"
  | "elementKey"
  | "elementId"
  | "legacyFieldId"
  | "permissions"
  | "defaultVisibility"
  | "__typename"
  | "text"
  | "options"
  | "persons"
  | "date"
  | "uri"
  | "displayText"
  | "fileId"
;

export type UsersProfileGetSectionsResponse = {
  ok: true;
  result: {
    data: {
      user: {
        id: string;
        isSelf: boolean;
        profileSections: Array<{
          id: string;
          sectionId: string;
          label: string;
          order: number;
          type: string;
          canEdit: boolean;
          profileElements: Record<UsersProfileGetSectionsResultDataUserProfileSectionsProfileElementsName, UsersProfileGetSectionsResultDataUserProfileSectionsProfileElementsEntry>[];
          __typename: string;
        }>;
        team: {
          prefs: {
            scVisibility: string;
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      };
    };
  };
};

export type UsersProfileSetResponse = {
  ok: true;
  profile: {
    title: string;
    phone: string;
    skype: string;
    real_name: string;
    real_name_normalized: string;
    display_name: string;
    display_name_normalized: string;
    fields: Record<ProfileFieldId, {
      value: string;
      alt: string;
    }>;
    status_text: string;
    status_emoji: string;
    status_emoji_display_info: Array<{
      display_url: string;
      unicode: string;
    }>;
    status_expiration: number;
    avatar_hash: string;
    start_date: string;
    ooo_message?: string;
    guest_invited_by?: string;
    image_original: string;
    is_custom_image: boolean;
    pronouns?: string;
    who_can_share_contact_card?: string;
    huddle_state?: string;
    huddle_state_expiration_ts?: number;
    first_name: string;
    last_name: string;
    image_24: string;
    image_32: string;
    image_48: string;
    image_72: string;
    image_192: string;
    image_512: string;
    image_1024: string;
    status_text_canonical: string;
  };
  username: string;
};

export type UsersProfileSetAdminSectionsResultDataSetProfileAdminProfileAdminSectionsProfileAdminElementsEntry = {
  api: string[];
  ui: boolean;
  scim: boolean;
  __typename: string;
};

export type UsersProfileSetAdminSectionsResultDataSetProfileAdminProfileAdminSectionsProfileAdminElementsName =
  | "id"
  | "hint"
  | "isIndexed"
  | "isFilterable"
  | "isScimManaged"
  | "elementKey"
  | "legacyFieldId"
  | "label"
  | "order"
  | "type"
  | "isHidden"
  | "canChangeHidden"
  | "canEdit"
  | "canChangeLabel"
  | "canChangeSearch"
  | "canSetOptions"
  | "permissions"
  | "defaultVisibility"
  | "__typename"
  | "validDataSources"
  | "options"
  | "inverseLabel"
  | "isInverse"
  | "areCelebrationsEnabled"
;

export type UsersProfileSetAdminSectionsResponse = {
  ok: true;
  result: {
    data: {
      setProfileAdmin: {
        id: string;
        profileAdminSections: Array<{
          id: string;
          label: string;
          order: number;
          type: string;
          isHidden: boolean;
          canChangeHidden: boolean;
          canEdit: boolean;
          profileAdminElements: Record<UsersProfileSetAdminSectionsResultDataSetProfileAdminProfileAdminSectionsProfileAdminElementsName, UsersProfileSetAdminSectionsResultDataSetProfileAdminProfileAdminSectionsProfileAdminElementsEntry>[];
          __typename: string;
        }>;
        __typename: string;
      };
      __typename: string;
    };
  };
};

export type UsersProfileSetSectionsResultDataSetProfileSectionProfileSectionsProfileElementsEntry = {
  api: string[];
  ui: boolean;
  scim: boolean;
  __typename: string;
};

export type UsersProfileSetSectionsResultDataSetProfileSectionProfileSectionsProfileElementsName =
  | "id"
  | "hint"
  | "isFilterable"
  | "isScimManaged"
  | "isHidden"
  | "isMissing"
  | "label"
  | "order"
  | "type"
  | "elementKey"
  | "elementId"
  | "legacyFieldId"
  | "permissions"
  | "defaultVisibility"
  | "__typename"
  | "text"
  | "options"
  | "fileId"
  | "persons"
  | "date"
  | "uri"
  | "displayText"
;

export type UsersProfileSetSectionsResponse = {
  ok: true;
  result: {
    data: {
      setProfileSection: {
        id: string;
        isSelf: boolean;
        profileSections: Array<{
          id: string;
          sectionId: string;
          label: string;
          order: number;
          type: string;
          canEdit: boolean;
          profileElements: Record<UsersProfileSetSectionsResultDataSetProfileSectionProfileSectionsProfileElementsName, UsersProfileSetSectionsResultDataSetProfileSectionProfileSectionsProfileElementsEntry>[];
          __typename: string;
        }>;
        __typename: string;
      };
    };
  };
};

export type UsersRecommendResponse = {
  ok: true;
  user_ids: unknown[];
};

export type UsersSetPhotoResponse = {
  ok: true;
  profile: {
    image_24: string;
    image_32: string;
    image_48: string;
    image_72: string;
    image_192: string;
    image_512: string;
    image_1024: string;
    image_original: string;
    avatar_hash: string;
  };
};

export type UsersSharedInvitesListResponse = {
  ok: true;
  invites: Array<{
    invite_id: string;
    inviter_id: string;
    date_create: number;
    date_delete: number;
    date_expire: number;
    code: string;
    url: string;
    max_signups: number;
    num_signups: number;
    notifications_enabled: boolean;
  }>;
};

export type UsersSharedInvitesRenewResponse = {
  ok: true;
  inviter_id: string;
  date_create: number;
  date_delete: number;
  date_expire: number;
  code: string;
  url: string;
  max_signups: number;
  num_signups: number;
  notifications_enabled: boolean;
};

export type UsersSharedInvitesRevokeResponse = {
  ok: true;
};

export type UsersSlackConnectOrgListResponse = {
  ok: true;
  total: number;
  next_cursor: null;
  orgs: unknown[];
};

export type UsersStateMachineResponse = {
  ok: true;
  machines: Array<{
    machine_name: string;
  }>;
};

export type ViewsCloseResponse = {
  ok: true;
};

export type ViewsGetResponse = {
  ok: true;
  view: {
    id: string;
    team_id: string;
    type: string;
    blocks: Array<{
      type: string;
      block_id: string;
      text?: {
        type: string;
        text: string;
        verbatim: boolean;
      };
      label?: {
        type: string;
        text: string;
      };
      optional?: boolean;
      dispatch_action?: boolean;
      accessory?: {
        type: string;
        action_id: string;
        text: {
          type: string;
          text: string;
        };
        url?: string;
      };
    }>;
    private_metadata: string;
    callback_id: string;
    state: {
      values: {
        question?: {
          value: {
            type: string;
            value: string;
          };
        };
        channel?: {
          value: {
            type: string;
            selected_conversation: string;
            response_url_enabled: boolean;
          };
        };
      };
    };
    hash: string;
    title: {
      type: string;
      text: string;
    };
    clear_on_close: boolean;
    notify_on_close: boolean;
    close: {
      type: string;
      text: string;
    };
    submit: {
      type: string;
      text: string;
    };
    previous_view_id: null;
    root_view_id: string;
    app_id: string;
    app_installed_team_id: string;
    bot_id: string;
  };
};

export type ViewsSubmitResponse = {
  ok: true;
  view: null;
  response_action: null;
};

export type WorkflowsActivityListResponse = {
  ok: true;
  workflow_events: unknown[];
};

export type WorkflowsTemplatesListResponse = {
  ok: true;
  restricted_app_ids: unknown[];
  templates: Array<{
    id: string;
    name: string;
    description: string;
    small_icon_url: string;
    state: string;
    localization_state: string;
    weight: number;
    madlib_sentence: string;
    has_restricted_trigger_types: boolean;
    localization: {
      locale: string;
      name: string;
      description: string;
      madlib_sentence: string;
    };
    has_restricted_apps: boolean;
    categories: string[];
  }>;
};

export type WorkflowsTemplatesListAsDecoratedWorkflowsResponse = {
  ok: true;
  templates: Array<{
    id: string;
    name: string;
    description: string;
    categories: string[];
    date_created: number;
    date_updated: number;
    state: string;
    localization_state: string;
    trigger: {
      id: string;
      type: string;
      subtype: string;
      inputs: {
        TRIGGER_ID_PLACE_HOLDER__record_url?: {
          value: string;
          locked: boolean;
          hidden: boolean;
        };
        TRIGGER_ID_PLACE_HOLDER__user_id?: {
          value: string;
          locked: boolean;
          hidden: boolean;
        };
        TRIGGER_ID_PLACE_HOLDER__channel_id?: {
          value: string;
          locked: boolean;
          hidden: boolean;
        };
      };
      outputs: Record<string, {
        type: string;
        title: string;
        description: string;
        is_required: boolean;
        name: string;
      }>;
      available_data: Record<string, {
        type: string;
        title: string;
        description: string;
        is_required: boolean;
        name: string;
      }>;
      name: string;
      description: string;
      coachmark: string;
    };
    workflow: {
      title: string;
      description: string;
      input_parameters: {
        TRIGGER_ID_PLACE_HOLDER__record_url?: {
          type: string;
          name: string;
          description: string;
          title: string;
        };
        TRIGGER_ID_PLACE_HOLDER__user_id?: {
          type: string;
          name: string;
          description: string;
          title: string;
          is_required: boolean;
        };
        TRIGGER_ID_PLACE_HOLDER__channel_id?: {
          type: string;
          name: string;
          description: string;
          title: string;
          is_required: boolean;
        };
      };
      steps: Array<{
        coachmark: string;
        id: string;
        function: {
          id: string;
          app_id: string;
          callback_id: string;
          title: string;
          description: string;
          type: string;
          input_parameters: Array<{
            type: string;
            name: string;
            title: string;
            is_required?: boolean;
            description: string;
            is_hidden?: boolean;
            additionalProperties?: boolean;
            properties?: {
              salesforce?: {
                type: string;
              };
              actions?: {
                type: string;
                additionalProperties: boolean;
              };
            };
            items?: {
              type: string;
            };
            maxLength?: number;
          }>;
          output_parameters: Array<{
            type: string;
            name: string;
            title: string;
            is_required?: boolean;
            description: string;
            is_hidden?: boolean;
          }>;
        };
        inputs: {
          message: {
            value: Array<{
              type: string;
            }>;
            hidden: boolean;
            locked: boolean;
            is_localizable?: boolean;
          };
          channel_id: {
            value: string;
            hidden: boolean;
            locked: boolean;
          };
          user_id?: {
            value: string;
            hidden: boolean;
            locked: boolean;
          };
          interactive_blocks?: {
            value: Array<{
              type: string;
            }>;
            hidden: boolean;
            locked: boolean;
            is_localizable: boolean;
          };
          title?: {
            value: string;
            hidden: boolean;
            locked: boolean;
            is_localizable: boolean;
          };
          fields?: {
            value: {
              required: string[];
            };
            hidden: boolean;
            locked: boolean;
            is_localizable: boolean;
          };
          interactivity?: {
            value: string;
            hidden: boolean;
            locked: boolean;
          };
        };
        outputs: string[];
        available_data: string[];
        type: string;
      }>;
      icons: {
        image_96: string;
        image_192: string;
      };
    };
    available_data: Record<string, {
      type: string;
      name: string;
      title: string;
      description: string;
      is_hidden: boolean;
      source: string;
      source_id: string;
    }>;
    collaborator_ids: unknown[];
    madlibs_config?: {
      sentence: string;
      keyword_mapping: {
        steps: Array<{
          id: string;
          type: string;
          default: Array<{
            type: string;
          }>;
        }>;
        trigger: {
          type: string;
          subtype: string;
        };
      };
    };
  }>;
};

export type WorkflowsTriggersDeleteResponse = {
  ok: true;
};

export type WorkflowsTriggersInfoResponse = {
  ok: true;
  trigger: {
    id: string;
    inputs: Record<string, unknown>;
    outputs: Record<string, {
      type: string;
      name: string;
      title: string;
      is_required: boolean;
      description: string;
    }>;
    available_data: Record<string, {
      type: string;
      name: string;
      title: string;
      is_required: boolean;
      description: string;
    }>;
    date_created: number;
    date_updated: number;
    owning_team_id: string;
    type: string;
    subtype: string;
    name: string;
    description: string;
    share_url: string;
    channel_ids: string[];
    workflow: {
      id: string;
      callback_id: string;
      title: string;
      description: string;
      type: string;
      input_parameters: Array<{
        type: string;
        name: string;
        description: string;
        title: string;
        is_required: boolean;
      }>;
      output_parameters: unknown[];
      product_level_availability: {
        is_available: boolean;
        available_to: string;
      };
      category_id: string;
      category_label: string;
      app_id: string;
      app: {
        id: string;
        name: string;
        icons: {
          image_32: string;
          image_48: string;
          image_64: string;
          image_72: string;
        };
        is_workflow_app: boolean;
        sales_home_workflow_app_type: number;
      };
      date_created: number;
      date_released: number;
      date_updated: number;
      date_deleted: number;
      form_enabled: boolean;
      workflow_id: string;
    };
    trigger_type_id: string;
  };
};

export type WorkflowsTriggersListResponse = {
  ok: true;
  triggers: Array<{
    id: string;
    inputs: Record<WorkflowTriggerId, {
      value: string;
      locked: boolean;
      hidden: boolean;
    }>;
    outputs: Record<string, {
      type: string;
      name: string;
      title: string;
      is_required: boolean;
      description: string;
    }>;
    available_data: Record<string, {
      type: string;
      name: string;
      title: string;
      is_required: boolean;
      description: string;
    }>;
    date_created: number;
    date_updated: number;
    owning_team_id: string;
    filter?: {
      root: {
        statement: string;
      };
      version: number;
    };
    type: string;
    subtype?: string;
    name: string;
    description: string;
    share_url: string;
    channel_ids?: string[];
    workflow: {
      id: string;
      callback_id: string;
      title: string;
      description: string;
      type: string;
      input_parameters: Array<{
        type: string;
        name: string;
        description: string;
        title: string;
        is_hidden?: boolean;
        is_required?: boolean;
      }>;
      output_parameters: unknown[];
      product_level_availability: {
        is_available: boolean;
        available_to: string;
      };
      category_id: string;
      category_label: string;
      app_id: string;
      app: {
        id: string;
        name: string;
        icons: {
          image_32: string;
          image_48: string;
          image_64: string;
          image_72: string;
        };
        is_workflow_app: boolean;
        sales_home_workflow_app_type: number;
      };
      date_created: number;
      date_released: number;
      date_updated: number;
      date_deleted: number;
      form_enabled: boolean;
      workflow_id: string;
    };
    shortcut_url?: string;
    schedule?: {
      start_time: string;
      timezone: string;
      frequency: {
        type: string;
      };
    };
    webhook_url?: string;
  }>;
  rejected_triggers: unknown[];
  response_metadata: {
    next_cursor: string;
  };
};

export type WorkflowsTriggersListRecentlyRunForUserResponse = {
  ok: true;
  recently_run_triggers: unknown[];
  recently_run_triggers_with_timestamps: unknown[];
};

export type WorkflowsTriggersPermissionsListResponse = {
  ok: true;
  permission_type: string;
};

export type WorkflowsTriggersPermissionsSetResponse = {
  ok: true;
  permission_type: string;
  user_ids: string[];
};

export type WorkflowsTriggersPrefsGetResponse = {
  ok: true;
  trippable_by_slack_connected_teams: {
    hermes_triggers_trippable_by_slack_connected_teams: boolean;
    hermes_triggers_trippable_by_slack_connected_teams_mcp: string;
    allowed_teams: unknown[];
    restricted_teams: unknown[];
    allowed_teams_with_3p_connectors: unknown[];
  };
};

export type WorkflowsTriggersTypesListResponse = {
  ok: true;
  trigger_types: Array<{
    is_available_to_user: boolean;
    trigger_type: {
      id: string;
      icon: string;
      label: string;
      group: string;
      type: string;
      app_id: string;
      description?: string;
      subtype?: string;
      service_config?: {
        default_inputs: {
          description?: {
            value: string;
            locked: boolean;
            hidden: boolean;
          };
          webhook_url: {
            value: string;
            locked: boolean;
            hidden: boolean;
          };
          types?: {
            value: string[];
            locked: boolean;
            hidden: boolean;
          };
          generated_secret?: {
            value: string;
            locked: boolean;
            hidden: boolean;
          };
        };
        function: {
          id: string;
          callback_id: string;
          title: string;
          description: string;
          type: string;
          input_parameters: Array<{
            type: string;
            name: string;
            title: string;
            is_required: boolean;
            dynamic_options?: {
              function: string;
              inputs: {
                asana_access_token?: {
                  value: string;
                };
                project_name?: {
                  value: string;
                };
                workspace_gid?: {
                  value: string;
                };
                basecamp_access_token?: {
                  value: string;
                };
                domain?: {
                  value: string;
                };
                project_id?: {
                  value: string;
                };
                todo_list_id?: {
                  value: string;
                };
                bitbucket_access_token?: {
                  value: string;
                };
                query?: {
                  value: string;
                };
                workspace_uuid?: {
                  value: string;
                };
                clickup_access_token?: {
                  value: string;
                };
                team_id?: {
                  value: string;
                };
                space_id?: {
                  value: string;
                };
                folder_id?: {
                  value: string;
                };
              };
              options: {
                target_array: {
                  type: string;
                  value: string;
                };
                value_path: string;
                label_path: string;
              };
            };
            description?: string;
            oauth2_provider_key?: string;
            is_hidden?: boolean;
            default: string[];
            hint?: string;
            choices?: Array<{
              title: string;
              value: string;
            }>;
            items?: {
              type: string;
            };
          }>;
          output_parameters: Array<{
            type: string;
            name: string;
            description: string;
            title: string;
            is_required: boolean;
          }>;
          product_level_availability: {
            is_available: boolean;
            available_to: string;
          };
          category_id: string;
          category_label: string;
          app_id: string;
          app: {
            id: string;
            name: string;
            icons: {
              image_32: string;
              image_48: string;
              image_64: string;
              image_72: string;
            };
            is_workflow_app: boolean;
            sales_home_workflow_app_type: number;
          };
          date_created: number;
          date_released: number;
          date_updated: number;
          date_deleted: number;
          form_enabled: boolean;
        };
      };
    };
    private_channel_access?: string;
    private_channel_message?: boolean;
  }>;
};

export type WorkflowsTriggersUpdateResponse = {
  ok: true;
  trigger: {
    id: string;
    inputs: Record<string, unknown>;
    outputs: Record<string, {
      type: string;
      name: string;
      title: string;
      is_required: boolean;
      description: string;
    }>;
    available_data: Record<string, {
      type: string;
      name: string;
      title: string;
      is_required: boolean;
      description: string;
    }>;
    date_created: number;
    date_updated: number;
    owning_team_id: string;
    type: string;
    subtype: string;
    name: string;
    description: string;
    share_url: string;
    channel_ids: string[];
    workflow: {
      id: string;
      callback_id: string;
      title: string;
      description: string;
      type: string;
      input_parameters: Array<{
        type: string;
        name: string;
        description: string;
        title: string;
      }>;
      output_parameters: unknown[];
      product_level_availability: {
        is_available: boolean;
        available_to: string;
      };
      category_id: string;
      category_label: string;
      app_id: string;
      app: {
        id: string;
        name: string;
        icons: {
          image_32: string;
          image_48: string;
          image_64: string;
          image_72: string;
        };
        is_workflow_app: boolean;
        sales_home_workflow_app_type: number;
      };
      date_created: number;
      date_released: number;
      date_updated: number;
      date_deleted: number;
      form_enabled: boolean;
      workflow_id: string;
    };
  };
};

// ── API method names ────────────────────────────────────────────────────

export type SlackApiMethod =
  | "activity.feed"
  | "activity.markRead"
  | "activity.views"
  | "admin.accountType.permissions.add"
  | "admin.accountType.permissions.list"
  | "admin.accountType.permissions.remove"
  | "admin.activity.logs.list"
  | "admin.analytics.export"
  | "admin.analytics.getAppsAnalytics"
  | "admin.analytics.getAvailableDateRange"
  | "admin.analytics.getChannelAnalytics"
  | "admin.analytics.getMemberAnalytics"
  | "admin.apps.certified.list"
  | "admin.apps.config.lookup"
  | "admin.apps.config.set"
  | "admin.apps.installed.list"
  | "admin.apps.lookup"
  | "admin.apps.recommend.add"
  | "admin.apps.recommend.list"
  | "admin.apps.recommend.remove"
  | "admin.apps.search"
  | "admin.apps.uninstall"
  | "admin.billing.settings.boot"
  | "admin.deprecations.list"
  | "admin.features.list"
  | "admin.features.permissions.list"
  | "admin.functions.list"
  | "admin.roles.addMembers"
  | "admin.roles.entity.listAssignments"
  | "admin.roles.list"
  | "admin.roles.removeMembers"
  | "admin.sessions.accessLogs"
  | "admin.workflows.search"
  | "admin.workflows.triggers.types.list"
  | "admin.workflows.triggers.types.permissions.lookup"
  | "admin.workflows.triggers.types.permissions.set"
  | "ai.alpha.agents.threads.list"
  | "ai.alpha.digest.list"
  | "ai.alpha.digest.listDigestChannelIds"
  | "ai.alpha.summarize.channelUnreads"
  | "ai.alpha.translate.locales"
  | "ai.feedback.request"
  | "aiApps.list"
  | "api.features"
  | "api.getFlannelHttpUrl"
  | "app.uninstallTasks.list"
  | "apps.actions.listForResource"
  | "apps.actions.v2.execute"
  | "apps.auth.external.userAuths.get"
  | "apps.certified.list"
  | "apps.home.dispatchOpenEvent"
  | "apps.index.filters.list"
  | "apps.index.list"
  | "apps.index.search"
  | "apps.manifest.create"
  | "apps.manifest.export"
  | "apps.manifest.update"
  | "apps.manifest.validate"
  | "apps.profile.get"
  | "apps.recommendations.list"
  | "apps.scopes.groupedInfo"
  | "apps.scopes.info"
  | "apps.team.variables.delete"
  | "apps.team.variables.get"
  | "apps.team.variables.set"
  | "assistant.threads.changeContext"
  | "assistant.threads.startThread"
  | "auth.captcha"
  | "auth.revoke"
  | "auth.test"
  | "blocks.actions"
  | "blocks.format"
  | "bookmarks.add"
  | "bookmarks.list"
  | "bookmarks.remove"
  | "calendar.getInstalledCalendars"
  | "calendar.user.info"
  | "canvases.getCannedTemplates"
  | "canvases.getTemplates"
  | "canvases.listHeaders"
  | "canvases.notificationSections"
  | "channels.prefs.get"
  | "channels.prefs.set"
  | "chat.attachmentAction"
  | "chat.command"
  | "chat.delete"
  | "chat.deleteAttachment"
  | "chat.postMessage"
  | "chat.removeUnfurlLink"
  | "chat.shareMessage"
  | "chat.unfurlLink"
  | "chat.update"
  | "client.appCommands"
  | "client.boot"
  | "client.counts"
  | "client.dms"
  | "client.extras"
  | "client.getWebSocketURL"
  | "client.shouldReload"
  | "client.userBoot"
  | "connectInvites.list"
  | "conversations.addTab"
  | "conversations.archive"
  | "conversations.badgeCount"
  | "conversations.bulkLeave"
  | "conversations.bulkReacjiTriggers"
  | "conversations.canCreateSharedInvite"
  | "conversations.channelPrefixes.create"
  | "conversations.channelPrefixes.delete"
  | "conversations.channelPrefixes.list"
  | "conversations.close"
  | "conversations.convertToPrivate"
  | "conversations.create"
  | "conversations.emailaddresses.create"
  | "conversations.emailaddresses.delete"
  | "conversations.emailaddresses.info"
  | "conversations.emailaddresses.update"
  | "conversations.findEligibleWorkspaces"
  | "conversations.genericInfo"
  | "conversations.getRetention"
  | "conversations.history"
  | "conversations.info"
  | "conversations.invite"
  | "conversations.join"
  | "conversations.kick"
  | "conversations.leave"
  | "conversations.leave.recommendations"
  | "conversations.list"
  | "conversations.listPrefs"
  | "conversations.mark"
  | "conversations.open"
  | "conversations.pendingInvites.list"
  | "conversations.permissions.accountTypes.list"
  | "conversations.permissions.accountTypes.set"
  | "conversations.recommend"
  | "conversations.removeTab"
  | "conversations.rename"
  | "conversations.replies"
  | "conversations.setProperties"
  | "conversations.setPurpose"
  | "conversations.setRetention"
  | "conversations.setTopic"
  | "conversations.sharedApprovals.list"
  | "conversations.suggestions"
  | "conversations.teamConnections"
  | "conversations.unarchive"
  | "conversations.updateDefaultState"
  | "conversations.updateTab"
  | "conversations.validateName"
  | "conversations.view"
  | "developer.appdirectory.submissions.info"
  | "developer.apps.actions.delete"
  | "developer.apps.actions.v2.list"
  | "developer.apps.actions.v2.update"
  | "developer.apps.appLevelTokens.create"
  | "developer.apps.appLevelTokens.getTokenString"
  | "developer.apps.appLevelTokens.list"
  | "developer.apps.appLevelTokens.revoke"
  | "developer.apps.apphome.edit"
  | "developer.apps.assistant.update"
  | "developer.apps.beta.info"
  | "developer.apps.botusers.edit"
  | "developer.apps.commands.add"
  | "developer.apps.commands.delete"
  | "developer.apps.commands.edit"
  | "developer.apps.config.createToolingToken"
  | "developer.apps.config.getFunction"
  | "developer.apps.config.listFunctions"
  | "developer.apps.config.listInstalledScopes"
  | "developer.apps.disableSocketMode"
  | "developer.apps.enableSocketMode"
  | "developer.apps.events.subscriptions.updateSubs"
  | "developer.apps.info"
  | "developer.apps.migration.orgReady"
  | "developer.apps.migration.usersTranslate"
  | "developer.apps.oauth.addRedirectUrls"
  | "developer.apps.oauth.getAppStatus"
  | "developer.apps.oauth.getTokens"
  | "developer.apps.owners.add"
  | "developer.apps.owners.remove"
  | "developer.apps.scope.list"
  | "developer.apps.scope.update"
  | "developer.apps.suggestions.delete"
  | "developer.apps.suggestions.update"
  | "developer.apps.updateIPWhitelist"
  | "developer.apps.workObjects.update"
  | "directory.disconnect"
  | "directory.token.hasScopes"
  | "dnd.endSnooze"
  | "dnd.info"
  | "dnd.setSnooze"
  | "dnd.teamInfo"
  | "drafts.create"
  | "drafts.delete"
  | "drafts.list"
  | "drafts.listActive"
  | "drafts.update"
  | "email.affiliations.info"
  | "emails.info"
  | "emoji.add"
  | "emoji.adminList"
  | "emoji.collections.list"
  | "emoji.getInfo"
  | "emoji.remove"
  | "enterprise.prefs.get"
  | "enterprise.teams.directory"
  | "experiments.getByUser"
  | "feature.usage.info"
  | "features.access.policies.list"
  | "files.canUndelete"
  | "files.close"
  | "files.completeUpload"
  | "files.delete"
  | "files.disableCrossWorkspaceLinkSharing"
  | "files.docs.fetchAccessLevelForUsers"
  | "files.edit"
  | "files.enableCrossWorkspaceLinkSharing"
  | "files.enableRestrictedSharing"
  | "files.favorites.add"
  | "files.favorites.list"
  | "files.getMetadata"
  | "files.getOverview"
  | "files.getShares"
  | "files.getUploadURL"
  | "files.info"
  | "files.list"
  | "files.markRead"
  | "files.open"
  | "files.ping"
  | "files.recentlyDeleted"
  | "files.retranscribe"
  | "files.revokePermission"
  | "files.revokePublicURL"
  | "files.share"
  | "files.sharedPublicURL"
  | "files.updatePermission"
  | "functions.distributions.permissions.list"
  | "functions.distributions.permissions.set"
  | "functions.get"
  | "functions.list"
  | "functions.shortcuts.copy"
  | "functions.workflows.delete"
  | "functions.workflows.export"
  | "functions.workflows.findWorkflowForBotUsers"
  | "functions.workflows.get"
  | "functions.workflows.getIsRestricted"
  | "functions.workflows.getLatest"
  | "functions.workflows.import"
  | "functions.workflows.list"
  | "functions.workflows.permissions.copy.list"
  | "functions.workflows.permissions.copy.set"
  | "functions.workflows.publish"
  | "functions.workflows.steps.add"
  | "functions.workflows.steps.delete"
  | "functions.workflows.steps.list"
  | "functions.workflows.steps.move"
  | "functions.workflows.steps.responses.export"
  | "functions.workflows.steps.update"
  | "functions.workflows.unpublish"
  | "functions.workflows.update"
  | "gif.featured"
  | "gif.search"
  | "help.issues.ticketStats"
  | "help.productHelpCard.list"
  | "helpcenter.getWhatsNew"
  | "helpcenter.track"
  | "helpdesk.categories"
  | "helpdesk.get"
  | "helpdesk.getArticle"
  | "huddles.get"
  | "huddles.history"
  | "huddles.listBackgrounds"
  | "im.list"
  | "imports.listByService"
  | "inprodsurveys.get"
  | "links.getDomains"
  | "lists.create"
  | "lists.getMyItems"
  | "lists.history.list"
  | "lists.history.load"
  | "lists.open"
  | "lists.records.list"
  | "lists.templates"
  | "lists.update"
  | "media.progress.update"
  | "megaphone.notifications.list"
  | "megaphone.setNotificationAsSeen"
  | "messages.list"
  | "messages.sent.list"
  | "mpim.list"
  | "onboarding.fetch"
  | "onboarding.updateTeam"
  | "onboarding.updateUser"
  | "payments.billing.addresses.get"
  | "payments.billing.addresses.locations"
  | "payments.billing.addresses.validateAndSet"
  | "payments.billing.history.list"
  | "payments.checkout.config"
  | "payments.status.get"
  | "payments.stripe.config.get"
  | "payments.stripe.customer.create"
  | "payments.stripe.customer.get"
  | "payments.stripe.paymentMethod.list"
  | "pins.add"
  | "pins.list"
  | "pins.remove"
  | "presence.set"
  | "promo.campaigns.eligibilityInfo"
  | "promo.campaigns.redeem"
  | "quip.cloneCanvas"
  | "quip.lookupFileId"
  | "quip.lookupThreadIds"
  | "quip.thread.mark"
  | "quip.thread.synchronize"
  | "reactions.add"
  | "reactions.remove"
  | "retail.cost"
  | "retail.getAvailablePlans"
  | "retail.plans"
  | "rooms.inviteResponse"
  | "saved.add"
  | "saved.clearCompleted"
  | "saved.delete"
  | "saved.list"
  | "saved.update"
  | "screenhero.rooms.info"
  | "search.appDirectory"
  | "search.autocomplete"
  | "search.autocomplete.files"
  | "search.autocomplete.intentModel"
  | "search.autocomplete.model"
  | "search.autocomplete.offlineFeatures"
  | "search.autocomplete.topEmojis"
  | "search.autocomplete.topEngagedFiles"
  | "search.autocomplete.triggers"
  | "search.enterprise"
  | "search.inline"
  | "search.modules.channels"
  | "search.modules.dms"
  | "search.modules.files"
  | "search.modules.messages"
  | "search.modules.people"
  | "search.modules.triggers"
  | "search.precache"
  | "search.save"
  | "search.team"
  | "sessions.checkRecent"
  | "sfdc.integration.admin.listOrgs"
  | "sfdc.integration.listOrgs"
  | "sharedInvites.canGetLink"
  | "signin.findWorkspaces"
  | "signup.checkSignupDomains"
  | "slackAi.permissions.getForUser"
  | "slackbot.responses.add"
  | "slackbot.responses.delete"
  | "slackbot.responses.edit"
  | "slackbot.responses.list"
  | "solutions.getTemplates"
  | "solutions.list"
  | "stars.add"
  | "stars.remove"
  | "subscriptions.thread.add"
  | "subscriptions.thread.get"
  | "subscriptions.thread.getView"
  | "subscriptions.thread.mark"
  | "subscriptions.thread.remove"
  | "subteams.info"
  | "subteams.validateHandle"
  | "subteams.validateName"
  | "team.admin.attachments.list"
  | "team.billing.addContact"
  | "team.billing.changes.list"
  | "team.billing.removeContact"
  | "team.changeInfo"
  | "team.checkEmailDomains"
  | "team.connectedOrgs.list"
  | "team.feature.getRequest"
  | "team.info"
  | "team.listExternal"
  | "team.nav.get"
  | "team.prefs.get"
  | "team.prefs.set"
  | "team.profile.get"
  | "team.slackConnectGuidelines.get"
  | "team.slackConnectPrefs.list"
  | "team.slackConnectPrefs.set"
  | "team.stats.export"
  | "team.stats.timeSeries"
  | "team.targetingCriteria"
  | "teams.authorized.ip.range.list"
  | "teams.authorized.ip.range.set"
  | "teams.company.info"
  | "teams.trials.info"
  | "templates.integrations.get"
  | "templates.provision"
  | "ublockworkaround.history"
  | "unfurl.external.validateDomain"
  | "usergroups.create"
  | "usergroups.membership"
  | "usergroups.update"
  | "usergroups.users.list"
  | "usergroups.users.update"
  | "users.accessLogs"
  | "users.admin.canAddUltraRestricted"
  | "users.admin.fetchInvitesHistory"
  | "users.admin.fetchTeamUsers"
  | "users.admin.fetchTeamUsersCsv"
  | "users.admin.inviteBulk"
  | "users.admin.resendInvitation"
  | "users.admin.setAdmin"
  | "users.admin.setInactive"
  | "users.admin.setOwner"
  | "users.admin.setRegular"
  | "users.channelSections.channels.bulkUpdate"
  | "users.channelSections.create"
  | "users.channelSections.createLink"
  | "users.channelSections.delete"
  | "users.channelSections.list"
  | "users.channelSections.set"
  | "users.consent.get"
  | "users.customStatus.list"
  | "users.emailVerificationStatus.get"
  | "users.emailtoken.get"
  | "users.getInviter"
  | "users.info"
  | "users.interactions.list"
  | "users.interactions.set"
  | "users.isEarlyJoiner"
  | "users.list"
  | "users.listIgnoredUsers"
  | "users.permissions.apps"
  | "users.prefs.get"
  | "users.prefs.set"
  | "users.prefs.setNotifications"
  | "users.preparePhoto"
  | "users.priority.add"
  | "users.priority.getRecommendations"
  | "users.priority.list"
  | "users.priority.remove"
  | "users.profile.get"
  | "users.profile.getAdminSections"
  | "users.profile.getExtras"
  | "users.profile.getSections"
  | "users.profile.set"
  | "users.profile.setAdminSections"
  | "users.profile.setSections"
  | "users.recommend"
  | "users.setPhoto"
  | "users.sharedInvites.list"
  | "users.sharedInvites.renew"
  | "users.sharedInvites.revoke"
  | "users.slackConnect.orgList"
  | "users.stateMachine"
  | "views.close"
  | "views.get"
  | "views.submit"
  | "workflows.activity.list"
  | "workflows.templates.list"
  | "workflows.templates.listAsDecoratedWorkflows"
  | "workflows.triggers.delete"
  | "workflows.triggers.info"
  | "workflows.triggers.list"
  | "workflows.triggers.listRecentlyRunForUser"
  | "workflows.triggers.permissions.list"
  | "workflows.triggers.permissions.set"
  | "workflows.triggers.prefs.get"
  | "workflows.triggers.types.list"
  | "workflows.triggers.update";

// ── Method → Params/Response mapping ───────────────────────────────────

export interface SlackApiMap {
  "activity.feed": { params: ActivityFeedParams; response: ActivityFeedResponse };
  "activity.markRead": { params: ActivityMarkReadParams; response: ActivityMarkReadResponse };
  "activity.views": { params: void; response: ActivityViewsResponse };
  "admin.accountType.permissions.add": { params: AdminAccountTypePermissionsAddParams; response: AdminAccountTypePermissionsAddResponse };
  "admin.accountType.permissions.list": { params: AdminAccountTypePermissionsListParams; response: AdminAccountTypePermissionsListResponse };
  "admin.accountType.permissions.remove": { params: AdminAccountTypePermissionsRemoveParams; response: AdminAccountTypePermissionsRemoveResponse };
  "admin.activity.logs.list": { params: AdminActivityLogsListParams; response: AdminActivityLogsListResponse };
  "admin.analytics.export": { params: AdminAnalyticsExportParams; response: AdminAnalyticsExportResponse };
  "admin.analytics.getAppsAnalytics": { params: AdminAnalyticsGetAppsAnalyticsParams; response: AdminAnalyticsGetAppsAnalyticsResponse };
  "admin.analytics.getAvailableDateRange": { params: AdminAnalyticsGetAvailableDateRangeParams; response: AdminAnalyticsGetAvailableDateRangeResponse };
  "admin.analytics.getChannelAnalytics": { params: AdminAnalyticsGetChannelAnalyticsParams; response: AdminAnalyticsGetChannelAnalyticsResponse };
  "admin.analytics.getMemberAnalytics": { params: AdminAnalyticsGetMemberAnalyticsParams; response: AdminAnalyticsGetMemberAnalyticsResponse };
  "admin.apps.certified.list": { params: void; response: AdminAppsCertifiedListResponse };
  "admin.apps.config.lookup": { params: AdminAppsConfigLookupParams; response: AdminAppsConfigLookupResponse };
  "admin.apps.config.set": { params: AdminAppsConfigSetParams; response: AdminAppsConfigSetResponse };
  "admin.apps.installed.list": { params: AdminAppsInstalledListParams; response: AdminAppsInstalledListResponse };
  "admin.apps.lookup": { params: AdminAppsLookupParams; response: AdminAppsLookupResponse };
  "admin.apps.recommend.add": { params: AdminAppsRecommendAddParams; response: AdminAppsRecommendAddResponse };
  "admin.apps.recommend.list": { params: AdminAppsRecommendListParams; response: AdminAppsRecommendListResponse };
  "admin.apps.recommend.remove": { params: AdminAppsRecommendRemoveParams; response: AdminAppsRecommendRemoveResponse };
  "admin.apps.search": { params: AdminAppsSearchParams; response: AdminAppsSearchResponse };
  "admin.apps.uninstall": { params: AdminAppsUninstallParams; response: AdminAppsUninstallResponse };
  "admin.billing.settings.boot": { params: void; response: AdminBillingSettingsBootResponse };
  "admin.deprecations.list": { params: AdminDeprecationsListParams; response: AdminDeprecationsListResponse };
  "admin.features.list": { params: void; response: AdminFeaturesListResponse };
  "admin.features.permissions.list": { params: AdminFeaturesPermissionsListParams; response: AdminFeaturesPermissionsListResponse };
  "admin.functions.list": { params: AdminFunctionsListParams; response: AdminFunctionsListResponse };
  "admin.roles.addMembers": { params: AdminRolesAddMembersParams; response: AdminRolesAddMembersResponse };
  "admin.roles.entity.listAssignments": { params: AdminRolesEntityListAssignmentsParams; response: AdminRolesEntityListAssignmentsResponse };
  "admin.roles.list": { params: AdminRolesListParams; response: AdminRolesListResponse };
  "admin.roles.removeMembers": { params: AdminRolesRemoveMembersParams; response: AdminRolesRemoveMembersResponse };
  "admin.sessions.accessLogs": { params: AdminSessionsAccessLogsParams; response: AdminSessionsAccessLogsResponse };
  "admin.workflows.search": { params: AdminWorkflowsSearchParams; response: AdminWorkflowsSearchResponse };
  "admin.workflows.triggers.types.list": { params: AdminWorkflowsTriggersTypesListParams; response: AdminWorkflowsTriggersTypesListResponse };
  "admin.workflows.triggers.types.permissions.lookup": { params: AdminWorkflowsTriggersTypesPermissionsLookupParams; response: AdminWorkflowsTriggersTypesPermissionsLookupResponse };
  "admin.workflows.triggers.types.permissions.set": { params: AdminWorkflowsTriggersTypesPermissionsSetParams; response: AdminWorkflowsTriggersTypesPermissionsSetResponse };
  "ai.alpha.agents.threads.list": { params: void; response: AiAlphaAgentsThreadsListResponse };
  "ai.alpha.digest.list": { params: void; response: AiAlphaDigestListResponse };
  "ai.alpha.digest.listDigestChannelIds": { params: void; response: AiAlphaDigestListDigestChannelIdsResponse };
  "ai.alpha.summarize.channelUnreads": { params: AiAlphaSummarizeChannelUnreadsParams; response: AiAlphaSummarizeChannelUnreadsResponse };
  "ai.alpha.translate.locales": { params: void; response: AiAlphaTranslateLocalesResponse };
  "ai.feedback.request": { params: AiFeedbackRequestParams; response: AiFeedbackRequestResponse };
  "aiApps.list": { params: AiAppsListParams; response: AiAppsListResponse };
  "api.features": { params: ApiFeaturesParams; response: ApiFeaturesResponse };
  "api.getFlannelHttpUrl": { params: ApiGetFlannelHttpUrlParams; response: ApiGetFlannelHttpUrlResponse };
  "app.uninstallTasks.list": { params: void; response: AppUninstallTasksListResponse };
  "apps.actions.listForResource": { params: AppsActionsListForResourceParams; response: AppsActionsListForResourceResponse };
  "apps.actions.v2.execute": { params: AppsActionsV2ExecuteParams; response: AppsActionsV2ExecuteResponse };
  "apps.auth.external.userAuths.get": { params: void; response: AppsAuthExternalUserAuthsGetResponse };
  "apps.certified.list": { params: void; response: AppsCertifiedListResponse };
  "apps.home.dispatchOpenEvent": { params: AppsHomeDispatchOpenEventParams; response: AppsHomeDispatchOpenEventResponse };
  "apps.index.filters.list": { params: AppsIndexFiltersListParams; response: AppsIndexFiltersListResponse };
  "apps.index.list": { params: AppsIndexListParams; response: AppsIndexListResponse };
  "apps.index.search": { params: AppsIndexSearchParams; response: AppsIndexSearchResponse };
  "apps.manifest.create": { params: AppsManifestCreateParams; response: AppsManifestCreateResponse };
  "apps.manifest.export": { params: AppsManifestExportParams; response: AppsManifestExportResponse };
  "apps.manifest.update": { params: AppsManifestUpdateParams; response: AppsManifestUpdateResponse };
  "apps.manifest.validate": { params: AppsManifestValidateParams; response: AppsManifestValidateResponse };
  "apps.profile.get": { params: AppsProfileGetParams; response: AppsProfileGetResponse };
  "apps.recommendations.list": { params: AppsRecommendationsListParams; response: AppsRecommendationsListResponse };
  "apps.scopes.groupedInfo": { params: AppsScopesGroupedInfoParams; response: AppsScopesGroupedInfoResponse };
  "apps.scopes.info": { params: AppsScopesInfoParams; response: AppsScopesInfoResponse };
  "apps.team.variables.delete": { params: AppsTeamVariablesDeleteParams; response: AppsTeamVariablesDeleteResponse };
  "apps.team.variables.get": { params: AppsTeamVariablesGetParams; response: AppsTeamVariablesGetResponse };
  "apps.team.variables.set": { params: AppsTeamVariablesSetParams; response: AppsTeamVariablesSetResponse };
  "assistant.threads.changeContext": { params: AssistantThreadsChangeContextParams; response: AssistantThreadsChangeContextResponse };
  "assistant.threads.startThread": { params: AssistantThreadsStartThreadParams; response: AssistantThreadsStartThreadResponse };
  "auth.captcha": { params: void; response: AuthCaptchaResponse };
  "auth.revoke": { params: void; response: AuthRevokeResponse };
  "auth.test": { params: void; response: AuthTestResponse };
  "blocks.actions": { params: BlocksActionsParams; response: BlocksActionsResponse };
  "blocks.format": { params: BlocksFormatParams; response: BlocksFormatResponse };
  "bookmarks.add": { params: BookmarksAddParams; response: BookmarksAddResponse };
  "bookmarks.list": { params: BookmarksListParams; response: BookmarksListResponse };
  "bookmarks.remove": { params: BookmarksRemoveParams; response: BookmarksRemoveResponse };
  "calendar.getInstalledCalendars": { params: void; response: CalendarGetInstalledCalendarsResponse };
  "calendar.user.info": { params: CalendarUserInfoParams; response: CalendarUserInfoResponse };
  "canvases.getCannedTemplates": { params: CanvasesGetCannedTemplatesParams; response: CanvasesGetCannedTemplatesResponse };
  "canvases.getTemplates": { params: CanvasesGetTemplatesParams; response: CanvasesGetTemplatesResponse };
  "canvases.listHeaders": { params: CanvasesListHeadersParams; response: CanvasesListHeadersResponse };
  "canvases.notificationSections": { params: CanvasesNotificationSectionsParams; response: CanvasesNotificationSectionsResponse };
  "channels.prefs.get": { params: ChannelsPrefsGetParams; response: ChannelsPrefsGetResponse };
  "channels.prefs.set": { params: ChannelsPrefsSetParams; response: ChannelsPrefsSetResponse };
  "chat.attachmentAction": { params: ChatAttachmentActionParams; response: ChatAttachmentActionResponse };
  "chat.command": { params: ChatCommandParams; response: ChatCommandResponse };
  "chat.delete": { params: ChatDeleteParams; response: ChatDeleteResponse };
  "chat.deleteAttachment": { params: ChatDeleteAttachmentParams; response: ChatDeleteAttachmentResponse };
  "chat.postMessage": { params: ChatPostMessageParams; response: ChatPostMessageResponse };
  "chat.removeUnfurlLink": { params: ChatRemoveUnfurlLinkParams; response: ChatRemoveUnfurlLinkResponse };
  "chat.shareMessage": { params: ChatShareMessageParams; response: ChatShareMessageResponse };
  "chat.unfurlLink": { params: ChatUnfurlLinkParams; response: ChatUnfurlLinkResponse };
  "chat.update": { params: ChatUpdateParams; response: ChatUpdateResponse };
  "client.appCommands": { params: void; response: ClientAppCommandsResponse };
  "client.boot": { params: void; response: ClientBootResponse };
  "client.counts": { params: ClientCountsParams; response: ClientCountsResponse };
  "client.dms": { params: ClientDmsParams; response: ClientDmsResponse };
  "client.extras": { params: ClientExtrasParams; response: ClientExtrasResponse };
  "client.getWebSocketURL": { params: void; response: ClientGetWebSocketURLResponse };
  "client.shouldReload": { params: ClientShouldReloadParams; response: ClientShouldReloadResponse };
  "client.userBoot": { params: ClientUserBootParams; response: ClientUserBootResponse };
  "connectInvites.list": { params: ConnectInvitesListParams; response: ConnectInvitesListResponse };
  "conversations.addTab": { params: ConversationsAddTabParams; response: ConversationsAddTabResponse };
  "conversations.archive": { params: ConversationsArchiveParams; response: ConversationsArchiveResponse };
  "conversations.badgeCount": { params: ConversationsBadgeCountParams; response: ConversationsBadgeCountResponse };
  "conversations.bulkLeave": { params: ConversationsBulkLeaveParams; response: ConversationsBulkLeaveResponse };
  "conversations.bulkReacjiTriggers": { params: ConversationsBulkReacjiTriggersParams; response: ConversationsBulkReacjiTriggersResponse };
  "conversations.canCreateSharedInvite": { params: ConversationsCanCreateSharedInviteParams; response: ConversationsCanCreateSharedInviteResponse };
  "conversations.channelPrefixes.create": { params: ConversationsChannelPrefixesCreateParams; response: ConversationsChannelPrefixesCreateResponse };
  "conversations.channelPrefixes.delete": { params: ConversationsChannelPrefixesDeleteParams; response: ConversationsChannelPrefixesDeleteResponse };
  "conversations.channelPrefixes.list": { params: ConversationsChannelPrefixesListParams; response: ConversationsChannelPrefixesListResponse };
  "conversations.close": { params: ConversationsCloseParams; response: ConversationsCloseResponse };
  "conversations.convertToPrivate": { params: ConversationsConvertToPrivateParams; response: ConversationsConvertToPrivateResponse };
  "conversations.create": { params: ConversationsCreateParams; response: ConversationsCreateResponse };
  "conversations.emailaddresses.create": { params: ConversationsEmailaddressesCreateParams; response: ConversationsEmailaddressesCreateResponse };
  "conversations.emailaddresses.delete": { params: ConversationsEmailaddressesDeleteParams; response: ConversationsEmailaddressesDeleteResponse };
  "conversations.emailaddresses.info": { params: ConversationsEmailaddressesInfoParams; response: ConversationsEmailaddressesInfoResponse };
  "conversations.emailaddresses.update": { params: ConversationsEmailaddressesUpdateParams; response: ConversationsEmailaddressesUpdateResponse };
  "conversations.findEligibleWorkspaces": { params: ConversationsFindEligibleWorkspacesParams; response: ConversationsFindEligibleWorkspacesResponse };
  "conversations.genericInfo": { params: ConversationsGenericInfoParams; response: ConversationsGenericInfoResponse };
  "conversations.getRetention": { params: ConversationsGetRetentionParams; response: ConversationsGetRetentionResponse };
  "conversations.history": { params: ConversationsHistoryParams; response: ConversationsHistoryResponse };
  "conversations.info": { params: ConversationsInfoParams; response: ConversationsInfoResponse };
  "conversations.invite": { params: ConversationsInviteParams; response: ConversationsInviteResponse };
  "conversations.join": { params: ConversationsJoinParams; response: ConversationsJoinResponse };
  "conversations.kick": { params: ConversationsKickParams; response: ConversationsKickResponse };
  "conversations.leave": { params: ConversationsLeaveParams; response: ConversationsLeaveResponse };
  "conversations.leave.recommendations": { params: ConversationsLeaveRecommendationsParams; response: ConversationsLeaveRecommendationsResponse };
  "conversations.list": { params: ConversationsListParams; response: ConversationsListResponse };
  "conversations.listPrefs": { params: ConversationsListPrefsParams; response: ConversationsListPrefsResponse };
  "conversations.mark": { params: ConversationsMarkParams; response: ConversationsMarkResponse };
  "conversations.open": { params: ConversationsOpenParams; response: ConversationsOpenResponse };
  "conversations.pendingInvites.list": { params: ConversationsPendingInvitesListParams; response: ConversationsPendingInvitesListResponse };
  "conversations.permissions.accountTypes.list": { params: ConversationsPermissionsAccountTypesListParams; response: ConversationsPermissionsAccountTypesListResponse };
  "conversations.permissions.accountTypes.set": { params: ConversationsPermissionsAccountTypesSetParams; response: ConversationsPermissionsAccountTypesSetResponse };
  "conversations.recommend": { params: ConversationsRecommendParams; response: ConversationsRecommendResponse };
  "conversations.removeTab": { params: ConversationsRemoveTabParams; response: ConversationsRemoveTabResponse };
  "conversations.rename": { params: ConversationsRenameParams; response: ConversationsRenameResponse };
  "conversations.replies": { params: ConversationsRepliesParams; response: ConversationsRepliesResponse };
  "conversations.setProperties": { params: ConversationsSetPropertiesParams; response: ConversationsSetPropertiesResponse };
  "conversations.setPurpose": { params: ConversationsSetPurposeParams; response: ConversationsSetPurposeResponse };
  "conversations.setRetention": { params: ConversationsSetRetentionParams; response: ConversationsSetRetentionResponse };
  "conversations.setTopic": { params: ConversationsSetTopicParams; response: ConversationsSetTopicResponse };
  "conversations.sharedApprovals.list": { params: ConversationsSharedApprovalsListParams; response: ConversationsSharedApprovalsListResponse };
  "conversations.suggestions": { params: void; response: ConversationsSuggestionsResponse };
  "conversations.teamConnections": { params: ConversationsTeamConnectionsParams; response: ConversationsTeamConnectionsResponse };
  "conversations.unarchive": { params: ConversationsUnarchiveParams; response: ConversationsUnarchiveResponse };
  "conversations.updateDefaultState": { params: ConversationsUpdateDefaultStateParams; response: ConversationsUpdateDefaultStateResponse };
  "conversations.updateTab": { params: ConversationsUpdateTabParams; response: ConversationsUpdateTabResponse };
  "conversations.validateName": { params: ConversationsValidateNameParams; response: ConversationsValidateNameResponse };
  "conversations.view": { params: ConversationsViewParams; response: ConversationsViewResponse };
  "developer.appdirectory.submissions.info": { params: DeveloperAppdirectorySubmissionsInfoParams; response: DeveloperAppdirectorySubmissionsInfoResponse };
  "developer.apps.actions.delete": { params: DeveloperAppsActionsDeleteParams; response: DeveloperAppsActionsDeleteResponse };
  "developer.apps.actions.v2.list": { params: DeveloperAppsActionsV2ListParams; response: DeveloperAppsActionsV2ListResponse };
  "developer.apps.actions.v2.update": { params: DeveloperAppsActionsV2UpdateParams; response: DeveloperAppsActionsV2UpdateResponse };
  "developer.apps.appLevelTokens.create": { params: DeveloperAppsAppLevelTokensCreateParams; response: DeveloperAppsAppLevelTokensCreateResponse };
  "developer.apps.appLevelTokens.getTokenString": { params: DeveloperAppsAppLevelTokensGetTokenStringParams; response: DeveloperAppsAppLevelTokensGetTokenStringResponse };
  "developer.apps.appLevelTokens.list": { params: DeveloperAppsAppLevelTokensListParams; response: DeveloperAppsAppLevelTokensListResponse };
  "developer.apps.appLevelTokens.revoke": { params: DeveloperAppsAppLevelTokensRevokeParams; response: DeveloperAppsAppLevelTokensRevokeResponse };
  "developer.apps.apphome.edit": { params: DeveloperAppsApphomeEditParams; response: DeveloperAppsApphomeEditResponse };
  "developer.apps.assistant.update": { params: DeveloperAppsAssistantUpdateParams; response: DeveloperAppsAssistantUpdateResponse };
  "developer.apps.beta.info": { params: DeveloperAppsBetaInfoParams; response: DeveloperAppsBetaInfoResponse };
  "developer.apps.botusers.edit": { params: DeveloperAppsBotusersEditParams; response: DeveloperAppsBotusersEditResponse };
  "developer.apps.commands.add": { params: DeveloperAppsCommandsAddParams; response: DeveloperAppsCommandsAddResponse };
  "developer.apps.commands.delete": { params: DeveloperAppsCommandsDeleteParams; response: DeveloperAppsCommandsDeleteResponse };
  "developer.apps.commands.edit": { params: DeveloperAppsCommandsEditParams; response: DeveloperAppsCommandsEditResponse };
  "developer.apps.config.createToolingToken": { params: void; response: DeveloperAppsConfigCreateToolingTokenResponse };
  "developer.apps.config.getFunction": { params: DeveloperAppsConfigGetFunctionParams; response: DeveloperAppsConfigGetFunctionResponse };
  "developer.apps.config.listFunctions": { params: DeveloperAppsConfigListFunctionsParams; response: DeveloperAppsConfigListFunctionsResponse };
  "developer.apps.config.listInstalledScopes": { params: DeveloperAppsConfigListInstalledScopesParams; response: DeveloperAppsConfigListInstalledScopesResponse };
  "developer.apps.disableSocketMode": { params: DeveloperAppsDisableSocketModeParams; response: DeveloperAppsDisableSocketModeResponse };
  "developer.apps.enableSocketMode": { params: DeveloperAppsEnableSocketModeParams; response: DeveloperAppsEnableSocketModeResponse };
  "developer.apps.events.subscriptions.updateSubs": { params: DeveloperAppsEventsSubscriptionsUpdateSubsParams; response: DeveloperAppsEventsSubscriptionsUpdateSubsResponse };
  "developer.apps.info": { params: DeveloperAppsInfoParams; response: DeveloperAppsInfoResponse };
  "developer.apps.migration.orgReady": { params: DeveloperAppsMigrationOrgReadyParams; response: DeveloperAppsMigrationOrgReadyResponse };
  "developer.apps.migration.usersTranslate": { params: DeveloperAppsMigrationUsersTranslateParams; response: DeveloperAppsMigrationUsersTranslateResponse };
  "developer.apps.oauth.addRedirectUrls": { params: DeveloperAppsOauthAddRedirectUrlsParams; response: DeveloperAppsOauthAddRedirectUrlsResponse };
  "developer.apps.oauth.getAppStatus": { params: DeveloperAppsOauthGetAppStatusParams; response: DeveloperAppsOauthGetAppStatusResponse };
  "developer.apps.oauth.getTokens": { params: DeveloperAppsOauthGetTokensParams; response: DeveloperAppsOauthGetTokensResponse };
  "developer.apps.owners.add": { params: DeveloperAppsOwnersAddParams; response: DeveloperAppsOwnersAddResponse };
  "developer.apps.owners.remove": { params: DeveloperAppsOwnersRemoveParams; response: DeveloperAppsOwnersRemoveResponse };
  "developer.apps.scope.list": { params: DeveloperAppsScopeListParams; response: DeveloperAppsScopeListResponse };
  "developer.apps.scope.update": { params: DeveloperAppsScopeUpdateParams; response: DeveloperAppsScopeUpdateResponse };
  "developer.apps.suggestions.delete": { params: DeveloperAppsSuggestionsDeleteParams; response: DeveloperAppsSuggestionsDeleteResponse };
  "developer.apps.suggestions.update": { params: DeveloperAppsSuggestionsUpdateParams; response: DeveloperAppsSuggestionsUpdateResponse };
  "developer.apps.updateIPWhitelist": { params: DeveloperAppsUpdateIPWhitelistParams; response: DeveloperAppsUpdateIPWhitelistResponse };
  "developer.apps.workObjects.update": { params: DeveloperAppsWorkObjectsUpdateParams; response: DeveloperAppsWorkObjectsUpdateResponse };
  "directory.disconnect": { params: DirectoryDisconnectParams; response: DirectoryDisconnectResponse };
  "directory.token.hasScopes": { params: DirectoryTokenHasScopesParams; response: DirectoryTokenHasScopesResponse };
  "dnd.endSnooze": { params: void; response: DndEndSnoozeResponse };
  "dnd.info": { params: DndInfoParams; response: DndInfoResponse };
  "dnd.setSnooze": { params: DndSetSnoozeParams; response: DndSetSnoozeResponse };
  "dnd.teamInfo": { params: DndTeamInfoParams; response: DndTeamInfoResponse };
  "drafts.create": { params: DraftsCreateParams; response: DraftsCreateResponse };
  "drafts.delete": { params: DraftsDeleteParams; response: DraftsDeleteResponse };
  "drafts.list": { params: DraftsListParams; response: DraftsListResponse };
  "drafts.listActive": { params: DraftsListActiveParams; response: DraftsListActiveResponse };
  "drafts.update": { params: DraftsUpdateParams; response: DraftsUpdateResponse };
  "email.affiliations.info": { params: void; response: EmailAffiliationsInfoResponse };
  "emails.info": { params: EmailsInfoParams; response: EmailsInfoResponse };
  "emoji.add": { params: EmojiAddParams; response: EmojiAddResponse };
  "emoji.adminList": { params: EmojiAdminListParams; response: EmojiAdminListResponse };
  "emoji.collections.list": { params: EmojiCollectionsListParams; response: EmojiCollectionsListResponse };
  "emoji.getInfo": { params: EmojiGetInfoParams; response: EmojiGetInfoResponse };
  "emoji.remove": { params: EmojiRemoveParams; response: EmojiRemoveResponse };
  "enterprise.prefs.get": { params: void; response: EnterprisePrefsGetResponse };
  "enterprise.teams.directory": { params: EnterpriseTeamsDirectoryParams; response: EnterpriseTeamsDirectoryResponse };
  "experiments.getByUser": { params: ExperimentsGetByUserParams; response: ExperimentsGetByUserResponse };
  "feature.usage.info": { params: FeatureUsageInfoParams; response: FeatureUsageInfoResponse };
  "features.access.policies.list": { params: void; response: FeaturesAccessPoliciesListResponse };
  "files.canUndelete": { params: FilesCanUndeleteParams; response: FilesCanUndeleteResponse };
  "files.close": { params: FilesCloseParams; response: FilesCloseResponse };
  "files.completeUpload": { params: FilesCompleteUploadParams; response: FilesCompleteUploadResponse };
  "files.delete": { params: FilesDeleteParams; response: FilesDeleteResponse };
  "files.disableCrossWorkspaceLinkSharing": { params: FilesDisableCrossWorkspaceLinkSharingParams; response: FilesDisableCrossWorkspaceLinkSharingResponse };
  "files.docs.fetchAccessLevelForUsers": { params: FilesDocsFetchAccessLevelForUsersParams; response: FilesDocsFetchAccessLevelForUsersResponse };
  "files.edit": { params: FilesEditParams; response: FilesEditResponse };
  "files.enableCrossWorkspaceLinkSharing": { params: FilesEnableCrossWorkspaceLinkSharingParams; response: FilesEnableCrossWorkspaceLinkSharingResponse };
  "files.enableRestrictedSharing": { params: FilesEnableRestrictedSharingParams; response: FilesEnableRestrictedSharingResponse };
  "files.favorites.add": { params: FilesFavoritesAddParams; response: FilesFavoritesAddResponse };
  "files.favorites.list": { params: FilesFavoritesListParams; response: FilesFavoritesListResponse };
  "files.getMetadata": { params: FilesGetMetadataParams; response: FilesGetMetadataResponse };
  "files.getOverview": { params: FilesGetOverviewParams; response: FilesGetOverviewResponse };
  "files.getShares": { params: FilesGetSharesParams; response: FilesGetSharesResponse };
  "files.getUploadURL": { params: FilesGetUploadURLParams; response: FilesGetUploadURLResponse };
  "files.info": { params: FilesInfoParams; response: FilesInfoResponse };
  "files.list": { params: FilesListParams; response: FilesListResponse };
  "files.markRead": { params: FilesMarkReadParams; response: FilesMarkReadResponse };
  "files.open": { params: FilesOpenParams; response: FilesOpenResponse };
  "files.ping": { params: FilesPingParams; response: FilesPingResponse };
  "files.recentlyDeleted": { params: void; response: FilesRecentlyDeletedResponse };
  "files.retranscribe": { params: FilesRetranscribeParams; response: FilesRetranscribeResponse };
  "files.revokePermission": { params: FilesRevokePermissionParams; response: FilesRevokePermissionResponse };
  "files.revokePublicURL": { params: FilesRevokePublicURLParams; response: FilesRevokePublicURLResponse };
  "files.share": { params: FilesShareParams; response: FilesShareResponse };
  "files.sharedPublicURL": { params: FilesSharedPublicURLParams; response: FilesSharedPublicURLResponse };
  "files.updatePermission": { params: FilesUpdatePermissionParams; response: FilesUpdatePermissionResponse };
  "functions.distributions.permissions.list": { params: FunctionsDistributionsPermissionsListParams; response: FunctionsDistributionsPermissionsListResponse };
  "functions.distributions.permissions.set": { params: FunctionsDistributionsPermissionsSetParams; response: FunctionsDistributionsPermissionsSetResponse };
  "functions.get": { params: FunctionsGetParams; response: FunctionsGetResponse };
  "functions.list": { params: FunctionsListParams; response: FunctionsListResponse };
  "functions.shortcuts.copy": { params: FunctionsShortcutsCopyParams; response: FunctionsShortcutsCopyResponse };
  "functions.workflows.delete": { params: FunctionsWorkflowsDeleteParams; response: FunctionsWorkflowsDeleteResponse };
  "functions.workflows.export": { params: FunctionsWorkflowsExportParams; response: FunctionsWorkflowsExportResponse };
  "functions.workflows.findWorkflowForBotUsers": { params: FunctionsWorkflowsFindWorkflowForBotUsersParams; response: FunctionsWorkflowsFindWorkflowForBotUsersResponse };
  "functions.workflows.get": { params: FunctionsWorkflowsGetParams; response: FunctionsWorkflowsGetResponse };
  "functions.workflows.getIsRestricted": { params: FunctionsWorkflowsGetIsRestrictedParams; response: FunctionsWorkflowsGetIsRestrictedResponse };
  "functions.workflows.getLatest": { params: FunctionsWorkflowsGetLatestParams; response: FunctionsWorkflowsGetLatestResponse };
  "functions.workflows.import": { params: FunctionsWorkflowsImportParams; response: FunctionsWorkflowsImportResponse };
  "functions.workflows.list": { params: FunctionsWorkflowsListParams; response: FunctionsWorkflowsListResponse };
  "functions.workflows.permissions.copy.list": { params: FunctionsWorkflowsPermissionsCopyListParams; response: FunctionsWorkflowsPermissionsCopyListResponse };
  "functions.workflows.permissions.copy.set": { params: FunctionsWorkflowsPermissionsCopySetParams; response: FunctionsWorkflowsPermissionsCopySetResponse };
  "functions.workflows.publish": { params: FunctionsWorkflowsPublishParams; response: FunctionsWorkflowsPublishResponse };
  "functions.workflows.steps.add": { params: FunctionsWorkflowsStepsAddParams; response: FunctionsWorkflowsStepsAddResponse };
  "functions.workflows.steps.delete": { params: FunctionsWorkflowsStepsDeleteParams; response: FunctionsWorkflowsStepsDeleteResponse };
  "functions.workflows.steps.list": { params: FunctionsWorkflowsStepsListParams; response: FunctionsWorkflowsStepsListResponse };
  "functions.workflows.steps.move": { params: FunctionsWorkflowsStepsMoveParams; response: FunctionsWorkflowsStepsMoveResponse };
  "functions.workflows.steps.responses.export": { params: FunctionsWorkflowsStepsResponsesExportParams; response: FunctionsWorkflowsStepsResponsesExportResponse };
  "functions.workflows.steps.update": { params: FunctionsWorkflowsStepsUpdateParams; response: FunctionsWorkflowsStepsUpdateResponse };
  "functions.workflows.unpublish": { params: FunctionsWorkflowsUnpublishParams; response: FunctionsWorkflowsUnpublishResponse };
  "functions.workflows.update": { params: FunctionsWorkflowsUpdateParams; response: FunctionsWorkflowsUpdateResponse };
  "gif.featured": { params: GifFeaturedParams; response: GifFeaturedResponse };
  "gif.search": { params: GifSearchParams; response: GifSearchResponse };
  "help.issues.ticketStats": { params: void; response: HelpIssuesTicketStatsResponse };
  "help.productHelpCard.list": { params: HelpProductHelpCardListParams; response: HelpProductHelpCardListResponse };
  "helpcenter.getWhatsNew": { params: HelpcenterGetWhatsNewParams; response: HelpcenterGetWhatsNewResponse };
  "helpcenter.track": { params: HelpcenterTrackParams; response: HelpcenterTrackResponse };
  "helpdesk.categories": { params: HelpdeskCategoriesParams; response: HelpdeskCategoriesResponse };
  "helpdesk.get": { params: HelpdeskGetParams; response: HelpdeskGetResponse };
  "helpdesk.getArticle": { params: HelpdeskGetArticleParams; response: HelpdeskGetArticleResponse };
  "huddles.get": { params: HuddlesGetParams; response: HuddlesGetResponse };
  "huddles.history": { params: HuddlesHistoryParams; response: HuddlesHistoryResponse };
  "huddles.listBackgrounds": { params: void; response: HuddlesListBackgroundsResponse };
  "im.list": { params: ImListParams; response: ImListResponse };
  "imports.listByService": { params: ImportsListByServiceParams; response: ImportsListByServiceResponse };
  "inprodsurveys.get": { params: InprodsurveysGetParams; response: InprodsurveysGetResponse };
  "links.getDomains": { params: void; response: LinksGetDomainsResponse };
  "lists.create": { params: ListsCreateParams; response: ListsCreateResponse };
  "lists.getMyItems": { params: ListsGetMyItemsParams; response: ListsGetMyItemsResponse };
  "lists.history.list": { params: ListsHistoryListParams; response: ListsHistoryListResponse };
  "lists.history.load": { params: ListsHistoryLoadParams; response: ListsHistoryLoadResponse };
  "lists.open": { params: ListsOpenParams; response: ListsOpenResponse };
  "lists.records.list": { params: ListsRecordsListParams; response: ListsRecordsListResponse };
  "lists.templates": { params: ListsTemplatesParams; response: ListsTemplatesResponse };
  "lists.update": { params: ListsUpdateParams; response: ListsUpdateResponse };
  "media.progress.update": { params: MediaProgressUpdateParams; response: MediaProgressUpdateResponse };
  "megaphone.notifications.list": { params: MegaphoneNotificationsListParams; response: MegaphoneNotificationsListResponse };
  "megaphone.setNotificationAsSeen": { params: MegaphoneSetNotificationAsSeenParams; response: MegaphoneSetNotificationAsSeenResponse };
  "messages.list": { params: MessagesListParams; response: MessagesListResponse };
  "messages.sent.list": { params: MessagesSentListParams; response: MessagesSentListResponse };
  "mpim.list": { params: MpimListParams; response: MpimListResponse };
  "onboarding.fetch": { params: OnboardingFetchParams; response: OnboardingFetchResponse };
  "onboarding.updateTeam": { params: OnboardingUpdateTeamParams; response: OnboardingUpdateTeamResponse };
  "onboarding.updateUser": { params: OnboardingUpdateUserParams; response: OnboardingUpdateUserResponse };
  "payments.billing.addresses.get": { params: void; response: PaymentsBillingAddressesGetResponse };
  "payments.billing.addresses.locations": { params: PaymentsBillingAddressesLocationsParams; response: PaymentsBillingAddressesLocationsResponse };
  "payments.billing.addresses.validateAndSet": { params: PaymentsBillingAddressesValidateAndSetParams; response: PaymentsBillingAddressesValidateAndSetResponse };
  "payments.billing.history.list": { params: PaymentsBillingHistoryListParams; response: PaymentsBillingHistoryListResponse };
  "payments.checkout.config": { params: PaymentsCheckoutConfigParams; response: PaymentsCheckoutConfigResponse };
  "payments.status.get": { params: void; response: PaymentsStatusGetResponse };
  "payments.stripe.config.get": { params: PaymentsStripeConfigGetParams; response: PaymentsStripeConfigGetResponse };
  "payments.stripe.customer.create": { params: PaymentsStripeCustomerCreateParams; response: PaymentsStripeCustomerCreateResponse };
  "payments.stripe.customer.get": { params: void; response: PaymentsStripeCustomerGetResponse };
  "payments.stripe.paymentMethod.list": { params: PaymentsStripePaymentMethodListParams; response: PaymentsStripePaymentMethodListResponse };
  "pins.add": { params: PinsAddParams; response: PinsAddResponse };
  "pins.list": { params: PinsListParams; response: PinsListResponse };
  "pins.remove": { params: PinsRemoveParams; response: PinsRemoveResponse };
  "presence.set": { params: PresenceSetParams; response: PresenceSetResponse };
  "promo.campaigns.eligibilityInfo": { params: PromoCampaignsEligibilityInfoParams; response: PromoCampaignsEligibilityInfoResponse };
  "promo.campaigns.redeem": { params: PromoCampaignsRedeemParams; response: PromoCampaignsRedeemResponse };
  "quip.cloneCanvas": { params: QuipCloneCanvasParams; response: QuipCloneCanvasResponse };
  "quip.lookupFileId": { params: QuipLookupFileIdParams; response: QuipLookupFileIdResponse };
  "quip.lookupThreadIds": { params: QuipLookupThreadIdsParams; response: QuipLookupThreadIdsResponse };
  "quip.thread.mark": { params: QuipThreadMarkParams; response: QuipThreadMarkResponse };
  "quip.thread.synchronize": { params: QuipThreadSynchronizeParams; response: QuipThreadSynchronizeResponse };
  "reactions.add": { params: ReactionsAddParams; response: ReactionsAddResponse };
  "reactions.remove": { params: ReactionsRemoveParams; response: ReactionsRemoveResponse };
  "retail.cost": { params: RetailCostParams; response: RetailCostResponse };
  "retail.getAvailablePlans": { params: void; response: RetailGetAvailablePlansResponse };
  "retail.plans": { params: RetailPlansParams; response: RetailPlansResponse };
  "rooms.inviteResponse": { params: RoomsInviteResponseParams; response: RoomsInviteResponseResponse };
  "saved.add": { params: SavedAddParams; response: SavedAddResponse };
  "saved.clearCompleted": { params: void; response: SavedClearCompletedResponse };
  "saved.delete": { params: SavedDeleteParams; response: SavedDeleteResponse };
  "saved.list": { params: SavedListParams; response: SavedListResponse };
  "saved.update": { params: SavedUpdateParams; response: SavedUpdateResponse };
  "screenhero.rooms.info": { params: ScreenheroRoomsInfoParams; response: ScreenheroRoomsInfoResponse };
  "search.appDirectory": { params: SearchAppDirectoryParams; response: SearchAppDirectoryResponse };
  "search.autocomplete": { params: SearchAutocompleteParams; response: SearchAutocompleteResponse };
  "search.autocomplete.files": { params: SearchAutocompleteFilesParams; response: SearchAutocompleteFilesResponse };
  "search.autocomplete.intentModel": { params: void; response: SearchAutocompleteIntentModelResponse };
  "search.autocomplete.model": { params: void; response: SearchAutocompleteModelResponse };
  "search.autocomplete.offlineFeatures": { params: void; response: SearchAutocompleteOfflineFeaturesResponse };
  "search.autocomplete.topEmojis": { params: SearchAutocompleteTopEmojisParams; response: SearchAutocompleteTopEmojisResponse };
  "search.autocomplete.topEngagedFiles": { params: void; response: SearchAutocompleteTopEngagedFilesResponse };
  "search.autocomplete.triggers": { params: SearchAutocompleteTriggersParams; response: SearchAutocompleteTriggersResponse };
  "search.enterprise": { params: SearchEnterpriseParams; response: SearchEnterpriseResponse };
  "search.inline": { params: SearchInlineParams; response: SearchInlineResponse };
  "search.modules.channels": { params: SearchModulesChannelsParams; response: SearchModulesChannelsResponse };
  "search.modules.dms": { params: SearchModulesDmsParams; response: SearchModulesDmsResponse };
  "search.modules.files": { params: SearchModulesFilesParams; response: SearchModulesFilesResponse };
  "search.modules.messages": { params: SearchModulesMessagesParams; response: SearchModulesMessagesResponse };
  "search.modules.people": { params: SearchModulesPeopleParams; response: SearchModulesPeopleResponse };
  "search.modules.triggers": { params: SearchModulesTriggersParams; response: SearchModulesTriggersResponse };
  "search.precache": { params: SearchPrecacheParams; response: SearchPrecacheResponse };
  "search.save": { params: SearchSaveParams; response: SearchSaveResponse };
  "search.team": { params: SearchTeamParams; response: SearchTeamResponse };
  "sessions.checkRecent": { params: void; response: SessionsCheckRecentResponse };
  "sfdc.integration.admin.listOrgs": { params: void; response: SfdcIntegrationAdminListOrgsResponse };
  "sfdc.integration.listOrgs": { params: void; response: SfdcIntegrationListOrgsResponse };
  "sharedInvites.canGetLink": { params: void; response: SharedInvitesCanGetLinkResponse };
  "signin.findWorkspaces": { params: SigninFindWorkspacesParams; response: SigninFindWorkspacesResponse };
  "signup.checkSignupDomains": { params: SignupCheckSignupDomainsParams; response: SignupCheckSignupDomainsResponse };
  "slackAi.permissions.getForUser": { params: SlackAiPermissionsGetForUserParams; response: SlackAiPermissionsGetForUserResponse };
  "slackbot.responses.add": { params: SlackbotResponsesAddParams; response: SlackbotResponsesAddResponse };
  "slackbot.responses.delete": { params: SlackbotResponsesDeleteParams; response: SlackbotResponsesDeleteResponse };
  "slackbot.responses.edit": { params: SlackbotResponsesEditParams; response: SlackbotResponsesEditResponse };
  "slackbot.responses.list": { params: SlackbotResponsesListParams; response: SlackbotResponsesListResponse };
  "solutions.getTemplates": { params: void; response: SolutionsGetTemplatesResponse };
  "solutions.list": { params: SolutionsListParams; response: SolutionsListResponse };
  "stars.add": { params: StarsAddParams; response: StarsAddResponse };
  "stars.remove": { params: StarsRemoveParams; response: StarsRemoveResponse };
  "subscriptions.thread.add": { params: SubscriptionsThreadAddParams; response: SubscriptionsThreadAddResponse };
  "subscriptions.thread.get": { params: SubscriptionsThreadGetParams; response: SubscriptionsThreadGetResponse };
  "subscriptions.thread.getView": { params: SubscriptionsThreadGetViewParams; response: SubscriptionsThreadGetViewResponse };
  "subscriptions.thread.mark": { params: SubscriptionsThreadMarkParams; response: SubscriptionsThreadMarkResponse };
  "subscriptions.thread.remove": { params: SubscriptionsThreadRemoveParams; response: SubscriptionsThreadRemoveResponse };
  "subteams.info": { params: SubteamsInfoParams; response: SubteamsInfoResponse };
  "subteams.validateHandle": { params: SubteamsValidateHandleParams; response: SubteamsValidateHandleResponse };
  "subteams.validateName": { params: SubteamsValidateNameParams; response: SubteamsValidateNameResponse };
  "team.admin.attachments.list": { params: void; response: TeamAdminAttachmentsListResponse };
  "team.billing.addContact": { params: TeamBillingAddContactParams; response: TeamBillingAddContactResponse };
  "team.billing.changes.list": { params: TeamBillingChangesListParams; response: TeamBillingChangesListResponse };
  "team.billing.removeContact": { params: TeamBillingRemoveContactParams; response: TeamBillingRemoveContactResponse };
  "team.changeInfo": { params: TeamChangeInfoParams; response: TeamChangeInfoResponse };
  "team.checkEmailDomains": { params: TeamCheckEmailDomainsParams; response: TeamCheckEmailDomainsResponse };
  "team.connectedOrgs.list": { params: TeamConnectedOrgsListParams; response: TeamConnectedOrgsListResponse };
  "team.feature.getRequest": { params: TeamFeatureGetRequestParams; response: TeamFeatureGetRequestResponse };
  "team.info": { params: TeamInfoParams; response: TeamInfoResponse };
  "team.listExternal": { params: TeamListExternalParams; response: TeamListExternalResponse };
  "team.nav.get": { params: void; response: TeamNavGetResponse };
  "team.prefs.get": { params: TeamPrefsGetParams; response: TeamPrefsGetResponse };
  "team.prefs.set": { params: TeamPrefsSetParams; response: TeamPrefsSetResponse };
  "team.profile.get": { params: void; response: TeamProfileGetResponse };
  "team.slackConnectGuidelines.get": { params: TeamSlackConnectGuidelinesGetParams; response: TeamSlackConnectGuidelinesGetResponse };
  "team.slackConnectPrefs.list": { params: void; response: TeamSlackConnectPrefsListResponse };
  "team.slackConnectPrefs.set": { params: TeamSlackConnectPrefsSetParams; response: TeamSlackConnectPrefsSetResponse };
  "team.stats.export": { params: TeamStatsExportParams; response: TeamStatsExportResponse };
  "team.stats.timeSeries": { params: TeamStatsTimeSeriesParams; response: TeamStatsTimeSeriesResponse };
  "team.targetingCriteria": { params: void; response: TeamTargetingCriteriaResponse };
  "teams.authorized.ip.range.list": { params: void; response: TeamsAuthorizedIpRangeListResponse };
  "teams.authorized.ip.range.set": { params: TeamsAuthorizedIpRangeSetParams; response: TeamsAuthorizedIpRangeSetResponse };
  "teams.company.info": { params: void; response: TeamsCompanyInfoResponse };
  "teams.trials.info": { params: void; response: TeamsTrialsInfoResponse };
  "templates.integrations.get": { params: void; response: TemplatesIntegrationsGetResponse };
  "templates.provision": { params: TemplatesProvisionParams; response: TemplatesProvisionResponse };
  "ublockworkaround.history": { params: UblockworkaroundHistoryParams; response: UblockworkaroundHistoryResponse };
  "unfurl.external.validateDomain": { params: UnfurlExternalValidateDomainParams; response: UnfurlExternalValidateDomainResponse };
  "usergroups.create": { params: UsergroupsCreateParams; response: UsergroupsCreateResponse };
  "usergroups.membership": { params: void; response: UsergroupsMembershipResponse };
  "usergroups.update": { params: UsergroupsUpdateParams; response: UsergroupsUpdateResponse };
  "usergroups.users.list": { params: UsergroupsUsersListParams; response: UsergroupsUsersListResponse };
  "usergroups.users.update": { params: UsergroupsUsersUpdateParams; response: UsergroupsUsersUpdateResponse };
  "users.accessLogs": { params: void; response: UsersAccessLogsResponse };
  "users.admin.canAddUltraRestricted": { params: void; response: UsersAdminCanAddUltraRestrictedResponse };
  "users.admin.fetchInvitesHistory": { params: UsersAdminFetchInvitesHistoryParams; response: UsersAdminFetchInvitesHistoryResponse };
  "users.admin.fetchTeamUsers": { params: UsersAdminFetchTeamUsersParams; response: UsersAdminFetchTeamUsersResponse };
  "users.admin.fetchTeamUsersCsv": { params: UsersAdminFetchTeamUsersCsvParams; response: UsersAdminFetchTeamUsersCsvResponse };
  "users.admin.inviteBulk": { params: UsersAdminInviteBulkParams; response: UsersAdminInviteBulkResponse };
  "users.admin.resendInvitation": { params: UsersAdminResendInvitationParams; response: UsersAdminResendInvitationResponse };
  "users.admin.setAdmin": { params: UsersAdminSetAdminParams; response: UsersAdminSetAdminResponse };
  "users.admin.setInactive": { params: UsersAdminSetInactiveParams; response: UsersAdminSetInactiveResponse };
  "users.admin.setOwner": { params: UsersAdminSetOwnerParams; response: UsersAdminSetOwnerResponse };
  "users.admin.setRegular": { params: UsersAdminSetRegularParams; response: UsersAdminSetRegularResponse };
  "users.channelSections.channels.bulkUpdate": { params: UsersChannelSectionsChannelsBulkUpdateParams; response: UsersChannelSectionsChannelsBulkUpdateResponse };
  "users.channelSections.create": { params: UsersChannelSectionsCreateParams; response: UsersChannelSectionsCreateResponse };
  "users.channelSections.createLink": { params: UsersChannelSectionsCreateLinkParams; response: UsersChannelSectionsCreateLinkResponse };
  "users.channelSections.delete": { params: UsersChannelSectionsDeleteParams; response: UsersChannelSectionsDeleteResponse };
  "users.channelSections.list": { params: void; response: UsersChannelSectionsListResponse };
  "users.channelSections.set": { params: UsersChannelSectionsSetParams; response: UsersChannelSectionsSetResponse };
  "users.consent.get": { params: UsersConsentGetParams; response: UsersConsentGetResponse };
  "users.customStatus.list": { params: UsersCustomStatusListParams; response: UsersCustomStatusListResponse };
  "users.emailVerificationStatus.get": { params: void; response: UsersEmailVerificationStatusGetResponse };
  "users.emailtoken.get": { params: void; response: UsersEmailtokenGetResponse };
  "users.getInviter": { params: void; response: UsersGetInviterResponse };
  "users.info": { params: UsersInfoParams; response: UsersInfoResponse };
  "users.interactions.list": { params: UsersInteractionsListParams; response: UsersInteractionsListResponse };
  "users.interactions.set": { params: UsersInteractionsSetParams; response: UsersInteractionsSetResponse };
  "users.isEarlyJoiner": { params: UsersIsEarlyJoinerParams; response: UsersIsEarlyJoinerResponse };
  "users.list": { params: UsersListParams; response: UsersListResponse };
  "users.listIgnoredUsers": { params: void; response: UsersListIgnoredUsersResponse };
  "users.permissions.apps": { params: void; response: UsersPermissionsAppsResponse };
  "users.prefs.get": { params: UsersPrefsGetParams; response: UsersPrefsGetResponse };
  "users.prefs.set": { params: UsersPrefsSetParams; response: UsersPrefsSetResponse };
  "users.prefs.setNotifications": { params: UsersPrefsSetNotificationsParams; response: UsersPrefsSetNotificationsResponse };
  "users.preparePhoto": { params: UsersPreparePhotoParams; response: UsersPreparePhotoResponse };
  "users.priority.add": { params: UsersPriorityAddParams; response: UsersPriorityAddResponse };
  "users.priority.getRecommendations": { params: UsersPriorityGetRecommendationsParams; response: UsersPriorityGetRecommendationsResponse };
  "users.priority.list": { params: void; response: UsersPriorityListResponse };
  "users.priority.remove": { params: UsersPriorityRemoveParams; response: UsersPriorityRemoveResponse };
  "users.profile.get": { params: UsersProfileGetParams; response: UsersProfileGetResponse };
  "users.profile.getAdminSections": { params: void; response: UsersProfileGetAdminSectionsResponse };
  "users.profile.getExtras": { params: UsersProfileGetExtrasParams; response: UsersProfileGetExtrasResponse };
  "users.profile.getSections": { params: UsersProfileGetSectionsParams; response: UsersProfileGetSectionsResponse };
  "users.profile.set": { params: UsersProfileSetParams; response: UsersProfileSetResponse };
  "users.profile.setAdminSections": { params: UsersProfileSetAdminSectionsParams; response: UsersProfileSetAdminSectionsResponse };
  "users.profile.setSections": { params: UsersProfileSetSectionsParams; response: UsersProfileSetSectionsResponse };
  "users.recommend": { params: UsersRecommendParams; response: UsersRecommendResponse };
  "users.setPhoto": { params: UsersSetPhotoParams; response: UsersSetPhotoResponse };
  "users.sharedInvites.list": { params: UsersSharedInvitesListParams; response: UsersSharedInvitesListResponse };
  "users.sharedInvites.renew": { params: UsersSharedInvitesRenewParams; response: UsersSharedInvitesRenewResponse };
  "users.sharedInvites.revoke": { params: UsersSharedInvitesRevokeParams; response: UsersSharedInvitesRevokeResponse };
  "users.slackConnect.orgList": { params: UsersSlackConnectOrgListParams; response: UsersSlackConnectOrgListResponse };
  "users.stateMachine": { params: UsersStateMachineParams; response: UsersStateMachineResponse };
  "views.close": { params: ViewsCloseParams; response: ViewsCloseResponse };
  "views.get": { params: ViewsGetParams; response: ViewsGetResponse };
  "views.submit": { params: ViewsSubmitParams; response: ViewsSubmitResponse };
  "workflows.activity.list": { params: WorkflowsActivityListParams; response: WorkflowsActivityListResponse };
  "workflows.templates.list": { params: WorkflowsTemplatesListParams; response: WorkflowsTemplatesListResponse };
  "workflows.templates.listAsDecoratedWorkflows": { params: WorkflowsTemplatesListAsDecoratedWorkflowsParams; response: WorkflowsTemplatesListAsDecoratedWorkflowsResponse };
  "workflows.triggers.delete": { params: WorkflowsTriggersDeleteParams; response: WorkflowsTriggersDeleteResponse };
  "workflows.triggers.info": { params: WorkflowsTriggersInfoParams; response: WorkflowsTriggersInfoResponse };
  "workflows.triggers.list": { params: WorkflowsTriggersListParams; response: WorkflowsTriggersListResponse };
  "workflows.triggers.listRecentlyRunForUser": { params: void; response: WorkflowsTriggersListRecentlyRunForUserResponse };
  "workflows.triggers.permissions.list": { params: WorkflowsTriggersPermissionsListParams; response: WorkflowsTriggersPermissionsListResponse };
  "workflows.triggers.permissions.set": { params: WorkflowsTriggersPermissionsSetParams; response: WorkflowsTriggersPermissionsSetResponse };
  "workflows.triggers.prefs.get": { params: WorkflowsTriggersPrefsGetParams; response: WorkflowsTriggersPrefsGetResponse };
  "workflows.triggers.types.list": { params: WorkflowsTriggersTypesListParams; response: WorkflowsTriggersTypesListResponse };
  "workflows.triggers.update": { params: WorkflowsTriggersUpdateParams; response: WorkflowsTriggersUpdateResponse };
}
