import { Component, OnInit } from '@angular/core';
import { Student } from '../../classes/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-admin',
  templateUrl: './student-admin.component.html',
  styleUrls: ['./student-admin.component.css']
})
export class StudentAdminComponent implements OnInit {

  student: Student;
  validEmail: boolean;
  existingStudent: boolean;
  studentEmail: String;
  studentLoaded: boolean;

  constructor(private studentService: StudentService) {
    this.resetStudent();
  }

  private resetStudent() {
    this.student = new Student(0, '', null, '', '', '', '', '', '', '', '', '', '', '');
    this.existingStudent = true;
    this.studentLoaded = false;
  }

  ngOnInit() {
  }

  onEmailChange(newValue) {
    this.resetStudent();
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmailRegEx.test(newValue)) {
      this.validEmail = true;
    } else {
      this.validEmail = false;
    }
  }

  loadStudent() {
    this.student.emailAddress = this.studentEmail;
    this.studentService.getStudent(this.student.emailAddress).subscribe((student: Student) => {
      console.log(student);
      if (student) {
        this.resetStudent();
        this.student = student;
        this.studentLoaded = true;
      }
      else {
        this.resetStudent();
        this.existingStudent = false;
      }
    });
  }

  saveStudent() {
    this.student.emailAddress = this.studentEmail;
    console.log(this.student);
    this.studentService.saveStudent(this.student);
    this.validEmail = false;
  }

  onNameChange() { // only re-enable the button is something acutally was typed and email valid.
    if (this.validEmail) {
      this.existingStudent = false;
    } 
  }

  deleteStudent() {
    this.student.emailAddress = this.studentEmail;
    this.studentService.deleteStudent(this.student);
    this.resetStudent();
    this.validEmail = false;
  }
}
