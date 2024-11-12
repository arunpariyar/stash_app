import { Transaction } from "../../../../models/transaction";

interface TransactionCompactProps {
  transaction: Transaction;
}

export default function TransactionCompact({
  transaction,
}: TransactionCompactProps) {
  console.log(transaction);
  return <div>{transaction.name}</div>;
}
