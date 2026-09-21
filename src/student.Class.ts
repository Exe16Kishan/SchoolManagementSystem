import { attendanceType, StudentType } from "./types";

class Student {
  studentId: string;
  name: string;
  age: number;
  class: number;
  attendance: attendanceType = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  };
  
  constructor({ studentId, age, class: std, name }: StudentType) {
    ((this.studentId = studentId),
      (this.name = name),
      (this.age = age),
      (this.class = std));
  }

  // like we can add some methods later
}

export default Student;



