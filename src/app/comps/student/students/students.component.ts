import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TeachersService } from '@app/services/teachers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-student',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  addStudentForm: FormGroup;
  uEmail: FormControl;
  uPassword: FormControl;
  displayedColumns = ['name', 'surname', 'grade'];
  dataSource:{};
  addStudentMode:boolean=false;
 

  constructor(

  ) { 
 
  }

  ngOnInit() {

   
    
  }
  addStudentOpen(){
    this.addStudentMode=true;
  }
}


