import { SubjectResult } from "./subjectResult.class";

export class ExamResult {
  // it also have a arry of subjectResult
  private results: SubjectResult[] = [];
  constructor(private studentId: string) {}

  // what methods it can have ??

  // add result to array
  addResult(result: SubjectResult) {
    this.results.push(result);
  }
  // get result
  getResult() {
    return this.results;
  }

  // gettotalmarkss
  getTotalMarks(){
    return this.results.reduce((total , result) => total + result.getMarks(),0)
  }

  getTotalMaxMarks(){
    return this.results.reduce((total,result)=> total + result.getMaxMarks(),0)
  }
  // get percentage
  getPercentage(){
    const totalMarks = this.getTotalMarks()
    const totalMaxMarks = this.getTotalMaxMarks()

    // now we will just multiply this with 100 to get the percentage 
    return (totalMarks/totalMaxMarks) * 100
}

}


