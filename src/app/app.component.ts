import {Component} from '@angular/core';
import {User} from './models/user/user';
import {UserService} from "./services/user.service";
import {MessageResponse} from "./models/MessageResponse";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]

})
export class AppComponent {
  title = 'app';
  private token:string;
  public instance: AppComponent;
  public val: string;
  public currentUser: User;
  private busy:boolean = false;



  constructor(private us:UserService,private router:Router) {
    this.instance = this;
    this.token = localStorage.getItem('token');

    try {
      this.currentUser = JSON.parse(localStorage.getItem("current"));
    } catch (e) {
      this.currentUser = null;
    }

    let interval = setInterval(()=>{

      if(this.getCurrentUser() != null){
        us.validateToken(localStorage.getItem('token')).subscribe((data)=>{
          let response:MessageResponse = data.json();

          if(response.code != 0){
            localStorage.setItem('current','');
            this.currentUser = null;
            this.router.navigateByUrl('/');

          }
        },error=>{
          clearInterval(interval);
        });
      }
    },5000);


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

  public updateUser(){
    localStorage.setItem('current',JSON.stringify(this.currentUser));
  }

  public setRedirection(url:string){
    //this.redirect = true;
  }


}
