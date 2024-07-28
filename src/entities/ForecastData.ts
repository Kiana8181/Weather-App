interface Forecast {
  dt: number;
  main: {
    temp: number;
  };
}

export interface ForecastData {
  list: Forecast[];
}
