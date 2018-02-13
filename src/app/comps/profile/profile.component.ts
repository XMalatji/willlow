import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'anms-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  changedPwd:boolean=false;
  profile: FormGroup;
  uPassword1: FormControl;
  uPassword2: FormControl;
  constructor(private userService:UserService) { 

    this.uPassword1 = new FormControl("", [Validators.required]);
    this.uPassword2 = new FormControl("", [Validators.required]);

    this.profile = new FormGroup({
      uPassword1: this.uPassword1,
      uPassword2: this.uPassword2
    });
  }

  ngOnInit() {
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
     console.error('Please check your credentials');
     });
   //   }
  


  }

}
