import { Component, OnInit } from '@angular/core';
import { Student } from '../site-admin/classes/student';
import { StudentService } from '../services/student.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FileStorage } from '../course-assessment-worksheet/classes/file-storage';
import { StudentSemesterReviewsByCourse } from './classes/student-semester-reviews-by-course';
import swal from 'sweetalert';

@Component({
  selector: 'app-individual-learning-record',
  templateUrl: './individual-learning-record.component.html',
  styleUrls: ['./individual-learning-record.component.css']
})
export class IndividualLearningRecordComponent implements OnInit {

  student: Student;
  validEmail: boolean;
  studentEmail: String;
  studentLoaded: boolean;
  semesters: Array<String>;
  years: Array<String>;
  yearForm: FormGroup;
  semesterForm: FormGroup;
  selectedYear: any;
  selectedSemester: any;
  housingStatus: Array<String>;
  housingForm: FormGroup;
  selectedHousingStatus: String;
  semesterReviewsbyCourse: Array<StudentSemesterReviewsByCourse>;

  headElements = ['Course/Sec #', 'Course Title', 'Semester & Year', 'Instructor', 'Semester Reviews'];

  constructor(private studentService: StudentService, private fb: FormBuilder) {
    this.resetStudent();
    this.semesters = new Array<String>();
    this.years = new Array<String>();
    this.housingStatus = new Array<String>();
    this.semesterReviewsbyCourse = new Array<StudentSemesterReviewsByCourse>();
  }

  private resetStudent() {
    this.student = new Student(0, '', new FileStorage(0, '', '', ''), '', '', '', '', '', '', '', '', '', '', '');
    this.studentLoaded = false;
  }

  ngOnInit() {
    this.loadSemesters();
    this.yearForm = this.fb.group({
      yearControl: this.years[0]
    });
    this.semesterForm = this.fb.group({
      semesterControl: this.semesters[0]
    });
    this.housingForm = this.fb.group({
      housingControl: this.housingStatus[0]
    });
  }

  private loadSemesters() {
    this.semesters = ['Fall', 'Spring', 'Summer'];
    var currentYear = (new Date()).getFullYear();
    this.years.push(currentYear.toString());
    this.years.push((currentYear + 1).toString());
    this.years.push((currentYear + 2).toString());
    this.years.push((currentYear + 3).toString());
    this.housingStatus.push("Resident");
    this.housingStatus.push("Commuter");
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
      if (student) {
        this.resetStudent();
        this.student = student;
        this.studentLoaded = true;

        if (this.student.studentYear) {
          var i = 0;
          for (i = 0; i < this.years.length; i++) {
            if (this.years[i] == this.student.studentYear) {
              this.selectedYear = this.student.studentYear;
              break;
            }
          }
          this.yearForm = this.fb.group({
            yearControl: this.years[i]
          });
        }

        if (this.student.studentSemester) {
          var i = 0;
          for (i = 0; i < this.years.length; i++) {
            if (this.semesters[i] == this.student.studentSemester) {
              this.selectedSemester = this.student.studentSemester;
              break;
            }
          }
          this.semesterForm = this.fb.group({
            semesterControl: this.semesters[i]
          });
        }

        if (this.student.studentHousingStatus) {
          var i = 0;
          for (i = 0; i < this.years.length; i++) {
            if (this.housingStatus[i] == this.student.studentHousingStatus) {
              this.selectedHousingStatus = this.student.studentHousingStatus;
              break;
            }
          }
          this.housingForm = this.fb.group({
            housingControl: this.housingStatus[i]
          });
        }
        this.studentService.getStudentSemesterReviews(this.student).subscribe((semsterReviewsbyCourse: Array<StudentSemesterReviewsByCourse>) => {
          this.semesterReviewsbyCourse = semsterReviewsbyCourse;
        });
      }
      else {
        this.resetStudent();
      }
    });
  }

  saveStudent() {
    this.student.emailAddress = this.studentEmail;
    this.student.studentSemester = this.selectedSemester;
    this.student.studentYear = this.selectedYear;
    this.student.studentHousingStatus = this.selectedHousingStatus;
    console.log(this.student);
    this.studentService.saveStudent(this.student);
    this.validEmail = false;

    swal("Student Save succesful!", "Press OK to proceed", "success");
  }

  setYear(value: any) {
    this.selectedYear = value;
  }

  setSemester(value: any) {
    this.selectedSemester = value;
  }

  setHousing(value: any) {
    this.selectedHousingStatus = value;
  }

  onFileSelected(event) {

    var selectedPhoto = <File>event.target.files[0];

   

    var fileReader = new FileReader();
    var fileStorage = new FileStorage(0, "", "", "");
    if (fileReader && selectedPhoto) {
      fileStorage.fileName = selectedPhoto.name;
      fileStorage.fileType = selectedPhoto.type;
      fileReader.onload = function () {
        fileStorage.fileContent = fileReader.result.toString();
      };

      fileReader.readAsDataURL(selectedPhoto);
      this.sleep(300).then(() => {
        console.log(fileReader);
        console.log(fileStorage);
        this.student.file = {
          id: (this.student && this.student.file && this.student.file.id) ? this.student.file.id : 0,
          fileContent: fileStorage.fileContent,
          fileName: fileStorage.fileName,
          fileType: fileStorage.fileType
        };
        console.log(this.student.file);
      });
    }
    else {
      this.student.file = new FileStorage(0, '', '', '');
    }
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
