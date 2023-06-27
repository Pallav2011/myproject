import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.createControls();
  }

  createControls(){
    this.myForm = new FormGroup({
      'userName': new FormControl(null,Validators.required),
      'email' : new FormControl(null,[Validators.required,Validators.email])
    })
  }

  onSubmit(){
    console.log(this.myForm.value);
  }
}
