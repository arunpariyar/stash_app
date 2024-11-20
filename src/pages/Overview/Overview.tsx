import "./Overview.css";
import PotsDisplay from "../sharedComponents/PotsDisplay/PotsDisplay";
import TransactionsOverview from "./TransactionsOverview/TransactionsOverview";
import BudgetOverview from "./BudgetOverview/BudgetOverview";
import { useAppSelector } from "../../redux/hooks";
import { RecurringBills } from "./RecurringBills/RecurringBills";
import { Pot } from "../../models/pot";
import Balance from "./Balance/Balance";
import PageHeader from "../sharedComponents/PageHeader/PageHeader";

export default function Overview() {
  const transactions = useAppSelector((state) => state.transactions.data);
  const pots: Pot[] = useAppSelector((state) => state.pots.data);

  return (
    <div className="overview-container">
      {/* <div className="page-title">Overview</div> */}
      <PageHeader></PageHeader>
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
