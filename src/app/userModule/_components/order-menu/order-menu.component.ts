import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMenuData } from './store/actions/getMenuData.actions';
import { GetmenuDataSelector } from './store/selector/getMenuData.selector';
import { MatDialog } from '@angular/material/dialog';
import { AddcartcountsComponent } from './modal/addcartcounts/addcartcounts.component';
import { AddcartService } from './service/addcart.service';
import { GetCartListSelector } from './store/selector/getcartDetails.selector';
import { removeCart, removeCartwithpayload } from './store/actions/getcartDetails.actions';
import { AddCartItem } from './store/actions/addcart.actions';
import { AddCartItemSelector } from './store/selector/addcart.selector';
import { Subscription } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrl: './order-menu.component.scss'
})
export class OrderMenuComponent implements OnInit {


  constructor(private store: Store, public dialog: MatDialog, private toast: NgToastService) { }
  ngOnInit() {
    this.store.dispatch(getMenuData())
    this.getMenuDatas();

  }

  menuItems!: any;
  menuHeading: string[] = ['pics', 'menuName', 'branchName', 'location', 'Price', 'Cart']
  cartHeading: string[] = ['menuName', 'branchLocation', 'quantityCounts', 'price', 'delete']
  cartItemList!: any[];
  cartItem!: any[];
  subscription!: Subscription;
  count!: number;

  getMenuDatas() {
    this.store.select(GetmenuDataSelector).subscribe(
      (data: any) => {
        if (data.error) {
        }
        else {
          this.menuItems = data.responseData
        }
      }
    )
  }

  // add cart
  openDialog(data: any) {
    let diaglogref = this.dialog.open(AddcartcountsComponent, {
      width: '500px',
      height: '300px',
      data: { action: 'addcount', title: 'Add Quantity', ...data }
    }).afterClosed().subscribe(() => {
      this.store.select(GetCartListSelector).subscribe((data: any) => {
        if (data.error) {
        }
        else {
          this.cartItemList = data.cartDatas
        }
      })
    })
  }

  // get cartdata from service class

  deletecartDataItem(data: any): void {
    this.store.dispatch(removeCartwithpayload({ payload: data }))
    this.store.select(GetCartListSelector).subscribe((data: any) => {
      if (data.error) {
      }
      else {
        this.cartItemList = data.cartDatas
      }
    })
  }


  PlaceOrder() {

    for (const item of this.cartItemList) {
      const { approvedUsersId, hotelBranchId, menuDetailsId, quantityOfOrder, totalPrice, orderStatus } = item;

      const orderToAdd = {
        approvedUsersId,
        hotelBranchId,
        menuDetailsId,
        quantityOfOrder,
        totalPrice,
        orderStatus
      };
      this.store.dispatch(AddCartItem({ payload: orderToAdd }))
    }
    this.subscription = this.store.select(AddCartItemSelector).subscribe((data: any) => {
      if (data.error) {
      }
      else if (data.error != null) {
        this.toast.success('Ordered', 'Success', 3000)
        this.store.dispatch(removeCart());
        this.subscription = this.store.select(GetCartListSelector).subscribe(
          (data:any)=>{
          this.cartItemList = data.cartDatas
        })
        this.subscription.unsubscribe();
      }
    })
  }
}
