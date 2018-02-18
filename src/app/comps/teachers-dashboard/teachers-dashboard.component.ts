import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { IStudent } from '@app/tyyypes/tyyypes';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-teachers-dashboard',
  templateUrl: './teachers-dashboard.component.html',
  styleUrls: ['./teachers-dashboard.component.scss']
})
export class TeachersDashboardComponent implements OnInit {
  gradeForm: FormGroup;
  termCtrl: FormControl;
 
  displayedColumns = ['givenName', 'grade', 'term', 'mark', 'comment'];

  
  dataSource = ELEMENT_DATA;
  studentSource:IStudent[];
  constructor(private studentService:StudentService) { 
  this.termCtrl = new FormControl("", [Validators.required]);
    this.gradeForm = new FormGroup({
      termCtrl: this.termCtrl,
    

    });
  }

  ngOnInit() {
   
  }

  gradeStudent(){
    console.log('oi')
  }

  filterGrade(grade:number){
    this.studentService.getStudents().subscribe(
      data => {
      console.log('here -' +JSON.stringify(data));
//console.log('ooo'+data)
        this.studentSource = data;
      //  this.counter=this.teachersSource;
       // console.log('sauce'+JSON.stringify(this.teachersSource));
      }
    );
  }
}

export interface Element {
  fullname: string;
  grade: string;
  term: string;
  mark: string;
  comment: string;
}

const ELEMENT_DATA: Element[] = [
  {fullname: 'Anthony Tivani', grade: 'One', term: 'One', mark: '50%', comment: 'This is not good, pull up your socks'},
];