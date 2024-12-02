import styles from "./AddNewPotForm.module.css";
import utils from "../../../helper/utils";

import { FormEvent } from "react";
import toast from "react-hot-toast";

import { z } from "zod";
import useNewPot from "../../../hooks/Pots/useNewPot";
import FormActionBtn from "../../Buttons/FormActionBtn/FormActionBtn";

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
      <form className={styles.formInfo} onSubmit={(e) => handleSubmit(e)}>
        <p className={styles.title}>Add New Pot</p>
        <p className={styles.summary}>
          Create a pot to set savings targets. These can help keep you on track
          as you save from special purchases.
        </p>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="name">
            Pot Name
          </label>
          <input
            placeholder="e.g. Rainy Days"
            className={styles.input}
            type="text"
            name="name"
          />
          <div className={styles.remaining}>30 characters left</div>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="target">
            Target
          </label>
          <div className={styles.signedInputRow}>
            <div className={styles.euroSign}>€</div>
            <input
              className={styles.signedInput}
              placeholder="e.g. 2000"
              type="number"
              name="target"
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="theme">
            Theme
          </label>

          <select id="theme" name="theme">
            {utils.colors
              .filter((color) => color.used === false)
              .map((color) => (
                <option key={color.value} value={color.value}>
                  <div> {color.name}</div>
                </option>
              ))}
          </select>
        </div>
        <FormActionBtn label="Add Pot" isPending={isPending}></FormActionBtn>
      </form>
    </div>
  );
}
