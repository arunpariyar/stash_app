import useDeletePot from "../../../hooks/Pots/useDeletePot";
import FormTitle from "../FormTitle/FormTitle";
import FormSummary from "../FormSummary/FormSummary";
import WarningBtn from "../../Buttons/WarningBtn/WarningBtn";
import GoBackBtn from "../../Buttons/GoBackBtn/GoBackBtn";
export default function DeletePotForm({
  id,
  name,
  onCloseModal,
}: {
  id: string;
  name: string;
  onCloseModal: () => void;
}) {
  //TODO logic to handle delete pot
  const { mutate } = useDeletePot();
  //   handler to delete the pot
  const handleDeletePot = (id: string) => {
    mutate(id);
  };

  const summary =
    "Are you sure you want to delete this pot ? This action cannot be reveresed, and all the data inside it will be removed forever";

  return (
    <>
      <FormTitle>{`Delete '${name}'?`}</FormTitle>
      <FormSummary summary={summary} />
      <WarningBtn
        onClick={() => handleDeletePot(id)}
        label="Yes, Confirm Delete"
      />

      <GoBackBtn label="No, Go Back" onClick={() => onCloseModal()} />
    </>
  );
}
