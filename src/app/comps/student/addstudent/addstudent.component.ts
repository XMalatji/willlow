import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '@app/shared/services/user.service';
import * as moment from 'moment';


@Component({
  selector: 'app-addstudent',
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
  grade: FormControl;
  cellNo: FormControl;
  schoolGrade: FormControl;
  gender: FormControl;
dateOfBirth:FormControl;
serializedDate:FormControl;
  academicYears = [
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'}
  ];

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

  genders = [
    { value: 'MALE', viewValue: 'Male' },
    { value: 'FEMALE', viewValue: 'Female' }
  ];
  
  constructor(
    private toastr: ToastrService,
    private userService:UserService
  ) {
    this.emailAddress = new FormControl("", [Validators.required]);
    this.dateOfBirth = new FormControl("",Validators.required);
    this.serializedDate = new FormControl((new Date()).toISOString());
  
    this.givenName = new FormControl("", [Validators.required]);
    this.familyName = new FormControl("", [Validators.required]);
    this.cellNo =new FormControl("", [Validators.required]);
    this.schoolGrade = new FormControl("", [Validators.required]);
    this.gender = new FormControl("", [Validators.required]);
    this.schoolGrade = new FormControl("", [Validators.required]);
    this.schoolId = new FormControl("", [Validators.required]);

    this.addStudentForm = new FormGroup({
      emailAddress: this.emailAddress,
      givenName:this.givenName,
      familyName:this.familyName,
      cellphone:this.cellNo,
      schoolGrade:this.schoolGrade,
      dateOfBirth: this.dateOfBirth,
      schoolId:this.schoolId,
      gender:this.gender
    });
   }

  ngOnInit() {
  }

  
  addStudent(){
    let body = {};
    let newDate = moment(this.dateOfBirth.value).format('YYYY-MM-DD');
 
    body =this.addStudentForm.value;
    body["dateOfBirth"] = newDate;
    body['partyRoles'] = [	
      {

        "partyRoleType" : "STUDENT"
      }
    ]	;
    console.log('body'+JSON.stringify(body));
    this.userService.addStudent(body).subscribe( 
      data => {
        if(data){
          console.log('successfully added student');
      
         }
        else{
          console.log('no result')
        }
      },
      err => {
        console.log(err)
      }
    );
   // console.log(picker)
    console.log(body);

    // this.toastr.error(`Passwords didn't match`);
  }  

}
