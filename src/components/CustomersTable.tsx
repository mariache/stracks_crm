import { FC, useState } from "react";
import {
  useDeleteCustomerMutation,
  useGetCustomersQuery,
} from "../services/api";
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridRenderCellParams,
  GridRowId,
  GridRowParams,
} from "@mui/x-data-grid";
import { Alert, Box, Link, Snackbar } from "@mui/material";

import { Header } from "./Header";
import { Customer } from "../types/Index";
import { StatusChip } from "./StatusChip";
import { capitalizeFirst } from "./utils";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "./ErrorComponent";
import { useCtx } from "../context/AppContext";

type CustomerTableProps = {
  setOpen: () => void;
};

export const CustomersTable: FC<CustomerTableProps> = ({ setOpen }) => {
  const { data = [], isLoading, isFetching, isError } = useGetCustomersQuery();
  const [onHandleDelete] = useDeleteCustomerMutation();
  const { setEditMode, setCustomer } = useCtx();

  const [pageSize, setPageSize] = useState<number>(25);
  const [showToast, setShowToast] = useState<boolean>(false);
  const navigate = useNavigate();

  if (isError) return <ErrorComponent />;

  const onDelete = (id: GridRowId) => {
    if (confirm("Are you sure?")) {
      onHandleDelete(id);
      setShowToast(true);
    }

    return;
  };

  const onEditClick = (customer: Customer) => {
    setOpen();
    setEditMode(true);
    setCustomer(customer);
  };

  const columns: GridColumns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params: GridRenderCellParams<Customer>) => {
        return (
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              navigate(`/customers/${params.row.id}`);
            }}
          >
            {params.row.name}
          </Link>
        );
      },
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "createdDate",
      headerName: "Created date",
      width: 170,
      type: "number",
      headerAlign: "center",
      renderCell: (params: GridRenderCellParams<Customer>) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            {params.row.createdDate.toString().split("T")[0]}
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      editable: true,
      width: 200,
      renderCell: (params: GridRenderCellParams<Customer>) => {
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
              label={capitalizeFirst(params.row.status)}
            />
          </Box>
        );
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: (params: GridRowParams<Customer>) => {
        return [
          <GridActionsCellItem
            showInMenu
            label="Edit"
            className="textPrimary"
            onClick={() => onEditClick(params.row)}
            color="inherit"
          />,
          <GridActionsCellItem
            showInMenu
            label="Delete"
            onClick={() => {
              onDelete(params.id);
            }}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Customers"
        titleVariant="h5"
        subtitle="List of all customers"
        subtitleVariant="h6"
      />
      <Box
        m="20px 0 0 0"
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
          pageSize={pageSize}
          onPageSizeChange={(selectedPageSize) => setPageSize(selectedPageSize)}
        />

        <Snackbar
          open={showToast}
          autoHideDuration={3000}
          onClose={() => setShowToast(false)}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Customer has been removed!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};
