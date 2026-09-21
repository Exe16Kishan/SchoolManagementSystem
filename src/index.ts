import Class from "./classs.Class";
import { Exam } from "./exam.class";
import { ExamSubject } from "./examSubject.class";
import School from "./school.Class";
import Student from "./student.Class";
import Subject from "./subject.Class";
import { StudentType, SubjectType, TeacherType } from "./types";

// dummy data jsut to check
let kishan: StudentType = {
  studentId: "1234",
  name: "kishan",
  age: 12,
  class: 12,
  
};

let sonal: StudentType = {
  studentId: "5678",
  name: "sonal",
  age: 12,
  class: 12
};
const school1 = School.instance();

// add students
let student1 = school1.addStudent(kishan);
let student2 = school1.addStudent(sonal);

// lets add students to class 12


// remove students
// school1.removeStudent("5678"); // its working


// lets cleanup and use other classes as well
// like we are creating other obejcts using class

// lets create a class
school1.addClass(11)
let class12= school1.addClass(12)
class12.assignStudent(student1.studentId)
class12.assignStudent(student2.studentId)

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

const science:SubjectType = {
subjectId:"456",
subjectName:"science",
classes : [11,12],
Teacher : ""  // should we give name or id ????
}

// i got an idea we can change the object in the method only or we can write a method in the object to get the properties

// lets see

school1.addSubject(maths) // we are getting the subject
school1.addSubject(science)
// school1.getTeacherBySubject("maths") 

const newAttendance = school1.markAttendance(12)
// so now lets marks the attendance
newAttendance.markPresent("1234")
newAttendance.markPresent("5678")


// so the attendance system is working lets say sonal did came to class but he didnt completed the class and left before 
// so im marking him absent

newAttendance.markAbsent("5678")



// lets create a exam for class 12 

const examClass12 = new Exam(12,"midterm")


const Maths = school1.getSubjectByName("maths")
const Science = school1.getSubjectByName("science")

const mathsSubForExam = new ExamSubject(Maths,100,50)
const scienceSubForExam = new ExamSubject(Science,100,50)

examClass12.addSubject(mathsSubForExam)
examClass12.addSubject(scienceSubForExam)




console.log(examClass12)
// console.log("students of class 12 : ",newAttendance.getStudents())
console.dir(school1,{depth:null});





// tip:  plan before about everything like what each entity will do 
// it can save your so muchh time 











