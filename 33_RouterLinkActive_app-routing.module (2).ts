import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular15Service } from './angular15.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 15 App';

  NumberArray: any[] = [];

  displayMsg : string = "";
  constructor( private router : Router , private service:Angular15Service) {  

  }

ngOnInit()
{
   this.displayMsg = this.service.DisplayMsg();
}




}
