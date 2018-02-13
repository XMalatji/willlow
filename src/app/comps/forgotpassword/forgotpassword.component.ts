import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '@app/shared/services/user.service';

@Component({
  selector: 'anms-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm: FormGroup;
  email: FormControl;
forgotResult:boolean=false;
forgotQ:boolean=true;
  constructor(private userService:UserService){
    this.email = new FormControl("", [Validators.required]);

    this.forgotForm = new FormGroup({
      email: this.email
    });
  }

  ngOnInit() {
  }

  sendForgotEmail(){
   this.forgotResult=true; 
   this.forgotQ=false;
   let email = this.email.value;
  //  this.userService.forgotPwd(this.email.value).subscribe(
  //   data => {

  //   }
  }
}
