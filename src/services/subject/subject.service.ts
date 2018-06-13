import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class SubjectService {


  private url = environment.url + 'subject/';

  headers = new HttpHeaders();


  constructor(private http: HttpClient) {
    this.headers.append( 'Content-Type' , 'application/x-www-form-urlencoded,application/json' );
  }

  async addSubject( sub, secretaryId ) {
    return await this.http.post(this.url + 'secretary/ ' + secretaryId + '/add', sub, {headers: this.headers}).toPromise();

  }

  async getSubjectsByTeacher(tId){
    return await this.http.get(this.url + 'teacher/' + tId + '/getAll',   {headers: this.headers} ).toPromise();
  }

  async getAll() {
    return await this.http.get(this.url + 'getAll ',   {headers: this.headers} ).toPromise();

  }

}
