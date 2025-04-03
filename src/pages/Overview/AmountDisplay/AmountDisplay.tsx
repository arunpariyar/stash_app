import utils from "../../../helper/utils";
import "./AmountDisplay.css";

interface AmountDisplayProps {
  title: string;
  amount: number;
}

export default function AmountDisplay({
  title = "no title",
  amount = 0,
}: AmountDisplayProps) {
  const roundedAmount = Math.round((amount + Number.EPSILON) * 100) / 100;

  return (
    <div
      className={
        title === "Current Balance"
          ? "amount-container current-balance"
          : "amount-container"
      }
    >
      <p data-testid="test-title" className="amount-title">
        {title}
      </p>
      <p data-testid="test-amount" className="amount-number">
        {utils.displayAsEuro(roundedAmount)}
      </p>
    </div>
  );
}
