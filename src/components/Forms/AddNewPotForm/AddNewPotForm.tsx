import utils from "../../../helper/utils";
import { FormEvent } from "react";
import toast from "react-hot-toast";

import { z } from "zod";
import useNewPot from "../../../hooks/Pots/useNewPot";

const addPotSchema = z.object({
  name: z.string(),
  theme: z.string(),
  target: z.number({ coerce: true }),
});

interface AddNewPotFormProps {
  onCloseModal: () => void;
}

// export async function action({ request }: { request: Request }) {
//   const formData = await request.formData();
//   const newPot: Partial<Pot> = Object.fromEntries(formData);

//   //get total to be zero
//   newPot.total = 0;

//   // Optional: Check if data is being passed correctly
//   if (!newPot.name || !newPot.target || !newPot.theme) {
//     // can place a toast here
//     alert("Missing required fields");
//     return redirect(`/dashboard/pots`);
//   }

//   const result = await createPot(newPot);
//   console.log(result);

//   return redirect(`/dashboard/pots`);
// }

export default function AddNewPotForm({ onCloseModal }: AddNewPotFormProps) {
  const { mutate, isPending } = useNewPot({ onCloseModal });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData);
    const result = addPotSchema.safeParse(formValues);

    if (result.success) {
      if (!result.data.name || !result.data.target || !result.data.theme) {
        console.log("got here");
        toast.error("Please enter details correctly");
      } else {
        mutate({
          name: result.data.name,
          target: result.data.target,
          theme: result.data.theme,
          total: 0,
        });
      }
    }
  }

  return (
    <div>
      <h1>Add New Pot</h1>
      <p>
        Create a port to set savings targets. These can help keep you on track
        as you save from special purchases
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Pot Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="target">Target</label>
          <input type="number" name="target" />
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
        <button disabled={isPending} type="submit">
          Add Pot
        </button>
        <button
          onClick={() => {
            onCloseModal();
          }}
        >
          close
        </button>
      </form>
    </div>
  );
}
