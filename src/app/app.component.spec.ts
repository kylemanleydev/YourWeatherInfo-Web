import { TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherService } from './services/weather.service';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('AppComponent', () => {
  let injector: TestBed;
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        WeatherService
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    injector = getTestBed();
    service = injector.inject(WeatherService);
    httpMock = injector.inject(HttpTestingController);
  });

  describe('#getWeatherData', () => {
    it('should return an Observable<WeatherData>', () => {

      /*
      const dummyZipcodes = [
          { zipcode: '01915' },
          { zipcode: '32244'},
          { zipcode: '01950' },
          { zipcode: '32808'}
      ];
      */
 
      let mockData = {
        location: {
          name: 'Gloucester1',
          zipCode: '01930'
        }
      };

      //
      
      service.getWeatherData('01930').subscribe(WeatherData => {
        expect(WeatherData.location.name).toBe("Gloucester");
      });
  
      const req = httpMock.expectOne(`${environment.weatherApiBaseUrl}?key=5e8bd5b4258b4f05a6111158220707&q=01930&aqi=no`);
      expect(req.request.method).toBe("GET");
      req.flush(mockData);
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('when onSubmit() is called, and it is a valid zip code it should render the weather card info', () => {

  });

  it('when onSubmit() is called and it is an invalid zip code, it should render an error message under the zip input field', () => {

  })  
});
