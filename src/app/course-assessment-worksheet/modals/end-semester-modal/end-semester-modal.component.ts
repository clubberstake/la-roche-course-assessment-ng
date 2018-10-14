import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SemesterReview, SemesterLearningIssues } from '../../classes/course-semester-evaluation';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-end-semester-modal',
  templateUrl: './end-semester-modal.component.html',
  styleUrls: ['./end-semester-modal.component.css']
})
export class EndSemesterModalComponent implements OnInit {

  closeResult: string;

  @Input()
  endSemesterReview: SemesterReview;
  @Output()
  endSemesterItemSaved = new EventEmitter<boolean>();

  gradeForm: FormGroup;
  grades = ['A', 'B', 'C', 'D', 'F'];

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.endSemesterReview = new SemesterReview(0, '', '', new SemesterLearningIssues(false, false, false, false, false, false, false, false, false, false), '', '');
  }

  ngOnInit() {
    this.gradeForm = this.fb.group({
      gradeControl: ['C']
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.endSemesterReview.grade = this.gradeForm.value.gradeControl;
      this.endSemesterItemSaved.emit(true);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.endSemesterItemSaved.emit(false);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  coursePaceChecked(value: boolean) {
    this.endSemesterReview.semesterLearningIssues.coursePace = value;
  }

  poorBackgroundChecked(value: Boolean) {
    this.endSemesterReview.semesterLearningIssues.poorBackground = value;
  }

  lackOfMindsetChecked(value: Boolean) {
    this.endSemesterReview.semesterLearningIssues.lackOfMindset = value;
  }

  lackOfCuriosityChecked(value: Boolean) {
    this.endSemesterReview.semesterLearningIssues.lackOfCuriosity = value;
  }

  lackOfEffortOrFocusChecked(value: Boolean) {
    this.endSemesterReview.semesterLearningIssues.lackOfEffortOrFocus = value;
  }

  poorTimeManagementChecked(value: Boolean) {
    this.endSemesterReview.semesterLearningIssues.poorTimeManagement = value;
  }

  healthIssuesChecked(value: Boolean) {
    this.endSemesterReview.semesterLearningIssues.healthIssues = value;
  }

  complacenceChecked(value: Boolean) {
    this.endSemesterReview.semesterLearningIssues.complacence = value;
  }

  employmentHoursChecked(value: Boolean) {
    this.endSemesterReview.semesterLearningIssues.employmentHours = value;
  }

  otherChecked(value: Boolean) {
    this.endSemesterReview.semesterLearningIssues.other = value;
  }

  setGrade(value: String) {
    console.log(this.gradeForm.value.gradeControl);
  }

}
