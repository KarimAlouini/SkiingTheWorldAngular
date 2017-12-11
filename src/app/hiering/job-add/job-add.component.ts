import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import {JobOffersService} from "../../services/job-offers.service";
import {JobOffer} from "../../models/joboffer";


@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css'],
  providers: [JobOffersService]
})


export class JobAddComponent implements OnInit {
  private parent : AppComponent;
  form: FormGroup;
  private Offers :JobOffer;
  private response:any;


  constructor(private addJo: JobOffersService, private inj: Injector, private fb: FormBuilder,private router:Router) {
    this.parent = inj.get(AppComponent);
    this.form = this.fb.group({
      'numberOfPlaces': [null, Validators.required],
      'startDate': [null, Validators.required],
      'endDate': [null, Validators.required],
      'salary': [null, Validators.required],
      'description': [null, Validators.compose([Validators.min(2), Validators.required])],
      'name': [null, Validators.required],
      'jobOfferCategory':[null],

    });

  }
  public add(offer: any) {
  console.log(offer);
    //this.parent.setBusy(true);
    this.addJo.AddOffer(offer).subscribe(res => {
      this.parent.setBusy(false);
      this.response = res;
    //  this.router.navigateByUrl('profile/myevents');


    });
  }

  ngOnInit() {
  }

}
