import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-share-data',
  templateUrl: 'share-data.html',
})
export class ShareDataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareDataPage');
  }

  goBack(){
  	this.navCtrl.pop();
  }

}
