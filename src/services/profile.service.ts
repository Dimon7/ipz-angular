import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class ProfileService {

  private url = environment.url;


  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    // this.url = environment.url;
    this.headers.append( 'Content-Type' , 'application/x-www-form-urlencoded,application/json' );
  }

  async register( user, evt ) {


    const _url = this.url + 'reg/' + evt + 'registration';
    console.log( _url );
    return await this.http.post(_url,  user, {headers: this.headers}).toPromise();

  }
  signIn(dto) {

    return this.http.post(this.url + 'regg',  dto, {headers: this.headers});
  }



}
