import { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions, AgChartTheme } from "ag-charts-community";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { useForecast } from "../hooks/useWeather";

const LineChart = () => {
  const { data, isLoading, error } = useForecast();

  const [options, setOptions] = useState<AgChartOptions>({
    theme: {
      baseTheme: "ag-default-dark",
      palette: {
        fills: ["#FDCA72"],
        strokes: ["#FFFFFF"],
      },

      overrides: {
        common: {
          title: {
            fontSize: 28,
            fontWeight: "bold",
          },
        },
        area: {
          autoSize: true,
        },
      },
    },

    title: {
      text: "Hourly Forecast:",
    },
    data: [],
    series: [
      {
        type: "area",
        xKey: "time",
        yKey: "temp",
        yName: "Temperature",
        strokeWidth: 3,
        fillOpacity: 0.3,
      },
    ],
    background: {
      visible: false,
    },
  });

  useEffect(() => {
    if (data) {
      const updatedData = data.list.slice(0, 12).map((forecast) => ({
        time: new Date(forecast.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
        }),
        temp: forecast.main.temp,
      }));
      setOptions((prevOptions) => ({
        ...prevOptions,
        data: updatedData,
      }));
    }
  }, [data]);

  if (isLoading)
    return (
      <Center mt="24px">
        <Spinner size="lg" color="#FDCA72" />
      </Center>
    );
  if (error) throw error;

  return (
    <Box
      p="16px"
      overflow="hidden"
      h="100%"
      w="full"
      maxHeight={{ base: "300px", lg: "100%" }}
    >
      <AgChartsReact options={options} />
    </Box>
  );
};

export default LineChart;
