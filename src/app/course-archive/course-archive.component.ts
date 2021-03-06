import { Component, OnInit } from '@angular/core';
import { CourseAssessment } from '../course-assessment-worksheet/classes/course-assessment';
import { SemesterReview, SemesterLearningIssues } from '../course-assessment-worksheet/classes/course-semester-evaluation';
import { CourseInformation } from '../course-assessment-worksheet/classes/course-information';
import { CourseService } from '../course-assessment-worksheet/service/course-service.service';
import { Student } from '../site-admin/classes/student';
import { Cafs1Info } from '../course-assessment-worksheet/classes/cafs1-info';
import { CourseSLOs } from '../course-assessment-worksheet/classes/course-SLOs';
import { Instructor } from '../site-admin/classes/instructor';
import { Cafs2Info } from '../course-assessment-worksheet/classes/cafs2-info';
import { Cafs3Info } from '../course-assessment-worksheet/classes/cafs3-info';
import { Cafs6Info } from '../course-assessment-worksheet/classes/cafs6-info';

@Component({
  selector: 'app-course-archive',
  templateUrl: './course-archive.component.html',
  styleUrls: ['./course-archive.component.css']
})
export class CourseArchiveComponent implements OnInit {

  courseAssessment: CourseAssessment;
  courseList: Array<CourseInformation>;
  selectedCourse: CourseInformation;

  constructor(private courseService: CourseService) {
    this.courseList = new Array<CourseInformation>();
  }

  ngOnInit() {
    this.createEmptyCourse();
    this.loadCourseInformationList();
  }

  loadCourseInformationList() {
    this.courseList = new Array<CourseInformation>();
    this.courseService.getCourseList().subscribe((courses: CourseInformation[]) => {
      for (let course of courses) {
        if (course.archived) {
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
      this.setCourse();
    });
  }

  knowledgeBaseChecked(value: boolean) {
    this.courseAssessment.courseSLOs.slo1 = value;
  }

  labSkillsChecked(value: boolean) {
    this.courseAssessment.courseSLOs.slo2 = value;
  }

  practiceChecked(value: boolean) {
    this.courseAssessment.courseSLOs.slo3 = value;
  }

  societalConnectsChecked(value: boolean) {
    this.courseAssessment.courseSLOs.slo4 = value;
  }

  capstoneChecked(value: boolean) {
    this.courseAssessment.courseSLOs.slo5 = value;
  }

  calculateGrades() {
    this.resetGrades();

    for (let review of Array.from(this.courseAssessment.endSemesterReviews.values())) {
      review.grade == 'A' ? this.courseAssessment.cafs2Info.percentA += 1 : 0;
      review.grade == 'B' ? this.courseAssessment.cafs2Info.percentB += 1 : 0;
      review.grade == 'C' ? this.courseAssessment.cafs2Info.percentC += 1 : 0;
      review.grade == 'D' ? this.courseAssessment.cafs2Info.percentD += 1 : 0;
      review.grade == 'F' ? this.courseAssessment.cafs2Info.percentF += 1 : 0;
    }
  }

  resetGrades() {
    this.courseAssessment.cafs2Info.percentA = 0;
    this.courseAssessment.cafs2Info.percentB = 0;
    this.courseAssessment.cafs2Info.percentC = 0;
    this.courseAssessment.cafs2Info.percentD = 0;
    this.courseAssessment.cafs2Info.percentF = 0;
  }

  calculateSemesterLearningIssues(issues: SemesterLearningIssues): string {
    var learningIssues = '';
    learningIssues = issues.coursePace ? learningIssues.concat('Course pace, ') : learningIssues.concat('');
    learningIssues = issues.poorBackground ? learningIssues.concat('Poor background, ') : learningIssues.concat('');
    learningIssues = issues.lackOfMindset ? learningIssues.concat('Mindset, ') : learningIssues.concat('');
    learningIssues = issues.lackOfCuriosity ? learningIssues.concat('Interest or Curiousity, ') : learningIssues.concat('');
    learningIssues = issues.lackOfEffortOrFocus ? learningIssues.concat('Effortor Focus, ') : learningIssues.concat('');
    learningIssues = issues.poorTimeManagement ? learningIssues.concat('Time Manaagement, ') : learningIssues.concat('');
    learningIssues = issues.healthIssues ? learningIssues.concat('Health issues, ') : learningIssues.concat('');
    learningIssues = issues.complacence ? learningIssues.concat('Complacence, ') : learningIssues.concat('');
    learningIssues = issues.employmentHours ? learningIssues.concat('Employment hours, ') : learningIssues.concat('');
    learningIssues = issues.other ? learningIssues.concat('Other ') : learningIssues.concat('');

    return learningIssues.trim().replace(/,\s*$/, "");
  }

  hasMidSemesterReviews(): boolean {
    if (this.courseAssessment.midSemesterReviews) {
      return this.courseAssessment.midSemesterReviews.length > 0 ? true : false;
    }

    return false;
  }

  hasEndSemesterReviews(): boolean {
    if (this.courseAssessment.endSemesterReviews) {
      return this.courseAssessment.endSemesterReviews.length > 0 ? true : false;
    }

    return false;
  }

  setCourse() {
    this.createEmptyCourse();
    this.courseAssessment.courseInformation = this.selectedCourse;
  }

  loadCourse() {
    this.courseService.loadCourse(this.selectedCourse.id).subscribe((courseAssessment: CourseAssessment) => {
      if (courseAssessment) {
        this.courseAssessment = courseAssessment;
        console.log(this.courseAssessment);
      }
      else {
        this.createEmptyCourse();
        this.courseAssessment.courseInformation = this.selectedCourse;
      }
    });
  }

  createEmptyCourse() {
    var courseInformation = new CourseInformation(0, "", null, "", "", "", false, new Instructor(0, '', ''));
    var courseSLOs = new CourseSLOs(0, false, false, false, false, false);
    var cafs1Info = new Cafs1Info(0, "", "", "", "", "");
    var cafs2Info = new Cafs2Info(0, "", "", "", 0, 0, 0, 0, 0);
    var cafs3Info = new Cafs3Info(0, "", "", "", "", "", "", "");
    var cafs6Info = new Cafs6Info(0, "", "", "", "", "", "", "");
    var midSemesterReviews = new Array<SemesterReview>();
    var endSemesterReviews = new Array<SemesterReview>();
    this.courseAssessment = new CourseAssessment(0, courseInformation, courseSLOs, cafs1Info, cafs2Info, cafs3Info, cafs6Info, midSemesterReviews, endSemesterReviews);
  }

  downloadSyllabus() {
    var fileContents = String(this.courseAssessment.courseInformation.syllabus.fileContent);
    var filename = this.courseAssessment.courseInformation.syllabus.fileName;

    var a = document.createElement("a");
    var dataURI = fileContents;
    a.href = dataURI;
    a['download'] = filename;
    var e = document.createEvent("MouseEvents");
    // Use of deprecated function to satisfy TypeScript.
    e.initMouseEvent("click", true, false,
      document.defaultView, 0, 0, 0, 0, 0,
      false, false, false, false, 0, null);
    a.dispatchEvent(e);
  }

}
