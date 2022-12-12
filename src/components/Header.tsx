import { Box, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { FC } from "react";

type HeaderProps = {
  title: string;
  subtitle?: string;
  titleVariant?: Variant;
  subtitleVariant?: Variant;
};

export const Header: FC<HeaderProps> = ({
  title,
  subtitle,
  titleVariant,
  subtitleVariant
}) => {
  return (
    <Box mb="24px">
      <Typography
        variant={titleVariant || "h2"}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant={subtitleVariant || "h5"}>{subtitle}</Typography>
    </Box>
  );
};
