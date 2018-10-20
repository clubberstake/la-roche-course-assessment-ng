import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor.service';
import { Instructor } from '../../classes/instructor';

@Component({
  selector: 'app-instructor-admin',
  templateUrl: './instructor-admin.component.html',
  styleUrls: ['./instructor-admin.component.css']
})
export class InstructorAdminComponent implements OnInit {

  instructor: Instructor;
  validEmail: boolean;
  existingInstructor: boolean;
  instructorEmail: String;
  instructorLoaded: boolean;

  constructor(private instructorService: InstructorService) {
    this.resetInstructor();
  }

  private resetInstructor() {
    this.instructor = new Instructor(0, '','');
    this.existingInstructor = true;
    this.instructorLoaded = false;
  }

  ngOnInit() {
  }

  onEmailChange(newValue) {
    this.resetInstructor();
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmailRegEx.test(newValue)) {
      this.validEmail = true;
    } else {
      this.validEmail = false;
    }
  }

  loadInstructor() {
    this.instructor.emailAddress = this.instructorEmail;
    this.instructorService.getInstructor(this.instructor.emailAddress).subscribe((instructor: Instructor) => {
      console.log(instructor);
      if (instructor) {
        this.resetInstructor();
        this.instructor = instructor;
        this.instructorLoaded = true;
      }
      else {
        this.resetInstructor();
        this.existingInstructor = false;
      }
    });
  }

  saveInstructor() {
    this.instructor.emailAddress = this.instructorEmail;
    this.instructorService.saveInstructor(this.instructor);
    this.validEmail = false;
  }

  onNameChange() {
    this.onEmailChange(this.instructorEmail); // only re-enable the button is something acutally was typed.
  }

  deleteInstructor() {
    this.instructor.emailAddress = this.instructorEmail;
    this.instructorService.deleteInstructor(this.instructor);
    this.resetInstructor();
    this.validEmail = false;
  }
}
