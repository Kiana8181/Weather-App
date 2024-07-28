import { Box, Center, Image, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import notFound from "../assets/404-Error.svg";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Center height="100vh" width="100vw" bg="#26293A">
        <Box width="100%">
          <Center>
            <Image width="35%" src={notFound} alt="not-found" />
          </Center>
          <Center>
            <Text fontSize="5xl" textAlign="center" color="#FFFFFF">
              {isRouteErrorResponse(error)
                ? "invalide page"
                : "Sorry, an unexpected error has occurred."}
            </Text>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default ErrorPage;
