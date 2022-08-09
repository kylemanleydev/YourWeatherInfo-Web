import { Component, ComponentFactoryResolver, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/models/weather.model';
import { fetchWeather } from 'src/app/redux/weather.actions';
import { weatherReducer } from 'src/app/redux/weather.reducer';
import { selectWeatherData } from 'src/app/redux/weather.selectors';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherazureService } from 'src/app/services/weatherazure.service';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']

})
export class WeatherCardComponent implements OnChanges, OnInit {
  @Input() zipcode = '';

  //Tracker
  $storeWeatherData: Observable<WeatherData>;
  weatherData: WeatherData;


  constructor(
    private store: Store<{ weatherData: WeatherData }>,
    private WeatherazureService: WeatherazureService
    ) {}

  //Dispatch fetchWeather redux action on changes to zipcode
  ngOnChanges(): void {
    if(this.zipcode !== '') {
      console.warn("[weather-card] dispatched a fetch weather action");
      //this.store.dispatch(fetchWeather({zipcode: this.zipcode}));
      this.WeatherazureService.getWeatherData(this.zipcode).subscribe((weatherData: WeatherData) => this.weatherData = weatherData);
    }
  }

  ngOnInit() {
      this.store.select(selectWeatherData).subscribe(data => console.log(data));
      this.$storeWeatherData = this.store.select(selectWeatherData);
  }

  toJson(obj) {
    return JSON.stringify(obj);
  }
}