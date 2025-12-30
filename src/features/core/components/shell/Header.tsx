import {
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { envConfig } from '@/config/env';

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Messages</MenuItem>
                    <MenuItem>Sign out</MenuItem>
                </Menu>
            </Toolbar>
        </>
    );
};
