import { Component, OnInit } from '@angular/core';
import { TeachersService } from '@app/services/teachers.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  displayedColumns = ['name', 'surname', 'grade'];
  dataSource:{};

  grades = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' }
  ];

  constructor(private teacherService:TeachersService) { }

  ngOnInit() {
    this.teacherService.getTeachers().subscribe(
      data => {
        console.log(data)
        this.dataSource=data;
      }
    );
    console.log(this.dataSource)
  }

}
