import { httpClient } from "@/features/core/lib/http/httpClient";
import type { HttpResult } from "@/features/core/lib/http/httpClient";

export type LogoutResponse = {
    success: boolean;
    message: string;
};

export const logoutApi = async (
): Promise<HttpResult<LogoutResponse>> => {
    return httpClient<LogoutResponse>("/api/core/usecase/auth/logout", {
        method: "POST",
        body: {},
    });
};
