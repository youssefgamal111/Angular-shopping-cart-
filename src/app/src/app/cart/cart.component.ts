import { Component, OnInit } from '@angular/core';
import { cartItem } from './../models/cartItem';
import { CartItemsService } from './../cart-items.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  fullName:string;address:string;
  creditCard:string;
  items:cartItem[]=[];
  total:number;
  constructor(private cartItemsService:CartItemsService,private route:Router) { }
  updateTotal():void{
    this.total=this.cartItemsService.GetTotal();
  }
  ngOnInit(): void {
    this.total=this.cartItemsService.total;
    this.items=this.cartItemsService.getCartItems();
  }
  addItemAmount(i:cartItem):void{
this.cartItemsService.addItemAmountCheck(1,i);
this.total=this.cartItemsService.total;
  }
subItemAmount(i:cartItem){
  this.cartItemsService.subItemAmountCheck(1,i);
  console.log(i.amount)
  if(i.amount==0)this.items=this.cartItemsService.getCartItems();
  this.total=this.cartItemsService.total;

}
onSubmit():void{
 this.cartItemsService.fullName= this.fullName;
  this.cartItemsService.address=this.address;
 this.cartItemsService.creditCard= this.creditCard;
  this.route.navigate(['/confirmation']);
}
validateCredit():void{
  const rExp : RegExp = /^[0-9]*$/;
if(rExp.test(this.creditCard)==false)alert("Credit card field must only accept numbers as a valid input");
}
}
