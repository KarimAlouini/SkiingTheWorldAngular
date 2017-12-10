import {Component, Injector, OnInit} from '@angular/core';
import {AdAreaService} from '../../../services/ad-area-service.service';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-my-ad-area-requests',
  templateUrl: './my-ad-area-requests.component.html',
  styleUrls: ['./my-ad-area-requests.component.css'],
  providers:[AdAreaService]
})
export class MyAdAreaRequestsComponent implements OnInit {
  private requests:any[];
  private parent:AppComponent;

  constructor(private service:AdAreaService,private injector:Injector) {
    this.parent = this.injector.get(AppComponent);
  }

  ngOnInit() {
   this.service.getMyAdAreaRequests(this.parent.getToken());
  }

}
