import "./Pots.css";
import { useAppSelector } from "../../redux/hooks";
import { Pot } from "../../models/pot";
import PageHeader from "../sharedComponents/PageHeader/PageHeader";

export default function Pots() {
  const pots: Pot[] = useAppSelector((state) => state.pots.data);

  return (
    <>
      <div className="pots-page-header">
        <PageHeader title="Pots"></PageHeader>
        <button>+Add New Pot</button>
      </div>
      <div>
        {pots.map((pot) => (
          <div key={pot.id}>{pot.name}</div>
        ))}
      </div>
    </>
  );
}
