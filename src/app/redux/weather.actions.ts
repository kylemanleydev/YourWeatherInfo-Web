import { createAction, props } from '@ngrx/store';
import { WeatherData } from '../models/weather.model';

// there should be a redux effect that hooks onto this fetchWeather action and this effect will make use of weather service to fetch the data.
// when the effect fetches data from weatherapi.org, dispatch a storeWeather action to save the properties that you need to the store.

export const fetchWeather = createAction(
    'FETCHING_WEATHER_INFO',
    props<{ zipcode: string }>());
export const storeWeather = createAction(
    'STORING_WEATHER_INFO',
    props<{ weatherData: WeatherData }>());