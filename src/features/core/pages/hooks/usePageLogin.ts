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
                userId: loginId,
                password,
            });
            console.log("login result:", result);

            if (result.success) {
                navigate("/core/home");
            } else {
                alert(result.message);
            }
        } catch (e) {
            console.error(e);
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
