import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AbsencePatternPage } from '../absence-pattern/absence-pattern';

@Component({
  selector: 'page-child-info',
  templateUrl: 'child-info.html',
})
export class ChildInfoPage {

  selectedValue:any;
  isCalender: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isCalender = false;
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
  proceed()
  {
    this.navCtrl.push(AbsencePatternPage);
  }

}
