import { Component, OnInit, Injector } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {JobOffersService} from "../../../services/job-offers.service";
import {JobOffer} from "../../../models/joboffer";


@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.css'],
  providers:[JobOffersService]
})
export class MyOffersComponent implements OnInit {

  private error: boolean = false;
  private doneLoading:boolean=false;

  selectedJobOffer:any=null;

  p: number = 1;
  offers:JobOffer[];
  private parent:AppComponent;
  constructor(private jos:JobOffersService,private inj:Injector) {
    this.parent = this.inj.get(AppComponent);
  }


  ngOnInit() {
    this.parent.setBusy(true);
    this.jos.getMyJobOffers().subscribe(
      data=>{
        this.parent.setBusy(false);
        this.offers = data.json();
        console.log(this.offers);
      },
      error=>{
        this.parent.setBusy(false);

      }
    );
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
  public selectJobOffer(offer:any){
    this.selectedJobOffer = offer;
  }

  public delete(jo:JobOffer){
    this.parent.setBusy(true);
    this.jos.delete(jo).subscribe(data=>{

      this.offers.forEach((item,index)=>{
        if(item.id == jo.id){
          this.offers.splice(index,1);
        }
      });
      this.parent.setBusy(false);
    });
  }

}
