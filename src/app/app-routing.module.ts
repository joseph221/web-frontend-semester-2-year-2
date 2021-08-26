import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddserviceComponent } from './addservice/addservice.component';
import { CarService } from './car-service';
import { ServiceListComponent } from './service-list/service-list.component';
import { UpdateservComponent } from './updateserv/updateserv.component';

const routes: Routes = [
  {path:'carservice' , component :ServiceListComponent },
  {path:'addservice' , component :AddserviceComponent },
  { path:'' , redirectTo: 'carservice' , pathMatch:'full' },
  { path:'updateserv/:id', component:UpdateservComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
