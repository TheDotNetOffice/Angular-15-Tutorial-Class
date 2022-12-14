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

    let response = this.GetDataWithPromise();
    response.then(function (resolve) {
      console.log(resolve);
    }, function (reject) {
      console.log(reject)
    }
    )


    //Observable call
 this.GetDataWithObservable();
 this.data.subscribe((res:any) =>{

  console.log(res);


 })


  }


  public GetDataWithPromise() {
    let promise = new Promise(function (resolve, reject) {
      const val = 2 + 1;
      if (val == 4) {
        resolve("Success");
      }
      else {
        reject("Error");
      }
    });

    return promise;
  }


  public GetDataWithObservable()
  {
    this.data = new Observable((res)=>{
      console.log("Observable is started");

      setTimeout(()=> {res.next("1")}, 1000)
      setTimeout(()=> {res.next("2")}, 2000)
      setTimeout(()=> {res.next("3")}, 3000)
      setTimeout(()=> {res.next("4")}, 4000)
      setTimeout(()=> {res.next("5")}, 5000)
      setTimeout(()=> {res.next("6")}, 6000)
    })
  }




}
