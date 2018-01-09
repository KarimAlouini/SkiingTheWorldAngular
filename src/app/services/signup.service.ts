import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../models/user/user";
import {BASE_URL} from "../app.module";

@Injectable()
export class SignupService {

  constructor(private http:Http) { }

  public signUp(user:any){

    return this.http.put(BASE_URL+'users',user).map(res=>res.json());
  }
}
