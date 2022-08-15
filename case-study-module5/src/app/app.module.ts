import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header/header.component';
import {FooterComponent} from './footer/footer/footer.component';
import { ListContratComponent } from './contract/list-contrat/list-contrat.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { ListFacilityComponent } from './facility/list-facility/list-facility.component';
import { CreateFacilityComponent } from './facility/create-facility/create-facility.component';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListContratComponent,
    CreateContractComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    HomeListComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
