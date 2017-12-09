import { apiUrl } from './../../constants/urlPadrao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class EventoProvider {

  constructor(public http: HttpClient) {}

  apiUrl : String = apiUrl;

  getEventos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/eventos').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
