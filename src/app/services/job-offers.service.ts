import {Injectable} from '@angular/core';
import {BASE_URL} from "../app.module";
import {Http, Headers} from '@angular/http';
import {JobOffer} from "../models/joboffer";


@Injectable()
export class JobOffersService {

  constructor(private http: Http) {
  }

  public getAllOffers() {
    return this.http.get(BASE_URL + 'joboffers/all');
  }

  public getById(id: number) {
    return this.http.get(BASE_URL + 'joboffers/' + id);
  }

  public getTopFive(cat: string) {
    return this.http.get(BASE_URL + 'joboffers/top5Category/' + cat);
  }

  public getNewest (){
    return this.http.get(BASE_URL+'joboffers/top5')
  }
  public AddOffer(offer: any){
    let token = localStorage.getItem('token');
    var headers = new Headers();
    console.log('token');
console.log(token);
    headers.set('Authorization', 'CodeInc ' + token);


    return this.http.put(BASE_URL + 'secured/joboffers/AddOffer', offer, {
      headers:headers
    }).map(res => res.json());
  }
 public getMyJobOffers(){
   let token = localStorage.getItem('token');
   var headers = new Headers();

   headers.set('Authorization', 'CodeInc ' + token);
   return this.http.get(BASE_URL + 'secured/joboffers/mine', {
     headers: headers
   });
 }
 public applyForJobOffer(jobApply:any,file:any){
   let token = localStorage.getItem('token');
   var headers = new Headers();
   headers.set('jobApply',JSON.stringify(jobApply));
   const input = new FormData();
   input.append('uploadedFile',file);

   headers.set('Authorization', 'CodeInc ' + token);
   return this.http.post(BASE_URL+ 'secured/joboffers/AddApply', input, {
     headers: headers
   });
 }
  public getMyApplies(){
    let token = localStorage.getItem('token');
    var headers = new Headers();

    headers.set('Authorization', 'CodeInc ' + token);
    return this.http.get(BASE_URL + 'secured/joboffers/myApplications', {
      headers: headers
    });
  }

  public delete(jo:JobOffer) {

    let token = localStorage.getItem('token');
    var headers = new Headers();

    headers.set('Authorization', 'CodeInc ' + token);
    return this.http.put(BASE_URL + 'secured/joboffers/delete', jo, {
      headers: headers
    });
  }


}
