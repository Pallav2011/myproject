import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-firebasedata',
  templateUrl: './firebasedata.component.html',
  styleUrls: ['./firebasedata.component.css']
})
export class FirebasedataComponent implements OnInit {

  loginForm:FormGroup;
  apiData:any[]=[];
  constructor(private firebaseserv:FirebaseService) { 
    this.controls();
  }

  ngOnInit() {
    this.firebaseserv.getData().subscribe(res=>{
      this.apiData.push(res) ;
      console.log(this.apiData);
      
    })
  }

  saveData(data){
    console.log(data.value.email);
    console.log(data.value.password); 
  }

 controls(){
this.loginForm = new FormGroup({
  'email' : new FormControl(null),
  'password' : new FormControl(null)
})
 }

}
