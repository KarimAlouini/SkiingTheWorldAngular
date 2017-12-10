import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {BASE_URL} from "../app.module";

@Injectable()
export class AdAreaService {

  constructor(private http:Http) {

  }

  public getMyAdAreaRequests(){
    let token = localStorage.get('token');
    var headers = new Headers();

    headers.set('Authorization','CodeInc '+token);

    return this.http.get(BASE_URL+'secured/users/ad_requests',{
      headers:headers
    });

  }

}
