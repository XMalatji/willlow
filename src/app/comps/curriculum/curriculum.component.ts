import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { ToastrService } from 'ngx-toastr';



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


  curriForm: FormGroup;
curriculums = [
    {value: 'national', viewValue: 'National'},
    {value: 'cambridge', viewValue: 'Cambridge'}
  ];
  grades = [
    { value: 'GRADE_ONE', viewValue: '1' },
    { value: 'GRADE_TWO', viewValue: '2' },
    { value: 'GRADE_THREE', viewValue: '3' },
    { value: 'GRADE_FOUR', viewValue: '4' },
    { value: 'GRADE_FIVE', viewValue: '5' },
    { value: 'GRADE_SIX', viewValue: '6' },
    { value: 'GRADE_SEVEN', viewValue: '7' },
    { value: 'GRADE_EIGHT', viewValue: '8' },
    { value: 'GRADE_NINE', viewValue: '9' },
    { value: 'GRADE_TEN', viewValue: '10' },
    { value: 'GRADE_ELEVEN', viewValue: '11' },
    { value: 'GRADE_TWELVE', viewValue: '12' }
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
  firstCtrl:FormControl;
  secondCtrl:FormControl;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  subjectList:FormControl;
  constructor(
    private _formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.secondCtrl =  new FormControl("", [Validators.required]);
    this.subjectList =  new FormControl("", [Validators.required]);
    this.firstCtrl =  new FormControl("", [Validators.required]);
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
    this.curriForm = new FormGroup({
      typeOfCurriculum: this.firstCtrl,
      schoolGrade: this.secondCtrl,
 
    });

  }
  addCurriculum(){

    console.log('oi'+JSON.stringify(this.firstFormGroup.value));
   let subjects = this.subjects;
   let grade = this.secondFormGroup.value;
   let curriculum = this.firstFormGroup.value;
    let body = {};
    body["typeOfCurriculum"] = curriculum;

    body["schoolGrade"] = grade;
    body["gradeSubjects"] = this.subjects;
    console.log(`Currciulum@@@@@@ ${JSON.stringify(body)}`)
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




