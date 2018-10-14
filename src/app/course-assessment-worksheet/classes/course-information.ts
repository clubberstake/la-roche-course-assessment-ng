import { FileStorage } from "./file-storage";

export class CourseInformation {
    constructor(public classId: number, public courseId: number,
        public courseNumberAndSection: string, public syllabus: FileStorage,
        public semester: string,
        public courseTitle: string, public instructorName: string) { }
}