import { loginApi } from "@/features/core/api/usecase/auth/loginApi";
import { logoutApi } from "@/features/core/api/usecase/auth/logoutApi";
import { useAuthenticatedUserService } from "@/features/core/services/useAuthenticatedUserService";

export type LoginParams = {
    loginId: string;
    password: string;
};

export const useLoginService = () => {
    const authenticatedUserService = useAuthenticatedUserService();

    const login = async (params: LoginParams) => {
        const result = await loginApi({
            loginId: params.loginId,
            password: params.password,
        });

        if (result.success) {
            await authenticatedUserService.refetch();
        }

        return result;
    };

    const logout = async () => {
        const result = await logoutApi();
        await authenticatedUserService.refetch();
        return result;
    };

    return {
        login,
        logout,
    };
};
