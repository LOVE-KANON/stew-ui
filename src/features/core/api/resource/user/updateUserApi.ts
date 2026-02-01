import { httpClient } from "@/features/core/lib/http/httpClient";
import type { HttpResult } from "@/features/core/lib/http/httpClient";

export type UpdateUserRequest = {
    userId: string;
    userSeq: string;
    joinedDate: string;
    retiredDate: string;
    sei: string;
    mei: string;
    mailAddress: string;
    password: string;
    position: string;
    version: string;
};

export type UpdateUserResponse = {
    processedCount: number;
};

export const updateUserApi = async (
    req: UpdateUserRequest
): Promise<HttpResult<UpdateUserResponse>> => {
    return httpClient<UpdateUserResponse>("/api/core/resource/user/updateUser", {
        method: "POST",
        body: req,
    });
};
