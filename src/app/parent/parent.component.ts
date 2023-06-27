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

  studData;
  stud1=false;
  stud2=false;
  stud3=false;
  data=[
    {
      id:1,
      name:'abcd',
      adress:'pune'
    },
    {
      id:2,
      name:'xyz',
      adress:'mumbai'
    },
    {
      id:3,
      name:'pqr',
      adress:'nashik'
    }
  ];

  getData(id){
    for (const element of this.data) {
      if (element.id == id) {
        this.studData=element;
        if(id == 1){
          this.stud1=true;
          this.stud2=false;
          this.stud3=false;
        }
        else{
          if (id==2) {
            this.stud1=false;
            this.stud2=true;
            this.stud3=false;
          }
          else{
            this.stud1=false;
            this.stud2=false;
            this.stud3=true;
          }
        }
      }
    }

  }

}
