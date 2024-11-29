import toast from "react-hot-toast";
import queryClient from "../../react-query/reactQuery";
import { createPot } from "../../api/api";
import { useMutation } from "@tanstack/react-query";

export default function useNewPot({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  const { mutate, isPending } = useMutation({
    mutationFn: createPot,
    onSuccess: () => {
      toast.success("New Pot Created");
      queryClient.invalidateQueries({ queryKey: ["pots"] });
      onCloseModal();
    },
    onError: (err: Error) => toast.error(err.message),
  });
  return { mutate, isPending };
}
