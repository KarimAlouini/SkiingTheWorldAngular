import { Component } from '@angular/core';
import {User} from "./models/user";
import {SignupService} from "./services/signup.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SignupService]
})
export class AppComponent {
  title = 'app';
  public instance:AppComponent;
  public val:string;
  public currentUser :User;


  constructor(){

    this.instance = this;

    try{
      this.currentUser = JSON.parse(localStorage.getItem("current"));
    }catch(e){
      this.currentUser = null;
    }


  }

  public getCurrentUser(){
    return this.currentUser;
  }



}
