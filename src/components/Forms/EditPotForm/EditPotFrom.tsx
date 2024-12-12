import styles from "../AddNewPotForm/AddNewPotForm.module.css";
import utils from "../../../helper/utils";
import { GetColorName } from "hex-color-to-color-name";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import FormTitle from "../FormTitle/FormTitle";
import FormSummary from "../FormSummary/FormSummary";
import { z } from "zod";
import FormActionBtn from "../../Buttons/FormActionBtn/FormActionBtn";
import { Pot } from "../../../models/pot";
import useUpdatePot from "../../../hooks/Pots/useUpdatePot";

const addPotSchema = z.object({
  name: z.string(),
  theme: z.string(),
  target: z.number({ coerce: true }),
});

interface AddNewPotFormProps {
  pot: Pot;
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

export default function EditPotForm({ pot, onCloseModal }: AddNewPotFormProps) {
  const { mutate, isPending } = useUpdatePot({ onCloseModal });

  const summary =
    "Create a pot to set savings targets. These can help keep you on track as you save from special purchases";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData);
    const result = addPotSchema.safeParse(formValues);
    //FIX must change things here to only allow for name target and theme to change and not the target amount
    if (result.success) {
      if (!result.data.name || !result.data.target || !result.data.theme) {
        toast.error("Please enter details correctly");
      } else {
        mutate({
          id: pot.id,
          name: result.data.name,
          target: result.data.target,
          theme: result.data.theme,
        });

        (e.target as HTMLFormElement).reset();
      }
    }
  }

  return (
    <div>
      <form className={styles.formInfo} onSubmit={(e) => handleSubmit(e)}>
        <FormTitle>Edit Pot</FormTitle>
        <FormSummary summary={summary}></FormSummary>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="name">
            Pot Name
          </label>
          <input
            placeholder="e.g. Rainy Days"
            className={styles.input}
            type="text"
            name="name"
            defaultValue={pot.name}
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
              defaultValue={pot.target}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="theme">
            Theme
          </label>

          <select className={styles.styleSelect} id="theme" name="theme">
            {utils.colors
              .filter((color) => color.used === false)
              .map((color) => (
                <option
                  key={color.value}
                  defaultValue={GetColorName(pot.theme)}
                >
                  {GetColorName(color.value)}
                </option>
              ))}
          </select>
        </div>
        <FormActionBtn label="Edit Pot" isPending={isPending}></FormActionBtn>
      </form>
    </div>
  );
}
