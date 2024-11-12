import "./TransactionsOverview.css";
import OverviewHeader from "../../sharedComponents/OverviewHeader/OverviewHeader";
import { Transaction } from "../../../models/transaction";
import TransactionCompact from "./TransactionCompact/TransactionCompact";

interface TransactionsOverviewProps {
  transactions: Transaction[];
}

export default function TransactionsOverview({
  transactions,
}: TransactionsOverviewProps) {
  return (
    <div className="transactions-overview--container">
      <OverviewHeader title="Transactions" link="transactions" />
      {transactions.map((transaction) => (
        <TransactionCompact
          key={crypto.randomUUID()}
          transaction={transaction}
        />
      ))}
    </div>
  );
}
