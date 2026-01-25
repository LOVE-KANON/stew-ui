import { httpClient } from "@/features/core/lib/http/httpClient";
import type { HttpResult } from "@/features/core/lib/http/httpClient";

export type GetMaxSeqUserByUserIdRequest = {
    userId: string;
};

export type GetMaxSeqUserByUserIdResponse = {
    userId: string;
    userSeq: number;
    joinedDate: string;
    retiredDate: string;
    sei: string;
    mei: string;
    mailAddress: string;
    password: string;
    position: string;
};

export const getMaxSeqUserByUserIdApi = async (
    req: GetMaxSeqUserByUserIdRequest
): Promise<HttpResult<GetMaxSeqUserByUserIdResponse>> => {
    return httpClient<GetMaxSeqUserByUserIdResponse>("/api/core/resource/user/getMaxSeqUserByUserId", {
        params: req,
    });
};
