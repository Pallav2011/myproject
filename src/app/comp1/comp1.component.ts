import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { JsonserverService } from '../services/jsonserver.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName:string='Pandurang';
  APIdata;
  constructor( private subjectservice: SubjectService,private apiserv:JsonserverService) {
      this.subjectservice.userNameSub.subscribe(res=>{
        this.userName=res;
      })
   }

  ngOnInit() {
  }

  updateName(uname){
    this.subjectservice.userNameSub.next(uname.value);
  }

  // getData(){
  //   this.apiserv.getApiData().subscribe(res=>{
  //     this.APIdata=res;
  //     console.log(this.APIdata);  
  //   })
  // }

  // myData={
  //   name:'pandurang'
  // }
  // setData(){
  //   this.apiserv.setData(this.myData).subscribe(res=>{
  //     console.log(res);     
  //   })
  // }
}
