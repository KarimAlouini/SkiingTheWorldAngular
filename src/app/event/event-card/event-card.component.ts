import { Component, OnInit, Input } from '@angular/core';
import { event } from './../../models/event';
import {URL} from "../../app.module";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']

})
export class EventCardComponent implements OnInit {
  url:string=URL;

  @Input('event') event: event;

  constructor() { }

  ngOnInit() {
  }

}
