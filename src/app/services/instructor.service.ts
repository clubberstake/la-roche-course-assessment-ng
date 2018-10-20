import { Injectable } from '@angular/core';
import { Instructor } from '../site-admin/classes/instructor';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url-service.service';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  constructor(private http: HttpClient, private urlService: UrlService) { }

  deleteInstructor(instructor: Instructor): any {
    return this.http.delete<Instructor>(this.urlService.deleteInstructorURL(instructor.id)).subscribe(res => {
      console.log(res);
    });
  }

  saveInstructor(instructor: Instructor): any {
    var instructorId = -1;

    this.http
      .put<number>(this.urlService.saveInstructorURL(), instructor)
      .subscribe(res => {
        console.log(res);
      });

    return instructorId;
  }

  getInstructor(emailAddress: String): any {
    return this.http.get<Instructor>(this.urlService.getInstructorURL(emailAddress));
  }
}
