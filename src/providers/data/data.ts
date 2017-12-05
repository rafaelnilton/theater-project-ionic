import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class Data {
  public dados;
 
  constructor(public storage: Storage, public http: Http){
  }

  headers(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers:headers});
    return options;
  }
 
  
  // getData() {
  //   return this.http.get('http://teatrofacisa.m1ller.com.br/api/eventos', this.headers()).success(function(data){
      
  //       $scope.search = data;
  //     });
  // }
 
  save(data){
    this.storage.set('todos', data);
  }
 
}