
import {Input,Component, Injector, OnInit} from '@angular/core';

import {AppComponent} from "../../app.component";
import {Lodging} from "../../models/lodging";
import { Http, Response} from '@angular/http';
import { Router } from '@angular/router';


import { ActivatedRoute } from '@angular/router';
import { LodgingService } from '../../services/lodging.service';
import { Params } from '@angular/router';


@Component({
  selector: 'app-lodging-detail',
  templateUrl: './lodging-detail.component.html',
  styleUrls: ['./lodging-detail.component.css']
})
export class LodgingDetailComponent implements OnInit {
  @Input()
  lodging: Lodging;
  lodgings:any[];
  private parent: AppComponent;
  private response: any;
  lodgingId: number;

  constructor(private route: ActivatedRoute, private ES: LodgingService, private inj: Injector) {
    
        this.parent = inj.get(AppComponent);
        this.route.params.subscribe(p => {
          this.lodgingId = parseInt(p['id']);
          console.log(this.lodgingId+"slimux")
          this.ES.getLodingsDetails(this.lodgingId)
          .subscribe(
            (product: Lodging) => {this.lodging = product;}
           
          ); console.log(this.lodging+"slimux")
        });
      }
    
      ngOnInit() {}
       


}