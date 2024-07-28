import {
  Box,
  Center,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useWeatherQueryStore from "./store";
import { WeatherData } from "../entities/WeatherData";
import { useEffect, useState } from "react";

interface Props {
  weatherData: WeatherData;
}

const MainInfo = ({ weatherData }: Props) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formattedTime);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const unit = useWeatherQueryStore((s) => s.weatherQuery.unit);

  return (
    <SimpleGrid columns={5} gap={4} py="24px" px="5%">
      <GridItem colSpan={2} my="auto">
        <Flex direction="column">
          <Text
            bgGradient="linear(to-tr, #FFFFFF ,#8C909C)"
            bgClip="text"
            fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
            fontWeight="extrabold"
            fontFamily="Gilroy-ExtraBold"
          >
            {weatherData.main.temp}°{unit === "metric" ? "C" : "F"}
          </Text>
          <Text
            color="#FDCA72"
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="bold"
            fontFamily="Gilroy-Regular"
          >
            {weatherData.name}, {weatherData.sys.country}
          </Text>
        </Flex>
      </GridItem>

      <GridItem>
        <Box>
          <Flex direction="column">
            <Center width="100%">
              <Image
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                height="80%"
                width="80%"
              />
            </Center>
            <Text
              textAlign="center"
              mx="auto"
              color="#FFFFFF"
              fontSize={{ base: "l", md: "xl", lg: "2xl" }}
              fontWeight="bold"
              fontFamily="Gilroy-Regular"
            >
              {weatherData.weather[0].description}
            </Text>
          </Flex>
        </Box>
      </GridItem>

      <GridItem colSpan={2} my="auto" alignContent="end">
        <Flex direction="column" alignItems="end">
          <Text
            color="#FFFFFF"
            fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
            fontWeight="extrabold"
            fontFamily="Gilroy-ExtraBold"
          >
            {time}
          </Text>
          <Text
            textAlign="center"
            color="#FDCA72"
            fontSize={{ base: "l", md: "xl", lg: "2xl" }}
            fontWeight="bold"
            fontFamily="Gilroy-Regular"
          >
            {new Date().toLocaleString("en-US", {
              weekday: "long",
              day: "2-digit",
              month: "short",
            })}
          </Text>
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
};

export default MainInfo;
