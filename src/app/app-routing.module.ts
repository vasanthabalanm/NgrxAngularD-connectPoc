import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { permitGuard } from './_guard/permit.guard';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { AdminHomeComponent } from './components/Admin/admin-home/admin-home.component';
import { RegisterComponent } from './components/register/register.component';
import { userGuard } from './userGuard/user.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register-user',component:RegisterComponent},
  {path:'admin-dashboard',component:DashboardComponent,canActivate:[permitGuard],
    children:[
      {path:'admin-home',component:AdminHomeComponent},
    ]
  },
  {path: 'user-home', loadChildren: () => import('./userModule/user.module').then(m => m.UserModule),canLoad:[userGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
