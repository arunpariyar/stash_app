import queryClient from "../../react-query/reactQuery";
import { fetchTransactions } from "../../api/api";
import { store } from "../../redux/store";
import { setTransactions } from "../../redux/transactionSlice";
import { fetchPots } from "../../api/api";
import { setPots } from "../../redux/potSlice";

export async function overviewLoader() {
  const transactionsResult = await queryClient.fetchQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  const potResult = await queryClient.fetchQuery({
    queryKey: ["pots"],
    queryFn: fetchPots,
  });

  const transactions = transactionsResult.body;
  store.dispatch(setTransactions(transactions));

  const pots = potResult.body;
  store.dispatch(setPots(pots));

  return { transactions, pots };
}
