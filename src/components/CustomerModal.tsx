import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { CustomerStatus } from "../constants";
import { useCtx } from "../context/AppContext";
import {
  useAddCustomerMutation,
  useUpdateCustomerMutation
} from "../services/api";
import { AddCustomer, Customer } from "../types/Index";

const EMPTY_CUSTOMER = {
  name: "",
  email: "",
  status: "",
  phoneNumber: "",
  createdDate: new Date()
};

export const CustomerModal: FC = () => {
  const [addCustomer] = useAddCustomerMutation();
  const [updateCustomer] = useUpdateCustomerMutation();
  const {
    isEditing: isEditMode,
    currentCustomer,
    setCustomer: setCurrentCustomer,
    setEditMode,
    setOpenCustomerModal,
    openCustomerModal
  } = useCtx();
  const [customer, setCustomer] = useState<AddCustomer | Customer | undefined>(
    EMPTY_CUSTOMER
  );

  useEffect(() => {
    setCustomer(currentCustomer);
  }, [currentCustomer]);

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCustomer(
      customer
        ? { ...customer, [event.target.id]: event.target.value }
        : undefined
    );
  };

  const newCustomerIsValid = !!(
    customer &&
    customer.name &&
    customer.phoneNumber &&
    customer.email &&
    customer.status
  );

  return (
    <Dialog
      open={openCustomerModal}
      onClose={() => setOpenCustomerModal(false)}
    >
      <DialogTitle>{`${isEditMode ? "Edit" : "Add new"} customer`}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`To ${
            isEditMode ? "edit the" : "create a"
          } customer, please enter details here.`}
        </DialogContentText>
        <TextField
          autoFocus={!isEditMode}
          disabled={isEditMode}
          margin="dense"
          id="name"
          required
          label="Name"
          type="text"
          value={customer?.name ?? ""}
          onChange={onChangeHandler}
          fullWidth
        />
        <TextField
          disabled={isEditMode}
          margin="dense"
          id="email"
          required
          label="Email Address"
          type="email"
          value={customer?.email ?? ""}
          fullWidth
          onChange={onChangeHandler}
        />
        <TextField
          disabled={isEditMode}
          margin="dense"
          id="phoneNumber"
          required
          label="Phone number"
          type="string"
          value={customer?.phoneNumber ?? ""}
          fullWidth
          onChange={onChangeHandler}
        />
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            autoFocus={isEditMode}
            id="statusSelect"
            value={customer?.status ?? ""}
            required
            label="Status"
            onChange={event =>
              setCustomer(
                customer
                  ? { ...customer, status: event.target.value }
                  : undefined
              )
            }
          >
            <MenuItem value={CustomerStatus.Active}>
              {CustomerStatus.Active}
            </MenuItem>
            <MenuItem value={CustomerStatus.Lead}>
              {CustomerStatus.Lead}
            </MenuItem>
            <MenuItem value={CustomerStatus.NonActive}>
              {CustomerStatus.NonActive}
            </MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={!newCustomerIsValid}
          color="primary"
          variant="outlined"
          onClick={() => {
            if (currentCustomer && currentCustomer.id) {
              updateCustomer({
                name: customer?.name,
                id: currentCustomer.id,
                email: customer?.email,
                status: customer?.status,
                phoneNumber: customer?.phoneNumber,
                createdDate: isEditMode ? customer?.createdDate : new Date()
              });
            } else {
              addCustomer({
                name: customer?.name,
                email: customer?.email,
                status: customer?.status,
                phoneNumber: customer?.phoneNumber,
                createdDate: isEditMode ? customer?.createdDate : new Date()
              });
            }

            setCustomer(EMPTY_CUSTOMER);
            setOpenCustomerModal(false);
            setCurrentCustomer();
            setEditMode(false);
          }}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            setOpenCustomerModal(false);
            setCustomer(EMPTY_CUSTOMER);
            setCurrentCustomer();
            setEditMode(false);
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
