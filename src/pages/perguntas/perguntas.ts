import { EnqueteProvider } from './../../providers/enquete/enquete';
import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController } from 'ionic-angular';
import { ResponderPage } from '../responder/responder';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the PerguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class PerguntasPage {
  
  perguntas: Observable<any[]>;
  
   constructor(public navCtrl: NavController, 
     public enqueteProvider : EnqueteProvider,
     public loadingCtrl: LoadingController) {
     let loader = this.showLoader('Carregando as Perguntas do Evento ...');
     this.perguntas = enqueteProvider.getPerguntas();
     this.perguntas.subscribe(() => {
     loader.dismiss();
     });
   }
 
   private showLoader(message: string) {
     let loader = this.loadingCtrl.create({content: message});
     loader.present();
     return loader;
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasPage');
  }

  public responderModal(pergunta) {
    this.navCtrl.push(ResponderPage, { pergunta : pergunta });
  }

}
