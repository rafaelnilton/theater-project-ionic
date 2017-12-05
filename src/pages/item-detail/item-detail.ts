import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
 
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 
  titulo;
  descricao;
  data;
  imagem
 
  constructor(public navParams: NavParams, protected _sanitizer: DomSanitizer){
 
  }
 
  ionViewDidLoad() {
    this.titulo = this.navParams.get('item').titulo;
    this.descricao = this.navParams.get('item').descricao;
    this.data = this.navParams.get('item').data;
    this.imagem = "";
    
  }

  getImage() {
    if (!this.navParams.get('item').imagem.base64) {
      return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }
    return 'data:image/jpeg;base64,' + this.navParams.get('item').imagem.base64;
  }

  public transform(value: string, type: string = 'html'): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
		switch (type) {
			case 'html': return this._sanitizer.bypassSecurityTrustHtml(value);
			case 'style': return this._sanitizer.bypassSecurityTrustStyle(value);
			case 'script': return this._sanitizer.bypassSecurityTrustScript(value);
			case 'url': return this._sanitizer.bypassSecurityTrustUrl(value);
			case 'resourceUrl': return this._sanitizer.bypassSecurityTrustResourceUrl(value);
			default: throw new Error(`Invalid safe type specified: ${type}`);
		}
	}
 
}