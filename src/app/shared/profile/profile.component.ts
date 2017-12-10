import {Component, Injector, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private role:string;

  private parent:AppComponent;
  constructor(private inj:Injector,private router:Router) {
    this.parent = this.inj.get(AppComponent);
    console.log('currr');
    console.log(this.parent.getCurrentUser());
    if(this.parent.getCurrentUser() == null){
      this.router.navigateByUrl('/home');
    }
    else{
      this.role = this.parent.currentUser.role;

    }
  }

  ngOnInit() {

  }

}
