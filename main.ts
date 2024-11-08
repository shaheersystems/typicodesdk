export interface ApiConfig {
  timeout?: number;
}

export class TypiCode {
  private readonly baseUrl: string;
  private readonly timeout: number;

  constructor(config: ApiConfig) {
    this.baseUrl = "https://jsonplaceholder.typicode.com";
    this.timeout = config.timeout || 30000; // Default 30s timeout
  }

  // Protected method to handle HTTP requests
  protected async request<T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    endpoint: string,
    data?: unknown
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
        signal: AbortSignal.timeout(this.timeout),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(`API request failed: ${(error as Error).message}`);
    }
  }

  // Example resource method
  public async getPosts(): Promise<unknown[]> {
    return await this.request<unknown[]>("GET", "/posts");
  }

  // Example resource method with parameters
  public async getPost(id: number): Promise<unknown> {
    return await this.request<unknown>("GET", `/posts/${id}`);
  }
}
