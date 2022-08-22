import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListContratComponent} from './list-contrat/list-contrat.component';
import {CreateContractComponent} from './create-contract/create-contract.component';


const routes: Routes = [{
  path: 'list',
  component:  ListContratComponent
}, {
  path: 'create',
  component:  CreateContractComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
