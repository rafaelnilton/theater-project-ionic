import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ResponderPage } from '../responder/responder';
import { PerguntasPage } from '../perguntas/perguntas';
import { PerguntarPage } from '../perguntar/perguntar';


@IonicPage()
@Component({
  selector: 'page-participar',
  templateUrl: 'participar.html',
})
export class ParticiparPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticiparPage');
  }

  perguntasPage() {
    this.navCtrl.push(PerguntasPage);
  }

  perguntarPage() {
    this.navCtrl.push(PerguntarPage);
  }



}
