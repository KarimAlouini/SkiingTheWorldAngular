import {Component, Input, OnInit} from '@angular/core';
import {offer} from "../../models/offer";

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {

  @Input()
  offer:offer;
  constructor() { }

  ngOnInit() {
  }

}
