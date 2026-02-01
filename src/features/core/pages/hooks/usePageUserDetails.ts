import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthenticatedUserService } from "@/features/core/services/useAuthenticatedUserService";
import { getUserApi } from "@/features/core/api/resource/user/getUserApi";
import { updateUserApi } from "@/features/core/api/resource/user/updateUserApi";
import { updateStateByName } from "@/features/core/lib/react/reactUtils";

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
    version: string;
};

export const usePageUserDetails = () => {
    const params = useParams();
    const authenticatedUserService = useAuthenticatedUserService();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<UserDetails>(() => ({
        userId: "",
        userSeq: "",
        joinedDate: "",
        retiredDate: "",
        sei: "",
        mei: "",
        mailAddress: "",
        password: "",
        position: "",
        version: "",
    }));;

    const onClickUpdate = async () => {
        if (!data) return;

        setLoading(true);
        const result = await updateUserApi({
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
        if (result.status === 409) {
            setLoading(false);
            return;
        }
        const getResult = await getUserApi({ userId: data.userId });
        setData({
            userId: getResult.body?.detail?.userId ?? "",
            userSeq: TypeConverter.toString(getResult.body?.detail?.userSeq),
            joinedDate: getResult.body?.detail?.joinedDate ?? "",
            retiredDate: getResult.body?.detail?.retiredDate ?? "",
            sei: getResult.body?.detail?.sei ?? "",
            mei: getResult.body?.detail?.mei ?? "",
            mailAddress: getResult.body?.detail?.mailAddress ?? "",
            password: getResult.body?.detail?.password ?? "",
            position: getResult.body?.detail?.position ?? "",
            version: TypeConverter.toString(getResult.body?.detail?.version),
        });
        setLoading(false);
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
            const result = await getUserApi({ userId });
            setData({
                userId: result.body?.detail?.userId ?? "",
                userSeq: TypeConverter.toString(result.body?.detail?.userSeq),
                joinedDate: result.body?.detail?.joinedDate ?? "",
                retiredDate: result.body?.detail?.retiredDate ?? "",
                sei: result.body?.detail?.sei ?? "",
                mei: result.body?.detail?.mei ?? "",
                mailAddress: result.body?.detail?.mailAddress ?? "",
                password: result.body?.detail?.password ?? "",
                position: result.body?.detail?.position ?? "",
                version: TypeConverter.toString(result.body?.detail?.version),
            });
            setLoading(false);
        };

        load();
    }, [params.userId, authenticatedUserService.authenticatedUser?.userId, authenticatedUserService.isLoading]);

    return {
        data,
        loading,
        handleChange: updateStateByName(setData),
        onClickUpdate,
    };
};
