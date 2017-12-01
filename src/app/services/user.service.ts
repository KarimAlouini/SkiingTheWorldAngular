import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {BASE_URL} from "../app.module";

@Injectable()
export class UserService {

  constructor(private _http: Http) {
  }

  login(user: any) {

    var json = JSON.stringify({login: user.login, password: user.password});
    var params = "json=" + json;
    var headers = new Headers();

    headers.set("login", user.login);
    headers.set("password", user.password);

    return this._http.post(BASE_URL+'users'
      , params,
      {headers: headers});
  }

  public confirm(code:any){
    console.log('form '+code);

      return this._http.get(BASE_URL+'users/confirm/'+code.email);
  }

  public resendConfirmation(email:string){
console.log(email);
    var headers = new Headers();
    headers.set("email",email);

    return this._http.post(BASE_URL+"users/resendConfirmation",null,{
      headers:headers
    });

  }

}
