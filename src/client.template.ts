// {{HEADER_COMMENT}}

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
  /** URL-encoded `d` cookie value */
  cookie: string;
  /** Workspace domain (e.g., "hackclub") */
  workspace?: string;
  /** Session token (xoxc) */
  token?: string;
  /** Whether to validate the token on initialization */
  validate?: boolean;
  /** Custom fetch implementation */
  fetch?: typeof globalThis.fetch;
}

export interface SlackTeamIcon {
  image_68: string;
  image_88: string;
  image_default: boolean;
}

export interface SlackWorkspaceTeam {
  id: string;
  name: string;
  domain: string;
  url: string;
  token: string;
  user_locale: string;
  user_id: string;
  is_unified_user_client_enabled: boolean;
  icon: SlackTeamIcon;
  enterprise_api_token?: string;
  enterprise_id?: string;
  enterprise_name?: string;
}

interface SlackWorkspacePayload {
  teams: Record<string, SlackWorkspaceTeam>;
  lc: string;
  last_fetched: string;
  deleted_teams: string[];
  pending_auth_teams: Record<string, unknown>;
}

function normalizeWorkspaceKey(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getWorkspaceSlugFromUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  try {
    const host = new URL(url).hostname.toLowerCase();
    const match = host.match(/^([a-z0-9-]+)\.(?:enterprise\.)?slack\.com$/);
    return match?.[1];
  } catch {
    return undefined;
  }
}

function isEnterpriseWorkspace(id: string | undefined): boolean {
  return id?.startsWith("E") ?? false;
}

export class SlackClient {
  /** The session token (xoxc) used for API calls */
  public token: string;
  /** The workspace domain (e.g., "hackclub") */
  public workspace: string | undefined;
  /** The URL-encoded `d` cookie value, if provided (used for API calls) */
  public cookie: string | undefined;
  /** Custom fetch implementation (if provided) */
  public fetch: typeof globalThis.fetch;
  /** The team that was selected during workspace resolution (set by create/createFromTeam) */
  public selectedTeam: SlackWorkspaceTeam | undefined;

  private constructor(token: string, options: SlackClientOptions) {
    this.token = token;
    if (!options.cookie) { throw new Error("Cookie value is required to create SlackClient"); }
    this.cookie = options.cookie.includes("%") ? options.cookie : encodeURIComponent(options.cookie);
    this.workspace = options.workspace;
    this.fetch = options.fetch ?? globalThis.fetch.bind(globalThis);
  }

  /**
   * Fetch all available workspaces from the Slack auth page.
   * Useful for displaying a selector UI to the end user.
   * @param cookie The `d` cookie value
   * @param fetch Custom fetch implementation (optional)
   * @returns Array of available SlackWorkspaceTeam objects
   */
  static async fetchAvailableWorkspaces(
    cookie: string,
    fetch?: typeof globalThis.fetch
  ): Promise<SlackWorkspaceTeam[]> {
    const fetchImpl = fetch ?? globalThis.fetch.bind(globalThis);
    if (!cookie) { throw new Error("Cookie value is required to fetch available workspaces"); }
    const cookieValue = cookie.includes("%") ? cookie : encodeURIComponent(cookie);

    const res = await fetchImpl("https://app.slack.com/auth?app=client", {
      headers: {
        "cookie": `d=${cookieValue}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch workspace page: ${res.status} ${res.statusText}`);
    }

    const text = await res.text();
    const [payloadSource] = Array.from(text.matchAll(/JSON\.stringify\((.*)\);/g)).map((m) => m[1]);
    if (!payloadSource) {
      throw new Error("Failed to extract workspace JSON from auth page");
    }

    const payload = JSON.parse(payloadSource) as SlackWorkspacePayload;
    const teams = Object.values(payload.teams);

    const referencedEnterpriseIds = new Set(
      teams.map((t) => t.enterprise_id).filter(Boolean)
    );
    return teams.filter((t) => !referencedEnterpriseIds.has(t.id));
  }

  /**
   * Create a SlackClient from a specific workspace team.
   * Use this after calling fetchAvailableWorkspaces() to select a workspace.
   * @param team The SlackWorkspaceTeam to use
   * @param options Client options (cookie is required)
   * @returns SlackClient instance
   */
  static async createFromTeam(
    team: SlackWorkspaceTeam,
    options: Omit<SlackClientOptions, "workspace"> & { validate?: boolean }
  ): Promise<SlackClient> {
    const token = options.token ?? team.enterprise_api_token ?? team.token;

    const client = new SlackClient(token, {
      ...options,
      workspace: team.domain,
    });
    client.selectedTeam = team;

    if (options.validate) {
      await client.call("auth.test");
    }

    return client;
  }

  /**
   * Create a SlackClient with automatic workspace selection.
   * If a workspace name is provided, it will be auto-matched and selected.
   * For granular control (e.g., displaying a custom selector UI), use:
   * - fetchAvailableWorkspaces() to list all available workspaces
   * - createFromTeam() to create a client from a specific workspace
   * @param options Client options (either token or workspace must be provided)
   * @returns SlackClient instance
   */
  static async create(options: SlackClientOptions): Promise<SlackClient> {
    let token: string;
    let matchedTeam: SlackWorkspaceTeam | undefined;

    if (options.token) {
      token = options.token;
    } else {
      if (!options.workspace) {
        throw new Error("Either token or workspace must be provided");
      }

      const requestedWorkspace = options.workspace.trim().toLowerCase();
      const workspaceFilter = requestedWorkspace.replace(/\.enterprise$/, "");

      if (!workspaceFilter) {
        throw new Error("Invalid workspace filter");
      }

      const teams = await SlackClient.fetchAvailableWorkspaces(options.cookie, options.fetch);
      const workspaceKey = normalizeWorkspaceKey(workspaceFilter);

      const matchingTeams = teams.filter((team) => {
        const domain = team.domain.toLowerCase();
        const nameKey = normalizeWorkspaceKey(team.name);
        const slug = getWorkspaceSlugFromUrl(team.url);
        return domain === workspaceFilter || slug === workspaceFilter || nameKey === workspaceKey;
      });

      if (matchingTeams.length === 0) {
        throw new Error(`Failed to find workspace '${options.workspace}' in auth payload`);
      }

      matchedTeam = matchingTeams.find((team) => team.enterprise_api_token)
        ?? matchingTeams.find((team) => isEnterpriseWorkspace(team.id))
        ?? matchingTeams.find((team) => !isEnterpriseWorkspace(team.id))
        ?? matchingTeams[0];

      token = matchedTeam.enterprise_api_token ?? matchedTeam.token;
    }

    const client = new SlackClient(token, options);
    client.selectedTeam = matchedTeam;

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
      headers["cookie"] = `d=${this.cookie}`;
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

  // {{CONVENIENCE_METHODS}}
}
