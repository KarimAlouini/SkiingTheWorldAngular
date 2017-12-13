import { element } from 'protractor';
import { AppComponent } from './../../app.component';
import { Router } from '@angular/router';
import { event } from './../../models/event';
import { eventService } from './../../services/event.service';
import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'util';
import { MyEventsComponent } from '../../shared/profile/my-events/my-events.component';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  parent: AppComponent;
  form: FormGroup;
  private response: any;
  private files: any[];

 
  

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
          if (this.response.code==0){
            for(var i=0;i<this.files.length;i++){
              this.addE.uploadImgs(this.response.message,this.files[i]).subscribe(
                data=>{
                  console.log(data);
                },error=>{
                  console.error(error);
                }
              )
            }
          }
          this.router.navigateByUrl('profile/myevents');

    
    
        });
  }
  public loadfiles($event){
    console.log('here');

    if ($event.target.files && $event.target.files.length > 0) {
      

      

       
            let f = $event.target.files;
          
      
            this.files = f;
      
          }
          else {
            this.files = null;
          }
  }
  
   

  ngOnInit() {
  }
  

}
