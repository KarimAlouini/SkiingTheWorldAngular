import { event } from './../models/event';
import { BASE_URL } from './../app.module';
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class eventService {

  public newEventSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllEvents() {
    //return this.http.get('data/event.json').map(res => res.json());
    return this.http.get(BASE_URL+'event');
  }

  

  public getById(id:number){
    return this.http.get(BASE_URL+'event/'+id);
  }
  public addEvent(event:any){
    let token = localStorage.get('token');
    var headers = new Headers();

    headers.set('Authorization','CodeInc '+token);

    
    
        return this.http.put(BASE_URL+'secured/event',event,{
          headers:headers
        }).map(res=>res.json());
      }

}
