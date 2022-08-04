import { Component, OnInit } from '@angular/core';
import { product } from './../models/Poduct';
import { HttpService } from './../http.service';
import { cartItem } from './../models/cartItem';
import { ActivatedRoute } from '@angular/router';
import { CartItemsService } from '../cart-items.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  product:product;
  val:string="1";
  cart:cartItem;
  id:number;
  constructor(private productService:HttpService,private route:ActivatedRoute,private cartItemsService:CartItemsService) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params=>{
   this.id= parseInt(params.get('id')!);
      this.product=this.productService.getProduct(this.id);
     
    })
  }
  addToCart():void{
    
    this.cartItemsService.addItemAmount(parseInt(this.val),this.product);
    alert("Added to cart!");
       
  }

}
