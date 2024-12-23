import "./PotsDisplay.css";
import { Pot } from "../../../models/pot";
import potsIcon from "/images/icon-pot.svg";
import PotDisplay from "../../sharedComponents/PotDisplay/PotDisplay";
import utils from "../../../helper/utils";
import OverviewHeader from "../OverviewHeader/OverviewHeader";

interface PotsDisplayProps {
  pots: Pot[];
}

export default function PotsDisplay({ pots }: PotsDisplayProps) {
  const total = pots.reduce((acc, pot) => acc + Number(pot.total), 0);

  return (
    <div className="pots-container">
      <OverviewHeader
        title="Pots"
        link="pots"
        linkText="See Details"
      ></OverviewHeader>
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
          {pots.slice(0, 4).map((pot) => (
            <PotDisplay key={crypto.randomUUID()} pot={pot}></PotDisplay>
          ))}
        </div>
      </div>
    </div>
  );
}
