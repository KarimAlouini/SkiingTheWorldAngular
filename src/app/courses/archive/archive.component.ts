import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/courses/course";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private courseSe:CourseService) { }

  courses:Course[];
  ngOnInit() {
    this.courseSe.getAll().subscribe((lstcourses)=>{
      this.courses=lstcourses;});
  }



}
