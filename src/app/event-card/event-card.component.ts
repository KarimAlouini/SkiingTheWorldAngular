import { Component, OnInit, Input } from '@angular/core';
import { event } from './../event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
  
})
export class EventCardComponent implements OnInit {
  
  @Input('event') event: event;

  constructor() { }

  ngOnInit() {
  }

}
