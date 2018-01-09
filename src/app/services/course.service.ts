import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import {BASE_URL} from "../app.module";

@Injectable()
export class CourseService extends DataService {

  constructor( http: Http)
  {
    super(BASE_URL+"Courses/",http);

  }
}
