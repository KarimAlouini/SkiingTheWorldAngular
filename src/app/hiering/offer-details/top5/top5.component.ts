import {Component, Input, OnInit} from '@angular/core';
import {JobOffersService} from "../../../services/job-offers.service";
import {JobOffer} from "../../../models/joboffer";

@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css'],
  providers:[JobOffersService]
})
export class Top5Component implements OnInit {
private offers:JobOffer[];
private doneLoading:boolean=false;
@Input()  cat:string;
  constructor(private service:JobOffersService) {

  }

  ngOnInit() {
    this.service.getTopFive(this.cat).subscribe(data=>{
      this.offers = data.json();
      this.doneLoading=true;
      console.log(this.offers);
    }),error=>{
      console.log(error);
    };
  }

}
