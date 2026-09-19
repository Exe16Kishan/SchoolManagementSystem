import { TeacherType } from "./types";

class Teacher {
  teacherId: number;
  name: string;
  subjects: string[];
  classes: number[];

  constructor({classes,name,subjects,teacherId}:TeacherType){
    this.teacherId = teacherId,
    this.name = name ,
    this.subjects = subjects ,
    this.classes = classes
  }
}

export default Teacher