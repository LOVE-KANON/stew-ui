import { useEffect, useState } from "react";
import { useAuthenticatedUserService } from "@/features/core/services/useAuthenticatedUserService";
import { getUsersApi } from "@/features/core/api/resource/user/getUsersApi";

type UserListItem = {
    userId: string;
    userSeq: string;
    joinedDate: string;
    sei: string;
    mei: string;
    mailAddress: string;
    position: string;
};

type UserList = {
    list: UserListItem[];
};

export const usePageUserList = () => {
    const authenticatedUserService = useAuthenticatedUserService();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<UserList>(() => ({
        list: [],
    }));

    const authenticatedUserId = authenticatedUserService.authenticatedUser?.userId ?? "";

    useEffect(() => {
        if (authenticatedUserService.isLoading) {
            return;
        }

        const load = async () => {
            setLoading(true);
            const result = await getUsersApi();
            setData({
                list:
                    result.body?.detail?.list?.map((item: Record<string, unknown>) => ({
                        userId: item.userId ?? "",
                        userSeq: item.userSeq ?? "",
                        joinedDate: item.joinedDate ?? "",
                        sei: item.sei ?? "",
                        mei: item.mei ?? "",
                        mailAddress: item.mailAddress ?? "",
                        position: item.position ?? "",
                    })) ?? [],
            });
            setLoading(false);
        };

        load();
    }, [authenticatedUserService.isLoading]);

    return {
        data,
        loading,
        authenticatedUserId,
    };
};
