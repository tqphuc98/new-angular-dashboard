import { StudentService } from './../student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {
  student: Student;
  students: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {alert("Vui lòng nhập tên")
    return;}
    const newStudent: Student = new Student();
    newStudent.name = name;
    this.studentService.addStudent(newStudent).subscribe(newStudent => {
      this.students.push(newStudent)
    })
  }
}
