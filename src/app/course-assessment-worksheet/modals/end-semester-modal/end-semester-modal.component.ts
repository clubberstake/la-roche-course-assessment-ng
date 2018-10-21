import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SemesterReview, SemesterLearningIssues } from '../../classes/course-semester-evaluation';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Student } from 'src/app/site-admin/classes/student';
import { StudentService } from 'src/app/services/student.service';

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
  studentEmail: String;
  validEmail: boolean;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private studentService: StudentService) {
    this.endSemesterReview = new SemesterReview(new Student(0, '', null, '', '', '', '', '', '', '', '', '', '', ''),
      '', new SemesterLearningIssues(false, false, false, false, false, false, false, false, false, false), '', '');
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

  loadStudent() {
    this.studentService.getStudent(this.studentEmail).subscribe((student: Student) => {
      console.log(student);
      if (student) {
        this.endSemesterReview.student = student;
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
