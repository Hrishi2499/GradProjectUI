import { Timestamp } from "rxjs";
import { User } from "./user";
export class Provide{
    date1:string;
    fromtime:any;
    tilltime:any;
    
    employeeID:number;
    constructor(
        date1:string,
        fromtime:any,
        tilltime:any,
        employeeID:number


    ){
        this.date1=date1;
        this.fromtime=fromtime;
        this.tilltime=tilltime;
        this.employeeID=employeeID
    }
}