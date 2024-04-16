import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../announcement.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  newAnnouncement: Announcement = { id: null, title: '', description: '', date: this.datePipe.transform(new Date(), 'MMMM dd')?.toString() };

  constructor(
    private announcementService: AnnouncementService,
    private datePipe: DatePipe,
    private snackBar: MatSnackBar
  ) {}

  createAnnouncement(): void {
    this.newAnnouncement.date = new Date();
    this.announcementService.createAnnouncement(this.newAnnouncement)
      .subscribe(() => {
        // Optionally, perform actions after successful creation
        console.log('Announcement created!');
        this.snackBar.open('Announcement posted successfully', 'Close', {
          duration: 3000, // Duration in milliseconds
        });
        console.log(this.newAnnouncement.description)
        console.log(this.newAnnouncement.date)
       
        this.newAnnouncement = { id: null, title: '',description: '',  date: this.datePipe.transform(new Date(), 'MMMM dd')?.toString() }; // Clear form fields
      },
      
      (error) => {
        // Error case: Handle error and show Snackbar
        console.error('Error creating announcement:', error);
        this.snackBar.open('Failed to post announcement. Please try again later.', 'Close', {
          duration: 5000, // Duration in milliseconds
          panelClass: ['error-snackbar'] // Apply custom styling for error Snackbar
        });
      }
    );
  }
}