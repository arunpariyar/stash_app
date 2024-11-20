import "./BudgetOverview.css";
import OverviewHeader from "../../sharedComponents/OverviewHeader/OverviewHeader";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Plugin,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import mocks from "../../../dev-data/data.json";
import PotDisplay from "../../sharedComponents/PotDisplay/PotDisplay";
import utils from "../../../helper/utils";
//register to chart js
ChartJS.register(ArcElement, Tooltip, Legend);

export default function BudgetOverview() {
  //FIXME This is not the right way to go about it a completely different component or and abstracted compoent will be needed to solve this
  const budgets = mocks.budgets.map((budget) => {
    return {
      name: budget.category,
      theme: budget.theme,
      total: budget.maximum,
    };
  });

  const chartData = {
    labels: [],
    datasets: [
      {
        label: " Budget ",
        data: mocks.budgets.map((budget) => budget.maximum),
        backgroundColor: mocks.budgets.map((budget) => budget.theme),
        hoverOffset: 4,
      },
    ],
  };
  //FIXME need to add typescript support and also make sure that text say "of $975 Limit"

  const total = chartData.datasets[0].data.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const textCenter: Plugin<"doughnut"> = {
    id: "textCenter",
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = "bold 20px PublicSansRegular";
      // ctx.fillStyle = "re";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        utils.displayAsEuro(total),
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y + 10
      );
    },
  };

  const secondText: Plugin<"doughnut"> = {
    id: "secondText",
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = "bold 10px PublicSansRegular";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `of ${utils.displayAsEuro(total)} limit`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y - 20
      );
    },
  };

  return (
    <div className="budgets-overview--container">
      <OverviewHeader
        title="Budgets"
        link="budgets"
        linkText="See Details"
      ></OverviewHeader>

      <div className="budgets-overview--contents">
        <div className="chart">
          <Doughnut data={chartData} plugins={[textCenter, secondText]} />
        </div>
        <div className="all-budgets">
          {budgets.map((pot) => (
            <PotDisplay key={`${pot.name}-${pot.theme}`} pot={pot}></PotDisplay>
          ))}
        </div>
      </div>
    </div>
  );
}
