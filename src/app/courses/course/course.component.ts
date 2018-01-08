import {Component, Injector, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/courses/course";
import {User} from "../../models/user/user";
import {UserService} from "../../services/user.service";
import {Evaluation} from "../../models/courses/evaluation";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  private parent: AppComponent;
  courses: Course[];
  courseSearch: Course[];

  etat = false;
  etat2 = false;
  etat3 = false;
  val: any;

  constructor(private inj: Injector, private courseSe: CourseService, private userSe: UserService) {
    this.parent = inj.get(AppComponent);

  }


  ngOnInit() {
    this.courseSe.getAll().subscribe((lstcourses) => {
      console.log(lstcourses);
      this.courses = lstcourses;
      console.log(this.courses.length);
    });

  }

  myMethod(value: HTMLInputElement) {
    //this.courseSe.getByLocation(+value).subscribe((lstcourses)=>{
    //  this.courseSearch=lstcourses;
    //})
    console.log("********" + value + "******" + this.courses.length);
    this.courses.filter(location => value);
    console.log("********" + value + "******" + this.courses.length);
  }

  create(courseName: HTMLInputElement, courseState: HTMLInputElement, courseLevel: HTMLInputElement, date: HTMLInputElement, location: HTMLInputElement, price: HTMLInputElement, maxParticipants: HTMLInputElement, guide: number) {
    let course = new Course;


    course.courseName = courseName.value;
    course.courseState = courseState.value;
    course.courseLevel = courseLevel.value;
    course.location = location.value;
    course.date = date.valueAsDate;
    course.price = parseFloat(price.value);
    course.maxParticipants = parseInt(maxParticipants.value);
    course.guide = this.parent.getCurrentUser();
    this.courseSe.create(course)
      .subscribe(createdRec => {
      })
    this.ngOnInit();
  }

  createeval(ev: any, course: Course) {
    console.log("test1");
    let evalu = new Evaluation;
    evalu.value = ev.value;
    evalu.idUser = 1;
    let c = new Course;
    c.courseID = course.courseID;
    evalu.course = c;
    this.courseSe.createval(evalu)
      .subscribe(createdRece => {
      })


  }


}
