import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Business } from "./pages/Business";
import { Home } from "./pages/Home";
import { ROUTES } from "./constants/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME.href,
    element: <App />,
    children: [
      { path: ROUTES.HOME.href, element: <Home /> },
      { path: ROUTES.BUSINESS.href, element: <Business /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
