import { ExamSubject } from "./examSubject.class";

export class Exam {
  className: number;
  Name: string; // like CA , mid terms or end terms
  subjects: ExamSubject[] = []; // currently empty

  constructor(className: number, name: string) {
    this.className = className;
    this.Name = name;
  }

  addSubject(examSubject: ExamSubject) {
    // just push the subject into the array
    this.subjects.push(examSubject);
  }

  // lets check is it working like we expected or not
}

// lets also create a exam subject like we can add the criteria
// like name , max marks , min marks
