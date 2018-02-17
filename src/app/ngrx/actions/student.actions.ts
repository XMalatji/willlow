import { Student } from '../../tyyypes/student.class';
import { Job } from '@app/tyyypes/job.class';
import { IStudent } from '../../tyyypes/tyyypes';

export const LOAD_STUDENTS = 'LOAD_STUDENTS;'
export const LOAD_STUDENTS_SUCCESS = 'LOAD_STUDENTS_SUCCESS;'


export class  LoadStudentsAction {
    readonly type = LOAD_STUDENTS;

    constructor(){

    }
}


export class  LoadStudentsSuccessAction {
    readonly type = LOAD_STUDENTS_SUCCESS;

    constructor(public payload : IStudent[]){

    }
}


export type Action = 
    LoadStudentsAction | LoadStudentsSuccessAction;

