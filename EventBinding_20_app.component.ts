import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 15 App';

  sum : number = 0;
  ShowAlert()
  {
    alert("I am dotnet office")
  }

  ShowSum(){

    this.sum = 10+20;
  }

  SetColor(colorVal:any)
  {
   alert(colorVal.target.value);
  }
}
