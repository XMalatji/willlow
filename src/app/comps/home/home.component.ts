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

  isAuthenticated:boolean = false;
  eventList = {
    0: 'EventOne',
    1: 'EventTwo',
    2: 'EventThree'
  }
  // students = [ { "name":"Phaseka"}, {"name":"John"}]

  // students$:Observable<any[]>;

  constructor(
    private store:Store<AppState>,
    public userService:UserService,
    private router:Router
    ) {

   
// initialize our students
 
     }

  ngOnInit() {
  
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
