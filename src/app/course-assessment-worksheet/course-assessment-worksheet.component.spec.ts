import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessmentWorksheetComponent } from './course-assessment-worksheet.component';
import { SemesterLearningIssues, SemesterReview } from './classes/course-semester-evaluation';
import { FormsModule } from '@angular/forms';

fdescribe('CourseAssessmentWorksheetComponent', () => {
  let component: CourseAssessmentWorksheetComponent;
  let fixture: ComponentFixture<CourseAssessmentWorksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CourseAssessmentWorksheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate grades from whats entered in semester reviews', () => {
    var learningIssues = new SemesterLearningIssues(true, false, false, true, false, true, false, false, false);
    console.log(component.courseAssessment);
    component.courseAssessment.endSemesterReviews.push(new SemesterReview(1234, 'A', 'Frank Stevens', learningIssues, "Do better bro.", "I'm a bauss"));
    component.courseAssessment.endSemesterReviews.push(new SemesterReview(1234, 'A', 'Frank Stevens', learningIssues, "Do better bro.", "I'm a bauss"));
    component.courseAssessment.endSemesterReviews.push(new SemesterReview(1234, 'B', 'Frank Stevens', learningIssues, "Do better bro.", "I'm a bauss"));
    component.courseAssessment.endSemesterReviews.push(new SemesterReview(1234, 'C', 'Frank Stevens', learningIssues, "Do better bro.", "I'm a bauss"));
    component.courseAssessment.endSemesterReviews.push(new SemesterReview(1234, 'D', 'Frank Stevens', learningIssues, "Do better bro.", "I'm a bauss"));
    component.calculateGrades();
    expect(component.courseAssessment.cafs2Info.percentA).toEqual(2);
    expect(component.courseAssessment.cafs2Info.percentB).toEqual(1);
    expect(component.courseAssessment.cafs2Info.percentC).toEqual(1);
    expect(component.courseAssessment.cafs2Info.percentD).toEqual(1);
    expect(component.courseAssessment.cafs2Info.percentF).toEqual(0);
  });

  it('should reset the grades when a new course is loaded before calculating', () => {
    component.courseAssessment.cafs2Info.percentA = 1;
    component.courseAssessment.cafs2Info.percentB = 2;
    component.courseAssessment.cafs2Info.percentC = 3;
    component.courseAssessment.cafs2Info.percentD = 4;
    component.courseAssessment.cafs2Info.percentF = 3;

    component.resetGrades();

    expect(component.courseAssessment.cafs2Info.percentA).toEqual(0);
    expect(component.courseAssessment.cafs2Info.percentB).toEqual(0);
    expect(component.courseAssessment.cafs2Info.percentC).toEqual(0);
    expect(component.courseAssessment.cafs2Info.percentD).toEqual(0);
    expect(component.courseAssessment.cafs2Info.percentF).toEqual(0);
  });
});
