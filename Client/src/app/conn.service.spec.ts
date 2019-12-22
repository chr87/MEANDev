import { TestBed ,} from '@angular/core/testing';
import { ConnService } from './conn.service';
import{HttpClientTestingModule} from '@angular/common/http/testing'
import { RouterTestingModule } from "@angular/router/testing";

describe('ConnService', () => {
  let connService:ConnService;
  beforeEach(() =>{ 
  TestBed.configureTestingModule({imports:[RouterTestingModule,HttpClientTestingModule],providers:[ConnService]})
  connService=TestBed.get(ConnService)
  }  
);
  it('should be created', () => {
    const service: ConnService = TestBed.get(ConnService);
    expect(service).toBeTruthy();
  });
});
