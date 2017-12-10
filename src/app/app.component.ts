import {Component} from '@angular/core';
import {User} from "./models/user";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app';
  private token:string;
  public instance: AppComponent;
  public val: string;
  public currentUser: User;
  private busy: boolean = false;



  constructor() {
    this.instance = this;


    try {
      this.currentUser = JSON.parse(localStorage.getItem("current"));
    } catch (e) {
      this.currentUser = null;
    }


  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public setBusy(busy: boolean) {
    this.busy = busy;
  }

  public check(){
    console.log('check');
  }

  public getToken():string{
    return this.token;
  }



}
