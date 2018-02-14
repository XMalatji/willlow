
  
  export interface IPerson {
    id?:number
    givenName?: string;
    surname?: string;
    emailAdress?: string;
    cell?: string;
    assignedClasses?:string[]
  }


  export class ITeacher{

    givenName:string;
    familyName:string; 
        
  }