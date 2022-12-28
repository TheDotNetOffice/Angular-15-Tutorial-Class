import { Component } from '@angular/core';
import { Angular15Service } from '../angular15.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  Studentinfo: any = [];
  constructor(private service: Angular15Service) {
    console.log("StudentComponent");
  }

  ngOnInit() {

    this.service.GetStudentDetails().subscribe(data=>{
      this.Studentinfo = data;
    })
    
  }
}
