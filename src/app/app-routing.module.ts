import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LogoffpageComponent } from './logoffpage/logoffpage.component';
import { ManagerRegisterationComponent } from './manager-registeration/manager-registeration.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagersuccessComponent } from './managersuccess/managersuccess.component';
import { OrderComponent } from './order/order.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { ViewcartComponent } from './viewcart/viewcart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registeration',component:RegisterationComponent},
  {path:'manager',component:ManagerComponent},
  {path:'success',component:ManagersuccessComponent},
  {path:'logout',component:LogoffpageComponent},
  {path:'mregisteration',component:ManagerRegisterationComponent},
  {path:'add',component:AddproductComponent},
  {path:'update-product/:id',component:UpdateproductsComponent},
  {path:'view-cart',component:ViewcartComponent},
  {path:'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
