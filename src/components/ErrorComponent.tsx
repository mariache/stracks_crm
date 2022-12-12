import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const ErrorComponent: FC = () => {
  return (
    <Box>
      <Typography
        data-testid="error"
        color="textSecondary"
        variant="subtitle1"
        align="center"
      >
        An error occured...
      </Typography>
    </Box>
  );
};
