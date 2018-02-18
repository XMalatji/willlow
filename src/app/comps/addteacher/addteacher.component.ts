import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TeachersService } from '@app/services/teachers.service';
import { IPerson } from '../../tyyypes/tyyypes';


@Component({
  selector: 'anms-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.scss']
})
export class AddteacherComponent implements OnInit {

  addTeacherForm: FormGroup;
  emailAddress: FormControl;
  cellphone: FormControl;
  givenName: FormControl;
  familyName: FormControl;
  retTeacher:IPerson;
  
  constructor(private teacherService:TeachersService) { 

    this.emailAddress = new FormControl("", [Validators.required]);
    this.cellphone = new FormControl("", [Validators.required]);
    this.givenName = new FormControl("", [Validators.required]);
    this.familyName = new FormControl("", [Validators.required]);
    this.addTeacherForm = new FormGroup({
      emailAddress: this.emailAddress,
      cellphone: this.cellphone,
      givenName:this.givenName,
      familyName:this.familyName
    });

  }

  ngOnInit() {
  }

  addTeacher(){

    let body = {};

    body =this.addTeacherForm.value;
    body['partyRoles'] = [	
      {

        "partyRoleType" : "SUBJECT_TEACHER"
      }
    ]	;


    console.log(body);
  
 
    this.teacherService.addTeacher(body).subscribe( 
      data => {
        if(data){
          console.log('successfully added teacher');
        
          this.retTeacher=data;
         }
        else{
          console.log('no result')
        }
      },
      err => {
        console.log(err)
      }
    );
  }

}
