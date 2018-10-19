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
    console.log('getting course list');
    return this.http.get<Array<CourseInformation>>(this.urlService.getCourseListURL());
  };

  public saveCourse(courseAssessment: CourseAssessment) {
    console.log("PUTing course", JSON.stringify(courseAssessment));
    var courseAssessmentId = -1;

    var response = this.http
      .put<number>(this.urlService.getSaveCourseURL(), courseAssessment)
      .subscribe(res => {
        console.log(res);
        courseAssessmentId = res;

        for (let review of courseAssessment.endSemesterReviews) {
          response = this.saveEndSemesterReviews(courseAssessmentId, review);
        }

        for (let review of courseAssessment.midSemesterReviews) {
          response = this.saveMidSemesterReviews(courseAssessmentId, review);
        }

      });
    return courseAssessmentId;
  }

  private saveEndSemesterReviews(courseId: number, semesterReview: SemesterReview) {
    return this.http
      .put<Response>(this.urlService.getSaveEndSemesterReviewURL(courseId), semesterReview)
      .subscribe(res => console.log(res));
  }

  private saveMidSemesterReviews(courseId: number, semesterReview: SemesterReview) {
    return this.http
      .put<Response>(this.urlService.getSaveMidSemesterReviewURL(courseId), semesterReview)
      .subscribe(res => console.log(res));
  }

  public loadCourse(courseId: number): Observable<CourseAssessment> {
    console.log('getting course assessment');
    return this.http.get<CourseAssessment>(this.urlService.getCourseAssessmentURL(courseId));
  }
}
