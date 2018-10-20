import { Injectable } from '@angular/core';
import { CourseAssessment } from '../course-assessment-worksheet/classes/course-assessment';
import { Student } from '../site-admin/classes/student';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  baseUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:8080";
  }

  public getCourseListURL(): string {
    return this.baseUrl + '/course';
  }

  public getSaveCourseURL(): string {
    return this.baseUrl + '/courseAssessment';
  }

  public getSaveEndSemesterReviewURL(courseId: number): string {
    return this.baseUrl + '/endSemesterReview/' + courseId;
  }

  public getSaveMidSemesterReviewURL(courseId: number): string {
    return this.baseUrl + '/midSemesterReview/' + courseId;
  }

  public getCourseAssessmentURL(courseId: number): string {
    return this.baseUrl + '/courseAssessment/' + courseId;
  }

  public getStudentURL(emailAddress: String): string {
    return this.baseUrl + '/student/' + emailAddress;
  }

  public saveStudentURL(): string {
    return this.baseUrl + '/student';
  }

  public deleteStudentURL(id: number): string {
    return this.baseUrl + '/student/' + id;
  }

  public deleteInstructorURL(id: number): string {
    return this.baseUrl + '/instructor/' + id;
  }

  public saveInstructorURL(): string {
    return this.baseUrl + '/instructor'
  }

  public getInstructorURL(emailAddress: String): string {
    return this.baseUrl + '/instructor/' + emailAddress;
  }
}
