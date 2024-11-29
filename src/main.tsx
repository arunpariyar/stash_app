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

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "10px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "15px",
              maxWidth: "500px",
              padding: "16px 24px",
              background: "var(--white)",
            },
          }}
        />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
