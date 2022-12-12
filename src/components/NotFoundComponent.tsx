import { Box, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";

export const NotFoundComponent: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(routes.customers.basePath);
    }, 4000);
  }, []);

  return (
    <Box
      mt={2}
      display="flex"
      flexDirection="column"
      gap={1}
      justifyContent="center"
      width="100%"
    >
      <Typography variant="h5" fontWeight="semibold">
        The page you are looking for does not exist
      </Typography>
      <Typography fontStyle="italic">
        We are redirecting you to the main page
      </Typography>
    </Box>
  );
};
