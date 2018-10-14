import { Injectable } from '@angular/core';
import { CourseAssessment } from '../course-assessment-worksheet/classes/course-assessment';

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
    return this.baseUrl + '/course';
  }
}
