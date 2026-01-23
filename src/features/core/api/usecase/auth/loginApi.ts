import { httpClient } from "@/features/core/lib/http/httpClient";
import type { HttpResult } from "@/features/core/lib/http/httpClient";

export type LoginRequest = {
    loginId: string;
    password: string;
};

export type LoginResponse = {
    success: boolean;
    message: string;
};

export const loginApi = async (
    req: LoginRequest
): Promise<HttpResult<LoginResponse>> => {
    return httpClient<LoginResponse>("/api/core/usecase/auth/login", {
        method: "POST",
        body: req,
    });
};
