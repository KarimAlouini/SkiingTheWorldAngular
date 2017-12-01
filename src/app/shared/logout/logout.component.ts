import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-logout',
  template:`<h3>Logout</h3>`
})
export class LogoutComponent implements OnInit {
private parent:AppComponent;

  constructor(private inj:Injector,private router:Router) {
    this.parent = inj.get(AppComponent);
   localStorage.setItem("current","");
   if(this.parent.currentUser!== null)
     this.parent.currentUser = null;
   router.navigateByUrl("");

   }

  ngOnInit() {
  }

}
