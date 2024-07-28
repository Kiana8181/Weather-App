import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box minHeight="100vh" minWidth="100vw" bg="#26293A">
      <Outlet />
    </Box>
  );
};

export default Layout;
