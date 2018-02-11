import { Injectable } from '@angular/core';
import { Student } from '@app/tyyypes/student.class';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Job } from '@app/tyyypes/job.class';
@Injectable()
export class StudentService {
    students:Student[];
    jobs: Observable <any> ;

    constructor( private _http: HttpClient){
        
    }
    getStudents():Observable<any> {
        return this._http.get('/api/jobs');
    }
    
}