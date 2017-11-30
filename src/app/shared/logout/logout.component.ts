import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
parent:AppComponent;

  constructor(private inj:Injector,private router:Router) {
    this.parent.currentUser = undefined;
    localStorage.setItem("current",undefined);
    this.router.navigateByUrl("home");
 
   }

  ngOnInit() {
  }

}
