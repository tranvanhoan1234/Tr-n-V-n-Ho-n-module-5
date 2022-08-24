import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FacilityRoutingModule} from './facility-routing.module';
import {ListFacilityComponent} from './list-facility/list-facility.component';
import {CreateFacilityComponent} from './create-facility/create-facility.component';
import {EditFacilityComponent} from './edit-facility/edit-facility.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListFacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule {
}
