import { Box, useDisclosure } from "@chakra-ui/react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { onOpen } = useDisclosure();

  return (
    <Box py={{ base: "28px", lg: "48px" }} px={{ base: "20px", lg: "60px" }}>
      <Navbar />
      <Content />
    </Box>
  );
};

export default Dashboard;
