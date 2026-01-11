import * as React from "react";
import { useNavigate } from "react-router";
import { loginApi } from "@/features/core/lib/api/loginApi";

export const usePageLogin = () => {
    const [loginId, setLoginId] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    // バックエンド疎通 + ログイン処理
    const login = async (): Promise<void> => {
        try {
            const result = await loginApi({
                userId: loginId,
                password,
            });
            console.log("login result:", result);

            if (result.success) {
                // 成功時は /home へ遷移
                navigate("/home");
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
        login,
    };
};
