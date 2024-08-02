import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginDataService } from '../../../../../components/login/_services/login-data.service';
import { AddcartService } from '../../service/addcart.service';
import { Store } from '@ngrx/store';
import { addcartData } from '../../store/actions/getcartDetails.actions';

@Component({
  selector: 'app-addcartcounts',
  templateUrl: './addcartcounts.component.html',
  styleUrl: './addcartcounts.component.scss'
})
export class AddcartcountsComponent {

  AddOrder!:FormGroup;
  orderCount: number = 1;
  userId!:number;
  constructor(private dialog:MatDialogRef<AddcartcountsComponent>,@Inject(MAT_DIALOG_DATA) public datas:any,private fb:FormBuilder,private adminser:LoginDataService,private addcarts:AddcartService,private store:Store)
  {
    this.AddOrder = this.fb.group({
      quantityOfOrder: new FormControl(this.orderCount, Validators.required)
    });

    this.getUserID();
  }

  incrementOrderCount() {
    this.orderCount++;
    this.AddOrder.get('quantityOfOrder')?.setValue(this.orderCount);
  }

  decrementOrderCount() {
    if (this.orderCount > 1) {
      this.orderCount--;
      this.AddOrder.get('quantityOfOrder')?.setValue(this.orderCount);
    }
  }


  onClose(): void {
    this.dialog.close();
  }

  getUserID(){
    this.userId = this.adminser.getId();
  }

  // confirm submit
  formOrdersubmit(){
    if (this.AddOrder.valid) {
      let vlaue = this.datas
      let updateValue = this.AddOrder.value
      let orderCount = updateValue.quantityOfOrder
      let totalPrice = orderCount * vlaue.price;
      
      let CompleteValue = {
        approvedUsersId: this.userId,
        menuItems: vlaue.menuItems,
        totalPrice: totalPrice,
        hotelBranchId: vlaue.hotelBranchId,
        quantityOfOrder: orderCount,
        branchLocation: vlaue.branchLocation,
        menuDetailsId: vlaue.id,
        orderStatus: 'Pending',
        id:0
      }
      this.addToCart(CompleteValue);
    }
  }

  // cart traack items
  addToCart(item: any): void {
    this.store.dispatch(addcartData({payload:item}))
    this.onClose()
  }
}
