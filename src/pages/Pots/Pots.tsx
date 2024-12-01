import styles from "./Pots.module.css";
import { Pot } from "../../models/pot";
import PageHeader from "../sharedComponents/PageHeader/PageHeader";
import PotOptionsButton from "./PotOptionsButton/PotOptionsButton";
import utils from "../../helper/utils";
import BeigeButton from "./BeigeButton/BeigeButton";
import AddPot from "./AddPot/AddPot";
import usePots from "../../hooks/Pots/usePots";
import useDeletePot from "../../hooks/Pots/useDeletePot";
import { useState } from "react";
import PotMenu from "./PotMenu/PotMenu";

function calcPercentage(total: number, target: number) {
  const percentage = (total / target) * 100;
  return percentage.toFixed(1);
}

export default function Pots() {
  const { isPending: potsPending, data: pots } = usePots();
  const [selected, setSelected] = useState("");

  function show(pot: Pot) {
    return pot.id === selected
      ? `${styles.editDeleteMenu} `
      : `${styles.editDeleteMenu} + ${styles.hide}`;
  }

  //TODO logic to handle delete pot
  // const { mutate } = useDeletePot();

  // const handleDeletePot = (id: string) => {
  //   mutate(id);
  // };
  // handler to delete the pot
  // handleDeletePot(pot.id);

  const toggleEditDelete = (pot: Pot) => {
    return selected === "" ? setSelected(pot.id) : setSelected("");
  };

  if (potsPending) return <h3>Loading...</h3>;

  return (
    <div className={styles.potsContainer}>
      <div className={styles.potsPageHeader}>
        <PageHeader title="Pots"></PageHeader>
        <AddPot></AddPot>
      </div>

      <div className={styles.potsCollection}>
        {pots.map((pot: Pot) => (
          <div key={pot.id} className={styles.potWrapper}>
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
              <div className={styles.potOptionsContainer}>
                <PotOptionsButton
                  onClick={() => toggleEditDelete(pot)}
                ></PotOptionsButton>
                <div className={show(pot)}>
                  <PotMenu />
                </div>
              </div>
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
