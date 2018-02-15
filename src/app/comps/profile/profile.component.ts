import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../tyyypes/user';
import { ITeacher } from '@app/tyyypes/tyyypes';
import { BehaviorSubject } from 'rxjs';
import { IPerson } from '../../tyyypes/tyyypes';
import { TeachersService } from '@app/services/teachers.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'anms-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  person: IPerson;
  private _data = new BehaviorSubject<IPerson[]>([]);
  
  changedPwd:boolean=false;
  profileForm: FormGroup;
  uPassword1: FormControl;
  uPassword2: FormControl;
  constructor(
    private userService:UserService,
    private teacherService:TeachersService,
    private toastr: ToastrService
    
  ) { 

    this.uPassword1 = new FormControl("", [Validators.required]);
    this.uPassword2 = new FormControl("", [Validators.required]);

    this.profileForm = new FormGroup({
      uPassword1: this.uPassword1,
      uPassword2: this.uPassword2
    });
  }

  ngOnInit() {
   
  console.log('user name:'+window.localStorage.user);

  let user = window.localStorage.user;

  let role = window.localStorage.role;
  
    if(role==='ADMINISTRATOR'){
      console.log('get admin')
      
    }
    else if(role=="SUBJECT_TEACHER"){
        console.log('get teacher');
        this.teacherService.getTeacher(user).subscribe(
          data => {
            console.log(data);
                
            this.person = data;
          }
        );
    }
  }

  changePwd(){

    this.userService.changePwd(this.uPassword1.value, this.uPassword2.value).subscribe(
      data => {
     //console.log(data);

     if(data){
      console.log('pwd changed')
      this.changedPwd=true;
     }
     else{
  
     console.log('Pwd didnt match');

    }
   //   //  
   //     //login
   //     console.log('route me')
   //     this._router.navigate(['/home']);
    },
    err => {
      this.toastr.error(`Passwords didn't match`);
     console.error('Please check your credentials');
     });
   //   }
  


  }

}
