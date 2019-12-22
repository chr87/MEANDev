import { Component, OnInit } from '@angular/core';
import { ConnService } from '../conn.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-peripheral',
  templateUrl: './peripheral.component.html',
  styleUrls: ['./peripheral.component.css'] 
})
export class PeripheralComponent implements OnInit {
  peripherals;
  id:string;
  constructor(private conn:ConnService,private route:ActivatedRoute,private router:Router) {  
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']; })
    this.conn.getPeripherals(this.id).subscribe((response)=>{
       
      if(response){
        console.log(response)
        this.peripherals=response;
        console.log(this.peripherals)
      }
      })
  }
  onRemove(uid:number,i:number){
    this.peripherals.splice(i,1);
     this.error=null 
    this.conn.delete(uid).subscribe();  
  }
  choise;
  error;
  onInsert(form:NgForm){

    console.log(this.choise)
    this.choise=="offline"?this.choise=false:this.choise=true;
    console.log(this.choise)
    const peripheral={
      _id:form.value.uid,
      vendor:form.value.vendor,
      date:null,
      status:this.choise,
      gateway:this.id
    }   
    
    this.conn.insertP(peripheral).subscribe(response=>{this.error=null;this.peripherals.push(response);
    console.log(this.peripherals)  },error=>{      
      this.error=error.error.errmsg;   //mongodb     
      if(!this.error){
        console.log(error)
        this.error=error.message;      }  
       if(error.status=='401') this.error="you can only insert 10 peripheral in this gateway"  
    });        
  }

}
