import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formvalidators } from '../../helpers/Formvalidators';
import { FormValidationCheck } from '../../validation/form-validation-check';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { RegisterUser } from './store/registerData.action';
import { Subscription } from 'rxjs';
import { RegisterDataSelector } from './store/registerData.selector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerDetail!:FormGroup;
  public subscription!:Subscription;

  constructor(
    private fb:FormBuilder,
    private store:Store,
    private router:Router,
    private toast:NgToastService
  )
  {
    this.registerDetail = this.fb.group({
      userName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(Formvalidators.name), this.nospaces]],
      email: ['', [Validators.required, Validators.pattern(Formvalidators.mail)]],
      userPhone: ['', [Validators.required, Validators.pattern(Formvalidators.phone)]],
      userLocation: ['', [Validators.required]],
      userRole:"User"
    })
  }

  get userName() {
    return this.registerDetail.get('userName')
  }
  get userEmail() {
    return this.registerDetail.get('email')
  }
  get userPhonenumber() {
    return this.registerDetail.get('userPhone')
  }
  get userLocation() {
    return this.registerDetail.get('userLocation')
  }

  nospaces(enteredvalue: AbstractControl) {
    let entervalues = enteredvalue.value;
    if (entervalues && (entervalues.startsWith(' ') || entervalues.endsWith(' '))) {
      return { nonamespace: true }
    }
    return null;
  }

  nodigits(enteredvalue: any) {
    let values = enteredvalue.target.value;
    values = values.replace(/[1234567890-=+_!@#$%^&*()~`{}|;:'",.<>?/]/g, '');
    enteredvalue.target.value = values;
  }

  noalphabets(enteredvalue: any) {
    let noalphachars = enteredvalue.target.value;
    noalphachars = noalphachars.replace(/[^+0-9-]/g, '')
    enteredvalue.target.value = noalphachars;
  }


  formsubmit(){
    console.log(this.registerDetail.value)
    if (this.registerDetail.valid) {
      console.log(this.registerDetail.value);
      this.store.dispatch(RegisterUser({payload:this.registerDetail.value}));
      this.subscription = this.store.select(RegisterDataSelector).subscribe(
        {
          next:(data:any)=>{
            console.log(data)
            if(data.error == false){
              this.registerDetail.reset();
              this.toast.success('Please Wait For Admin Approval','Success',5000);
              this.router.navigate(['']);
              this.subscription.unsubscribe();
            }
            else if(data.error != true){
              this.toast.danger('Something went wrong!','Error',5000);
              this.subscription.unsubscribe();
            }
          },
          error:(err)=>{
            const error = err.error;
            if (error) {
              this.toast.danger('Email already exists','Error',5000)
            }
            else {
              this.toast.danger(error,'Something went Wrong',5000)
            }
          }
        }
      )
    } else {
      FormValidationCheck.ValidateallformFields(this.registerDetail);
    }
  }
}
