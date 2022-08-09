import { weatherState } from "./weather.reducer";

export const selectWeatherData = (state: weatherState) => state.weatherData;