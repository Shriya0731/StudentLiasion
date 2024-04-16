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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private username = 'user';
  private password = '';

  private baseUrl="https://localhost:8443/api/v1/students";
  private base64Credentials = window.btoa(`${this.username}:${this.password}`);

  constructor(private httpClient:HttpClient) { }

  getStudentList():Observable<Student[]>{
    this.baseUrl="https://localhost:8443/api/v1/students";

    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }

loginStudent(student:Student):Observable<Student>{
  student.name ="student"
  const headers = new HttpHeaders({
    'Authorization': 'Basic ' + this.base64Credentials
  });

  this.baseUrl="https://localhost:8443/api/v1/loginstudent";
    console.log(student)
    return this.httpClient.post<Student>(`${this.baseUrl}`,student,{ headers });
    
}
   createStudent(student:Student):Observable<Object>{
    this.baseUrl="https://localhost:8443/api/v1/students";

      return this.httpClient.post(`${this.baseUrl}`,student);
     }
}