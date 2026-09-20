import Class from "./classs.Class";
import Student from "./student.Class";
import { attendanceType } from "./types";

export class Attendace {
  days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  constructor(
    private classObj: Class,
    private students: Student[],
  ) {}

  getStudents() {
    const studentIds = this.classObj.students
    const students = this.students.filter(i=> studentIds.includes(i.studentId) )
    return students;
  }
  markAbsent(studentId: string) {
    // we got the student
    let student = this.students.find((i) => i.studentId === studentId);
    if (!student) {
      throw new Error("no student found with this id");
    }
    // or we can just pass right now
    let today = this.getWeekDay().toLowerCase() as keyof attendanceType;
    // mark it absent
    student.attendance[today] = false;
  }
  markPresent(studentId: string) {
    // we got the student
    let student = this.students.find((i) => i.studentId === studentId);
    if (!student) {
      throw new Error("no student found with this id");
    }
    // or we can just pass right now
    let today = this.getWeekDay().toLowerCase() as keyof attendanceType;
    // mark it present
    student.attendance[today] = true;
  }

  getWeekDay() {
    const d = new Date();
    let day = this.days[d.getDay()];
    return day;
  }
}

// we also have to get the refrence of the student class here like we are doing extra here
// we should have kept object of students in the class instead of the ids
// for now lets get the students array to in the constructor

// lets follow what we decided like we can do like this also we can create a attendance class
// and it have a refrence of the class object

// it can have methods like mark absent , mark present like this and what else we can add ??

// so in the mark attendance we will give a class name , like class 12
