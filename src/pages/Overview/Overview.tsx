import "./Overview.css";
import PotsDisplay from "../sharedComponents/PotsDisplay/PotsDisplay";
import TransactionsOverview from "./TransactionsOverview/TransactionsOverview";
import BudgetOverview from "./BudgetOverview/BudgetOverview";
import { useAppSelector } from "../../redux/hooks";
import { RecurringBills } from "./RecurringBills/RecurringBills";
import Balance from "./Balance/Balance";

export interface Pot {
  name: string;
  amount: number;
  theme: string;
}

export default function Overview() {
  const transactions = useAppSelector((state) => state.transactions.data);

  const mockPots: Pot[] = [
    {
      name: "Savings",
      amount: 159,
      theme: "green",
    },
    {
      name: "Gift",
      amount: 40,
      theme: "black",
    },
    {
      name: "Concert Ticket",
      amount: 110,
      theme: "purple",
    },
    {
      name: "New Laptop",
      amount: 100,
      theme: "brown",
    },
  ];
  return (
    <div className="overview-container">
      <Balance></Balance>
      <div className="contents">
        <div className="pots-and-transaction-container">
          <PotsDisplay pots={mockPots} />
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
