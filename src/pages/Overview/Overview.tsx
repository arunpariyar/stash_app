import AmountDisplay from "./amountDisplay/AmountDisplay";
import "./Overview.css";
interface AmountInfo {
  title: string;
  amount: number;
}

export default function Overview() {
  const mockAmounts: AmountInfo[] = [
    { title: "Current Balance", amount: 4836 },
    { title: "Income", amount: 3814.25 },
    { title: "Expenses", amount: 1700.5 },
  ];
  return (
    <div className="overview-container">
      <div className="page-title">Overview</div>
      <div className="account-container">
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
