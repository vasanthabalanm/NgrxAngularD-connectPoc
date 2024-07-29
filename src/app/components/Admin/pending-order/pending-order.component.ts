import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetPendingOrder } from './store/actions/pendingOrder.action';
import { GetPendingOrderSelector } from './store/selector/pendingOrder.selector';
import { LoginDataService } from '../../login/_services/login-data.service';
import { ApproveOrder } from './store/actions/approvePendingOrder.actions';
import { Subscription } from 'rxjs';
import { ApproveOrderSelector } from './store/selector/approvePendingOrder.selector';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrl: './pending-order.component.scss'
})
export class PendingOrderComponent implements OnInit {

  getPendingOrderList:any;
  role!:string;
  loading!:boolean;

  columnNames:string[]=['menuName','branchName','quantity','totalPrice','orderStatus','approve']
  subscriptions!:Subscription;

  constructor(private store:Store,private adminser:LoginDataService,private toast:NgToastService){
    this.store.dispatch(GetPendingOrder())
  }

  ngOnInit() {
    this.getPendingOrder()
    this.role = this.adminser.getRole();
  }

  getPendingOrder(){
    this.store.select(GetPendingOrderSelector).subscribe(
      (data:any)=>{
        // console.log(data["getorderStatus"])
        this.getPendingOrderList = data.getorderStatus;
      }
    )
  }

  // approve
  approve(data:any){
    const updatedata = {id:data.id,role:this.role}
    this.store.dispatch(ApproveOrder({payload:updatedata}));
    this.subscriptions = this.store.select(ApproveOrderSelector).subscribe(
      (data:any)=>{
        if(data.error){
          this.toast.danger(data.error,'Error',3000)
          this.subscriptions.unsubscribe();
        }
        else{
          if(data.error !=null){
            this.toast.success('Approved','Success',3000)
            this.store.dispatch(GetPendingOrder());
            this.getPendingOrder();
            this.subscriptions.unsubscribe();
          }
        }
      }
    )
  }

}
