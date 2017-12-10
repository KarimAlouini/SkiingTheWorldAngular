import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {BASE_URL} from "../app.module";

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

}
