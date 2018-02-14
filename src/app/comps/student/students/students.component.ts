import { Component, OnInit } from '@angular/core';
import { TeachersService } from '@app/services/teachers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  addStudentForm: FormGroup;
  uEmail: FormControl;
  uPassword: FormControl;
  displayedColumns = ['name', 'surname', 'grade'];
  dataSource:{};

  academicYears = [
    {value: '2018', viewValue: '2018'}
  ];

  grades = [
    { value: 1, viewValue: 'One' },
    { value: 2, viewValue: 'Two' },
    { value: 3, viewValue: 'Three' },
    { value: 1, viewValue: 'Four' },
    { value: 2, viewValue: 'Five' },
    { value: 3, viewValue: 'Six' },
    { value: 1, viewValue: 'Seven' },
    { value: 2, viewValue: 'Eight' },
    { value: 3, viewValue: 'Nine' },
    { value: 1, viewValue: 'Ten' },
    { value: 2, viewValue: 'Eleven' },
    { value: 3, viewValue: 'Twelve' }
  ];

  genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' }
  ];

  constructor(private teacherService:TeachersService) { }

  ngOnInit() {
    this.teacherService.getTeachers().subscribe(
      data => {
        console.log('#####teachers ' + data)
        this.dataSource=data;
      }
    );
    console.log(this.dataSource);
  
  }
}
