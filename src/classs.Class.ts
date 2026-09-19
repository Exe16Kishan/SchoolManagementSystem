
import {  StudentType,TeacherType,SubjectType} from "./types";

class Class{
  name: number;
  students: StudentType[];
  teacher: TeacherType[];
  subjects: SubjectType[];

  constructor(name:number){
    this.name = name
    this.students =[]
    this.subjects = []
    this.teacher = []

  }


}

export default Class


