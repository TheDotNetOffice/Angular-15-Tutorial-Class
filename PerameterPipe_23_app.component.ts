import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 15 App';

  DOB = new Date('01/05/1990');

  Salary = 1000000;
  constructor(){

  
  }

}
