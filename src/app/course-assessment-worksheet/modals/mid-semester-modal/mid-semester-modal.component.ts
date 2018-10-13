import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SemesterReview, SemesterLearningIssues } from '../../classes/course-semester-evaluation';

@Component({
  selector: 'app-mid-semester-modal',
  templateUrl: './mid-semester-modal.component.html',
  styleUrls: ['./mid-semester-modal.component.css']
})
export class MidSemesterModalComponent {

  closeResult: string;

  @Input()
  midSemesterReview: SemesterReview;
  @Output()
  midSemesterItemSaved = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {
    this.midSemesterReview = new SemesterReview(0, '', '', new SemesterLearningIssues(false, false, false, false, false, false, false, false, false, false), '', '');
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.midSemesterItemSaved.emit(true);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.midSemesterItemSaved.emit(false);
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
    this.midSemesterReview.semesterLearningIssues.coursePace = value;
  }

  poorBackgroundChecked(value: Boolean) {
    this.midSemesterReview.semesterLearningIssues.poorBackground = value;
  }

  lackOfMindsetChecked(value: Boolean) {
    this.midSemesterReview.semesterLearningIssues.lackOfMindset = value;
  }

  lackOfCuriosityChecked(value: Boolean) {
    this.midSemesterReview.semesterLearningIssues.lackOfCuriosity = value;
  }

  lackOfEffortOrFocusChecked(value: Boolean) {
    this.midSemesterReview.semesterLearningIssues.lackOfEffortOrFocus = value;
  }

  poorTimeManagementChecked(value: Boolean) {
    this.midSemesterReview.semesterLearningIssues.poorTimeManagement = value;
  }

  healthIssuesChecked(value: Boolean) {
    this.midSemesterReview.semesterLearningIssues.healthIssues = value;
  }

  complacenceChecked(value: Boolean) {
    this.midSemesterReview.semesterLearningIssues.complacence = value;
  }

  employmentHoursChecked(value: Boolean) {
    this.midSemesterReview.semesterLearningIssues.employmentHours = value;
  }

  otherChecked(value: Boolean) {
    this.midSemesterReview.semesterLearningIssues.other = value;
  }

}
