import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetPendingUserData } from './store/actions/getPendinguserData.actions';
import { GetPendingUserDataSelector } from './store/selector/getPendingUserData.selector';
import { MatTableDataSource } from '@angular/material/table';
import { PendingUser } from '../model/pendingUser.interface';
import { postNewUser } from './store/actions/postnewUser.actions';
import { Subscription } from 'rxjs';
import { PostNewUserSelector } from './store/selector/postnewUser.selector';
import { NgToastService } from 'ng-angular-popup';
import { deletePendingUser } from './store/actions/deletePendingUser.actions';
import { DeletePendingUserSelector } from './store/selector/deletePendingUser.selector';
import { GetPendingUserTotalCount } from '../admin-home/store/actions/pendinguser.action';
import { GetApprovedUserTotalCount } from '../admin-home/store/actions/approvedUser.action';
import { GetApprovedUser } from '../approved-request/store/action/approvedUser.action';

@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrl: './pending-request.component.scss'
})
export class PendingRequestComponent implements OnInit {

  pendingUserList!:any;
  subscriptions!:Subscription;
  loading!:boolean;
  pendingId!:number;

  constructor(private store:Store,private toast :NgToastService){}

  ngOnInit() {
    this.store.dispatch(GetPendingUserData());
    this.GetPendigData();

  }

  GetPendigData(){
    this.store.select(GetPendingUserDataSelector).subscribe((data:any)=>{
      this.pendingUserList = data.responseData
      this.loading  = data.loader
      this.dataSource = new MatTableDataSource<PendingUser>(this.pendingUserList)
    })
  }

  dataSource!:any;
  displayedColumns:string[]=['Name','Mail','Role','PhoneNumber','Approve','Decline'];

  // approve logic
  approve(data:any){
    this.pendingId = data.id
    let newUser = {...data,id:0};
    this.store.dispatch(postNewUser({payload:newUser}))
    this.subscriptions = this.store.select(PostNewUserSelector).subscribe(
      (data:any)=>{
        if(data.loader != true){
          this.toast.success('User Approved','Success',3000);
          this.approveReject(this.pendingId)
          this.store.dispatch(GetPendingUserTotalCount());
          this.store.dispatch(GetApprovedUserTotalCount());
          this.subscriptions.unsubscribe();
        }
        else if (data.error != false){
          this.toast.danger('Somethimg Went wrong','Error',3000)
        }
      }
    )
  }

  // decline logic
  decline(id:number){
    if(confirm("Are you sure to delete?")){
      this.store.dispatch(deletePendingUser({payload:id}))
      this.subscriptions = this.store.select(DeletePendingUserSelector).subscribe((data:any)=>{
          if(data.loading != true){
            if(data.responseData.message == 'PendingUser has been deleted'){
              this.toast.success('Deleted','Success',3000);
              this.store.dispatch(GetPendingUserData());
              this.GetPendigData();
              this.store.dispatch(GetPendingUserTotalCount());
              this.store.dispatch(GetApprovedUserTotalCount());
              this.subscriptions.unsubscribe();
            }
            else if (data.error != 'PendingUser has been deleted' || data.error != true || data.error!=null || data.error != undefined){
              this.toast.danger('Something went Wrong','Error',3000)
              this.subscriptions.unsubscribe();
            }
          }
        
      })
    }
  }

  // decline logic
  approveReject(id:number){
    this.store.dispatch(deletePendingUser({payload:id}))
    this.store.select(DeletePendingUserSelector).subscribe((data:any)=>{
      if(data.loading != true){
        if(data.responseData.message == 'PendingUser has been deleted'){
          this.store.dispatch(GetPendingUserData());
          this.GetPendigData();
          this.store.dispatch(GetApprovedUser());
          this.store.dispatch(GetPendingUserTotalCount());
          this.store.dispatch(GetApprovedUserTotalCount());
        }
      }
    })
  }

}
