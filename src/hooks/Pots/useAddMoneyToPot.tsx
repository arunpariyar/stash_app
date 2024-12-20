import toast from "react-hot-toast";
import queryClient from "../../react-query/reactQuery";

import { useMutation } from "@tanstack/react-query";
import { addMoneyToPotApi } from "../../api/api";

export default function useAddMoneyToPot({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  const { mutate, isPending } = useMutation({
    mutationFn: addMoneyToPotApi,
    onSuccess: () => {
      toast.success("Amount added to pot ✨");
      onCloseModal();
      queryClient.invalidateQueries({ queryKey: ["pots"] });
    },
    onError: (err: Error) => toast.error(err.message),
  });
  return { mutate, isPending };
}
