import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
  Button
} from "@mui/material";
import React, { Dispatch, FC, useState } from "react";
import { OpportunityStatus } from "../constants";
import { useAddCustomerOpportunitiyMutation } from "../services/api";
import { AddOpportunity } from "../types/Index";

type OpportunityModalProps = {
  open: boolean;
  customerId: number;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

const EMPTY_OPPORTUNITY = {
  name: "",
  status: ""
};

export const OpportunityModal: FC<OpportunityModalProps> = ({
  open,
  setOpen,
  customerId
}) => {
  const [addOpportunity] = useAddCustomerOpportunitiyMutation();
  const [opportunity, setOpportunity] =
    useState<AddOpportunity>(EMPTY_OPPORTUNITY);

  const newOpportunityIsValid = !!(
    opportunity &&
    opportunity.name &&
    opportunity.status
  );

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Add new opportunity</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To create an opportunity, please enter details here.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          required
          label="Name"
          type="text"
          value={opportunity?.name ?? ""}
          onChange={event =>
            setOpportunity({ ...opportunity, name: event.target.value })
          }
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            id="opportunitySelect"
            value={opportunity?.status ?? ""}
            required
            label="Status"
            onChange={event =>
              setOpportunity({ ...opportunity, status: event.target.value })
            }
          >
            <MenuItem value={OpportunityStatus.ClosedLost}>
              {OpportunityStatus.ClosedLost}
            </MenuItem>
            <MenuItem value={OpportunityStatus.ClosedWon}>
              {OpportunityStatus.ClosedWon}
            </MenuItem>
            <MenuItem value={OpportunityStatus.New}>
              {OpportunityStatus.New}
            </MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={!newOpportunityIsValid}
          color="primary"
          variant="outlined"
          onClick={() => {
            addOpportunity({
              name: opportunity?.name,
              status: opportunity?.status,
              customerId: Number(customerId)
            });

            setOpen(false);
            setOpportunity(EMPTY_OPPORTUNITY);
          }}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            setOpen(false);
            setOpportunity(EMPTY_OPPORTUNITY);
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
