import { httpClient } from "@/features/core/lib/http/httpClient";
import type { HttpResult } from "@/features/core/lib/http/httpClient";

export type UpdateRequest = {
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

export type UpdateResponse = {
    processedCount: number;
};

export const updateApi = async (
    req: UpdateRequest
): Promise<HttpResult<UpdateResponse>> => {
    return httpClient<UpdateResponse>("/api/core/resource/user/update", {
        method: "POST",
        body: req,
    });
};
