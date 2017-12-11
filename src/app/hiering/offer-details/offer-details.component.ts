import { JobOffersService } from './../../services/job-offers.service';
import { Component, OnInit, Injector } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

import{JobOffer} from "../../models/joboffer";

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css'],
  providers:[JobOffersService]
})
export class OfferDetailsComponent implements OnInit {
  private offer:JobOffer;

  private parent:AppComponent;

  private doneLoading:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,private inj:Injector,private jos:JobOffersService) {
    this.parent = this.inj.get(AppComponent);

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
