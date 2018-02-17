
import { Injectable, EventEmitter } from '@angular/core';


import { Observable } from 'rxjs/Rx';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthHttp } from 'angular2-jwt';

import { Router } from '@angular/router';
import { User } from '@app/tyyypes/user';
import { IStudent } from '../tyyypes/tyyypes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClassService {

  constructor(
    private _http: HttpClient,
    private _router: Router) {

  }

  addClass(body: {}) {
    let rbody = JSON.stringify(body);
    return this._http.post('http://kariliner.dedicated.co.za:8080/willow-schools/api/grade-class', body, httpOptions);
  }

  addNewCurriculum(body : {}){
    let rbody = JSON.stringify(body);
    return this._http.post('http://kariliner.dedicated.co.za:8080/willow-schools/api/curriculum-grade-subject-offering', body, httpOptions);
 
  }


  getClasses(){
    return this._http.get('http://kariliner.dedicated.co.za:8080/willow-schools/api/grade-class', httpOptions);
 
  }

}
