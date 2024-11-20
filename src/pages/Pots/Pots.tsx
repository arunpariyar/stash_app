import { useAppSelector } from "../../redux/hooks";
import { Pot } from "../../models/pot";
import { useLocation } from "react-router-dom";
import PageHeader from "../sharedComponents/PageHeader/PageHeader";

export default function Pots() {
  const pots: Pot[] = useAppSelector((state) => state.pots.data);
  console.log(useLocation());

  return (
    <>
      <PageHeader></PageHeader>
      <div>
        {pots.map((pot) => (
          <div key={pot.id}>{pot.name}</div>
        ))}
      </div>
    </>
  );
}
