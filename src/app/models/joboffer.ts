import {OfferCategory} from "./offerCategory";

export class JobOffer {
  constructor(public id: number,
              public creationDate:Date,
              public description: string,
              public  endDate: Date,
              public isArchived: boolean,
              public jobOfferCategory: OfferCategory,
              public name: string,
              public numberOfPlaces :number,
              public salary:number,
              public startDate:Date,
              public agent_id:number
              ) {

  }
}
