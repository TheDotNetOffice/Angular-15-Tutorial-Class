import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 15 App';

 StudentDetails : any[] = [];

 constructor(){

  this.StudentDetails = [
    {
      Name:'Name 1',
      Age:'21',
      Gender:'Male'
    },
    {
      Name:'Name 2',
      Age:'22',
      Gender:'FeMale'
    },
    {
      Name:'Name 3',
      Age:'23',
      Gender:'Male'
    },
    {
      Name:'Name 4',
      Age:'24',
      Gender:'FeMale'
    }
  ];
 }


 GetMoreStudentData():void {

  this.StudentDetails = [
    {
      Name:'Name 1',
      Age:'21',
      Gender:'Male'
    },
    {
      Name:'Name 2',
      Age:'22',
      Gender:'FeMale'
    },
    {
      Name:'Name 3',
      Age:'23',
      Gender:'Male'
    },
    {
      Name:'Name 4',
      Age:'24',
      Gender:'FeMale'
    },
    {
      Name:'Name 5',
      Age:'23',
      Gender:'Male'
    },
    {
      Name:'Name 6',
      Age:'24',
      Gender:'FeMale'
    }
  ];

 }

 TrackByStudentName(index:number, student:any):string{
  return student.Name;
 }
  
}
