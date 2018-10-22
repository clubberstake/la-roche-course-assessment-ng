import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseInformation } from '../classes/course-information';
import { UrlService } from 'src/app/services/url-service.service';
import { CourseAssessment } from '../classes/course-assessment';
import { SemesterReview } from '../classes/course-semester-evaluation';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  constructor(private http: HttpClient, private urlService: UrlService) { }

  public getCourseList(): Observable<Array<CourseInformation>> {
    return this.http.get<Array<CourseInformation>>(this.urlService.getCourseListURL());
  };

  public archiveCourse(courseInformation: CourseInformation): any {
    var courseInformationId;

    var response = this.http
      .post<number>(this.urlService.getArchiveCourseURL(), courseInformation)
      .subscribe(res => {
        console.log(res);
        courseInformationId = res;
      });

    return courseInformationId;
  }

  public saveCourse(courseAssessment: CourseAssessment) {
    console.log(courseAssessment);
    var courseAssessmentId = -1;

    var response = this.http
      .put<number>(this.urlService.getSaveCourseURL(), courseAssessment)
      .subscribe(res => {
        console.log(res);
        courseAssessment.id = res;
      });
    return courseAssessmentId;
  }

  public loadCourse(courseId: number): Observable<CourseAssessment> {
    return this.http.get<CourseAssessment>(this.urlService.getCourseAssessmentURL(courseId));
  }
}
