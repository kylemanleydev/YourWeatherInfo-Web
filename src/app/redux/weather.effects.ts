import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';
import { WeatherazureService } from '../services/weatherazure.service';
import { fetchWeather, storeWeather } from './weather.actions';

@Injectable()
export class WeatherEffects {

  fetchWeather$ = createEffect(() => this.actions$.pipe(
    ofType(fetchWeather),
    mergeMap((payload) => this.WeatherazureService.getWeatherData(payload.zipcode)
      .pipe(
        map(weatherData => storeWeather({weatherData: weatherData})),
        catchError((e) => {
          alert("Invalid zipcode"); 
          return throwError(() => (e));
        }),
      ))
    )
  );

  constructor(
    private WeatherazureService: WeatherazureService,
    private actions$: Actions,
  ) {}
}