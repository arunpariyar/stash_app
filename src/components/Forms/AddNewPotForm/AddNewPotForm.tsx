import utils from "../../../helper/utils";
import { Form, redirect } from "react-router-dom";
import { createPot } from "../../../api/api";
import { Pot } from "../../../models/pot";

interface AddNewPotFormProps {
  onCloseModal: () => void;
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const newPot: Partial<Pot> = Object.fromEntries(formData);

  //get total to be zero
  newPot.total = 0;

  // Optional: Check if data is being passed correctly
  if (!newPot.name || !newPot.target || !newPot.theme) {
    // can place a toast here
    alert("Missing required fields");
    return redirect(`/dashboard/pots`);
  }

  const result = await createPot(newPot);
  console.log(result);

  return redirect(`/dashboard/pots`);
}

export default function AddNewPotForm({ onCloseModal }: AddNewPotFormProps) {
  function handleSubmit() {
    //the preventDefault keeps from the form to be submitted so it has to be done manually
    //event.preventDefault is not applied because we want the default behaviour to work
    onCloseModal();
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Pot Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="target">Target</label>
        <input type="text" name="target" />
      </div>
      <div>
        <label htmlFor="theme">Pot Name</label>
        <select id="theme" name="theme">
          {utils.colors
            .filter((color) => color.used === false)
            .map((color) => (
              <option key={color.value} value={color.value}>
                {color.name}
              </option>
            ))}
        </select>
      </div>
      <button type="submit">Add Pot</button>
      <button
        onClick={() => {
          onCloseModal();
        }}
      >
        close
      </button>
    </Form>
  );
}
