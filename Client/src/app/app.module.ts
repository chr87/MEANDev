import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatewayComponent } from './gateway/gateway.component';
 
import { HttpClientModule } from '@angular/common/http';
import { PeripheralComponent } from './peripheral/peripheral.component';
import { GatewayDetailComponent } from './gateway-detail/gateway-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    GatewayComponent,
    PeripheralComponent,
    GatewayDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
