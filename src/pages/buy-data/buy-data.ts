import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-buy-data',
  templateUrl: 'buy-data.html',
})
export class BuyDataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyDataPage');
  }

  goBack(){
  	this.navCtrl.pop();
  }

}
