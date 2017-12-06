import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-votar',
  templateUrl: 'votar.html',
})
export class VotarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotarPage');
  }

  closeModal() {
    this.view.dismiss();
  }

  likeAlert() {
    let alert = this.alertCtrl.create({
      title: 'SIM :)',
      subTitle: '',
      buttons: ['Ok']
    });
    alert.present();
  }

  deslikeAlert() {
    let alert = this.alertCtrl.create({
      title: 'NÃO :(',
      subTitle: '',
      buttons: ['Ok']
    });
    alert.present();
  }

}
