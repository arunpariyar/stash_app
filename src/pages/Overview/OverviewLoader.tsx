import queryClient from "../../react-query/reactQuery";
import { fetchTransactions } from "../../api/api";
import { store } from "../../redux/store";
import { setTransactions } from "../../redux/transactionSlice";

export async function overviewLoader() {
  const data = await queryClient.fetchQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  const transactions = data.body;
  store.dispatch(setTransactions(transactions));
  return { transactions };
}
