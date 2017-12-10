import { Component, OnInit, Injector } from '@angular/core';
import { eventService } from '../../../services/event.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css'],
  providers:[eventService]
})
export class MyEventsComponent implements OnInit {

  p: number = 1;
  events:any[];
  private parent:AppComponent;
  constructor(private es:eventService,private inj:Injector) {
    this.parent = this. inj.get(AppComponent);
   }

  ngOnInit() {
      this.parent.setBusy(true);
      this.es.getMyEvents().subscribe(
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
