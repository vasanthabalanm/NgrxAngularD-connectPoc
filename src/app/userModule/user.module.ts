import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './_components/user-dashboard/user-dashboard.component';
import { OrderMenuComponent } from './_components/order-menu/order-menu.component';
import { OrderDetailsComponent } from './_components/order-details/order-details.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../MaterialUI/material.module';



@NgModule({
  declarations: [
    UserComponent,
    UserDashboardComponent,
    OrderMenuComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
