import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PageHome from "./pages/PageHome";

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
    ],
};
