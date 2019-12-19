import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatewayComponent } from './gateway/gateway.component';


const routes: Routes = [ {path:'',component:GatewayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
