import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
@Component({
  selector: 'page-share-data',
  templateUrl: 'share-data.html',
})
export class ShareDataPage {

  @ViewChild(Slides) slides : Slides;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareDataPage');
  }

  goBack(){
  	this.navCtrl.pop();
  }

  goToSlide(){
    var nextSlide, currSlide;
    if(currSlide < 3){
      nextSlide += 1;
    }
    this.slides.slideTo(nextSlide, 500);
  }

}
