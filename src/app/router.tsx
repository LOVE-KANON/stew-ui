import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "@/features/core/components/Login";
import Home from "@/features/core/components/Home";

export const createAppRouter = () =>
    createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/home",
            element: <Home />,
        },
    ])

export const AppRouter = () => {
    const router = createAppRouter();
    return <RouterProvider router={router} />;
}
