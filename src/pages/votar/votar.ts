import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { EnqueteProvider } from '../../providers/enquete/enquete';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-votar',
  templateUrl: 'votar.html',
})
export class VotarPage {

  enquetes: Observable<any[]>;
  resultadoEnquente : Observable<any[]>;
  listaLike = [];
  listaDeslike = [];
  imagemEvento = "../assets/imgs/teatroEnquete.jpg";
  
   constructor(public navCtrl: NavController, 
     public view: ViewController, 
     public alertCtrl: AlertController,
     public enqueteProvider : EnqueteProvider,
     public loadingCtrl: LoadingController) {
     let loader = this.showLoader('Carregando as Enquetes do Evento ...');
     this.enquetes = this.enqueteProvider.getEnquetes();
     this.enquetes.subscribe(() => {
      loader.dismiss();
     });
     
   }
  
   private showLoader(message: string) {
     let loader = this.loadingCtrl.create({content: message});
     loader.present();
     return loader;
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotarPage');
  }

  votar(codigoVoto) {

    if (codigoVoto == 'like'){
      this.listaLike.push(codigoVoto);
      this.likeAlert();
    }else{
      this.listaDeslike.push(codigoVoto);
      this.deslikeAlert();
    }

  }

  closeModal() {
    this.view.dismiss();
  }

  likeAlert() {
    let alert = this.alertCtrl.create({
      title: 'Que bom que você está gostando. :)',
      subTitle: '',
      buttons: ['Ok']
    });
    alert.present();
  }

  deslikeAlert() {
    let alert = this.alertCtrl.create({
      title: 'Vamos tentar melhorar o nível da Paletra, desculpe. :(',
      subTitle: '',
      buttons: ['Ok']
    });
    alert.present();
  }

}
