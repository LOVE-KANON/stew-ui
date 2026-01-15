import { httpClient } from "@/features/core/lib/http/httpClient";

export type LoginRequest = {
    userId: string;
    password: string;
};

export type LoginResponse = {
    success: boolean;
    message: string;
};

export const loginApi = async (
    req: LoginRequest
): Promise<LoginResponse> => {
    return httpClient<LoginResponse>("/api/core/usecase/auth/login", {
        method: "POST",
        body: req,
    });
};
