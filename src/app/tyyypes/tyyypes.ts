
  
  export interface IPerson {
  
    givenName?: string;
    familyName?: string;
    emailAdress?: string;
    cellphone?: string;
    dateOfBirth?:string;
    id?:number;
  }


  export interface ITeacher extends IPerson{

 
        
  }


  export interface IStudent extends IPerson{

 
        
  }