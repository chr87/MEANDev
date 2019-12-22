import { Component, OnInit } from '@angular/core';
import { ConnService } from '../conn.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-gateway-detail',
  templateUrl: './gateway-detail.component.html',
  styleUrls: ['./gateway-detail.component.css']
})
export class GatewayDetailComponent implements OnInit {
 gateway={};
 id;
 constructor(private conn:ConnService, private route:ActivatedRoute) { 
 }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']; })
      console.log(this.id)
      this.conn.getGatewaysById(this.id).subscribe((response)=>{
        console.log("here"+response[0])
        this.gateway=response[0];
      })
  }

}
