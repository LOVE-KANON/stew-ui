import {
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { envConfig } from '@/config/env';
import { useHeader } from "./hooks/useHeader";

export const Header = () => {

    const pageState = useHeader();

    return (
        <>
            <Toolbar variant="dense">
                {/* システム名 */}
                <Typography variant="h6" sx={{ mr: 2 }}>
                    {envConfig.system.title}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                {/* ユーザメニューボタン */}
                <IconButton
                    color="inherit"
                    onClick={(e) => pageState.setAnchorEl(e.currentTarget)}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    anchorEl={pageState.anchorEl}
                    open={Boolean(pageState.anchorEl)}
                    onClose={() => pageState.setAnchorEl(null)}
                >
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Messages</MenuItem>
                    <MenuItem
                        onClick={pageState.onClickLogout}
                    >
                        ログアウト
                    </MenuItem>
                </Menu>
            </Toolbar>
        </>
    );
};
