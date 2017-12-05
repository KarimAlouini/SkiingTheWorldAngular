import { Component, OnInit } from '@angular/core';
import { event } from './../event';
import { events } from '../../data/event';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent implements OnInit {

  events : Array<any> = events;

  constructor() { }

  ngOnInit() {
  }

}
