import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, observable } from 'rxjs';
import { product } from './models/Poduct';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  products:product[]=[];
  productsObservable=new BehaviorSubject<product[]>([]);
  constructor(private http:HttpClient) { }

  loadProducts():void{
     this.http.get<product[]>('../assets/data.json').subscribe(r=>{
       this.products=r;
       this.productsObservable.next(this.products);//for other component to rerender

    
    });
  }
  getProducts():Observable<product[]>{
    return this.productsObservable.asObservable();

  }
  getProduct(id:number):product{
    return this.products.filter(e=>e.id==id)[0];
  }
  
}
