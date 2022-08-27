import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicalRecordComponent} from "./medical/medical-record/medical-record.component";
import {CreateComponent} from "./medical/create-medical/create.component";
import {EditMedicalComponent} from "./medical/edit-medical/edit-medical.component";


const routes: Routes = [{
  path:'',component:MedicalRecordComponent
},{path:'benhAn/create',component:CreateComponent},
  {path:'benhAn/update/:id',component:EditMedicalComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
