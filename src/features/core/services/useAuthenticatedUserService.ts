import { useQuery } from "@tanstack/react-query";
import { getAuthenticatedUserApi } from "@/features/core/api/usecase/auth/getAuthenticatedUserApi";
import type { GetAuthenticatedUserResponse } from "@/features/core/api/usecase/auth/getAuthenticatedUserApi";

export const useAuthenticatedUserService = () => {
    const query = useQuery({
        queryKey: ["authenticatedUser"],
        queryFn: getAuthenticatedUserApi,
        retry: false,
        select: (result): GetAuthenticatedUserResponse | undefined => {
            if (result.status === 401) {
                return undefined;
            }
            return {
                userId: result.body?.detail?.userId,
                userName: result.body?.detail?.userName,
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
