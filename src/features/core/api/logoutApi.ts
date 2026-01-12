import { httpClient } from "@/features/core/lib/http/httpClient";

export type LogoutResponse = {
    success: boolean;
    message: string;
};

export const logoutApi = async (
): Promise<LogoutResponse> => {
    return httpClient<LogoutResponse>("/api/core/usecase/logout", {
        method: "POST",
        body: {},
    });
};
