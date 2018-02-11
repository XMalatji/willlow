import { Injectable } from '@angular/core';
import { StudentService } from '@app/services/student.service';
import { Effect, Actions } from '@ngrx/effects';
import * as studentActions from './../actions/student.actions';
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/map'
@Injectable()
export class StudentEffects {

    constructor(
        private studentService:StudentService,
        private actions$:Actions
             
    ){
    }

    @Effect() loadStudents$ = this.actions$
    .ofType(studentActions.LOAD_STUDENTS)
    .pipe(switchMap(() => this.studentService.getStudents()
    .map(students => (new studentActions.LoadStudentsSuccessAction(students)))
    ))
    ;


    
}