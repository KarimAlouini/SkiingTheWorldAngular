import {Component, Injector, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  providers: [UserService]
})
export class ConfirmationComponent implements OnInit {

  code: string;
  private parent: AppComponent;
  response: any;
  confirm: any;
  countDown : number = 3 ;
  private redirection:boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private us: UserService, private inj: Injector) {
    this.parent = this.inj.get(AppComponent);




  }

  ngOnInit() {
  }

  public resendConfirmation(form:any){

    this.parent.setBusy(true);
    this.us.resendConfirmation(form.email).subscribe(res=>{
        this.response = res.json();
        this.parent.setBusy(false);
    });

  }

  ngAfterViewInit() {

    this.parent.setBusy(true);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.code = params['code'];

    });

    this.us.confirm(this.code).subscribe(
      resp => {
        console.log(resp.json());

        this.parent.setBusy(false);
        this.response = resp.json();

        if (this.response.code == 0){
          this.redirection = true;
         var interval = setInterval(()=>{
           this.countDown --;
           if (this.countDown < 1 ){
             clearInterval(interval);
             this.router.navigateByUrl('login');
           }
         },1000);
        }


      }

    );

  }


}
