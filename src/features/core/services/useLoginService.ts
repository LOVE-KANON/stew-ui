import { loginApi } from "@/features/core/api/usecase/auth/loginApi";
import { logoutApi } from "@/features/core/api/usecase/auth/logoutApi";

export type LoginParams = {
    userId: string;
    password: string;
};

export const useLoginService = () => {

    const login = async (params: LoginParams) => {
        const result = await loginApi({
            userId: params.userId,
            password: params.password,
        });
        console.log("login result:", result);

        return result;
    }

    const logout = async () => {
        const result = await logoutApi()
        return result;
    }

    return {
        login,
        logout,
    };
};
