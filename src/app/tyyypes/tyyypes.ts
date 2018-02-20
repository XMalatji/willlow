
  
  export interface IPerson {
  
    givenName?: string;
    familyName?: string;
    emailAdress?: string;
    cellphone?: string;
    dateOfBirth?:string;
    id?:number;
  }


  export interface ITeacher extends IPerson{

 
        assignedClasses: [ {
          name:string
        }
        
        ]
  }


  export interface IStudent extends IPerson{

 
        
  }

export interface ICurriculum {


  typeOfCurriculum :string,
schoolGrade: string,
  gradeSubjects : [
     {
        name : string
        subjectTeacher: string,
     }
  ]
}
  export const grades = [
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