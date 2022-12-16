import { Box, Divider } from "@mui/material";
import { FC } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ height: "content-fit" }}>
      <Navbar />
      <Box p={2}>
        <Header
          title="STRACKS_CRM"
          titleVariant="h4"
          subtitle="Spidertracks technical task"
          subtitleVariant="h6"
        />
        <Divider />
        {children}
      </Box>
    </div>
  );
};
