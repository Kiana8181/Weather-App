import {
  Box,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Switch,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import SearchInput from "./SearchInput";
import useWeatherQueryStore from "./store";

const Navbar = () => {
  const {
    weatherQuery: { unit },
    setUnit,
  } = useWeatherQueryStore();

  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  return (
    <SimpleGrid columns={12} spacing={{ base: "4px", lg: "24px" }}>
      <GridItem my="auto" colSpan={{ base: 2, lg: 1 }}>
        <Image src={logo} alt="logo" />
      </GridItem>
      <GridItem colSpan={{ base: 8, lg: 10 }} my="auto">
        <Box width="100%" height="100%">
          <SearchInput />
        </Box>
      </GridItem>
      <GridItem textAlign="end" my="auto" colSpan={{ base: 2, lg: 1 }}>
        <Flex direction="column" height="100%" width="100%">
          <Switch
            size="lg"
            isChecked={unit === "metric"}
            onChange={toggleUnit}
          />
          <Text color="#FFFFFF" fontWeight="bold" mt="8px">
            {unit === "metric" ? "Celsius" : "Fahrenheit"}
          </Text>
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
};

export default Navbar;
