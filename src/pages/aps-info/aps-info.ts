import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
@Component({
  selector: 'page-aps-info',
  templateUrl: 'aps-info.html',
})
export class ApsInfoPage {

  isAvailable: any;
  isTermChecked: any;
  accept: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, private file: FileChooser) {
    this.isAvailable = false;
  }

  onCheckBox() {
    console.log(this.accept)
    if (this.accept) {
      this.isTermChecked = !this.isTermChecked;
    } else {
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

  onAvailable() {
    this.isAvailable = !this.isAvailable;
  }

  onUnavailable() {
    this.isAvailable = false;
  }
  onOpenFile()
  {
    this.file.open()
  .then(uri => console.log(uri))
  .catch(e => console.log(e));
  }
}
