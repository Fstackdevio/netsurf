import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { ShareDataPage } from '../share-data/share-data';
import { BuyDataPage } from '../buy-data/buy-data';
import { RequestDataPage } from '../request-data/request-data';
import { EwalletPage } from '../ewallet/ewallet';
import { SettingsPage } from '../settings/settings';
import { LoginHistoryPage } from '../login-history/login-history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public balance = 924.36;
	public low;

	public menus:any = [
		{
			name: 'Profile',
			icon: 'ios-person-outline',
			view: 'ProfilePage',
		}, {
			name: 'Share Data',
			icon: 'ios-people-outline',
			view: 'ShareDataPage'
		}, {
			name: 'Buy Data',
			icon: 'ios-basket-outline',
			view: 'BuyDataPage'
		}, {
			name: 'Request Data',
			icon: 'ios-infinite-outline',
			view: 'RequestDataPage'
		}, {
			name: 'Login History',
			icon: 'ios-analytics-outline',
			view: 'LoginHistoryPage'
		}, {
			name: 'E-wallet',
			icon: 'ios-cash-outline',
			view: 'EwalletPage'
		}, {
			name: 'Settings',
			icon: 'ios-settings-outline',
			view: 'SettingsPage'
		}, {
			name: 'Logout',
			icon: 'ios-power-outline',
			view: 'Logout'
		}
	]

	constructor(public navCtrl: NavController) {

  	}

  	ngOnInit(){
  		if(this.balance > 100){
  			this.low = '';
  		} else {
  			this.low = 'low';
  		}
  	}

	switchView(viewName){
		console.log("To go to "  + viewName);
		var v;
		switch (viewName) {
			case "ProfilePage":
				v = ProfilePage;
				break;
			case "ShareDataPage":
				v = ShareDataPage;
				break;
			case "ProfilePage":
				v = ProfilePage;
				break;
			case "BuyDataPage":
				v = BuyDataPage;
				break;
			case "RequestDataPage":
				v = RequestDataPage;
				break;
			case "LoginHistoryPage":
				v = LoginHistoryPage;
				break;
			case "EwalletPage":
				v = EwalletPage;
				break;
			case "SettingsPage":
				v = SettingsPage;
				break;
			default:
				return;
		}


		this.navCtrl.push(v);
  	}

}
