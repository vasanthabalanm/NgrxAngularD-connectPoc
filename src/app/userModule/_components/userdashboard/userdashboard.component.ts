import { Component } from '@angular/core';
import { LoginDataService } from '../../../components/login/_services/login-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.scss'
})
export class UserdashboardComponent {

  role!: string
  constructor(private adminser: LoginDataService, private router: Router) { }
  ngOnInit() {
    this.initializeUserData();
    if (this.role === 'User') {
      this.router.navigate(['user-home/user-tabs']);
    }
  }

  //fetch the details from the localstorage
  private initializeUserData() {
    const roleFromLocalStorage = this.adminser.getRole();
    this.role = roleFromLocalStorage ;
  }
}
