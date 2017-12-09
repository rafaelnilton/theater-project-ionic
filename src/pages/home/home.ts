import { EventoProvider } from './../../providers/evento/evento';
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Observable } from "rxjs/Rx";
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventos: Observable<any[]>;
 
  constructor(public navCtrl: NavController, 
    public eventoProvider : EventoProvider,
    public loadingCtrl: LoadingController) {
    let loader = this.showLoader('Carregando os Eventos ...');
    this.eventos = eventoProvider.getEventos();
    this.eventos.subscribe(() => {
    loader.dismiss();
    });
  }

  private showLoader(message: string) {
    let loader = this.loadingCtrl.create({content: message});
    loader.present();
    return loader;
  }

  viewEvento(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
 
}