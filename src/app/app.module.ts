import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './ui-components/search-box/search-box.component';
import { WeatherCardComponent } from './ui-components/weather-card/weather-card.component';
import { weatherReducer } from './redux/weather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './redux/weather.effects';
@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ weatherData: weatherReducer }),
    EffectsModule.forRoot([WeatherEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
