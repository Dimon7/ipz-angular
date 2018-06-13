import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ExamService {


  private url = environment.url + 'exam/';

  private headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers.append( 'Content-Type' , 'application/x-www-form-urlencoded,application/json' );
  }

  async addExam( exam ) {
    return await this.http.post( this.url + 'add', exam, {headers: this.headers} ).toPromise();
  }

  async getExamsByTeacher(tId) {
    return await this.http.get(this.url + 'teacher/' + tId + '/getAll',   {headers: this.headers} ).toPromise();
  }

  async getExamsByStudent(sId) {
    return await this.http.get(this.url + 'student/' + sId + '/getAll',   {headers: this.headers} ).toPromise();
  }

  async getAllExams() {
    return await this.http.get(this.url + 'getAll',   {headers: this.headers} ).toPromise();
  }


  async editExam(e, tId) {

    return await this.http.put(this.url + 'teacher/' + tId + '/edit', e,  {headers: this.headers} ).toPromise();
  }

  async Summary() {
    return await this.http.get(this.url + 'summary').toPromise();
  }





}
