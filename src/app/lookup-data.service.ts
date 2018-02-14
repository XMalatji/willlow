import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LookupDataService implements OnInit  {

  academicYear = {};

  constructor(private _http: HttpClient) { }

 ngOnInit() {
 
  }

  public getLookupData() {
    console.log("@@@we are in lookup data service ...");
    this._http.get('http://kariliner.dedicated.co.za:8080/willow-schools/api/academic-year', httpOptions).subscribe(
      d => {
        console.log( d);
        this.academicYear = d;
        console.log("Academic Year " + JSON.stringify(this.academicYear)); 
      },
      err => {

      });
  }

}
