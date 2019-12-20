import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatewayComponent } from './gateway/gateway.component';
import { PeripheralComponent } from './peripheral/peripheral.component';


const routes: Routes = [ {path:'',component:GatewayComponent},
{path:'peripheral/:id',component:PeripheralComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
