import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { JsonserverService } from '../services/jsonserver.service';

interface NameCount {
  name: string;
  count: number;
  color: string;
}
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})

export class Comp2Component implements OnInit {

  nameCounts: NameCount[];

  userName:string='Pandurang';
  constructor( private subjectservice: SubjectService,private jsonserv:JsonserverService) {
      this.subjectservice.userNameSub.subscribe(res=>{
        this.userName=res;
      })
   }

  updateName(uname){
    this.subjectservice.userNameSub.next(uname.value);
  }

  ngOnInit(): void {}


}
