import { TestBed } from '@angular/core/testing';

import { WeatherazureService } from './weatherazure.service';

describe('WeatherazureService', () => {
  let service: WeatherazureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherazureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
