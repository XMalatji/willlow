import {
  Component, OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { AModalComponent } from '@app/shared/a-modal/a-modal.component';
import { IPerson, ITeacher } from '../../tyyypes/tyyypes';
import { UserService } from '../../shared/services/user.service';
import { Observable } from 'rxjs/Observable';
import { TeachersService } from '@app/services/teachers.service';


const ELEMENT_DATA: IPerson[] = [
  { id:11, name: 'Hydrogen', surname: "Malatji" },

];


@Component({
  selector: 'app-teachers-view',
  templateUrl: './teachers-view.component.html',
  styleUrls: ['./teachers-view.component.scss']
})
export class TeachersViewComponent implements OnInit {
  classes = [
    {value: '1', viewValue: 'Grade 1'},
    {value: '2', viewValue: 'Grade 2'},
    {value: '3', viewValue: 'Grade 3'}
  ];

  grades = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' }
  ];

  selectedTeacher:IPerson;
  @ViewChild('modalDiv') modalDiv: ElementRef;
  @ViewChild(AModalComponent) modComp: AModalComponent;
  @Output() openModal = new EventEmitter();
  addClassMode:boolean=false;
  manageMode:boolean=false;
  displayedColumns = ['name', 'surname', 'email', 'cell'];
  dataSource:{};


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
  selectTeacher(row) {
   this.selectedTeacher=row;

  // console.log(this.selectedTeacher)
    this.modComp.openModal();
    
  }
  manageTeacher(userId:number){
        console.log(userId)
  }
  assignClasses(){
    this.addClassMode=true;
  }
}
