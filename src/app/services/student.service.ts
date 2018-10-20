import { Injectable } from '@angular/core';
import { UrlService } from './url-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../site-admin/classes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private urlService: UrlService) {
  }

  public getStudent(emailAddress: String): Observable<Student> {
    return this.http.get<Student>(this.urlService.getStudentURL(emailAddress));
  }

  public saveStudent(student: Student) {
    var studentId = -1;

    this.http
      .put<number>(this.urlService.saveStudentURL(), student)
      .subscribe(res => {
        studentId = res;
      });

    return studentId;
  }

  deleteStudent(student: Student): any {
    return this.http.delete<Student>(this.urlService.deleteStudentURL(student.id)).subscribe(res => {
      console.log(res);
    });
  }
}
