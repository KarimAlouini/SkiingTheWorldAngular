import {Component, Injector, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {Router} from "@angular/router";
import {User} from "../../models/user/user";
import {USER_IMAGE_DIR} from "../../app.module";
import {Address} from "../../models/user/adress";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private role:string;
  private error:boolean=false;
  user:User;
  userImage:string=null;
   parent:AppComponent;
  constructor(private inj:Injector,private router:Router) {

    this.parent = this.inj.get(AppComponent);


    this.user = this.parent.getCurrentUser();
    if(this.user.address == undefined){
      this.user.address = new Address(null,null,null,null);
    }
    if (this.user.imageName != null){
      this.userImage = USER_IMAGE_DIR+this.user.imageName;
    }




    if(this.parent.getCurrentUser() == null){
      this.router.navigateByUrl('/home');
    }
    else{
      this.role = this.parent.currentUser.role;

    }
    this.router.navigateByUrl('/profile/informations');

  }

  public setError(error:boolean){
    this.error = error;
  }

  ngOnInit() {

  }

}
