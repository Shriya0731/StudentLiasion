// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Student } from './student';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {



// private baseUrl="http://localhost:9000/api/v1/teachers";
// //   constructor(private httpClient:HttpClient) { }
// constructor(private httpClient: HttpClient){}

// getTeacherList():Observable<Teacher[]>{
//   return this.httpClient.get<Teacher[]>(`${this.baseUrl}`);

// }

// createTeacher(teacher:Teacher):Observable<Object>{
//   return this.httpClient.post(`${this.baseUrl}`,teacher);
//  }

//  loginTeacher(teacher:Teacher):Observable<Object>{
//     return this.httpClient.post(`${this.baseUrl}`,teacher);
//  }

// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl="http://localhost:9093/api/v1/students";
  constructor(private httpClient:HttpClient) { }

  getStudentList():Observable<Student[]>{
    this.baseUrl="http://localhost:9093/api/v1/students";

    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }

loginStudent(student:Student):Observable<Student>{
  student.name ="student"
  this.baseUrl="http://localhost:9093/api/v1/loginstudent";
    console.log(student)
    return this.httpClient.post<Student>(`${this.baseUrl}`,student);
    
}
   createStudent(student:Student):Observable<Object>{
    this.baseUrl="http://localhost:9093/api/v1/students";

      return this.httpClient.post(`${this.baseUrl}`,student);
     }
}