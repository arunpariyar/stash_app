import OverviewHeader from "../../sharedComponents/OverviewHeader/OverviewHeader";
import styles from "./RecurringBills.module.css";
import BillRow from "./BillRow/BillRow";

export function RecurringBills() {
  const mockData = [
    { title: "Paid Bills", amount: 190, theme: "#f2cdac" },
    {
      title: "Total Upcoming",
      amount: 190.48,
      theme: "#277c78",
    },
    {
      title: "Due Soon",
      amount: 59.98,
      theme: "#82c9d7",
    },
  ];

  return (
    <div className={styles.container}>
      <OverviewHeader
        title="Recurring Bills"
        link="bills"
        linkText="See Details"
      ></OverviewHeader>
      <div className={styles.billsContainer}>
        {mockData.map((bill) => (
          <BillRow key={crypto.randomUUID()} bill={bill}></BillRow>
        ))}
      </div>
    </div>
  );
}
