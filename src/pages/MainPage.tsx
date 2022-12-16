import { Fab, Tooltip } from "@mui/material";
import { FC, useState } from "react";
import { Chart } from "../components/Chart";
import { CustomerModal } from "../components/CustomerModal";
import { CustomersTable } from "../components/CustomersTable";
import { OpportunitiesTable } from "../components/OpportunitiesTable";

import { useGetOpportunitiesQuery } from "../services/api";

export const MainPage: FC = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError
  } = useGetOpportunitiesQuery();
  const [customerModal, setCustomerModal] = useState(false);
  return (
    <div style={{}}>
      <CustomersTable setOpen={() => setCustomerModal(true)} />
      <Tooltip title="Add new customer" arrow>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setCustomerModal(true)}
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
      <CustomerModal open={customerModal} setOpen={setCustomerModal} />
      <Chart />
    </div>
  );
};
