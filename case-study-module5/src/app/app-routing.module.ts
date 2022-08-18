import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {HomeListComponent} from './home/home-list/home-list.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';
import {ListContratComponent} from './contract/list-contrat/list-contrat.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: '', component: HomeListComponent},
  {path: 'customer/list', component: ListCustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'customer/edit', component: EditCustomerComponent},
  {path: 'facility/list', component: ListFacilityComponent},
  {path: 'facility/create', component: CreateFacilityComponent},
  {path: 'facility/edit', component: EditFacilityComponent},
  {path: 'contract/list', component: ListContratComponent},
  {path: 'contract/create', component: CreateContractComponent},

];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
