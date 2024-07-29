import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { GetApprovedUser } from './store/action/approvedUser.action';
import { ApprovedUserSelector } from './store/selector/approvedUser.selector';
import { MatTableDataSource } from '@angular/material/table';
import { ApprovedUserData } from '../model/ApprovedUser.interface';
import { deleteapproveUser } from './store/action/deleteapprovedUser.action';
import { DeleteApprovedUserSelector } from './store/selector/deleteapprovedUser.selector';
import { GetApprovedUserTotalCount } from '../admin-home/store/actions/approvedUser.action';

@Component({
  selector: 'app-approved-request',
  templateUrl: './approved-request.component.html',
  styleUrl: './approved-request.component.scss'
})
export class ApprovedRequestComponent {

  approvedUserList!:any;
  subscriptions!:Subscription;
  loading!:boolean;

  constructor(private store:Store,private toast :NgToastService){
    this.GetApprovedUserData();
  }

  ngOnInit() {
    this.store.dispatch(GetApprovedUser());
    this.GetApprovedUserData();

  }

  GetApprovedUserData(){
    this.store.select(ApprovedUserSelector).subscribe((data:any)=>{
      this.approvedUserList = data.responseData
      this.loading  = data.loaded
      this.dataSource = new MatTableDataSource<ApprovedUserData>(this.approvedUserList)
    })
  }

  dataSource!:any;
  displayedColumns:string[]=['Name','Mail','Role','PhoneNumber','Decline'];

  // decline logic
  // decline(id:number){
  //   console.log(id)
  //   if(confirm("Are you sure to delete?")){
  //     this.store.dispatch(deleteapproveUser({payload:id}))
  //     this.subscriptions = this.store.select(DeleteApprovedUserSelector).subscribe((data:any)=>{
  //       console.log(data)
  //         if(data.loading != true){
  //           if(data.responsedata.message == 'ApprovedUser has been deleted'){
  //             this.toast.success('Deleted','Success',3000);
  //             this.store.dispatch(GetApprovedUser());
  //             this.GetApprovedUserData();
  //             this.store.dispatch(GetApprovedUserTotalCount())
  //             this.subscriptions.unsubscribe();
  //           }
  //           else if (data.error != 'ApprovedUser has been deleted' || data.error != true || data.error != false){
  //             this.toast.danger('Something went Wrong','Error',3000)
  //             this.subscriptions.unsubscribe();
  //           }
  //         }
        
  //     })
  //   }
    
  // }

  decline(id:number){
    if(confirm("Are you sure to delete?")){
      this.store.dispatch(deleteapproveUser({payload:id}))
      this.subscriptions = this.store.select(DeleteApprovedUserSelector).subscribe({
        next:(data:any)=>{
          if(data.loading != true){
            if(data.responsedata.message == 'ApprovedUser has been deleted'){
              this.toast.success('Deleted','Success',3000);
              this.store.dispatch(GetApprovedUser());
              this.GetApprovedUserData();
              this.store.dispatch(GetApprovedUserTotalCount())
              this.subscriptions.unsubscribe();
            }
            else if (data.error != 'ApprovedUser has been deleted' || data.error != true || data.error != false){
              this.toast.danger('Something went Wrong','Error',3000)
              this.subscriptions.unsubscribe();
            }
          }
        },
        error:(error:any)=>{
          this.toast.danger(error,'Error',3000)
        }
      })
    }
    
  }
}
