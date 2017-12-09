import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EventoProvider {

  constructor(public afDB: AngularFireDatabase) {}


  getEventos() : Observable<any[]> {
    return this.afDB.list('/eventos').valueChanges();
  }

}
