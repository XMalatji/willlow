import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../tyyypes/app-state';
import { Observable } from 'rxjs/Observable';
import * as studentActions from './../../ngrx/actions/student.actions'
import { Job } from '@app/tyyypes/job.class';
import { Router } from '@angular/router';
@Component({
  selector: 'anms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logo = require('./../../../assets/willow-logo.png');
  isAuthenticated:boolean = false;

  // students = [ { "name":"Phaseka"}, {"name":"John"}]

  // students$:Observable<any[]>;

  constructor(
    private store:Store<AppState>,
    private userService:UserService,
    private router:Router
    ) {

   
// initialize our students
 
     }

  ngOnInit() {
    this.isAuthenticated=this.userService.loggedIn();
      // this.getStudents();
      // this.students$ = this.store.select(state => state.students)
      // this.students$.forEach( v => console.log(v))
  }
  manageTeachers(){

  }
  manageClasses(){
    this.router.navigate(['/classes'])
  }
  getStudents(){
      // we want to dispatch na action 
      // this.store.dispatch(new studentActions.LoadStudentsAction())
  }

}
