import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './MaterialUI/material.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginStoreModule } from './components/login/store/loginData.module';
import { AdminHomeComponent } from './components/Admin/admin-home/admin-home.component';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { MenubarComponent } from './components/Topbar/menubar/menubar.component';
import { RegisterUserStoreModule } from './components/register/store/registerData.module';
import { HotelComponent } from './components/Admin/hotel/hotel.component';
import { HotelBranchComponent } from './components/Admin/hotel-branch/hotel-branch.component';
import { MenuComponent } from './components/Admin/menu/menu.component';
import { AddhotelmodalComponent } from './components/Admin/hotel/models/addhotelmodal/addhotelmodal.component';
import { AddHotelStoreModule } from './components/Admin/hotel/models/store/addhotel.module';
import { GetGotelStoreModule } from './components/Admin/hotel/store/hotel.module';
import { TotalCountsStoreModule } from './components/Admin/admin-home/store/counts.module';
import { PendingRequestComponent } from './components/Admin/pending-request/pending-request.component';
import { PendingOrderComponent } from './components/Admin/pending-order/pending-order.component';
import { ApprovedRequestComponent } from './components/Admin/approved-request/approved-request.component';
import { AddbranchComponent } from './components/Admin/hotel-branch/models/addbranch/addbranch.component';
import { HotelBranchStoreModule } from './components/Admin/hotel-branch/store/hotelbranch.module';
import { PostHotelBranchStoreModule } from './components/Admin/hotel-branch/models/store/addbranch.module';
import { GetPendingUserStoreModule } from './components/Admin/pending-request/store/getPendingUserData.module';
import { DeleteApprovedStoreModule } from './components/Admin/approved-request/store/deleteApprovedUserStore.module';
import { AddmenuComponent } from './components/Admin/menu/modal/addmenu/addmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    DashboardComponent,
    MenubarComponent,
    HotelComponent,
    HotelBranchComponent,
    MenuComponent,
    AddhotelmodalComponent,
    PendingRequestComponent,
    PendingOrderComponent,
    ApprovedRequestComponent,
    AddbranchComponent,
    AddmenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgToastModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: isDevMode() }),
    EffectsModule.forRoot({}),
    LoginStoreModule,
    RegisterUserStoreModule,
    AddHotelStoreModule,
    GetGotelStoreModule,
    TotalCountsStoreModule,
    HotelBranchStoreModule,
    PostHotelBranchStoreModule,
    GetPendingUserStoreModule,
    DeleteApprovedStoreModule,
    
  

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
