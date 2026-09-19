import { TeacherType } from "./types";

class Teacher {
  teacherId: string;
  name: string;
  subjects: string[];
  classes: number[];

  constructor(classes:number[],name:string,subjects:string[],teacherId:string){
    this.teacherId = teacherId,
    this.name = name ,
    this.subjects = subjects ,
    this.classes = classes
  }
}

export default Teacher