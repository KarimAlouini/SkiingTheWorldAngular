import { Http, RequestOptions, Headers } from '@angular/http';

import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map'
import {BASE_URL} from "../app.module";


@Injectable()
export class DataService {

  constructor(private url:string,private http: Http)
  {

  }

  public getAll() {
    return this.http.get(this.url+'getAll').map(response=>response.json());
  }
  public getById(resource:any) {
    return this.http.get(this.url+'getById/'+resource).map(response=>response.json());
  }
  public getByLocation(resource:any) {
    return this.http.get(this.url+'getByLocation/'+resource).map(response=>response.json());
  }

  public create(resource) {
    let head = new Headers({
       'Content-Type': 'application/json',
    });
       let options = new RequestOptions({ headers: head });
    return this.http.post(this.url+'add', JSON.stringify(resource),options);
   }

  public update(resource:any) {
    return this.http.put(this.url +'update', resource).map(response=>response.json());
  }

  /**
   * delete
   */
  public delete(resource:any) {
    return this.http.put(this.url +'delete/'+resource.courseID,resource);
  }

  public createval(resource) {
    let head = new Headers({
       'Content-Type': 'application/json',
    });
       let options = new RequestOptions({ headers: head });
    return this.http.post(BASE_URL+"rate/add", JSON.stringify(resource),options);
   }

   public apply (resource) {
    let head = new Headers({
       'Content-Type': 'application/json',
    });
       let options = new RequestOptions({ headers: head });
    return this.http.post(BASE_URL+"Courses/apply", JSON.stringify(resource),options);
   }





}
