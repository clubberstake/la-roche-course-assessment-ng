import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { CourseAssessment } from './classes/course-assessment';
import { Cafs1Info } from './classes/cafs1-info';
import { Cafs2Info } from './classes/cafs2-info';
import { Cafs3Info } from './classes/cafs3-info';
import { Cafs6Info } from './classes/cafs6-info';
import { SemesterReview, SemesterLearningIssues } from './classes/course-semester-evaluation';
import { CourseInformation } from './classes/course-information';
import { CourseSLOs } from './classes/course-SLOs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-course-assessment-worksheet',
  templateUrl: './course-assessment-worksheet.component.html',
  styleUrls: ['./course-assessment-worksheet.component.css']
})
export class CourseAssessmentWorksheetComponent implements OnInit {

  courseAssessment: CourseAssessment;

  constructor() {
    var courseInformation = new CourseInformation(0, 0, "sample", null, "sample", "sample", "sample", "sample");
    var courseSLOs = new CourseSLOs(0, 0, false, true, false, true, false);
    var cafs1Info = new Cafs1Info(0, 0, "asdfasdf", "", "", "", "");
    var cafs2Info = new Cafs2Info(0, 0, "", "", "", 0, 0, 0, 0, 0);
    var cafs3Info = new Cafs3Info(0, 0, "", "", "", "", "", "", "");
    var cafs6Info = new Cafs6Info(0, 0, "", "", "", "", "", "", "");
    var midSemesterReviews = new Array<SemesterReview>();
    var endSemesterReviews = new Array<SemesterReview>();
    this.courseAssessment = new CourseAssessment(courseInformation, courseSLOs, cafs1Info, cafs2Info, cafs3Info, cafs6Info, midSemesterReviews, endSemesterReviews);
  }

  ngOnInit() {
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
    // console.log(this.courseAssessment);
    for (let review of this.courseAssessment.endSemesterReviews) {
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
}
