import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public menus:any = [
		{
			name: 'My Profile',
			icon: 'ios-person-outline'
		},
		{
			name: 'Check Balance',
			icon: 'ios-flask-outline'
		},
		{
			name: 'E-wallet',
			icon: 'ios-cash-outline'
		},{
			name: 'Gift Data',
			icon: 'ios-people-outline'
		},
		{
			name: 'Share History',
			icon: 'ios-infinite-outline'
		},{
			name: 'Buy Data',
			icon: 'ios-basket-outline'
		},
		{
			name: 'Login History',
			icon: 'ios-analytics-outline'
		},
		{
			name: 'Global Logout',
			icon: 'ios-power-outline'
		}
	]

  constructor(public navCtrl: NavController) {

  }

}
