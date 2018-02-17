import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';


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
  
  constructor() { 

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

}
