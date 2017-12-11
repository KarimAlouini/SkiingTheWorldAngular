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
  private parent: AppComponent;
  form: FormGroup;
   @Input () event:any;
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

   // this.addE.getById(this.router.pa)

    
  }

  ngOnInit() {
  }
  public update(event: any) {
    
        this.parent.setBusy(true);
        this.addE.updateEvent(event).subscribe(res => {
          this.parent.setBusy(false);
          this.response = res;
          this.router.navigateByUrl('profile/myevents');
    
    
        });
  }

  

}
 