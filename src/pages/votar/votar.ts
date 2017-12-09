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

  enquete : String = new String("Você está gostanto da palestra?");

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotarPage');
  }

  votar(codigoVoto) {

    if (codigoVoto == 1){
      this.likeAlert();
    }else{
      this.deslikeAlert();
    }

  }

  closeModal() {
    this.view.dismiss();
  }

  likeAlert() {
    let alert = this.alertCtrl.create({
      title: 'Que bom que você está gostando. :)',
      subTitle: '',
      buttons: ['Ok']
    });
    alert.present();
  }

  deslikeAlert() {
    let alert = this.alertCtrl.create({
      title: 'Vamos tentar melhorar o nível da Paletra, desculpe. :(',
      subTitle: '',
      buttons: ['Ok']
    });
    alert.present();
  }

}
