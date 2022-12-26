import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Angular15Service {

  constructor(private http: HttpClient) { }

  DisplayMsg()
  {
    return "I am Angular 15 service";
  }

  GetStudentDetails()
  {
    return this.http.get('../../assets/StudentRecords.json');
  }
}
