import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrl: './addmenu.component.scss'
})
export class AddmenuComponent {

  constructor(private dialogref:MatDialogRef<AddmenuComponent>,@Inject(MAT_DIALOG_DATA) public updateData:any){}

  onClose(): void {
    this.dialogref.close();
  }

}
