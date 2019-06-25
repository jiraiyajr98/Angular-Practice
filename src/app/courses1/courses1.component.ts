import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses1',
  templateUrl: './courses1.component.html',
  styleUrls: ['./courses1.component.css']
})
export class Courses1Component implements OnInit {

  courses;

  constructor(service:CoursesService){
    this.courses = service.getCourseList();
  }

 getTitle(){
   return 'Holla Buss !!';
 }

 getListOfCourses(){
   return ["Course1","Course2","Course3","Course4","Course5","Course6"];
 }

  ngOnInit() {
  }

}
