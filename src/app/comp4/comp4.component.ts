import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  userName:string='Pandurang';
  constructor( private subjectservice: SubjectService) {
      this.subjectservice.userNameSub.subscribe(res=>{
        this.userName=res;
      })
   }

  ngOnInit() {
  }

  updateName(uname){
    this.subjectservice.userNameSub.next(uname.value);
  }

}
