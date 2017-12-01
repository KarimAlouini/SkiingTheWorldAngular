export class User {
  constructor(public id: number,
              public login: string,
              public password: string,
              public  email: string,
              public country: string,
              public street: string,
              public zipCode: number,
              public firstName :string,
              public lastName:string,
              public phoneNumber:string,
              public isBanned:boolean,
              public isConfirmed:boolean,
              public balance:number,
              public role:string
              ) {

  }
}
