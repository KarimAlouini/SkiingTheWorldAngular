import { Course } from './course';
export class Evaluation {
    constructor( 
        public value?:number,
                public idUser?:number,    
        public course?:Course        
        ){}     
}