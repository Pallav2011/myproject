import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  check:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  checked(){
    if(this.check){
      document.getElementById("abcd").setAttribute("checked" , '');
      this.check = false;
    }
    else{
      document.getElementById("abcd").setAttribute("unchecked" , '');
      this.check = true;
    }
  }

}
