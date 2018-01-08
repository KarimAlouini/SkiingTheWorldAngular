import {CourseService} from "../../../services/course.service";
import {Component, Injector, OnInit} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {Course} from "../../../models/courses/course";
import {User} from "../../../models/user/user";
import {AppComponent} from "../../../app.component";


@Component({
  selector: 'app-mes-cours',
  templateUrl: './mes-cours.component.html',
  styleUrls: ['./mes-cours.component.css']
})
export class MesCoursComponent implements OnInit {

  constructor(private inj:Injector,private courseSe:CourseService, private userSe:UserService) {
    this.parent = inj.get(AppComponent);
  }

  private parent:AppComponent;
  courses:Course[];
  users:User[];
  test:any;
  etat=false;
  ngOnInit() {
    this.courseSe.getAll().subscribe((lstcourses)=>{
      console.log(lstcourses);
      this.courses=lstcourses;
    })

   this.userSe.getAll().subscribe((users)=>{this.users=users})

  }


  update(name:HTMLInputElement,date:HTMLInputElement,level:HTMLInputElement,state:HTMLInputElement,price:HTMLInputElement,maxP:HTMLInputElement,guide:number,location:HTMLInputElement,id:HTMLInputElement){
    let course= new Course;
    course.guide = this.parent.getCurrentUser();
      course.courseName=name.value;
      course.courseLevel=level.value;
      course.courseState=state.value;
      course.date=date.valueAsDate;
      course.price=parseFloat(price.value);
      course.maxParticipants=parseInt(maxP.value);
      course.location=location.value;
      course.courseID=parseInt(id.value);
         this.courseSe.update(course)
         .subscribe(createdRec=>{
         })
         this.ngOnInit();
  }
 delete(course:Course){
this.courseSe.delete(course).subscribe(createdRec=>{
});
this.ngOnInit();
 }
 create(courseName: HTMLInputElement,courseState:HTMLInputElement,courseLevel:HTMLInputElement,date:HTMLInputElement,location:HTMLInputElement,price:HTMLInputElement,maxParticipants:HTMLInputElement,guide:number){
  let course= new Course;

  course.courseName=courseName.value;
  course.courseState=courseState.value;
  course.courseLevel=courseLevel.value;
  course.location=location.value;
  course.date=date.valueAsDate;
  course.price=parseFloat(price.value);
  course.maxParticipants=parseInt(maxParticipants.value);
  course.guide=this.parent.getCurrentUser();
     this.courseSe.create(course)
     .subscribe(createdRec=>{
     })
     this.etat=!this.etat;
     this.ngOnInit();
  }

}
