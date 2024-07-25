import { ChangeDetectionStrategy, Component, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { LoginDataService } from '../../login/_services/login-data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddhotelmodalComponent } from './models/addhotelmodal/addhotelmodal.component';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GetAllHotel } from './store/actions/hotel.actions';
import { GetAllHotelSelector } from './store/selector/hotel.selector';
import { Hotel } from '../model/hotel.interface';
import { MatTableDataSource } from '@angular/material/table';
import { GetTotalHotels } from '../admin-home/store/actions/counts.action';
import { DeleteHotel } from './store/actions/hoteldelete.action';
import { HotelDeleteSelector } from './store/selector/hoteldelete.selector';
import { GetTotalCounts } from '../admin-home/store/reducer/counts.reducer';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss',
})
export class HotelComponent implements OnInit {

  subscriptions!:Subscription;
  hotelsList!:any[];
  hoteData!:Hotel[];
  datasource:any;
  isLoading!:boolean;
  loginUserId!:number;
  loginUserRole!:string;

  constructor(
    public dialog: MatDialog,
    private store:Store<{getallHotelResponse:any}>,
    private adminservice:LoginDataService,
    private toast:NgToastService
  ) {
    this.store.dispatch(GetAllHotel());
  }
  ngOnInit() {
    this.GetHotelsData();
    this.initializeUserData();
  }

  openDialog(action: string, item?: any) {
    let dialogRef;
    if (action === 'edit') {
      dialogRef = this.dialog.open(AddhotelmodalComponent, {
        width: '500px',
        height:'300px',
        data: { action: 'edit', title: 'Edit Hotel',isedit:true, ...item }
      })
      .afterClosed().subscribe(()=>{
        this.store.dispatch(GetAllHotel())
        this.GetHotelsData()
      })
    } else {
      dialogRef = this.dialog.open(AddhotelmodalComponent, {
        width: '500px',
        height:'300px',
        data: { action: 'add', title: 'Add Hotel',isedit:false }
      });
    }
  }

  GetHotelsData(){

    this.subscriptions = this.store.select(GetAllHotelSelector).subscribe(
      (data:any)=>{
        console.log(data)
        this.isLoading = data.loaded
        this.hotelsList = data.datas
        console.log(this.hotelsList)
        this.datasource = new MatTableDataSource<Hotel>(this.hotelsList)
      }
    )
  }
  displayedColumns: string[] = [ 'id','hotelName','edit','delete'];

  deleteHotel(id:number){
    let deleteData = {id:id,role:this.loginUserRole}
    if(confirm('do you want to remove?')){
      this.store.dispatch(DeleteHotel({payload:deleteData}));
      this.subscriptions = this.store.select(HotelDeleteSelector).subscribe({
        next:(data:any)=>{
          console.log(data)
          if(data.error == true){
            // this.toast.success('Hotel deleted', 'Success', 3000);
            this.store.dispatch(GetAllHotel())
            this.GetHotelsData();
            this.store.dispatch(GetTotalHotels());
            this.subscriptions.unsubscribe();
          }
        },
        error:()=>{
          this.toast.danger('Hotel is not Deleted', 'Error', 3000);
          this.subscriptions.unsubscribe();
        }
      })
      
    }

  }

  private initializeUserData() {
    const IdFromLocalStorage = this.adminservice.getId();
    const RoleFromLocal = this.adminservice.getRole();
    this.loginUserId = IdFromLocalStorage || 'null';
    this.loginUserRole = RoleFromLocal || 'null'
  }
  
}