import "./PotDisplay.css";
import { Pot } from "../../Overview/Overview";
import utils from "../../../helper/utils";

interface PotDisplayProps {
  pot: Pot;
}

export default function PotDisplay({ pot }: PotDisplayProps) {
  console.log({ pot });
  return (
    <div className="pot-container">
      <div className="single-pot">
        <div style={{ backgroundColor: pot.theme }} className="empty-div"></div>
        <div className="pot-details">
          <div className="pot-name">{pot.name}</div>
          <div className="pot-amount">{utils.displayAsEuro(pot.total)}</div>
        </div>
      </div>
    </div>
  );
}
