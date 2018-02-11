import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

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
    {value: 'gradeOne', viewValue: 'Grade One'},
    {value: 'gradeTwo', viewValue: 'Grade Two'},
    {value: 'gradeThree', viewValue: 'Grade Three'},
    {value: 'gradeFour', viewValue: 'Grade Four'},
    {value: 'gradeFix', viewValue: 'Grade Five'},
    {value: 'gradeSix', viewValue: 'Grade Six'},
    {value: 'gradeSeven', viewValue: 'Grade Seven'},
    {value: 'gradeEight', viewValue: 'Grade Eight'},
    {value: 'gradeNine', viewValue: 'Grade Nine'},
    {value: 'gradeTen', viewValue: 'Grade Ten'},
    {value: 'gradeEleven', viewValue: 'Grade Eleven'},
    {value: 'gradeTwelve', viewValue: 'Grade Twelve'},
  ];

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  subjects = [
    
  ];

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

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

 remove(subject: any): void {
    let index = this.subjects.indexOf(subject);

    if (index >= 0) {
      this.subjects.splice(index, 1);
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
