import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { IndividualLearningRecordComponent } from './individual-learning-record/individual-learning-record.component';
import { CourseAssessmentWorksheetComponent } from './course-assessment-worksheet/course-assessment-worksheet.component';
import { AppRoutingModule } from './/app-routing.module';
import { SiteAdminComponent } from './site-admin/site-admin.component';
import { CourseArchiveComponent } from './course-archive/course-archive.component';
import { MidSemesterModalComponent } from './course-assessment-worksheet/modals/mid-semester-modal/mid-semester-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EndSemesterModalComponent } from './course-assessment-worksheet/modals/end-semester-modal/end-semester-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    IndividualLearningRecordComponent,
    CourseAssessmentWorksheetComponent,
    SiteAdminComponent,
    CourseArchiveComponent,
    MidSemesterModalComponent,
    EndSemesterModalComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, HttpModule, FormsModule, AppRoutingModule, NgbModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
