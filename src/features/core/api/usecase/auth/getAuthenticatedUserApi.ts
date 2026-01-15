import { httpClient } from "@/features/core/lib/http/httpClient";

export type GetAuthenticatedUserResponse = {
    userId: string
    userName: string,
};

export const getAuthenticatedUserApi = async (
): Promise<GetAuthenticatedUserResponse> => {
    return httpClient<GetAuthenticatedUserResponse>("/api/core/usecase/auth/getAuthenticatedUser");
};
