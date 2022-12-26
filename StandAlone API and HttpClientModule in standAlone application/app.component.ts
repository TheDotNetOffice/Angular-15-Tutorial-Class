import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { observable, Observable, reduce,of, from } from 'rxjs';
import { StudentStandAloneComponent } from './student-stand-alone/student-stand-alone.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class AppComponent {
  title = 'angular 15 App';
  
  constructor() {

  }

  ngOnInit() {   

  }


  mouseHoverEvent()
  {
    console.log("mouse hover");
  }

  

}
