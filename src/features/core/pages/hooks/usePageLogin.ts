import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginService } from "@/features/core/services/useLoginService";
import { updateStateByName } from "@/features/core/lib/react/reactUtils";

type Login = {
    loginId: string;
    password: string;
};

export const usePageLogin = () => {
    const navigate = useNavigate();
    const loginService = useLoginService();

    const [data, setData] = useState<Login>(() => ({
        loginId: "",
        password: "",
    }));

    const onClickLogin = async (): Promise<void> => {
        try {
            const result = await loginService.login({
                loginId: data.loginId,
                password: data.password,
            });
            if (result.status === 401) {
                alert(result.body?.messages[0].message);
                return;
            }
            navigate("/core/home");
        } catch {
            alert("通信エラー");
        }
    };

    return {
        data,
        handleChange: updateStateByName(setData),
        onClickLogin,
    };
};
