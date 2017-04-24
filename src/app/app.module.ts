import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ImformationComponent} from "./ImformationPortal/imformation.component";
import {ImformationService} from "./ImformationPortal/imformation.service";
import {AddComponent} from "./add.component";
import {HomeComponent} from "./home component/HomeComponent";
import {Routes, RouterModule} from "@angular/router";
import {DetailComponent} from "./detail component/DetailComponent.component";

const appRoutes:Routes=[{
  path:'information', component:ImformationComponent
}]

@NgModule({
  declarations: [
    AppComponent,ImformationComponent,AddComponent,HomeComponent,DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImformationService,ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
