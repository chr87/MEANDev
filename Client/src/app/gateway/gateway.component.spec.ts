import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayComponent } from './gateway.component';

import { Observable,of} from 'rxjs';
import{IGateway} from '../gateway.model'
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'; 
import{HttpClientTestingModule} from '@angular/common/http/testing'
 import { ConnService } from '../conn.service';
 
describe('GatewayComponent', () => {
  let component: GatewayComponent;
  let fixture: ComponentFixture<GatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports:[RouterTestingModule,FormsModule,HttpClientTestingModule,RouterModule],
      declarations: [ GatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('shouldn\'t fetch data successfully if not called asynchronously', () => {
  //   let fixture = TestBed.createComponent(GatewayComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   let dataService = fixture.debugElement.injector.get(ConnService);
  //   let spy = spyOn(dataService, 'getGateways').and.callThrough(); 
  //   fixture.detectChanges();
  //   expect(app.gateways).toBe(undefined);
  // });
  it('shouldn fetch data successfully if called asynchronously',
   async(() => {
    let fixture = TestBed.createComponent(GatewayComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(ConnService);
    let gateway:[{[key:string]:IGateway}]=[{'0':{'_id':'ddd','name':'ddd','address':'5.5.5.5'}}]
    let spy = spyOn(dataService, 'getGateways').and.returnValue(of(gateway));
        
   fixture.detectChanges();   
   expect(app.gateways).toBe(gateway);   
  })
  );
});
