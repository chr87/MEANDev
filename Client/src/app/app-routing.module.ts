import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatewayComponent } from './gateway/gateway.component';
import { PeripheralComponent } from './peripheral/peripheral.component';
import { GatewayDetailComponent } from './gateway-detail/gateway-detail.component';


const routes: Routes = [ {path:'',component:GatewayComponent},
{path:'peripheral/:id',component:PeripheralComponent},
{path:'gateway/:id',component:GatewayDetailComponent},
{path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
