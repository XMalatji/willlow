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


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TeachersService implements OnInit {



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

  createCredentials(body:{}){
    console.log(body)
    return this._http.post('http://kariliner.decicated.co.za:8080/willow-schools/api/credentials', body, httpOptions);
  }
  addTeacher(body : {}) {

    //  let headers = new Headers({ 'Content-Type': 'application/json' });
 //  console.log(body)

    let rbody = JSON.stringify(body);
    //console.log('servin' + body.email)
    // console.log('we loggin in' + body.email);
    // return this._http.post('http://localhost:8000/api/users/login', { email: username, password: password })
    //     .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log("service Error occured");
    //   });
  
    return this._http.post('http://kariliner.decicated.co.za:8080/willow-schools/api/person', body, httpOptions);




  }

  sendEmail(body : {}){
    console.log(body)
    return this._http.post('http://kariliner.decicated.co.za:8080/willow-schools/api/email', body, httpOptions);

  }


  
  getTeachers(){
    return this._http.get('api/person/teachers')
    .map((resp: Response) => {
      return resp;
    })
  }


    handleError(error: any){
      console.log(error)
    }
  ngOnInit() {


  }
}

