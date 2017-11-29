import { AccessToken } from "./accesstoken";

export class LoginResponse{
    constructor(public code:string,public token:AccessToken,public message:string){
        
    }
}