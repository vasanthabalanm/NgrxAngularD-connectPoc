import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetTotalHotels } from './store/actions/counts.action';
import { TotalCountsSelector } from './store/selectors/counts.selector';
import { LoginDataService } from '../../login/_services/login-data.service';
import { GetBranchTotalCount } from './store/actions/branchCounts.action';
import { TotalBranchCountsSelector } from './store/selectors/branchCounts.selector';
import { GetPendingUserTotalCount } from './store/actions/pendinguser.action';
import { TotalPendingUserCountsSelector } from './store/selectors/pendingUser.Selector';
import { GetApprovedUserTotalCount } from './store/actions/approvedUser.action';
import { TotalApprovedUserCountsSelector } from './store/selectors/approvedUser.selector';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent implements OnInit {

  totalHotelCounts!:number;
  totalBranchCounts!:number;
  totalPendingUserCounts!:number;
  totalapprovedUserCounts!:number;
  userRole!:string;
  userEmail!:string;

  constructor(
    private store:Store,
    private adminservice:LoginDataService
  ){}


  ngOnInit() {
    this.store.dispatch(GetTotalHotels());
    this.store.dispatch(GetBranchTotalCount());
    this.store.dispatch(GetPendingUserTotalCount());
    this.store.dispatch(GetApprovedUserTotalCount())

    // hotel
    this.store.select(TotalCountsSelector).subscribe((data:any)=>{
      this.totalHotelCounts = data.datas
    })

    // branch
    this.store.select(TotalBranchCountsSelector).subscribe((data:any)=>{
      this.totalBranchCounts = data.datas
    })

    // pending user
    this.store.select(TotalPendingUserCountsSelector).subscribe((data:any)=>{
      console.log(data)
      this.totalPendingUserCounts = data.datas
    })

    // approved user
    this.store.select(TotalApprovedUserCountsSelector).subscribe((data:any)=>{
      this.totalapprovedUserCounts = data.datas
    })

    this.initializeUserData();

  }

  private initializeUserData() {
    const roleFromLocalStorage = this.adminservice.getRole();
    const emailFromLocalStorage = this.adminservice.getemail();
    console.log(roleFromLocalStorage);
    this.userRole = roleFromLocalStorage ;
    this.userEmail = emailFromLocalStorage;
  }



}
