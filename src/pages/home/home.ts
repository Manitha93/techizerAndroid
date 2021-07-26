import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  baseUrl = 'https://run.mocky.io/v3/4f0ab76f-856e-44fd-8bfc-6b312d5c44a0'
  usersList:any;
  error: boolean = false; // For Error handling 
  shownGroup = null; // Expandable List

  constructor(public navCtrl: NavController, public http:  HttpClient, public platform: Platform) {
    this.http.get(this.baseUrl).subscribe(data=>{
      //process the json data
       this.usersList=data["results"]
       console.log( this.usersList=data, "this.userList")
      },
      err => {
        console.log(err);
        this.error = true
      }
      )
  }
  
  //For Pull to Refresh List
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  //Logout
  goback() {
    this.platform.ready().then(() => {
      console.log('Click on button Test Console Log');
    this.navCtrl.pop();
    })
 }

 //For Expandable list 
 toggleGroup(group) {
   console.log(group,"grp")
  if (this.isGroupShown(group)) {
      this.shownGroup = null;
  } else {
      this.shownGroup = group;
  }
};
isGroupShown(group) {
  return this.shownGroup === group;
};


}
