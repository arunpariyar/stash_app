import utils from "../../../../helper/utils";
import styles from "./BillRow.module.css";
interface BillRowProps {
  bill: {
    title: string;
    amount: number;
    theme: string;
  };
}

export default function BillRow({ bill }: BillRowProps) {
  return (
    <div
      style={{ borderLeft: `4px solid ${bill.theme}` }}
      className={styles.container}
    >
      <p className={styles.title}>{bill.title}</p>
      <p className={styles.amount}>{utils.displayAsEuro(bill.amount)}</p>
    </div>
  );
}
