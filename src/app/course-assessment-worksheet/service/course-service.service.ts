import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseInformation } from '../classes/course-information';
import { UrlService } from 'src/app/services/url-service.service';
import { CourseAssessment } from '../classes/course-assessment';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  public getCourseList(): Observable<Array<CourseInformation>> {
    console.log('getting course list');
    return this.http.get<Array<CourseInformation>>(this.urlService.getCourseListURL());
  };

  public saveCourse(courseAssessment: CourseAssessment) {
    console.log("POSTing course", courseAssessment);
    return this.http
      .put<Response>(this.urlService.getSaveCourseURL(), courseAssessment)
      .subscribe(res => console.log(res));
  }
}
