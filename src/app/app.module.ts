import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { FormsModule } from '@angular/forms';
import { AddserviceComponent } from './addservice/addservice.component';
import { UpdateservComponent } from './updateserv/updateserv.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    AddserviceComponent,
    UpdateservComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
