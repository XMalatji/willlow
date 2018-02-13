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

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService implements OnInit {
  theUser : {};
  isAuthenticated:boolean=true;
  userToken: string;
  jwtHelper: JwtHelper = new JwtHelper();


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

    // this.jobsCollectionRef = this.afs.collection<IJob>('jobss');
    // this.jobs$ = this.jobsCollectionRef.valueChanges();

  }

  getToken(): string {
    //console.log('ousheetr')
    if (window.localStorage.jwt === undefined) {
      console.log('u need to login');

      return null;
    }
    else {
      return window.localStorage.jwt


    }
  }

  getRole(){
   return "Admin";
  }
  getUsers() {
    return this._http.get('/api/users');
  }
  loggedIn() {
    // return tokenNotExpired("jwt");
  
    return this.isAuthenticated;
  }
  login(username: string, password: string) {

    //  let headers = new Headers({ 'Content-Type': 'application/json' });
    //  let options = new RequestOptions({ headers: headers });
    let body = {
      username: username,
      password: password
    };

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
    this._http.post('http://kariliner.dedicated.co.za:8080/willow-schools/api/login/v1', body, httpOptions).subscribe(
      d => {
        if (d) {
          this.isAuthenticated=true;
          this.theUser=d;
        }
      },

      err => {

      })
    return this._http.post('http://kariliner.dedicated.co.za:8080/willow-schools/api/login/v1', body, httpOptions);




  }

  signup(body: {}) {
    //  console.log('signing up' + body["email"]);
    return this._http.post('api/users/signup', body, httpOptions);
  }
  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  isLogged() {

  }

  getUser() {
    // //console.log(window.localStorage.jwt)
    // var token = localStorage.getItem('jwt');
    // var uId = this.jwtHelper.decodeToken(token);
    // var uuId = uId.userId;

    // let userUrl: string = '/api/users/' + uuId;
    // console.log(userUrl)
    // //let token = window.localStorage.jwt;
    // return this._http.get(userUrl)
    //   .map((resp: Response) => {
    //     return resp;
    //   })
    //   .catch(this.handleError);
    if(this.theUser){
    return this.theUser;
    }
    else{
      return "not logged inß"
    }
  }
  logout() {
    this.isAuthenticated=false;
    window.localStorage.clear();
  }

  directSearchJob(searchQ: string) {

    var search = searchQ.toLocaleLowerCase();
  }





  ngOnInit() {


  }
}

