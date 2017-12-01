import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { Component, OnInit,Injector } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
parent:AppComponent;

  constructor(private inj:Injector,private router:Router) {
    this.parent = inj.get(AppComponent);
   }

  ngOnInit() {
  }


}
