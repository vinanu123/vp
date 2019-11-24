import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApsInfoPage } from '../aps-info/aps-info';

@Component({
  selector: 'page-absence-pattern',
  templateUrl: 'absence-pattern.html',
})
export class AbsencePatternPage {
  selectedValue: string;
  isCalender: any;
  isCalenderTo:any;
  selectedValueFrom:any;
  selectedValueTo:any;
  isCalenderFrom:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // onDateSelect(date){
  //   console.log(date)
  //   this.selectedValue = date.date+'-'+(date.month+1)+'-'+date.year;
  //   this.showCalender();
  // }
  
  // showCalender()
  // {
  //   console.log(this.isCalender)
  //   this.isCalenderFrom = !this.isCalenderFrom;
  // }
  onDateSelectFrom(date){
    console.log(date)
    this.selectedValueFrom = date.date+'-'+(date.month+1)+'-'+date.year;
    this.isCalenderFrom = !this.isCalenderFrom;
    // this.showCalender();
  }
  
  showCalenderFrom()
  {
    console.log(this.isCalender)
    this.isCalenderFrom = !this.isCalenderFrom;
  }
  onDateSelectTo(date){
    console.log(date)
    this.selectedValueTo = date.date+'-'+(date.month+1)+'-'+date.year;
    this.isCalenderTo = !this.isCalenderTo;
    // this.showCalender();
  }
  
  showCalenderTo()
  {
    console.log(this.isCalender)
    this.isCalenderTo = !this.isCalenderTo;
  }

  proceed()
  {
    this.navCtrl.push(ApsInfoPage);
  }
}
