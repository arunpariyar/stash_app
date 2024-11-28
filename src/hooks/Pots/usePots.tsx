import { useQuery } from "@tanstack/react-query";
import { fetchPots } from "../../api/api";

export default function usePots() {
  const { isPending, data } = useQuery({
    queryKey: ["pots"],
    queryFn: fetchPots,
  });
  return { isPending, data };
}
