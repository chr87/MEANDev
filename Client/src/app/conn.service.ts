import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 import{IGateway} from './gateway.model'
 import{IPeripheral} from './peripheral.model'
 import {tap, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConnService {

gWay:IGateway;
//  result:{[key: string]: IGateway}; 
  constructor(private http:HttpClient,private router:Router) {      
  }
  getGateways(): Observable<{[key:string]:IGateway}>{
   
    return this.http.get<{[key:string]:IGateway}>("http://localhost:3000/api/gateway");
  }
  getGatewaysById(id:string){

    return this.http.get<IGateway>("http://localhost:3000/api/gateway/"+id);
  }
  getPeripherals(id:string){
   
    return this.http.get<{[key:string]:IPeripheral}>("http://localhost:3000/api/gateway/peripherals/"+id);
  }
  insert(gateway:IGateway){    
    return this.http.post<IGateway>("http://localhost:3000/api/gateway",gateway).pipe(
      tap(response=>{
       console.log(response);
       this.gWay=response;
      })
    ); 
  }  
  insertP(peripheral:IPeripheral){    
    return this.http.post<IPeripheral>("http://localhost:3000/api/gateway/peripheral",peripheral).pipe(
      tap(response=>{
       console.log(response);
        
      })
    ); 
  }
  delete(uid:number){
    return this.http.delete<void>("http://localhost:3000/api/gateway/peripheral/"+uid);
  } 
}
