import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {CategoryEditComponent} from "./category-edit/category-edit.component";
import {CategoryComponent} from "./category/category.component";


@NgModule({
  declarations: [CategoryCreateComponent,
    CategoryEditComponent, CategoryComponent,],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule {
}
