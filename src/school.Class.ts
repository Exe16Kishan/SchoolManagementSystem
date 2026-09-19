import { ClassType,SubjectType,StudentType,TeacherType } from "./types";


class School {
  private static schoolInstance: School;

  classes: ClassType[] = [];
  students: StudentType[] = [];
  teachers: TeacherType[] = [];
  subjects: SubjectType[] = [];
  private constructor() {}

  static instance(): School {
    if (!School.schoolInstance) {
      School.schoolInstance = new School();
    }
    return this.schoolInstance;
  }

  addStudent(studentDetail: StudentType): void {
    this.students.push(studentDetail);
  }

  removeStudent(studentId: string) {
    let index = this.students.findIndex(
      (student) => student.studentId == studentId,
    );
    this.students.splice(index, 1);
  }
}
export default School



