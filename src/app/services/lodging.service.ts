import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Lodging} from "../models/lodging";
import {  Response} from '@angular/http';
import { Observable } from 'rxjs';
import {BASE_URL} from "../app.module";
@Injectable()
export class LodgingService {
  url=BASE_URL+"logding";
  url1=BASE_URL+"logding/byid";

  constructor(private http: Http) {}


  public getAllLodgings() {
    return this.http.get(this.url);
  }


  public Add(lodging:any){

    return this.http.post(this.url+'/add',lodging).map(res=>res.json());
  }

  public  getLodingsDetails(id: number): Observable<Lodging>{
    return this.http.get(this.url1 +'/'+id).map(resp=>resp.json() as Lodging);
}


}
