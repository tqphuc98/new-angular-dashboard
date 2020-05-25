import { Observable, of } from 'rxjs';
import { Student } from './student';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = 'https://5ec1eecd61975300160927ab.mockapi.io/student';
  constructor(private http: HttpClient) { }
  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl).pipe(
      catchError(error => of ([]))
    );
  }
  // Thêm dữ liệu
  addStudent (newstudent: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, newstudent, HttpOptions).pipe(
      catchError(error => of(new Student()))
    )
  }
  // Sửa dữ liệu
  updateStudent(student: Student): Observable<any> {
    return this.http.put(`${this.studentsUrl}/${student.id}`, student, HttpOptions).pipe(
      tap(updatedStudent => alert("Cập nhật thành công")),
      catchError(error => of(new Student()))
    )
  }
  // Xoá dữ liệu
  delStudent(studentId: number): Observable<Student> {
    const url = `${this.studentsUrl}/${studentId}`;
    return this.http.delete<Student>(url, HttpOptions).pipe(
      catchError(error => of(null))
    )
  }
}
