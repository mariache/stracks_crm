import {
  Card,
  CardHeader,
  Avatar,
  Box,
  Typography,
  Fab,
  Tooltip
} from "@mui/material";

import { FC } from "react";
import { useParams } from "react-router-dom";
import { ErrorComponent } from "../components/ErrorComponent";
import { OpportunitiesTable } from "../components/OpportunitiesTable";
import { StatusChip } from "../components/StatusChip";
import { capitalizeFirst } from "../components/utils";
import { useCtx } from "../context/AppContext";
import {
  useGetCustomerByIdQuery,
  useGetCustomerOpportunitiesQuery
} from "../services/api";

export const CustomerPage: FC = () => {
  // could be used from currentCustomer from context
  const { customerId } = useParams();
  const { data: customer } = useGetCustomerByIdQuery(Number(customerId));
  const {
    data: opportunities,
    isLoading,
    isError,
    isFetching
  } = useGetCustomerOpportunitiesQuery(Number(customerId));

  const { setOpenOpModal } = useCtx();

  return customer ? (
    <Box pt={2}>
      <Box display="flex" justifyContent="space-between">
        <Card sx={{ width: 450 }}>
          <CardHeader
            avatar={<Avatar>{customer.name.charAt(0).toUpperCase()}</Avatar>}
            title={
              <Box sx={{ display: "flex" }} justifyContent="space-between">
                <Typography variant="h6">{customer.name}</Typography>
                <StatusChip
                  label={capitalizeFirst(customer.status)}
                  status={customer.status}
                />
              </Box>
            }
            subheader={
              <>
                <Typography variant="subtitle2">{customer.email}</Typography>
                <Typography variant="subtitle2">
                  {customer?.phoneNumber}
                </Typography>
                <Typography variant="subtitle2">
                  {customer.createdDate.toString().split("T")[0]}
                </Typography>
              </>
            }
          />
        </Card>
        <Tooltip title="Add new opportunity" arrow>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              setOpenOpModal(true);
            }}
          >
            Add
          </Fab>
        </Tooltip>
      </Box>
      <OpportunitiesTable
        data={opportunities ?? []}
        isError={isError}
        isFetching={isFetching}
        isLoading={isLoading}
      />
    </Box>
  ) : (
    <ErrorComponent />
  );
};
