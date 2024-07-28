import { Box, Center, Image, Spinner } from "@chakra-ui/react";
import bear from "../../assets/bear.svg";

export const IsLoading = () => {
  return (
    <Center mt="32px">
      <Box>
        <Center width="100%">
          <Image src={bear} width="50%" mb="24px" />
        </Center>
        <Center width="100%">
          <Spinner size="lg" color="#FDCA72" />
        </Center>
      </Box>
    </Center>
  );
};
