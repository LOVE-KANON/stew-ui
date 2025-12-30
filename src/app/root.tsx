import { Outlet } from "react-router";
import { Header } from "@/features/core/components/shell/Header";

export const ErrorBoundary = () => {
    return <div>Something went wrong!</div>;
};

const AppRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default AppRoot;
