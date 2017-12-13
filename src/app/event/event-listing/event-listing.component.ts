import { BASE_URL } from './../../app.module';
import { element } from 'protractor';
import { AppComponent } from './../../app.component';
import { eventService } from './../../services/event.service';
import { Component, OnInit, Injector } from '@angular/core';
import { event } from './../../models/event';
import { URL } from './../../app.module';


@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css'],
  providers:[eventService]
})
export class EventListingComponent implements OnInit {
  p: number = 1;
  events:event[]=[];
  parent:AppComponent;
  constructor(private es:eventService,private inj:Injector) {
    this.parent = this. inj.get(AppComponent);
   }

  ngOnInit() {
      this.parent.setBusy(true);
      this.es.getAllEvents().subscribe(
        data=>{
          this.parent.setBusy(false);
            this.events = data.json();
           
            console.log(this.events);
        },
        error=>{
          this.parent.setBusy(false);

        }
      );

  }

}
