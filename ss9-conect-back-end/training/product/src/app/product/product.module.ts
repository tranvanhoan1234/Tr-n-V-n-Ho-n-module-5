import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from "./product/product.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";


@NgModule({
  declarations: [ProductComponent,
    ProductCreateComponent,
    ProductEditComponent,],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule {
}
