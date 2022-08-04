import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { product } from '../models/Poduct';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products:Observable<product[]>;
 visitedProducts:string[]=[];
  constructor(private httpService:HttpService) { }
  addToVisited(name:string):void{
    this.visitedProducts.push(name);
    //alert(this.visitedProducts[this.visitedProducts.length-1]);
  }
  ngOnInit(): void {
    this.httpService.loadProducts();
    this.products=this.httpService.getProducts();

  }

}
