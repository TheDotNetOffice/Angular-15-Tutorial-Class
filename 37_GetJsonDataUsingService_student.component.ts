import { Component } from '@angular/core';
import { Angular15Service } from '../angular15.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  //template:'<p>student works!</p>',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  Studentinfo : any = [];
  constructor(private service: Angular15Service){    
   }

   ngOnInit(){
    this.service.GetStudentDetails().subscribe(data =>{
     debugger
      this.Studentinfo = data ;
      console.log(this.Studentinfo);
    })
  }
}
