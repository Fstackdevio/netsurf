import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { BuyDataPage } from '../pages/buy-data/buy-data';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { CheckBalancePage } from '../pages/check-balance/check-balance';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoginHistoryPage } from '../pages/login-history/login-history';
import { SettingsPage } from '../pages/settings/settings';
import { ShareDataPage } from '../pages/share-data/share-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuyDataPage,
    ChangePasswordPage,
    CheckBalancePage,
    LoginPage,
    LoginHistoryPage,
    SettingsPage,
    ShareDataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuyDataPage,
    ChangePasswordPage,
    CheckBalancePage,
    LoginPage,
    LoginHistoryPage,
    SettingsPage,
    ShareDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
