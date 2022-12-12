import { OpportunityStatus } from "../constants";
import { Opportunity } from "../types/Index";

export const testOpportunities: Opportunity[] = [
  {
    id: 1,
    customerId: 4,
    status: OpportunityStatus.ClosedWon,
    name: "New Phone",
  },
  {
    id: 2,
    customerId: 4,
    status: OpportunityStatus.New,
    name: "New Car",
  },
  {
    id: 3,
    customerId: 5,
    status: OpportunityStatus.ClosedLost,
    name: "Wants to buy a house",
  },
  {
    id: 4,
    customerId: 2,
    status: OpportunityStatus.New,
    name: "Subscription to food package",
  },
];
