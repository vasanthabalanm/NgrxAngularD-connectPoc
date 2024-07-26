import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { GetBranchData } from '../../../hotel-branch/store/action/hotelbranch.action';
import { HotelBranchSelector } from '../../../hotel-branch/store/selector/hotelbranch.selector';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrl: './addmenu.component.scss'
})
export class AddmenuComponent implements OnInit {

  addmenu!:FormGroup;
  branchList!:any[];
  constructor(private dialogref:MatDialogRef<AddmenuComponent>,
              @Inject(MAT_DIALOG_DATA) public updateData:any,
              private fb:FormBuilder,
              private store:Store
            ){
    this.addmenu = this.fb.group({
      hotelBranchId:['',Validators.required],
      menuDetails:this.fb.array([])

    })
  }
  ngOnInit() {
    this.getAllBranch();
  }

  getAllBranch(){
    this.store.dispatch(GetBranchData())
    this.store.select(HotelBranchSelector).subscribe(
      (data: any) => {
        console.log(data)
        this.branchList = data.data
        console.log(this.branchList)
      }
    )
  }

  onClose(): void {
    this.dialogref.close();
  }

}
