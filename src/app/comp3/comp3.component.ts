import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
