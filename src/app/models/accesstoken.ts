import { User } from "./user/user";

export class AccessToken{
    constructor(public id:number,
    public expiresAt:Date,
    public user:User,
    public value:string
){

    }
}
