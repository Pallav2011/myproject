import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonserverService {

  url='https://jsonplaceholder.typicode.com/todos/1';  
  url2='https://jsonplaceholder.typicode.com/todos/'

  constructor(private httpclinet:HttpClient) { }

  getApiData(){
    return this.httpclinet.get(this.url);
  }

  // setData(data){
  //   return this.httpclinet.post(this.url2+'/data.json',data);
  // }
}
