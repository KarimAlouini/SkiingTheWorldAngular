import {Component, ElementRef, Injector, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProfileComponent} from "../profile.component";
import {UserService} from "../../../services/user.service";
import {MessageResponse} from "../../../models/MessageResponse";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],
  providers:[UserService]
})
export class SecurityComponent implements OnInit {

  response:MessageResponse;
  model:any;
  @ViewChild('form')form:FormGroup;
  passwordsMatch:boolean=false;
  private parent:ProfileComponent;

  constructor(private fb:FormBuilder,private inj:Injector,private us:UserService) {
    this.model ={oldPass:'',newPass1:'',newPass2:''};
    this.parent = this.inj.get(ProfileComponent);

  }

  ngOnInit() {
    this.form.valueChanges.subscribe(values=>{
      this.checkForMatch();
    });
  }

  public checkForMatch(){
      this.passwordsMatch = this.model.newPass1 == this.model.newPass2;
  }

  public changePassword(){

    console.log('done');
    this.parent.parent.setBusy(true);
    this.us.changePassword(this.model).subscribe(
      (data)=>{
        this.parent.parent.setBusy(false);
          this.response = data.json();
          this.model={oldPass:'',newPass1:'',newPass2:''};

      },
      error=>{

      }
    )
  }

}
