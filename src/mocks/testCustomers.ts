import { CustomerStatus } from "../constants";
import { Customer } from "../types/Index";

export const testCustomers: Customer[] = [
  {
    id: 1,
    name: "Myca Blanchflower",
    createdDate: new Date("2022-10-07T11:18:00"),
    email: "hscherme5a@aol.com",
    phoneNumber: "(555) 857-1351",
    status: CustomerStatus.Active,
  },
  {
    id: 2,
    name: "Yank Cassell",
    createdDate: new Date("2022-12-02T22:30:00"),
    email: "lraffels43@blogger.com",
    phoneNumber: "(555) 386-1746",
    status: CustomerStatus.NonActive,
  },
  {
    id: 3,
    name: "Gilemette Stachini",
    createdDate: new Date("2022-11-11T07:35:00"),
    email: "acarnoghan25@economist.com",
    phoneNumber: "(555) 922-4688",
    status: CustomerStatus.Lead,
  },
  {
    id: 4,
    name: "Valerye Sleite",
    createdDate: new Date("2022-10-26T11:00:00"),
    email: "ederobertis2j@blogspot.com",
    phoneNumber: "(555) 530-5733",
    status: CustomerStatus.Lead,
  },
  {
    id: 5,
    name: "Renato Eccleston",
    createdDate: new Date("2022-10-25T11:00:00"),
    email: "ssiddons10@sfgate.com",
    phoneNumber: "(555) 282-3846",
    status: CustomerStatus.Lead,
  },
  {
    id: 6,
    name: "Katie Texton",
    createdDate: new Date("2022-10-05T12:41:00"),
    email: "pheindricka@zimbio.com",
    phoneNumber: "(555) 610-1821",
    status: CustomerStatus.Lead,
  },
  {
    id: 7,
    name: "Quinlan Albin",
    createdDate: new Date("2022-10-21T09:56:00"),
    email: "cfendt3j@narod.ru",
    phoneNumber: "(555) 218-5170",
    status: CustomerStatus.Active,
  },
];
