import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventFormComponent } from './event-form/event-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentEventListComponent } from './student-event-list/student-event-list.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'students',component: StudentEventListComponent},
  {path :'register',component:RegisterComponent},
  {path :'dashboard',component:DashboardComponent},
  {path :'eventform',component:EventFormComponent},
  {path:'home',component:HomeComponent},
  {path:'home/login',component:LoginComponent},
  {path :'home/login/register',component:RegisterComponent},
  {path :'login/register',component:RegisterComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
