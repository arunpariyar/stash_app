import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LoginPage from "./components/LoginPage/LoginPage.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import { action as formAction } from "./components/LoginPage/LoginPage.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Overview from "./pages/Overview/Overview.tsx";
import Transactions from "./pages/Transactions/TransactionsPage.tsx";
import Budgets from "./pages/Budgets/Budgets.tsx";
import Pots from "./pages/Pots/Pots.tsx";
import Bills from "./pages/Bills/Bills.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    action: formAction,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <Overview /> },
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },
      {
        path: "/dashboard/transactions",
        element: <Transactions />,
      },
      {
        path: "/dashboard/budgets",
        element: <Budgets />,
      },
      {
        path: "/dashboard/pots",
        element: <Pots />,
      },
      {
        path: "/dashboard/bills",
        element: <Bills />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
