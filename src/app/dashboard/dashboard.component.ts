import { ChangeDetectorRef, Component, ElementRef, Input, Renderer2, SecurityContext, ViewChild } from '@angular/core';
import { Student } from '../student';
import{SharedService} from '../shared/shared.service';
import { EventService } from '../event.service';
import { Events } from '../events';
import { Router } from '@angular/router';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../announcement.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  user:any;
  user_name!:String;
  user_cno!:String
  events!: Events[];
announcements!: Announcement[];
  sanitizedHtml: SafeHtml | undefined;
  @ViewChild('myDiv')
  divElement!: ElementRef;

  constructor(private sharedService:SharedService,private renderer: Renderer2, private el: ElementRef,private sanitizer: DomSanitizer,private announcementService : AnnouncementService,private eventService:EventService,private router: Router) { }
  ngOnInit(): void {
    this.user = this.sharedService.getCurrentUser();
    this.user_name = this.user.name;
    this.user_cno = this.user.cno;
    this.getevents();
    this.getAnnouncements();
    
  }
  private getevents(){
    this.eventService.getEventsList(this.user.cno).subscribe(data => {
      this.events = data;
    });
  }

  

  // private getAnnouncements(){
  //   this.announcementService.getAnnouncements().subscribe(data => {
  //     this.announcements = [];
  //     data.forEach(announcement => {
  //       const sanitizedTitle = this.sanitizer.sanitize(SecurityContext.HTML, announcement.title) || '';
  //       this.announcements.push({
  //         ...announcement,
  //         title: sanitizedTitle
  //       });
  //     });
  //   });
  // }
  private getAnnouncements() {

    this.announcementService.getAnnouncements().subscribe(data => {
      this.announcements = [];
      // this.divElement.nativeElement.innerHTML = "<script>alert('Attack');</script>";

      data.forEach(announcement => {
        // Bypass security to allow potentially unsafe HTML
        this.announcements.push({
          title: this.sanitizer.bypassSecurityTrustHtml(announcement.title),
          description: this.sanitizer.bypassSecurityTrustHtml(announcement.description),
          id: null,
          date: null
        });
      });
    });
    // this.divElement.nativeElement.innerHTML = "<script>alert('Attack');</script>";
    
  }
  
  GoToEventForm(){
    this.router.navigate(['/eventform']);

  }
    
  }

