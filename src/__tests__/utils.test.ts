import { describe, it } from "vitest";
import {
  capitalizeFirst,
  getColor,
  getFormattedOpportunitiesStatus,
  isAllDefined,
  isValidEmail
} from "../components/utils";
import { CustomerStatus } from "../constants";

describe("getColor", () => {
  it("returns 'warning' color when called with  CustomerStatus.Lead", () => {
    const expectedResult = "warning";
    const result = getColor(CustomerStatus.Lead);
    expect(result).toBe(expectedResult);
  });
  it("returns 'default' color when called with  non existing CustomerStatus", () => {
    const expectedResult = "default";
    const result = getColor("test color");
    expect(result).toBe(expectedResult);
  });
});

describe("capitalizeFirst", () => {
  it("returns string with first capital letter", () => {
    const expectedResult = "Test";
    const result = capitalizeFirst("test");
    expect(result).toBe(expectedResult);
  });
  it("returns 2 string colorwith first capital lettes", () => {
    const expectedResult = "New-Dev";
    const result = capitalizeFirst("new-dev");
    expect(result).toBe(expectedResult);
  });
});

describe("getFormattedOpportunitiesStatus", () => {
  it("returns string with first capital letter", () => {
    const expectedResult = "Closed Won";
    const result = getFormattedOpportunitiesStatus("closedWon");
    expect(result).toBe(expectedResult);
  });
  it("returns 2 string with first capital lettes", () => {
    const expectedResult = "Closed Won";
    const result = getFormattedOpportunitiesStatus("Closed Won");
    expect(result).toBe(expectedResult);
  });
});

describe("isValidEmail", () => {
  it("returns false when email is invalid", () => {
    const result = isValidEmail("testing_eamil@");
    expect(result).toBeFalsy();
  });
  it("returns false when email doesn't  domain name", () => {
    const result = isValidEmail("testing_eamil@.com");
    expect(result).toBeFalsy();
  });
  it("returns false when email is invalid and doesn't have '@'", () => {
    const result = isValidEmail("testing_eamil.com");
    expect(result).toBeFalsy();
  });
  it("returns true when email is in valid format", () => {
    const result = isValidEmail("testing_eamil@mail.com");
    expect(result).toBeTruthy();
  });
});

describe("isAllDefined", () => {
  it("returns false when some properties do not have value is invalid", () => {
    const result = isAllDefined({ id: 1, name: "" });
    expect(result).toBeFalsy();
  });
  it("returns false when all properties do not have value is invalid", () => {
    const result = isAllDefined({ id: "", name: "" });
    expect(result).toBeFalsy();
  });
  it("returns true when all properties have values", () => {
    const result = isAllDefined({ id: 1, name: "Sierra" });
    expect(result).toBeTruthy();
  });
});
