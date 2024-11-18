import "./BudgetOverview.css";
import OverviewHeader from "../../sharedComponents/OverviewHeader/OverviewHeader";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
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
      amount: budget.maximum,
    };
  });

  console.log(budgets);
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
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bold 20px PublicSansRegular";
      // ctx.fillStyle = "re";
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.fillText(
        utils.displayAsEuro(
          data.datasets[0].data.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          )
        ),
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y + 10
      );
    },
  };

  const secondText = {
    id: "secondText",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bold 10px PublicSansRegular";
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.fillText(
        `of ${utils.displayAsEuro(
          data.datasets[0].data.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          )
        )} limit`,
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
