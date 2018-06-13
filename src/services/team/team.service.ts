import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class TeamService {


  private url = environment.url + 'team/';

  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers.append( 'Content-Type' , 'application/x-www-form-urlencoded,application/json' );
  }

  async addTeam( team, secrateryId ) {
    let _url = this.url + 'secretary/' + secrateryId + '/add';
    console.log(  _url );
    return await this.http.post(_url, team, {headers: this.headers}).toPromise();

  }


  async getAll() {
    return await this.http.get(this.url + 'getAll ',   {headers: this.headers} ).toPromise();

  }

}
