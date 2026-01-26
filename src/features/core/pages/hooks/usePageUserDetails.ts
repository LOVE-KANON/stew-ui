import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthenticatedUserService } from "@/features/core/services/useAuthenticatedUserService";
import { getMaxSeqUserByUserIdApi } from "@/features/core/api/resource/user/getMaxSeqUserByUserIdApi";
import { updateApi } from "@/features/core/api/resource/user/updateApi";

type UserDetails = {
    userId: string;
    userSeq: string;
    joinedDate: string;
    retiredDate: string;
    sei: string;
    mei: string;
    mailAddress: string;
    password: string;
    position: string;
    version: number;
};

export const usePageUserDetails = () => {
    const params = useParams();
    const authenticatedUserService = useAuthenticatedUserService();

    const [data, setData] = useState<UserDetails | null>(null);
    const [loading, setLoading] = useState(false);

    const onClickUpdate = async () => {
        setLoading(true);
        const result = await updateApi({
            userId: data.userId,
            userSeq: data.userSeq,
            joinedDate: data.joinedDate,
            retiredDate: data.retiredDate,
            sei: data.sei,
            mei: data.mei,
            mailAddress: data.mailAddress,
            password: data.password,
            position: data.position,
            version: data.version,
        });
        setLoading(false);
        if (result.status === 409) {
            return;
        }
    }

    useEffect(() => {
        const userId =
            params.userId === "self"
                ? authenticatedUserService.authenticatedUser?.userId
                : params.userId;

        if (!userId || authenticatedUserService.isLoading) {
            return;
        }

        const load = async () => {
            setLoading(true);
            const result = await getMaxSeqUserByUserIdApi({ userId });
            setData({
                userId: result.body?.detail?.userId ?? "",
                userSeq: result.body?.detail?.userSeq ?? "",
                joinedDate: result.body?.detail?.joinedDate ?? "",
                retiredDate: result.body?.detail?.retiredDate ?? "",
                sei: result.body?.detail?.sei ?? "",
                mei: result.body?.detail?.mei ?? "",
                mailAddress: result.body?.detail?.mailAddress ?? "",
                password: result.body?.detail?.password ?? "",
                position: result.body?.detail?.position ?? "",
                version: result.body?.detail?.version ?? "",
            });
            setLoading(false);
        };

        load();
    }, [params.userId, authenticatedUserService.authenticatedUser?.userId, authenticatedUserService.isLoading]);

    return {
        data,
        loading,
        onClickUpdate,
    };
};
