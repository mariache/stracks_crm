import { FC, useState } from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridRenderCellParams,
  GridRowId,
  GridRowParams
} from "@mui/x-data-grid";
import { Alert, Box, Snackbar } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import {
  useDeleteCustomerOpportunityMutation,
  useGetCustomersQuery
} from "../services/api";

import { Header } from "./Header";
import { Opportunity } from "../types/Index";
import { StatusChip } from "./StatusChip";
import { getFormattedOpportunitiesStatus } from "./utils";
import { ErrorComponent } from "./ErrorComponent";
import { NowRowComponent } from "./NowRowComponent";
import { useCtx } from "../context/AppContext";

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
  isError
}) => {
  const { data: customersData = [] } = useGetCustomersQuery();
  const { setEditMode, setOpportunity, currentOpportunity, setOpenOpModal } =
    useCtx();

  const [onHandleDelete] = useDeleteCustomerOpportunityMutation();

  const [showToast, setShowToast] = useState<boolean>(false);

  if (isError) return <ErrorComponent />;

  const onDelete = (id: GridRowId, opId: number) => {
    // eslint-disable-next-line no-alert
    if (confirm("Are you sure?")) {
      onHandleDelete({ id, opId });
      setShowToast(true);
    }
  };

  const onEditClick = (opportunity: Opportunity) => {
    setOpenOpModal(true);
    setEditMode(true);
    setOpportunity(opportunity);
  };

  const columns: GridColumns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1
    },
    {
      field: "customerId",
      headerName: "Customer name",
      flex: 1,
      renderCell: (params: GridRenderCellParams<Opportunity>) => {
        return (
          <Box>
            {/* Parsing as a number beacuse in the response 
          the types of ids are mixed up  
          and presented as string and numbers */}
            {customersData.find(x => x.id === Number(params.row.customerId))
              ?.name ?? (
              <Box fontStyle="italic" color="#ccc">
                {/* Placeholder here because in the response some Opportunuties don't have customers ids */}
                No customer associated
              </Box>
            )}
          </Box>
        );
      }
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
      }
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: (params: GridRowParams<Opportunity>) => {
        return [
          <GridActionsCellItem
            key="editCustomerAction"
            showInMenu
            label="Edit"
            className="textPrimary"
            onClick={() => {
              onEditClick(params.row);
            }}
            color="inherit"
            icon={<Edit />}
          />,
          <GridActionsCellItem
            key="deleteCustomerAction"
            showInMenu
            onClick={() => {
              if (currentOpportunity) {
                onDelete(params.id, currentOpportunity.id);
              }
            }}
            label="Delete"
            color="inherit"
            icon={<Delete />}
          />
        ];
      }
    }
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
            borderBottom: "none"
          },
          "& .MuiDataGrid-root .MuiDataGrid-cell:focus": {
            outline: "none"
          }
        }}
      >
        <DataGrid
          loading={isLoading || isFetching}
          onSelectionModelChange={ids => {
            const selected = data.find(customer => customer.id === ids[0]);
            if (selected) {
              setOpportunity(selected);
            }
          }}
          rows={data}
          components={{
            NoRowsOverlay: NowRowComponent
          }}
          columns={columns}
        />
        {/** @TO DO create a new component */}
        <Snackbar
          open={showToast}
          autoHideDuration={3000}
          onClose={() => setShowToast(false)}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Opportunity has been removed!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};
