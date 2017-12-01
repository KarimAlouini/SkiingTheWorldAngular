import {Component, Injector, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {isUndefined} from "util";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private parent:AppComponent;
  constructor(private inj:Injector) {
    this.parent = inj.get(AppComponent);

    console.log('current');
    console.log(this.parent.getCurrentUser());
  }

  ngOnInit() {
  }

}
