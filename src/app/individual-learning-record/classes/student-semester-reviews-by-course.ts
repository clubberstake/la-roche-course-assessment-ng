import { CourseInformation } from "src/app/course-assessment-worksheet/classes/course-information";
import { SemesterReview } from "src/app/course-assessment-worksheet/classes/course-semester-evaluation";

export class StudentSemesterReviewsByCourse {
    constructor(public courseInformation: CourseInformation,
        public semesterReviews: Array<SemesterReview>) { }
}
