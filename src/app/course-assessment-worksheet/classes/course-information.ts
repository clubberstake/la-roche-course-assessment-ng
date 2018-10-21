import { FileStorage } from "./file-storage";
import { Instructor } from "src/app/site-admin/classes/instructor";

export class CourseInformation {
    constructor(public id: number,
        public courseNumberSection: string, public syllabus: FileStorage,
        public semester: string, public year: string,
        public courseTitle: string, public archived: boolean, public instructor: Instructor) { }
}