import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeatherData(zipcode: string): Observable<WeatherData>{
    console.log("[weather-service] getWeatherData called");
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
      .set('key', environment.apiKey) //Api Key
      .set('q', zipcode) //Zipcode searched for
      .set('aqi', 'no') //Air quality index option 
    })
  }
}
