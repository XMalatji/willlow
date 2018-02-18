import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-teachers-dashboard',
  templateUrl: './teachers-dashboard.component.html',
  styleUrls: ['./teachers-dashboard.component.scss']
})
export class TeachersDashboardComponent implements OnInit {

  displayedColumns = ['fullname', 'grade', 'term', 'mark', 'comment'];

  
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
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