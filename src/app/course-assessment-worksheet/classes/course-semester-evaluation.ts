import { Student } from "src/app/site-admin/classes/student";

export class CourseSemesterEvaluation {
    constructor(semesterReviews: SemesterReview[]) { }
}

export class SemesterReview {
    constructor(public student: Student, public grade: String, public semesterLearningIssues: SemesterLearningIssues,
        public semesterInstructorInteractions: String, public semesterInstructorNotes: String) { }
}

export class SemesterLearningIssues {
    constructor(public coursePace: Boolean, public poorBackground: Boolean, public lackOfMindset: Boolean, public lackOfCuriosity: Boolean,
        public lackOfEffortOrFocus: Boolean, public poorTimeManagement: Boolean, public healthIssues: Boolean,
        public complacence: Boolean, public employmentHours: Boolean, public other: Boolean) { }
}
