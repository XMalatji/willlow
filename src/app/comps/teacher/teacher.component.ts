import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TeachersService } from '../../services/teachers.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IPerson } from '../../tyyypes/tyyypes';
@Component({
  selector: 'anms-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
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
    this.teacherService.addTeacher(this.addTeacherForm.value).subscribe( 
      data => {
        if(data){
          console.log('successfully added teacher')
          this.retTeacher=data;
          let credBody = {
              "partyId":this.retTeacher.id,
              "username":this.emailAddress.value,
              "password":"willow1234"
          }
          this.teacherService.createCredentials(credBody).subscribe(
              credData => {
                if(credData){
                  console.log('successfully created password');
                  let credBody = {
                    
                    "recipient" :"xmalatji@gmail.com",
	                  "subject"	: "Willow International School Demo",
                    "message"	: "You have been added to the Grading system. Please find herein ,your password <b> Willow1234</b>",
                    
	              "fromAddress"	: "luckson@kariliner.co.za"
                }
                this.teacherService.sendEmail(credBody).subscribe(
                  d => {
                    console.log('email sent')
                  }
                );



                }
              }
          )


        }
      }
    );
  }

}
