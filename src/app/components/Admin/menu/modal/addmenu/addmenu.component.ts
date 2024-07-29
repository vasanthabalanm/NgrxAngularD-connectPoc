import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  addmenu!: FormGroup;
  branchList!: any[];
  isEdit !:boolean;

  constructor(private dialogref: MatDialogRef<AddmenuComponent>,
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private fb: FormBuilder,
    private store: Store
  ) {
    this.store.dispatch(GetBranchData())
    this.addmenu = this.fb.group({
      hotelBranchId: ['', Validators.required],
      menuDetails: this.fb.array([])

    })
  }
  ngOnInit() {
    this.getAllBranch();
    this.updateData.isEdit = this.isEdit
  }

  getAllBranch() {
    this.store.select(HotelBranchSelector).subscribe(
      (data: any) => {
        this.branchList = data.data
      }
    )
  }

  onClose(): void {
    this.dialogref.close();
  }

  get hotelbranchId(){
    return this.addmenu.get('hotelBranchId');
  }

  addMenuDatas(){
    const branchid = this.addmenu.get('hotelBranchId');
    const menuDetails = this.addmenu.get('menuDetails') as FormArray;

    menuDetails.push(
      this.fb.group({
        menuItems: ['', [Validators.required, this.nonamespaces]],
        menuQuantity: ['', Validators.required],
        price: ['', Validators.required],
        hotelBranchId: [branchid?.value ? +branchid.value : null, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]],
      })
    )
  }

  nonamespaces(menuname: AbstractControl) {
    const menuItems = menuname.value;
    if (menuItems && ((menuItems.startsWith(' ') || (menuItems.endsWith(' '))))) {
      return { nonamespaces: true }
    }
    return null;
  }

}
