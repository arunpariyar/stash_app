// import { expect, test } from "vitest";
// import { renderHook } from "@testing-library/react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import useTransaction from "../hooks/Transactions/useTransactions";
// import { fetchTransactions } from "../api/api";

// test("useTransaction fetches error", async () => {
//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         retry: false,
//         refetchOnWindowFocus: false,
//       },
//     },
//   });

//   const wrapper = ({ children }: { children: React.ReactNode }) => (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );

//   const { result } = renderHook(() => useTransaction(), { wrapper });

//   await waitFor(() => expect(result.current.isPending).toBe(false));

//   expect(result.current.data).toBeUndefined();
// });
