import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from './../../constants/urlPadrao';

/*
  Generated class for the EnqueteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnqueteProvider {

  constructor(public http: HttpClient) {}

  apiUrl : String = apiUrl;

  responderPergunta(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/eventos', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  realizarPergunta(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/eventos', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  votarEnquete(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/eventos', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
