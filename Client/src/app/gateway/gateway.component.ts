import { Component, OnInit } from '@angular/core';
import { ConnService } from '../conn.service';
import { IGateway } from '../gateway.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {
gateways;
  constructor(private conn:ConnService) {
    this.conn.getUsers().subscribe((response)=>{
    if(response){
      console.log(response)
      this.gateways=response;
      console.log(this.gateways)
    }
    })
   }

  ngOnInit() {
  }
  // onInsert(form:NgForm){
  //   const gateway={
      
  //   }
  //   this.conn.insert( ).subscribe(response=>{   }   
  //   )           
       
  // }
}
