import { AppComponent } from './../../app.component';
import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { eventService } from '../../services/event.service';
import { Params } from '@angular/router';


@Component({
  selector: 'app-event-card-detail',
  templateUrl: './event-card-detail.component.html',
  styleUrls: ['./event-card-detail.component.css'],
  providers:[eventService]
})
export class EventCardDetailComponent implements OnInit {
private event:any;
private response:any;
private parent:AppComponent;
private notFound:boolean = false;
private isParticipated:boolean = false;
private isLoading:boolean=true;
  constructor(private activatedRoute:ActivatedRoute,private inj:Injector,private es:eventService) { 
    this.parent = this.inj.get(AppComponent);
    
  }
  apply(){
    this.es.applyForEvent(this.event).subscribe(data=>{
      console.log(data.json());
    });
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.es.getById(params['id']).subscribe(data=>{
        this.isLoading = false;
            this.event = data.json();
            console.log(this.event);
            this.event.users.forEach(element => {
              console.log('this '+this.parent.getCurrentUser().id);
              console.log('element '+element.id);
                this.isParticipated = element.id == this.parent.getCurrentUser().id;
                
            });

            if (this.event.code !== undefined){
              this.response = this.event;
              this.notFound = true;
             
          }
            
      },
    error=>{

    });

    });

     
  }

}
