import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 
  public titulo;
  public descricao;
  public data;
  public image;
  public imageNotFound;
  public flagPossuiImagem;
 
  constructor(public navParams: NavParams){
  }
 
  ionViewDidLoad() {
    this.titulo = this.navParams.get('evento').titulo;
    this.descricao = this.navParams.get('evento').descricao;
    this.data = this.navParams.get('evento').data;
    this.carregarImagenBase64();
  }
 
  carregarImagenBase64 (){
    let imagenEvento = this.navParams.get('evento').imagem;
    if (imagenEvento != undefined){
      this.image = this.navParams.get('evento').imagem.base64;
      this.flagPossuiImagem = true;
    }else{
      this.imageNotFound = "../assets/imgs/sorry-image-not-available.jpg";
      this.flagPossuiImagem = false;
    }
  }

}