import {Component, Injector, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {JobOffersService} from "../../services/job-offers.service";
import {JobOffer} from "../../models/joboffer";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css'],
  providers: [JobOffersService]
})
export class JobOffersComponent implements OnInit {
  p: number = 1;
  private parent: AppComponent;
  private offers: JobOffer;
  private error: boolean = false;
  private doneLoading:boolean=false;

  constructor(private inj: Injector, private jos: JobOffersService) {
    this.parent = inj.get(AppComponent);
  }

  ngOnInit() {
    this.doneLoading =true;
    this.jos.getAllOffers().subscribe(
      data => {
        this.parent.setBusy(false);
        this.offers = data.json();
      },
      error => {
        this.parent.setBusy(false);
        this.error = true;
      }
    );


  }

}
