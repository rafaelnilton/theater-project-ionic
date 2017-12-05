import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ResponderPage } from '../responder/responder';

/**
 * Generated class for the ParticiparPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participar',
  templateUrl: 'participar.html',
})
export class ParticiparPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticiparPage');
  }

  responderModal() {
    let myModal = this.modalCtrl.create(ResponderPage);
    myModal.present();
  }

}
