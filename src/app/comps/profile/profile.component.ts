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
  uPasswordOld: FormControl;
  uPasswordNew: FormControl;
  uPasswordNew2: FormControl;
  constructor(
    private userService:UserService,
    private teacherService:TeachersService,
    private toastr: ToastrService
    
  ) { 

    this.uPasswordOld = new FormControl("", [Validators.required]);
    this.uPasswordNew = new FormControl("", [Validators.required]);
    this.uPasswordNew2 = new FormControl("", [Validators.required]);

    this.profileForm = new FormGroup({
      uPasswordOld: this.uPasswordOld,
      uPasswordNew: this.uPasswordNew,
      uPasswordNew2: this.uPasswordNew2
    });
  }

  ngOnInit() {
   
  console.log('user name:'+window.localStorage.user);

  let user = window.localStorage.user;

  let role = window.localStorage.role;
  
    if(role==='ADMINISTRATOR'){
      console.log('get admin')
      this.userService.getUser(user).subscribe(
        data => {
          console.log(data);
              
          this.person = data;
        }
      );
      
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

    this.userService.changePwd(this.uPasswordOld.value, this.uPasswordNew.value).subscribe(
      data => {
     //console.log(data);

     if(data){
      console.log('pwd changed')
      this.toastr.success(`Successfully changed! `);
      this.changedPwd=true;
     }
     else{
      this.toastr.warning(`Passwords didnt match`);
     console.log(`Pwd didnt match `);

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
