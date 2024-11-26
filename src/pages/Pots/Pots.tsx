import styles from "./Pots.module.css";
import { useAppSelector } from "../../redux/hooks";
import { Pot } from "../../models/pot";
import PageHeader from "../sharedComponents/PageHeader/PageHeader";
import PotOptionsButton from "./PotOptionsButton/PotOptionsButton";
import utils from "../../helper/utils";
import BeigeButton from "./BeigeButton/BeigeButton";
import AddPot from "./AddPot/AddPot";

function calcPercentage(total: number, target: number) {
  const percentage = (total / target) * 100;
  return percentage.toFixed(1);
}

export default function Pots() {
  const pots: Pot[] = useAppSelector((state) => state.pots.data);

  console.log(pots[0]);

  return (
    <div className={styles.potsContainer}>
      <div className={styles.potsPageHeader}>
        <PageHeader title="Pots"></PageHeader>
        <AddPot></AddPot>
      </div>

      <div className={styles.potsCollection}>
        {pots.map((pot) => (
          <div className={styles.potWrapper}>
            <div className={styles.menuBar}>
              <div className={styles.menuTitle}>
                <div
                  style={{ backgroundColor: `${pot.theme}` }}
                  className={styles.dot}
                ></div>
                <div className={styles.title} key={pot.id}>
                  {pot.name}
                </div>
              </div>
              <PotOptionsButton
                onClick={() => {
                  alert("alert soon");
                }}
              ></PotOptionsButton>
            </div>
            <div className={styles.potDetails}>
              <div className={styles.potDetailSaved}>
                <p className={styles.potTitle}>Total Saved</p>
                <p className={styles.potAmount}>
                  {utils.displayAsEuro(pot.total)}
                </p>
              </div>
              <div className={styles.progressDetails}>
                <div className={styles.progressBarWrapper}>
                  <progress
                    className={styles.progressBar}
                    style={{ accentColor: pot.theme }}
                    data-accent={pot.theme}
                    max={100}
                    value={`${calcPercentage(pot.total, pot.target)}`}
                  ></progress>
                </div>

                <div className={styles.potTargetDetails}>
                  <p className={styles.targetPercentage}>{`${calcPercentage(
                    pot.total,
                    pot.target
                  )}%`}</p>
                  <p
                    className={styles.targetTotal}
                  >{`Target of ${utils.displayAsEuro(pot.target)}`}</p>
                </div>
              </div>
            </div>

            <div className={styles.callToActionWrapper}>
              <BeigeButton
                label="+ Add Money"
                onClick={() => {
                  alert("coming soon");
                }}
              ></BeigeButton>
              <BeigeButton
                label="Withdraw"
                onClick={() => {
                  alert("coming soon");
                }}
              ></BeigeButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
