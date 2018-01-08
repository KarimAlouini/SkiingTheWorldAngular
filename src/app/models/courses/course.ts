import { Data } from "@angular/router/src/config";
import {User} from "../user/user";


export class Course{
   constructor( public courseID?:number,
       public courseName?:string,
       public courseState?:string,
       public courseLevel?:string,
       public date?:Date,
       public location?:string,
       public price?:number,
       public maxParticipants?:number,
       public guide?:User){}
}
