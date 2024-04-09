import { Injectable } from '@angular/core';
import { Events } from '../events';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  currentuser!:Student;
  events!: Events[];

  constructor() { }

  setCurrentUser(currstudent: Student){
    this.currentuser=currstudent;
  }
  getCurrentUser(){
    return this.currentuser;
  }
  setEventlist(eventlist: Events[]){
    this.events = eventlist;
  }
  getEventlist(){
    return this.events;
  }
}
