import { Outlet } from "react-router-dom";
import { AppBar, Box, Drawer, Toolbar } from "@mui/material";
import { Header, Sidebar } from "@/features/core/components";
import { useAuthenticatedUserService } from "@/features/core/services/useAuthenticatedUserService";
import PageLogin from "@/features/core/pages/PageLogin";

export const ErrorBoundary = () => {
    return <div>Something went wrong!</div>;
};

const AppRoot = () => {
    const drawerWidth = 240;
    const authenticatedUserService = useAuthenticatedUserService();

    if (authenticatedUserService.isLoading) {
        return null;
    }

    return (
        <>
            <AppBar position="fixed" sx={{ bgcolor: '#212529', zIndex: theme => theme.zIndex.drawer + 1 }}>
                <Header />
            </AppBar>

            {authenticatedUserService.isAuthenticated && (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                    }}
                >
                    <Toolbar />
                    <Sidebar />
                </Drawer>
            )}

            <Box
                component="main"
                sx={{
                    ml: authenticatedUserService.isAuthenticated ? `${drawerWidth}px` : 0,
                    px: { xs: 2, sm: 3, md: 4 },
                }}
            >
                <Toolbar />
                {authenticatedUserService.isAuthenticated ? <Outlet /> : <PageLogin />}
            </Box>
        </>
    );
};

export default AppRoot;
