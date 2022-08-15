import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './practice1/font-size/font-size.component';
import {FormsModule} from "@angular/forms";
import { PetComponent } from './practice1/pet/pet.component';
import { ProductComponent } from './practice1/product/product.component';
import { CalculatorComponent } from './training1/calculator/calculator.component';
import { ColorPickerComponent } from './training1/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    ProductComponent,
    CalculatorComponent,
    ColorPickerComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
