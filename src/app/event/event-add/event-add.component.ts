import { Router } from '@angular/router';
import { event } from './../../models/event';
import { eventService } from './../../services/event.service';
import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  private parent: AppComponent;
  form: FormGroup;
  private response: any;

  
  

  constructor(private addE: eventService, private inj: Injector, private fb: FormBuilder,private router:Router) {
    
    this.parent = inj.get(AppComponent);

    this.form = this.fb.group({
      'name': [null, Validators.required],
      'location': [null, Validators.required],
      'start': [null, Validators.required],
      'end': [null, Validators.required],
      'description': [null, Validators.required],
      'maxPlace': [null, Validators.compose([Validators.min(2), Validators.required])],
      'statue': [null, Validators.required],
      'image': [null],

    });

    
  }
  public add(event: any) {
    
        this.parent.setBusy(true);
        this.addE.addEvent(event).subscribe(res => {
          this.parent.setBusy(false);
          this.response = res;
          this.router.navigateByUrl('profile/myevents');
    
    
        });
  }
   

  ngOnInit() {
  }
  

}
