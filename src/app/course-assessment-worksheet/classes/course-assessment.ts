import { Cafs1Info } from "./cafs1-info";
import { SemesterReview } from "./course-semester-evaluation";
import { Cafs2Info } from "./cafs2-info";
import { Cafs3Info } from "./cafs3-info";
import { Cafs6Info } from "./cafs6-info";
import { CourseInformation } from "./course-information";
import { CourseSLOs } from "./course-SLOs";

export class CourseAssessment {
    constructor(public id: number, public courseInformation: CourseInformation, public courseSLOs: CourseSLOs, public cafs1Info: Cafs1Info, public cafs2Info: Cafs2Info,
        public cafs3Info: Cafs3Info, public cafs6Info: Cafs6Info,
        public midSemesterReviews: Array<SemesterReview>, public endSemesterReviews: Array<SemesterReview>) { }
}