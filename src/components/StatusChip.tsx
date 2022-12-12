import { Chip } from "@mui/material";
import { FC } from "react";
import { getColor } from "./utils";

type StatusChipProps = {
  status: string;
  label: string;
};

export const StatusChip: FC<StatusChipProps> = ({ status, label }) => {
  const color = getColor(status);

  return <Chip sx={{ ml: "5px" }} label={label} color={color} />;
};
