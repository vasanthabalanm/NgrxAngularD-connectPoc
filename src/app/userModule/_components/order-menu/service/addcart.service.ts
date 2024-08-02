import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {

  constructor() { }

  private cartItemData:any[]=[]

  getCartDatas():any[]{
    return this.cartItemData;
  }

  removeCartData(index:number){
    this.cartItemData.splice(index,1)
  }

  addCartData(item:any){
    this.cartItemData.push(item)
  }

  clearCartData(){
    this.cartItemData = [];
  }
}
