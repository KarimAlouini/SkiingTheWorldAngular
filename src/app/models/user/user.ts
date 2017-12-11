import {Address} from "./adress";

export class User {

  constructor(public id: number,
              public login: string,
              public readonly password: string,
              public  email: string,
              public country: string,
              public street: string,
              public zipCode: number,
              public firstName :string,
              public lastName:string,
              public phoneNumber:string,
              public readonly isBanned:boolean,
              public readonly isConfirmed:boolean,
              public readonly balance:number,
              public readonly role:string,
              public address:Address,
              public imageName:string
              ) {


  }
}
