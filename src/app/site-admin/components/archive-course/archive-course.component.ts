import { Component, OnInit } from '@angular/core';
import { CourseInformation } from 'src/app/course-assessment-worksheet/classes/course-information';
import { CourseService } from 'src/app/course-assessment-worksheet/service/course-service.service';
import { Instructor } from '../../classes/instructor';

@Component({
  selector: 'app-archive-course',
  templateUrl: './archive-course.component.html',
  styleUrls: ['./archive-course.component.css']
})
export class ArchiveCourseComponent implements OnInit {

  courseList: CourseInformation[];
  selectedCourse: CourseInformation;

  constructor(private courseService: CourseService) {
    this.selectedCourse = new CourseInformation(0, '', null, '', '', '', false, new Instructor(0, '', ''));
    this.courseList = new Array<CourseInformation>();
  }

  ngOnInit() {
    this.loadCourseInformationList();
  }

  loadCourseInformationList() {
    this.courseList = new Array<CourseInformation>();
    this.courseService.getCourseList().subscribe((courses: CourseInformation[]) => {
      for (let course of courses) {
        if (!course.archived) {
          this.courseList.push(course);
        }
      }

      this.courseList = this.courseList.sort((a: CourseInformation, b: CourseInformation) => {
        if (a.id < b.id) {
          return -1;
        }
        else if (a.id > b.id) {
          return 1;
        }
        else {
          return 0;
        }
      });
      this.selectedCourse = this.courseList[0];
    });
  }

  archiveCourse() {
    this.courseService.archiveCourse(this.selectedCourse);
    this.loadCourseInformationList();
  }

}