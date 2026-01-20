import { useQuery } from "@tanstack/react-query";
import { getAuthenticatedUserApi } from "@/features/core/api/usecase/auth/getAuthenticatedUserApi";
import type { AuthenticatedUser } from "@/features/core/types/AuthenticatedUser";

export const useAuthenticatedUserService = () => {
    const query = useQuery({
        queryKey: ["authenticatedUser"],
        queryFn: getAuthenticatedUserApi,
        retry: false,
        select: (data): AuthenticatedUser | undefined => {
            if (!data.userId) {
                return undefined;
            }
            return {
                userId: data.userId,
                userName: data.userName,
            };
        },
    });

    return {
        authenticatedUser: query.data,
        isAuthenticated: !!query.data,
        isLoading: query.isLoading,
        isError: query.isError,
        refetch: query.refetch,
    };
};
