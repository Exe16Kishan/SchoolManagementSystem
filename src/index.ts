type Class = {
  name: number;
  students: Student[];
  teacher: Teacher[];
  subjects: Subject[];
};

type Student = {
  studentId: string;
  name: string;
  age: number;
  class: number;
  attendance: number;
};

type Teacher = {
  teacherId: number;
  name: string;
  subjects: string[];
  classes: number[]; // class names are numbers
};

type Subject = {
  subjectId: string;
  subjectName: string;
  Teacher: string;
  classes: number[];
};

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
}



const school1 = School.instance()


console.log(school1)
