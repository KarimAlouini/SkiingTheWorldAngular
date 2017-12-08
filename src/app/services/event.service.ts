import { BASE_URL } from './../app.module';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

  addEvent(data) {
    data.image = 'default-event';
    this.newEventSubject.next(data);
  }

  public getById(id:number){
    return this.http.get(BASE_URL+'event/'+id);
  }

}
