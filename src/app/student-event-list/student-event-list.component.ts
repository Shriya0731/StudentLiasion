// import { Component, OnInit } from '@angular/core';
// import { Student } from '../student'
// import { TeacherService } from '../teacher.service'
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-teacher-list',
//   templateUrl: './teacher-list.component.html',
//   styleUrls: ['./teacher-list.component.css']
// })

// export class TeacherListComponent implements OnInit {

// teachers!: Student[];

//   constructor(private teacherService: TeacherService, private router: Router) { }


//   ngOnInit(): void {
//     this.getTeacher();
//   }

//   private getTeacher() {
//     this. teacherService.getTeacherList().subscribe(data =>{
//       console.log("hiiiiii");
//       this.teachers=data;
//     }); 
//   }
 
// }
import { Component, OnInit } from '@angular/core';


import { Student } from '../student'

 import { StudentService } from '../student.service'

// import { Event } from '../event'
// import { EventService } from '../event.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-event-list',
  templateUrl: './student-event-list.component.html',
  styleUrls: ['./student-event-list.component.scss']
})



export class StudentEventListComponent implements OnInit {

  students!: Student[];

  constructor(private studentService: StudentService,
    private router: Router) { }


  ngOnInit(): void {
   this.getStudents();
 }

  private getStudents(){
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }

  // studentDetails(cno: string){
  //   this.router.navigate(['student-details', cno]);
  // }
}
