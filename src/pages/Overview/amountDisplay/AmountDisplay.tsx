import utils from "../../../helper/utils";
import "./AmountDisplay.css";
interface AmountDisplayProps {
  title: string;
  amount: number;
}

export default function AmountDisplay({ title, amount }: AmountDisplayProps) {
  const roundedAmount = Math.round((amount + Number.EPSILON) * 100) / 100;

  return (
    <div
      className={
        title === "Current Balance"
          ? "amount-container current-balance"
          : "amount-container"
      }
    >
      <p className="amount-title">{title}</p>
      <p className="amount-number">{utils.displayAsEuro(roundedAmount)}</p>
    </div>
  );
}
