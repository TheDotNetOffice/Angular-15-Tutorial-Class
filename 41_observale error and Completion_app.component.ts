import { Component } from '@angular/core';
import { observable, Observable, reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 15 App';
  data: any;
  constructor() {

  }

  ngOnInit() {

    //Observable call
    this.GetDataWithObservable();
    this.data.subscribe((res: any) => {
      console.log(res);

    } , (error : any) => {
      alert(error.message);
    } , ()=>{
      alert("Observable completing method")
    })

  }



  public GetDataWithObservable() {
    this.data = new Observable((res) => {
      console.log("Observable is started");

      setTimeout(() => { res.next("1") }, 1000)
      setTimeout(() => { res.next("2") }, 2000)
      setTimeout(() => { res.next("3") }, 3000)
      setTimeout(() => { res.error(new Error("Error occured while fetching the data")) }, 3000)
      setTimeout(() => { res.next("4") }, 4000)
      setTimeout(() => { res.next("5") }, 5000)
      setTimeout(() => { res.next("6") }, 6000)
      setTimeout(() => { res.complete() }, 3000)

    })
  }




}
