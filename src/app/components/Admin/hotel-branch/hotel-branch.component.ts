import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Branch } from '../model/branch.interface';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { LoginDataService } from '../../login/_services/login-data.service';
import { NgToastService } from 'ng-angular-popup';
import { AddbranchComponent } from './models/addbranch/addbranch.component';
import { HotelBranchSelector } from './store/selector/hotelbranch.selector';
import { MatTableDataSource } from '@angular/material/table';
import { GetBranchData } from './store/action/hotelbranch.action';
import { GetBranchTotalCount } from '../admin-home/store/actions/branchCounts.action';
import { DeleteHotebranch } from './store/action/deletehotelBranch.action';
import { DeleteHotelBranchSelector } from './store/selector/deleteHotelBranch.selector';

@Component({
  selector: 'app-hotel-branch',
  templateUrl: './hotel-branch.component.html',
  styleUrl: './hotel-branch.component.scss'
})
export class HotelBranchComponent implements OnInit {

  subscriptions!: Subscription;
  branchList!: any[];
  branchData!: Branch[];
  datasource: any;
  isLoading!: boolean;
  loginUserId!: number;
  loginUserRole!: string;

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private adminservice: LoginDataService,
    private toast: NgToastService
  ) {
    this.store.dispatch(GetBranchData())
  }
  ngOnInit() {
    this.initializeUserData();
    this.GetBranchAllData();
  }

  private initializeUserData() {
    const IdFromLocalStorage = this.adminservice.getId();
    const RoleFromLocal = this.adminservice.getRole();
    this.loginUserId = IdFromLocalStorage || 'null';
    this.loginUserRole = RoleFromLocal || 'null'
  }

  // add and edit popup
  openDialog(action: string, item?: any): void {
    let dialogRef;
    if (action === 'edit') {
      dialogRef = this.dialog.open(AddbranchComponent, {
        width: '500px',
        height: '550px',
        data: { action: 'edit', title: 'Edit Branch', isedit: true, ...item }
      })
        .afterClosed().subscribe(() => {
          this.store.dispatch(GetBranchData())
          this.store.dispatch(GetBranchTotalCount())
          this.GetBranchAllData()
        })
    } else {
      dialogRef = this.dialog.open(AddbranchComponent, {
        width: '500px',
        height: '550px',
        data: { action: 'add', title: 'Add Branch', isedit: false }
      }).afterClosed().subscribe(() => {
        this.store.dispatch(GetBranchData())
        this.store.dispatch(GetBranchTotalCount())
        this.GetBranchAllData()
      });
    }
  }

  displayedColumns: string[] = ['id', 'branchName', 'branchLocation', 'branchPhoneNumber', 'edit', 'delete'];


  GetBranchAllData() {

    this.subscriptions = this.store.select(HotelBranchSelector).subscribe(
      (data: any) => {
        console.log(data)
        this.isLoading = data.loaded
        this.branchList = data.data
        console.log(this.branchList)
        this.datasource = new MatTableDataSource<Branch>(this.branchList)
      }
    )
  }

  deleteBranch(data: any) {
    let removeData = { id: data.id, hotelId: data.hotelId }
    console.log(removeData);
    if (confirm("Are you sure to delete Hotel Branch?")) {
      this.store.dispatch(DeleteHotebranch({ payload: removeData }));
      this.subscriptions = this.store.select(DeleteHotelBranchSelector).subscribe(
        (data: any) => {
          if (data.error == true) {
            this.store.dispatch(GetBranchData())
            this.store.dispatch(GetBranchTotalCount())
            this.GetBranchAllData()
          }
        }
      )
    }
  }

}
