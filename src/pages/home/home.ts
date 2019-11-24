import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login Failed',
      subTitle: 'Incorrect username or password! Please try again.',
      buttons: ['OK']
    });
    alert.present();
  }

  signIn(username: any, password: any) {
    if (username === "demo" && password === "demo@123") {
      this.navCtrl.push(ProfilePage, { uname: username });
    }
    else{
      this.presentAlert();
    }
  }
}
