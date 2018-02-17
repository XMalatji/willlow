import { Component, OnInit } from '@angular/core';
import { ICurriculum } from '@app/tyyypes/tyyypes';
import { ClassService } from '@app/services/class.service';

@Component({
  selector: 'anms-curriculumlist',
  templateUrl: './curriculumlist.component.html',
  styleUrls: ['./curriculumlist.component.scss']
})
export class CurriculumlistComponent implements OnInit {

  displayedColumns = ['schoolGrade', 'gradeSubjects'];
  
  cambridgeSource: ICurriculum[];
  
  nationalSource: ICurriculum[];
  constructor(

    private classService: ClassService
    
  ) { 
    
  }

  ngOnInit() {

    this.classService.getCambridgeCurriculum().subscribe(
      data => {
        console.log('cambridge ###' + JSON.stringify(data));
        this.cambridgeSource = data;
      },
      err => {
        console.log(`Server error | ${err}`);

      }

    );

    this.classService.getNationalCurriculum().subscribe(
      data => {
        console.log('cambridge ###' + JSON.stringify(data));
        this.nationalSource = data;
      },
      err => {
        console.log(`Server error | ${err}`);

      }

    );

  }

}
