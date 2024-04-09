import { Component, Input } from '@angular/core';
import { Student } from '../student';
import{SharedService} from '../shared/shared.service';
import { EventService } from '../event.service';
import { Events } from '../events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  user:any;
  user_name!:String;
  user_cno!:String;
  events!: Events[];

  constructor(private sharedService:SharedService,private eventService:EventService,private router: Router) { }
  ngOnInit(): void {
    this.user = this.sharedService.getCurrentUser();
    this.user_name = this.user.name;
    this.user_cno = this.user.cno;
    this.getevents();
  }
  private getevents(){
    this.eventService.getEventsList(this.user.cno).subscribe(data => {
      this.events = data;
    });
  }
  GoToEventForm(){
    this.router.navigate(['/eventform']);

  }
    
  }

