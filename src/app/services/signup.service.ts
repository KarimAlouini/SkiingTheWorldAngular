import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../models/user/user";

@Injectable()
export class SignupService {

  constructor(private http:Http) { }

  public signUp(user:any){

    return this.http.put('http://localhost:18080/SkiWorld-web/v0/users',user).map(res=>res.json());
  }
}
