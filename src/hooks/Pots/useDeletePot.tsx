import { useMutation } from "@tanstack/react-query";
import queryClient from "../../react-query/reactQuery";
import { deletePot } from "../../api/api";
import toast from "react-hot-toast";

export default function useDeletePot() {
  const { mutate, isPending } = useMutation({
    mutationFn: deletePot,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
      //here i will have to activate if i really want to delet
      toast.success("Pot deleted successfully");
    },
  });

  return { mutate, isPending };
}
