import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MedicalRecordComponent } from './medical/medical-record/medical-record.component';
import { CreateComponent } from './medical/create-medical/create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditMedicalComponent } from './medical/edit-medical/edit-medical.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MedicalRecordComponent,
    CreateComponent,
    EditMedicalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
