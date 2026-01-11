import { Outlet } from "react-router";
import { AppBar, Box, Drawer, Toolbar } from "@mui/material";
import { Header, Sidebar } from "@/features/core/components";

export const ErrorBoundary = () => {
    return <div>Something went wrong!</div>;
};

const AppRoot = () => {
    const drawerWidth = 240;
    return (
        <>
                <Header />
            <AppBar position="fixed" sx={{ bgcolor: '#212529', zIndex: theme => theme.zIndex.drawer + 1 }}>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "bordar-box",
                    }
                }}
            >
                <Toolbar />
                <Sidebar />
            </Drawer>
            <Box component="main" sx={{ ml: `${drawerWidth}px` }}>
                <Toolbar />
                <Outlet />
            </Box>
        </>
    );
};

export default AppRoot;
