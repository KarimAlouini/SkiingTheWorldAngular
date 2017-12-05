import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class eventService {

  public newEventSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllEvents() {
    return this.http.get('data/event.json').map(res => res.json());
  }

  addEvent(data) {
    data.image = 'default-event';
    this.newEventSubject.next(data);
  }

}
