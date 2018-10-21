import { Injectable } from '@angular/core';
import { CourseInformation } from '../course-assessment-worksheet/classes/course-information';
import { UrlService } from './url-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseInformationService {
  constructor(private http: HttpClient, private urlService: UrlService) { }

  deleteCourseInformation(courseInformation: CourseInformation): any {
    return this.http.delete<CourseInformation>(this.urlService.deleteCourseInformationURL(courseInformation.id)).subscribe(res => {
      console.log(res);
    });
  }

  saveCourseInformation(courseInformation: CourseInformation): any {
    var courseInformationId = -1;

    this.http
      .put<number>(this.urlService.saveCourseInformationURL(), courseInformation)
      .subscribe(res => {
        console.log(res);
      });

    return courseInformationId;
  }

  getCourseInformation(courseNumberAndSection: string, semester: string, year: string): any {
    return this.http.get<CourseInformation>(this.urlService.getcourseNumberAndSectionURL(courseNumberAndSection, semester, year));
  }
}
