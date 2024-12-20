import styles from "./WithdrawMoney.module.css";
import utils from "../../../helper/utils";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import FormTitle from "../FormTitle/FormTitle";
import FormSummary from "../FormSummary/FormSummary";
import { z } from "zod";

import FormActionBtn from "../../Buttons/FormActionBtn/FormActionBtn";
import { Pot } from "../../../models/pot";
import useWithdrawPot from "../../../hooks/Pots/useWithdrawMoney";

const addFormSchema = z.object({
  amount: z.number({ coerce: true }),
});

interface WithdrawMoneyFormProps {
  pot: Pot;
  onCloseModal: () => void;
}

export default function WithdrawMoneyForm({
  pot,
  onCloseModal,
}: WithdrawMoneyFormProps) {
  const { mutate, isPending } = useWithdrawPot({ onCloseModal });

  const summary =
    "Please specify the amount of money you wish to withdraw from your pot. The bar will allow you to see the withdrawal ✨";

  const [amountToAdd, setAmountToAdd] = useState(5);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountToAdd(Number(e.target.value));
  };
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData);
    const result = addFormSchema.safeParse(formValues);
    if (result.success) {
      if (!result.data.amount) {
        toast.error("Please enter details correctly");
      } else {
        mutate({ id: pot.id, amount: result.data.amount });
      }
    }
  }

  return (
    <div>
      <form className={styles.formInfo} onSubmit={(e) => handleSubmit(e)}>
        <FormTitle> Withdraw from '{pot.name}'</FormTitle>
        <FormSummary summary={summary}></FormSummary>

        <div className={styles.newAmountContainer}>
          <p className={styles.newAmount}>New Amount</p>
          <p className={styles.amount}>
            {utils.displayAsEuro(Number(pot.total) - amountToAdd)}
          </p>
        </div>
        <div className={styles.progressDetails}>
          <div className={styles.progressBarWrapper}>
            <progress
              className={styles.progressBar}
              style={{ accentColor: pot.theme }}
              data-accent={pot.theme}
              max={100}
              value={`${utils.calcPercentage(
                Number(pot.total) - Number(amountToAdd),
                pot.target
              )}`}
            ></progress>
          </div>
          <div className={styles.potTargetDetails}>
            <p className={styles.targetPercentage}>{`${utils.calcPercentage(
              Number(pot.total) + Number(amountToAdd),
              pot.target
            )}%`}</p>
            <p className={styles.targetTotal}>{`Target of ${utils.displayAsEuro(
              pot.target
            )}`}</p>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="amount">
            Amount to add
          </label>
          <div className={styles.signedInputRow}>
            <div className={styles.euroSign}>€</div>
            <input
              className={styles.signedInput}
              placeholder="e.g. 2000"
              type="number"
              name="amount"
              min="1"
              defaultValue={amountToAdd}
              onChange={handleChange}
            />
          </div>
        </div>

        <FormActionBtn
          label="Confirm Withdrawal"
          isPending={isPending}
        ></FormActionBtn>
      </form>
    </div>
  );
}
