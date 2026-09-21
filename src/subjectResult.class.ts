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

  getPercentage(){
    const percentageScored = (this.marksObtained/this.maxMarks) * 100
    return percentageScored
  }



  // like we can create it more dynamic like it auto fetch the max marks like we can give some refrence to the examSubject object here 
  // or we can just simply give hard coded value by default like the maxMarks will always b 100 or lets leave it for now lets keep going 
  // we can do this laterrr
}




// now we can create a result array where all the results are stored for all the subjects and student