import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import PageHome from "./pages/PageHome";
import PageUserDetails from "./pages/PageUserDetails";

export const coreRoutes: RouteObject = {
    path: "core",
    children: [
        {
            index: true,
            element: <Navigate to="home" replace />,
        },
        {
            path: "home",
            element: <PageHome />,
        },
        {
            path: "maintenance",
            children: [
                {
                    path: "user",
                    children: [
                        {
                            path: "edit/:userId",
                            element: <PageUserDetails />,
                        },
                    ],
                },
            ],
        },
    ],
};
