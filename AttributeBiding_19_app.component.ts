import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 15 App';

  num1 : number = 10;

  fistName = 'DotNet office';
  Age = 20;
  Gender = "Male";

  colspan = 2;
}
