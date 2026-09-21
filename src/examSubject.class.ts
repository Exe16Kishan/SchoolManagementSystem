import Subject from "./subject.Class";

export class ExamSubject {
  constructor(
    private subject: Subject,
    private maxMarks: number,
    private minMarks: number,
  ) {}

  // lets set getter setter methods 

  getMaxMarks(){
    return this.maxMarks
  }

  getMinMarks(){
    return this.minMarks
  }
}
