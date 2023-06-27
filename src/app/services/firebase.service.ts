import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url='https://myproject-2c8ca-default-rtdb.firebaseio.com/';
  constructor(private httpclient:HttpClient) { }

  arr=[];
  sendData(data){
    this.arr.push(data);
    return this.httpclient.put(this.url+'/products.json',this.arr);
  }

  getData(){
    return this.httpclient.get(this.url+'/products.json');
  }

  deleteData(pId){
    return this.httpclient.delete(this.url+`${pId}`);
  }
}
