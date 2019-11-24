import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmployeeDetailsPage } from '../employee-details/employee-details';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  uname: any;
  myProfile: any;
  value: any;
  action: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.uname = this.navParams.get("uname");
    // console.log(this.uname);
    this.myProfile = [
      {
        text: "My Policies",
        value: "my_policies"
      },
      {
        text: "File a claim",
        value: "file_a_claim"
      },
      {
        text: "Claim Status",
        value: "claim_status"
      },
      {
        text: "Direct Deposit",
        value: "direct_deposit"
      },
      {
        text: "Messages",
        value: "messages"
      },
      {
        text: "Upload Document",
        value: "upload_document"
      },
      {
        text: "Survey",
        value: "survey"
      }
    ]
  }

  profileDetail() {
    switch (this.action) {
      case "my_policies": this.navCtrl.push(EmployeeDetailsPage, { key: 'policy' })
        break;
      case "file_a_claim": this.navCtrl.push(EmployeeDetailsPage, { key: 'file_a_claim' })
        break;
    }
  }

}
