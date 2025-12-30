import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { default as AppRoot } from './root';
import Login from "@/features/auth/components/Login";
import Home from "@/features/home/components/Home";

export const createAppRouter = () =>
    createBrowserRouter([
        {
            path: "/",
            element: (
                <AppRoot />
            ),
            children: [
                {
                    path: "/",
                    element: <Login />,
                },
                {
                    path: "/home",
                    element: <Home />,
                }
            ]
        }
    ])

export const AppRouter = () => {
    const router = createAppRouter();
    return <RouterProvider router={router} />;
}
