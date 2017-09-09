import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckBalancePage } from './check-balance';

@NgModule({
  declarations: [
    CheckBalancePage,
  ],
  imports: [
    IonicPageModule.forChild(CheckBalancePage),
  ],
})
export class CheckBalancePageModule {}
