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
import { FC, useState } from "react";
import { IncorrectOpportunityStatus, OpportunityStatus } from "../constants";
import { useCtx } from "../context/AppContext";
import { useAddCustomerOpportunityMutation } from "../services/api";
import { AddOpportunity } from "../types/Index";

const EMPTY_OPPORTUNITY = {
  name: "",
  status: ""
};

export const OpportunityModal: FC = () => {
  const [addOpportunity] = useAddCustomerOpportunityMutation();
  const [opportunity, setOpportunity] =
    useState<AddOpportunity>(EMPTY_OPPORTUNITY);

  const { currentCustomer, openOpModal, setOpenOpModal } = useCtx();

  const newOpportunityIsValid = !!(
    opportunity &&
    opportunity.name &&
    opportunity.status
  );

  return (
    <Dialog open={openOpModal} onClose={() => setOpenOpModal(false)}>
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
            <MenuItem value={IncorrectOpportunityStatus.ClosedLost}>
              {OpportunityStatus.ClosedLost}
            </MenuItem>
            <MenuItem value={IncorrectOpportunityStatus.ClosedWon}>
              {OpportunityStatus.ClosedWon}
            </MenuItem>
            <MenuItem value={IncorrectOpportunityStatus.New}>
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
            if (currentCustomer) {
              addOpportunity({
                name: opportunity?.name,
                status: opportunity?.status,
                customerId: Number(currentCustomer.id)
              });
            }

            setOpenOpModal(false);
            setOpportunity(EMPTY_OPPORTUNITY);
          }}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            setOpenOpModal(false);
            setOpportunity(EMPTY_OPPORTUNITY);
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
