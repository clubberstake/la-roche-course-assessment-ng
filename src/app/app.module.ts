import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

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
  ],
  imports: [
    BrowserModule, HttpClientModule, HttpModule, FormsModule, AppRoutingModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
