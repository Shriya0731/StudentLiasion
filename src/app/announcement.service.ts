import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from './announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private apiUrl = ''; // Update with your API endpoint

  constructor(private http: HttpClient) { }

  getAnnouncements(): Observable<Announcement[]> {
    this.apiUrl = "http://localhost:9090/api/v1/getAllAnnouncements"
    return this.http.get<Announcement[]>(`${this.apiUrl}`);
  }

  createAnnouncement(announcement: Announcement): Observable<Announcement> {
    console.log(announcement)
    this.apiUrl = "http://localhost:9090/api/v1/createAnnouncement"
    return this.http.post<Announcement>(`${this.apiUrl}`, announcement);
  }

  // Add other CRUD methods as needed
}