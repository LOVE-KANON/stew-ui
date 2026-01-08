const BASE_URL = "http://localhost:8080";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type RequestOptions = {
    method?: HttpMethod;
    body?: unknown;
    headers?: HeadersInit;
};

export const httpClient = async <T>(
    path: string,
    options: RequestOptions = {}
): Promise<T> => {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: options.method ?? "GET",
        headers: {
            "Content-Type": "application/json",
      ...   options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
        credentials: "include",
    });

    if (!response.ok) {
        // エラー処理
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
};
