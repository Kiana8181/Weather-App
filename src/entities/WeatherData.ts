interface Weather {
  description: string;
  icon: string;
}

export interface WeatherData {
  main: {
    humidity: number;
    temp: number;
  };
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  weather: Weather[];
  wind: {
    speed: number;
  };
}
