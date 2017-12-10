import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the EnqueteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnqueteProvider {

  perguntas: AngularFireList<any>;
  respostas: AngularFireList<any>;

  constructor(public afDB: AngularFireDatabase) {}

  getPerguntas() : Observable<any[]> {
    return this.afDB.list('/perguntas').valueChanges();
  }

  getRespostas() : Observable<any[]> {
    return this.afDB.list('/respostas').valueChanges();
  }

  addPergunta (pergunta) {
    this.afDB.list('/perguntas').push({ descricao : pergunta });
  }
  
  addResposta (resposta) {
    this.afDB.list('/respostas').push({ descricaoResposta : resposta });
  }

  getEnquetes () : Observable<any[]> {
    return this.afDB.list('/enquetes').valueChanges();
  }
  
}
