import Class from "./classs.Class";
import Student from "./student.Class";
import Subject from "./subject.Class";
import Teacher from "./teacher.Class";
import { StudentType, SubjectType, TeacherType } from "./types";

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
    const newStudent = new Student(studentDetail);
    // console.log(newStudent)

    this.students.push(newStudent);
  }

  removeStudent(studentId: string) {
    let index = this.students.findIndex(
      (student) => student.studentId == studentId,
    );
    this.students.splice(index, 1);
  }

  addTeacher(teacherDetail: TeacherType) {
    const { classes, name, teacherId, subjects } = teacherDetail;
    const newTeacher = new Teacher(classes, name, subjects, teacherId);
    // console.log(newTeacher)
    this.teachers.push(newTeacher);
  }

  assignTeacherToClass(teacherId: string, className: number) {
    // so lets add aakarsh to class11 as teacher
    const classIndex = this.classes.findIndex((i) => i.name == className);
    const teacherIndex = this.teachers.findIndex((i)=>i.teacherId == teacherId)

    // now we have to add the teacher in that class's index
    this.classes.at(classIndex)?.assignTeacher(teacherId);
    this.teachers.at(teacherIndex)?.assignClass(className);
  }

  addClass(name: number) {
    const newClass = new Class(name);
    this.classes.push(newClass);
  }

  // add subject method 
  addSubject(subject:SubjectType){
    const newSubject = new Subject(subject)
    const teacherName = this.getTeacherBySubject(newSubject.subjectName)
    newSubject.setTeacher(teacherName)
    this.subjects.push(newSubject)
  }

  getTeacherBySubject(subjectName:string):string{
    const teacherWithSubject = this.teachers.filter((teacher)=> teacher.subjects.includes(subjectName) && teacher.classes.length < 3) 
    console.log("teacher by subject ",teacherWithSubject)
    if (!teacherWithSubject) {
      return " no teacher found"
    }
    return teacherWithSubject[0]?.name
  }



}
export default School;
