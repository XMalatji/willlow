import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ActionAuthLogin,
  ActionAuthLogout,
  selectorAuth,
  routerTransition
} from '@app/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '@app/shared/services/user.service';
import { Router } from '@angular/router';
import { LookupDataService } from '../../lookup-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  appLoading:boolean = false;
  logForm: FormGroup;
  uEmail: FormControl;
  uPassword: FormControl;
  logo = require('./../../../assets/willow-logo.png');
  constructor(
    private store: Store<any>,
    public userService: UserService,

    private _router: Router,
    public lookupDataService: LookupDataService
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
    this.appLoading = true;
    let success: boolean = false;
    this.userService.login(this.uEmail.value, this.uPassword.value).subscribe(
      data => {
      if (data) {

          window.localStorage.jwt = data["jwt"];
          window.localStorage.user = data["principal"].name;
          window.localStorage.role = data["roles"];

          this._router.navigate(['/home']);
          this.lookupDataService.getLookupData();
        }
        else {
          console.log('err')

          this.appLoading=false;

        }
      },
      err => {
        this.appLoading=false;
        this.handleError(err);
      }),

      () => {
        this.appLoading = false;
      };
  }

  handleError(err) {
    console.log(err);
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());
  }

}
