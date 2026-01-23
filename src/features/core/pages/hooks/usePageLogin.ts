import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useLoginService } from "@/features/core/services/useLoginService";

export const usePageLogin = () => {
    const [loginId, setLoginId] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const loginService = useLoginService();

    const onClickLogin = async (): Promise<void> => {
        try {
            const result = await loginService.login({
                loginId,
                password,
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
        loginId,
        setLoginId,
        password,
        setPassword,
        onClickLogin,
    };
};
