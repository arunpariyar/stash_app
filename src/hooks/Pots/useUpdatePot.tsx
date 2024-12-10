import toast from "react-hot-toast";
import queryClient from "../../react-query/reactQuery";
import { updatePot } from "../../api/api";
import { useMutation } from "@tanstack/react-query";

export default function useUpdatePot({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  const { mutate, isPending } = useMutation({
    mutationFn: updatePot,
    onSuccess: () => {
      toast.success("Pot edited");
      queryClient.invalidateQueries({ queryKey: ["pots"] });
      onCloseModal();
    },
    onError: (err: Error) => toast.error(err.message),
  });
  return { mutate, isPending };
}
