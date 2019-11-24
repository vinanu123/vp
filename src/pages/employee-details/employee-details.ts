import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FileClaimPage } from '../file-claim/file-claim';

/**
 * Generated class for the EmployeeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-employee-details',
  templateUrl: 'employee-details.html',
})
export class EmployeeDetailsPage {
  key: any;
  isCalender:any;
  selectedValue:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isCalender = false; 
  }
  
  proceedNext() {
    this.key = this.navParams.get("key");
    if (this.key === "file_a_claim") {
      this.navCtrl.push(FileClaimPage)
    }
  }

  onDateSelect(date){
    console.log(date)
    this.selectedValue = date.date+'-'+(date.month+1)+'-'+date.year;
    this.showCalender();
  }
  
  showCalender()
  {
    console.log(this.isCalender)
    this.isCalender = !this.isCalender;

  }

}
