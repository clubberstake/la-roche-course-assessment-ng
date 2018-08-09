export class CourseSemesterEvaluation {
    constructor(semesterReviews: SemesterReview[]) { }
}

export class SemesterReview {
    constructor(studentId: Number, studentName: String, midSemesterLearningIssues: SemesterLearningIssues,
        endSemesterLearningIssues: SemesterLearningIssues, midSemesterInstructorInteractions: String,
        endSemesterInstructorInteractions: String, midSemesterInstructorNotes: String,
        endSemesterInstructorNotes: String) { }
}

export class SemesterLearningIssues {
    constructor(coursePace: Boolean, lackOfMindset: Boolean, lackOfCuriosity: Boolean,
        lackOfEffortOrFocus: Boolean, poorTimeManagement: Boolean, healthIssues: Boolean,
        complacence: Boolean, employmentHours: Boolean, other: Boolean) { }
}
