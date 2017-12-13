
import {User} from "./user/user";
import {JobOffer} from "./joboffer";

export class Jobapply {
  public url:string;
  constructor(
              public objet: string,
              public message: string,
              public isAccepted : boolean,
              public client:User,
              public file:string,
              public offer:JobOffer

  ) {


  }
}
