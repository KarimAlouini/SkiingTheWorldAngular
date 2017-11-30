import { User } from './models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public instance:AppComponent;
  public val:string;
  public currentUser :any;


  constructor(){
    this.instance = this;
    console.log(this.currentUser);
    
    //console.log(this.currentUser);
    //console.log(localStorage.getItem("current"));
   
    try{
      this.currentUser = JSON.parse(localStorage.getItem("current"));
    }catch(e){
      console.log("exception");
    }
    
   
  }

 
 
}