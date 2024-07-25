import { Component } from '@angular/core';
import { LoginDataService } from '../../login/_services/login-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  role!: string
  constructor(private adminser: LoginDataService, private router: Router) { }
  ngOnInit() {
    this.initializeUserData();
    console.log(this.role)
    if (this.role === 'Admin') {
      this.router.navigate(['/admin-dashboard/admin-home']);
      this.router.navigate(['/admin-dashboard/admin-home/user-home']);
    }
    else if (this.role === 'User') {
      this.router.navigate(['/admin-dashboard/admin-home/user-home']);
    }
  }

  //fetch the details from the localstorage
  private initializeUserData() {
    const roleFromLocalStorage = this.adminser.getRole();
    console.log(roleFromLocalStorage);
    this.role = roleFromLocalStorage ;
  }
}
