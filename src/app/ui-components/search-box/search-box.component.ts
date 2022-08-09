import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherazureService } from '../../../../src/app/services/weatherazure.service';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Output() zipcodeChange = new EventEmitter<string>();
  @Output() weatherDataChange = new EventEmitter<WeatherData>();
  searchHeader = 'Your Weather Info';

  constructor(
    private formBuilder: FormBuilder,
    private WeatherazureService: WeatherazureService
    ) {}

  searchForm = this.formBuilder.group ({
    zipcode: ['', Validators.compose([Validators.required, 
                                      Validators.minLength(5), 
                                      Validators.pattern('^[0-9]*$')])]
  });

  //Send valid zipcode below to parent component <app-root> which will then be sent to child <weather-card>
  sendZipcode(): void{
    if(this.searchForm.valid){
      console.warn("[search-box] sent zipcode:", this.getZipcode());
      this.zipcodeChange.emit(this.getZipcode());
     /*
      const weatherObserver = {
        next: (weatherData: WeatherData) => console.log(weatherData),
        error: (err: Error) => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete set of WeatherData'),
      };
      */

      //this.WeatherazureService.getWeatherData(this.getZipcode()).subscribe((weatherData: WeatherData) => this.weatherDataChange.emit(weatherData));
    }
  }
  
  //Get method for zipcode
  getZipcode(): string{
    return this.searchForm.value.zipcode as string;
  }
}