import { Box, Button, Paper, Typography } from "@mui/material";

import { Header } from "./Header";

export const Card = () => {
  return (
    <Box display="flex" gap={1}>
      <Paper sx={{ width: "250px", p: 2, m: 2 }}>
        <Header title="Closed Won" titleVariant="h5" />
        <Typography component="p" variant="h4">
          1
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {`on ${new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}`}
        </Typography>
        <div>
          <Button color="primary" href="#" onClick={() => {}}>
            View balance
          </Button>
        </div>
      </Paper>
      <Paper sx={{ width: "250px", p: 2, m: 2 }}>
        <Header title="Closed Lost" titleVariant="h5" />{" "}
        <Typography component="p" variant="h4">
          1
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {`on ${new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}`}
        </Typography>
        <div>
          <Button color="primary" href="#" onClick={() => {}}>
            View balance
          </Button>
        </div>
      </Paper>
      <Paper sx={{ width: "250px", p: 2, m: 2 }}>
        <Header title="New" titleVariant="h5" />
        <Typography component="p" variant="h4">
          2
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {`on ${new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}`}
        </Typography>
        <div>
          <Button color="primary" href="#" onClick={() => {}}>
            View balance
          </Button>
        </div>
      </Paper>
    </Box>
  );
};
