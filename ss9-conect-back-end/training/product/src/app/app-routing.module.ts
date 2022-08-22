import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from './product/product/product.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';


const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}