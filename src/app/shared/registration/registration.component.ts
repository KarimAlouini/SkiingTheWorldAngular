import {Component, Injector, OnInit} from '@angular/core';
import {SignupService} from "../../services/signup.service";
import {AppComponent} from "../../app.component";
import {User} from "../../models/user";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [SignupService],

})
export class RegistrationComponent implements OnInit {
  private parent: AppComponent;
  private response: any;

  constructor(private signup: SignupService, private inj: Injector) {

    this.parent = inj.get(AppComponent);
    //this.parent.showSpinner(true);
  }

  public signUp(user: any) {
    console.log(user);
    this.parent.setBusy(true);
    this.signup.signUp(user).subscribe(res => {
      this.parent.setBusy(false);
      this.response = res;


    });
  }

  ngOnInit() {
  }



}