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
  teacherId: string;
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

type attendanceType = {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
};

// or if i remeber we can also do this like this

export { ClassType, StudentType, SubjectType, TeacherType ,attendanceType };
