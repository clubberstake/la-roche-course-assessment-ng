export class CourseSemesterEvaluation {
    constructor(semesterReviews: SemesterReview[]) { }
}

export class SemesterReview {
    constructor(studentId: Number, studentName: String, semesterLearningIssues: SemesterLearningIssues,
        semesterInstructorInteractions: String, semesterInstructorNotes: String) { }
}

export class SemesterLearningIssues {
    constructor(coursePace: Boolean, lackOfMindset: Boolean, lackOfCuriosity: Boolean,
        lackOfEffortOrFocus: Boolean, poorTimeManagement: Boolean, healthIssues: Boolean,
        complacence: Boolean, employmentHours: Boolean, other: Boolean) { }
}
