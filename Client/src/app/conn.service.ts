import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 import{IGateway} from './gateway.model'
 import {tap, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConnService {

  constructor(private http:HttpClient,private router:Router) { }
  getUsers(){
    return this.http.get<{[key:string]:IGateway}>("http://localhost:3000/api/gateway");
  }
  insert(gateway:IGateway){
    return this.http.post<{}>("http://localhost:3000/api/gateway",gateway);
      
  }
}
