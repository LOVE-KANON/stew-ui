import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { default as AppRoot } from './root';

import { coreRoutes } from "@/features/core/routes"

export const createAppRouter = () =>
    createBrowserRouter([
        {
            path: "/",
            element: (
                <AppRoot />
            ),
            children: []
                .concat(coreRoutes),
        }
    ])

export const AppRouter = () => {
    const router = createAppRouter();
    return <RouterProvider router={router} />;
}
