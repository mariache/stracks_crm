import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip
} from "recharts";

import { Box, CircularProgress } from "@mui/material";

import { useGetOpportunitiesQuery } from "../services/api";

import { reduceOppToChartData } from "./utils";

export const Chart = () => {
  const { data = [], isLoading, isFetching } = useGetOpportunitiesQuery();

  const chartData = reduceOppToChartData(data);

  if (isLoading || isFetching)
    return (
      <Box
        sx={{ display: "flex" }}
        justifyContent="center"
        alignItems="center"
        height={270}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <ResponsiveContainer>
      <BarChart data={chartData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="status" type="category" />
        <YAxis
          dataKey="quantity"
          type="number"
          domain={[
            0,
            chartData.reduce((acc, current) => {
              return acc > current.quantity ? acc : current.quantity + 1;
            }, 0)
          ]}
        />
        <Tooltip />
        <Bar dataKey="quantity" fill="#66a7ed" />
      </BarChart>
    </ResponsiveContainer>
  );
};
