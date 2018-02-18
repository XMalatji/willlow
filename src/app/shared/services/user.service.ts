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

import { User } from '@app/tyyypes/user';
import { IStudent, IPerson } from '../../tyyypes/tyyypes';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  theUser: {};
  name: string;
  surname: string;
  isAuthenticated: boolean = true;
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
    private _http: HttpClient
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


      return window.localStorage.jwt;

    }
  }

  getRole() {
   
    return window.localStorage.role;
  }
  getAdminProfile(){

  }
  getTeacherProfile(){

  }
  getName() {
    let name: string = window.localStorage.user;
    let role=window.localStorage.role;
   if(role=="ADMINISTRATOR"){
     
   }
   else if(role=="TEACHER"){

   }
   else{
     console.log('oiste')
   }
    return name;
  }
  forgotPwd(email: string) {
    console.log('oister')
  }
  getUsers() {
    return this._http.get('/api/users');
  }
  loggedIn() {
    if (window.localStorage.jwt === undefined) {
      return false;
    }
    else {
     // console.log(window.localStorage.jwt)
      return true;
    }

  }
  getUserName(){
    return window.localStorage.user;
  }
  changePwd(pwd1: string, pwd2: string) {
    let body = {
      username: this.getUserName(),
      oldPassword: pwd1,
      newPassword: pwd2
    };

    let rbody = JSON.stringify(body);
    console.log(`Pwd payload ${JSON.stringify(body)}`)
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

    return this._http.post('http://kariliner.dedicated.co.za:8080/willow-schools/api/credentials/change-password', body, httpOptions);

  }
  login(username: string, password: string) {

    let body = {
      username: username,
      password: password
    };


    return this._http.post('http://kariliner.dedicated.co.za:8080/willow-schools/api/login/v1', body, httpOptions);


  }
  logout(){
    this.isAuthenticated = false;
    window.localStorage.clear();
    return this._http.get('http://kariliner.dedicated.co.za:8080/willow-schools/api/login/v1', httpOptions);
  }
  addStudent(body : {}) {

    let rbody = JSON.stringify(body);

  
    return this._http.post('http://kariliner.dedicated.co.za:8080/willow-schools/api/student', body, httpOptions);

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

  getUser(user:string):Observable<IPerson>{
    // this.teacher =  this._http.get('http://kariliner.dedicated.co.za:8080/willow-schools/api/teacher?email=xmalatji@gmail.com');
      //return this.teacher;
      
       return this._http.get<IPerson>('http://kariliner.dedicated.co.za:8080/willow-schools/api/person/email?email='+user, httpOptions);
    }


  directSearchJob(searchQ: string) {

    var search = searchQ.toLocaleLowerCase();
  }




    getStudents():Observable<IStudent[]>{
      // this.teacher =  this._http.get('http://kariliner.dedicated.co.za:8080/willow-schools/api/teacher?email=xmalatji@gmail.com');
        //return this.teacher;
        
         return this._http.get<IStudent[]>('http://kariliner.dedicated.co.za:8080/willow-schools/api/teacher/all', httpOptions);
      
  }

  ngOnInit() {


  }
}

