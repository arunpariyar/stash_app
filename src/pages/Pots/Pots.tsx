import { useAppSelector } from "../../redux/hooks";
import { Pot } from "../../models/pot";

export default function Pots() {
  const pots: Pot[] = useAppSelector((state) => state.pots.data);

  return (
    <div>
      {pots.map((pot) => (
        <div>{pot.name}</div>
      ))}
    </div>
  );
}
