import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../tyyypes/tyyypes';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'anms-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.scss']
})
export class StudentslistComponent implements OnInit {

  displayedColumns = ['givenName', 'familyName', 'dateOfBirth'];
  dataSource = ELEMENT_DATA;
studentSource:IStudent[];

  constructor(private studentService:StudentService) { }

  ngOnInit() {

    this.studentService.getStudents().subscribe(
      data => {
      //  console.log('here -' +JSON.stringify(data));
//console.log('ooo'+data)
        this.studentSource = data;
      //  this.counter=this.teachersSource;
       // console.log('sauce'+JSON.stringify(this.teachersSource));
      }
    );

  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
];