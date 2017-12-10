import { EnqueteProvider } from './../../providers/enquete/enquete';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { PerguntasPage } from '../perguntas/perguntas';

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
    
    if (resposta != null){
      this.enqueteProvider.addResposta(resposta);
      this.presentAlert();
    }else{
      this.errorAlert();
    }
      
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Resposta enviada!',
      subTitle: 'Sua resposta foi enviada com sucesso!',
      buttons: [{
        text: 'OK',
        handler: data => {
          this.resposta = '';
          this.perguntasPage();
        }
      }]
    });
    alert.present();
  }

  errorAlert() {
    let alert = this.alertCtrl.create({
      title: 'A Resposta deve ser preenchida!',
      subTitle: 'Estamos aguardando sua Resposta.',
      buttons: ['OK']
    });
    alert.present();
  }
 
  ionViewDidLoad() {
    this.pergunta = this.navParams.get('pergunta').descricao;
  }

  closeModal() {
    this.view.dismiss();
  }

  perguntasPage() {
    this.navCtrl.push(PerguntasPage);
  }

}
