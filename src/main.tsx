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

//imports for redux
import { store } from "./redux/store.tsx";
import { Provider } from "react-redux";

//configuration for react query
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./react-query/reactQuery.tsx";

import { overviewLoader } from "./pages/Overview/OverviewLoader.tsx";

import { action as createPotAction } from "./components/Forms/AddNewPotForm/AddNewPotForm.tsx";

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
    loader: overviewLoader,

    children: [
      { index: true, element: <Overview /> },
      {
        path: "/dashboard/overview",
        element: <Overview />,
        loader: overviewLoader,
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
        action: createPotAction,
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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
