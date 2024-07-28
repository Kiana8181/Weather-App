import { useQuery } from "@tanstack/react-query";
import { CurrentLocation } from "../components/common/CurrentLocation";
import useWeatherQueryStore from "../components/store";
import { ForecastData } from "../entities/ForecastData";
import { WeatherData } from "../entities/WeatherData";
import ApiClient from "../services/api-client";

const useWeatherQuery = () => {
  const weatherQuery = useWeatherQueryStore((s) => s.weatherQuery);
  return weatherQuery;
};

const useWeatherAPI = <T>(
  endpoint: string,
  latitude: number,
  longitude: number
) => {
  const weatherQuery = useWeatherQuery();

  return useQuery<T, Error>({
    queryKey: [
      endpoint,
      weatherQuery.city,
      latitude,
      longitude,
      weatherQuery.unit,
    ],
    queryFn: async () => {
      const apiClient = new ApiClient<T>(endpoint);
      return apiClient.getAll({
        params: {
          lat: latitude,
          lon: longitude,
          q: weatherQuery.city,
          units: weatherQuery.unit,
          appid: import.meta.env.VITE_APP_ID,
        },
      });
    },
  });
};

export const useForecast = () => {
  const { latitude, longitude } = CurrentLocation();
  return useWeatherAPI<ForecastData>("forecast", latitude, longitude);
};

export const useWeather = () => {
  const { latitude, longitude } = CurrentLocation();
  return useWeatherAPI<WeatherData>("weather", latitude, longitude);
};
