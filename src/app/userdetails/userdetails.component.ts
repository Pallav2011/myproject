import { Component, Input, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  // @Input () users:string;
  users:any[]=[];
  userList:string[]=[];

  constructor(private subservice:SubjectService) {
    // console.log(this.users);
  
   }


  ngOnInit() {
    this.subservice.userNameSub.subscribe(res=>{
      this.users.push(res);
    }) 
  }

  addUser(username){    
    this.userList.push(username.value);
  }

  removeUser(username){
   let i= this.userList.indexOf(username.value);   
   this.userList.splice(i,1);
  }

}
