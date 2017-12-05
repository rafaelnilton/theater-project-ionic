import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-responder',
  templateUrl: 'responder.html',
})
export class ResponderPage {

  public pergunta: String = new String('Vocês utilizariam esta tecnologia nos seus projetos? Justifique');
  public resposta: String = new String('');

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResponderPage')
  }

  closeModal() {
    this.view.dismiss();
  }

}
