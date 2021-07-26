import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) { 
    this.loginForm = formBuilder.group({
      'userName': ['', Validators.compose([Validators.required,
        Validators.pattern("[a-zA-Z0-9]+")])],
      'password': [null, Validators.compose([Validators.required,
        Validators.minLength(8),
        Validators.pattern(`.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).*`)])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //Navigate to next page
  goHome()
{   
  
  this.loginForm.reset();  // Reset all form data
  this.navCtrl.push(HomePage);
}


}
