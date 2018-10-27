(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_assessment_worksheet_course_assessment_worksheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-assessment-worksheet/course-assessment-worksheet.component */ "./src/app/course-assessment-worksheet/course-assessment-worksheet.component.ts");
/* harmony import */ var _individual_learning_record_individual_learning_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./individual-learning-record/individual-learning-record.component */ "./src/app/individual-learning-record/individual-learning-record.component.ts");
/* harmony import */ var _site_admin_site_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./site-admin/site-admin.component */ "./src/app/site-admin/site-admin.component.ts");
/* harmony import */ var _course_archive_course_archive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-archive/course-archive.component */ "./src/app/course-archive/course-archive.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/courseAssessmentWorksheet', pathMatch: 'full' },
    { path: 'courseAssessmentWorksheet', component: _course_assessment_worksheet_course_assessment_worksheet_component__WEBPACK_IMPORTED_MODULE_3__["CourseAssessmentWorksheetComponent"] },
    { path: 'individualLearningRecord', component: _individual_learning_record_individual_learning_record_component__WEBPACK_IMPORTED_MODULE_4__["IndividualLearningRecordComponent"] },
    { path: 'siteAdmin', component: _site_admin_site_admin_component__WEBPACK_IMPORTED_MODULE_5__["SiteAdminComponent"] },
    { path: 'courseArchive', component: _course_archive_course_archive_component__WEBPACK_IMPORTED_MODULE_6__["CourseArchiveComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-main {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 95%;\r\n    background-color: #c0deed;\r\n    overflow-y: auto;\r\n}\r\n\r\n.logoDiv {\r\n    margin-bottom: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content:center; */\r\n}\r\n\r\n.headerTitle {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 30px;\r\n    /* margin-left: 15%;  */\r\n    flex-grow: 1;\r\n    text-align: center;\r\n}\r\n\r\n.larocheLogo {\r\n    position: absolute;\r\n    float: left;\r\n    height: 50px;\r\n    padding-bottom: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1tYWluIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBkZWVkO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmxvZ29EaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OmNlbnRlcjsgKi9cclxufVxyXG5cclxuLmhlYWRlclRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDE1JTsgICovXHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYXJvY2hlTG9nbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logoDiv\">\r\n  <div>\r\n    <img class=\"larocheLogo\" src=\"https://www.laroche.edu/img/logo.png\">\r\n  </div>\r\n  <div class=\"headerTitle\">Chemistry Department Student Learning System</div>\r\n</div>\r\n<div>\r\n  <app-layout>\r\n  </app-layout>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _individual_learning_record_individual_learning_record_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./individual-learning-record/individual-learning-record.component */ "./src/app/individual-learning-record/individual-learning-record.component.ts");
/* harmony import */ var _course_assessment_worksheet_course_assessment_worksheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course-assessment-worksheet/course-assessment-worksheet.component */ "./src/app/course-assessment-worksheet/course-assessment-worksheet.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _site_admin_site_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./site-admin/site-admin.component */ "./src/app/site-admin/site-admin.component.ts");
/* harmony import */ var _course_archive_course_archive_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./course-archive/course-archive.component */ "./src/app/course-archive/course-archive.component.ts");
/* harmony import */ var _course_assessment_worksheet_modals_mid_semester_modal_mid_semester_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./course-assessment-worksheet/modals/mid-semester-modal/mid-semester-modal.component */ "./src/app/course-assessment-worksheet/modals/mid-semester-modal/mid-semester-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _course_assessment_worksheet_modals_end_semester_modal_end_semester_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./course-assessment-worksheet/modals/end-semester-modal/end-semester-modal.component */ "./src/app/course-assessment-worksheet/modals/end-semester-modal/end-semester-modal.component.ts");
/* harmony import */ var _site_admin_components_student_admin_student_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./site-admin/components/student-admin/student-admin.component */ "./src/app/site-admin/components/student-admin/student-admin.component.ts");
/* harmony import */ var _site_admin_components_instructor_admin_instructor_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./site-admin/components/instructor-admin/instructor-admin.component */ "./src/app/site-admin/components/instructor-admin/instructor-admin.component.ts");
/* harmony import */ var _site_admin_components_course_information_admin_course_information_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./site-admin/components/course-information-admin/course-information-admin.component */ "./src/app/site-admin/components/course-information-admin/course-information-admin.component.ts");
/* harmony import */ var _site_admin_components_archive_course_archive_course_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./site-admin/components/archive-course/archive-course.component */ "./src/app/site-admin/components/archive-course/archive-course.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _individual_learning_record_individual_learning_record_component__WEBPACK_IMPORTED_MODULE_9__["IndividualLearningRecordComponent"],
                _course_assessment_worksheet_course_assessment_worksheet_component__WEBPACK_IMPORTED_MODULE_10__["CourseAssessmentWorksheetComponent"],
                _site_admin_site_admin_component__WEBPACK_IMPORTED_MODULE_12__["SiteAdminComponent"],
                _course_archive_course_archive_component__WEBPACK_IMPORTED_MODULE_13__["CourseArchiveComponent"],
                _course_assessment_worksheet_modals_mid_semester_modal_mid_semester_modal_component__WEBPACK_IMPORTED_MODULE_14__["MidSemesterModalComponent"],
                _course_assessment_worksheet_modals_end_semester_modal_end_semester_modal_component__WEBPACK_IMPORTED_MODULE_16__["EndSemesterModalComponent"],
                _site_admin_components_student_admin_student_admin_component__WEBPACK_IMPORTED_MODULE_17__["StudentAdminComponent"],
                _site_admin_components_instructor_admin_instructor_admin_component__WEBPACK_IMPORTED_MODULE_18__["InstructorAdminComponent"],
                _site_admin_components_course_information_admin_course_information_admin_component__WEBPACK_IMPORTED_MODULE_19__["CourseInformationAdminComponent"],
                _site_admin_components_archive_course_archive_course_component__WEBPACK_IMPORTED_MODULE_20__["ArchiveCourseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/course-archive/course-archive.component.css":
/*!*************************************************************!*\
  !*** ./src/app/course-archive/course-archive.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".courseAssessmentWorksheetContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .courseInfoAndChangesFlexboxRootContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .itemContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 3px solid #000;\r\n    margin-left: 5px;\r\n    margin-right: 10px;\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n  }\r\n  \r\n  .semesterReviewTitle {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding-bottom: 5px;\r\n  }\r\n  \r\n  .semesterReviewTitleText {\r\n    font-weight: bolder;\r\n    min-width: 500px;\r\n  }\r\n  \r\n  .paddedLabel {\r\n    width: 155px;\r\n  }\r\n  \r\n  .input {\r\n    width: 725px;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .inputCheckmark {\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n    margin-left: 50px;\r\n  }\r\n  \r\n  .title {\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  .gradesContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .gradeContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 3px solid #000;\r\n    margin-left: 5px;\r\n    margin-right: 10px;\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .gradeLetter {\r\n    border-bottom: 3px solid #000;\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    padding: 10px 50px 10px 50px;\r\n    background-color: #831917;\r\n    color: #eee;\r\n  }\r\n  \r\n  .gradeCount {\r\n    padding: 5px 50px 10px 50px;\r\n  }\r\n  \r\n  .semesterReviewsContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-top: 3px solid #000;\r\n  }\r\n  \r\n  .semesterReviewContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    border-bottom: 3px solid #000;\r\n    border-left: 3px solid #000;\r\n    border-right: 3px solid #000;\r\n  }\r\n  \r\n  .semesterReviewHeader {\r\n    font-weight: bold;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    background-color: #831917;\r\n    color: #eee;\r\n    width: 85px;\r\n    border-right: 3px solid #000;\r\n  }\r\n  \r\n  .midSemesterReviewHeaderTextArea {\r\n    font-weight: bold;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    background-color: #831917;\r\n    color: #eee;\r\n    width: 280px;\r\n    border-right: 3px solid #000;\r\n  }\r\n  \r\n  .midSemesterReviewHeaderTextAreaNoBorder {\r\n    font-weight: bold;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    background-color: #831917;\r\n    color: #eee;\r\n    width: 280px;\r\n  }\r\n  \r\n  .endSemesterReviewHeader {\r\n    font-weight: bold;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    background-color: #831917;\r\n    color: #eee;\r\n    width: 85px;\r\n    border-right: 3px solid #000;\r\n  }\r\n  \r\n  .endSemesterReviewHeaderTextArea {\r\n    font-weight: bold;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    background-color: #831917;\r\n    color: #eee;\r\n    width: 229px;\r\n    border-right: 3px solid #000;\r\n  }\r\n  \r\n  .endSemesterReviewHeaderTextAreaNoBorder {\r\n    font-weight: bold;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    background-color: #831917;\r\n    color: #eee;\r\n    width: 229px;\r\n  }\r\n  \r\n  .midSemesterReviewTextArea {\r\n    width: 280px;\r\n    overflow-wrap: break-word;\r\n    border-right: 3px solid #000;\r\n  }\r\n  \r\n  .midSemesterReviewTextAreaNoBorder {\r\n    width: 280px;\r\n    overflow-wrap: break-word;\r\n  }\r\n  \r\n  .endSemesterReviewTextArea {\r\n    width: 229px;\r\n    overflow-wrap: break-word;\r\n    border-right: 3px solid #000;\r\n  }\r\n  \r\n  .endSemesterReviewTextAreaNoBorder {\r\n    width: 229px;\r\n    overflow-wrap: break-word;\r\n  }\r\n  \r\n  .semesterReviewSelector {\r\n    width: 85px;\r\n    overflow-wrap: break-word;\r\n    border-right: 3px solid #000;\r\n  }\r\n  \r\n  .marginBottom {\r\n    margin-bottom: 50px;\r\n  }\r\n  \r\n  .saveButton{\r\n    margin: 10px;\r\n  }\r\n  \r\n  .spanSpacer {\r\n    margin-right: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLWFyY2hpdmUvY291cnNlLWFyY2hpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7R0FDeEI7O0VBRUQ7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUNBQXFDO0dBQ3RDOztFQUVEO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0Usb0JBQW9CO0lBQ3BCLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLGFBQWE7R0FDZDs7RUFFRDtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0dBQ3BCOztFQUVEO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0dBQ25COztFQUVEO0lBQ0Usb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7R0FDcEI7O0VBRUQ7SUFDRSw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLFlBQVk7R0FDYjs7RUFFRDtJQUNFLDRCQUE0QjtHQUM3Qjs7RUFFRDtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsMkJBQTJCO0dBQzVCOztFQUVEO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtHQUM5Qjs7RUFFRDtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtHQUM5Qjs7RUFFRDtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtHQUM5Qjs7RUFFRDtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtHQUNkOztFQUVEO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0dBQzlCOztFQUVEO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0dBQzlCOztFQUVEO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixhQUFhO0dBQ2Q7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDZCQUE2QjtHQUM5Qjs7RUFFRDtJQUNFLGFBQWE7SUFDYiwwQkFBMEI7R0FDM0I7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDZCQUE2QjtHQUM5Qjs7RUFFRDtJQUNFLGFBQWE7SUFDYiwwQkFBMEI7R0FDM0I7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLDZCQUE2QjtHQUM5Qjs7RUFFRDtJQUNFLG9CQUFvQjtHQUNyQjs7RUFFRDtJQUNFLGFBQWE7R0FDZDs7RUFFRDtJQUNFLG1CQUFtQjtHQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1hcmNoaXZlL2NvdXJzZS1hcmNoaXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cnNlQXNzZXNzbWVudFdvcmtzaGVldENvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmNvdXJzZUluZm9BbmRDaGFuZ2VzRmxleGJveFJvb3RDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuc2VtZXN0ZXJSZXZpZXdUaXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZW1lc3RlclJldmlld1RpdGxlVGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRlZExhYmVsIHtcclxuICAgIHdpZHRoOiAxNTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0IHtcclxuICAgIHdpZHRoOiA3MjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dENoZWNrbWFyayB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmFkZXNDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmFkZUNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmdyYWRlTGV0dGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4IDEwcHggNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzE5MTc7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICB9XHJcbiAgXHJcbiAgLmdyYWRlQ291bnQge1xyXG4gICAgcGFkZGluZzogNXB4IDUwcHggMTBweCA1MHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VtZXN0ZXJSZXZpZXdzQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZW1lc3RlclJldmlld0NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLnNlbWVzdGVyUmV2aWV3SGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzE5MTc7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLm1pZFNlbWVzdGVyUmV2aWV3SGVhZGVyVGV4dEFyZWEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTkxNztcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLm1pZFNlbWVzdGVyUmV2aWV3SGVhZGVyVGV4dEFyZWFOb0JvcmRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODMxOTE3O1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbmRTZW1lc3RlclJldmlld0hlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODMxOTE3O1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbmRTZW1lc3RlclJldmlld0hlYWRlclRleHRBcmVhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzE5MTc7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIHdpZHRoOiAyMjlweDtcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbmRTZW1lc3RlclJldmlld0hlYWRlclRleHRBcmVhTm9Cb3JkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTkxNztcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgd2lkdGg6IDIyOXB4O1xyXG4gIH1cclxuICBcclxuICAubWlkU2VtZXN0ZXJSZXZpZXdUZXh0QXJlYSB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLm1pZFNlbWVzdGVyUmV2aWV3VGV4dEFyZWFOb0JvcmRlciB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICBcclxuICAuZW5kU2VtZXN0ZXJSZXZpZXdUZXh0QXJlYSB7XHJcbiAgICB3aWR0aDogMjI5cHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLmVuZFNlbWVzdGVyUmV2aWV3VGV4dEFyZWFOb0JvcmRlciB7XHJcbiAgICB3aWR0aDogMjI5cHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICBcclxuICAuc2VtZXN0ZXJSZXZpZXdTZWxlY3RvciB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMDAwO1xyXG4gIH1cclxuICBcclxuICAubWFyZ2luQm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zYXZlQnV0dG9ue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc3BhblNwYWNlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/course-archive/course-archive.component.html":
/*!**************************************************************!*\
  !*** ./src/app/course-archive/course-archive.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"courseAssessmentWorksheetContainer\">\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <span class=\"title\">Course Information</span>\n      <div>\n        <label class=\"paddedLabel\">Course Section/#:</label>\n        <select [(ngModel)]=\"selectedCourse\" (change)=\"setCourse()\">\n          <option [ngValue]=\"course\" *ngFor=\"let course of courseList\"> {{course.courseNumberSection}} ->\n            {{course.semester}}, {{course.year}}</option>\n        </select>\n      </div>\n      <div>\n        <label class=\"paddedLabel\">Semester & Year:</label>\n        <span>{{courseAssessment.courseInformation.semester}} {{courseAssessment.courseInformation.year}} </span>\n      </div>\n      <div>\n        <label class=\"paddedLabel\">Course Title:</label>\n        <span>{{courseAssessment.courseInformation.courseTitle}}</span>\n      </div>\n      <div>\n        <label class=\"paddedLabel\">Instructor:</label>\n        <span>{{courseAssessment.courseInformation.instructor.name}}</span>\n      </div>\n      <div class=\"saveButton\">\n        <button class=\"btn btn-lg btn-light\" (click)=\"downloadSyllabus()\">Download Syllabus</button>\n        <span class=\"spanSpacer\"></span>\n        <button class=\"btn btn-lg btn-dark\" (click)=\"loadCourse()\">Load Course</button>\n      </div>\n    </div>\n    <div class=\"itemContainer\">\n      <span class=\"title\">SLO's Addressed in this semester</span>\n      <div>\n        <label class=\"paddedLabel\">#1 Knowledge Base</label>\n        <input class=\"inputCheckmark\" #knowledgeBaseCheckBox id=\"knowledgeBaseCheckBox\" type=\"checkbox\" (change)=\"knowledgeBaseChecked(knowledgeBaseCheckBox.checked)\"\n          [(ngModel)]=\"courseAssessment.courseSLOs.slo1\" ng-true-value=\"'true'\" ng-false-value=\"'false'\" disabled=\"disabled\">\n      </div>\n      <div>\n        <label class=\"paddedLabel\">#2 Lab Skills</label>\n        <input class=\"inputCheckmark\" #labSkillsCheckBox id=\"labSkillsCheckBox\" type=\"checkbox\" (change)=\"labSkillsChecked(labSkillsCheckBox.checked)\"\n          [(ngModel)]=\"courseAssessment.courseSLOs.slo2\" ng-true-value=\"'true'\" ng-false-value=\"'false'\" disabled=\"disabled\">\n      </div>\n      <div>\n        <label class=\"paddedLabel\">#3 Practice</label>\n        <input class=\"inputCheckmark\" #practiceCheckBox id=\"practiceCheckBox\" type=\"checkbox\" (change)=\"practiceChecked(practiceCheckBox.checked)\"\n          [(ngModel)]=\"courseAssessment.courseSLOs.slo3\" ng-true-value=\"'true'\" ng-false-value=\"'false'\" disabled=\"disabled\">\n      </div>\n      <div>\n        <label class=\"paddedLabel\">#4 Societal Connects</label>\n        <input class=\"inputCheckmark\" #societalConnectsCheckBox id=\"societalConnectsCheckBox\" type=\"checkbox\" (change)=\"societalConnectsChecked(societalConnectsCheckBox.checked)\"\n          [(ngModel)]=\"courseAssessment.courseSLOs.slo4\" ng-true-value=\"'true'\" ng-false-value=\"'false'\" disabled=\"disabled\">\n      </div>\n      <div>\n        <label class=\"paddedLabel\">#5 Capstone</label>\n        <input class=\"inputCheckmark\" #capstoneCheckBox id=\"capstoneCheckBox\" type=\"checkbox\" (change)=\"capstoneChecked(capstoneCheckBox.checked)\"\n          [(ngModel)]=\"courseAssessment.courseSLOs.slo5\" ng-true-value=\"'true'\" ng-false-value=\"'false'\" disabled=\"disabled\">\n      </div>\n    </div>\n  </div>\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <span class=\"title\">I. Course Changes Implemented this Semester</span>\n      <div>\n        <span>New SLO emphasis added:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs1Info.newSLOs\" readonly></textarea>\n      </div>\n      <div>\n        <span>Upgrades to course content:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs1Info.upgrades\" readonly></textarea>\n      </div>\n      <div>\n        <span>Pedagogy enhancements:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs1Info.enhancements\" readonly></textarea>\n      </div>\n      <div>\n        <span>Modifications to student assessment measures:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs1Info.modifications\" readonly></textarea>\n      </div>\n      <div>\n        <span>Other course changes implemented this semester:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs1Info.other\" readonly></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <span class=\"title\">II. Student Performance Findings</span>\n      <div>\n        <span>Chemistry concept carry-over from previous semesters, as demonstrated on pre-course <br> assessment (if\n          applicable):</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs2Info.chemConcept\" readonly></textarea>\n      </div>\n      <div>\n        <span>Were objectives and content describved in the Syllabuss completely covered this semester?</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs2Info.objectivesContent\" readonly></textarea>\n      </div>\n      <div>\n        <span>Overall Student Performance (calculates as grades are entered in section V. below)</span><br>\n        <div class=\"gradesContainer\">\n          <div class=\"gradeContainer\">\n            <div class=\"gradeLetter\">A</div>\n            <div class=\"gradeCount\">{{courseAssessment.cafs2Info.percentA}}</div>\n          </div>\n          <div class=\"gradeContainer\">\n            <div class=\"gradeLetter\">B</div>\n            <div class=\"gradeCount\">{{courseAssessment.cafs2Info.percentB}}</div>\n          </div>\n          <div class=\"gradeContainer\">\n            <div class=\"gradeLetter\">C</div>\n            <div class=\"gradeCount\">{{courseAssessment.cafs2Info.percentC}}</div>\n          </div>\n          <div class=\"gradeContainer\">\n            <div class=\"gradeLetter\">D</div>\n            <div class=\"gradeCount\">{{courseAssessment.cafs2Info.percentD}}</div>\n          </div>\n          <div class=\"gradeContainer\">\n            <div class=\"gradeLetter\">F</div>\n            <div class=\"gradeCount\">{{courseAssessment.cafs2Info.percentF}}</div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <span>General comments about student performance:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs2Info.generalComments\" readonly></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <span class=\"title\">III. Recommended changes to Implement for next offering</span>\n      <div>\n        <span>Course prerequisites:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.coursePreReq\" readonly></textarea>\n      </div>\n      <div>\n        <span>Textbooks/other required materials:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.textbooks\" readonly></textarea>\n      </div>\n      <div>\n        <span>Student assessment measures:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.studentAsse\" readonly></textarea>\n      </div>\n      <div>\n        <span>Pedagogy:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.pedagogy\" readonly></textarea>\n      </div>\n      <div>\n        <span>Faculty/guest instructors:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.faculty\" readonly></textarea>\n      </div>\n      <div>\n        <span>Minor and capital equipment needs:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.minorCapitalEq\" readonly></textarea>\n      </div>\n      <div>\n        <span>Other recommendations:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.other\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <div class=\"semesterReviewTitle\">\n        <span class=\"semesterReviewTitleText\">IV. Mid-Semester Individual Performance and evaluation</span>\n      </div>\n      <div *ngIf=\"hasMidSemesterReviews()\" class=\"semesterReviewsContainer\">\n        <div class=\"semesterReviewContainer\">\n          <div class=\"semesterReviewHeader\">ID#</div>\n          <div class=\"semesterReviewHeader\">Learning Issues</div>\n          <div class=\"midSemesterReviewHeaderTextArea\">Instructor Interaction</div>\n          <div class=\"midSemesterReviewHeaderTextAreaNoBorder\">Instructor Evaluation</div>\n        </div>\n        <div class=\"semesterReviewContainer\" *ngFor=\"let review of courseAssessment.midSemesterReviews\">\n          <div class=\"semesterReviewSelector\">{{review.student.studentName}}</div>\n          <div class=\"semesterReviewSelector\">{{calculateSemesterLearningIssues(review.semesterLearningIssues)}}</div>\n          <div class=\"midSemesterReviewTextArea\">{{review.semesterInstructorInteractions}}</div>\n          <div class=\"midSemesterReviewTextAreaNoBorder\">{{review.semesterInstructorNotes}}</div>\n        </div>\n      </div>\n      <div *ngIf=\"!hasMidSemesterReviews()\">\n        <span>No Mid-Semester Reviews were entered button above</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <div class=\"semesterReviewTitle\">\n        <span class=\"semesterReviewTitleText\">V. Summative Individual Performance and evaluation</span>\n      </div>\n      <div *ngIf=\"hasEndSemesterReviews()\" class=\"semesterReviewsContainer\">\n        <div class=\"semesterReviewContainer\">\n          <div class=\"endSemesterReviewHeader\">ID#</div>\n          <div class=\"endSemesterReviewHeader\">Grade</div>\n          <div class=\"endSemesterReviewHeader\">Learning Issues</div>\n          <div class=\"endSemesterReviewHeaderTextArea\">Instructor Interaction</div>\n          <div class=\"endSemesterReviewHeaderTextAreaNoBorder\">Instructor Evaluation</div>\n        </div>\n        <div class=\"semesterReviewContainer\" *ngFor=\"let review of courseAssessment.endSemesterReviews\">\n          <div class=\"semesterReviewSelector\">{{review.student.studentName}}</div>\n          <div class=\"semesterReviewSelector\">{{review.grade}}</div>\n          <div class=\"semesterReviewSelector\">{{calculateSemesterLearningIssues(review.semesterLearningIssues)}}</div>\n          <div class=\"endSemesterReviewTextArea\">{{review.semesterInstructorInteractions}}</div>\n          <div class=\"endSemesterReviewTextAreaNoBorder\">{{review.semesterInstructorNotes}}</div>\n        </div>\n      </div>\n      <div *ngIf=\"!hasEndSemesterReviews()\">\n        <span>No End-Semester Reviews were entered button above</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"marginBottom\"></div>\n  <!--spacer for footer -->\n</div>"

/***/ }),

/***/ "./src/app/course-archive/course-archive.component.ts":
/*!************************************************************!*\
  !*** ./src/app/course-archive/course-archive.component.ts ***!
  \************************************************************/
/*! exports provided: CourseArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseArchiveComponent", function() { return CourseArchiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _course_assessment_worksheet_classes_course_assessment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../course-assessment-worksheet/classes/course-assessment */ "./src/app/course-assessment-worksheet/classes/course-assessment.ts");
/* harmony import */ var _course_assessment_worksheet_classes_course_information__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course-assessment-worksheet/classes/course-information */ "./src/app/course-assessment-worksheet/classes/course-information.ts");
/* harmony import */ var _course_assessment_worksheet_service_course_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course-assessment-worksheet/service/course-service.service */ "./src/app/course-assessment-worksheet/service/course-service.service.ts");
/* harmony import */ var _course_assessment_worksheet_classes_cafs1_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course-assessment-worksheet/classes/cafs1-info */ "./src/app/course-assessment-worksheet/classes/cafs1-info.ts");
/* harmony import */ var _course_assessment_worksheet_classes_course_SLOs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../course-assessment-worksheet/classes/course-SLOs */ "./src/app/course-assessment-worksheet/classes/course-SLOs.ts");
/* harmony import */ var _site_admin_classes_instructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../site-admin/classes/instructor */ "./src/app/site-admin/classes/instructor.ts");
/* harmony import */ var _course_assessment_worksheet_classes_cafs2_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../course-assessment-worksheet/classes/cafs2-info */ "./src/app/course-assessment-worksheet/classes/cafs2-info.ts");
/* harmony import */ var _course_assessment_worksheet_classes_cafs3_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../course-assessment-worksheet/classes/cafs3-info */ "./src/app/course-assessment-worksheet/classes/cafs3-info.ts");
/* harmony import */ var _course_assessment_worksheet_classes_cafs6_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../course-assessment-worksheet/classes/cafs6-info */ "./src/app/course-assessment-worksheet/classes/cafs6-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CourseArchiveComponent = /** @class */ (function () {
    function CourseArchiveComponent(courseService) {
        this.courseService = courseService;
        this.courseList = new Array();
    }
    CourseArchiveComponent.prototype.ngOnInit = function () {
        this.createEmptyCourse();
        this.loadCourseInformationList();
    };
    CourseArchiveComponent.prototype.loadCourseInformationList = function () {
        var _this = this;
        this.courseList = new Array();
        this.courseService.getCourseList().subscribe(function (courses) {
            for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
                var course = courses_1[_i];
                if (course.archived) {
                    _this.courseList.push(course);
                }
            }
            _this.courseList = _this.courseList.sort(function (a, b) {
                if (a.id < b.id) {
                    return -1;
                }
                else if (a.id > b.id) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.selectedCourse = _this.courseList[0];
            _this.setCourse();
        });
    };
    CourseArchiveComponent.prototype.knowledgeBaseChecked = function (value) {
        this.courseAssessment.courseSLOs.slo1 = value;
    };
    CourseArchiveComponent.prototype.labSkillsChecked = function (value) {
        this.courseAssessment.courseSLOs.slo2 = value;
    };
    CourseArchiveComponent.prototype.practiceChecked = function (value) {
        this.courseAssessment.courseSLOs.slo3 = value;
    };
    CourseArchiveComponent.prototype.societalConnectsChecked = function (value) {
        this.courseAssessment.courseSLOs.slo4 = value;
    };
    CourseArchiveComponent.prototype.capstoneChecked = function (value) {
        this.courseAssessment.courseSLOs.slo5 = value;
    };
    CourseArchiveComponent.prototype.calculateGrades = function () {
        this.resetGrades();
        for (var _i = 0, _a = Array.from(this.courseAssessment.endSemesterReviews.values()); _i < _a.length; _i++) {
            var review = _a[_i];
            review.grade == 'A' ? this.courseAssessment.cafs2Info.percentA += 1 : 0;
            review.grade == 'B' ? this.courseAssessment.cafs2Info.percentB += 1 : 0;
            review.grade == 'C' ? this.courseAssessment.cafs2Info.percentC += 1 : 0;
            review.grade == 'D' ? this.courseAssessment.cafs2Info.percentD += 1 : 0;
            review.grade == 'F' ? this.courseAssessment.cafs2Info.percentF += 1 : 0;
        }
    };
    CourseArchiveComponent.prototype.resetGrades = function () {
        this.courseAssessment.cafs2Info.percentA = 0;
        this.courseAssessment.cafs2Info.percentB = 0;
        this.courseAssessment.cafs2Info.percentC = 0;
        this.courseAssessment.cafs2Info.percentD = 0;
        this.courseAssessment.cafs2Info.percentF = 0;
    };
    CourseArchiveComponent.prototype.calculateSemesterLearningIssues = function (issues) {
        var learningIssues = '';
        learningIssues = issues.coursePace ? learningIssues.concat('Course pace, ') : learningIssues.concat('');
        learningIssues = issues.poorBackground ? learningIssues.concat('Poor background, ') : learningIssues.concat('');
        learningIssues = issues.lackOfMindset ? learningIssues.concat('Mindset, ') : learningIssues.concat('');
        learningIssues = issues.lackOfCuriosity ? learningIssues.concat('Interest or Curiousity, ') : learningIssues.concat('');
        learningIssues = issues.lackOfEffortOrFocus ? learningIssues.concat('Effortor Focus, ') : learningIssues.concat('');
        learningIssues = issues.poorTimeManagement ? learningIssues.concat('Time Manaagement, ') : learningIssues.concat('');
        learningIssues = issues.healthIssues ? learningIssues.concat('Health issues, ') : learningIssues.concat('');
        learningIssues = issues.complacence ? learningIssues.concat('Complacence, ') : learningIssues.concat('');
        learningIssues = issues.employmentHours ? learningIssues.concat('Employment hours, ') : learningIssues.concat('');
        learningIssues = issues.other ? learningIssues.concat('Other ') : learningIssues.concat('');
        return learningIssues.trim().replace(/,\s*$/, "");
    };
    CourseArchiveComponent.prototype.hasMidSemesterReviews = function () {
        if (this.courseAssessment.midSemesterReviews) {
            return this.courseAssessment.midSemesterReviews.length > 0 ? true : false;
        }
        return false;
    };
    CourseArchiveComponent.prototype.hasEndSemesterReviews = function () {
        if (this.courseAssessment.endSemesterReviews) {
            return this.courseAssessment.endSemesterReviews.length > 0 ? true : false;
        }
        return false;
    };
    CourseArchiveComponent.prototype.setCourse = function () {
        this.createEmptyCourse();
        this.courseAssessment.courseInformation = this.selectedCourse;
    };
    CourseArchiveComponent.prototype.loadCourse = function () {
        var _this = this;
        this.courseService.loadCourse(this.selectedCourse.id).subscribe(function (courseAssessment) {
            if (courseAssessment) {
                _this.courseAssessment = courseAssessment;
                console.log(_this.courseAssessment);
            }
            else {
                _this.createEmptyCourse();
                _this.courseAssessment.courseInformation = _this.selectedCourse;
            }
        });
    };
    CourseArchiveComponent.prototype.createEmptyCourse = function () {
        var courseInformation = new _course_assessment_worksheet_classes_course_information__WEBPACK_IMPORTED_MODULE_2__["CourseInformation"](0, "", null, "", "", "", false, new _site_admin_classes_instructor__WEBPACK_IMPORTED_MODULE_6__["Instructor"](0, '', ''));
        var courseSLOs = new _course_assessment_worksheet_classes_course_SLOs__WEBPACK_IMPORTED_MODULE_5__["CourseSLOs"](0, false, false, false, false, false);
        var cafs1Info = new _course_assessment_worksheet_classes_cafs1_info__WEBPACK_IMPORTED_MODULE_4__["Cafs1Info"](0, "", "", "", "", "");
        var cafs2Info = new _course_assessment_worksheet_classes_cafs2_info__WEBPACK_IMPORTED_MODULE_7__["Cafs2Info"](0, "", "", "", 0, 0, 0, 0, 0);
        var cafs3Info = new _course_assessment_worksheet_classes_cafs3_info__WEBPACK_IMPORTED_MODULE_8__["Cafs3Info"](0, "", "", "", "", "", "", "");
        var cafs6Info = new _course_assessment_worksheet_classes_cafs6_info__WEBPACK_IMPORTED_MODULE_9__["Cafs6Info"](0, "", "", "", "", "", "", "");
        var midSemesterReviews = new Array();
        var endSemesterReviews = new Array();
        this.courseAssessment = new _course_assessment_worksheet_classes_course_assessment__WEBPACK_IMPORTED_MODULE_1__["CourseAssessment"](0, courseInformation, courseSLOs, cafs1Info, cafs2Info, cafs3Info, cafs6Info, midSemesterReviews, endSemesterReviews);
    };
    CourseArchiveComponent.prototype.downloadSyllabus = function () {
        var fileContents = String(this.courseAssessment.courseInformation.syllabus.fileContent);
        var filename = this.courseAssessment.courseInformation.syllabus.fileName;
        var a = document.createElement("a");
        var dataURI = fileContents;
        a.href = dataURI;
        a['download'] = filename;
        var e = document.createEvent("MouseEvents");
        // Use of deprecated function to satisfy TypeScript.
        e.initMouseEvent("click", true, false, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    };
    CourseArchiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-archive',
            template: __webpack_require__(/*! ./course-archive.component.html */ "./src/app/course-archive/course-archive.component.html"),
            styles: [__webpack_require__(/*! ./course-archive.component.css */ "./src/app/course-archive/course-archive.component.css")]
        }),
        __metadata("design:paramtypes", [_course_assessment_worksheet_service_course_service_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]])
    ], CourseArchiveComponent);
    return CourseArchiveComponent;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/classes/cafs1-info.ts":
/*!*******************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/classes/cafs1-info.ts ***!
  \*******************************************************************/
/*! exports provided: Cafs1Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cafs1Info", function() { return Cafs1Info; });
var Cafs1Info = /** @class */ (function () {
    function Cafs1Info(id, newSLOs, upgrades, enhancements, modifications, other) {
        this.id = id;
        this.newSLOs = newSLOs;
        this.upgrades = upgrades;
        this.enhancements = enhancements;
        this.modifications = modifications;
        this.other = other;
    }
    return Cafs1Info;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/classes/cafs2-info.ts":
/*!*******************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/classes/cafs2-info.ts ***!
  \*******************************************************************/
/*! exports provided: Cafs2Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cafs2Info", function() { return Cafs2Info; });
var Cafs2Info = /** @class */ (function () {
    function Cafs2Info(id, chemConcept, objectivesContent, generalComments, percentA, percentB, percentC, percentD, percentF) {
        this.id = id;
        this.chemConcept = chemConcept;
        this.objectivesContent = objectivesContent;
        this.generalComments = generalComments;
        this.percentA = percentA;
        this.percentB = percentB;
        this.percentC = percentC;
        this.percentD = percentD;
        this.percentF = percentF;
    }
    return Cafs2Info;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/classes/cafs3-info.ts":
/*!*******************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/classes/cafs3-info.ts ***!
  \*******************************************************************/
/*! exports provided: Cafs3Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cafs3Info", function() { return Cafs3Info; });
var Cafs3Info = /** @class */ (function () {
    function Cafs3Info(id, coursePreReq, faculty, minorCapitalEq, pedagogy, studentAsse, textbooks, other) {
        this.id = id;
        this.coursePreReq = coursePreReq;
        this.faculty = faculty;
        this.minorCapitalEq = minorCapitalEq;
        this.pedagogy = pedagogy;
        this.studentAsse = studentAsse;
        this.textbooks = textbooks;
        this.other = other;
    }
    return Cafs3Info;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/classes/cafs6-info.ts":
/*!*******************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/classes/cafs6-info.ts ***!
  \*******************************************************************/
/*! exports provided: Cafs6Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cafs6Info", function() { return Cafs6Info; });
var Cafs6Info = /** @class */ (function () {
    function Cafs6Info(id, departmentReview, departmentReviewer, newActionPlan, newBudgetItem, divisionChairReview, divisionChairSig, divisionChairRevDate) {
        this.id = id;
        this.departmentReview = departmentReview;
        this.departmentReviewer = departmentReviewer;
        this.newActionPlan = newActionPlan;
        this.newBudgetItem = newBudgetItem;
        this.divisionChairReview = divisionChairReview;
        this.divisionChairSig = divisionChairSig;
        this.divisionChairRevDate = divisionChairRevDate;
    }
    return Cafs6Info;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/classes/course-SLOs.ts":
/*!********************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/classes/course-SLOs.ts ***!
  \********************************************************************/
/*! exports provided: CourseSLOs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseSLOs", function() { return CourseSLOs; });
var CourseSLOs = /** @class */ (function () {
    function CourseSLOs(id, slo1, slo2, slo3, slo4, slo5) {
        this.id = id;
        this.slo1 = slo1;
        this.slo2 = slo2;
        this.slo3 = slo3;
        this.slo4 = slo4;
        this.slo5 = slo5;
    }
    return CourseSLOs;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/classes/course-assessment.ts":
/*!**************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/classes/course-assessment.ts ***!
  \**************************************************************************/
/*! exports provided: CourseAssessment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseAssessment", function() { return CourseAssessment; });
var CourseAssessment = /** @class */ (function () {
    function CourseAssessment(id, courseInformation, courseSLOs, cafs1Info, cafs2Info, cafs3Info, cafs6Info, midSemesterReviews, endSemesterReviews) {
        this.id = id;
        this.courseInformation = courseInformation;
        this.courseSLOs = courseSLOs;
        this.cafs1Info = cafs1Info;
        this.cafs2Info = cafs2Info;
        this.cafs3Info = cafs3Info;
        this.cafs6Info = cafs6Info;
        this.midSemesterReviews = midSemesterReviews;
        this.endSemesterReviews = endSemesterReviews;
    }
    return CourseAssessment;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/classes/course-information.ts":
/*!***************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/classes/course-information.ts ***!
  \***************************************************************************/
/*! exports provided: CourseInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseInformation", function() { return CourseInformation; });
var CourseInformation = /** @class */ (function () {
    function CourseInformation(id, courseNumberSection, syllabus, semester, year, courseTitle, archived, instructor) {
        this.id = id;
        this.courseNumberSection = courseNumberSection;
        this.syllabus = syllabus;
        this.semester = semester;
        this.year = year;
        this.courseTitle = courseTitle;
        this.archived = archived;
        this.instructor = instructor;
    }
    return CourseInformation;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/classes/course-semester-evaluation.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/classes/course-semester-evaluation.ts ***!
  \***********************************************************************************/
/*! exports provided: CourseSemesterEvaluation, SemesterReview, SemesterLearningIssues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseSemesterEvaluation", function() { return CourseSemesterEvaluation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemesterReview", function() { return SemesterReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemesterLearningIssues", function() { return SemesterLearningIssues; });
var CourseSemesterEvaluation = /** @class */ (function () {
    function CourseSemesterEvaluation(semesterReviews) {
    }
    return CourseSemesterEvaluation;
}());

var SemesterReview = /** @class */ (function () {
    function SemesterReview(student, grade, semesterLearningIssues, semesterInstructorInteractions, semesterInstructorNotes) {
        this.student = student;
        this.grade = grade;
        this.semesterLearningIssues = semesterLearningIssues;
        this.semesterInstructorInteractions = semesterInstructorInteractions;
        this.semesterInstructorNotes = semesterInstructorNotes;
    }
    return SemesterReview;
}());

var SemesterLearningIssues = /** @class */ (function () {
    function SemesterLearningIssues(coursePace, poorBackground, lackOfMindset, lackOfCuriosity, lackOfEffortOrFocus, poorTimeManagement, healthIssues, complacence, employmentHours, other) {
        this.coursePace = coursePace;
        this.poorBackground = poorBackground;
        this.lackOfMindset = lackOfMindset;
        this.lackOfCuriosity = lackOfCuriosity;
        this.lackOfEffortOrFocus = lackOfEffortOrFocus;
        this.poorTimeManagement = poorTimeManagement;
        this.healthIssues = healthIssues;
        this.complacence = complacence;
        this.employmentHours = employmentHours;
        this.other = other;
    }
    return SemesterLearningIssues;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/classes/file-storage.ts":
/*!*********************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/classes/file-storage.ts ***!
  \*********************************************************************/
/*! exports provided: FileStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileStorage", function() { return FileStorage; });
var FileStorage = /** @class */ (function () {
    function FileStorage(id, fileContent, fileName, fileType) {
        this.id = id;
        this.fileContent = fileContent;
        this.fileName = fileName;
        this.fileType = fileType;
    }
    return FileStorage;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/course-assessment-worksheet.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/course-assessment-worksheet.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".courseAssessmentWorksheetContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.courseInfoAndChangesFlexboxRootContainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.itemContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 3px solid #000;\r\n  margin-left: 5px;\r\n  margin-right: 10px;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.semesterReviewTitle {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.semesterReviewTitleText {\r\n  font-weight: bolder;\r\n  min-width: 500px;\r\n}\r\n\r\n.paddedLabel {\r\n  width: 155px;\r\n}\r\n\r\n.input {\r\n  width: 725px;\r\n  margin-left: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.inputCheckmark {\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  margin-left: 50px;\r\n}\r\n\r\n.title {\r\n  font-weight: bolder;\r\n}\r\n\r\n.gradesContainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.gradeContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 3px solid #000;\r\n  margin-left: 5px;\r\n  margin-right: 10px;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.gradeLetter {\r\n  border-bottom: 3px solid #000;\r\n  margin-bottom: 10px;\r\n  font-weight: bold;\r\n  padding: 10px 50px 10px 50px;\r\n  background-color: #831917;\r\n  color: #eee;\r\n}\r\n\r\n.gradeCount {\r\n  padding: 5px 50px 10px 50px;\r\n}\r\n\r\n.semesterReviewsContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-top: 3px solid #000;\r\n}\r\n\r\n.semesterReviewContainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-bottom: 3px solid #000;\r\n  border-left: 3px solid #000;\r\n  border-right: 3px solid #000;\r\n}\r\n\r\n.semesterReviewHeader {\r\n  font-weight: bold;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  background-color: #831917;\r\n  color: #eee;\r\n  width: 85px;\r\n  border-right: 3px solid #000;\r\n}\r\n\r\n.midSemesterReviewHeaderTextArea {\r\n  font-weight: bold;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  background-color: #831917;\r\n  color: #eee;\r\n  width: 280px;\r\n  border-right: 3px solid #000;\r\n}\r\n\r\n.midSemesterReviewHeaderTextAreaNoBorder {\r\n  font-weight: bold;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  background-color: #831917;\r\n  color: #eee;\r\n  width: 280px;\r\n}\r\n\r\n.endSemesterReviewHeader {\r\n  font-weight: bold;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  background-color: #831917;\r\n  color: #eee;\r\n  width: 85px;\r\n  border-right: 3px solid #000;\r\n}\r\n\r\n.endSemesterReviewHeaderTextArea {\r\n  font-weight: bold;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  background-color: #831917;\r\n  color: #eee;\r\n  width: 229px;\r\n  border-right: 3px solid #000;\r\n}\r\n\r\n.endSemesterReviewHeaderTextAreaNoBorder {\r\n  font-weight: bold;\r\n  padding-bottom: 10px;\r\n  padding-top: 10px;\r\n  background-color: #831917;\r\n  color: #eee;\r\n  width: 229px;\r\n}\r\n\r\n.midSemesterReviewTextArea {\r\n  width: 280px;\r\n  overflow-wrap: break-word;\r\n  border-right: 3px solid #000;\r\n}\r\n\r\n.midSemesterReviewTextAreaNoBorder {\r\n  width: 280px;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.endSemesterReviewTextArea {\r\n  width: 229px;\r\n  overflow-wrap: break-word;\r\n  border-right: 3px solid #000;\r\n}\r\n\r\n.endSemesterReviewTextAreaNoBorder {\r\n  width: 229px;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.semesterReviewSelector {\r\n  width: 85px;\r\n  overflow-wrap: break-word;\r\n  border-right: 3px solid #000;\r\n}\r\n\r\n.marginBottom {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.saveButton{\r\n  margin: 10px;\r\n}\r\n\r\n.spanSpacer {\r\n  margin-right: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLWFzc2Vzc21lbnQtd29ya3NoZWV0L2NvdXJzZS1hc3Nlc3NtZW50LXdvcmtzaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQ0FBcUM7Q0FDdEM7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QiwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY291cnNlLWFzc2Vzc21lbnQtd29ya3NoZWV0L2NvdXJzZS1hc3Nlc3NtZW50LXdvcmtzaGVldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZUFzc2Vzc21lbnRXb3Jrc2hlZXRDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvdXJzZUluZm9BbmRDaGFuZ2VzRmxleGJveFJvb3RDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLml0ZW1Db250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2VtZXN0ZXJSZXZpZXdUaXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uc2VtZXN0ZXJSZXZpZXdUaXRsZVRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLnBhZGRlZExhYmVsIHtcclxuICB3aWR0aDogMTU1cHg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgd2lkdGg6IDcyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uaW5wdXRDaGVja21hcmsge1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5ncmFkZXNDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmdyYWRlQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5ncmFkZUxldHRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxMHB4IDUwcHggMTBweCA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MzE5MTc7XHJcbiAgY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5ncmFkZUNvdW50IHtcclxuICBwYWRkaW5nOiA1cHggNTBweCAxMHB4IDUwcHg7XHJcbn1cclxuXHJcbi5zZW1lc3RlclJldmlld3NDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgIzAwMDtcclxufVxyXG5cclxuLnNlbWVzdGVyUmV2aWV3Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbi5zZW1lc3RlclJldmlld0hlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTkxNztcclxuICBjb2xvcjogI2VlZTtcclxuICB3aWR0aDogODVweDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4ubWlkU2VtZXN0ZXJSZXZpZXdIZWFkZXJUZXh0QXJlYSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTkxNztcclxuICBjb2xvcjogI2VlZTtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzAwMDtcclxufVxyXG5cclxuLm1pZFNlbWVzdGVyUmV2aWV3SGVhZGVyVGV4dEFyZWFOb0JvcmRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTkxNztcclxuICBjb2xvcjogI2VlZTtcclxuICB3aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi5lbmRTZW1lc3RlclJldmlld0hlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTkxNztcclxuICBjb2xvcjogI2VlZTtcclxuICB3aWR0aDogODVweDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4uZW5kU2VtZXN0ZXJSZXZpZXdIZWFkZXJUZXh0QXJlYSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTkxNztcclxuICBjb2xvcjogI2VlZTtcclxuICB3aWR0aDogMjI5cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzAwMDtcclxufVxyXG5cclxuLmVuZFNlbWVzdGVyUmV2aWV3SGVhZGVyVGV4dEFyZWFOb0JvcmRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTkxNztcclxuICBjb2xvcjogI2VlZTtcclxuICB3aWR0aDogMjI5cHg7XHJcbn1cclxuXHJcbi5taWRTZW1lc3RlclJldmlld1RleHRBcmVhIHtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4ubWlkU2VtZXN0ZXJSZXZpZXdUZXh0QXJlYU5vQm9yZGVyIHtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmVuZFNlbWVzdGVyUmV2aWV3VGV4dEFyZWEge1xyXG4gIHdpZHRoOiAyMjlweDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbi5lbmRTZW1lc3RlclJldmlld1RleHRBcmVhTm9Cb3JkZXIge1xyXG4gIHdpZHRoOiAyMjlweDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uc2VtZXN0ZXJSZXZpZXdTZWxlY3RvciB7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4ubWFyZ2luQm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uc2F2ZUJ1dHRvbntcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5zcGFuU3BhY2VyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/course-assessment-worksheet/course-assessment-worksheet.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/course-assessment-worksheet.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"courseAssessmentWorksheetContainer\">\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <span class=\"title\">Course Information</span>\n      <div>\n        <label class=\"paddedLabel\">Course Section/#:</label>\n        <select [(ngModel)]=\"selectedCourse\" (change)=\"setCourse()\">\n          <option [ngValue]=\"course\" *ngFor=\"let course of courseList\"> {{course.courseNumberSection}} ->\n            {{course.semester}}, {{course.year}}</option>\n        </select>\n      </div>\n      <div>\n        <label class=\"paddedLabel\">Semester & Year:</label>\n        <span>{{courseAssessment.courseInformation.semester}} {{courseAssessment.courseInformation.year}} </span>\n      </div>\n      <div>\n        <label class=\"paddedLabel\">Course Title:</label>\n        <span>{{courseAssessment.courseInformation.courseTitle}}</span>\n      </div>\n      <div>\n        <label class=\"paddedLabel\">Instructor:</label>\n        <span>{{courseAssessment.courseInformation.instructor.name}}</span>\n      </div>\n      <div class=\"saveButton\">\n        <button class=\"btn btn-lg btn-light\" (click)=\"downloadSyllabus()\">Download Syllabus</button>\n        <span class=\"spanSpacer\"></span>\n        <button class=\"btn btn-lg btn-dark\" (click)=\"loadCourse()\">Load Course</button>\n      </div>\n    </div>\n    <div class=\"itemContainer\">\n      <span class=\"title\">SLO's Addressed in this semester</span>\n      <div>\n        <label class=\"paddedLabel\">#1 Knowledge Base</label>\n        <input class=\"inputCheckmark\" #knowledgeBaseCheckBox id=\"knowledgeBaseCheckBox\" type=\"checkbox\" (change)=\"knowledgeBaseChecked(knowledgeBaseCheckBox.checked)\"\n          [(ngModel)]=\"courseAssessment.courseSLOs.slo1\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n      </div>\n      <div>\n        <label class=\"paddedLabel\">#2 Lab Skills</label>\n        <input class=\"inputCheckmark\" #labSkillsCheckBox id=\"labSkillsCheckBox\" type=\"checkbox\" (change)=\"labSkillsChecked(labSkillsCheckBox.checked)\"\n          [(ngModel)]=\"courseAssessment.courseSLOs.slo2\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n      </div>\n      <div>\n        <label class=\"paddedLabel\">#3 Practice</label>\n        <input class=\"inputCheckmark\" #practiceCheckBox id=\"practiceCheckBox\" type=\"checkbox\" (change)=\"practiceChecked(practiceCheckBox.checked)\"\n          [(ngModel)]=\"courseAssessment.courseSLOs.slo3\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n      </div>\n      <div>\n        <label class=\"paddedLabel\">#4 Societal Connects</label>\n        <input class=\"inputCheckmark\" #societalConnectsCheckBox id=\"societalConnectsCheckBox\" type=\"checkbox\" (change)=\"societalConnectsChecked(societalConnectsCheckBox.checked)\"\n          [(ngModel)]=\"courseAssessment.courseSLOs.slo4\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n      </div>\n      <div>\n        <label class=\"paddedLabel\">#5 Capstone</label>\n        <input class=\"inputCheckmark\" #capstoneCheckBox id=\"capstoneCheckBox\" type=\"checkbox\" (change)=\"capstoneChecked(capstoneCheckBox.checked)\"\n          [(ngModel)]=\"courseAssessment.courseSLOs.slo5\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n      </div>\n    </div>\n  </div>\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <span class=\"title\">I. Course Changes Implemented this Semester</span>\n      <div>\n        <span>New SLO emphasis added:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs1Info.newSLOs\"></textarea>\n      </div>\n      <div>\n        <span>Upgrades to course content:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs1Info.upgrades\"></textarea>\n      </div>\n      <div>\n        <span>Pedagogy enhancements:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs1Info.enhancements\"></textarea>\n      </div>\n      <div>\n        <span>Modifications to student assessment measures:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs1Info.modifications\"></textarea>\n      </div>\n      <div>\n        <span>Other course changes implemented this semester:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs1Info.other\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <span class=\"title\">II. Student Performance Findings</span>\n      <div>\n        <span>Chemistry concept carry-over from previous semesters, as demonstrated on pre-course <br> assessment (if\n          applicable):</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs2Info.chemConcept\"></textarea>\n      </div>\n      <div>\n        <span>Were objectives and content describved in the Syllabuss completely covered this semester?</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs2Info.objectivesContent\"></textarea>\n      </div>\n      <div>\n        <span>Overall Student Performance (calculates as grades are entered in section V. below)</span><br>\n        <div class=\"gradesContainer\">\n          <div class=\"gradeContainer\">\n            <div class=\"gradeLetter\">A</div>\n            <div class=\"gradeCount\">{{courseAssessment.cafs2Info.percentA}}</div>\n          </div>\n          <div class=\"gradeContainer\">\n            <div class=\"gradeLetter\">B</div>\n            <div class=\"gradeCount\">{{courseAssessment.cafs2Info.percentB}}</div>\n          </div>\n          <div class=\"gradeContainer\">\n            <div class=\"gradeLetter\">C</div>\n            <div class=\"gradeCount\">{{courseAssessment.cafs2Info.percentC}}</div>\n          </div>\n          <div class=\"gradeContainer\">\n            <div class=\"gradeLetter\">D</div>\n            <div class=\"gradeCount\">{{courseAssessment.cafs2Info.percentD}}</div>\n          </div>\n          <div class=\"gradeContainer\">\n            <div class=\"gradeLetter\">F</div>\n            <div class=\"gradeCount\">{{courseAssessment.cafs2Info.percentF}}</div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <span>General comments about student performance:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs2Info.generalComments\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <span class=\"title\">III. Recommended changes to Implement for next offering</span>\n      <div>\n        <span>Course prerequisites:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.coursePreReq\"></textarea>\n      </div>\n      <div>\n        <span>Textbooks/other required materials:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.textbooks\"></textarea>\n      </div>\n      <div>\n        <span>Student assessment measures:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.studentAsse\"></textarea>\n      </div>\n      <div>\n        <span>Pedagogy:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.pedagogy\"></textarea>\n      </div>\n      <div>\n        <span>Faculty/guest instructors:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.faculty\"></textarea>\n      </div>\n      <div>\n        <span>Minor and capital equipment needs:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.minorCapitalEq\"></textarea>\n      </div>\n      <div>\n        <span>Other recommendations:</span><br>\n        <textarea class=\"input\" [(ngModel)]=\"courseAssessment.cafs3Info.other\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <div class=\"semesterReviewTitle\">\n        <span class=\"semesterReviewTitleText\">IV. Mid-Semester Individual Performance and evaluation</span>\n        <app-mid-semester-modal [midSemesterReview]=\"midSemesterReview\" (midSemesterItemSaved)=\"onMidSemesterItemSaved($event)\"></app-mid-semester-modal>\n      </div>\n      <div *ngIf=\"hasMidSemesterReviews()\" class=\"semesterReviewsContainer\">\n        <div class=\"semesterReviewContainer\">\n          <div class=\"semesterReviewHeader\">ID#</div>\n          <div class=\"semesterReviewHeader\">Learning Issues</div>\n          <div class=\"midSemesterReviewHeaderTextArea\">Instructor Interaction</div>\n          <div class=\"midSemesterReviewHeaderTextAreaNoBorder\">Instructor Evaluation</div>\n        </div>\n        <div class=\"semesterReviewContainer\" *ngFor=\"let review of courseAssessment.midSemesterReviews\">\n          <div class=\"semesterReviewSelector\">{{review.student.studentName}}</div>\n          <div class=\"semesterReviewSelector\">{{calculateSemesterLearningIssues(review.semesterLearningIssues)}}</div>\n          <div class=\"midSemesterReviewTextArea\">{{review.semesterInstructorInteractions}}</div>\n          <div class=\"midSemesterReviewTextAreaNoBorder\">{{review.semesterInstructorNotes}}</div>\n        </div>\n      </div>\n      <div *ngIf=\"!hasMidSemesterReviews()\">\n        <span>Please click the \"Add/Edit Mid-Semester Review\" button above</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"courseInfoAndChangesFlexboxRootContainer\">\n    <div class=\"itemContainer\">\n      <div class=\"semesterReviewTitle\">\n        <span class=\"semesterReviewTitleText\">V. Summative Individual Performance and evaluation</span>\n        <app-end-semester-modal [endSemesterReview]=\"endSemesterReview\" (endSemesterItemSaved)=\"onEndSemesterItemSaved($event)\"></app-end-semester-modal>\n      </div>\n      <div *ngIf=\"hasEndSemesterReviews()\" class=\"semesterReviewsContainer\">\n        <div class=\"semesterReviewContainer\">\n          <div class=\"endSemesterReviewHeader\">ID#</div>\n          <div class=\"endSemesterReviewHeader\">Grade</div>\n          <div class=\"endSemesterReviewHeader\">Learning Issues</div>\n          <div class=\"endSemesterReviewHeaderTextArea\">Instructor Interaction</div>\n          <div class=\"endSemesterReviewHeaderTextAreaNoBorder\">Instructor Evaluation</div>\n        </div>\n        <div class=\"semesterReviewContainer\" *ngFor=\"let review of courseAssessment.endSemesterReviews\">\n          <div class=\"semesterReviewSelector\">{{review.student.studentName}}</div>\n          <div class=\"semesterReviewSelector\">{{review.grade}}</div>\n          <div class=\"semesterReviewSelector\">{{calculateSemesterLearningIssues(review.semesterLearningIssues)}}</div>\n          <div class=\"endSemesterReviewTextArea\">{{review.semesterInstructorInteractions}}</div>\n          <div class=\"endSemesterReviewTextAreaNoBorder\">{{review.semesterInstructorNotes}}</div>\n        </div>\n      </div>\n      <div *ngIf=\"!hasEndSemesterReviews()\">\n        <span>Please click the \"Add/Edit End-Semester Review\" button above</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"saveButton\">\n    <button class=\"btn btn-lg btn-dark\" (click)=\"saveCourse()\">Save Course</button>\n  </div>\n  <div class=\"marginBottom\"></div>\n  <!--spacer for footer -->\n</div>"

/***/ }),

/***/ "./src/app/course-assessment-worksheet/course-assessment-worksheet.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/course-assessment-worksheet.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CourseAssessmentWorksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseAssessmentWorksheetComponent", function() { return CourseAssessmentWorksheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_course_assessment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/course-assessment */ "./src/app/course-assessment-worksheet/classes/course-assessment.ts");
/* harmony import */ var _classes_cafs1_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/cafs1-info */ "./src/app/course-assessment-worksheet/classes/cafs1-info.ts");
/* harmony import */ var _classes_cafs2_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/cafs2-info */ "./src/app/course-assessment-worksheet/classes/cafs2-info.ts");
/* harmony import */ var _classes_cafs3_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/cafs3-info */ "./src/app/course-assessment-worksheet/classes/cafs3-info.ts");
/* harmony import */ var _classes_cafs6_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/cafs6-info */ "./src/app/course-assessment-worksheet/classes/cafs6-info.ts");
/* harmony import */ var _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/course-semester-evaluation */ "./src/app/course-assessment-worksheet/classes/course-semester-evaluation.ts");
/* harmony import */ var _classes_course_information__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/course-information */ "./src/app/course-assessment-worksheet/classes/course-information.ts");
/* harmony import */ var _classes_course_SLOs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/course-SLOs */ "./src/app/course-assessment-worksheet/classes/course-SLOs.ts");
/* harmony import */ var _service_course_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/course-service.service */ "./src/app/course-assessment-worksheet/service/course-service.service.ts");
/* harmony import */ var _site_admin_classes_instructor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../site-admin/classes/instructor */ "./src/app/site-admin/classes/instructor.ts");
/* harmony import */ var _site_admin_classes_student__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../site-admin/classes/student */ "./src/app/site-admin/classes/student.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CourseAssessmentWorksheetComponent = /** @class */ (function () {
    function CourseAssessmentWorksheetComponent(courseService) {
        this.courseService = courseService;
        this.courseList = new Array();
    }
    CourseAssessmentWorksheetComponent.prototype.ngOnInit = function () {
        this.createEmptyCourse();
        this.resetMidSemesterItem();
        this.resetEndSemesterItem();
        this.loadCourseInformationList();
    };
    CourseAssessmentWorksheetComponent.prototype.loadCourseInformationList = function () {
        var _this = this;
        this.courseList = new Array();
        this.courseService.getCourseList().subscribe(function (courses) {
            for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
                var course = courses_1[_i];
                if (!course.archived) {
                    _this.courseList.push(course);
                }
            }
            _this.courseList = _this.courseList.sort(function (a, b) {
                if (a.id < b.id) {
                    return -1;
                }
                else if (a.id > b.id) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.selectedCourse = _this.courseList[0];
            _this.setCourse();
        });
    };
    CourseAssessmentWorksheetComponent.prototype.knowledgeBaseChecked = function (value) {
        this.courseAssessment.courseSLOs.slo1 = value;
    };
    CourseAssessmentWorksheetComponent.prototype.labSkillsChecked = function (value) {
        this.courseAssessment.courseSLOs.slo2 = value;
    };
    CourseAssessmentWorksheetComponent.prototype.practiceChecked = function (value) {
        this.courseAssessment.courseSLOs.slo3 = value;
    };
    CourseAssessmentWorksheetComponent.prototype.societalConnectsChecked = function (value) {
        this.courseAssessment.courseSLOs.slo4 = value;
    };
    CourseAssessmentWorksheetComponent.prototype.capstoneChecked = function (value) {
        this.courseAssessment.courseSLOs.slo5 = value;
    };
    CourseAssessmentWorksheetComponent.prototype.calculateGrades = function () {
        this.resetGrades();
        for (var _i = 0, _a = Array.from(this.courseAssessment.endSemesterReviews.values()); _i < _a.length; _i++) {
            var review = _a[_i];
            review.grade == 'A' ? this.courseAssessment.cafs2Info.percentA += 1 : 0;
            review.grade == 'B' ? this.courseAssessment.cafs2Info.percentB += 1 : 0;
            review.grade == 'C' ? this.courseAssessment.cafs2Info.percentC += 1 : 0;
            review.grade == 'D' ? this.courseAssessment.cafs2Info.percentD += 1 : 0;
            review.grade == 'F' ? this.courseAssessment.cafs2Info.percentF += 1 : 0;
        }
    };
    CourseAssessmentWorksheetComponent.prototype.resetGrades = function () {
        this.courseAssessment.cafs2Info.percentA = 0;
        this.courseAssessment.cafs2Info.percentB = 0;
        this.courseAssessment.cafs2Info.percentC = 0;
        this.courseAssessment.cafs2Info.percentD = 0;
        this.courseAssessment.cafs2Info.percentF = 0;
    };
    CourseAssessmentWorksheetComponent.prototype.calculateSemesterLearningIssues = function (issues) {
        var learningIssues = '';
        learningIssues = issues.coursePace ? learningIssues.concat('Course pace, ') : learningIssues.concat('');
        learningIssues = issues.poorBackground ? learningIssues.concat('Poor background, ') : learningIssues.concat('');
        learningIssues = issues.lackOfMindset ? learningIssues.concat('Mindset, ') : learningIssues.concat('');
        learningIssues = issues.lackOfCuriosity ? learningIssues.concat('Interest or Curiousity, ') : learningIssues.concat('');
        learningIssues = issues.lackOfEffortOrFocus ? learningIssues.concat('Effortor Focus, ') : learningIssues.concat('');
        learningIssues = issues.poorTimeManagement ? learningIssues.concat('Time Manaagement, ') : learningIssues.concat('');
        learningIssues = issues.healthIssues ? learningIssues.concat('Health issues, ') : learningIssues.concat('');
        learningIssues = issues.complacence ? learningIssues.concat('Complacence, ') : learningIssues.concat('');
        learningIssues = issues.employmentHours ? learningIssues.concat('Employment hours, ') : learningIssues.concat('');
        learningIssues = issues.other ? learningIssues.concat('Other ') : learningIssues.concat('');
        return learningIssues.trim().replace(/,\s*$/, "");
    };
    CourseAssessmentWorksheetComponent.prototype.resetMidSemesterItem = function () {
        this.midSemesterReview = new _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_6__["SemesterReview"](new _site_admin_classes_student__WEBPACK_IMPORTED_MODULE_11__["Student"](0, '', null, '', '', '', '', '', '', '', '', '', '', ''), '', new _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_6__["SemesterLearningIssues"](false, false, false, false, false, false, false, false, false, false), '', '');
    };
    CourseAssessmentWorksheetComponent.prototype.onMidSemesterItemSaved = function (saved) {
        if (saved) {
            this.courseAssessment.midSemesterReviews.push(this.midSemesterReview);
        }
        this.resetMidSemesterItem();
    };
    CourseAssessmentWorksheetComponent.prototype.hasMidSemesterReviews = function () {
        if (this.courseAssessment.midSemesterReviews) {
            return this.courseAssessment.midSemesterReviews.length > 0 ? true : false;
        }
        return false;
    };
    CourseAssessmentWorksheetComponent.prototype.resetEndSemesterItem = function () {
        this.endSemesterReview = new _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_6__["SemesterReview"](new _site_admin_classes_student__WEBPACK_IMPORTED_MODULE_11__["Student"](0, '', null, '', '', '', '', '', '', '', '', '', '', ''), '', new _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_6__["SemesterLearningIssues"](false, false, false, false, false, false, false, false, false, false), '', '');
    };
    CourseAssessmentWorksheetComponent.prototype.onEndSemesterItemSaved = function (saved) {
        if (saved) {
            this.courseAssessment.endSemesterReviews.push(this.endSemesterReview);
            this.calculateGrades();
        }
        this.resetEndSemesterItem();
    };
    CourseAssessmentWorksheetComponent.prototype.hasEndSemesterReviews = function () {
        if (this.courseAssessment.endSemesterReviews) {
            return this.courseAssessment.endSemesterReviews.length > 0 ? true : false;
        }
        return false;
    };
    CourseAssessmentWorksheetComponent.prototype.setCourse = function () {
        this.createEmptyCourse();
        this.courseAssessment.courseInformation = this.selectedCourse;
    };
    CourseAssessmentWorksheetComponent.prototype.loadCourse = function () {
        var _this = this;
        this.courseService.loadCourse(this.selectedCourse.id).subscribe(function (courseAssessment) {
            if (courseAssessment) {
                _this.courseAssessment = courseAssessment;
                console.log(_this.courseAssessment);
            }
            else {
                _this.createEmptyCourse();
                _this.courseAssessment.courseInformation = _this.selectedCourse;
            }
        });
    };
    CourseAssessmentWorksheetComponent.prototype.createEmptyCourse = function () {
        var courseInformation = new _classes_course_information__WEBPACK_IMPORTED_MODULE_7__["CourseInformation"](0, "", null, "", "", "", false, new _site_admin_classes_instructor__WEBPACK_IMPORTED_MODULE_10__["Instructor"](0, '', ''));
        var courseSLOs = new _classes_course_SLOs__WEBPACK_IMPORTED_MODULE_8__["CourseSLOs"](0, false, false, false, false, false);
        var cafs1Info = new _classes_cafs1_info__WEBPACK_IMPORTED_MODULE_2__["Cafs1Info"](0, "", "", "", "", "");
        var cafs2Info = new _classes_cafs2_info__WEBPACK_IMPORTED_MODULE_3__["Cafs2Info"](0, "", "", "", 0, 0, 0, 0, 0);
        var cafs3Info = new _classes_cafs3_info__WEBPACK_IMPORTED_MODULE_4__["Cafs3Info"](0, "", "", "", "", "", "", "");
        var cafs6Info = new _classes_cafs6_info__WEBPACK_IMPORTED_MODULE_5__["Cafs6Info"](0, "", "", "", "", "", "", "");
        var midSemesterReviews = new Array();
        var endSemesterReviews = new Array();
        this.courseAssessment = new _classes_course_assessment__WEBPACK_IMPORTED_MODULE_1__["CourseAssessment"](0, courseInformation, courseSLOs, cafs1Info, cafs2Info, cafs3Info, cafs6Info, midSemesterReviews, endSemesterReviews);
    };
    CourseAssessmentWorksheetComponent.prototype.saveCourse = function () {
        this.courseService.saveCourse(this.courseAssessment);
    };
    CourseAssessmentWorksheetComponent.prototype.downloadSyllabus = function () {
        var fileContents = String(this.courseAssessment.courseInformation.syllabus.fileContent);
        var filename = this.courseAssessment.courseInformation.syllabus.fileName;
        var a = document.createElement("a");
        var dataURI = fileContents;
        a.href = dataURI;
        a['download'] = filename;
        var e = document.createEvent("MouseEvents");
        // Use of deprecated function to satisfy TypeScript.
        e.initMouseEvent("click", true, false, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    };
    CourseAssessmentWorksheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-assessment-worksheet',
            template: __webpack_require__(/*! ./course-assessment-worksheet.component.html */ "./src/app/course-assessment-worksheet/course-assessment-worksheet.component.html"),
            styles: [__webpack_require__(/*! ./course-assessment-worksheet.component.css */ "./src/app/course-assessment-worksheet/course-assessment-worksheet.component.css")]
        }),
        __metadata("design:paramtypes", [_service_course_service_service__WEBPACK_IMPORTED_MODULE_9__["CourseService"]])
    ], CourseAssessmentWorksheetComponent);
    return CourseAssessmentWorksheetComponent;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/modals/end-semester-modal/end-semester-modal.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/modals/end-semester-modal/end-semester-modal.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paddedLabel {\r\n    width: 156px;\r\n}\r\n\r\n.inputCheckmark {\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n    margin-left: 30px;\r\n    margin-right: 50px;\r\n}\r\n\r\n.studentId {\r\n    max-width: 7ch;\r\n}\r\n\r\n.learningIssuesContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.learningIssuesItem {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.searchTitle{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLWFzc2Vzc21lbnQtd29ya3NoZWV0L21vZGFscy9lbmQtc2VtZXN0ZXItbW9kYWwvZW5kLXNlbWVzdGVyLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsK0JBQStCO0NBQ2xDOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1hc3Nlc3NtZW50LXdvcmtzaGVldC9tb2RhbHMvZW5kLXNlbWVzdGVyLW1vZGFsL2VuZC1zZW1lc3Rlci1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRlZExhYmVsIHtcclxuICAgIHdpZHRoOiAxNTZweDtcclxufVxyXG5cclxuLmlucHV0Q2hlY2ttYXJrIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3R1ZGVudElkIHtcclxuICAgIG1heC13aWR0aDogN2NoO1xyXG59XHJcblxyXG4ubGVhcm5pbmdJc3N1ZXNDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5sZWFybmluZ0lzc3Vlc0l0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZWFyY2hUaXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/course-assessment-worksheet/modals/end-semester-modal/end-semester-modal.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/modals/end-semester-modal/end-semester-modal.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add/Edit Mid-Semester Review\n    </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n        <div class=\"searchTitle\">\n          <span class=\"title\">Enter student email address:</span>\n          <span class=\"spanSpacer\"></span>\n          <button class=\"btn btn-lg btn-info\" (click)=\"loadStudent()\" [disabled]=\"!validEmail\">Find Student</button>\n        </div>\n        <input placeholder=\"Enter valid email and click Find Student\" type=\"email\" name=\"studentEmail\" class=\"form-control info\"\n          [(ngModel)]=\"studentEmail\" (ngModelChange)=\"onEmailChange($event)\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"studentName\">Student Name</label><br>\n        <input class=\"form-control\" name=\"studentName\" [(ngModel)]=\"endSemesterReview.student.studentName\" readonly>\n      </div>\n      <div class=\"form-group\">\n        <form [formGroup]=\"gradeForm\">\n          <label for=\"studentGrade\">Select Grade: </label>\n          <select formControlName=\"gradeControl\" (change)=\"setGrade($event.target.value)\">\n            <option [value]=\"grade\" *ngFor=\"let grade of grades\"> {{grade}}</option>\n          </select>\n        </form>\n      </div>\n      <div class=\"learningIssuesContainer\">\n        <div class=\"form-group\">\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#1 Course Pace</label>\n            <input class=\"inputCheckmark\" #coursePaceCheckBox id=\"coursePaceCheckBox\" type=\"checkbox\" (change)=\"coursePaceChecked(coursePaceCheckBox.checked)\"\n              [(ngModel)]=\"endSemesterReview.semesterLearningIssues.coursePace\" name=\"coursePace\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#2 Poor Background</label>\n            <input class=\"inputCheckmark\" #poorBackgroundCheckBox id=\"poorBackgroundCheckBox\" type=\"checkbox\" (change)=\"poorBackgroundChecked(poorBackgroundCheckBox.checked)\"\n              [(ngModel)]=\"endSemesterReview.semesterLearningIssues.poorBackground\" name=\"poorBackground\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#3 Mindset</label>\n            <input class=\"inputCheckmark\" #lackOfMindsetCheckBox id=\"lackOfMindsetCheckBox\" type=\"checkbox\" (change)=\"lackOfMindsetChecked(lackOfMindsetCheckBox.checked)\"\n              [(ngModel)]=\"endSemesterReview.semesterLearningIssues.lackOfMindset\" name=\"lackOfMindset\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#4 Interest/Curiosity</label>\n            <input class=\"inputCheckmark\" #lackOfCuriosityCheckBox id=\"lackOfCuriosityCheckBox\" type=\"checkbox\"\n              (change)=\"lackOfCuriosityChecked(lackOfCuriosityCheckBox.checked)\" [(ngModel)]=\"endSemesterReview.semesterLearningIssues.lackOfCuriosity\"\n              name=\"lackOfCuriosity\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#5 Effort/Focus</label>\n            <input class=\"inputCheckmark\" #lackOfEffortOrFocusCheckBox id=\"lackOfEffortOrFocusCheckBox\" type=\"checkbox\"\n              (change)=\"lackOfEffortOrFocusChecked(lackOfEffortOrFocusCheckBox.checked)\" [(ngModel)]=\"endSemesterReview.semesterLearningIssues.lackOfEffortOrFocus\"\n              name=\"lackOfEffortOrFocus\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#6 Time Management</label>\n            <input class=\"inputCheckmark\" #poorTimeManagementCheckBox id=\"poorTimeManagementCheckBox\" type=\"checkbox\"\n              (change)=\"poorTimeManagementChecked(poorTimeManagementCheckBox.checked)\" [(ngModel)]=\"endSemesterReview.semesterLearningIssues.poorTimeManagement\"\n              name=\"poorTimeManagement\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#7 Health Issues</label>\n            <input class=\"inputCheckmark\" #healthIssuesCheckBox id=\"healthIssuesCheckBox\" type=\"checkbox\" (change)=\"healthIssuesChecked(healthIssuesCheckBox.checked)\"\n              [(ngModel)]=\"endSemesterReview.semesterLearningIssues.healthIssues\" name=\"healthIssues\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#8 Complacence</label>\n            <input class=\"inputCheckmark\" #complacenceCheckBox id=\"complacenceCheckBox\" type=\"checkbox\" (change)=\"complacenceChecked(complacenceCheckBox.checked)\"\n              [(ngModel)]=\"endSemesterReview.semesterLearningIssues.complacence\" name=\"complacence\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#9 Employment hours</label>\n            <input class=\"inputCheckmark\" #employmentHoursCheckBox id=\"employmentHoursCheckBox\" type=\"checkbox\"\n              (change)=\"employmentHoursChecked(employmentHoursCheckBox.checked)\" [(ngModel)]=\"endSemesterReview.semesterLearningIssues.employmentHours\"\n              name=\"employmentHours\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#10 Other</label>\n            <input class=\"inputCheckmark\" #otherCheckBox id=\"otherCheckBox\" type=\"checkbox\" (change)=\"otherChecked(otherCheckBox.checked)\"\n              [(ngModel)]=\"endSemesterReview.semesterLearningIssues.other\" name=\"other\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"semesterInstructorInteractions\">Extent of instructor interactions</label><br>\n        <textarea class=\"form-control\" name=\"semesterInstructorInteractions\" [(ngModel)]=\"endSemesterReview.semesterInstructorInteractions\"\n          rows=\"4\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"semesterInstructorNotes\">Instructor recommendations</label><br>\n        <textarea class=\"form-control\" name=\"semesterInstructorNotes\" [(ngModel)]=\"endSemesterReview.semesterInstructorNotes\"\n          rows=\"4\"></textarea>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-sm btn-outline-dark\" (click)=\"open(content)\">Add/Edit End-Semester Review</button>\n<!-- \n<hr>\n\n<pre>{{closeResult}}</pre> -->"

/***/ }),

/***/ "./src/app/course-assessment-worksheet/modals/end-semester-modal/end-semester-modal.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/modals/end-semester-modal/end-semester-modal.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EndSemesterModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndSemesterModalComponent", function() { return EndSemesterModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/course-semester-evaluation */ "./src/app/course-assessment-worksheet/classes/course-semester-evaluation.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_site_admin_classes_student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/site-admin/classes/student */ "./src/app/site-admin/classes/student.ts");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/student.service */ "./src/app/services/student.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EndSemesterModalComponent = /** @class */ (function () {
    function EndSemesterModalComponent(modalService, fb, studentService) {
        this.modalService = modalService;
        this.fb = fb;
        this.studentService = studentService;
        this.endSemesterItemSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.grades = ['A', 'B', 'C', 'D', 'F'];
        this.endSemesterReview = new _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_1__["SemesterReview"](new src_app_site_admin_classes_student__WEBPACK_IMPORTED_MODULE_4__["Student"](0, '', null, '', '', '', '', '', '', '', '', '', '', ''), '', new _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_1__["SemesterLearningIssues"](false, false, false, false, false, false, false, false, false, false), '', '');
    }
    EndSemesterModalComponent.prototype.ngOnInit = function () {
        this.gradeForm = this.fb.group({
            gradeControl: ['C']
        });
    };
    EndSemesterModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            _this.endSemesterReview.grade = _this.gradeForm.value.gradeControl;
            _this.endSemesterItemSaved.emit(true);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            _this.endSemesterItemSaved.emit(false);
        });
    };
    EndSemesterModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    EndSemesterModalComponent.prototype.loadStudent = function () {
        var _this = this;
        this.studentService.getStudent(this.studentEmail).subscribe(function (student) {
            console.log(student);
            if (student) {
                _this.endSemesterReview.student = student;
            }
        });
    };
    EndSemesterModalComponent.prototype.onEmailChange = function (newValue) {
        var validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validEmailRegEx.test(newValue)) {
            this.validEmail = true;
        }
        else {
            this.validEmail = false;
        }
    };
    EndSemesterModalComponent.prototype.coursePaceChecked = function (value) {
        this.endSemesterReview.semesterLearningIssues.coursePace = value;
    };
    EndSemesterModalComponent.prototype.poorBackgroundChecked = function (value) {
        this.endSemesterReview.semesterLearningIssues.poorBackground = value;
    };
    EndSemesterModalComponent.prototype.lackOfMindsetChecked = function (value) {
        this.endSemesterReview.semesterLearningIssues.lackOfMindset = value;
    };
    EndSemesterModalComponent.prototype.lackOfCuriosityChecked = function (value) {
        this.endSemesterReview.semesterLearningIssues.lackOfCuriosity = value;
    };
    EndSemesterModalComponent.prototype.lackOfEffortOrFocusChecked = function (value) {
        this.endSemesterReview.semesterLearningIssues.lackOfEffortOrFocus = value;
    };
    EndSemesterModalComponent.prototype.poorTimeManagementChecked = function (value) {
        this.endSemesterReview.semesterLearningIssues.poorTimeManagement = value;
    };
    EndSemesterModalComponent.prototype.healthIssuesChecked = function (value) {
        this.endSemesterReview.semesterLearningIssues.healthIssues = value;
    };
    EndSemesterModalComponent.prototype.complacenceChecked = function (value) {
        this.endSemesterReview.semesterLearningIssues.complacence = value;
    };
    EndSemesterModalComponent.prototype.employmentHoursChecked = function (value) {
        this.endSemesterReview.semesterLearningIssues.employmentHours = value;
    };
    EndSemesterModalComponent.prototype.otherChecked = function (value) {
        this.endSemesterReview.semesterLearningIssues.other = value;
    };
    EndSemesterModalComponent.prototype.setGrade = function (value) {
        console.log(this.gradeForm.value.gradeControl);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_1__["SemesterReview"])
    ], EndSemesterModalComponent.prototype, "endSemesterReview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EndSemesterModalComponent.prototype, "endSemesterItemSaved", void 0);
    EndSemesterModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-end-semester-modal',
            template: __webpack_require__(/*! ./end-semester-modal.component.html */ "./src/app/course-assessment-worksheet/modals/end-semester-modal/end-semester-modal.component.html"),
            styles: [__webpack_require__(/*! ./end-semester-modal.component.css */ "./src/app/course-assessment-worksheet/modals/end-semester-modal/end-semester-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"]])
    ], EndSemesterModalComponent);
    return EndSemesterModalComponent;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/modals/mid-semester-modal/mid-semester-modal.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/modals/mid-semester-modal/mid-semester-modal.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paddedLabel {\r\n    width: 156px;\r\n}\r\n\r\n.inputCheckmark {\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n    margin-left: 30px;\r\n    margin-right: 50px;\r\n}\r\n\r\n.studentId{\r\n    max-width: 7ch;\r\n}\r\n\r\n.learningIssuesContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.learningIssuesItem {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.searchTitle{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLWFzc2Vzc21lbnQtd29ya3NoZWV0L21vZGFscy9taWQtc2VtZXN0ZXItbW9kYWwvbWlkLXNlbWVzdGVyLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsK0JBQStCO0NBQ2xDOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1hc3Nlc3NtZW50LXdvcmtzaGVldC9tb2RhbHMvbWlkLXNlbWVzdGVyLW1vZGFsL21pZC1zZW1lc3Rlci1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRlZExhYmVsIHtcclxuICAgIHdpZHRoOiAxNTZweDtcclxufVxyXG5cclxuLmlucHV0Q2hlY2ttYXJrIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3R1ZGVudElke1xyXG4gICAgbWF4LXdpZHRoOiA3Y2g7XHJcbn1cclxuXHJcbi5sZWFybmluZ0lzc3Vlc0NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmxlYXJuaW5nSXNzdWVzSXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNlYXJjaFRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/course-assessment-worksheet/modals/mid-semester-modal/mid-semester-modal.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/modals/mid-semester-modal/mid-semester-modal.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add/Edit Mid-Semester Review\n    </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n        <div class=\"searchTitle\">\n          <span class=\"title\">Enter student email address:</span>\n          <span class=\"spanSpacer\"></span>\n          <button class=\"btn btn-lg btn-info\" (click)=\"loadStudent()\" [disabled]=\"!validEmail\">Find Student</button>\n        </div>\n        <input placeholder=\"Enter valid email and click Find Student\" type=\"email\" name=\"studentEmail\" class=\"form-control info\"\n          [(ngModel)]=\"studentEmail\" (ngModelChange)=\"onEmailChange($event)\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"studentName\">Student Name</label><br>\n        <input class=\"form-control\" name=\"studentName\" [(ngModel)]=\"midSemesterReview.student.studentName\" readonly>\n      </div>\n      <div class=\"learningIssuesContainer\">\n        <div class=\"form-group\">\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#1 Course Pace</label>\n            <input class=\"inputCheckmark\" #coursePaceCheckBox id=\"coursePaceCheckBox\" type=\"checkbox\" (change)=\"coursePaceChecked(coursePaceCheckBox.checked)\"\n              [(ngModel)]=\"midSemesterReview.semesterLearningIssues.coursePace\" name=\"coursePace\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#2 Poor Background</label>\n            <input class=\"inputCheckmark\" #poorBackgroundCheckBox id=\"poorBackgroundCheckBox\" type=\"checkbox\" (change)=\"poorBackgroundChecked(poorBackgroundCheckBox.checked)\"\n              [(ngModel)]=\"midSemesterReview.semesterLearningIssues.poorBackground\" name=\"poorBackground\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#3 Mindset</label>\n            <input class=\"inputCheckmark\" #lackOfMindsetCheckBox id=\"lackOfMindsetCheckBox\" type=\"checkbox\" (change)=\"lackOfMindsetChecked(lackOfMindsetCheckBox.checked)\"\n              [(ngModel)]=\"midSemesterReview.semesterLearningIssues.lackOfMindset\" name=\"lackOfMindset\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#4 Interest/Curiosity</label>\n            <input class=\"inputCheckmark\" #lackOfCuriosityCheckBox id=\"lackOfCuriosityCheckBox\" type=\"checkbox\"\n              (change)=\"lackOfCuriosityChecked(lackOfCuriosityCheckBox.checked)\" [(ngModel)]=\"midSemesterReview.semesterLearningIssues.lackOfCuriosity\"\n              name=\"lackOfCuriosity\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#5 Effort/Focus</label>\n            <input class=\"inputCheckmark\" #lackOfEffortOrFocusCheckBox id=\"lackOfEffortOrFocusCheckBox\" type=\"checkbox\"\n              (change)=\"lackOfEffortOrFocusChecked(lackOfEffortOrFocusCheckBox.checked)\" [(ngModel)]=\"midSemesterReview.semesterLearningIssues.lackOfEffortOrFocus\"\n              name=\"lackOfEffortOrFocus\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#6 Time Management</label>\n            <input class=\"inputCheckmark\" #poorTimeManagementCheckBox id=\"poorTimeManagementCheckBox\" type=\"checkbox\"\n              (change)=\"poorTimeManagementChecked(poorTimeManagementCheckBox.checked)\" [(ngModel)]=\"midSemesterReview.semesterLearningIssues.poorTimeManagement\"\n              name=\"poorTimeManagement\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#7 Health Issues</label>\n            <input class=\"inputCheckmark\" #healthIssuesCheckBox id=\"healthIssuesCheckBox\" type=\"checkbox\" (change)=\"healthIssuesChecked(healthIssuesCheckBox.checked)\"\n              [(ngModel)]=\"midSemesterReview.semesterLearningIssues.healthIssues\" name=\"healthIssues\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#8 Complacence</label>\n            <input class=\"inputCheckmark\" #complacenceCheckBox id=\"complacenceCheckBox\" type=\"checkbox\" (change)=\"complacenceChecked(complacenceCheckBox.checked)\"\n              [(ngModel)]=\"midSemesterReview.semesterLearningIssues.complacence\" name=\"complacence\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#9 Employment hours</label>\n            <input class=\"inputCheckmark\" #employmentHoursCheckBox id=\"employmentHoursCheckBox\" type=\"checkbox\"\n              (change)=\"employmentHoursChecked(employmentHoursCheckBox.checked)\" [(ngModel)]=\"midSemesterReview.semesterLearningIssues.employmentHours\"\n              name=\"employmentHours\" ng-true-value=\"'true'\" ng-false-value=\"'false'\">\n          </div>\n          <div class=\"learningIssuesItem\">\n            <label class=\"paddedLabel\">#10 Other</label>\n            <input class=\"inputCheckmark\" #otherCheckBox id=\"otherCheckBox\" type=\"checkbox\" (change)=\"otherChecked(otherCheckBox.checked)\"\n              [(ngModel)]=\"midSemesterReview.semesterLearningIssues.other\" name=\"other\" ng-true-value=\"'true'\"\n              ng-false-value=\"'false'\">\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"semesterInstructorInteractions\">Extent of instructor interactions</label><br>\n        <textarea class=\"form-control\" name=\"semesterInstructorInteractions\" [(ngModel)]=\"midSemesterReview.semesterInstructorInteractions\"\n          rows=\"4\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"semesterInstructorNotes\">Instructor recommendations</label><br>\n        <textarea class=\"form-control\" name=\"semesterInstructorNotes\" [(ngModel)]=\"midSemesterReview.semesterInstructorNotes\"\n          rows=\"4\"></textarea>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-sm btn-outline-dark\" (click)=\"open(content)\">Add/Edit Mid-Semester Review</button>\n<!-- \n<hr>\n\n<pre>{{closeResult}}</pre> -->"

/***/ }),

/***/ "./src/app/course-assessment-worksheet/modals/mid-semester-modal/mid-semester-modal.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/modals/mid-semester-modal/mid-semester-modal.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MidSemesterModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidSemesterModalComponent", function() { return MidSemesterModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/course-semester-evaluation */ "./src/app/course-assessment-worksheet/classes/course-semester-evaluation.ts");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var src_app_site_admin_classes_student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/site-admin/classes/student */ "./src/app/site-admin/classes/student.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MidSemesterModalComponent = /** @class */ (function () {
    function MidSemesterModalComponent(modalService, studentService) {
        this.modalService = modalService;
        this.studentService = studentService;
        this.midSemesterItemSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.midSemesterReview = new _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_2__["SemesterReview"](new src_app_site_admin_classes_student__WEBPACK_IMPORTED_MODULE_4__["Student"](0, '', null, '', '', '', '', '', '', '', '', '', '', ''), '', new _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_2__["SemesterLearningIssues"](false, false, false, false, false, false, false, false, false, false), '', '');
        this.studentEmail = '';
    }
    MidSemesterModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            _this.midSemesterItemSaved.emit(true);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            _this.midSemesterItemSaved.emit(false);
        });
    };
    MidSemesterModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    MidSemesterModalComponent.prototype.loadStudent = function () {
        var _this = this;
        this.studentService.getStudent(this.studentEmail).subscribe(function (student) {
            console.log(student);
            if (student) {
                _this.midSemesterReview.student = student;
            }
        });
    };
    MidSemesterModalComponent.prototype.onEmailChange = function (newValue) {
        var validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validEmailRegEx.test(newValue)) {
            this.validEmail = true;
        }
        else {
            this.validEmail = false;
        }
    };
    MidSemesterModalComponent.prototype.coursePaceChecked = function (value) {
        this.midSemesterReview.semesterLearningIssues.coursePace = value;
    };
    MidSemesterModalComponent.prototype.poorBackgroundChecked = function (value) {
        this.midSemesterReview.semesterLearningIssues.poorBackground = value;
    };
    MidSemesterModalComponent.prototype.lackOfMindsetChecked = function (value) {
        this.midSemesterReview.semesterLearningIssues.lackOfMindset = value;
    };
    MidSemesterModalComponent.prototype.lackOfCuriosityChecked = function (value) {
        this.midSemesterReview.semesterLearningIssues.lackOfCuriosity = value;
    };
    MidSemesterModalComponent.prototype.lackOfEffortOrFocusChecked = function (value) {
        this.midSemesterReview.semesterLearningIssues.lackOfEffortOrFocus = value;
    };
    MidSemesterModalComponent.prototype.poorTimeManagementChecked = function (value) {
        this.midSemesterReview.semesterLearningIssues.poorTimeManagement = value;
    };
    MidSemesterModalComponent.prototype.healthIssuesChecked = function (value) {
        this.midSemesterReview.semesterLearningIssues.healthIssues = value;
    };
    MidSemesterModalComponent.prototype.complacenceChecked = function (value) {
        this.midSemesterReview.semesterLearningIssues.complacence = value;
    };
    MidSemesterModalComponent.prototype.employmentHoursChecked = function (value) {
        this.midSemesterReview.semesterLearningIssues.employmentHours = value;
    };
    MidSemesterModalComponent.prototype.otherChecked = function (value) {
        this.midSemesterReview.semesterLearningIssues.other = value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_course_semester_evaluation__WEBPACK_IMPORTED_MODULE_2__["SemesterReview"])
    ], MidSemesterModalComponent.prototype, "midSemesterReview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MidSemesterModalComponent.prototype, "midSemesterItemSaved", void 0);
    MidSemesterModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mid-semester-modal',
            template: __webpack_require__(/*! ./mid-semester-modal.component.html */ "./src/app/course-assessment-worksheet/modals/mid-semester-modal/mid-semester-modal.component.html"),
            styles: [__webpack_require__(/*! ./mid-semester-modal.component.css */ "./src/app/course-assessment-worksheet/modals/mid-semester-modal/mid-semester-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]])
    ], MidSemesterModalComponent);
    return MidSemesterModalComponent;
}());



/***/ }),

/***/ "./src/app/course-assessment-worksheet/service/course-service.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/course-assessment-worksheet/service/course-service.service.ts ***!
  \*******************************************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_url_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/url-service.service */ "./src/app/services/url-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseService = /** @class */ (function () {
    function CourseService(http, urlService) {
        this.http = http;
        this.urlService = urlService;
    }
    CourseService.prototype.getCourseList = function () {
        return this.http.get(this.urlService.getCourseListURL());
    };
    ;
    CourseService.prototype.archiveCourse = function (courseInformation) {
        var courseInformationId;
        var response = this.http
            .post(this.urlService.getArchiveCourseURL(), courseInformation)
            .subscribe(function (res) {
            console.log(res);
            courseInformationId = res;
        });
        return courseInformationId;
    };
    CourseService.prototype.saveCourse = function (courseAssessment) {
        console.log(courseAssessment);
        var courseAssessmentId = -1;
        var response = this.http
            .put(this.urlService.getSaveCourseURL(), courseAssessment)
            .subscribe(function (res) {
            console.log(res);
            courseAssessment.id = res;
        });
        return courseAssessmentId;
    };
    CourseService.prototype.loadCourse = function (courseId) {
        return this.http.get(this.urlService.getCourseAssessmentURL(courseId));
    };
    CourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_services_url_service_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/individual-learning-record/individual-learning-record.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/individual-learning-record/individual-learning-record.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".individualLearningRecordContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.individualLearningRecordFlexboxRootContainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.itemContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 3px solid #000;\r\n  margin-left: 5px;\r\n  margin-right: 10px;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.semesterReviewTitle {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.semesterReviewTitleText {\r\n  font-weight: bolder;\r\n  min-width: 500px;\r\n}\r\n\r\n.paddedLabel {\r\n  width: 155px;\r\n}\r\n\r\n.input {\r\n  width: 725px;\r\n  margin-left: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.inputCheckmark {\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  margin-left: 50px;\r\n}\r\n\r\n.title {\r\n  font-weight: bolder;\r\n}\r\n\r\n.searchTitle {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.marginBottom {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.saveButton {\r\n  margin: 10px;\r\n}\r\n\r\n.spanSpacer {\r\n  margin-right: 10px;\r\n}\r\n\r\n.dropDownMarginTop {\r\n  margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaXZpZHVhbC1sZWFybmluZy1yZWNvcmQvaW5kaXZpZHVhbC1sZWFybmluZy1yZWNvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUNBQXFDO0NBQ3RDOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaW5kaXZpZHVhbC1sZWFybmluZy1yZWNvcmQvaW5kaXZpZHVhbC1sZWFybmluZy1yZWNvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmRpdmlkdWFsTGVhcm5pbmdSZWNvcmRDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmluZGl2aWR1YWxMZWFybmluZ1JlY29yZEZsZXhib3hSb290Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5pdGVtQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNlbWVzdGVyUmV2aWV3VGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNlbWVzdGVyUmV2aWV3VGl0bGVUZXh0IHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5wYWRkZWRMYWJlbCB7XHJcbiAgd2lkdGg6IDE1NXB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIHdpZHRoOiA3MjVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmlucHV0Q2hlY2ttYXJrIHtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uc2VhcmNoVGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcmdpbkJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnNhdmVCdXR0b24ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnNwYW5TcGFjZXIge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRyb3BEb3duTWFyZ2luVG9wIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/individual-learning-record/individual-learning-record.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/individual-learning-record/individual-learning-record.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"individualLearningRecordFlexboxRootContainer\">\n  <div class=\"itemContainer\">\n    <div class=\"searchTitle\">\n      <span class=\"title\">Biographical Information</span>\n      <span class=\"spanSpacer\"></span>\n      <button class=\"btn btn-lg btn-info\" (click)=\"loadStudent()\" [disabled]=\"!validEmail\">Find Student</button>\n    </div>\n    <div>\n      <span>Please enter a students email:</span><br>\n      <input placeholder=\"Enter valid email and click Find Student\" type=\"email\" class=\"form-control info\" [(ngModel)]=\"studentEmail\"\n        (ngModelChange)=\"onEmailChange($event)\">\n    </div>\n    <div>\n      <span>Full name:</span><br>\n      <input class=\"form-control info\" [(ngModel)]=\"student.studentName\" placeholder=\"{{existingStudent ? '' : 'Load Student to see full name'}}\"\n        readonly>\n    </div>\n    <div>\n      <span>Please enter the students major:</span><br>\n      <input class=\"form-control info\" [(ngModel)]=\"student.studentMajor\" [disabled]=\"!validEmail\" placeholder=\"{{validEmail ? 'New Student, please enter' : 'Load Student to see major'}}\">\n    </div>\n    <div class=\"siteAdminFlexboxColumnContainer\">\n      <div class=\"dropDownMarginTop\">\n        <form [formGroup]=\"semesterForm\">\n          <label for=\"semester\">Graduating Semester:</label>\n          <span class=\"spanSpacer\"></span>\n          <select formControlName=\"semesterControl\" (change)=\"setSemester($event.target.value)\">\n            <option [value]=\"semester\" *ngFor=\"let semester of semesters\"> {{semester}}</option>\n          </select>\n        </form>\n      </div>\n      <div>\n        <form [formGroup]=\"yearForm\">\n          <label for=\"year\">Graduating Year:</label>\n          <span class=\"spanSpacer\"></span>\n          <select formControlName=\"yearControl\" (change)=\"setYear($event.target.value)\">\n            <option [value]=\"year\" *ngFor=\"let year of years\"> {{year}}</option>\n          </select>\n        </form>\n      </div>\n      <div>\n        <img src={{student.file.fileContent}} alt=\"No Image\" height=\"200\" width=\"200\" class=\"img-thumbnail\">\n      </div>\n      <div class=\"dropDownMarginTop\">\n        <label class=\"paddedLabel\">Upload Picture:</label>\n        <input name=\"syllabus\" type=\"file\" [(ngModel)]=\"student.file\" (change)=\"onFileSelected($event)\">\n      </div>\n    </div>\n    <div class=\"searchTitle\">\n      <div class=\"dropDownMarginTop\">\n        <span class=\"title\">Admissions, Placement Information</span>\n      </div>\n    </div>\n    <div>\n      <span>Please enter the students math placement testing results:</span><br>\n      <input class=\"form-control info\" [(ngModel)]=\"student.studentMathGrade\" [disabled]=\"!validEmail\" placeholder=\"{{validEmail ? 'New Student, please enter' : 'Load Student to see math placement'}}\">\n    </div>\n    <div>\n      <span>If applicable, please enter the students sport:</span><br>\n      <input class=\"form-control info\" [(ngModel)]=\"student.studentAthletics\" [disabled]=\"!validEmail\" placeholder=\"{{validEmail ? 'New Student, please enter' : 'Load Student to see athletics'}}\">\n    </div>\n    <div class=\"dropDownMarginTop\">\n      <form [formGroup]=\"housingForm\">\n        <label for=\"housing\">Housing Status:</label>\n        <span class=\"spanSpacer\"></span>\n        <select formControlName=\"housingControl\" (change)=\"setHousing($event.target.value)\">\n          <option [value]=\"status\" *ngFor=\"let status of housingStatus\"> {{status}}</option>\n        </select>\n      </form>\n    </div>\n    <div>\n      <span>If applicable, please enter the students honors institute:</span><br>\n      <input class=\"form-control info\" [(ngModel)]=\"student.studentHonors\" [disabled]=\"!validEmail\" placeholder=\"{{validEmail ? 'New Student, please enter' : 'Load Student to see honors institute'}}\">\n    </div>\n    <div>\n      <span>If applicable, please enter the students home country:</span><br>\n      <input class=\"form-control info\" [(ngModel)]=\"student.internationalStudent\" [disabled]=\"!validEmail\" placeholder=\"{{validEmail ? 'New Student, please enter' : 'Load Student to see home country'}}\">\n    </div>\n    <div class=\"saveButton\">\n      <button class=\"btn btn-lg btn-dark\" (click)=\"saveStudent()\" [disabled]=\"!validEmail\">Save Student</button>\n    </div>\n  </div>\n\n  <!--Semester Notes-->\n  <div class=\"itemContainer\">\n    <table class=\"table table-hover\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th *ngFor=\"let head of headElements\" scope=\"col\">{{head}}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let el of elements\">\n          <th scope=\"row\">{{el.id}}</th>\n          <td>{{el.first}}</td>\n          <td>{{el.last}}</td>\n          <td>{{el.handle}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"marginBottom\"></div>\n<!--spacer for footer -->"

/***/ }),

/***/ "./src/app/individual-learning-record/individual-learning-record.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/individual-learning-record/individual-learning-record.component.ts ***!
  \************************************************************************************/
/*! exports provided: IndividualLearningRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualLearningRecordComponent", function() { return IndividualLearningRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _site_admin_classes_student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../site-admin/classes/student */ "./src/app/site-admin/classes/student.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _course_assessment_worksheet_classes_file_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course-assessment-worksheet/classes/file-storage */ "./src/app/course-assessment-worksheet/classes/file-storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndividualLearningRecordComponent = /** @class */ (function () {
    function IndividualLearningRecordComponent(studentService, fb) {
        this.studentService = studentService;
        this.fb = fb;
        this.elements = [
            { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
            { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
            { id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
        ];
        this.headElements = ['Course/Sec #', 'Semester & Year', 'Instructor', 'Semester Reviews'];
        this.resetStudent();
        this.semesters = new Array();
        this.years = new Array();
        this.housingStatus = new Array();
        this.semsterReviewsbyCourse = new Array();
    }
    IndividualLearningRecordComponent.prototype.resetStudent = function () {
        this.student = new _site_admin_classes_student__WEBPACK_IMPORTED_MODULE_1__["Student"](0, '', null, '', '', '', '', '', '', '', '', '', '', '');
        this.studentLoaded = false;
    };
    IndividualLearningRecordComponent.prototype.ngOnInit = function () {
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
    };
    IndividualLearningRecordComponent.prototype.loadSemesters = function () {
        this.semesters = ['Fall', 'Spring', 'Summer'];
        var currentYear = (new Date()).getFullYear();
        this.years.push(currentYear.toString());
        this.years.push((currentYear + 1).toString());
        this.years.push((currentYear + 2).toString());
        this.years.push((currentYear + 3).toString());
        this.housingStatus.push("Resident");
        this.housingStatus.push("Commuter");
    };
    IndividualLearningRecordComponent.prototype.onEmailChange = function (newValue) {
        this.resetStudent();
        var validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validEmailRegEx.test(newValue)) {
            this.validEmail = true;
        }
        else {
            this.validEmail = false;
        }
    };
    IndividualLearningRecordComponent.prototype.loadStudent = function () {
        var _this = this;
        this.student.emailAddress = this.studentEmail;
        this.studentService.getStudent(this.student.emailAddress).subscribe(function (student) {
            console.log(student);
            if (student) {
                _this.resetStudent();
                _this.student = student;
                _this.studentLoaded = true;
                if (_this.student.studentYear) {
                    var i = 0;
                    for (i = 0; i < _this.years.length; i++) {
                        if (_this.years[i] == _this.student.studentYear) {
                            _this.selectedYear = _this.student.studentYear;
                            break;
                        }
                    }
                    _this.yearForm = _this.fb.group({
                        yearControl: _this.years[i]
                    });
                }
                if (_this.student.studentSemester) {
                    var i = 0;
                    for (i = 0; i < _this.years.length; i++) {
                        if (_this.semesters[i] == _this.student.studentSemester) {
                            _this.selectedSemester = _this.student.studentSemester;
                            break;
                        }
                    }
                    _this.semesterForm = _this.fb.group({
                        semesterControl: _this.semesters[i]
                    });
                }
                if (_this.student.studentHousingStatus) {
                    var i = 0;
                    for (i = 0; i < _this.years.length; i++) {
                        if (_this.housingStatus[i] == _this.student.studentHousingStatus) {
                            _this.selectedHousingStatus = _this.student.studentHousingStatus;
                            break;
                        }
                    }
                    _this.housingForm = _this.fb.group({
                        housingControl: _this.housingStatus[i]
                    });
                }
                _this.studentService.getStudentSemesterReviews(_this.student).subscribe(function (semsterReviewsbyCourse) {
                    _this.semsterReviewsbyCourse = semsterReviewsbyCourse;
                    console.log(_this.semsterReviewsbyCourse);
                });
            }
            else {
                _this.resetStudent();
            }
        });
    };
    IndividualLearningRecordComponent.prototype.saveStudent = function () {
        this.student.emailAddress = this.studentEmail;
        this.student.studentSemester = this.selectedSemester;
        this.student.studentYear = this.selectedYear;
        this.student.studentHousingStatus = this.selectedHousingStatus;
        console.log(this.student);
        this.studentService.saveStudent(this.student);
        this.validEmail = false;
    };
    IndividualLearningRecordComponent.prototype.setYear = function (value) {
        this.selectedYear = value;
    };
    IndividualLearningRecordComponent.prototype.setSemester = function (value) {
        this.selectedSemester = value;
    };
    IndividualLearningRecordComponent.prototype.setHousing = function (value) {
        this.selectedHousingStatus = value;
    };
    IndividualLearningRecordComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        var selectedPhoto = event.target.files[0];
        var fileReader = new FileReader();
        var fileStorage = new _course_assessment_worksheet_classes_file_storage__WEBPACK_IMPORTED_MODULE_4__["FileStorage"](0, "", "", "");
        if (fileReader && selectedPhoto) {
            fileStorage.fileName = selectedPhoto.name;
            fileStorage.fileType = selectedPhoto.type;
            fileReader.onload = function () {
                fileStorage.fileContent = fileReader.result.toString();
            };
            fileReader.readAsDataURL(selectedPhoto);
            this.sleep(300).then(function () {
                _this.student.file = {
                    id: _this.student.file.id,
                    fileContent: fileStorage.fileContent,
                    fileName: fileStorage.fileName,
                    fileType: fileStorage.fileType
                };
                console.log(_this.student.file);
            });
        }
        else {
            this.student.file = new _course_assessment_worksheet_classes_file_storage__WEBPACK_IMPORTED_MODULE_4__["FileStorage"](0, '', '', '');
        }
    };
    IndividualLearningRecordComponent.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    IndividualLearningRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individual-learning-record',
            template: __webpack_require__(/*! ./individual-learning-record.component.html */ "./src/app/individual-learning-record/individual-learning-record.component.html"),
            styles: [__webpack_require__(/*! ./individual-learning-record.component.css */ "./src/app/individual-learning-record/individual-learning-record.component.css")]
        }),
        __metadata("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], IndividualLearningRecordComponent);
    return IndividualLearningRecordComponent;
}());



/***/ }),

/***/ "./src/app/services/course-information.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/course-information.service.ts ***!
  \********************************************************/
/*! exports provided: CourseInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseInformationService", function() { return CourseInformationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _url_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-service.service */ "./src/app/services/url-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseInformationService = /** @class */ (function () {
    function CourseInformationService(http, urlService) {
        this.http = http;
        this.urlService = urlService;
    }
    CourseInformationService.prototype.deleteCourseInformation = function (courseInformation) {
        return this.http.delete(this.urlService.deleteCourseInformationURL(courseInformation.id)).subscribe(function (res) {
            console.log(res);
        });
    };
    CourseInformationService.prototype.saveCourseInformation = function (courseInformation) {
        var courseInformationId = -1;
        this.http
            .put(this.urlService.saveCourseInformationURL(), courseInformation)
            .subscribe(function (res) {
            console.log(res);
        });
        return courseInformationId;
    };
    CourseInformationService.prototype.getCourseInformation = function (courseNumberAndSection, semester, year) {
        return this.http.get(this.urlService.getcourseNumberAndSectionURL(courseNumberAndSection, semester, year));
    };
    CourseInformationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _url_service_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"]])
    ], CourseInformationService);
    return CourseInformationService;
}());



/***/ }),

/***/ "./src/app/services/instructor.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/instructor.service.ts ***!
  \************************************************/
/*! exports provided: InstructorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorService", function() { return InstructorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url-service.service */ "./src/app/services/url-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstructorService = /** @class */ (function () {
    function InstructorService(http, urlService) {
        this.http = http;
        this.urlService = urlService;
    }
    InstructorService.prototype.deleteInstructor = function (instructor) {
        return this.http.delete(this.urlService.deleteInstructorURL(instructor.id)).subscribe(function (res) {
            console.log(res);
        });
    };
    InstructorService.prototype.saveInstructor = function (instructor) {
        var instructorId = -1;
        this.http
            .put(this.urlService.saveInstructorURL(), instructor)
            .subscribe(function (res) {
            console.log(res);
        });
        return instructorId;
    };
    InstructorService.prototype.getInstructor = function (emailAddress) {
        return this.http.get(this.urlService.getInstructorURL(emailAddress));
    };
    InstructorService.prototype.getInstructorList = function () {
        return this.http.get(this.urlService.getInstructorsURL());
    };
    InstructorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _url_service_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"]])
    ], InstructorService);
    return InstructorService;
}());



/***/ }),

/***/ "./src/app/services/student.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _url_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-service.service */ "./src/app/services/url-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentService = /** @class */ (function () {
    function StudentService(http, urlService) {
        this.http = http;
        this.urlService = urlService;
    }
    StudentService.prototype.getStudent = function (emailAddress) {
        return this.http.get(this.urlService.getStudentURL(emailAddress));
    };
    StudentService.prototype.saveStudent = function (student) {
        var studentId = -1;
        this.http
            .put(this.urlService.saveStudentURL(), student)
            .subscribe(function (res) {
            studentId = res;
        });
        return studentId;
    };
    StudentService.prototype.deleteStudent = function (student) {
        return this.http.delete(this.urlService.deleteStudentURL(student.id)).subscribe(function (res) {
            console.log(res);
        });
    };
    StudentService.prototype.getStudentSemesterReviews = function (student) {
        return this.http.get(this.urlService.getStudentSemesterReviewsURL(student.id));
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _url_service_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/services/url-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/url-service.service.ts ***!
  \*************************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UrlService = /** @class */ (function () {
    function UrlService() {
        this.baseUrl = "http://localhost:8080";
    }
    UrlService.prototype.getSaveCourseURL = function () {
        return this.baseUrl + '/courseAssessment';
    };
    UrlService.prototype.getSaveEndSemesterReviewURL = function (courseId) {
        return this.baseUrl + '/endSemesterReview/' + courseId;
    };
    UrlService.prototype.getSaveMidSemesterReviewURL = function (courseId) {
        return this.baseUrl + '/midSemesterReview/' + courseId;
    };
    UrlService.prototype.getCourseAssessmentURL = function (courseId) {
        return this.baseUrl + '/courseAssessment/' + courseId;
    };
    UrlService.prototype.getStudentURL = function (emailAddress) {
        return this.baseUrl + '/student/' + emailAddress;
    };
    UrlService.prototype.saveStudentURL = function () {
        return this.baseUrl + '/student';
    };
    UrlService.prototype.deleteStudentURL = function (id) {
        return this.baseUrl + '/student/' + id;
    };
    UrlService.prototype.deleteInstructorURL = function (id) {
        return this.baseUrl + '/instructor/' + id;
    };
    UrlService.prototype.saveInstructorURL = function () {
        return this.baseUrl + '/instructor';
    };
    UrlService.prototype.getInstructorURL = function (emailAddress) {
        return this.baseUrl + '/instructor/' + emailAddress;
    };
    UrlService.prototype.getInstructorsURL = function () {
        return this.baseUrl + '/instructor';
    };
    UrlService.prototype.getcourseNumberAndSectionURL = function (courseNumberAndSection, semester, year) {
        return this.baseUrl + '/courseInformation/' + courseNumberAndSection + '/' + semester + '/' + year;
    };
    UrlService.prototype.saveCourseInformationURL = function () {
        return this.baseUrl + '/courseInformation';
    };
    UrlService.prototype.deleteCourseInformationURL = function (id) {
        return this.baseUrl + '/courseInformation/' + id;
    };
    UrlService.prototype.getCourseListURL = function () {
        return this.baseUrl + '/courseInformation';
    };
    UrlService.prototype.getArchiveCourseURL = function () {
        return this.baseUrl + '/courseInformation/archive';
    };
    UrlService.prototype.getFileURL = function (id) {
        return this.baseUrl + '/file/' + id;
    };
    UrlService.prototype.addFileURL = function () {
        return this.baseUrl + '/file';
    };
    UrlService.prototype.getStudentSemesterReviewsURL = function (id) {
        return this.baseUrl + '/student/semesterReviews/' + id;
    };
    UrlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UrlService);
    return UrlService;
}());



/***/ }),

/***/ "./src/app/site-admin/classes/instructor.ts":
/*!**************************************************!*\
  !*** ./src/app/site-admin/classes/instructor.ts ***!
  \**************************************************/
/*! exports provided: Instructor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instructor", function() { return Instructor; });
var Instructor = /** @class */ (function () {
    function Instructor(id, name, emailAddress) {
        this.id = id;
        this.name = name;
        this.emailAddress = emailAddress;
    }
    return Instructor;
}());



/***/ }),

/***/ "./src/app/site-admin/classes/student.ts":
/*!***********************************************!*\
  !*** ./src/app/site-admin/classes/student.ts ***!
  \***********************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student(id, studentName, file, studentMajor, studentYear, studentSemester, studentMathGrade, studentAthletics, studentHousingStatus, studentHonors, internationalStudent, emailAddress, time, author) {
        this.id = id;
        this.studentName = studentName;
        this.file = file;
        this.studentMajor = studentMajor;
        this.studentYear = studentYear;
        this.studentSemester = studentSemester;
        this.studentMathGrade = studentMathGrade;
        this.studentAthletics = studentAthletics;
        this.studentHousingStatus = studentHousingStatus;
        this.studentHonors = studentHonors;
        this.internationalStudent = internationalStudent;
        this.emailAddress = emailAddress;
        this.time = time;
        this.author = author;
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/site-admin/components/archive-course/archive-course.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/site-admin/components/archive-course/archive-course.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".siteAdminFlexboxRowContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.siteAdminFlexboxColumnContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.itemContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 3px solid #000;\r\n    margin-left: 5px;\r\n    margin-right: 10px;\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.title {\r\n    font-weight: bolder;\r\n}\r\n\r\n.italics{\r\n    font-style: italic;\r\n}\r\n\r\n.saveButton {\r\n    margin: 10px;\r\n}\r\n\r\n.spanSpacer {\r\n    margin-right: 10px;\r\n}\r\n\r\n.selectorMargin {\r\n    margin-top: 5px;\r\n}\r\n\r\n.spaceAroundDropDowns {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS1hZG1pbi9jb21wb25lbnRzL2FyY2hpdmUtY291cnNlL2FyY2hpdmUtY291cnNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFDQUFxQztDQUN4Qzs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9zaXRlLWFkbWluL2NvbXBvbmVudHMvYXJjaGl2ZS1jb3Vyc2UvYXJjaGl2ZS1jb3Vyc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlQWRtaW5GbGV4Ym94Um93Q29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uc2l0ZUFkbWluRmxleGJveENvbHVtbkNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLml0ZW1Db250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uaXRhbGljc3tcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnNhdmVCdXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uc3BhblNwYWNlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3Rvck1hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zcGFjZUFyb3VuZERyb3BEb3ducyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/site-admin/components/archive-course/archive-course.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/site-admin/components/archive-course/archive-course.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"courseInfoAndChangesFlexboxRootContainer\">\n  <div class=\"itemContainer\">\n    <span class=\"title\">Course Information</span>\n    <div>\n      <label class=\"paddedLabel\">Course Section/#:</label>\n      <span class=\"spanSpacer\"></span>\n      <select [(ngModel)]=\"selectedCourse\">\n        <option [ngValue]=\"course\" *ngFor=\"let course of courseList\"> {{course.courseNumberSection}} ->\n          {{course.semester}}, {{course.year}}</option>\n      </select>\n    </div>\n    <div>\n      <label class=\"paddedLabel\">Semester & Year:</label>\n      <span class=\"spanSpacer\"></span>\n      <span>{{selectedCourse.semester}} {{selectedCourse.year}} </span>\n    </div>\n    <div>\n      <label class=\"paddedLabel\">Course Title:</label>\n      <span class=\"spanSpacer\"></span>\n      <span>{{selectedCourse.courseTitle}}</span>\n    </div>\n    <div>\n      <label class=\"paddedLabel\">Instructor:</label>\n      <span class=\"spanSpacer\"></span>\n      <span>{{selectedCourse.instructor.name}}</span>\n    </div>\n    <div class=\"saveButton\">\n      <button class=\"btn btn-lg btn-dark\" (click)=\"archiveCourse()\">Archive Course</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/site-admin/components/archive-course/archive-course.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/site-admin/components/archive-course/archive-course.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ArchiveCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveCourseComponent", function() { return ArchiveCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_course_assessment_worksheet_classes_course_information__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/course-assessment-worksheet/classes/course-information */ "./src/app/course-assessment-worksheet/classes/course-information.ts");
/* harmony import */ var src_app_course_assessment_worksheet_service_course_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/course-assessment-worksheet/service/course-service.service */ "./src/app/course-assessment-worksheet/service/course-service.service.ts");
/* harmony import */ var _classes_instructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/instructor */ "./src/app/site-admin/classes/instructor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArchiveCourseComponent = /** @class */ (function () {
    function ArchiveCourseComponent(courseService) {
        this.courseService = courseService;
        this.selectedCourse = new src_app_course_assessment_worksheet_classes_course_information__WEBPACK_IMPORTED_MODULE_1__["CourseInformation"](0, '', null, '', '', '', false, new _classes_instructor__WEBPACK_IMPORTED_MODULE_3__["Instructor"](0, '', ''));
        this.courseList = new Array();
    }
    ArchiveCourseComponent.prototype.ngOnInit = function () {
        this.loadCourseInformationList();
    };
    ArchiveCourseComponent.prototype.loadCourseInformationList = function () {
        var _this = this;
        this.courseList = new Array();
        this.courseService.getCourseList().subscribe(function (courses) {
            for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
                var course = courses_1[_i];
                if (!course.archived) {
                    _this.courseList.push(course);
                }
            }
            _this.courseList = _this.courseList.sort(function (a, b) {
                if (a.id < b.id) {
                    return -1;
                }
                else if (a.id > b.id) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.selectedCourse = _this.courseList[0];
        });
    };
    ArchiveCourseComponent.prototype.archiveCourse = function () {
        this.courseService.archiveCourse(this.selectedCourse);
        this.loadCourseInformationList();
    };
    ArchiveCourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archive-course',
            template: __webpack_require__(/*! ./archive-course.component.html */ "./src/app/site-admin/components/archive-course/archive-course.component.html"),
            styles: [__webpack_require__(/*! ./archive-course.component.css */ "./src/app/site-admin/components/archive-course/archive-course.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_course_assessment_worksheet_service_course_service_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]])
    ], ArchiveCourseComponent);
    return ArchiveCourseComponent;
}());



/***/ }),

/***/ "./src/app/site-admin/components/course-information-admin/course-information-admin.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/site-admin/components/course-information-admin/course-information-admin.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".siteAdminFlexboxRowContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.siteAdminFlexboxColumnContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.itemContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 3px solid #000;\r\n    margin-left: 5px;\r\n    margin-right: 10px;\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.title {\r\n    font-weight: bolder;\r\n}\r\n\r\n.italics{\r\n    font-style: italic;\r\n}\r\n\r\n.saveButton {\r\n    margin: 10px;\r\n}\r\n\r\n.spanSpacer {\r\n    margin-right: 10px;\r\n}\r\n\r\n.selectorMargin {\r\n    margin-top: 5px;\r\n}\r\n\r\n.spaceAroundDropDowns {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.flexGrowOne {\r\n    flex-grow: 1;\r\n}\r\n\r\n.flexGrowTwo {\r\n    flex-grow: 2;\r\n}\r\n\r\n.searchTitle {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS1hZG1pbi9jb21wb25lbnRzL2NvdXJzZS1pbmZvcm1hdGlvbi1hZG1pbi9jb3Vyc2UtaW5mb3JtYXRpb24tYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUNBQXFDO0NBQ3hDOztBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2l0ZS1hZG1pbi9jb21wb25lbnRzL2NvdXJzZS1pbmZvcm1hdGlvbi1hZG1pbi9jb3Vyc2UtaW5mb3JtYXRpb24tYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlQWRtaW5GbGV4Ym94Um93Q29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uc2l0ZUFkbWluRmxleGJveENvbHVtbkNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLml0ZW1Db250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uaXRhbGljc3tcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnNhdmVCdXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uc3BhblNwYWNlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3Rvck1hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zcGFjZUFyb3VuZERyb3BEb3ducyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4R3Jvd09uZSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5mbGV4R3Jvd1R3byB7XHJcbiAgICBmbGV4LWdyb3c6IDI7XHJcbn1cclxuXHJcbi5zZWFyY2hUaXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/site-admin/components/course-information-admin/course-information-admin.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/site-admin/components/course-information-admin/course-information-admin.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"siteAdminFlexboxRowContainer\">\n  <div class=\"itemContainer\">\n    <div class=\"searchTitle\">\n      <div>\n        <span class=\"title\">Add/Edit Course Information:</span><br>\n        <span class=\"italics\">Must be unique by course/section + semester + year</span>\n      </div>\n      <span class=\"spanSpacer\"></span>\n      <button class=\"btn btn-lg btn-info\" (click)=\"loadCourseInformation()\" [disabled]=\"!validCourseSection\">Find\n        Course Information</button>\n    </div>\n    <div class=\"selectorMargin\">\n      <div class=\"spaceAroundDropDowns\">\n        <div class=\"flexGrowTwo\">\n          <span>Please add/edit course and section:</span><br>\n          <input placeholder=\"Enter one word like 'CSCI4098'\" type=\"email\" class=\"form-control info\" [(ngModel)]=\"courseSection\"\n            (ngModelChange)=\"onCourseSectionChange($event)\">\n        </div>\n        <span class=\"spanSpacer\"></span>\n        <div class=\"siteAdminFlexboxColumnContainer\">\n          <div>\n            <form [formGroup]=\"semesterForm\">\n              <label for=\"semester\">Select Semester:</label>\n              <span class=\"spanSpacer\"></span>\n              <select formControlName=\"semesterControl\" (change)=\"setSemester($event.target.value)\">\n                <option [value]=\"semester\" *ngFor=\"let semester of semesters\"> {{semester}}</option>\n              </select>\n            </form>\n          </div>\n          <div>\n            <form [formGroup]=\"yearForm\">\n              <label for=\"year\">Select Year:</label>\n              <span class=\"spanSpacer\"></span>\n              <select formControlName=\"yearControl\" (change)=\"setYear($event.target.value)\">\n                <option [value]=\"year\" *ngFor=\"let year of years\"> {{year}}</option>\n              </select>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div>\n      <span>Please enter course title:</span><br>\n      <input class=\"form-control info\" [(ngModel)]=\"courseInformation.courseTitle\" (ngModelChange)=\"onNameChange()\"\n        placeholder=\"{{existingCourseInformation ? '' : 'New Course Information, please add full name'}}\">\n    </div>\n    <div class=\"selectorMargin\">\n      <div class=\"form-group\">\n        <form [formGroup]=\"instructorForm\">\n          <label for=\"instructor\">Select Instructor:</label>\n          <select formControlName=\"instructorControl\" (change)=\"setInstructor($event.target.value)\">\n            <option [value]=\"instructor.id\" *ngFor=\"let instructor of instructors\"> {{instructor.name}}</option>\n          </select>\n        </form>\n      </div>\n    </div>\n    <div>\n      <label class=\"paddedLabel\">Upload Syllabus:</label>\n      <input name=\"syllabus\" type=\"file\" [(ngModel)]=\"courseInformation.syllabus\" (change)=\"onFileSelected($event)\">\n    </div>\n    <div class=\"saveButton\">\n      <button class=\"btn btn-lg btn-dark\" (click)=\"saveCourseInformation()\" [disabled]=\"!validCourseSection\">Save\n        Course Information</button>\n      <span class=\"spanSpacer\"></span>\n      <button class=\"btn btn-lg btn-danger\" (click)=\"deleteCourseInformation()\" [disabled]=\"!courseInformationLoaded\">Delete\n        Course Information</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/site-admin/components/course-information-admin/course-information-admin.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/site-admin/components/course-information-admin/course-information-admin.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CourseInformationAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseInformationAdminComponent", function() { return CourseInformationAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_course_assessment_worksheet_classes_course_information__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/course-assessment-worksheet/classes/course-information */ "./src/app/course-assessment-worksheet/classes/course-information.ts");
/* harmony import */ var src_app_services_course_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/course-information.service */ "./src/app/services/course-information.service.ts");
/* harmony import */ var src_app_services_instructor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/instructor.service */ "./src/app/services/instructor.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_course_assessment_worksheet_classes_file_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/course-assessment-worksheet/classes/file-storage */ "./src/app/course-assessment-worksheet/classes/file-storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseInformationAdminComponent = /** @class */ (function () {
    function CourseInformationAdminComponent(courseInformationService, instructorService, fb) {
        this.courseInformationService = courseInformationService;
        this.instructorService = instructorService;
        this.fb = fb;
        this.resetCourseSection();
        this.instructors = new Array();
        this.semesters = new Array();
        this.years = new Array();
    }
    CourseInformationAdminComponent.prototype.resetCourseSection = function () {
        this.courseInformation = new src_app_course_assessment_worksheet_classes_course_information__WEBPACK_IMPORTED_MODULE_1__["CourseInformation"](0, '', null, '', '', '', false, null);
        this.existingCourseSection = true;
        this.courseSectionLoaded = false;
    };
    CourseInformationAdminComponent.prototype.ngOnInit = function () {
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
    };
    CourseInformationAdminComponent.prototype.loadSemesters = function () {
        this.semesters = ['Fall', 'Spring', 'Summer'];
        var currentYear = (new Date()).getFullYear();
        this.years.push(currentYear.toString());
        this.years.push((currentYear + 1).toString());
        this.years.push((currentYear + 2).toString());
    };
    CourseInformationAdminComponent.prototype.loadInstructorList = function () {
        var _this = this;
        this.instructorService.getInstructorList().subscribe(function (instructor) {
            _this.instructors = instructor.sort(function (a, b) {
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
    };
    CourseInformationAdminComponent.prototype.onCourseSectionChange = function (newValue) {
        this.resetCourseSection();
        if (newValue && newValue.length) {
            this.validCourseSection = true;
        }
        else {
            this.validCourseSection = false;
        }
    };
    CourseInformationAdminComponent.prototype.loadCourseInformation = function () {
        var _this = this;
        this.courseInformation.courseNumberSection = this.courseSection;
        this.courseInformation.semester = this.selectedSemester;
        this.courseInformation.year = this.selectedYear;
        this.courseInformationService.getCourseInformation(this.courseInformation.courseNumberSection, this.courseInformation.semester, this.courseInformation.year).subscribe(function (courseInformation) {
            console.log(courseInformation);
            if (courseInformation) {
                _this.resetCourseSection();
                _this.courseInformation = courseInformation;
                _this.courseSectionLoaded = true;
            }
            else {
                _this.resetCourseSection();
                _this.existingCourseSection = false;
            }
        });
    };
    CourseInformationAdminComponent.prototype.saveCourseInformation = function () {
        this.courseInformation.courseNumberSection = this.courseSection;
        this.courseInformation.instructor = this.selectedInstructor;
        this.courseInformation.semester = this.selectedSemester;
        this.courseInformation.year = this.selectedYear;
        this.courseInformationService.saveCourseInformation(this.courseInformation);
        this.validCourseSection = false;
    };
    CourseInformationAdminComponent.prototype.onNameChange = function () {
        if (this.validCourseSection) {
            this.existingCourseSection = false;
        }
    };
    CourseInformationAdminComponent.prototype.deleteCourseInformation = function () {
        this.courseInformation.courseNumberSection = this.courseSection;
        this.courseInformationService.deleteCourseInformation(this.courseInformation);
        this.resetCourseSection();
        this.validCourseSection = false;
    };
    CourseInformationAdminComponent.prototype.setInstructor = function (value) {
        this.selectedInstructor = this.instructors.find(function (item) { return item.id == value; });
    };
    CourseInformationAdminComponent.prototype.setYear = function (value) {
        this.selectedYear = value;
    };
    CourseInformationAdminComponent.prototype.setSemester = function (value) {
        this.selectedSemester = value;
    };
    CourseInformationAdminComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        var selectedPhoto = event.target.files[0];
        var fileReader = new FileReader();
        var fileStorage = new src_app_course_assessment_worksheet_classes_file_storage__WEBPACK_IMPORTED_MODULE_5__["FileStorage"](0, "", "", "");
        if (fileReader && selectedPhoto) {
            fileStorage.fileName = selectedPhoto.name;
            fileStorage.fileType = selectedPhoto.type;
            fileReader.onload = function () {
                fileStorage.fileContent = fileReader.result.toString();
            };
            fileReader.readAsDataURL(selectedPhoto);
            this.sleep(300).then(function () {
                _this.courseInformation.syllabus = {
                    id: _this.courseInformation.syllabus.id,
                    fileContent: fileStorage.fileContent,
                    fileName: fileStorage.fileName,
                    fileType: fileStorage.fileType
                };
                console.log(_this.courseInformation.syllabus);
            });
        }
        else {
            this.courseInformation.syllabus = new src_app_course_assessment_worksheet_classes_file_storage__WEBPACK_IMPORTED_MODULE_5__["FileStorage"](0, '', '', '');
        }
    };
    CourseInformationAdminComponent.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    CourseInformationAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-information-admin',
            template: __webpack_require__(/*! ./course-information-admin.component.html */ "./src/app/site-admin/components/course-information-admin/course-information-admin.component.html"),
            styles: [__webpack_require__(/*! ./course-information-admin.component.css */ "./src/app/site-admin/components/course-information-admin/course-information-admin.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_course_information_service__WEBPACK_IMPORTED_MODULE_2__["CourseInformationService"], src_app_services_instructor_service__WEBPACK_IMPORTED_MODULE_3__["InstructorService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CourseInformationAdminComponent);
    return CourseInformationAdminComponent;
}());



/***/ }),

/***/ "./src/app/site-admin/components/instructor-admin/instructor-admin.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/site-admin/components/instructor-admin/instructor-admin.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".siteAdminFlexboxRowContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.itemContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 3px solid #000;\r\n    margin-left: 5px;\r\n    margin-right: 10px;\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.title {\r\n    font-weight: bolder;\r\n}\r\n\r\n.saveButton {\r\n    margin: 10px;\r\n}\r\n\r\n.spanSpacer {\r\n    margin-right: 10px;\r\n}\r\n\r\n.searchTitle{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS1hZG1pbi9jb21wb25lbnRzL2luc3RydWN0b3ItYWRtaW4vaW5zdHJ1Y3Rvci1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFDQUFxQztDQUN4Qzs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9zaXRlLWFkbWluL2NvbXBvbmVudHMvaW5zdHJ1Y3Rvci1hZG1pbi9pbnN0cnVjdG9yLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZUFkbWluRmxleGJveFJvd0NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLml0ZW1Db250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uc2F2ZUJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5zcGFuU3BhY2VyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaFRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/site-admin/components/instructor-admin/instructor-admin.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/site-admin/components/instructor-admin/instructor-admin.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"siteAdminFlexboxRowContainer\">\n    <div class=\"itemContainer\">\n      <div class=\"searchTitle\">\n        <span class=\"title\">Add/Edit Instructor:</span>\n        <span class=\"spanSpacer\"></span>\n        <button class=\"btn btn-lg btn-info\" (click)=\"loadInstructor()\" [disabled]=\"!validEmail\">Find Instructor</button>\n      </div>\n      <div>\n        <span>Please add/edit email:</span><br>\n        <input placeholder=\"Enter valid email and click Find Instructor\" type=\"email\" class=\"form-control info\" [(ngModel)]=\"instructorEmail\"\n          (ngModelChange)=\"onEmailChange($event)\">\n      </div>\n      <div>\n        <span>Please enter instructor full name:</span><br>\n        <input class=\"form-control info\" [(ngModel)]=\"instructor.name\" (ngModelChange)=\"onNameChange()\" placeholder=\"{{existingInstructor ? '' : 'New Instructor, please add full name'}}\">\n      </div>\n      <div class=\"saveButton\">\n        <button class=\"btn btn-lg btn-dark\" (click)=\"saveInstructor()\" [disabled]=\"!validEmail\">Save Instructor</button>\n        <span class=\"spanSpacer\"></span>\n        <button class=\"btn btn-lg btn-danger\" (click)=\"deleteInstructor()\" [disabled]=\"!instructorLoaded\">Delete Instructor</button>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/site-admin/components/instructor-admin/instructor-admin.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/site-admin/components/instructor-admin/instructor-admin.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InstructorAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorAdminComponent", function() { return InstructorAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_instructor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/instructor.service */ "./src/app/services/instructor.service.ts");
/* harmony import */ var _classes_instructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/instructor */ "./src/app/site-admin/classes/instructor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstructorAdminComponent = /** @class */ (function () {
    function InstructorAdminComponent(instructorService) {
        this.instructorService = instructorService;
        this.resetInstructor();
    }
    InstructorAdminComponent.prototype.resetInstructor = function () {
        this.instructor = new _classes_instructor__WEBPACK_IMPORTED_MODULE_2__["Instructor"](0, '', '');
        this.existingInstructor = true;
        this.instructorLoaded = false;
    };
    InstructorAdminComponent.prototype.ngOnInit = function () {
    };
    InstructorAdminComponent.prototype.onEmailChange = function (newValue) {
        this.resetInstructor();
        var validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validEmailRegEx.test(newValue)) {
            this.validEmail = true;
        }
        else {
            this.validEmail = false;
        }
    };
    InstructorAdminComponent.prototype.loadInstructor = function () {
        var _this = this;
        this.instructor.emailAddress = this.instructorEmail;
        this.instructorService.getInstructor(this.instructor.emailAddress).subscribe(function (instructor) {
            console.log(instructor);
            if (instructor) {
                _this.resetInstructor();
                _this.instructor = instructor;
                _this.instructorLoaded = true;
            }
            else {
                _this.resetInstructor();
                _this.existingInstructor = false;
            }
        });
    };
    InstructorAdminComponent.prototype.saveInstructor = function () {
        this.instructor.emailAddress = this.instructorEmail;
        this.instructorService.saveInstructor(this.instructor);
        this.validEmail = false;
    };
    InstructorAdminComponent.prototype.onNameChange = function () {
        if (this.validEmail) {
            this.existingInstructor = false;
        }
    };
    InstructorAdminComponent.prototype.deleteInstructor = function () {
        this.instructor.emailAddress = this.instructorEmail;
        this.instructorService.deleteInstructor(this.instructor);
        this.resetInstructor();
        this.validEmail = false;
    };
    InstructorAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instructor-admin',
            template: __webpack_require__(/*! ./instructor-admin.component.html */ "./src/app/site-admin/components/instructor-admin/instructor-admin.component.html"),
            styles: [__webpack_require__(/*! ./instructor-admin.component.css */ "./src/app/site-admin/components/instructor-admin/instructor-admin.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_instructor_service__WEBPACK_IMPORTED_MODULE_1__["InstructorService"]])
    ], InstructorAdminComponent);
    return InstructorAdminComponent;
}());



/***/ }),

/***/ "./src/app/site-admin/components/student-admin/student-admin.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/site-admin/components/student-admin/student-admin.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".siteAdminFlexboxRowContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.itemContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 3px solid #000;\r\n    margin-left: 5px;\r\n    margin-right: 10px;\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.title {\r\n    font-weight: bolder;\r\n}\r\n\r\n.saveButton {\r\n    margin: 10px;\r\n}\r\n\r\n.spanSpacer {\r\n    margin-right: 10px;\r\n}\r\n\r\n.searchTitle{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS1hZG1pbi9jb21wb25lbnRzL3N0dWRlbnQtYWRtaW4vc3R1ZGVudC1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFDQUFxQztDQUN4Qzs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9zaXRlLWFkbWluL2NvbXBvbmVudHMvc3R1ZGVudC1hZG1pbi9zdHVkZW50LWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZUFkbWluRmxleGJveFJvd0NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLml0ZW1Db250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uc2F2ZUJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5zcGFuU3BhY2VyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaFRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/site-admin/components/student-admin/student-admin.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/site-admin/components/student-admin/student-admin.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"siteAdminFlexboxRowContainer\">\n  <div class=\"itemContainer\">\n    <div class=\"searchTitle\">\n      <span class=\"title\">Add/Edit Student:</span>\n      <span class=\"spanSpacer\"></span>\n      <button class=\"btn btn-lg btn-info\" (click)=\"loadStudent()\" [disabled]=\"!validEmail\">Find Student</button>\n    </div>\n    <div>\n      <span>Please add/edit email:</span><br>\n      <input placeholder=\"Enter valid email and click Find Student\" type=\"email\" class=\"form-control info\" [(ngModel)]=\"studentEmail\"\n        (ngModelChange)=\"onEmailChange($event)\">\n    </div>\n    <div>\n      <span>Please enter student full name:</span><br>\n      <input class=\"form-control info\" [(ngModel)]=\"student.studentName\" (ngModelChange)=\"onNameChange()\" placeholder=\"{{existingStudent ? '' : 'New Student, please add full name'}}\">\n    </div>\n    <div class=\"saveButton\">\n      <button class=\"btn btn-lg btn-dark\" (click)=\"saveStudent()\" [disabled]=\"!validEmail\">Save Student</button>\n      <span class=\"spanSpacer\"></span>\n      <button class=\"btn btn-lg btn-danger\" (click)=\"deleteStudent()\" [disabled]=\"!studentLoaded\">Delete Student</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/site-admin/components/student-admin/student-admin.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/site-admin/components/student-admin/student-admin.component.ts ***!
  \********************************************************************************/
/*! exports provided: StudentAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAdminComponent", function() { return StudentAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/student */ "./src/app/site-admin/classes/student.ts");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/student.service */ "./src/app/services/student.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentAdminComponent = /** @class */ (function () {
    function StudentAdminComponent(studentService) {
        this.studentService = studentService;
        this.resetStudent();
    }
    StudentAdminComponent.prototype.resetStudent = function () {
        this.student = new _classes_student__WEBPACK_IMPORTED_MODULE_1__["Student"](0, '', null, '', '', '', '', '', '', '', '', '', '', '');
        this.existingStudent = true;
        this.studentLoaded = false;
    };
    StudentAdminComponent.prototype.ngOnInit = function () {
    };
    StudentAdminComponent.prototype.onEmailChange = function (newValue) {
        this.resetStudent();
        var validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validEmailRegEx.test(newValue)) {
            this.validEmail = true;
        }
        else {
            this.validEmail = false;
        }
    };
    StudentAdminComponent.prototype.loadStudent = function () {
        var _this = this;
        this.student.emailAddress = this.studentEmail;
        this.studentService.getStudent(this.student.emailAddress).subscribe(function (student) {
            console.log(student);
            if (student) {
                _this.resetStudent();
                _this.student = student;
                _this.studentLoaded = true;
            }
            else {
                _this.resetStudent();
                _this.existingStudent = false;
            }
        });
    };
    StudentAdminComponent.prototype.saveStudent = function () {
        this.student.emailAddress = this.studentEmail;
        console.log(this.student);
        this.studentService.saveStudent(this.student);
        this.validEmail = false;
    };
    StudentAdminComponent.prototype.onNameChange = function () {
        if (this.validEmail) {
            this.existingStudent = false;
        }
    };
    StudentAdminComponent.prototype.deleteStudent = function () {
        this.student.emailAddress = this.studentEmail;
        this.studentService.deleteStudent(this.student);
        this.resetStudent();
        this.validEmail = false;
    };
    StudentAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-admin',
            template: __webpack_require__(/*! ./student-admin.component.html */ "./src/app/site-admin/components/student-admin/student-admin.component.html"),
            styles: [__webpack_require__(/*! ./student-admin.component.css */ "./src/app/site-admin/components/student-admin/student-admin.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], StudentAdminComponent);
    return StudentAdminComponent;
}());



/***/ }),

/***/ "./src/app/site-admin/site-admin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/site-admin/site-admin.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".siteAdminContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.rowContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.marginBottom {\r\n    margin-bottom: 50px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS1hZG1pbi9zaXRlLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG9CQUFvQjtHQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NpdGUtYWRtaW4vc2l0ZS1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpdGVBZG1pbkNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJvd0NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm1hcmdpbkJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/site-admin/site-admin.component.html":
/*!******************************************************!*\
  !*** ./src/app/site-admin/site-admin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"siteAdminContainer\">\n  <div class=\"rowContainer\">\n    <app-student-admin></app-student-admin>\n    <app-instructor-admin></app-instructor-admin>\n  </div>\n  <app-course-information-admin></app-course-information-admin>\n  <app-archive-course></app-archive-course>\n  <div class=\"marginBottom\"></div>\n<!--spacer for footer -->\n</div>\n"

/***/ }),

/***/ "./src/app/site-admin/site-admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/site-admin/site-admin.component.ts ***!
  \****************************************************/
/*! exports provided: SiteAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteAdminComponent", function() { return SiteAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteAdminComponent = /** @class */ (function () {
    function SiteAdminComponent() {
    }
    SiteAdminComponent.prototype.ngOnInit = function () {
    };
    SiteAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-admin',
            template: __webpack_require__(/*! ./site-admin.component.html */ "./src/app/site-admin/site-admin.component.html"),
            styles: [__webpack_require__(/*! ./site-admin.component.css */ "./src/app/site-admin/site-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteAdminComponent);
    return SiteAdminComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-company-red {\r\n    background-color: #831917;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNvbXBhbnktcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzE5MTc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-company-red fixed-bottom\">\r\n  <div class=\"navbar-expand m-auto navbar-text\">\r\n    Made by\r\n    <a href=\"https://www.laroche.edu/Academics/Academic_Divisions/Natural_and_Behavioral_Sciences_Division/COMPUTER_SCIENCE/Degrees_and_Certificates/?pid=16\" target=\"_blank\">\r\n      CS Capstone 2017-2018  </a>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-company-red {\r\n    background-color: #831917;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNvbXBhbnktcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzE5MTc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-company-red\">\r\n  <div class=\"navbar-expand mr-auto\">\r\n    <div class=\"navbar-nav\">\r\n      <a class=\"nav-item nav-link\" routerLink=\"courseAssessmentWorksheet\">Course Assessment Form</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"individualLearningRecord\">Individual Learning Record</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"siteAdmin\">Admin</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"courseArchive\">Archive</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"navbar-expand ml-auto navbar-nav\">\r\n    <div class=\"navbar-nav\">\r\n      <a class=\"nav-item nav-link\" href=\"https://twitter.com/larochecollege\" target=\"_blank\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n      </a>\r\n      <a class=\"nav-item nav-link\" href=\"https://laroche.edu/\" target=\"_blank\">\r\n        <i class=\"fa fa-graduation-cap\"></i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/layout/layout.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/ui/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git\la-roche-course-assessment-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map