import Class from "./classs.Class";
import School from "./school.Class";
import Student from "./student.Class";
import { TeacherType } from "./types";

// dummy data jsut to check
let student1: Student = {
  studentId: "1234",
  name: "kishan",
  age: 12,
  class: 6,
};

let student2: Student = {
  studentId: "5678",
  name: "sonal",
  age: 12,
  class: 6,
};
const school1 = School.instance();

// add students
school1.addStudent(student1);
school1.addStudent(student2);

// remove students
school1.removeStudent("5678"); // its working


// lets cleanup and use other classes as well
// like we are creating other obejcts using class

// lets create a class
school1.addClass(11)
school1.addClass(12)

// lets create a teacher

const aakarsh: TeacherType = {
  teacherId: "aakarsh123",
  name: "aakarsh",
  subjects : ["maths","science","sst"],
  classes : []  
};

const aman: TeacherType = {
  teacherId: "aman123",
  name: "aman",
  subjects : ["maths","science","sst"],
  classes : []  
};

school1.addTeacher(aakarsh)
school1.addTeacher(aman)

// lets assign the teacher to the class 

school1.assignTeacherToClass("aakarsh123",11)

console.log(school1);