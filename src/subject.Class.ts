import { SubjectType } from "./types";

class Subject{
  subjectId: string;
  subjectName: string;
  Teacher: string;
  classes: number[];

  constructor({Teacher,classes,subjectId,subjectName}:SubjectType){
    this.subjectId= subjectId
    this.subjectName = subjectName
    this.Teacher = Teacher
    this.classes = classes  
  }
}

export default Subject