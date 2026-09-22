import Subject from "./subject.Class";

export class SubjectResult {
  constructor(
    private subject: Subject,
    private marksObtained: number,
    private maxMarks: number,
  ) {}

  // getMarks 
  getMarks(){
    return this.marksObtained
  }

  getMaxMarks(){
    return this.maxMarks
  }

  getPercentage(){
    const percentageScored = (this.marksObtained/this.maxMarks) * 100
    return percentageScored
  }
}

