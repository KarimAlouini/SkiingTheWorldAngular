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


      return this._http.get(BASE_URL+'users/confirm/'+code);
  }

  public resendConfirmation(email:string){

    var headers = new Headers();
    headers.set("email",email);

    return this._http.post(BASE_URL+"users/resendConfirmation",null,{
      headers:headers
    });

  }

  public update(user:any,file:any){

    const headers = new Headers();
    headers.set('user',JSON.stringify(user));
    headers.set('Authorization','CodeInc '+localStorage.getItem('token'));
    const input = new FormData();
    input.append('uploadedFile',file);
    return this._http.post(BASE_URL+'secured/users/update',input,{
      headers:headers
    });
  }

  public validateToken(tokenValue:string){

    const headers = new Headers();
    headers.set('token',tokenValue);
    return this._http.post(BASE_URL+'users/validate',null,{
      headers:headers
    });
  }

  public changePassword(model:any){
    const headers = new Headers();
    headers.set('Authorization','CodeInc '+localStorage.getItem('token'));
    headers.set('old_pass',model.oldPass);
    headers.set('new_pass',model.newPass1);

    return this._http.post(BASE_URL+'secured/users/change_password',null,{
      headers:headers
  });

  }

  public getAll() {
    return this._http.get(BASE_URL+'users/all').map(response=>response.json());
  }



}
