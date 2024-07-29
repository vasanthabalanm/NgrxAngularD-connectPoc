import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../../../components/login/_services/login-data.service';
import { Store } from '@ngrx/store';
import { getpendingUserOrder } from './store/actions/getpendinguserOrder.actions';
import { GetPendingUserOrderSelector } from './store/selector/getpendinguserOrder.selector';
import { getapprovedUserOrder } from './store/actions/getapproveduserOrder.action';
import { GetApprovedUserOrderSelector } from './store/selector/getapproveduserOrder.selector';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent implements OnInit {

  userId!:number;

  constructor(private adminser:LoginDataService,private store:Store){}

  ngOnInit() {
    this.getUserId();
    this.getPendingOrder(this.userId);
    this.getapprovedOrder(this.userId)
  }

  pendingColumnNames:string[] = ['menuItemName','quantityofOrder','totalPrice','orderStatus']

  approvedColumnNames:string[] = ['menuItemName','quantityofOrder','totalPrice','orderStatus']

  pendinOrderList!:any;
  approvedOrderList!:any;

  getUserId(){
    const userid = this.adminser.getId();
    this.userId = userid;
  }

  getPendingOrder(uid:number){
    let id = uid;
    this.store.dispatch(getpendingUserOrder({payload:id}));
    this.store.select(GetPendingUserOrderSelector).subscribe(
      (data:any)=>{
        if(data.error){
          console.log(data)
        }
        else{
          this.pendinOrderList = data.responseOrderData
        }
      }
    )
  }

  getapprovedOrder(uid:number){
    let id = uid;
    this.store.dispatch(getapprovedUserOrder({payload:id}));
    this.store.select(GetApprovedUserOrderSelector).subscribe(
      (data:any)=>{
        if(data.error){
          console.log(data)
        }
        else{
          this.approvedOrderList = data.responseData
        }
      }
    )
  }

}
