import styles from "./Pots.module.css";
import { useAppSelector } from "../../redux/hooks";
import { Pot } from "../../models/pot";
import PageHeader from "../sharedComponents/PageHeader/PageHeader";
import optionsIcon from "/images/icon-ellipsis.svg";

export default function Pots() {
  const pots: Pot[] = useAppSelector((state) => state.pots.data);

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

              <img src={optionsIcon} alt="menu option for pot" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
