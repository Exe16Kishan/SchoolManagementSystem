
class Class{
  name: number;
  students: string[];
  teacher: string[];
  subjects: string[];

  constructor(name:number){
    this.name = name
    this.students =[]
    this.subjects = []
    this.teacher = []
  }

 

  assignTeacher (teacherId:string){
    this.teacher.push(teacherId)
  }

  assignStudent (studentId:string){
    this.students.push(studentId)
  }

  assignSubject (subjectName:string ) {
    this.subjects.push(subjectName)
  }

}

export default Class


