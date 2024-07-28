import { create } from "zustand";

interface WeatherQuery {
  city?: string;
  unit: "metric" | "imperial";
}

interface WeatherQueryStore {
  weatherQuery: WeatherQuery;
  setCity: (city: string) => void;
  setUnit: (unit: "metric" | "imperial") => void;
}

const useWeatherQueryStore = create<WeatherQueryStore>((set) => ({
  weatherQuery: { unit: "metric" },
  setCity: (city) =>
    set((store) => ({
      weatherQuery: { ...store.weatherQuery, city },
    })),
  setUnit: (unit) =>
    set((store) => ({
      weatherQuery: { ...store.weatherQuery, unit },
    })),
}));

export default useWeatherQueryStore;
