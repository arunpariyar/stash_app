import "./PotsDisplay.css";
import { Pot } from "../Overview";
import { Link } from "react-router-dom";
import caretRight from "../../../../public/images/icon-caret-right.svg";
import potsIcon from "../../../../public/images/icon-pot.svg";

interface PotsDisplayProps {
  pots: Pot[];
}

export default function PotsDisplay({ pots }: PotsDisplayProps) {
  const total = pots.reduce((acc, pot) => acc + pot.amount, 0);

  const formattedTotal = Intl.NumberFormat("en", {
    currency: "EUR",
    style: "currency",
  }).format(total);

  console.log(total);
  return (
    <div className="pots-container">
      <div className="pots-header">
        <div className="pots-title">Pots</div>
        <Link className="pots-link" to="/pots">
          See Details
          <span>
            <img src={caretRight} alt="" />
          </span>
        </Link>
      </div>
      <div className="pots-content">
        <div className="pots-summary">
          <div>
            <img src={potsIcon} alt="" />
          </div>
          <div className="pots-summary--details">
            <p className="summary-title">Total Saved</p>
            <p className="summary-amount">{formattedTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
