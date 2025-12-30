import { Outlet } from "react-router";
import { AppBar } from "@mui/material";
import { Header } from "@/features/core/components/shell/Header";

export const ErrorBoundary = () => {
    return <div>Something went wrong!</div>;
};

const AppRoot = () => {
    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: '#212529' }}>
                <Header />
            </AppBar>
            <Outlet />
        </>
    );
};

export default AppRoot;
