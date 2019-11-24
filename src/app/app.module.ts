import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { EmployeeDetailsPage } from '../pages/employee-details/employee-details';
import { FileClaimPage } from '../pages/file-claim/file-claim';
import { CalendarModule } from 'ionic3-calendar-en';
import { ChildInfoPage } from '../pages/child-info/child-info';
import { AbsencePatternPage } from '../pages/absence-pattern/absence-pattern';
import { ApsInfoPage } from '../pages/aps-info/aps-info';
import { FileChooser } from '@ionic-native/file-chooser';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    EmployeeDetailsPage,
    FileClaimPage,
    ChildInfoPage,
    AbsencePatternPage,
    ApsInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    EmployeeDetailsPage,
    FileClaimPage,
    ChildInfoPage,
    AbsencePatternPage,
    ApsInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileChooser
  ]
})
export class AppModule {}
