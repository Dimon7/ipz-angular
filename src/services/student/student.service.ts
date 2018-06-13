import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class StudentService {


  private url = environment.url + 'student/';

  headers: HttpHeaders;
  constructor(public http: HttpClient) {

    this.headers =  new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

  }

  async getStudent(id) {
    this.headers = this.headers.set(
      'Authorization', 'Bearer ' + localStorage.getItem('token')
    );
    return await this.http.get(this.url + id,  {headers: this.headers }).toPromise();

  }

  async getAll() {


    this.headers = this.headers.set(
      'Authorization', 'Bearer ' + localStorage.getItem('token')
    );

    return await this.http.get( this.url + 'getAll', {headers: this.headers}).toPromise();
  }

  async editStudent( student ) {

    return await this.http.put( this.url + 'edit', student, {headers: this.headers} ).toPromise();


  }


}
