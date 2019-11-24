import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChildInfoPage } from '../child-info/child-info';

/**
 * Generated class for the FileClaimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-file-claim',
  templateUrl: 'file-claim.html',
})
export class FileClaimPage {
  relationship: any;
  rel: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.relationship = [
      {
        text: "Partner",
        value: "Partner"
      },
      {
        text: "Child",
        value: "Child"
      },
      {
        text: "Parent",
        value: "Parent"
      },
      {
        text: "Other",
        value: "Other"
      }
    ]
  }

  onRelSelect(rel) {

    switch (rel) {
      case "Child": this.navCtrl.push(ChildInfoPage)
        break;
    }
  }

}
