import { loginApi } from "@/features/core/api/loginApi";

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
    
    return {
        login,
    };
};
