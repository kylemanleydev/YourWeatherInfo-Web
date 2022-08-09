import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';
import { WeatherazureService } from '../services/weatherazure.service';
import { fetchWeather, storeWeather } from './weather.actions';

@Injectable()
export class WeatherEffects {

  //this.WeatherazureService.getWeatherData(this.zipcode).subscribe((weatherData: WeatherData) => this.weatherData = weatherData);
  fetchWeather$ = createEffect(() => this.actions$.pipe(
    ofType(fetchWeather),
    mergeMap((payload) => this.WeatherazureService.getWeatherData(payload.zipcode)
      .pipe(
        map(weatherData => storeWeather({weatherData: weatherData})),
        catchError(() => EMPTY),
      ))
    )
  );

  constructor(
    private WeatherazureService: WeatherazureService,
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}