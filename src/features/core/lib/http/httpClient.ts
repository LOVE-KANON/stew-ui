const BASE_URL = "http://localhost:8080";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type RequestOptions = {
    method?: HttpMethod;
    params?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
    headers?: HeadersInit;
};

const buildQueryString = (
    params?: Record<string, string | number | boolean | undefined>
): string => {
    if (!params) {
        return "";
    }

    const query = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            query.append(key, String(value));
        }
    });

    const qs = query.toString();
    return qs ? `?${qs}` : "";
};

export type Message = {
    level: string;
    message: string;
};

export type ApiResponse<T> = {
    messages: Message[];
    detail: T | null;
};

export type HttpResult<T> = {
    status: number;
    body: ApiResponse<T> | null;
};

export const httpClient = async <T>(
    path: string,
    options: RequestOptions = {}
): Promise<HttpResult<T>> => {
    const method: HttpMethod = options.method ?? "GET";
    const queryString = method === "GET" ? buildQueryString(options.params) : "";

    const response = await fetch(`${BASE_URL}${path}${queryString}`, {
        method,
        headers: {
            ...(method !== "GET" && { "Content-Type": "application/json" }),
            ...options.headers,
        },
        body:
            method !== "GET" && options.body
                ? JSON.stringify(options.body)
                : undefined,
        credentials: "include",
    });

    const contentType = response.headers.get("content-type");
    const isJson = contentType?.includes("application/json");
    const body = isJson ? await response.json() : null;

    return {
        status: response.status,
        body,
    };
};
