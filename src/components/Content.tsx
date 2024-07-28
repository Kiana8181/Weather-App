import { Grid, GridItem } from "@chakra-ui/react";
import { handleError } from "./common/HandleError";
import { IsLoading } from "./common/IsLoading";
import { GridContainerStyle } from "./ContentStyles";
import LineChart from "./LineChart";
import MainInfo from "./MainInfo";
import MoreInfo from "./MoreInfo";
import useWeatherQueryStore from "./store";
import { useWeather } from "../hooks/useWeather";

const Content = () => {
  const setCity = useWeatherQueryStore((s) => s.setCity);

  const { data, error, isLoading } = useWeather();

  if (isLoading) return <IsLoading />;

  if (error) {
    handleError(error, setCity);
  }

  if (!data) return null;

  return (
    <Grid
      templateColumns={{ lg: "1fr 1fr 1fr", base: "1fr" }}
      gap="36px"
      mt="32px"
    >
      <GridItem sx={GridContainerStyle} colSpan={{ lg: 3, base: 1 }}>
        <MainInfo weatherData={data} />
      </GridItem>
      <GridItem sx={GridContainerStyle}>
        <MoreInfo weatherData={data} />
      </GridItem>
      <GridItem
        sx={GridContainerStyle}
        colSpan={{ lg: 2, base: 1 }}
        overflow="hidden"
      >
        <LineChart />
      </GridItem>
    </Grid>
  );
};

export default Content;
