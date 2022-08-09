import { Injectable } from '@angular/core';
import { AzureFunctionPostRequest } from '../models/weather.service.functions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherazureService {
  constructor(private httpService: HttpClient) { }

  //headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  });
  options = {
    headers: this.httpHeaders
  };      
  getWeatherData(zipcode: string) {
    const azureFunctionRequest = <AzureFunctionPostRequest>{
      method: 'POST',
      url: 'http://localhost:4200/api/WeatherRequest',
      body: {
        zipcode: zipcode
      }
    };
    return this.httpService.post<WeatherData>(azureFunctionRequest.url, azureFunctionRequest.body, this.options);
  }
}
