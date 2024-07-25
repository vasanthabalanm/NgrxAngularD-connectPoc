import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { LoginDataService } from '../../../../login/_services/login-data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Formvalidators } from '../../../../../helpers/Formvalidators';
import { GetAllHotel } from '../../../hotel/store/actions/hotel.actions';
import { GetAllHotelSelector } from '../../../hotel/store/selector/hotel.selector';
import { PostNewBranch } from '../store/actions/addbranch.action';
import { AddBranchSelector } from '../store/selectors/addbranch.selector';
import { GetBranchData } from '../../store/action/hotelbranch.action';
import { GetBranchTotalCount } from '../../../admin-home/store/actions/branchCounts.action';
import { FormValidationCheck } from '../../../../../validation/form-validation-check';
import { UpdateBranchData } from '../store/actions/updatebracnh.action';
import { UpdateHotelBranchSelector } from '../store/selectors/updatebranch.selector';

@Component({
  selector: 'app-addbranch',
  templateUrl: './addbranch.component.html',
  styleUrl: './addbranch.component.scss'
})
export class AddbranchComponent {

  isEdit!: boolean;
  addBranch!: FormGroup;
  userId!: number;
  subscription!: Subscription;
  hotelIds!: number;
  listofHotel: any[] = [];

  constructor(
    private fb: FormBuilder,
    private toast: NgToastService,
    private adminser: LoginDataService,
    public dialogRef: MatDialogRef<AddbranchComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public updateData: any
  ) {
    this.store.dispatch(GetAllHotel());
    this.isEdit = updateData.isedit;

    this.addBranch = this.fb.group({
      hotelId: ['', Validators.required],
      branchName: ['', Validators.required],
      branchLocation: ['', Validators.required],
      branchPhoneNumber: ['', [Validators.required, Validators.pattern(Formvalidators.phone)]]
    })
  }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initializeUserId();
    this.getAllhotel();
    this.setFormValues(this.updateData)
  }

  get hotelid() {
    return this.addBranch.get('hotelId');
  }
  get branchname() {
    return this.addBranch.get('branchName');
  }
  get branchlocation() {
    return this.addBranch.get('branchLocation');
  }
  get branchphonenumber() {
    return this.addBranch.get('branchPhoneNumber');
  }

  private initializeUserId() {
    const idFromLocalStorage = this.adminser.getId();
    this.userId = idFromLocalStorage;
  }

  // get all hotel details
  getAllhotel() {
    this.subscription = this.store.select(GetAllHotelSelector).subscribe(
      (data: any) => {
        this.listofHotel = data.datas
      }
    )
  }

  // patch the values
  setFormValues(data: any) {
    this.addBranch.patchValue({
      hotelId: data.hotelId,
      branchName: data.branchName,
      branchLocation: data.branchLocation,
      branchPhoneNumber: data.branchPhoneNumber
    });
  }

  // save logic
  formBranchsubmit() {
    console.log(this.addBranch.value)
    let branchdata = this.addBranch.value

    if (this.addBranch.valid) {
      this.store.dispatch(PostNewBranch({ payload: branchdata }));
      this.subscription = this.store.select(AddBranchSelector).subscribe((data: any) => {
        console.log(data)
        if (data.error == true) {
          this.onClose();
          this.toast.success('Branch Added', 'Success', 3000);
          this.subscription.unsubscribe();
        }
      })
    }
    else {
      FormValidationCheck.ValidateallformFields(this.addBranch)
    }

  }

  // update logic
  updateBranch() {
    console.log(this.addBranch.value)
    let updateData = this.addBranch.value
    if (this.addBranch.valid) {
      this.store.dispatch(UpdateBranchData({ payload: updateData }));
      this.subscription = this.store.select(UpdateHotelBranchSelector).subscribe({
        next: (data: any)=>{
          if (data.error == true) {
            this.onClose();
            this.toast.success('Branch Updated', 'Success', 3000);
            this.subscription.unsubscribe();
          }
        }
      }
      )
    }
    else {
      FormValidationCheck.ValidateallformFields(this.addBranch)
    }

  }
  

}

