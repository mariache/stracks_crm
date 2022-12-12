import { FC } from "react";
import { useGetCustomersQuery } from "../services/api";
import { DataGrid, GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import { Header } from "./Header";
import { Opportunity } from "../types/Index";
import { StatusChip } from "./StatusChip";
import { getFormattedOpportunitiesStatus } from "./utils";
import { ErrorComponent } from "./ErrorComponent";

type OpportunitiesTableProps = {
  data: Opportunity[];
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
};

export const OpportunitiesTable: FC<OpportunitiesTableProps> = ({
  data = [],
  isLoading,
  isFetching,
  isError,
}) => {
  const {
    data: customersData = [],
    isLoading: isCustomerLoading,
    isFetching: isCustomerFetching,
    isError: isCustomerError,
  } = useGetCustomersQuery();

  if (isError) return <ErrorComponent />;

  const columns: GridColumns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "customerId",
      headerName: "Customer name",
      flex: 1,
      renderCell: (params: GridRenderCellParams<Opportunity>) => {
        return (
          <Box>
            {/*Parsing as a number beacuse in the response 
          the types of ids are mixed up  
          and presented as string and numbers*/}
            {customersData.find((x) => x.id === Number(params.row.customerId))
              ?.name ?? (
              <Box fontStyle="italic" color={"#ccc"}>
                {/*Placeholder here because in the response some Opportunuties don't have customers ids*/}
                No customer associated
              </Box>
            )}
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      width: 200,
      renderCell: (params: GridRenderCellParams<Opportunity>) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            <StatusChip
              status={params.row.status}
              label={getFormattedOpportunitiesStatus(params.row.status)}
            />
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Sales"
        titleVariant="h5"
        subtitle="List of all current opportunities"
        subtitleVariant="h6"
      />
      <Box
        m="12px 0 0 0"
        height="50vh"
        sx={{
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-root .MuiDataGrid-cell:focus": {
            outline: "none",
          },
        }}
      >
        <DataGrid
          loading={isLoading || isFetching}
          rows={data}
          columns={columns}
        />
      </Box>
    </Box>
  );
};
