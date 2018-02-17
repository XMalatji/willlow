import { Injectable, OnInit, EventEmitter } from '@angular/core';

//import decode from 'jwt-decode';
import { Observable } from 'rxjs/Rx';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthHttp } from 'angular2-jwt';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { User } from '@app/tyyypes/user';
import { ITeacher } from '@app/tyyypes/tyyypes';
import { IPerson, IStudent } from '../tyyypes/tyyypes';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService implements OnInit {
asd:string="lol";
  teacher = {};

  // usersRef: string = 'http://localhost:8000/api/users';
  // const httpOptions :{} = {
  //   headers: new HttpHeaders({ 
  //     'Access-Control-Allow-Origin':'*',
  //     'Authorization':'authkey',
  //     'userid':'1'
  //   })
  // };
  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {


  }

  
  getStudents():Observable<IStudent[]>{
  // this.teacher =  this._http.get('http://kariliner.dedicated.co.za:8080/willow-schools/api/teacher?email=xmalatji@gmail.com');
    //return this.teacher;
    
     return this._http.get<IStudent[]>('http://kariliner.dedicated.co.za:8080/willow-schools/api/teacher/all', httpOptions);
  }



    handleError(error: any){
      console.log(error)
    }
  ngOnInit() {


  }
}

