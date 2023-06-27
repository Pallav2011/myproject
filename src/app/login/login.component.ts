import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from '../services/subject.service';
import { FirebaseService } from '../services/firebase.service';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myLoginForm:FormGroup;
  // formisValid:boolean=false;
  // genders=['male','female']

  myLoginDetails=[
    {
      userName:'abcd',
      password:'123456',
      // isValid:false
    }, 
     {
      userName:'xyz',
      password:'123456',
      // isValid:false
    },
    {
      userName:'pqr',
      password:'123456',
      // isValid:false
    }
  ]
   
  constructor( private router:Router, private subservice:SubjectService,private firbaseserv:FirebaseService, private validity:AuthenticateService) { 
    this.createFormControl();
  }

  ngOnInit() {
  }

  createFormControl(){
    this.myLoginForm =new FormGroup({
      'username':new FormControl(null),
      'password':new FormControl(null)
    })
  }

  inpuData={};

  login(){
    let key=0;

    for (const element of this.myLoginDetails) {

      if(element.userName==this.myLoginForm.value.username && element.password==this.myLoginForm.value.password){
        alert('successfully login');
        // element.isValid=true;
        key=1;
        // this.formisValid=true;
        // this.inpuData=element;
        this.subservice.userNameSub.next(element);
        this.validity.checkUserValidity(true);
        this.firbaseserv.sendData(element).subscribe(res=>{
          // console.log('responce:',res);  
        })
        this.router.navigate(['users']);
        break;
        } 
    }
    if (key==0) {
      alert('wrong credeintials, you dont have to access login');
    }
  }
}
