
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

export default Student