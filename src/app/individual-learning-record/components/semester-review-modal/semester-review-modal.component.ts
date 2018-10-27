import { Component, OnInit, Input } from '@angular/core';
import { SemesterReview, SemesterLearningIssues } from 'src/app/course-assessment-worksheet/classes/course-semester-evaluation';
import { Student } from 'src/app/site-admin/classes/student';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-semester-review-modal',
  templateUrl: './semester-review-modal.component.html',
  styleUrls: ['./semester-review-modal.component.css']
})
export class SemesterReviewModalComponent implements OnInit {

  @Input()
  semesterReviews: Array<SemesterReview>;

  selectedReview: SemesterReview;
  closeResult: String;
  reviewSelector = ['Mid-Semester', 'End-Semester'];
  reviewForm: FormGroup;
  isEndSemester: Boolean;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.selectedReview = new SemesterReview(new Student(0, '', null, '', '', '', '', '', '', '', '', '', '', ''),
      '', new SemesterLearningIssues(false, false, false, false, false, false, false, false, false, false), '', '');
  }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      reviewControl: ['End-Semester']
    });

    this.setReview('End-Semester');
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

  setReview(value: string) {
    for (let review of this.semesterReviews) {
      if (review.grade && value == 'End-Semester') {
        this.selectedReview = review;
        this.isEndSemester = true;
        break;
      }
      else {
        this.selectedReview = review;
        this.isEndSemester = false;
      }
    }
  }

}
