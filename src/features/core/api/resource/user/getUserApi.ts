import { httpClient } from "@/features/core/lib/http/httpClient";
import type { HttpResult } from "@/features/core/lib/http/httpClient";

export type GetUserRequest = {
    userId: string;
};

export type GetUserResponse = {
    userId: string;
    userSeq: number;
    joinedDate: string;
    retiredDate: string;
    sei: string;
    mei: string;
    mailAddress: string;
    password: string;
    position: string;
    version: number;
};

export const getUserApi = async (
    req: GetUserRequest
): Promise<HttpResult<GetUserResponse>> => {
    return httpClient<GetUserResponse>("/api/core/resource/user/getUser", {
        params: req,
    });
};
