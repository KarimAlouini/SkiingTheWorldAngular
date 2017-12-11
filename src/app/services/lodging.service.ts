import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Lodging} from "../models/lodging";
import {  Response} from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class LodgingService {
  url="http://localhost:18080/SkiWorld-web/v0/logding";
  url1="http://localhost:18080/SkiWorld-web/v0/logding/byid";

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
