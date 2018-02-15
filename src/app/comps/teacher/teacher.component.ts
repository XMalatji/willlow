import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TeachersService } from '../../services/teachers.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IPerson } from '../../tyyypes/tyyypes';
import { AModalComponent } from '@app/shared/a-modal/a-modal.component';
import { ITeacher } from '@app/tyyypes/tyyypes';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'anms-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit ,AfterViewInit{


  counter:ITeacher;
  teachersSource:ITeacher[];
  addTeacherForm: FormGroup;
  emailAddress: FormControl;
  cellphone: FormControl;
  givenName: FormControl;
  familyName: FormControl;
  retTeacher:IPerson;
  teachers$:Observable<ITeacher[]>;
  addTeacherMode:boolean=false;
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
  ngAfterViewInit() {
  
  }

  ngOnInit() {

    this.teacherService.getTeachers().subscribe(
      data => {
      //  console.log('here -' +JSON.stringify(data));
//console.log('ooo'+data)
        this.teachersSource = data;
      //  this.counter=this.teachersSource;
       // console.log('sauce'+JSON.stringify(this.teachersSource));
      }
    );


  }

  addTeacherOpen(){
    console.log('oi')
    this.addTeacherMode=true;
  }

  getAllTeachers(){
  
  }
  closeMenu(){
    this.addTeacherMode=false;
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
         this.addTeacherMode=false;
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
