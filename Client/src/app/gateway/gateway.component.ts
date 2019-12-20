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
    this.conn.getGateways().subscribe((response)=>{
    if(response){
      console.log(response)
      this.gateways=response;
      console.log(this.gateways)
    }
    })
   }

  ngOnInit() {
  }
  onInsert(form:NgForm){
    const gateway={
      usi:form.value.usi,
      name:form.value.name,
      address:form.value.ipaddress
    }   
    this.conn.insert(gateway).subscribe(response=>{this.gateways.push(response);  }   
    ) 
  }
  
}
