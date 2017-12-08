import {Component, ElementRef, Injector, OnInit, ViewChild} from '@angular/core';
import {SignupService} from "../../services/signup.service";
import {AppComponent} from "../../app.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import { ReCaptchaComponent } from 'angular2-recaptcha'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [SignupService],

})
export class RegistrationComponent implements OnInit {
  private parent: AppComponent;
  private response: any;
  form: FormGroup;
  @ViewChild('pass1') private pass1: ElementRef;
  @ViewChild('pass2') private pass2: ElementRef;
  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
  private recaptchaValid: boolean = false;
  private recaptchaExpired: boolean = false;

  constructor(private signup: SignupService, private inj: Injector, private fb: FormBuilder) {

    this.parent = inj.get(AppComponent);


    this.form = this.fb.group({
      'email': [null, Validators.email],
      'password': [null, Validators.compose([Validators.minLength(5), Validators.required])],
      'password2': [null, Validators.compose([Validators.minLength(5), Validators.required])],
      'login': [null, Validators.required],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'phoneNumber': [null, Validators.compose([Validators.minLength(8), Validators.maxLength(8), Validators.required])],


    });

    this.form.valueChanges.subscribe((value) => {

      this.passwordsEqual = this.pass1.nativeElement.value === this.pass2.nativeElement.value;

    });

    var timer = setInterval(() => {
      if (this.recaptchaValid) {
        this.recaptchaExpired = true;
        this.recaptchaValid = false;
        this.captcha.reset();
      }
    }, 10000);
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


  public passwordEqual(): boolean {
    return this.pass1.nativeElement.val === this.pass2.nativeElement.val;
  }

  public handleCorrectCaptcha($event) {
    this.recaptchaExpired = false;

    if (this.captcha.getResponse() != null) {
      this.recaptchaValid = true;
    }


  }
}



