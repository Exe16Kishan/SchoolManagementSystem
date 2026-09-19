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

// or if i remeber we can also do this like this

export { ClassType, StudentType, SubjectType, TeacherType };
