import {Component, ElementRef, Injector, OnInit, ViewChild} from '@angular/core';
import {SignupService} from "../../services/signup.service";
import {AppComponent} from "../../app.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [SignupService],

})
export class RegistrationComponent implements OnInit {
  private parent: AppComponent;
  private response: any;
   form:FormGroup;
  @ViewChild('pass1',{read:ElementRef}) password:ElementRef;
  @ViewChild('pass2') password2;

  constructor(private signup: SignupService, private inj: Injector,private fb:FormBuilder) {

    this.parent = inj.get(AppComponent);


    this.form = this.fb.group({
      'email':[null,Validators.email],
      'password':[null,Validators.compose([Validators.minLength(5),Validators.required])],

      'login':[null,Validators.required],
      'firstName':[null,Validators.required],
      'lastName':[null,Validators.required],
      'phoneNumber':[null,Validators.compose([Validators.minLength(8),Validators.maxLength(8)])],


    });



  }

  public signUp(user: any) {

    this.parent.setBusy(true);
    this.signup.signUp(user).subscribe(res => {
      this.parent.setBusy(false);
      this.response = res;


    });
  }

  ngOnInit() {

  }





}
