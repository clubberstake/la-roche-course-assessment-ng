import { FileStorage } from "src/app/course-assessment-worksheet/classes/file-storage";

export class Student {
    constructor(public id: number,
        public studentName: String,
        public file: FileStorage,
        public studentMajor: String,
        public studentYear: String,
        public studentSemester: String,
        public studentMathGrade: String,
        public studentAthletics: String,
        public studentHousingStatus: String,
        public studentHonors: String,
        public internationalStudent: String,
        public emailAddress: String,
        public time: String,
        public author: String) { }
}
