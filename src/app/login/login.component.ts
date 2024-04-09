import { Component, Output } from '@angular/core';
import { Student } from '../student'
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import{SharedService} from '../shared/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  students: Student=new Student();

  submitted = false;
  
  
  // userlogin = true;
  // userregister = false;
  
  // user_register()
  // {
  //   this.userlogin = false;
  //   this.userregister = true;
  // }
  // user_login()
  // {
  //   this.userlogin = true;
  //   this.userregister = false;
  // }
  constructor(private studentService: StudentService, private router: Router,private sharedService:SharedService){
   
  }
  response: string[] = [];
  obJson: any;
  ngOnInit(): void {
    
  }
  onSubmit(){
  }
  loginUser(){
     this.studentService.loginStudent(this.students).subscribe(data =>
      {
        alert("login Successfully");
        this.sharedService.setCurrentUser(data);
        
        console.log(data.cno);
        this.router.navigate(['/dashboard']);

      },
      error=> alert("please enter correct id and password")
      );
  }
 
}
