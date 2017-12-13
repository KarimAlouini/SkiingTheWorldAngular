import { JobOffersService } from './../../services/job-offers.service';
import { Component, OnInit, Injector } from '@angular/core';
import { AppComponent } from '../../app.component';
import {ActivatedRoute, Router} from '@angular/router';
import { Params } from '@angular/router';

import{JobOffer} from "../../models/joboffer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Jobapply} from "../../models/jobapply";

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css'],
  providers:[JobOffersService]
})
export class OfferDetailsComponent implements OnInit {
  private offer:JobOffer;
  private buttonclicked:boolean=false;
  private parent:AppComponent;
  form: FormGroup;
  private response:any;
  private apply:Jobapply;


  private doneLoading:boolean=false;

  constructor(private addJa: JobOffersService, private fb: FormBuilder,private activatedRoute:ActivatedRoute,private inj:Injector,private jos:JobOffersService,private  router:Router) {
    this.parent = this.inj.get(AppComponent);
    this.form = this.fb.group({
      'objet': [null, Validators.required],
      'message': [null, Validators.required],
    });
  }
  public addApply(apply: any) {
    apply.offer=this.offer;
    console.log(apply);
    //this.parent.setBusy(true);
    this.addJa.applyForJobOffer(apply).subscribe(res => {
      this.parent.setBusy(false);
      this.response = res;
      window.location.reload();


    },error=>{
      console.log(error.status.code);
    });
  }
  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.jos.getById(params['id']).subscribe(data=>{
          this.offer = data.json();
          this.doneLoading = true;


        });

    });

  }

}
