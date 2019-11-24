import { Component } from '@angular/core';
import { NavController, NavParams , ToastController} from 'ionic-angular';

/**
 * Generated class for the ApsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-aps-info',
  templateUrl: 'aps-info.html',
})
export class ApsInfoPage {

  isAvailable:any;
  isTermChecked:any;
  accept:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController) {
    this.isAvailable=false;
  }

  onCheckBox()
  {
    console.log(this.accept)
    if(this.accept){
      this.isTermChecked = !this.isTermChecked;
    }else{
      this.presentToast()
    }
    
  }
  presentToast() {
    let toast = this.toast.create({
      message: 'Please accept the terms and conditions',
      duration: 3000
    });
    toast.present();
  }
}
