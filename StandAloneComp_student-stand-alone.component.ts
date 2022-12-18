import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list'

@Component({
  selector: 'app-student-stand-alone',
  standalone: true,
  imports: [CommonModule,MatListModule],
  templateUrl: './student-stand-alone.component.html',
  styleUrls: ['./student-stand-alone.component.css']
})
export class StudentStandAloneComponent {

  items : any[] = ["value1" , "value2"]
}
