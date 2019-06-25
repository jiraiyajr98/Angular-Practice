import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses1',
  templateUrl: './courses1.component.html',
  styleUrls: ['./courses1.component.css']
})
export class Courses1Component implements OnInit {

  courses: string[];
  url ="https://english.cdn.zeenews.com/sites/default/files/2018/01/24/655830-environment.jpg";
  email= "abcd@abcd.com";

  constructor(service:CoursesService){
    this.courses = service.getCourseList();
  }

  onEnterPressed(){
    console.log(this.email);
  }

  onClick(){
    console.log("Button Clicked");
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
