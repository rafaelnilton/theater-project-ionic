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
 
  public eventos = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data, public http: Http) {
 

    this.http.get('http://teatrofacisa.m1ller.com.br/api/eventos').map(res => res.json()).subscribe(data => {
      console.log(">>>>>>>>>>>todos: ", data);
        this.eventos = data;
    });

  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present(); 
  }
 
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
 
}