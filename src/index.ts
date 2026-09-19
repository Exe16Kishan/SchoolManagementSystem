type ClassType = {
  name: number;
  students: StudentType[];
  teacher: TeacherType[];
  subjects: SubjectType[];
};

type StudentType = {
  studentId: string;
  name: string;
  age: number;
  class: number;
};

type TeacherType = {
  teacherId: number;
  name: string;
  subjects: string[];
  classes: number[]; // class names are numbers
};

type SubjectType = {
  subjectId: string;
  subjectName: string;
  Teacher: string;
  classes: number[];
};

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

  addStudent(studentDetail: Student): void {
    this.students.push(studentDetail);
  }

  removeStudent(studentId: string) {
    let index = this.students.findIndex(
      (student) => student.studentId == studentId,
    );
    this.students.splice(index, 1);
  }
}

class Student {
  studentId: string;
  name: string;
  age: number;
  class: number;
  constructor({ studentId, age, class: std, name }: Student) {
    ((this.studentId = studentId),
      (this.name = name),
      (this.age = age),
      (this.class = std));
  }

  // like we can add some methods later
}

class Teacher {
  teacherId: number;
  name: string;
  subjects: string[];
  classes: number[];

  constructor({classes,name,subjects,teacherId}:TeacherType){
    this.teacherId = teacherId,
    this.name = name ,
    this.subjects = subjects ,
    this.classes = classes
  }
}

class Class{
  name: number;
  students: StudentType[];
  teacher: TeacherType[];
  subjects: SubjectType[];

  constructor(name:number){
    this.name = name
    this.students =[]
    this.subjects = []
    this.teacher = []

  }


}

class Subject{
  subjectId: string;
  subjectName: string;
  Teacher: string;
  classes: number[];

  constructor({Teacher,classes,subjectId,subjectName}:SubjectType){
    this.subjectId= subjectId
    this.subjectName = subjectName
    this.Teacher = Teacher
    this.classes = classes  
  }
}

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
