import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/models/weather.model';
import { fetchWeather } from 'src/app/redux/weather.actions';
import { selectWeatherData } from 'src/app/redux/weather.selectors';

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
    ) {}

  //Dispatch fetchWeather redux action on changes to zipcode
  ngOnChanges(): void {
    if(this.zipcode !== '') {
      console.warn("[weather-card] dispatched a fetch weather action");
      this.store.dispatch(fetchWeather({zipcode: this.zipcode}));
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