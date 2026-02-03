import { httpClient } from "@/features/core/lib/http/httpClient";
import type { HttpResult } from "@/features/core/lib/http/httpClient";

type GetUsersResponseInnerItem = {
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
}

export type GetUsersResponse = {
    list: GetUsersResponseInnerItem[];
};

export const getUsersApi = async (
): Promise<HttpResult<GetUsersResponse>> => {
    return httpClient<GetUsersResponse>("/api/core/resource/user/getUsers");
};
