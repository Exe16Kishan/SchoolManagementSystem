import Class from "./classs.Class";
import Student from "./student.Class";
import Subject from "./subject.Class";
import Teacher from "./teacher.Class";
import { ClassType,SubjectType,StudentType,TeacherType } from "./types";


class School {
  private static schoolInstance: School;

  classes: Class[] = [];
  students: Student[] = [];
  teachers: Teacher[] = [];
  subjects: Subject[] = [];
  private constructor() {} 

  static instance(): School {
    if (!School.schoolInstance) {
      School.schoolInstance = new School();
    }
    return this.schoolInstance;
  }

  addStudent(studentDetail: StudentType): void {
    const newStudent = new Student(studentDetail)
    // console.log(newStudent)

    this.students.push(newStudent);
  }

  removeStudent(studentId: string) {
    let index = this.students.findIndex(
      (student) => student.studentId == studentId,
    );
    this.students.splice(index, 1);
  }

  addTeacher(teacherDetail:TeacherType){
      const {classes,name,teacherId,subjects}=teacherDetail
      const newTeacher = new Teacher(classes,name,subjects,teacherId)
      // console.log(newTeacher)
      this.teachers.push(newTeacher)
  }

  assignTeacherToClass(teacherId:string , className : number){
    // so lets add aakarsh to class11 as teacher 
    const index = this.classes.findIndex((i)=> i.name == className )
    // now we have to add the teacher in that class's index

    this.classes.at(index)?.assignTeacher(teacherId) 
  
  }


  addClass(name:number){
    const newClass = new Class(name)
    this.classes.push(newClass)
  }
}
export default School


// there are no method to add the class so lets create it quickkkk