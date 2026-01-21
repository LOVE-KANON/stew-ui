import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthenticatedUserService } from "@/features/core/services/useAuthenticatedUserService";
import { getMaxSeqUserByUserIdApi } from "@/features/core/api/resource/user/getMaxSeqUserByUserIdApi";

type UserDetails = {
    userId: string;
    userSeq: string;
    sei: string;
    mei: string;
    mailAddress: string;
    password: string;
    joinedDate: string;
    retiredDate: string;
    position: string;
};

export const usePageUserDetails = () => {
    const params = useParams();
    const authenticatedUserService = useAuthenticatedUserService();

    const [data, setData] = useState<UserDetails | null>(null);
    const [loading, setLoading] = useState(false);

    const userId =
        params.userId === "self"
        ? authenticatedUserService.authenticatedUser?.userId
        : params.userId;

    useEffect(() => {
        if (!userId || authenticatedUserService.isLoading) {
            return;
        }

        const load = async () => {
            setLoading(true);
            const result = await getMaxSeqUserByUserIdApi({ userId });
            setData({
                userId: result.userId ?? "",
                userSeq: result.userSeq ?? "",
                sei: result.sei ?? "",
                mei: result.mei ?? "",
                mailAddress: result.mailAddress ?? "",
                password: result.password ?? "",
                joinedDate: result.joinedDate ?? "",
                retiredDate: result.retiredDate ?? "",
                position: result.position ?? "",
            });
            setLoading(false);
        };

        load();
    }, [userId, authenticatedUserService.isLoading]);

    return {
        data,
        loading,
    };
};
