import { AppComponent } from '../app.component';
import { UserService } from '../services/user.service';
import { Component, OnInit ,Injector} from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
loginResponse:any;
 parent:AppComponent;

  constructor(private userservice:UserService,private inj:Injector,private router:Router) {
    this.parent = this.inj.get(AppComponent);
  }

  ngOnInit() {
  }

  login(user:any){
  this.parent.setBusy(true);
  this.userservice.login(user).subscribe((resp:Response)=>{
    console.log(resp);
    this.parent.setBusy(false);
    this.loginResponse = resp.json();
    if(this.loginResponse.code == 0){
      this.parent.currentUser = this.loginResponse.token.user;
      localStorage.setItem('current',JSON.stringify(this.loginResponse.token.user));
      localStorage.setItem('token',this.loginResponse.token.value);
      this.router.navigateByUrl('home');

    }

  })
  }






}
