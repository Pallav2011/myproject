import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  // userNameSub = new Subject<any>();
  userNameSub=new BehaviorSubject<any>({});
  constructor() { }

  // usersData(user){


  // }

  
}
