import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'anms-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {

  addStudentForm: FormGroup;
  emailAddress: FormControl;
  cellphone: FormControl;
  givenName: FormControl;
  familyName: FormControl;
  schoolId: FormControl;
  cellNo: FormControl;
  schoolGrade: FormControl;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  
  constructor() {
    this.emailAddress = new FormControl("", [Validators.required]);

    this.givenName = new FormControl("", [Validators.required]);
    this.familyName = new FormControl("", [Validators.required]);
    this.cellNo =new FormControl("", [Validators.required]);
    this.schoolGrade = new FormControl("", [Validators.required]);

    this.schoolId = new FormControl("", [Validators.required]);

    this.addStudentForm = new FormGroup({
      emailAddress: this.emailAddress,
      givenName:this.givenName,
      familyName:this.familyName,
      cellNo:this.cellNo,
      schoolGrade:this.schoolGrade,
      dob: this.serializedDate,
      schoolId:this.schoolId
    });
   }

  ngOnInit() {
  }

  
  addStudent(){
    console.log(this.addStudentForm.value);
  }  

}
