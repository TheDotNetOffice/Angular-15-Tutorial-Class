import { Component } from '@angular/core';
import { observable, Observable, reduce,of, from } from 'rxjs';

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
    // Observable Constructor
    // this.data = new Observable((res) => {
    //   console.log("Observable is started");

    //   setTimeout(() => { res.next("1") }, 1000)
    //   setTimeout(() => { res.next("2") }, 2000)
    //   setTimeout(() => { res.next("3") }, 3000)
    //   setTimeout(() => { res.error(new Error("Error occured while fetching the data")) }, 3000)
    //   setTimeout(() => { res.next("4") }, 4000)
    //   setTimeout(() => { res.next("5") }, 5000)
    //   setTimeout(() => { res.next("6") }, 6000)
    //   setTimeout(() => { res.complete() }, 3000)

    // })

    // Using Create Method

    // this.data = Observable.create((res:any) =>{
    //   setTimeout(() => { res.next("1") }, 1000)
    //   setTimeout(() => { res.next("2") }, 2000)
    //   setTimeout(() => { res.next("3") }, 3000)
    //   //setTimeout(() => { res.error(new Error("Error occured while fetching the data")) }, 3000)
    //   setTimeout(() => { res.next("4") }, 4000)
    //   setTimeout(() => { res.complete() }, 3000)

    // } )

   const array1 = [ 3,1,4,5];
   const array2 = [ 8,5,9,1];

   //this.data = of(array1,array2, 5, 6 , 'DotnetOffice');

   this.data = from('dotnetoffice');
  }




}
