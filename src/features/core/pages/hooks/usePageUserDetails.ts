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

    const [user, setUser] = useState<UserDetails | null>(null);
    const [loading, setLoading] = useState(true);

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
            setUser({
                userId: result.userId ? result.userId : "",
                userSeq: result.userSeq ? result.userSeq : "",
                sei: result.sei ? result.sei : "",
                mei: result.mei ? result.mei : "",
                mailAddress: result.mailAddress ? result.mailAddress : "",
                password: result.password ? result.password : "",
                joinedDate: result.joinedDate ? result.joinedDate : "",
                retiredDate: result.retiredDate ? result.retiredDate : "",
                position: result.position ? result.position : "",
            });
            setLoading(false);
        };

        load();
    }, [userId, authenticatedUserService.isLoading]);

    return {
        user,
        loading,
    };
};
