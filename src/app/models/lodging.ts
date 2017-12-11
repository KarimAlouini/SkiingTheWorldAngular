import { Offer } from "./offer";
export class Lodging extends Offer {

    constructor(
         public id: number, 
         public label: string, 
         public  description: string,
         public price: number,
         public quantity: number,
         public typ: string,
         public startDate: Date,
         public endDate: Date ,
         public etat: string,
         public img: string
                ) 
                { super(id,label,description,  price,
                   quantity)
                 }
  }