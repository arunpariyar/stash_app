import styles from "./Balance.module.css";
import AmountDisplay from "../AmountDisplay/AmountDisplay";

interface AmountInfo {
  title: string;
  amount: number;
}

export default function Balance() {
  const mockAmounts: AmountInfo[] = [
    { title: "Current Balance", amount: 4836 },
    { title: "Income", amount: 3814.25 },
    { title: "Expenses", amount: 1700.5 },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>Overview</div>
      <div className={styles.accountContainer}>
        {mockAmounts.map((category) => (
          <AmountDisplay
            key={category.title}
            amount={category.amount}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
}
