import {
  Center,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { WeatherData } from "../entities/WeatherData";
import useWeatherQueryStore from "./store";
import windIcon from "../assets/wind.svg";
import humidityIcon from "../assets/humidity.svg";
import sunsetIcon from "../assets/sunset.svg";
import sunriseIcon from "../assets/sunrise.svg";

interface Props {
  weatherData: WeatherData;
}

const MoreInfo = ({ weatherData }: Props) => {
  const unit = useWeatherQueryStore((s) => s.weatherQuery.unit);

  const formatSpeed = (speed: number) => {
    return `${speed} ${unit === "metric" ? "meter/sec" : "miles/hour"}`;
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  };

  return (
    <SimpleGrid columns={2} gap="36px" p="24px">
      <GridItem>
        <Flex direction="column">
          <Image src={humidityIcon} width="25%" mx="auto" />
          <Text color="#FDCA72" fontWeight="bold" mx="auto" mt="4px">
            {weatherData.main.humidity}%
          </Text>
          <Text color="#FDCA72" mx="auto">
            Humidity
          </Text>
        </Flex>
      </GridItem>

      <GridItem>
        <Center height="100%">
          <Flex>
            <Image src={sunriseIcon} mr="16px" />
            <Center>
              <Flex direction="column">
                <Text color="#FDCA72" mx="auto">
                  Sunrise
                </Text>
                <Text color="#FDCA72" fontWeight="bold" mt="4px">
                  {formatTime(weatherData.sys.sunrise)}
                </Text>
              </Flex>
            </Center>
          </Flex>
        </Center>
      </GridItem>

      <GridItem>
        <Flex direction="column">
          <Image src={windIcon} width="25%" mx="auto" />
          <Text color="#FDCA72" fontWeight="bold" mx="auto" mt="4px">
            {formatSpeed(weatherData.wind.speed)}
          </Text>
          <Text color="#FDCA72" mx="auto">
            Wind Speed
          </Text>
        </Flex>
      </GridItem>

      <GridItem>
        <Center height="100%">
          <Flex>
            <Image src={sunsetIcon} mr="16px" />
            <Center>
              <Flex direction="column">
                <Text color="#FDCA72" mx="auto">
                  Sunset
                </Text>
                <Text color="#FDCA72" fontWeight="bold" mt="4px">
                  {formatTime(weatherData.sys.sunset)}
                </Text>
              </Flex>
            </Center>
          </Flex>
        </Center>
      </GridItem>
    </SimpleGrid>
  );
};

export default MoreInfo;
