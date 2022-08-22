import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeListComponent} from './home/home-list/home-list.component';

const routes: Routes = [{
  path: '',
  component: HomeListComponent
}, {
  path: 'customer',
  loadChildren: () => import('./customer/customer.module').then(customer => customer.CustomerModule)
}, {
  path: 'facility',
  loadChildren: () => import('./facility/facility.module').then(facility => facility.FacilityModule)
}, {
  path: 'contract',
  loadChildren: () => import('./contract/contract.module').then(contract => contract.ContractModule)
}];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
