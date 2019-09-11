import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { GaurdService } from './gaurd.service';
import { MatRadioModule } from '@angular/material/radio'
var obj:Routes=[
  {path:"login", component: LoginComponent},
  {path:"emp", component: EmployeesComponent,canActivate:[GaurdService]}]
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, BrowserAnimationsModule, MatInputModule, MatFormFieldModule, FormsModule,
    AppRoutingModule,RouterModule.forRoot(obj),NgxPaginationModule,Ng2SearchPipeModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
