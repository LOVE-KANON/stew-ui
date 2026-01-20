import { useQuery } from "@tanstack/react-query";
import { getAuthenticatedUserApi } from "@/features/core/api/usecase/auth/getAuthenticatedUserApi";
import type { AuthenticatedUser } from "@/features/core/types/AuthenticatedUser";

export const useAuthenticatedUserService = () => {
    const query = useQuery({
        queryKey: ["authenticatedUser"],
        queryFn: getAuthenticatedUserApi,
        retry: false,
    });

    const getAuthenticatedUser = (): AuthenticatedUser | undefined => {
        if (!query.data?.userId) {
            return undefined;
        }

        return {
            userId: query.data.userId,
            userName: query.data.userName,
        };
    };

    const isAuthenticated = () => {
        return !!getAuthenticatedUser();
    };

    const isLoading = () => {
        return query.isLoading;
    };

    const isError = () => {
        return query.isError;
    };

    const refetch = () => {
        query.refetch();
    };

    return {
        getAuthenticatedUser,
        isAuthenticated,
        isLoading,
        isError,
        refetch,
    };
};
