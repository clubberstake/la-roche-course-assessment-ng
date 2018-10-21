import { Component, OnInit } from '@angular/core';
import { CourseInformation } from 'src/app/course-assessment-worksheet/classes/course-information';
import { CourseInformationService } from 'src/app/services/course-information.service';
import { Instructor } from '../../classes/instructor';
import { InstructorService } from 'src/app/services/instructor.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-information-admin',
  templateUrl: './course-information-admin.component.html',
  styleUrls: ['./course-information-admin.component.css']
})
export class CourseInformationAdminComponent implements OnInit {

  courseInformation: CourseInformation;
  selectedInstructor: Instructor;
  validCourseSection: boolean;
  existingCourseSection: boolean;
  courseSection: string;
  courseSectionLoaded: boolean;
  instructors: Array<Instructor>;
  instructorForm: FormGroup;
  semesters: Array<String>;
  years: Array<String>;
  yearForm: FormGroup;
  semesterForm: FormGroup;
  selectedYear: any;
  selectedSemester: any;

  constructor(private courseInformationService: CourseInformationService, private instructorService: InstructorService,
    private fb: FormBuilder) {
    this.resetCourseSection();
    this.instructors = new Array<Instructor>();
    this.semesters = new Array<String>();
    this.years = new Array<String>();
  }

  private resetCourseSection() {
    this.courseInformation = new CourseInformation(0, '', null, '', '', '', null);
    this.existingCourseSection = true;
    this.courseSectionLoaded = false;
  }

  ngOnInit() {
    this.loadInstructorList();
    this.loadSemesters();
    this.instructorForm = this.fb.group({
      instructorControl: this.instructors[0]
    });
    this.yearForm = this.fb.group({
      yearControl: this.years[0]
    });
    this.semesterForm = this.fb.group({
      semesterControl: this.semesters[0]
    });
  }

  private loadSemesters() {
    this.semesters = ['Fall', 'Spring', 'Summer'];
    var currentYear = (new Date()).getFullYear();
    this.years.push(currentYear.toString());
    this.years.push((currentYear + 1).toString());
    this.years.push((currentYear + 2).toString());
  }

  private loadInstructorList() {
    this.instructorService.getInstructorList().subscribe((instructor: Instructor[]) => {
      this.instructors = instructor.sort((a: Instructor, b: Instructor) => {
        if (a.name < b.name) {
          return -1;
        }
        else if (a.name > b.name) {
          return 1;
        }
        else {
          return 0;
        }
      });
    });
  }

  onCourseSectionChange(newValue: string) {
    this.resetCourseSection();
    if (newValue && newValue.length) {
      this.validCourseSection = true;
    } else {
      this.validCourseSection = false;
    }
  }

  loadCourseInformation() {
    this.courseInformation.courseNumberSection = this.courseSection;
    this.courseInformation.semester = this.selectedSemester;
    this.courseInformation.year = this.selectedYear;
    this.courseInformationService.getCourseInformation(this.courseInformation.courseNumberSection, this.courseInformation.semester,
      this.courseInformation.year).subscribe((courseInformation: CourseInformation) => {
        console.log(courseInformation);
        if (courseInformation) {
          this.resetCourseSection();
          this.courseInformation = courseInformation;
          this.courseSectionLoaded = true;
        }
        else {
          this.resetCourseSection();
          this.existingCourseSection = false;
        }
      });
  }

  saveCourseInformation() {
    this.courseInformation.courseNumberSection = this.courseSection;
    this.courseInformation.instructor = this.selectedInstructor;
    this.courseInformation.semester = this.selectedSemester;
    this.courseInformation.year = this.selectedYear;
    this.courseInformationService.saveCourseInformation(this.courseInformation);
    this.validCourseSection = false;
  }

  onNameChange() {
    if (this.validCourseSection){
      this.existingCourseSection = false;
    }
  }

  deleteCourseInformation() {
    this.courseInformation.courseNumberSection = this.courseSection;
    this.courseInformationService.deleteCourseInformation(this.courseInformation);
    this.resetCourseSection();
    this.validCourseSection = false;
  }

  setInstructor(value: any) {
    this.selectedInstructor = this.instructors.find((item) => item.id == value);
  }

  setYear(value: any) {
    this.selectedYear = value;
  }

  setSemester(value: any) {
    this.selectedSemester = value;
  }
}