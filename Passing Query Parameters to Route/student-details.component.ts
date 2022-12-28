import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Angular15Service } from 'src/app/angular15.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  details: any;
  userId: any;
  editMode: boolean = true;
  studentInfo: any = [];
  constructor(private activateRoute: ActivatedRoute, private service: Angular15Service) {

  }

  ngOnInit(): void {

    // this.userId = this.activateRoute.snapshot.paramMap.get('id');
    //  this.userId = this.activateRoute.snapshot.params['id'];
    //  this.service.GetStudentDetails().subscribe(data=>{
    //   this.studentInfo = data;
    //   this.details = this.studentInfo.find( (c:any)=>c.userId == this.userId);
    //  })

    this.activateRoute.paramMap.subscribe((data) => {


      this.userId = data.get('id');
      this.service.GetStudentDetails().subscribe(data => {
        this.studentInfo = data;
        this.details = this.studentInfo.find((c: any) => c.userId == this.userId);
      })

    });

    this.editMode = Boolean( this.activateRoute.snapshot.queryParamMap.get('edit'));


  }



}
