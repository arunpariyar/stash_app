import AmountDisplay from "./AmountDisplay/AmountDisplay";
import "./Overview.css";
import PotsDisplay from "./PotsDisplay/PotsDisplay";

interface AmountInfo {
  title: string;
  amount: number;
}

export interface Pot {
  name: string;
  amount: number;
  theme: string;
}

export default function Overview() {
  const mockAmounts: AmountInfo[] = [
    { title: "Current Balance", amount: 4836 },
    { title: "Income", amount: 3814.25 },
    { title: "Expenses", amount: 1700.5 },
  ];

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
      <div>
        <PotsDisplay pots={mockPots} />
      </div>
    </div>
  );
}
