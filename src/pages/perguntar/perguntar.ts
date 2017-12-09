import { EnqueteProvider } from './../../providers/enquete/enquete';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { PerguntasPage } from '../perguntas/perguntas';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public view: ViewController,
    public enqueteProvider : EnqueteProvider) {
  }

  salvarPergunta (pergunta){
      this.enqueteProvider.addPergunta(pergunta);
      this.presentAlert();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Pergunta enviada!',
      subTitle: 'Obrigado por interagir conosco!',
      buttons: [{
        text: 'OK',
        handler: data => {
          this.perguntasPage();
        }
      }]
    });
    alert.present();
  }

  ionViewDidLoad() {
  }

  perguntasPage() {
    this.navCtrl.push(PerguntasPage);
  }
  
  closeModal() {
    this.view.dismiss();
  }

}
