import { Component, OnInit } from '@angular/core';
import { CartItemsService } from './../cart-items.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name:string;
  total:number;
  constructor(private cartItemsService:CartItemsService) { }

  ngOnInit(): void {
    this.name=this.cartItemsService.fullName;
    this.total=this.cartItemsService.total;
  }

}
