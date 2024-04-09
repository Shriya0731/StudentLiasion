import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public router: Router){}
  title = 'Student Liasion';
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
}
