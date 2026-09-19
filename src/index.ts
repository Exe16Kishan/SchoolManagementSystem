
import School from "./school.Class";
import Class from "./classs.Class";
import Student from "./student.Class";








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

console.log(school1);

// lets cleanup and use other classes as well
// like we are creating other obejcts using class



// lets create a class 


const class12 = new Class(12)
console.log(class12)
