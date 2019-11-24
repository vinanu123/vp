import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
// import { EmployeeDetailsPage } from '../pages/employee-details/employee-details';
// import { FileClaimPage } from '../pages/file-claim/file-claim';
// import { ChildInfoPage } from '../pages/child-info/child-info';
// import { AbsencePatternPage } from '../pages/absence-pattern/absence-pattern';
import { ApsInfoPage } from '../pages/aps-info/aps-info';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

