import { SubjectType } from "./types";

class Subject{
  subjectId: string;
  subjectName: string;
  Teacher: string;
  classes: number[];

  constructor({classes,subjectId,subjectName}:SubjectType){
    this.subjectId= subjectId
    this.subjectName = subjectName
    this.Teacher = ""
    this.classes = classes  
  }

  setTeacher(teacherName:string){
    this.Teacher=teacherName
  }
}

export default Subject