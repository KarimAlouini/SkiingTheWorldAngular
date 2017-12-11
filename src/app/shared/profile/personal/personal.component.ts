import {Component, Injector, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfileComponent} from "../profile.component";
import {User} from "../../../models/user/user";
import {USER_IMAGE_DIR} from "../../../app.module";
import {MessageResponse} from "../../../models/MessageResponse";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [UserService]
})
export class PersonalComponent implements OnInit {

  private file: any;
  form: FormGroup;
  parent: ProfileComponent;
  user:User;


  constructor(private us: UserService, private fb: FormBuilder, private inj: Injector) {
    this.parent = this.inj.get(ProfileComponent);
    this.user = this.parent.user;

    this.form = this.fb.group({
      'email': [null, Validators.email],
      'login': [null, Validators.required],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'phoneNumber': [null, Validators.compose([Validators.minLength(8), Validators.maxLength(8), Validators.required])],
      'city':[null,null],
      'zipCode':[null,null],
      'street':[null,null],
      'country':[null,null]


    });
  }

  ngOnInit() {
  }

  public changeFile($event) {


    if ($event.target.files && $event.target.files.length > 0) {

      let f = $event.target.files[0];

      this.file = f;

    }
    else {
      this.file = null;
    }
  }

  public save() {
  this.parent.parent.setBusy(true);

    this.us.update(this.user, this.file).subscribe(data => {
        let response :MessageResponse = data.json();
        this.parent.parent.setBusy(false);
        if (response.code == 0){
          this.parent.parent.currentUser = JSON.parse(response.message);
          this.user = this.parent.parent.currentUser;
          this.parent.parent.updateUser();
          this.parent.userImage = USER_IMAGE_DIR+this.parent.parent.currentUser.imageName;
        }
        else{

        }
      },
      error => {
        console.log(error);
      });


  }

}
