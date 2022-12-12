import { CustomerStatus, OpportunityStatus } from "../constants";

export interface Customer {
  id: number;
  name: string;
  email: string;
  createdDate: Date;
  phoneNumber: string;
  status: CustomerStatus;
}

export interface AddCustomer extends Omit<Customer, "id" | "status"> {
  status: string;
}

export interface Opportunity {
  status: OpportunityStatus;
  customerId: number;
  name: string;
  id: number;
}

export interface AddOpportunity
  extends Omit<Opportunity, "id" | "status" | "customerId"> {
  status: string;
}
