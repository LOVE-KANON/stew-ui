import * as React from "react";
import { useNavigate } from "react-router";
import { useLoginService } from "@/features/core/services/useLoginService";

export const useHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const loginService = useLoginService();

    const onClickLogout = async (): Promise<void> => {
        try {
            const result = await loginService.logout();
            console.log("logout result:", result);
            setAnchorEl(null);
            navigate("/");
        } catch (e) {
            console.error(e);
            alert("通信エラー");
        }
    };
    
    return {
        anchorEl,
        setAnchorEl,
        onClickLogout,
    };
};
