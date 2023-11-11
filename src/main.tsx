import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";
import Layout from "./components/layout/Layout";

const routes = [
    {
        path: "/futbol-app",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "matches",
                element: <>matches</>
            },
            {
                path: "matches/:matchId",
                element: <>some match</>
            },
            {
                path: "competitions",
                element: <>competitions</>
            },
            {
                path: "competitions/:competitionId",
                element: <>some competition1</>
            },
            {
                path: "teams",
                element: <>teams</>
            },
            {
                path: "teams/:teamId",
                element: <>some team</>
            }
        ]
    }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
