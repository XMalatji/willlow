import {
  Component, OnInit, 
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,Input,
  ViewEncapsulation,
  SimpleChanges
} from '@angular/core';
import { AModalComponent } from '@app/shared/a-modal/a-modal.component';
import { IPerson, ITeacher } from '../../tyyypes/tyyypes';
import { UserService } from '../../shared/services/user.service';
import { Observable } from 'rxjs/Observable';
import { TeachersService } from '@app/services/teachers.service';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';




@Component({
  selector: 'app-teachers-view',
  templateUrl: './teachers-view.component.html',
  styleUrls: ['./teachers-view.component.scss']
})
export class TeachersViewComponent implements OnInit {
  appLoading:boolean = false;
  displayedColumns = ['name', 'surname', 'email','cell'];
  dataSource=[
    {"givenName":"Phaseka"}
  ];
  private _data = new BehaviorSubject<ITeacher[]>([]);
  groupTeachers:ITeacher[];


  @Input() teachersSource: string='first';


  @Input()
    set ts(value) {
        // set the latest value for _data BehaviorSubject
        this._data.next(value);
    };

    get ts() {
        // get the latest value from _data BehaviorSubject
        return this._data.getValue();
    }

  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  grades = [
    {value: '0', viewValue: 'Grade One'},
    {value: '1', viewValue: 'Grade Two'},
    {value: '2', viewValue: 'Grade Three'},
    {value: '3', viewValue: 'Grade Four'},
    {value: '4', viewValue: 'Grade Five'},
    {value: '5', viewValue: 'Grade Six'},
    {value: '6', viewValue: 'Grade Seven'},
    {value: '7', viewValue: 'Grade Eight'},
    {value: '8', viewValue: 'Grade Nine'},
    {value: '9', viewValue: 'Grade Ten'},
    {value: '10', viewValue: 'Grade Eleven'},
    {value: '11', viewValue: 'Grade Twelve'},
  ];

  classes = [
    {value: '0', viewValue: '1A'},
    {value: '1', viewValue: '1B'},
    {value: '2', viewValue: '1C'},
    {value: '3', viewValue: '2A'},
    {value: '4', viewValue: '2B'},
    {value: '5', viewValue: '2C'},
    {value: '6', viewValue: '3A'},
    {value: '7', viewValue: '4A'},
    {value: '8', viewValue: '4B'},
    {value: '9', viewValue: '4C'},
  ];

  subjects = [
    {value: '0', viewValue: 'Mathematics'},
    {value: '1', viewValue: 'Physican Science'},
    {value: '2', viewValue: 'Biology'},
    {value: '3', viewValue: 'English'},
  ];

  selectedTeacher:ITeacher;
  @ViewChild('modalDiv') modalDiv: ElementRef;
  @ViewChild(AModalComponent) modComp: AModalComponent;
  @Output() openModal = new EventEmitter();
  addClassMode:boolean=false;
  manageMode:boolean=false;
  // displayedColumns = ['name', 'surname', 'email', 'cell'];
  // dataSource:{};

  constructor(private teacherService:TeachersService) { }

  ngOnInit() {
   
  this.appLoading = true;
      this._data
      .takeWhile(() => !this.groupTeachers)
      .subscribe(x => {
        setTimeout(function(){ 
          this.groupTeachers=x;
          this.appLoading=false;
        }, 3000);
     
         
          //console.log('x'+JSON.stringify(this.groupTeachers))
      });
  
    //  console.log('x'+JSON.stringify(this.groupTeachers))
  }
  
//   ngOnChanges(changes: SimpleChanges) {
//     // only run when property "data" changed
//     if (changes['ts']) {
//         this.groupTeachers.push(this.ts);
//     }
// }
  selectTeacher(row) {
   this.selectedTeacher=row;

  console.log(this.selectedTeacher)
    this.modComp.openModal();
    
  }
  manageTeacher(userId:number){
        console.log(userId)
  }
  assignClasses(){
    this.addClassMode=true;
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
