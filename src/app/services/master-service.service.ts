import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http:HttpClient) { }
  postList:any;
  getPost():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
