import { Button } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import { useState } from "react";

import { useGetOpportunitiesQuery } from "../services/api";

import { reduceOppToChartData, reduceOppToDataset } from "./utils";

type BarOption = "bar" | "pie";

export const Chart = () => {
  const [chartOption, setChartOption] = useState<BarOption>("pie");
  const { data = [] } = useGetOpportunitiesQuery();

  const chartData = reduceOppToChartData(data);

  const dataSet = reduceOppToDataset(data);

  const dataset = {
    dimensions: ["Opportunity", "score"],
    source: dataSet
  };

  const option = {
    bar: {
      dataset,
      xAxis: {
        type: "category",
        data: chartData.map(x => x.status)
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: chartData.map(x => x.quantity),
          type: "bar"
        }
      ],
      colorBy: "data",
      universalTransition: true,
      animationDurationUpdate: 1000
    },
    pie: {
      dataset: [dataset],
      series: [
        {
          type: "pie",
          id: "Score",
          radius: [0, "50%"],
          universalTransition: true,
          animationDurationUpdate: 1000
        }
      ]
    }
  };

  return (
    <>
      <Button
        onClick={() => setChartOption(prev => (prev === "pie" ? "bar" : "pie"))}
      >
        Change the chart view
      </Button>
      <ReactEcharts option={option[chartOption]} />
    </>
  );
};
