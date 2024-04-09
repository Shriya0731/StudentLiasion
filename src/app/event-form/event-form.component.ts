import { Component } from '@angular/core';
// import { MatCardModule } from '@angular/material/card';
// import {MatTabsModule} from '@angular/material/tabs'
// import { FormBuilder, FormGroup } from '@angular/forms';
// import {MatSelectModule} from '@angular/material/select';
import{SharedService} from '../shared/shared.service';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { Events } from '../events';
import { FileUploadService } from '../file-upload.service';

// import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  user:any;
  cno!:String;
  file!: File ; 
  stud_event: Events=new Events();
  constructor(private sharedService:SharedService,private eventService:EventService,private router: Router,private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.user = this.sharedService.getCurrentUser();
   // this.cno = this.user.cno;
  }
  addInfo(){
    this.stud_event.cno = this.user.cno;
    this.eventService.createEvent(this.stud_event).subscribe(()=>{
      console.log("save Student hiiiiii");
      this.stud_event = new Events();

    }, 
    error => console.log(error));
  }
  
  saveEvent(){
    this.stud_event.cno = this.user.cno;
    this.eventService.createEvent(this.stud_event).subscribe(()=>{
      console.log("save Student hiiiiii");
      this.stud_event = new Events();

    }, 
    error => console.log(error));
  }

   onSubmit(){
    console.log("hiiiiii");
    this.saveEvent(); 
   }
    public getimage(){
    
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                
            }
        }
    );
  }

}
