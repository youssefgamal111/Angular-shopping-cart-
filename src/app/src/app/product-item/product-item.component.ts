import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CartItemsService } from '../cart-items.service';
import { cartItem } from '../models/cartItem';
import { product } from './../models/Poduct';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() bookdata:product;
  @Output() lastItemClicked=new EventEmitter();
  val:string="1";
  cart:cartItem;
  constructor(private productService:HttpService ,private CartItemsService:CartItemsService) { }
  onSubmit():void{
        this.CartItemsService.addItemAmount(parseInt(this.val),this.bookdata);

        alert("Added to cart!");
  }
  ngOnInit(): void {
  }

}
