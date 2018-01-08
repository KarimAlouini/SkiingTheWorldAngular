import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EvaluationService extends DataService {

  constructor( http: Http) 
  {
    super("http://localhost:18080/SkiWorld-web/v0/rate/add",http);

  }
  

}
