import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ActionAuthLogin,
  ActionAuthLogout,
  selectorAuth,
  routerTransition
} from '@app/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '@app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logForm: FormGroup;
  uEmail: FormControl;
  uPassword: FormControl;
  logo = require('./../../../assets/willow-logo.png');
  constructor(
    private store: Store<any>,
    public userService: UserService,
    private toast: ToastrService,
    private _router:Router
  ) { 
    this.uEmail = new FormControl("", [Validators.required]);
    this.uPassword = new FormControl("", [Validators.required]);

    this.logForm = new FormGroup({
      email: this.uEmail,
      password: this.uPassword
    });
  }

  ngOnInit() {
  
  }

  login() {
    let user = (this.logForm.value);
    //window.localStorage.jwt=1234;
  //  let body = JSON.stringify(user);
    console.log('oi');

    let success:boolean=false;
    this.userService.login(this.uEmail.value, this.uPassword.value).subscribe(
      data => {
     //console.log(data);

     if(data){
     
       window.localStorage.jwt = data["jwt"];
       window.localStorage.user = data["principal"];
       window.localStorage.role = data["roles"];
       console.log('logged in');
       this.toast.success('Logged in');
       this._router.navigate(['/home']);
     }
     else{
       console.log('err')
      this.toast.error('Invalid Credentials' ,'Login failed', {
        timeOut: 1000,
      });

     }
    //   //  
    //     //login
    //     console.log('route me')
    //     this._router.navigate(['/home']);
     },
     err => {
      this.toast.error('Please check your credentials', 'Login Failed', {
        timeOut: 3000,
      });
         this.handleError(err);
   
    //   }
      });



  }
 


  handleError(err){
    console.log(err)
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());

    
  }

}
