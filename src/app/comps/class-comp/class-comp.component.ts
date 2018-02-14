import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';


import {
  FormControl,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'anms-class-comp',
  templateUrl: './class-comp.component.html',
  styleUrls: ['./class-comp.component.scss']
})
export class ClassCompComponent implements OnInit {

 academicYears = [
    {value: '2018', viewValue: '2018'}
  ];
   
  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  // displayedColumns = ['grade', 'className', 'classTeacher'];
  // dataSource: {};
  // selectGrade:number=0;
  
  // grades = [
  //   { value: 1, viewValue: '1' },
  //   { value: 2, viewValue: '2' },
  //   { value: 3, viewValue: '3' }
  // ];

  options: FormGroup;

  viewClassMode: boolean = true;
  addClassNameMode:boolean = false;
  addClassMode: boolean = false;
  addStudentsMode:boolean = false;
  addForm: FormGroup;
  gradeNo: FormControl;
  className: FormControl;
  addClassObj:{ 
    selectGrade?:number,
    className?:string
  } = {}

  constructor(private teacherService: TeachersService, private router:Router, fb: FormBuilder) { 
    this.className = new FormControl( [Validators.required]);

    this.addForm = new FormGroup({
        className: this.className
    });

    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
    this.teacherService.getTeachers().subscribe(
      data => {
        console.log(data)
        // this.dataSource=data;
      }
    );

    // this.dataSource = [{ "grade": "1", "className": "1A", "classTeacher": "Ms Coetzee" }];
  }

  addStudent(){
    this.router.navigate(['addstudent']);
  }
  addClasses(step: number, v?:any) {

    if (step == 1) {
      this.viewClassMode = false;
      this.addClassMode = true;
     this.addClassNameMode=false;
     this.addStudentsMode= false;

    }
    else if(step==2){
      this.addClassMode = false;
      this.addClassNameMode = true;
     // this.selectGrade=v;
      this.addClassObj.selectGrade=v;
    //  console.log(this.addClassObj.selectGrade)
    }
    else if(step==3){
    //  console.log(this.className.value)

    this.addClassObj.className=this.className.value;
      this.addStudentsMode=true;
      this.addClassNameMode = false;
    }
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
];
