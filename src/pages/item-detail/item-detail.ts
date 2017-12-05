import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 
  titulo;
  descricao;
  data;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.titulo = this.navParams.get('item').titulo;
    this.descricao = this.navParams.get('item').descricao;
    this.data = this.navParams.get('item').data;
  }
 
}