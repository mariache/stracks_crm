import {
  CustomerStatus,
  IncorrectOpportunityStatus,
  OpportunityStatus
} from "../constants";
import { OppChartData, Opportunity } from "../types/Index";

/**
 *
 * @param status CustomerStatus or OpportunitiesStatus
 * @returns value to be used as Chip's color
 */
export const getColor = (
  status: string
):
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined => {
  switch (status) {
    case CustomerStatus.Lead:
      return "warning";

    case CustomerStatus.Active:
      return "info";

    case CustomerStatus.NonActive:
      return "default";

    case OpportunityStatus.ClosedLost:
    case IncorrectOpportunityStatus.ClosedLost:
      return "error";

    case OpportunityStatus.ClosedWon:
    case IncorrectOpportunityStatus.ClosedWon:
      return "success";

    case OpportunityStatus.New:
    case IncorrectOpportunityStatus.New:
      return "secondary";

    default:
      return "default";
  }
};

/**
 * Makes first letter of the word capital
 * @param value
 * @returns string with first letter capital
 */
export const capitalizeFirst = (value: string): string => {
  const split = value.split("-");
  if (split.length > 1) {
    return split.map(x => capitalizeFirst(x)).join("-");
  }
  return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
};

/**
 * Function to format Opportunities status and display as described in the task
 * Status: “New”, “Closed Won”, “Closed Lost”
 *
 * As a response we retrieve different statuses e.g. "closedWon", "closedLost", “Closed Won”, “Closed Lost”
 * all the manipulations below are just to display visualy consistent labels
 *
 * @param status opportunuty status
 *
 * @returns formatted label to display
 */
export const getFormattedOpportunitiesStatus = (status: string) => {
  const lower = status.split(" ").join("").toLowerCase();

  if (lower.includes("closed")) {
    const result = `${lower.substring(0, 6)} ${lower.substring(
      6,
      lower.length
    )}`;

    return result
      .split(" ")
      .map(x => capitalizeFirst(x))
      .join(" ");
  }
  return capitalizeFirst(lower);
};

/**
 * function to check that every property in object has the value
 * @param obj
 * @returns true if all property are defined
 */
export const isAllDefined = <K extends object>(obj: K): boolean => {
  return Object.values(obj).every(x => x);
};

/**
 * function to check email validity
 * @param email
 * @returns true if email is in correct format
 */
export const isValidEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};

export function reduceOppToChartData(arr: Opportunity[]): OppChartData[] {
  const counts: { [key: string]: number } = {};

  arr.forEach(obj => {
    const { status } = obj;
    if (counts[status]) {
      counts[status] += 1;
    } else {
      counts[status] = 1;
    }
  });

  return Object.entries(counts).map(([status, quantity]) => ({
    status,
    quantity
  }));
}

export function reduceOppToDataset(arr: Opportunity[]) {
  const counts: { [key: string]: number } = {};

  arr.forEach(obj => {
    const { status } = obj;
    if (counts[status]) {
      counts[status] += 1;
    } else {
      counts[status] = 1;
    }
  });

  return Object.entries(counts).map(([status, quantity]) => [status, quantity]);
}
