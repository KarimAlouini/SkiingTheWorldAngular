import {Component, Injector, OnInit} from '@angular/core';
import {JobOffersService} from "../../../services/job-offers.service";
import {Jobapply} from "../../../models/jobapply";
import {AppComponent} from "../../../app.component";
import {element} from "protractor";
import {URL} from "../../../app.module";

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.css'],
  providers:[JobOffersService]
})
export class MyApplicationsComponent implements OnInit {
  private error: boolean = false;
  private doneLoading:boolean=false;
  private showCV:boolean=false;
  private url:string;

  selectedJobApply:Jobapply=null;

  p: number = 1;
  applies:Jobapply[];
  private parent:AppComponent;


  constructor(private jos:JobOffersService,private inj:Injector) {
    this.parent = this.inj.get(AppComponent);

  }

  ngOnInit() {
    this.parent.setBusy(true);
    this.jos.getMyApplies().subscribe(
      data=>{
        this.parent.setBusy(false);
        this.applies = data.json();

        console.log(this.applies);
      },
      error=>{
        this.parent.setBusy(false);

      }
    );


  }


  openCV(ja:Jobapply){
    console.log('ja');
    console.log(ja);
    this.selectedJobApply = ja;
    this.url = URL+'resources/ja/'+this.selectedJobApply.offer.id+'/'+this.selectedJobApply.client.id+'/'+this.selectedJobApply.file;
    console.log(this.url);
    this.showCV = true;
  }

}
