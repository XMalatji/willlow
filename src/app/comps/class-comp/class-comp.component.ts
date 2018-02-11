import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers.service';

import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'anms-class-comp',
  templateUrl: './class-comp.component.html',
  styleUrls: ['./class-comp.component.scss']
})
export class ClassCompComponent implements OnInit {
  displayedColumns = ['grade', 'className', 'classTeacher'];
  dataSource: {};
  selectGrade:number=0;
  
  grades = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' }
  ];

  viewClassMode: boolean = true;
  addClassNameMode:boolean = false;
  addClassMode: boolean = false;
  addStudentsMode:boolean = false;
  addForm: FormGroup;
  gradeNo: FormControl;
  className: FormControl;
  addClassObj:{ 
    selectGrade?:number,
    className?:string
  } = {}

  constructor(private teacherService: TeachersService, private router:Router) { 
    this.className = new FormControl( [Validators.required]);

    this.addForm = new FormGroup({
        className: this.className
    });
  }

  ngOnInit() {
    this.teacherService.getTeachers().subscribe(
      data => {
        console.log(data)
        // this.dataSource=data;
      }
    );

    this.dataSource = [{ "grade": "1", "className": "1A", "classTeacher": "Ms Coetzee" }];
  }

  addStudent(){
    this.router.navigate(['addstudent']);
  }
  addClasses(step: number, v?:any) {

    if (step == 1) {
      this.viewClassMode = false;
      this.addClassMode = true;
     this.addClassNameMode=false;
     this.addStudentsMode= false;

    }
    else if(step==2){
      this.addClassMode = false;
      this.addClassNameMode = true;
     // this.selectGrade=v;
      this.addClassObj.selectGrade=v;
    //  console.log(this.addClassObj.selectGrade)
    }
    else if(step==3){
    //  console.log(this.className.value)

    this.addClassObj.className=this.className.value;
      this.addStudentsMode=true;
      this.addClassNameMode = false;
    }
  }



}
