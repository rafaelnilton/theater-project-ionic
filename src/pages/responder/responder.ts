import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-responder',
  templateUrl: 'responder.html',
})
export class ResponderPage {

  public pergunta: String = new String('Vocês utilizariam esta tecnologia nos seus projetos? Justifique');
  public resposta: String = new String('');
  public titulo : String;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public alertCtrl: AlertController) {
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
    this.titulo = this.navParams.get('item').title;
    this.pergunta = this.navParams.get('item').description;
  }

  closeModal() {
    this.view.dismiss();
  }

}
