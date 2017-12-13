import { MyEventsComponent } from './../../shared/profile/my-events/my-events.component';
import { Component, OnInit, Injector, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { eventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {
  parent: MyEventsComponent;
  form: FormGroup;
   @Input () event:any;
  private response: any;
  constructor(private addE: eventService, private inj: Injector, private fb: FormBuilder,private router:Router) {
    
    this.parent = inj.get(MyEventsComponent);

    this.form = this.fb.group({
      'name': [null, Validators.required],
      'location': [null, Validators.required],
      'start': [null, Validators.required],
      'end': [null, Validators.required],
      'description': [null, Validators.required],
      'maxPlace': [null, Validators.compose([Validators.min(2), Validators.required])],
      'image': [null]
    });

   // this.addE.getById(this.router.pa)

    
  }

  ngOnInit() {
  }
  public update(event: any) {
    event.id=this.event.id;
    
        this.parent.parent.parent.setBusy(true);
        this.addE.updateEvent(event).subscribe(res => {
          this.parent.parent.parent.setBusy(false);
          this.response = res;
          this.router.navigateByUrl('profile/myevents');
    
    
        });
  }

  

}
 