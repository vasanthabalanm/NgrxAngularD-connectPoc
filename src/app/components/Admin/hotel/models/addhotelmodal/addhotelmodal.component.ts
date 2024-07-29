import { Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { LoginDataService } from '../../../../login/_services/login-data.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PostHotel } from '../store/addhotel.action';
import { AddHotelSelector } from '../store/addhotel.selector';
import { FormValidationCheck } from '../../../../../validation/form-validation-check';
import { GetAllHotel, UpdateHotel } from '../../store/actions/hotel.actions';
import { GetTotalHotels } from '../../../admin-home/store/actions/counts.action';


@Component({
  selector: 'app-addhotelmodal',
  templateUrl: './addhotelmodal.component.html',
  styleUrl: './addhotelmodal.component.scss'
})
export class AddhotelmodalComponent {

  isEdit!:boolean;
  Addhotel: FormGroup;
  id!: number;
  subscription!: Subscription;
  hotelIds!:number;


  constructor(
    private fb: FormBuilder,
    private toast: NgToastService,
    private adminser: LoginDataService,
    public dialogRef: MatDialogRef<AddhotelmodalComponent>,
    private store: Store<{ PostHotel: any }>,
    @Inject(MAT_DIALOG_DATA) public updateData:any
  ) {
    this.Addhotel = this.fb.group({
      hotelName: ['', Validators.required]
    })
  }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initializeUserId();
    this.setFormValues(this.updateData)
  }

  get hotelname() {
    return this.Addhotel.get('hotelName');
  }

  // add logic
  formHotelsubmit() {
    let addhotl = { ...this.Addhotel.value, approvedUsersId: this.id }
    if (this.Addhotel.valid) {
      this.store.dispatch(PostHotel({ payload: addhotl }))
      this.subscription = this.store.select(AddHotelSelector).subscribe(
        {
          next: (data: any) => {
            if (data.error == false) {
              this.onClose();
              this.store.dispatch(GetAllHotel())
              this.store.dispatch(GetTotalHotels())
              this.toast.success('Hotel Added', 'Success', 3000);
              this.subscription.unsubscribe();
            }
            else if (data.error != true) {
              this.toast.danger('Something went wrong!', 'Error', 5000);
              this.subscription.unsubscribe();
            }
          },
          error: (err) => {
            const error = err.error;
            if (error) {
              this.toast.danger('Hotel already exists', 'Error', 5000)
            }
            else {
              this.toast.danger(error, 'Something went Wrong', 5000)
            }
          }
        }
      )
    }else {
      FormValidationCheck.ValidateallformFields(this.Addhotel);
    }
  }

  private initializeUserId() {
    const idFromLocalStorage = this.adminser.getId();
    this.id = idFromLocalStorage;
  }

  // patch the values
  setFormValues(data: any) {
    this.hotelIds = data.id;
    this.Addhotel.patchValue({
      hotelName: data.hotelName
    });
  }

  // update logic
  updateHotel(){
    let updthotl = { ...this.Addhotel.value, approvedUsersId: this.id,id:this.hotelIds}
    if (this.Addhotel.valid) {
      this.store.dispatch(UpdateHotel({ payload: updthotl }))
      this.subscription = this.store.select(AddHotelSelector).subscribe(
        {
          next: (data: any) => {
            if (data.error == false) {
              this.onClose()
              this.toast.success('Hotel Updated', 'Success', 3000);
            }
            else if (data.error != true) {
              this.toast.danger('Something went wrong!', 'Error', 5000);
            }
          },
          error: (err) => {
            const error = err.error;
            if (error) {
              this.toast.danger('Hotel already exists', 'Error', 5000)
            }
            else {
              this.toast.danger(error, 'Something went Wrong', 5000)
            }
          }
        }
      )
    }else {
      FormValidationCheck.ValidateallformFields(this.Addhotel);
    }
  }
}
