import type { RouteObject } from "react-router-dom";
import PageLogin from "./pages/PageLogin";
import PageHome from "./pages/PageHome";

export const coreRoutes: RouteObject[] = [
    {
        index: true,
        element: <PageLogin />,
    },
    {
        path: "home",
        element: <PageHome />,
    },
]
