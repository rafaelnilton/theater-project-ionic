import { EventoProvider } from './../../providers/evento/evento';
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data/data';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Rx"

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data, 
    public http: Http, public eventoProvider : EventoProvider) {
      this.getEventos();
    }

    eventos : any;
 
    getEventos() {
      this.eventoProvider.getEventos()
      .then(data => {
        this.eventos = data;
        console.log(this.eventos);
      });
    }

    viewEvento(item){
      this.navCtrl.push(ItemDetailPage, {
        item: item
      });
    }
 
}