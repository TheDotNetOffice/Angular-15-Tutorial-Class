import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 15 App';

  studentInfo : any[] = [];

  constructor(){

    this.studentInfo = [
      {name : 'name 1', Age : 20 , DOB :'10/11/2022'},
      {name : 'name 2', Age : 22 , DOB :'12/11/2000'},
      {name : 'name 3', Age : 24 , DOB :'08/07/1990'}
    ]
  }

}
