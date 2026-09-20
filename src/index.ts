import Class from "./classs.Class";
import School from "./school.Class";
import Student from "./student.Class";
import { SubjectType, TeacherType } from "./types";

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
  classes : [11,12,5]  
};

const aman: TeacherType = {
  teacherId: "aman123",
  name: "aman",
  subjects : ["maths","science","sst"],
  classes : [2,4]  
};

const shubham: TeacherType = {
  teacherId: "shubham123",
  name: "shubham",
  subjects : ["english"],
  classes : [1]  
};

school1.addTeacher(aakarsh)
school1.addTeacher(aman)
school1.addTeacher(shubham)

// lets assign the teacher to the class 

school1.assignTeacherToClass("aakarsh123",11)



// lets create a dummy subjects let say maths and science 

const maths:SubjectType = {
subjectId:"123",
subjectName:"maths",
classes : [11,12],
Teacher : ""  // should we give name or id ????
}

// i got an idea we can change the object in the method only or we can write a method in the object to get the properties

// lets see

school1.addSubject(maths) // we are getting the subject

// school1.getTeacherBySubject("maths") 


console.dir(school1,{depth:null});

