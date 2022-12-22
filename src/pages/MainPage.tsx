import { Fab, Paper, Tooltip } from "@mui/material";
import { FC } from "react";
import { Card } from "../components/Card";
import { Chart } from "../components/Chart";
import { CustomersTable } from "../components/CustomersTable";
import { OpportunitiesTable } from "../components/OpportunitiesTable";
import { useCtx } from "../context/AppContext";

import { useGetOpportunitiesQuery } from "../services/api";

export const MainPage: FC = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError
  } = useGetOpportunitiesQuery();

  const { setOpenCustomerModal } = useCtx();

  return (
    <div style={{}}>
      <Card />
      <CustomersTable />
      <Tooltip title="Add new customer" arrow>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setOpenCustomerModal(true)}
        >
          Add
        </Fab>
      </Tooltip>
      <OpportunitiesTable
        data={data}
        isError={isError}
        isFetching={isFetching}
        isLoading={isLoading}
      />
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 240,
          m: "20px"
        }}
      >
        <Chart />
      </Paper>
    </div>
  );
};
