import { Attendace } from "./attendance.class";
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

  addStudent(studentDetail: StudentType): Student {
    const newStudent = new Student(studentDetail);
    this.students.push(newStudent);
    return newStudent
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
    const teacherIndex = this.teachers.findIndex(
      (i) => i.teacherId == teacherId,
    );

    // now we have to add the teacher in that class's index
    this.classes.at(classIndex)?.assignTeacher(teacherId);
    this.teachers.at(teacherIndex)?.assignClass(className);
  }

  addClass(name: number):Class {
    const newClass = new Class(name);
    this.classes.push(newClass);
    return newClass
  }

  // add subject method
  addSubject(subject: SubjectType) {
    const newSubject = new Subject(subject);
    const teacherName = this.getTeacherBySubject(newSubject.subjectName);
    newSubject.setTeacher(teacherName);
    this.subjects.push(newSubject);
  }

  getTeacherBySubject(subjectName: string): string {
    const teacherWithSubject = this.teachers.filter(
      (teacher) =>
        teacher.subjects.includes(subjectName) && teacher.classes.length < 3,
    );
    console.log("teacher by subject ", teacherWithSubject);
    if (!teacherWithSubject) {
      throw new Error("no teacher found");
    }
    return teacherWithSubject[0]?.name;
  }

   markAttendance(className: number) : Attendace {
    // get the object
    let classObj = this.classes.find((i) => i.name === className);
    // lets put a check here to satisfy the ts
    if (!classObj) {
      throw new Error("no class found with this name");
    }
    return  new Attendace(classObj, this.students);
    
  }
}
export default School;

// lets create mark attendance system

// so how it works ??
/***
 * so lets say that there is global lvl attendace system
 * where teacher can access the attendance and can mark the attendance
 * so for that we can create a array of objects or simply a hash map for that
 * or just take the value from the class itself
 *
 *
 * lets thinkkkk how we can create like we can create a object where we can details of all the students or how many are presents weekly
 *
 */

// Mark attendance (class) -> we can filter that class and get the student's array -> and from that array , in the studentArray we can store the objects (not gonna recommend we can use id instead but still we gonna use those id to get the student object so lets keep things simple and use the objects of the students ) - > and from that object we gonna mark the attendance of that day for the students side ,

// and for teacher they can just count the heads and mark the total students on that day
// now what i think we should make some changes to the student type
