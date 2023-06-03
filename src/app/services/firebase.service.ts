import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url='https://angularproject-21a59-default-rtdb.firebaseio.com/';
  constructor(private httpclient:HttpClient) { }

  sendData(data){
    return this.httpclient.put(this.url+'/data.json',data);
  }

  getData(){
    return this.httpclient.get(this.url+'/data.json');
  }
}
