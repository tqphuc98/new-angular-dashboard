import { StudentService } from './../student.service';
import { Student } from './../student';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements  OnInit {
 
  students: Student[];
  selectedStudent: Student;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudent()
  }
  // Lấy dữ liệu
  getStudent(): void {
    this.studentService.getStudent().subscribe(students => this.students = students) 
  }
  onSelect(student: Student): void {
    this.selectedStudent = student
  }
  // Sửa dữ liệu
  edit(): void {
    this.studentService.updateStudent(this.selectedStudent).subscribe()
  }
  // Thêm dữ liệu
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
// Xoá dữ liệu
delete(studentId: number): void {
  this.studentService.delStudent(studentId).subscribe(_ => {
    this.students = this.students.filter(eachStudent => eachStudent.id !== studentId)
  })
}
}
