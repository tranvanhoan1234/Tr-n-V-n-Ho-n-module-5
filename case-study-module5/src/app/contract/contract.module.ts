import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ListContratComponent} from './list-contrat/list-contrat.component';
import {CreateContractComponent} from './create-contract/create-contract.component';


@NgModule({
  declarations: [
    ListContratComponent,
    CreateContractComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,

  ]
})
export class ContractModule { }
