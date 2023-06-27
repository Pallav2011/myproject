import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-firebasedata',
  templateUrl: './firebasedata.component.html',
  styleUrls: ['./firebasedata.component.css']
})
export class FirebasedataComponent implements OnInit {

  productArray;

  constructor(private firebaseserv:FirebaseService) { 
  }

  ngOnInit() {
    this.getAPIdata();
  }

  getAPIdata(){
    this.firebaseserv.getData().subscribe(res=>{
    this.productArray = res;
  })
  }

  addProduct(pId,pName,pPrice){
    let objProduct={ 
      productId:pId.value,
      productName:pName.value,
      productPrice:pPrice.value
    }
    this.firebaseserv.sendData(objProduct).subscribe(res=>{
      this.getAPIdata();
    })
  }

  deleteProduct(id){

    this.firebaseserv.deleteData(id).subscribe(res=>{
    console.log(res);
      
    })
  }
}
