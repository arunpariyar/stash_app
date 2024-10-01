import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LoginPage from "./components/LoginPage/LoginPage.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import { action as formAction } from "./components/LoginPage/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    action: formAction,
  },
  {
    path: "/dashboard",
    element: <>you are now logged in</>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
