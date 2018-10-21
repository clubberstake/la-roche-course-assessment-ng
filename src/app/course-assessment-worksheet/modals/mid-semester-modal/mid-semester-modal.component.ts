import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SemesterReview, SemesterLearningIssues } from '../../classes/course-semester-evaluation';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/site-admin/classes/student';

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

  studentEmail: String;
  validEmail: boolean;

  constructor(private modalService: NgbModal, private studentService: StudentService) {
    this.midSemesterReview = new SemesterReview(new Student(0, '', null, '', '', '', '', '', '', '', '', '', '', ''),
      '', new SemesterLearningIssues(false, false, false, false, false, false, false, false, false, false),'','');
    this.studentEmail = '';
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

  loadStudent() {
    this.studentService.getStudent(this.studentEmail).subscribe((student: Student) => {
      console.log(student);
      if (student) {
        this.midSemesterReview.student = student;
      }
    });
  }

  onEmailChange(newValue) {
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmailRegEx.test(newValue)) {
      this.validEmail = true;
    } else {
      this.validEmail = false;
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
