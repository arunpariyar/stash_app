import "./PotsDisplay.css";
import { Pot } from "../../Overview/Overview";
import potsIcon from "/images/icon-pot.svg";
import PotDisplay from "../../sharedComponents/PotDisplay/PotDisplay";
import utils from "../../../helper/utils";
import OverviewHeader from "../OverviewHeader/OverviewHeader";

interface PotsDisplayProps {
  pots: Pot[];
}

export default function PotsDisplay({ pots }: PotsDisplayProps) {
  const total = pots.reduce((acc, pot) => acc + pot.amount, 0);

  return (
    <div className="pots-container">
      <OverviewHeader title="Pots" link="pots"></OverviewHeader>
      <div className="pots-information">
        <div className="pots-content">
          <div className="pots-summary">
            <div>
              <img src={potsIcon} alt="" />
            </div>
            <div className="pots-summary--details">
              <p className="summary-title">Total Saved</p>
              <p className="summary-amount">{utils.displayAsEuro(total)}</p>
            </div>
          </div>
        </div>
        <div className="pots-breakdown">
          {pots.map((pot) => (
            <PotDisplay key={`${pot.name}-${pot.theme}`} pot={pot}></PotDisplay>
          ))}
        </div>
      </div>
    </div>
  );
}
