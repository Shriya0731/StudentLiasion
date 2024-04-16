import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Events } from './events';


@Injectable({
  providedIn: 'root'
}) 
export class EventService {
  private baseURL = "https://localhost:8443/events/student";
  private username = 'user';
  private password = '';

  private base64Credentials = window.btoa(`${this.username}:${this.password}`);

  constructor(private httpClient: HttpClient) { }
  getEventsList(cno:number): Observable<Events[]>{
    const params = new HttpParams().append('cno',cno)
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + this.base64Credentials
    });
    return this.httpClient.get<Events[]>(`${this.baseURL}`,{params,headers});
  }

  createEvent(event:Events):Observable<Object>{
    this.baseURL="https://localhost:8443/addevent";
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + this.base64Credentials
    });
      return this.httpClient.post(`${this.baseURL}`,event,{headers});
     }
}
