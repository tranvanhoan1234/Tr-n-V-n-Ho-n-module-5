import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './practice1/font-size/font-size.component';
import {FormsModule} from "@angular/forms";
import { PetComponent } from './practice1/pet/pet.component';
import { ProductComponent } from './practice1/product/product.component';
import { CalculatorComponent } from './exercise/calculator/calculator.component';
import { ColorPickerComponent } from './exercise/color-picker/color-picker.component';
import { LikeComponent } from './practice1/hackernews/like/like.component';
import { NabarComponent } from './practice1/hackernews/nabar/nabar.component';
import { FooterComponent } from './practice1/hackernews/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    ProductComponent,
    CalculatorComponent,
    ColorPickerComponent,
    LikeComponent,
    NabarComponent,
    FooterComponent,
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
