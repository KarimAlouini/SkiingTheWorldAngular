import { Component, OnInit, Injector, ViewContainerRef } from '@angular/core';
import { eventService } from '../../../services/event.service';
import { AppComponent } from '../../../app.component';
import { ProfileComponent } from '../profile.component';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css'],
  providers:[eventService]
})
export class MyEventsComponent implements OnInit {

selectedEvent:any=null;

  p: number = 1;
  events:any[]=[];
  parent:ProfileComponent;
  constructor(private es:eventService,private inj:Injector) {
    this.parent = this. inj.get(ProfileComponent);
   }

  ngOnInit() {
      this.parent.parent.setBusy(true);
      this.es.getMyEvents().subscribe(
        data=>{
          this.parent.parent.setBusy(false);
            this.events = data.json();
            console.log(this.events);
        },
        error=>{
          this.parent.parent.setBusy(false);

        }
      );

  }
   public delete(event: any) {
    
        this.parent.parent.setBusy(true);
        this.es.deleteEvent(event).subscribe(res => {
          this.parent.parent.setBusy(false);
          this.events.forEach((item,index)=>{
            if(item.id == event.id)
              this.events.splice(index,1);
          });
        });
  }

  public selectEvent(event:any){
      this.selectedEvent = event;
  }

}
