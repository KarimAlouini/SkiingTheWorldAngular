import {Component, Injector, OnInit} from '@angular/core';
import {AdAreaService} from '../../../services/ad-area-service.service';
import {AppComponent} from '../../../app.component';
import {ProfileComponent} from "../profile.component";

@Component({
  selector: 'app-my-ad-area-requests',
  templateUrl: './my-ad-area-requests.component.html',
  styleUrls: ['./my-ad-area-requests.component.css'],
  providers:[AdAreaService]
})
export class MyAdAreaRequestsComponent implements OnInit {
  private requests:any[];

  private parent:ProfileComponent;
  private isLoading:boolean=true;
  private error:boolean=false;

  constructor(private service:AdAreaService,private injector:Injector) {
    this.parent = injector.get(ProfileComponent);
    this.service.getMyAdAreaRequests().subscribe(data=>{
      this.requests = data.json();
      console.log(this.requests);
      this.isLoading = false;
    },error=>{
      this.error = true;
      this.isLoading = false;
    });
  }

  ngOnInit() {

  }

}
