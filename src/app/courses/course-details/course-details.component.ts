
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CourseService} from "../../services/course.service";
import {GmapsServiceService} from "../../services/gmaps-service.service";
import {Course} from "../../models/courses/course";
import {Apply} from "../../models/courses/apply";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course:Course;
  etat=false;
  private busy: boolean = false;
  private back: boolean = false;
  lat: number;
  lng: number;
  location:string;



  constructor(private courseSe:CourseService,private route:ActivatedRoute, private gMapsService:GmapsServiceService, private  __zone: NgZone) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params=>
      {
        let c= new Course;
        let id = params.get('courseID');
       this.courseSe.getById(+id).subscribe(courseById=>this.course=courseById);
      }
    );


  }

  public setBusy(busy: boolean) {
    this.busy = busy;
  }

  getAddress(location) {
    this.gMapsService.getLatLan(location)
      .subscribe(
        result => {
            this.__zone.run(() => {
                this.lat = result.lat();
                this.lng = result.lng();
            })
        },
        error => console.log(error),
        () => console.log('Geocoding completed!'+this.lat+"*****"+this.course.location)
      );

  }
  changeEtat(){
    this.etat=true;
  }
  myF(location){
    this.getAddress(location);
   this.etat=true;
  }
  apply(nbr:HTMLInputElement,cid:HTMLInputElement){
   let p= new Apply;

       p.courseID=parseInt(cid.value);
       p.userID=1;
       p.nbr=parseInt(nbr.value);
          this.courseSe.apply(p)
          .subscribe(createdRec=>{
          })
          this.ngOnInit();
  }


}
