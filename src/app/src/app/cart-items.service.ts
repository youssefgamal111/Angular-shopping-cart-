import { Injectable } from '@angular/core';
import { cartItem } from './models/cartItem';
import { product } from './models/Poduct';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  items:cartItem[]=[]
  total:number=0;
  fullName:string;address:string;creditCard:string;
  constructor() { }
  addItemToCart(p:product,val:number):void{
    let cart = new cartItem();
    cart.name=p.name;cart.price=p.price;cart.amount=val;cart.url=p.url;
        
    this.items.push(cart);
  }
  subItemAmountCheck(N:number,item:cartItem):void{
    if(item.amount==1){this.items=this.items.filter(e=>e.name!=item.name);alert("Removed From Cart")}
    item.amount=item.amount-N;
  this.total-=item.price;
  this.total=parseFloat(this.total.toFixed(2));
  }
  addItemAmountCheck(N:number,item:cartItem):void{
    item.amount=item.amount+1;
  this.total+=(item.price);
  this.total=parseFloat(this.total.toFixed(2));
  }

  addItemAmount(N:number,item:product){
    let found:boolean=false;
  this.items.forEach(e=> {
    if(e.name==item.name){e.amount+=N;found=true;}
  });
  if(!found)this.addItemToCart(item,N);
  this.total+=(item.price*N);
  
}
getCartItems():cartItem[]{
  return this.items;
}
GetTotal():number{
  this.total=0;
this.items.forEach(element =>
   {
     this.total+=element.amount*element.price;
    });
    return this.total;
}

}