import "./TransactionCompact.css";
import { Transaction } from "../../../../models/transaction";
import utils from "../../../../helper/utils";

interface TransactionCompactProps {
  transaction: Transaction;
}

export default function TransactionCompact({
  transaction,
}: TransactionCompactProps) {
  return (
    <div className="transaction-row-container">
      <div className="transaction-entity">
        <img
          className="image-resize"
          src={transaction.avatar}
          alt={`image of ${transaction.name}}`}
        />
        <p>{transaction.name}</p>
      </div>
      <div className="transaction-details">
        <div
          style={transaction.amount > 0 ? { color: "#277c78" } : {}}
          className="transaction-amount"
        >
          {transaction.amount > 0
            ? `+${utils.displayAsEuro(transaction.amount)}`
            : `${utils.displayAsEuro(transaction.amount)}`}
        </div>
        <div className="transaction-date">
          {utils.formatDate(new Date(transaction.date))}
        </div>
      </div>
    </div>
  );
}
