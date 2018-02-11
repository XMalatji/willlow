export interface Job {
    _id?:string,
    title:string,
    desc:string,
    remun:number,
    company:string,
    industry:string,
    province:string,
    skills:[{
        id:number,
        name:string
    }],
    datePosted:number,
    dateClosing:number
}