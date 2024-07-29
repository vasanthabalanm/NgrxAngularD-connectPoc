import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrl: './order-menu.component.scss'
})
export class OrderMenuComponent implements OnInit {
  constructor(private store:Store){

  }
  ngOnInit() {
  }

  menuItems!:any;
  

}
