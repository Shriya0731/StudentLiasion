import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
import { StudentService } from '../student.service'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})

export class RegisterComponent  implements OnInit {
  students: Student=new Student();
  submitted = false;


  userlogin = true;
  // userregister = false;
  // user_register()
  // {
  //   this.userlogin = false;
  //   this.userregister = true;
  // }
  user_login()
  {
    this.userlogin = true;
    // this.userregister = false;
  }
constructor(private studentService: StudentService,private router: Router){}
  ngOnInit(): void {
 
  }

  saveTeacher(){
    this.studentService.createStudent(this.students).subscribe(()=>{
      console.log("save Student hiiiiii");
      this.students = new Student();
      this.gotoList();
    }, 
    error => console.log(error));
  }

   onSubmit(){
    console.log("hiiiiii");
    this.submitted = true;
    this.saveTeacher(); 
   }

   gotoList() {
    this.router.navigate(['/login']);
  }
}
