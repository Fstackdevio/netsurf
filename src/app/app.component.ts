import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ShareDataPage } from '../pages/share-data/share-data';
/*import { HomePage } from '../pages/home/home';*/
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { BuyDataPage } from '../pages/buy-data/buy-data';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ShareDataPage;
  //rootPage:any = BuyDataPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

