import useDeletePot from "../../../hooks/Pots/useDeletePot";

export default function DeletePotForm({ id }: { id: string }) {
  //TODO logic to handle delete pot
  const { mutate } = useDeletePot();
  //   handler to delete the pot
  const handleDeletePot = (id: string) => {
    mutate(id);
  };

  return <button onClick={() => handleDeletePot(id)}>Delete! Yes</button>;
}
