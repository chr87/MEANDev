import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayDetailComponent } from './gateway-detail.component';
import {RouterModule} from '@angular/router';
import{HttpClientTestingModule} from '@angular/common/http/testing'
import { RouterTestingModule } from "@angular/router/testing";
describe('GatewayDetailComponent', () => {
  let component: GatewayDetailComponent;
  let fixture: ComponentFixture<GatewayDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports:[RouterModule,RouterTestingModule,HttpClientTestingModule],
      declarations: [ GatewayDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
