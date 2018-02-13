import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';



export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface GradeOffering {
  grade: number;
  subjects: string[];
 
}
const  ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
];

const CAMBRIDGE_DATA : GradeOffering[] = [
  {grade: 1, subjects: ['Maths','English']},
  {grade: 2, subjects: ['English','Maths']},
  {grade: 3, subjects: ['L.o','Bio']}
];

@Component({
  selector: 'anms-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

curriculums = [
    {value: 'national', viewValue: 'National'},
    {value: 'cambridge', viewValue: 'Cambridge'}
  ];

grades = [
    {value: '1', viewValue: 'Grade 1'},
    {value: '2', viewValue: 'Grade 2'},
    {value: '3', viewValue: 'Grade 3'},
    {value: '4', viewValue: 'Grade 4'},
    {value: '5', viewValue: 'Grade 5'},
    {value: '6', viewValue: 'Grade 6'},
    {value: '7', viewValue: 'Grade 7'},
    {value: '8', viewValue: 'Grade 8'},
    {value: '9', viewValue: 'Grade 9'},
    {value: '10', viewValue: 'Grade 10'},
    {value: '11', viewValue: 'Grade 11'},
    {value: '12', viewValue: 'Grade 12'},
  ];

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  subjects = [
    
  ];

  



  displayedColumns = ['grade', 'subjects'];
  dataSource = ELEMENT_DATA;

  cambridgeSource = CAMBRIDGE_DATA;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  secondCtrl:FormControl;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.secondCtrl =  new FormControl("", [Validators.required]);
  	this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });

  }

add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.subjects.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  prepSubjects(){
    let grade = this.secondCtrl.value;
    console.log(grade)
  }
 remove(subject: any): void {
    let index = this.subjects.indexOf(subject);

    if (index >= 0) {
      this.subjects.splice(index, 1);
    }
  }
}




