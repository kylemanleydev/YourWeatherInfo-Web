import { createReducer, on } from '@ngrx/store';
import { WeatherData } from '../models/weather.model';
import { storeWeather } from './weather.actions';

export interface weatherState {
  weatherData: WeatherData;
};

export const initialWeatherState: weatherState = null;

//State transitions are not done by modifying the original state, but instead returning a new state object using the spread operator
export const weatherReducer = createReducer(initialWeatherState,
  on(storeWeather, (state, action) => {
    return {
      ...state,
      weatherData: action.weatherData
    }
  }),
);