import { FileStorage } from "./file-storage";
import { Instructor } from "./instructor";

export class CourseInformation {
    constructor(public id: number,
        public courseNumberAndSection: string, public syllabus: FileStorage,
        public semester: string,
        public courseTitle: string, public instructor: Instructor) { }
}