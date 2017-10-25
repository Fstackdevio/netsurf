import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
	public user:any = {
		fullname: 'Adegoke David',
		email: 'adegoke.david@lmu.edu.ng',
		image: '../assets/images/userimg.jpg'
	}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
