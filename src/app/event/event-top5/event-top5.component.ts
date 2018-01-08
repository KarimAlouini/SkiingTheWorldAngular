import { event } from './../../models/event';
import { Component, OnInit } from '@angular/core';
import { eventService } from '../../services/event.service';

@Component({
  selector: 'app-event-top5',
  templateUrl: './event-top5.component.html',
  styleUrls: ['./event-top5.component.css'],
  providers:[eventService]
})
export class EventTop5Component implements OnInit {
  private newest: event[];
  constructor(private es:eventService) { }

  ngOnInit() {
    this.es.getNewest().subscribe(data => {
      this.newest = data.json();
      console.log(this.newest);
    }), error => {
      console.log(error);
    };
  }

}
