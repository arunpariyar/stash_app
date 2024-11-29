import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../../api/api";

export default function useTransaction() {
  const { isPending, data } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  return { isPending, data };
}
