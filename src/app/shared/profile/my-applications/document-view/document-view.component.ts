import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {PDF_DIR} from "../../../../app.module";

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit {
private url:string;

  constructor(private activatedRoute:ActivatedRoute) {
this.activatedRoute.params.subscribe(params=>{
      this.url = PDF_DIR+params['offer']+'/'+params['client']+'/'+params['file']
})


  }

  ngOnInit() {
  }

}
