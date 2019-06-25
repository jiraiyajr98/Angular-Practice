import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  getCourseList(){
    return ["Course1","Course2","Course3","Course4","Course5","Course6"];
  }

  constructor() { }
}
