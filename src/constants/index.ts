// @TO DO if necessary
export const OPP_STATUS_NU = {
  closedLost: "Closed Lost",
  closedWon: "Closed Won",
  new: "New"
} as const;

// @TO DO if necessary
export type OpportunityStatusNU = keyof typeof OPP_STATUS_NU;

export enum OpportunityStatus {
  ClosedLost = "Closed Lost",
  ClosedWon = "Closed Won",
  New = "New"
}

export enum IncorrectOpportunityStatus {
  ClosedLost = "closedLost",
  ClosedWon = "closedWon",
  New = "new"
}

export enum CustomerStatus {
  NonActive = "non-active",
  Active = "active",
  Lead = "lead"
}

// @TO DO if necessary
export const Labels: { [key: string]: string } = {
  new: "New",
  closedWon: "Closed Won",
  closedLost: "Closed Lost"
};
