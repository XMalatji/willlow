import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'anms-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  dataSource=[
    {
      "className":"Elephants",
      "classGrade":2,
      "students":20,
      "teacher": "Mr Jackson"
    },
    {
      "className":"Lions",
      "classGrade":12,
      "students":24,
      "teacher": "Mr Luckosn"
    },
  ];

  displayedColumns = ['name','grade', 'students', 'teacher'];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  viewStudents(){
    this.router.navigate(['students']);
  }

}
