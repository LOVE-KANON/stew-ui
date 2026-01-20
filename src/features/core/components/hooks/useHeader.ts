import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useLoginService } from "@/features/core/services/useLoginService";
import { useAuthenticatedUserService } from "@/features/core/services/useAuthenticatedUserService";

export const useHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const loginService = useLoginService();
    const authenticatedUserService = useAuthenticatedUserService();

    const onClickLogout = async (): Promise<void> => {
        try {
            await loginService.logout();
            setAnchorEl(null);
            navigate("/core");
        } catch (e) {
            console.error(e);
            alert("通信エラー");
        }
    };
    
    return {
        anchorEl,
        setAnchorEl,
        authenticatedUser: authenticatedUserService.authenticatedUser,
        isAuthenticated: authenticatedUserService.isAuthenticated,
        onClickLogout,
    };
};
