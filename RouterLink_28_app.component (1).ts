import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 15 App';

  NumberArray: any[] = [];

  constructor( private router : Router) {  

  }

  DyanmicRouter(linkName : string)
  {
    if(linkName == 'student')
    {
    this.router.navigate(['/student']);
    }
    else
    {
      this.router.navigate(['/teacher']);
    }
  }

}
