import { FileStorage } from "./file-storage";

export class CourseInformation {
    constructor(public classId: number, public courseId: number,
        public courseNumber: string, public syllabus: FileStorage,
        public section: string, public semester: string,
        public courseTitle: string, public instructorName: string) { }
}