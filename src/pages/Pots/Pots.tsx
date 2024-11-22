import styles from "./Pots.module.css";
import { useAppSelector } from "../../redux/hooks";
import { Pot } from "../../models/pot";
import PageHeader from "../sharedComponents/PageHeader/PageHeader";
import optionsIcon from "/images/icon-ellipsis.svg";
import utils from "../../helper/utils";
import GreyButton from "./GreyButton/GreyButton";

export default function Pots() {
  const pots: Pot[] = useAppSelector((state) => state.pots.data);

  console.log(pots[0]);

  return (
    <>
      <div className={styles.potsPageHeader}>
        <PageHeader title="Pots"></PageHeader>
        <button>+Add New Pot</button>
      </div>

      <div className={styles.potCollection}>
        {pots.slice(0, 1).map((pot) => (
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
              <button
                onClick={() => {
                  alert("hello");
                }}
              >
                <img src={optionsIcon} alt="menu option for pot" />
              </button>
            </div>
            <div>
              <div>
                <p>Total Saved</p>
                <p>{utils.displayAsEuro(pot.total)}</p>
              </div>
              <div>
                <progress
                  className={styles.progressBar}
                  max={100}
                  value={`${(pot.total / pot.target) * 100}`}
                ></progress>
                <p>{`${(pot.total / pot.target) * 100}%`}</p>
                <p>{`Target of ${utils.displayAsEuro(pot.target)}`}</p>
              </div>
              <div>
                <GreyButton
                  label="+Add Money"
                  onClick={() => {
                    alert("coming soon");
                  }}
                ></GreyButton>
                <GreyButton
                  label="Withdraw"
                  onClick={() => {
                    alert("coming soon");
                  }}
                ></GreyButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
