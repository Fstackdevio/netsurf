import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginHistoryPage } from './login-history';

@NgModule({
  declarations: [
    LoginHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginHistoryPage),
  ],
})
export class LoginHistoryPageModule {}
