import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { default as AppRoot } from './root';
import PageLogin from "@/features/core/pages/PageLogin";
import PageHome from "@/features/core/pages/PageHome";

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
                    element: <PageLogin />,
                },
                {
                    path: "/home",
                    element: <PageHome />,
                }
            ]
        }
    ])

export const AppRouter = () => {
    const router = createAppRouter();
    return <RouterProvider router={router} />;
}
