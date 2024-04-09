import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Events } from './events';


@Injectable({
  providedIn: 'root'
}) 
export class EventService {
  private baseURL = "http://localhost:9093/events/student";


  constructor(private httpClient: HttpClient) { }
  getEventsList(cno:number): Observable<Events[]>{
    const params = new HttpParams().append('cno',cno)
    return this.httpClient.get<Events[]>(`${this.baseURL}`,{params});
  }

  createEvent(event:Events):Observable<Object>{
    this.baseURL="http://localhost:9093/addevent";

      return this.httpClient.post(`${this.baseURL}`,event);
     }
}
