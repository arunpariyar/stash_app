import toast from "react-hot-toast";
import queryClient from "../../react-query/reactQuery";

import { useMutation } from "@tanstack/react-query";
import { withdrawMoney } from "../../api/api";

export default function useWithdrawPot({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  const { mutate, isPending } = useMutation({
    mutationFn: withdrawMoney,
    onSuccess: () => {
      toast.success("Amount withdrawn from Pot ✨");
      onCloseModal();
      queryClient.invalidateQueries({ queryKey: ["pots"] });
    },
    onError: (err: Error) => toast.error(err.message),
  });
  return { mutate, isPending };
}
