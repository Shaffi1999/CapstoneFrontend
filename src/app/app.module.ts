

import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { ManagerComponent } from './manager/manager.component';
import { HomeComponent } from './home/home.component';
import { ManagersuccessComponent } from './managersuccess/managersuccess.component';
import { LogoffpageComponent } from './logoffpage/logoffpage.component';
import { ManagerRegisterationComponent } from './manager-registeration/manager-registeration.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    RegisterationComponent,
    LoginsuccessComponent,
    ManagerComponent,
    HomeComponent,
    ManagersuccessComponent,
    LogoffpageComponent,
    ManagerRegisterationComponent,
    AddproductComponent,
    UpdateproductsComponent,
    AddtocartComponent,
    ViewcartComponent,
    OrderComponent,
   
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
 
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
