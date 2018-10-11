export class CourseSemesterEvaluation {
    constructor(semesterReviews: SemesterReview[]) { }
}

export class SemesterReview {
    constructor(public studentId: Number, public grade: String, public studentName: String, public semesterLearningIssues: SemesterLearningIssues,
        public semesterInstructorInteractions: String, public semesterInstructorNotes: String) { }
}

export class SemesterLearningIssues {
    constructor(public coursePace: Boolean, public lackOfMindset: Boolean, public lackOfCuriosity: Boolean,
        public lackOfEffortOrFocus: Boolean, public poorTimeManagement: Boolean, public healthIssues: Boolean,
        public complacence: Boolean, public employmentHours: Boolean, public other: Boolean) { }
}
