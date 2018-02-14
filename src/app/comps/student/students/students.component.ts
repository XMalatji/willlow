import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TeachersService } from '@app/services/teachers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  addStudentForm: FormGroup;
  uEmail: FormControl;
  uPassword: FormControl;
  displayedColumns = ['name', 'surname', 'grade'];
  dataSource:{};
  addStudentMode:boolean=false;
  academicYears = [
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'}
  ];

  grades = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 1, viewValue: 'Four' },
    { value: 2, viewValue: 'Five' },
    { value: 3, viewValue: 'Six' },
    { value: 1, viewValue: 'Seven' },
    { value: 2, viewValue: 'Eight' },
    { value: 3, viewValue: 'Nine' },
    { value: 1, viewValue: 'Ten' },
    { value: 2, viewValue: 'Eleven' },
    { value: 3, viewValue: 'Twelve' }
  ];

  genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' }
  ];

  constructor(
    private toastr: ToastrService
  ) { 
 
  }

  ngOnInit() {

   
      this.toastr.success('Hello world!', 'Toastr fun!');
    
  }

}


