import { User } from "./user";

export class AccessToken{
    constructor(public id:number,
    public expiresAt:Date,
    public user:User,
    public value:string
){

    }
}