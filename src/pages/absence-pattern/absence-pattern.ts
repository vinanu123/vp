import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApsInfoPage } from '../aps-info/aps-info';

@Component({
  selector: 'page-absence-pattern',
  templateUrl: 'absence-pattern.html',
})
export class AbsencePatternPage {
  isCalender: any;
  isCalenderTo: any;
  selectedValueFrom: any;
  selectedValueTo: any;
  isCalenderFrom: any;

  isCalenderInt: any;
  isCalenderIntTo: any;
  selectedValueIntFrom: any;
  selectedValueIntTo: any;
  isCalenderIntFrom: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showCalenderFrom() {
    this.isCalenderFrom = !this.isCalenderFrom;
  }

  showCalenderTo() {
    this.isCalenderTo = !this.isCalenderTo;
  }

  onDateSelectTo(date) {
    this.selectedValueTo = date.date + '-' + (date.month + 1) + '-' + date.year;
    this.isCalenderTo = !this.isCalenderTo;
  }

  onDateSelectFrom(date) {
    this.selectedValueFrom = date.date + '-' + (date.month + 1) + '-' + date.year;
    this.isCalenderFrom = !this.isCalenderFrom;
  }
  

  showCalenderIntFrom()
  {
    this.isCalenderIntFrom = !this.isCalenderIntFrom;
  }

  showCalenderIntTo()
  {
    this.isCalenderIntTo = !this.isCalenderIntTo;
  }
  onDateSelectIntFrom(date)
  {
    this.selectedValueIntFrom = date.date + '-' + (date.month + 1) + '-' + date.year;
    this.isCalenderIntFrom = !this.isCalenderIntFrom;
  }
  onDateSelectIntTo(date)
  {
    this.selectedValueIntTo = date.date + '-' + (date.month + 1) + '-' + date.year;
    this.isCalenderIntTo = !this.isCalenderIntTo;
  }

  proceed() {
    this.navCtrl.push(ApsInfoPage);
  }

}
