import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input () child:string;
  @Output () outputChild = new EventEmitter();
  // mychildData = 'i am in child';
  mychildData={name:'pandurang',age:25,adress:'pandharpur'}
  date=new Date();
  constructor() { }

  ngOnInit() {
    console.log(this.child);
    this.outputChild.emit(this.mychildData);
  }

  studentDetails=[
    {
      id:'stud101',
      name:'pandurang ranpise',
      gender:'male',
      dob: '20/11/1997',
      fee:20000
    },
    {
      id:'stud102',
      name:'dattaraj ranpise',
      gender:'Male',
      dob:'2/5/1996',
      fee:40000
    },
    {
      id:'stud103',
      name:'sandhya mukare',
      gender:'Female',
      dob:'8/5/95',
      fee:17500
    },
    {
      id:'stud104',
      name:'mangal ranpise',
      gender:'Female',
      dob:'1/6/79',
      fee:35800
    },
    {
      id:'stud105',
      name:'gopal ranpise',
      gender:'male',
      dob:'01/6/1974',
      fee:50500
    }
  ]

}
