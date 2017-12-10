import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {BASE_URL} from "../app.module";

@Injectable()
export class AdAreaService {

  constructor(private http:Http) {

  }

  public getMyAdAreaRequests(token:string){

    let header = new Headers();
    console.log(token);
    header.set('Authorization','CodeInc '+token);

    return this.http.get(BASE_URL+'secured/users/ad_requests',header);
  }

}
