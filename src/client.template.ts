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

  // {{CONVENIENCE_METHODS}}
}
