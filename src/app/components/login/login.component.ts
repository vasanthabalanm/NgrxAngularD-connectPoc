import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formvalidators } from '../../helpers/Formvalidators';
import { Store } from '@ngrx/store';
import { GetLoginData } from './store/loginData.action';
import { FormValidationCheck } from '../../validation/form-validation-check';
import { GetUserDataSelector } from './store/loginData.selector';
import { NgToastService } from 'ng-angular-popup';
import { LoginDataService } from './_services/login-data.service';
import { Router } from '@angular/router';
import { catchError, pipe, Subscription, take, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  logindetail!: FormGroup;
  private subscription!: Subscription;


  constructor(private fb: FormBuilder,
    private store: Store,
    private toast: NgToastService,
    private adminService: LoginDataService,
    private router: Router
  ) {
    this.logindetail = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(Formvalidators.mail)]],
      userPassword: ['', [Validators.required]]
    })
  }

  get email() {
    return this.logindetail.get('email');
  }
  get password() {
    return this.logindetail.get('userPassword');
  }

  formsubmit() {
    if (this.logindetail.valid) {
      this.store.dispatch(GetLoginData({ payload: this.logindetail.value }));
      this.subscription = this.store.select(GetUserDataSelector)
      .subscribe((data:any)=>{
        if(data.error){
          this.toast.danger(data.error.message, 'Error', 3000)
          this.subscription.unsubscribe()
        }
        else{
          this.adminService.setStorageValues(data.userData.id, data.userData.email, data.userData.userRole, data.userData.tempPassword);
          this.toast.success('Login Success', 'SUCCESS', 5000);
          let enteredpass = this.logindetail.get('UserPassword')?.value;
          let fetchedvalue = this.adminService.getOldPass();
          if (enteredpass === this.adminService.getOldPass()) {
            this.router.navigate(['updatePass'])
          }
          else if(data.userData.userRole == 'Admin') {
            this.router.navigate(['admin-dashboard'])
          }
          else if(data.userData.userRole == 'User') {
            this.router.navigate(['user-home'])
          }
          this.subscription.unsubscribe();
        }
      })

    } else {
      FormValidationCheck.ValidateallformFields(this.logindetail);
    }
  }

}
