import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { OrderMenuComponent } from './_components/order-menu/order-menu.component';
import { OrderDetailsComponent } from './_components/order-details/order-details.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../MaterialUI/material.module';
import { UsernavtabsComponent } from './_components/usernavtabs/usernavtabs.component';
import { UserdashboardComponent } from './_components/userdashboard/userdashboard.component';
import { UsermenubarComponent } from './_components/usermenubar/usermenubar.component';
import { AddcartcountsComponent } from './_components/order-menu/modal/addcartcounts/addcartcounts.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    OrderMenuComponent,
    OrderDetailsComponent,
    UsernavtabsComponent,
    UserdashboardComponent,
    UsermenubarComponent,
    AddcartcountsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
