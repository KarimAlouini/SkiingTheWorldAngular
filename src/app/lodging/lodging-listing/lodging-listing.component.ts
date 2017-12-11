import {Component, Injector, OnInit} from '@angular/core';
import {LodgingService} from "../../services/lodging.service";
import {AppComponent} from "../../app.component";
import { Lodging } from "../../models/lodging";
import { Http, Response} from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lodging-listing',
  templateUrl: './lodging-listing.component.html',
  styleUrls: ['./lodging-listing.component.css']
})
export class LodgingListingComponent implements OnInit {
  lodgings:any[];
  private parent: AppComponent;
  private response: any;
  lodging: Lodging;
  constructor(private route: ActivatedRoute, private ES: LodgingService, private inj: Injector) {
    
        this.parent = inj.get(AppComponent);
    
      }
    
      ngOnInit(){
        this.ES.getAllLodgings().subscribe((resp:Response)=>{
          console.log(resp.json());
          this.lodgings=resp.json();
        })
       }


}
