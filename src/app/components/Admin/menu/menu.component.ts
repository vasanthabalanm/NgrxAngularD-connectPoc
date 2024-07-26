import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { AddmenuComponent } from './modal/addmenu/addmenu.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menuList!:any;
  subscriptions!:Subscription;
  loading!:boolean;

  constructor(private store:Store,private toast :NgToastService,private matdialog:MatDialog){}

  openDialog(action:string,item?:any){
    let dialogref;
    if(action == 'edit'){
      dialogref = this.matdialog.open(AddmenuComponent,{
        width:'500px',
        height:'550px',
        data:{action:'edit',title:'Edit Menu',isEdit:true,...item}
      }).afterClosed().subscribe(()=>{
        // action dispatch and get selector
      })
    }
    else{
      dialogref = this.matdialog.open(AddmenuComponent,{
        width:'800px',
        height:'550px',
        data:{action:'add',title:'Add Menu',isEdit:false}
      }).afterClosed().subscribe(()=>{
        // same dispatch action,selector
      })
    }
  }

  ngOnInit() {

  }

  
  dataSource!:any;
  displayedColumns:string[]=['SI.No','ItemName','ItemQuantity','ItemFixedPrice','Edit','Delete'];

  // decline logic
  remove(data:any){
    console.log(data)
  }
}
