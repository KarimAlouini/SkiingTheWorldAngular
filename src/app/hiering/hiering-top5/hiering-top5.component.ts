import { Component, OnInit } from '@angular/core';
import {JobOffersService} from "../../services/job-offers.service";
import {JobOffer} from "../../models/joboffer";

@Component({
  selector: 'app-hiering-top5',
  templateUrl: './hiering-top5.component.html',
  styleUrls: ['./hiering-top5.component.css'],
  providers:[JobOffersService]
})
export class HieringTop5Component implements OnInit {
  private newest:JobOffer[];

  constructor(private  jos:JobOffersService) { }

  ngOnInit() {
    this.jos.getNewest().subscribe(data => {
      this.newest = data.json();
    }), error => {
    };
  }

}
