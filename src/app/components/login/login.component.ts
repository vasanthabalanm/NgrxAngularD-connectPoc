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
import { pipe, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  logindetail!: FormGroup;
  private subscription!: Subscription;


  constructor(private fb: FormBuilder,
    private store: Store<{ getUserDataResponse: any }>,
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
    console.log(this.logindetail.value)
    if (this.logindetail.valid) {
      this.store.dispatch(GetLoginData({ payload: this.logindetail.value }));
      this.subscription = this.store.select(GetUserDataSelector)
        .subscribe({
          next: (data: any) => {
            console.log(data)
            if (data.error) {
              this.toast.danger(data.error, 'Error', 3000)
              this.subscription.unsubscribe()
            }
            else {
              this.adminService.setStorageValues(data.userData.id, data.userData.email, data.userData.userRole, data.userData.tempPassword);
              this.toast.success('Login Success', 'SUCCESS', 5000);
              let enteredpass = this.logindetail.get('UserPassword')?.value;
              let fetchedvalue = this.adminService.getOldPass();
              console.log(fetchedvalue);
              if (enteredpass === this.adminService.getOldPass()) {
                this.router.navigate(['updatePass'])
              }
              else {
                this.router.navigate(['admin-dashboard'])
              }
              this.subscription.unsubscribe();
            }
          },
          error: (error: any) => {
            this.toast.danger('Unexpected error', 'Error', 3000)
            this.subscription.unsubscribe()
          }

        })

    } else {
      FormValidationCheck.ValidateallformFields(this.logindetail);
    }
  }

}
