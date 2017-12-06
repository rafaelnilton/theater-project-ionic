import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the PerguntarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perguntar',
  templateUrl: 'perguntar.html',
})
export class PerguntarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public view: ViewController) {
  }


  public presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Pergunta enviada!',
      subTitle: 'Obrigado por interagir conosco!',
      buttons: ['Ok']
    });
    alert.present();
  }

 
  ionViewDidLoad() {
  }

  closeModal() {
    this.view.dismiss();
  }

}
