import { JobOffersService } from './../../services/job-offers.service';
import { Component, OnInit, Injector } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css'],

  providers:[JobOffersService]
})
export class OfferDetailsComponent implements OnInit {
  private joboffre:any;
  private response:any;
  private parent:AppComponent;
  private notFound:boolean = false;

  constructor(private activatedRoute:ActivatedRoute,private inj:Injector,private jos:JobOffersService) { 
    this.parent = this.inj.get(AppComponent);
    
  }

  ngOnInit() {
  }

}
