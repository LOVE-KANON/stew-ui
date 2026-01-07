import * as React from "react";
import { useNavigate } from "react-router";

export const useLogin = () => {
    const [loginId, setLoginId] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    // バックエンド疎通 + ログイン処理
    const login = async (): Promise<void> => {
        try {
            const response = await fetch("http://localhost:8080/api/core/usecase/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: loginId,
                    password,
                }),
            });

            const result = await response.json();
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
