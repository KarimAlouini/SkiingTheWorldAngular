import {Component, Input, OnInit} from '@angular/core';
import {JobOffer} from "../../models/joboffer";

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {

  @Input()
  offer:JobOffer;
  constructor() { }

  ngOnInit() {
  }

}
