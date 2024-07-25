import { Component } from '@angular/core';
import { LoginDataService } from '../../../components/login/_services/login-data.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {

  userRole!:string;

  constructor(private adminservice:LoginDataService){
    this.initializeUserData();
  }

private initializeUserData() {
    const roleFromLocalStorage = this.adminservice.getRole();
    console.log(roleFromLocalStorage);
    this.userRole = roleFromLocalStorage ;
  }

}
