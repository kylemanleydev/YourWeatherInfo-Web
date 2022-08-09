import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentZipcode: string = '';

  //Recieve zipcode from child <search-box> and assign it to global variable currentZipcode to be shared with child <weather-card>
  recieveZipcode(zipcodeRecieved: string){
    this.currentZipcode = zipcodeRecieved;
    console.warn('[app-component] zipcode recieved:', this.currentZipcode);
  }
}