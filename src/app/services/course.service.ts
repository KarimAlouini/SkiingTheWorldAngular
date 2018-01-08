import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class CourseService extends DataService {

  constructor( http: Http) 
  {
    super("http://localhost:18080/SkiWorld-web/v0/Courses/",http);

  }
}
