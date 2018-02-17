import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


import { Router } from '@angular/router';
import { ITeacher } from '@app/tyyypes/tyyypes';
import { UserService } from '../../shared/services/user.service';
import { IStudent } from '../../tyyypes/tyyypes';
import { grades } from './../../tyyypes/tyyypes';
import { ClassService } from '../../services/class.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'anms-class-comp',
  templateUrl: './class-comp.component.html',
  styleUrls: ['./class-comp.component.scss']
})
export class ClassCompComponent implements OnInit {
  addClassForm: FormGroup;
  enrollmentYear: FormControl;
  schoolGrade: FormControl;
  classTeacher: FormControl;
  name: FormControl;
  grades = [
    { value: 'GRADE_ONE', viewValue: '1' },
    { value: 'GRADE_TWO', viewValue: '2' },
    { value: 'GRADE_THREE', viewValue: '3' },
    { value: 'GRADE_FOUR', viewValue: '4' },
    { value: 'GRADE_FIVE', viewValue: '5' },
    { value: 'GRADE_SIX', viewValue: '6' },
    { value: 'GRADE_SEVEN', viewValue: '7' },
    { value: 'GRADE_EIGHT', viewValue: '8' },
    { value: 'GRADE_NINE', viewValue: '9' },
    { value: 'GRADE_TEN', viewValue: '10' },
    { value: 'GRADE_ELEVEN', viewValue: '11' },
    { value: 'GRADE_TWELVE', viewValue: '12' }
  ];

  academicYears = [
    { value: '2018', viewValue: '2018' }
  ];

  displayedColumns = ['select', 'givenName', 'familyName', 'dateOfBirth'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);
  students: IStudent[];


  options: FormGroup;
  Teachers: ITeacher[];
  viewClassMode: boolean = true;
  addClassNameMode: boolean = false;
  addClassMode: boolean = false;
  addStudentsMode: boolean = false;
  addForm: FormGroup;
  gradeNo: FormControl;
  className: FormControl;


  constructor(
    private teacherService: TeachersService,
    private userService: UserService,
    private classService:ClassService,
    private toastr: ToastrService,
    private router: Router) {

    this.enrollmentYear = new FormControl("", [Validators.required]);
    this.schoolGrade = new FormControl("", [Validators.required]);
    this.name = new FormControl("", [Validators.required]);
    this.classTeacher = new FormControl("", [Validators.required]);

    this.addClassForm = new FormGroup({
      enrollmentYear: this.enrollmentYear,
  
      name: this.name,
      schoolGrade: this.schoolGrade,
      classTeacher: this.classTeacher


    });


  }

  ngOnInit() {

    this.teacherService.getTeachers().subscribe(
      data => {
        this.Teachers = data;
      },

      err => {
        console.log('error')
      }
    );



    // this.dataSource = [{ "grade": "1", "className": "1A", "classTeacher": "Ms Coetzee" }];
  }
  showGrade(grade: number) {
    console.log(grade);
    this.userService.getStudents().subscribe(
      data => {
        //console.log(data)
        this.students = data;
      }

    );
  }

  addClassOpen(){
    this.addClassMode=true;
  }
  buildClass(){
    let classStudenta = this.selection.selected["id"];
   let body = this.addClassForm.value;
   body.classStudents = classStudenta;

   this.classService.addClass(body).subscribe(
     data => {
       console.log('Success @@@@@@@@' + JSON.stringify(data));
       this.toastr.success(`Successfully added class.`);
       this.addClassMode=false;
     },
     err => {
       console.log('couldnt create class' +err)
     }
   );
    console.log(body)
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  addStudent() {
    this.router.navigate(['addstudent']);
  }
  addClasses(step: number, v?: any) {
  }



}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];
