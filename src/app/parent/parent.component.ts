import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentData:string='i am in parent';
  myData;
  constructor() { }

  ngOnInit() {
  }

  saveData(event){
    console.log(event);
    this.myData=event;
  }
}
