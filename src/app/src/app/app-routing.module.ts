import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
const routes: Routes = [
  { path: '', component:ProductListComponent },
  { path: 'product/:id', component:ProductItemDetailsComponent },
  {path:'cart',component:CartComponent},
  {path:'confirmation',component:ConfirmationComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule { }
