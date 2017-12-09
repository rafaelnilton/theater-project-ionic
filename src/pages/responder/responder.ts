import { EnqueteProvider } from './../../providers/enquete/enquete';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-responder',
  templateUrl: 'responder.html',
})
export class ResponderPage {

  public pergunta: String;
  public resposta: String;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, 
              public alertCtrl: AlertController, public enqueteProvider : EnqueteProvider) {
  }

  enviarResposta (resposta) {
      this.enqueteProvider.addResposta(resposta);
      this.presentAlert();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Resposta enviada!',
      subTitle: 'Sua resposta foi enviada com sucesso!',
      buttons: ['Ok']
    });
    alert.present();
  }

 
  ionViewDidLoad() {
    this.pergunta = this.navParams.get('pergunta').descricao;
  }

  closeModal() {
    this.view.dismiss();
  }

}
