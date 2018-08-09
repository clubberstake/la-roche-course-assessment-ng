import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseAssessmentWorksheetComponent } from './course-assessment-worksheet/course-assessment-worksheet.component';
import { IndividualLearningRecordComponent } from './individual-learning-record/individual-learning-record.component';
import { SiteAdminComponent } from './site-admin/site-admin.component';
import { CourseArchiveComponent } from './course-archive/course-archive.component';

const routes: Routes = [
  { path: '', redirectTo: '/courseAssessmentWorksheet', pathMatch: 'full' },
  { path: 'courseAssessmentWorksheet', component: CourseAssessmentWorksheetComponent },
  { path: 'individualLearningRecord', component: IndividualLearningRecordComponent },
  { path: 'siteAdmin', component: SiteAdminComponent },
  { path: 'courseArchive', component: CourseArchiveComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
