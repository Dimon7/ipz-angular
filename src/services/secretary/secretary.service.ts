import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class SecretaryService {

  private url = environment.url + 'secretary/';

  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers =  new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
  }

  async getSecretary(id) {
    return await this.http.get(this.url + id,  {headers: this.headers}).toPromise();

  }


}
