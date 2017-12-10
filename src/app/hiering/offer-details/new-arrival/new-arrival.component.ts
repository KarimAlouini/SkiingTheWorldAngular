import {Component, Input, OnInit} from '@angular/core';
import {JobOffersService} from "../../../services/job-offers.service";
import {offer} from "../../../models/offer";

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css'],
  providers: [JobOffersService]
})
export class NewArrivalComponent implements OnInit {
  private newest: offer[];
  constructor(private jos: JobOffersService) {

  }

  ngOnInit() {
    this.jos.getNewest().subscribe(data => {
      this.newest = data.json();
      console.log(this.newest);
    }), error => {
      console.log(error);
    };

  }
}
