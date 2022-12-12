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
import { Dispatch, FC, useEffect, useState } from "react";
import { CustomerStatus } from "../constants";
import { useCtx } from "../context/AppContext";
import {
  useAddCustomerMutation,
  useUpdateCustomerMutation
} from "../services/api";
import { AddCustomer, Customer } from "../types/Index";

type CustomerModalProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

const EMPTY_CUSTOMER = {
  name: "",
  email: "",
  status: "",
  phoneNumber: "",
  createdDate: new Date()
};

export const CustomerModal: FC<CustomerModalProps> = ({ open, setOpen }) => {
  const [addCustomer] = useAddCustomerMutation();
  const [updateCustomer] = useUpdateCustomerMutation();
  const {
    isEditing: isEditMode,
    currentCustomer,
    setCustomer: setCurrentCustomer,
    setEditMode
  } = useCtx();
  const [customer, setCustomer] = useState<AddCustomer | Customer>(
    EMPTY_CUSTOMER
  );

  useEffect(() => {
    setCustomer(currentCustomer);
  }, [currentCustomer]);

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCustomer({ ...customer, [event.target.id]: event.target.value });
  };

  const newCustomerIsValid = !!(
    customer &&
    customer.name &&
    customer.phoneNumber &&
    customer.email &&
    customer.status
  );

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
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
              setCustomer({ ...customer, status: event.target.value })
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
            setOpen(false);
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
            setOpen(false);
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
