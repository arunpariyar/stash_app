import "./Overview.css";
import PotsDisplay from "../sharedComponents/PotsDisplay/PotsDisplay";
import TransactionsOverview from "./TransactionsOverview/TransactionsOverview";
import BudgetOverview from "./BudgetOverview/BudgetOverview";

import { RecurringBills } from "./RecurringBills/RecurringBills";

import Balance from "./Balance/Balance";
import PageHeader from "../sharedComponents/PageHeader/PageHeader";
import useTransaction from "../../hooks/Transactions/useTransactions";
import usePots from "../../hooks/Pots/usePots";

export default function Overview() {
  // const transactions = useAppSelector((state) => state.transactions.data);
  // const pots: Pot[] = useAppSelector((state) => state.pots.data);

  const { isPending: transactionPending, data: transactions } =
    useTransaction();
  const { isPending: potsPending, data: pots } = usePots();

  if (transactionPending || potsPending) return <div>Loading...</div>;

  return (
    <div className="overview-container">
      <PageHeader title="Overview"></PageHeader>
      <Balance></Balance>
      <div className="contents">
        <div className="pots-and-transaction-container">
          <PotsDisplay pots={pots} />
          <TransactionsOverview transactions={transactions} />
        </div>
        <div className="budget-and-bills-container">
          <BudgetOverview></BudgetOverview>
          <RecurringBills></RecurringBills>
        </div>
      </div>
    </div>
  );
}
