import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 15 App';

  NumberArray: any[] = [];

  constructor() {
    this.NumberArray = [
      { num1: 10, num2: 20 },
      { num1: 24, num2: 10 },
      { num1: 45, num2: 5 }
    ]

  }

}
