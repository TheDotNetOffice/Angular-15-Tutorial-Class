import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 15 App';

  StudentDetails: any[] = [];

  constructor() {

    this.StudentDetails = [
      {
        Name: 'Name 1',
        Age: '21',
        Gender: 'Male'
      },
      {
        Name: 'Name 2',
        Age: '15',
        Gender: 'FeMale'
      },
      {
        Name: 'Name 3',
        Age: '16',
        Gender: 'Male'
      },
      {
        Name: 'Name 4',
        Age: '24',
        Gender: 'FeMale'
      }
    ];
  }


  GetMoreStudentData(): void {

    this.StudentDetails = [
      {
        Name: 'Name 1',
        Age: '21',
        Gender: 'Male'
      },
      {
        Name: 'Name 2',
        Age: '22',
        Gender: 'FeMale'
      },
      {
        Name: 'Name 3',
        Age: '23',
        Gender: 'Male'
      },
      {
        Name: 'Name 4',
        Age: '24',
        Gender: 'FeMale'
      },
      {
        Name: 'Name 5',
        Age: '23',
        Gender: 'Male'
      },
      {
        Name: 'Name 6',
        Age: '24',
        Gender: 'FeMale'
      }
    ];

  }

  GetAge(Age: number) {
    let val = Age < 18 ? 'Under18' : 'Above18';

    switch(val)
    {
      case 'Under18' :
        return 'green';
        case 'Above18' : 
        return 'red';
    }  
  
     return "";
   
  }

  GetCssClass(input:string)
  {
    let classType;
    if(input == "main")
    {
      classType = {
        'color1' : true
      }
    }
    else
    {
      classType={
        'color2' : true
      }
    }
    return classType;
  }

}
